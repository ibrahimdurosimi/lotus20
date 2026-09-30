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

  // Behind a reverse proxy/load balancer (Cloud Run, Render, Nginx…) set TRUST_PROXY=1
  // so rate limiting sees the real visitor IP rather than the proxy's.
  if (process.env.TRUST_PROXY) app.set('trust proxy', Number(process.env.TRUST_PROXY) || 1);

  app.use(express.json({ limit: '4kb' }));

  // ---- /api/tts abuse protection -------------------------------------------
  // Narration strings in the app are short. Anything longer is not ours.
  const TTS_MAX_CHARS = 800;
  // Uncached generations allowed per visitor IP per window, plus a global
  // ceiling so a botnet can't run up the Gemini bill. Cached replays are free.
  const TTS_WINDOW_MS = 10 * 60 * 1000;
  const TTS_PER_IP = Number(process.env.TTS_PER_IP) || 40;
  const TTS_GLOBAL_PER_HOUR = Number(process.env.TTS_GLOBAL_PER_HOUR) || 1500;
  const ipHits = new Map<string, { count: number; reset: number }>();
  let globalHits = { count: 0, reset: Date.now() + 60 * 60 * 1000 };

  function allowGeneration(ip: string): boolean {
    const now = Date.now();
    if (now > globalHits.reset) globalHits = { count: 0, reset: now + 60 * 60 * 1000 };
    if (globalHits.count >= TTS_GLOBAL_PER_HOUR) return false;
    let rec = ipHits.get(ip);
    if (!rec || now > rec.reset) {
      rec = { count: 0, reset: now + TTS_WINDOW_MS };
      ipHits.set(ip, rec);
    }
    if (rec.count >= TTS_PER_IP) return false;
    rec.count++;
    globalHits.count++;
    return true;
  }
  // Sweep expired IP records so the map can't grow without bound.
  setInterval(() => {
    const now = Date.now();
    for (const [ip, rec] of ipHits) if (now > rec.reset) ipHits.delete(ip);
  }, TTS_WINDOW_MS).unref();

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
      if (trimmedText.length > TTS_MAX_CHARS) {
        return res.status(413).json({ error: 'Text too long' });
      }

      // Only accept calls from our own pages (blocks casual cross-site use).
      const origin = req.get('origin');
      let sameHost = true;
      if (origin) {
        try { sameHost = new URL(origin).host === req.get('host'); } catch { sameHost = false; }
      }
      if (!sameHost) {
        return res.status(403).json({ error: 'Forbidden' });
      }

      if (audioCache.has(trimmedText)) {
        const cached = audioCache.get(trimmedText)!;
        return res.json({ audio: cached.audioBase64, mimeType: cached.mimeType });
      }

      if (!allowGeneration(req.ip || 'unknown')) {
        res.set('Retry-After', '600');
        return res.status(429).json({ error: 'Too many requests' });
      }

      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        return res.status(500).json({ error: 'GEMINI_API_KEY not configured' });
      }

      const ai = new GoogleGenAI({ apiKey });
      const response = await ai.models.generateContent({
        // Override with GEMINI_TTS_MODEL if Google renames/retires this model.
        model: process.env.GEMINI_TTS_MODEL || 'gemini-3.8-flash-tts',
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
      // Don't leak provider error details to the browser; the client falls back to device speech.
      return res.status(500).json({ error: 'TTS generation failed' });
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
