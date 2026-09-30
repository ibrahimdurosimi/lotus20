// Prevent tsx injected globalThis.__dirname='.' from breaking Vite config & plugins
delete (globalThis as any).__dirname;

import express from 'express';
import http from 'http';
import { createServer as createViteServer, createLogger } from 'vite';
import { GoogleGenAI } from '@google/genai';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;

  app.use(express.json());

  // In-memory cache for generated TTS audio to ensure instant replay
  const audioCache = new Map<string, { audioBase64: string; mimeType: string }>();

  // API endpoint for authentic Nigerian Female Voice Over
  app.post('/api/tts', async (req, res) => {
    try {
      const { text } = req.body;
      if (!text || typeof text !== 'string') {
        return res.status(400).json({ error: 'Text is required' });
      }

      const trimmedText = text.trim();
      if (!trimmedText) {
        return res.status(400).json({ error: 'Text cannot be empty' });
      }

      if (audioCache.has(trimmedText)) {
        const cached = audioCache.get(trimmedText)!;
        return res.json({ audio: cached.audioBase64, mimeType: cached.mimeType });
      }

      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        return res.status(500).json({ error: 'GEMINI_API_KEY not configured' });
      }

      const ai = new GoogleGenAI();
      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash-tts',
        contents: trimmedText,
        config: {
          responseModalities: ['AUDIO'],
          speechConfig: {
            voiceConfig: {
              prebuiltVoiceConfig: { voiceName: 'Aoede' }
            }
          }
        }
      });

      const part = response.candidates?.[0]?.content?.parts?.[0]?.inlineData;
      if (!part?.data) {
        return res.status(500).json({ error: 'Failed to generate voice audio' });
      }

      const result = {
        audioBase64: part.data,
        mimeType: part.mimeType || 'audio/wav'
      };

      if (audioCache.size > 150) {
        const firstKey = audioCache.keys().next().value;
        if (firstKey) audioCache.delete(firstKey);
      }
      audioCache.set(trimmedText, result);

      return res.json({ audio: result.audioBase64, mimeType: result.mimeType });
    } catch (err: any) {
      console.error('Error generating Nigerian TTS:', err);
      return res.status(500).json({ error: err.message || 'TTS generation failed' });
    }
  });

  // Admin moderation dashboard routes
  app.get(['/admin', '/admin.html'], (_req, res) => {
    const adminPath = process.env.NODE_ENV === 'production'
      ? path.resolve(__dirname, 'dist', 'admin.html')
      : path.resolve(__dirname, 'admin.html');
    res.sendFile(adminPath);
  });

  const httpServer = http.createServer(app);

  // Mount Vite in development mode
  if (process.env.NODE_ENV !== 'production') {
    const customLogger = createLogger();
    const origError = customLogger.error;
    customLogger.error = (msg, options) => {
      if (typeof msg === 'string' && (msg.includes('WebSocket') || msg.includes('ws error') || msg.includes('Port 24678'))) {
        return;
      }
      origError(msg, options);
    };

    const vite = await createViteServer({
      customLogger,
      server: {
        middlewareMode: true,
        ws: {
          server: httpServer
        }
      },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  httpServer.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
