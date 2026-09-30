(function(){
  var R='#C10202',G='#F5B82E',P='#FFD9D2',W='#FFFFFF',K='#111111',S='#EAEAEA',B='#FFE9B0';
  var MONO='Space Mono, monospace', SANS='Plus Jakarta Sans, sans-serif';
  function svg(inner){return '<svg viewBox="0 0 240 150" preserveAspectRatio="xMidYMid meet" aria-hidden="true"><g stroke="#111" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">'+inner+'</g></svg>';}
  function txt(x,y,s,size,fill,font,anchor){return '<text x="'+x+'" y="'+y+'" text-anchor="'+(anchor||'middle')+'" font-family="'+(font||MONO)+'" font-weight="700" font-size="'+size+'" fill="'+(fill||K)+'" stroke="none">'+s+'</text>';}
  function burst(cx,cy,ro,ri,n){var pts=[];for(var i=0;i<n*2;i++){var r=i%2?ri:ro,a=Math.PI*i/n-Math.PI/2;pts.push((cx+r*Math.cos(a)).toFixed(1)+','+(cy+r*Math.sin(a)).toFixed(1));}return pts.join(' ');}

  var ART={
    building: svg('<circle cx="200" cy="32" r="15" fill="'+G+'"/><path d="M50 58 L120 22 L190 58 Z" fill="'+R+'"/><rect x="58" y="58" width="124" height="10" fill="'+W+'"/><rect x="68" y="68" width="14" height="50" fill="'+W+'"/><rect x="98" y="68" width="14" height="50" fill="'+W+'"/><rect x="128" y="68" width="14" height="50" fill="'+W+'"/><rect x="158" y="68" width="14" height="50" fill="'+W+'"/><rect x="48" y="118" width="144" height="14" fill="'+K+'"/><line x1="16" y1="132" x2="224" y2="132"/>'),
    seal: svg('<path d="M98 100 L84 140 L100 132 L110 146 L118 106Z" fill="'+R+'"/><path d="M142 100 L156 140 L140 132 L130 146 L122 106Z" fill="'+R+'"/><circle cx="120" cy="68" r="46" fill="'+G+'"/><circle cx="120" cy="68" r="32" fill="'+W+'"/>'+txt(120,76,'SEC',22)+'<path d="M44 30 v18 M35 39 h18"/><path d="M196 96 v16 M188 104 h16"/>'),
    jar: svg('<rect x="70" y="28" width="80" height="14" fill="'+R+'"/><path d="M66 42 h88 v76 a10 10 0 0 1 -10 10 h-68 a10 10 0 0 1 -10 -10Z" fill="'+W+'"/><ellipse cx="110" cy="112" rx="28" ry="7" fill="'+G+'"/><ellipse cx="110" cy="99" rx="28" ry="7" fill="'+G+'"/><ellipse cx="110" cy="86" rx="28" ry="7" fill="'+G+'"/><ellipse cx="110" cy="73" rx="28" ry="7" fill="'+G+'"/><ellipse cx="188" cy="124" rx="22" ry="7" fill="'+G+'"/><ellipse cx="188" cy="112" rx="22" ry="7" fill="'+G+'"/><path d="M188 94 V36 M174 50 L188 36 L202 50" fill="none"/>'),
    factory: svg('<rect x="152" y="26" width="18" height="50" fill="'+R+'"/><circle cx="170" cy="16" r="7" fill="'+W+'"/><circle cx="186" cy="10" r="5" fill="'+W+'"/><path d="M40 128 V70 L75 50 V70 L110 50 V70 L145 50 V70 L182 50 V128Z" fill="'+W+'"/><rect x="54" y="88" width="20" height="16" fill="'+G+'"/><rect x="92" y="88" width="20" height="16" fill="'+G+'"/><rect x="128" y="88" width="20" height="16" fill="'+G+'"/><rect x="156" y="96" width="18" height="32" fill="'+K+'"/><line x1="16" y1="128" x2="224" y2="128"/>'),
    chart: svg('<rect x="30" y="16" width="180" height="118" fill="'+W+'"/><rect x="52" y="92" width="22" height="30" fill="'+G+'"/><rect x="88" y="76" width="22" height="46" fill="'+G+'"/><rect x="124" y="60" width="22" height="62" fill="'+R+'"/><rect x="160" y="40" width="22" height="82" fill="'+R+'"/><polyline points="50,82 98,64 134,48 176,28" fill="none"/><circle cx="176" cy="28" r="6" fill="'+K+'"/>'+txt(62,36,'NGX LII',12,K,MONO,'start')),
    school: svg('<circle cx="40" cy="32" r="14" fill="'+G+'"/><line x1="192" y1="28" x2="192" y2="126"/><path d="M192 28 h26 l-6 8 l6 8 h-26Z" fill="'+R+'"/><path d="M58 70 L120 38 L182 70Z" fill="'+R+'"/><rect x="66" y="70" width="108" height="56" fill="'+W+'"/><rect x="110" y="96" width="20" height="30" fill="'+K+'"/><rect x="78" y="82" width="20" height="16" fill="'+G+'"/><rect x="142" y="82" width="20" height="16" fill="'+G+'"/><line x1="16" y1="126" x2="224" y2="126"/>'),
    trophy: svg('<path d="M84 34 h-18 a18 18 0 0 0 20 26" fill="none"/><path d="M156 34 h18 a18 18 0 0 1 -20 26" fill="none"/><path d="M84 24 h72 v32 a36 36 0 0 1 -72 0Z" fill="'+G+'"/><rect x="112" y="92" width="16" height="16" fill="'+G+'"/><rect x="92" y="108" width="56" height="12" fill="'+R+'"/><rect x="82" y="120" width="76" height="12" fill="'+K+'"/><path d="M120 34 l5 10 11 1 -8 7 3 11 -11 -6 -11 6 3 -11 -8 -7 11 -1Z" fill="'+W+'" stroke-width="2"/><path d="M40 40 v16 M32 48 h16"/><path d="M200 36 v14 M193 43 h14"/>'),
    etf: svg('<rect x="34" y="16" width="172" height="102" rx="6" fill="'+K+'"/><polyline points="50,98 76,86 98,92 122,64 146,72 170,44 190,36" fill="none" stroke="'+G+'" stroke-width="4"/>'+txt(50,40,'LHE ETF',16,W,MONO,'start')+'<rect x="104" y="118" width="32" height="12" fill="'+S+'"/><rect x="80" y="130" width="80" height="8" fill="'+S+'"/>'),
    calendar: svg('<rect x="36" y="30" width="126" height="100" fill="'+W+'"/><rect x="36" y="30" width="126" height="24" fill="'+R+'"/><line x1="62" y1="20" x2="62" y2="40"/><line x1="136" y1="20" x2="136" y2="40"/><path d="M52 76 l6 6 12 -12" fill="none"/><path d="M92 76 l6 6 12 -12" fill="none"/><path d="M132 76 l6 6 12 -12" fill="none"/><path d="M52 106 l6 6 12 -12" fill="none"/><path d="M92 106 l6 6 12 -12" fill="none"/><circle cx="192" cy="100" r="28" fill="'+G+'"/>'+txt(192,110,'&#8358;',26,K,SANS)),
    road: svg('<path d="M-4 84 Q60 44 120 72 T244 64 V154 H-4Z" fill="'+G+'"/><path d="M102 74 L138 74 L204 154 L36 154Z" fill="'+K+'"/><path d="M120 84 V94 M120 106 V122 M120 134 V152" stroke="'+W+'" stroke-width="4"/><line x1="206" y1="42" x2="206" y2="112"/><rect x="182" y="16" width="48" height="32" fill="'+R+'"/>'+txt(206,39,'25',18,W,SANS)),
    certs: svg('<rect x="56" y="38" width="116" height="84" fill="'+P+'" transform="rotate(-7 114 80)"/><rect x="66" y="28" width="118" height="86" fill="'+W+'"/>'+txt(125,58,'SUKUK II',14)+'<line x1="84" y1="74" x2="166" y2="74"/><line x1="84" y1="88" x2="146" y2="88"/><path d="M158 124 l-4 18 12 -6 12 6 -4 -18" fill="'+R+'"/><circle cx="166" cy="110" r="16" fill="'+R+'"/>'),
    shield: svg('<path d="M120 16 L176 34 V74 C176 106 150 126 120 136 C90 126 64 106 64 74 V34Z" fill="'+G+'"/>'+txt(120,86,'Bbb',30,K,SANS)+'<path d="M36 48 v18 M27 57 h18"/><path d="M204 94 v16 M196 102 h16"/>'+txt(206,40,'&#8358;150bn',13,R)),
    bank: svg('<path d="M60 64 a60 40 0 0 1 120 0Z" fill="'+R+'"/><circle cx="120" cy="30" r="8" fill="'+G+'"/><rect x="54" y="64" width="132" height="12" fill="'+W+'"/><rect x="62" y="76" width="12" height="42" fill="'+W+'"/><rect x="88" y="76" width="12" height="42" fill="'+W+'"/><rect x="114" y="76" width="12" height="42" fill="'+W+'"/><rect x="140" y="76" width="12" height="42" fill="'+W+'"/><rect x="166" y="76" width="12" height="42" fill="'+W+'"/><rect x="46" y="118" width="148" height="14" fill="'+K+'"/><line x1="16" y1="132" x2="224" y2="132"/>'),
    phone: svg('<rect x="86" y="10" width="68" height="128" rx="10" fill="'+K+'"/><rect x="94" y="24" width="52" height="96" fill="'+W+'"/><rect x="100" y="32" width="40" height="8" fill="'+R+'"/><rect x="100" y="86" width="10" height="28" fill="'+G+'" stroke-width="2"/><rect x="115" y="70" width="10" height="44" fill="'+G+'" stroke-width="2"/><rect x="130" y="52" width="10" height="62" fill="'+R+'" stroke-width="2"/><circle cx="186" cy="96" r="16" fill="'+P+'"/><circle cx="186" cy="96" r="5" fill="'+K+'"/><path d="M40 60 h28 M46 76 h22 M52 92 h16" fill="none"/>'),
    tree: svg('<ellipse cx="120" cy="126" rx="48" ry="11" fill="'+G+'"/><path d="M120 124 V58" fill="none"/><path d="M120 86 C96 86 80 72 78 50 C104 50 118 64 120 86Z" fill="'+W+'"/><path d="M120 72 C144 72 160 58 162 36 C136 36 122 50 120 72Z" fill="'+W+'"/><path d="M120 40 c-6 -10 -20 -6 -16 6 c2 6 16 14 16 14 s14 -8 16 -14 c4 -12 -10 -16 -16 -6Z" fill="'+R+'"/>'+txt(120,146,'WAQF',11)),
    policy: svg('<line x1="56" y1="18" x2="56" y2="132"/><rect x="56" y="20" width="24" height="40" fill="#008751"/><rect x="80" y="20" width="24" height="40" fill="'+W+'"/><rect x="104" y="20" width="24" height="40" fill="#008751"/><rect x="40" y="130" width="32" height="8" fill="'+K+'"/><rect x="138" y="62" width="66" height="74" fill="'+W+'" transform="rotate(4 171 99)"/><path d="M150 84 h42 M150 98 h42 M150 112 h26" fill="none"/><path d="M198 44 L216 62 L182 114 L170 120 L172 106Z" fill="'+G+'"/>'),
    burst: svg('<polygon points="'+burst(120,72,66,46,16)+'" fill="'+G+'"/><circle cx="120" cy="72" r="38" fill="'+R+'"/>'+txt(120,86,'20',40,W,SANS)+'<rect x="26" y="26" width="12" height="12" fill="'+R+'" transform="rotate(20 32 32)"/><rect x="198" y="110" width="12" height="12" fill="'+K+'" transform="rotate(-15 204 116)"/><rect x="200" y="22" width="10" height="10" fill="'+W+'"/><rect x="30" y="112" width="10" height="10" fill="'+W+'" transform="rotate(30 35 117)"/>'),
    listing: svg('<rect x="40" y="18" width="160" height="96" fill="'+K+'"/>'+txt(56,44,'NSE',14,G,MONO,'start')+txt(56,72,'LHIF',22,W,SANS,'start')+'<path d="M150 84 l14 -22 l14 22Z" fill="'+G+'" stroke="'+G+'"/>'+txt(56,100,'₦2.79bn',13,W,MONO,'start')+'<rect x="104" y="114" width="32" height="12" fill="'+S+'"/><rect x="80" y="126" width="80" height="8" fill="'+S+'"/>'),
    briefcase: '<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:#fff;border-radius:4px;box-shadow:inset 0 0 0 2px #111;padding:8px"><img src="/images/lfsl-logo.png" alt="LOTUS Financial Services" style="max-width:92%;max-height:85%;object-fit:contain"></div>',
    tribe: svg('<circle cx="62" cy="58" r="16" fill="'+P+'"/><path d="M36 118 a26 26 0 0 1 52 0Z" fill="'+P+'"/><circle cx="178" cy="58" r="16" fill="'+G+'"/><path d="M152 118 a26 26 0 0 1 52 0Z" fill="'+G+'"/><rect x="94" y="16" width="52" height="104" rx="8" fill="'+K+'"/><rect x="100" y="28" width="40" height="78" fill="'+W+'"/>'+txt(120,60,'LOTUS',9,R,MONO)+txt(120,78,'TRIBE',9,K,MONO)+'<line x1="20" y1="120" x2="220" y2="120"/>')
  };

  var ERAS=[
    {n:'Era I · Foundations',  bg:'#EAEAEA', fg:K, grid:'rgba(0,0,0,.07)',     tint:'#FFFFFF'},
    {n:'Era II · Going Retail',bg:'#F5F5F5', fg:K, grid:'rgba(0,0,0,.07)',     tint:B},
    {n:'Era III · Public Markets',bg:'#FFE1DC', fg:K, grid:'rgba(0,0,0,.07)',  tint:P},
    {n:'Era IV · Sovereign Scale',bg:'#8F0101', fg:W, grid:'rgba(255,255,255,.1)',tint:'#EAEAEA'},
    {n:'Era V · The Ecosystem',bg:'#C10202', fg:W, grid:'rgba(255,255,255,.12)',tint:B}
  ];

  var EV=[
    {y:'2004',e:0,a:'building',h:'LOTUS Capital is born',p:'Incorporated in Lagos to serve investors who wanted returns without interest.',s:'RC 600195'},
    {y:'2006',e:0,a:'seal',h:'Licensed by the SEC',p:'Registered as a Fund & Portfolio Manager. The LOTUS@20 clock starts here.',s:'Year zero'},
    {y:'2008',e:1,a:'jar',h:"Nigeria's first halal mutual fund",p:'The LOTUS Halal Investment Fund asked for ₦1bn. Investors brought ₦2.78bn.',s:'278% subscribed',f:1},
    {y:'2009',e:1,a:'listing',h:'On the Stock Exchange',p:'The Halal Investment Fund lists by introduction: 3.2bn units worth ₦2.79bn.',s:'₦2.79bn listed'},
    {y:'2010',e:1,a:'factory',h:'First corporate Sukuk',p:'A Sukuk Al-Istisna to fund manufacturing and construction, asset-backed from day one.',s:'Sukuk Al-Istisna',f:1},
    {y:'2012',e:1,a:'chart',h:'A halal index for the Exchange',p:'The NGX LOTUS Islamic Index, co-built with the Nigerian Stock Exchange.',s:'NGX LOTUS Islamic Index',f:1},
    {y:'2012',e:1,a:'briefcase',h:'LOTUS Financial Services is born',p:'A dedicated issuing house for Sukuk, underwriting and corporate advisory.',s:'RC 1078362'},
    {y:'2013',e:2,a:'school',h:"Africa's first sub-sovereign Sukuk",p:'₦11.4bn for the State of Osun, used to build public secondary schools.',s:'₦11.4bn',f:1},
    {y:'2014',e:2,a:'trophy',h:'Deal of the Year',p:'Islamic Finance News names the Osun Sukuk its African Deal of the Year, in Dubai.',s:'IFN Award'},
    {y:'2014',e:2,a:'etf',h:'First halal ETF in Nigeria',p:'The LOTUS Halal Equity ETF lists on the Nigerian Stock Exchange on 15 August.',s:'LHE ETF',f:1},
    {y:'2016',e:2,a:'calendar',h:'Halal fixed income arrives',p:'The LOTUS Halal Fixed Income Fund: steady cash payouts, zero interest.',s:'35 payouts in a row'},
    {y:'2017',e:3,a:'road',h:'The first FGN Sovereign Sukuk',p:'Joint Issuing House on ₦100bn that funded 25 highways across all six zones.',s:'₦100bn',f:1},
    {y:'2018',e:3,a:'certs',h:'Sukuk II, and a listing',p:'Another ₦100bn for the FGN. Our fixed income fund lists on the NSE memorandum board.',s:'₦100bn'},
    {y:'2020',e:3,a:'shield',h:"Sukuk III and a 'Bbb' rating",p:"Advised on the ₦150bn third Sovereign Sukuk. Agusto & Co. rates LOTUS 'Bbb'.",s:'₦150bn'},
    {y:'2021',e:4,a:'bank',h:'LOTUS Bank gets its licence',p:'The CBN licenses a non-interest commercial bank founded by Hajara Adeola.',s:'CBN licence'},
    {y:'2022',e:4,a:'phone',h:'Investing goes digital',p:'Upgraded digital portals put LOTUS funds a few taps away.',s:'Online'},
    {y:'2024',e:4,a:'tree',h:"Nigeria's first Waqf fund",p:'The first SEC-registered endowment fund that turns giving into lasting impact.',s:'LOTUS Waqf Fund',f:1},
    {y:'2024',e:4,a:'tribe',h:'LOTUS Tribe app launches',p:'A halal investment app built for a new generation of ethical investors.',s:'LOTUS Tribe'},
    {y:'2025',e:4,a:'policy',h:'A seat at the policy table',p:'The Minister of Finance meets LOTUS on non-interest REITs and infrastructure.',s:'August 2025'},
    {y:'2026',e:4,a:'burst',h:'Twenty years. ₦65.85bn.',p:"30,900+ unit-holders. Nigeria's largest dedicated non-interest fund manager.",s:'30,900+ investors'}
  ];

  var WHY=[
    ['Nigeria had no regulated non-interest asset manager. Now it had one.','Corporate Affairs Commission'],
    ['A licence meant LOTUS could launch and run regulated mutual funds for the public.','SEC Nigeria'],
    ['Halal investing opened up to everyday savers, not just the wealthy.','SEC Nigeria · First Trustees'],
    ['A listing made the fund easier to buy and sell.','Nigerian Stock Exchange'],
    ['Businesses could fund growth without taking on interest-bearing debt.','Private corporate issuer'],
    ['Halal investors got a transparent, screened benchmark.','Nigerian Stock Exchange'],
    ['A dedicated arm for Sukuk structuring, underwriting and advisory.','CAC · SEC Nigeria'],
    ['A state government funded public infrastructure through Sukuk for the first time in the region.','Government of the State of Osun'],
    ['A Nigerian Islamic finance deal won international recognition.','Islamic Finance News'],
    ['One ticker gives low-cost access to the whole halal index.','NGX · CSCS'],
    ['A halal alternative to money market funds, built for capital preservation.','Vetiva Capital · STL Trustees · Citibank'],
    ['Non-interest finance moved into national infrastructure.','Debt Management Office · Ministry of Finance'],
    ['A stock exchange listing made the fund easier to reach and trade.','Debt Management Office · NSE'],
    ["Bigger sovereign issues, plus an independent rating of LOTUS's track record.",'Debt Management Office · Agusto & Co.'],
    ['A branch network across Nigeria became a new route to LOTUS funds.','Central Bank of Nigeria'],
    ['LOTUS funds became reachable from a phone.','LOTUS Capital'],
    ['Charity capital that keeps working: the principal stays, the returns give.','SEC Nigeria'],
    ['Halal investing, built for a generation that lives on its phone.','LOTUS Capital'],
    ['Non-interest finance entered national infrastructure policy talks.','Federal Ministry of Finance'],
    ["LOTUS manages close to half of Nigeria's ₦138.26bn Shariah fund market.",'NGX · SEC Nigeria · FMAN']
  ];

  var FIRSTS20=[
    {y:'2006',t:"Nigeria's first dedicated Islamic asset manager",p:'Licensed by the SEC to manage money without interest.',b:'Nigerian first',a:'seal'},
    {y:'2008',t:'First Shariah-compliant mutual fund',p:'The LOTUS Halal Investment Fund opened halal investing to everyday savers.',b:'Nigerian first',a:'jar'},
    {y:'2008',t:'278% subscribed at launch',p:'Asked for ₦1bn. Investors brought ₦2.78bn.',b:'Record',big:'278%'},
    {y:'2010',t:'First private corporate Sukuk',p:'A Sukuk Al-Istisna financing manufacturing and construction.',b:'Nigerian first',a:'factory'},
    {y:'2012',t:'First Islamic equity index',p:'The NGX LOTUS Islamic Index, built with the Nigerian Stock Exchange.',b:'Nigerian first',a:'chart'},
    {y:'2013',t:'First sub-sovereign Sukuk in Sub-Saharan Africa',p:'₦11.4bn for the State of Osun, spent on public secondary schools.',b:'Regional first',a:'school'},
    {y:'2014',t:'African Deal of the Year',p:'Islamic Finance News honours the Osun Sukuk in Dubai.',b:'Award',a:'trophy'},
    {y:'2014',t:'First halal ETF',p:'The LOTUS Halal Equity ETF lists on the Nigerian Stock Exchange.',b:'Nigerian first',a:'etf'},
    {y:'2016',t:'First halal fixed income fund',p:'Steady cash payouts with zero interest.',b:'Nigerian first',a:'calendar'},
    {y:'2017',t:'First FGN Sovereign Sukuk',p:'Joint financial adviser on the maiden ₦100bn Sukuk that funded 25 roads.',b:'Nigerian first',a:'road'},
    {y:'2017–20',t:'Three sovereign Sukuk, all oversubscribed',p:'Adviser on the ₦100bn, ₦100bn and ₦150bn FGN issues.',b:'Milestone',big:'3 / 3'},
    {y:'2020',t:"Rated 'Bbb' by Agusto & Co.",p:'An investment manager rating for track record and fiduciary standards.',b:'Rating',a:'shield'},
    {y:'2021',t:'Best Islamic Investment Company, Western Africa',p:'Named by International Investor magazine.',b:'Award',big:'Best'},
    {y:'2024',t:'First SEC-registered endowment fund',p:'The LOTUS Waqf Fund turns giving into lasting impact.',b:'Nigerian first',a:'tree'},
    {y:'FMAN',t:'First President of the Fund Managers Association',p:'Founder Hajara Adeola led the industry body as its first President.',b:'Nigerian first',big:'FMAN'},
    {y:'35×',t:'35 quarterly payouts in a row',p:'The Fixed Income Fund has paid cash every quarter, 35 times straight.',b:'Record',big:'35'},
    {y:'2026',t:'Largest Shariah fixed income fund in Nigeria',p:'About ₦45.50bn in the LOTUS Halal Fixed Income Fund.',b:'Record',big:'₦45.5bn'},
    {y:'2026',t:'Largest dedicated non-interest fund manager',p:'₦65.85bn across four funds, for 30,900+ unit-holders.',b:'Record',big:'₦65.85bn'},
    {y:'H1 2026',t:'+35.85% in six months',p:"The Halal Investment Fund's first-half return in 2026.",b:'Milestone',big:'+35.85%'},
    {y:'2026',t:"Close to half of Nigeria's Shariah fund market",p:'Of ₦138.26bn in Shariah mutual funds, LOTUS manages about ₦65.85bn.',b:'Record',big:'~48%'}
  ];

  var FACTS20=[
    {y:'Total',t:'₦65.85bn across four funds',p:'Mid-2026 net asset value, all SEC-registered.',big:'₦65.85bn'},
    {y:'Investors',t:'30,900+ unit-holders',p:'From first-time savers to institutions.',big:'30,900+'},
    {y:'LHIF',t:'Launched February 2008',p:"The LOTUS Halal Investment Fund was Nigeria's first Shariah mutual fund.",a:'jar'},
    {y:'LHIF',t:'₦1bn target, ₦2.78bn raised',p:'A 278% subscription at the first offer.',big:'278%'},
    {y:'LHIF',t:'Listed on the Stock Exchange in 2009',p:'3.2bn units worth ₦2.79bn, listed by introduction.',a:'listing'},
    {y:'LHIF',t:'A balanced halal portfolio',p:'Ethical equities, real estate and asset-backed transactions.',big:'Mixed'},
    {y:'LHIF',t:'₦17.00bn under management',p:'Held by more than 17,000 unit-holders.',big:'₦17bn'},
    {y:'LHIF',t:'+35.85% in H1 2026',p:'Riding equity market momentum on the NGX.',big:'+35.85%'},
    {y:'LHFIF',t:'Launched May 2016',p:"Nigeria's first halal fixed income fund.",a:'calendar'},
    {y:'LHFIF',t:'~₦45.50bn, the largest of its kind',p:'The biggest Shariah fixed income fund in Nigeria.',big:'₦45.5bn'},
    {y:'LHFIF',t:'~13,500 unit-holders',p:'Built for capital preservation and regular cash income.',big:'13,500'},
    {y:'LHFIF',t:'35 quarterly payouts in a row',p:'Cash distributions every quarter, without interest.',big:'35'},
    {y:'LHFIF',t:'Listed at ₦1,000 per unit',p:'1,486,877 units cleared for the NSE memorandum board in 2018.',big:'₦1,000'},
    {y:'LHFIF',t:'Backed by strong partners',p:'Launched with Vetiva Capital, STL Trustees and Citibank.',big:'3'},
    {y:'ETF',t:'Listed 15 August 2014',p:"Nigeria's first halal exchange-traded fund.",a:'etf'},
    {y:'ETF',t:'Tracks 12–15 halal stocks',p:'It mirrors the NGX LOTUS Islamic Index.',big:'12–15'},
    {y:'ETF',t:'₦2.96bn in assets',p:'Tradeable like a share, priced through the day.',big:'₦2.96bn'},
    {y:'Waqf',t:'Launched April 2024',p:"Nigeria's first SEC-registered endowment fund.",a:'tree'},
    {y:'Waqf',t:'₦48.79 per unit given back',p:'Paid in the 2025 distribution cycle.',big:'₦48.79'},
    {y:'Waqf',t:'+26.47% in H1 2026',p:'₦395.6m in assets across 183 unit-holders.',big:'+26.47%'}
  ];

  var IMPACT20=[
    {y:'Roads',t:'25 highway projects',p:'Funded by the first FGN Sovereign Sukuk in 2017.',a:'road'},
    {y:'Roads',t:'All six geopolitical zones',p:'Sukuk-funded roads reached every region of Nigeria.',big:'6 / 6'},
    {y:'Roads',t:'₦350bn of sovereign Sukuk advised',p:'Three issues between 2017 and 2020, all for infrastructure.',big:'₦350bn'},
    {y:'Schools',t:'Public schools for Osun',p:'Built with the ₦11.4bn Sukuk in 2013.',a:'school'},
    {y:'Schools',t:'Investors earned while schools rose',p:'The Osun Sukuk paid a 14.75% return from real assets.',big:'14.75%'},
    {y:'Inclusion',t:'30,900+ people investing halal',p:'Many had no regulated option before LOTUS.',big:'30,900+'},
    {y:'Inclusion',t:'12 locations across 7 states',p:'Offices and service centres from Lagos to Kaduna.',big:'12'},
    {y:'Inclusion',t:'Halal investing on your phone',p:'The LOTUS Tribe app launched in 2024 for a new generation.',a:'phone'},
    {y:'Inclusion',t:'Micro-investing made simple',p:'The Halal Investment Fund is available on Cowrywise.',big:'App'},
    {y:'Giving',t:'Returns that fund education',p:'The Waqf fund channels returns into learning.',a:'tree'},
    {y:'Giving',t:'Returns that fund healthcare',p:'Endowment income supports health causes.',big:'Health'},
    {y:'Giving',t:'Returns that fund livelihoods',p:'Economic empowerment, family and social welfare.',big:'Jobs'},
    {y:'Giving',t:'₦48.79 per unit distributed',p:"The Waqf fund's 2025 payout.",big:'₦48.79'},
    {y:'Banking',t:'A non-interest bank for Nigeria',p:'LOTUS Bank, founded by Hajara Adeola, licensed by the CBN in 2021.',a:'bank'},
    {y:'Markets',t:'Rules that opened a market',p:'LOTUS worked with regulators on Sukuk rules and double-taxation fixes.',a:'policy'},
    {y:'Markets',t:'A benchmark for everyone',p:'The NGX LOTUS Islamic Index gives the market a halal yardstick.',a:'chart'},
    {y:'Markets',t:'Sukuk for all investors',p:'Banks, pension funds and non-Muslim investors joined sovereign issues.',big:'All'},
    {y:'Markets',t:'A market that grew 74%',p:"Nigeria's Shariah funds reached ₦138.26bn in H1 2026.",big:'+74%'},
    {y:'Industry',t:'Leading the fund managers',p:'Founder Hajara Adeola was the first President of FMAN.',big:'FMAN'},
    {y:'Policy',t:'Infrastructure on the agenda',p:'2025 talks with the Minister of Finance on non-interest REITs and PPPs.',a:'building'}
  ];

  var HALAL20=[
    {y:'Governance',t:'An independent Shariah Board',p:'Three scholars review every product LOTUS offers.',big:'3'},
    {y:'Governance',t:'Rulings that bind',p:"The Board's decisions are legally binding on every fund.",a:'seal'},
    {y:'Screening',t:'No conventional banking',p:'Interest-based lenders are screened out.',big:'✕ Banks'},
    {y:'Screening',t:'No alcohol',p:'Brewers and distillers are excluded.',big:'✕ Alcohol'},
    {y:'Screening',t:'No tobacco',p:'Tobacco companies never make the list.',big:'✕ Tobacco'},
    {y:'Screening',t:'No gambling',p:'Betting and casino businesses are out.',big:'✕ Gambling'},
    {y:'Screening',t:'No adult content',p:'Excluded at the business screen.',big:'✕ Adult'},
    {y:'Screening',t:'Debt screens',p:'Companies that lean too hard on interest-bearing debt are filtered out.',big:'Debt ✓'},
    {y:'Principle',t:'No riba',p:'No fixed, guaranteed interest on lending.',big:'Riba'},
    {y:'Principle',t:'No gharar',p:'No contracts built on excessive uncertainty.',big:'Gharar'},
    {y:'Principle',t:'No maysir',p:'No gambling-style speculation.',big:'Maysir'},
    {y:'Contract',t:'Ijarah: leasing',p:'The asset is leased and the rent is the return. Used in FGN Sukuk.',a:'road'},
    {y:'Contract',t:'Istisna: building',p:'Financing something to be built, paid in stages.',a:'factory'},
    {y:'Contract',t:'Mudarabah: sharing profit',p:'Capital meets expertise, profits shared at an agreed ratio.',big:'Share'},
    {y:'Contract',t:'Wakalah: acting as agent',p:'The manager invests on your behalf for an agreed fee.',big:'Agent'},
    {y:'Contract',t:'Murabaha: cost-plus sale',p:'Assets bought and resold at a disclosed mark-up.',big:'Cost +'},
    {y:'Asset',t:'Sukuk: owning real assets',p:'Returns come from roads and schools, not from loans.',a:'certs'},
    {y:'Asset',t:'Waqf: capital that lasts',p:'The principal is preserved; returns go to good causes.',a:'tree'},
    {y:'Oversight',t:'Ongoing compliance audits',p:'Holdings are checked after investing, not just before.',big:'Audit'},
    {y:'Benchmark',t:'A screened universe of stocks',p:'The NGX LOTUS Islamic Index defines which stocks qualify.',a:'chart'}
  ];

  var STEPS=[
    {t:'Business screen',k:'What does it do?',h:'Is the business itself permissible?',p:'Companies whose core business is off-limits are removed before any numbers are checked.',x:['Conventional banking','Brewing','Tobacco','Gambling','Adult content'],no:1},
    {t:'Financial screen',k:'How is it funded?',h:'Is the balance sheet clean?',p:'Quantitative debt screens filter out companies that lean too heavily on interest-bearing debt.',x:['Interest-bearing debt','Balance-sheet ratios']},
    {t:'Board review',k:'Do the scholars agree?',h:'Independent scholars sign off.',p:'The Shariah Advisory Board reviews every product. Its rulings are legally binding on all LOTUS funds.',x:['Product structures','Contracts','New issues']},
    {t:'Ongoing audit',k:'Does it stay halal?',h:'Checked after investing too.',p:'Compliance audits keep reviewing holdings after money goes in, so a fund stays compliant over time.',x:['Holdings','Transactions']}
  ];

  var TERMS=[
    {w:'Riba',m:'Interest',d:'Any fixed, guaranteed return on lending money. Islamic finance prohibits it, so LOTUS products earn from real assets and trade instead.',u:'Excluded from every LOTUS fund'},
    {w:'Sukuk',m:'Investment certificates',d:'Certificates that give holders part-ownership of a real asset, such as roads or schools. Returns come from that asset, not from interest on a loan.',u:'Osun 2013 · FGN 2017, 2018, 2020'},
    {w:'Ijarah',m:'Lease',d:'The financier owns an asset and leases it out. The rent is the return.',u:'Structure of the Osun and FGN Sukuk'},
    {w:'Istisna',m:'Manufacture',d:'A contract to build or manufacture something, paid for in advance or in stages.',u:'First corporate Sukuk, 2010'},
    {w:'Mudarabah',m:'Profit-sharing',d:'A partnership where one side brings capital and the other brings expertise. Profits are shared at an agreed ratio.',u:'Early private mandates'},
    {w:'Wakalah',m:'Agency',d:'The manager invests on your behalf for an agreed fee.',u:'Early private mandates'},
    {w:'Murabaha',m:'Cost-plus sale',d:'The financier buys an asset and sells it on at a disclosed mark-up, instead of charging interest.',u:'Early asset-backed deals'},
    {w:'Waqf',m:'Endowment',d:'Capital that is preserved permanently, with its returns going to charitable causes.',u:'LOTUS Waqf Fund, 2023'},
    {w:'Gharar & Maysir',m:'Uncertainty & gambling',d:'Contracts built on excessive uncertainty or pure chance are avoided, which rules out speculative bets.',u:'Screened out of every fund'}
  ];

  var WEB='https://www.lotuscapitallimited.com/';
  var PEOPLE20=[
    {g:'Management',i:'HA',n:'Hajara Folake Adeola',r:'Founder, MD & CEO',p:'Built Nigeria\'s non-interest capital market, one first at a time.',
     bio:'More than 25 years in investment management and structured finance. Convertible bond research analyst at BNP Paribas in London, then Director at UBS and at CCT Islamic Finance. First President of the Fund Managers Association of Nigeria and a Fellow of the Aspen Global Leadership Network. Holds a B.Sc. in Pharmacology (King\'s College London), an M.Sc. in Finance specialising in Islamic Finance (Durham) and an MBA (Exeter). Founded and chairs LOTUS Bank.',u:WEB+'management-team/'},
    {g:'Management',i:'TK',n:'Toyin Kekere-Ekun',r:'COO · CEO, LOTUS Financial Services',p:'Runs operations and leads the issuing house.',
     bio:'Oversees operations, treasury and capital market execution, and leads transaction execution at LOTUS Financial Services. Over two decades in asset and liability management, corporate banking and non-interest finance. Fellow of the Institute of Chartered Accountants of Nigeria, with a B.Sc. in Accounting (University of Lagos) and an M.Sc. from Cranfield School of Management.',u:WEB+'management-team/'},
    {g:'Management',i:'MB',n:'Moshood Babatunde',r:'Chief Financial Officer',p:'Keeps the numbers honest.',
     bio:'Leads corporate treasury, financial accounting, statutory reporting and financial controls across the firm and its managed portfolios.',u:WEB+'management-team/'},
    {g:'Management',i:'SA',n:'Seun Adediran',r:'Head, Investment & Research',p:'Leads investment research across the funds.',
     bio:'Heads the investment and research function that selects and monitors Shariah-compliant assets for every LOTUS fund.',u:WEB+'management-team/'},
    {g:'Management',i:'NM',n:'Ndako Mijindadi',r:'Investment Research',p:'Research and portfolio structuring.',
     bio:'Works on investment research and portfolio structuring for the LOTUS funds.',u:WEB+'management-team/'},
    {g:'Management',i:'AS',n:'Adebola Samson-Fatokun',r:'Wealth Management',p:'Looks after clients and their portfolios.',
     bio:'Leads wealth management and client relationships, the first point of contact for many LOTUS investors.',u:WEB+'management-team/'},
    {g:'Management',i:'GO',n:'Gregory Ogbebor',r:'Financial Planning',p:'Financial planning and institutional advisory.',
     bio:'Leads financial planning and advisory work for institutional clients.',u:WEB+'management-team/'},
    {g:'Management',i:'OA',n:'Omobola Akande',r:'General Counsel',p:'General Counsel and Company Secretary.',
     bio:'Leads legal, company secretarial and governance matters across LOTUS Capital.',u:WEB+'management-team/'},
    {g:'Board',i:'FA',n:'Fola Adeola OFR, mni',r:'Chairman of the Board',p:'Co-founder of GTBank and pioneer Chairman of PenCom.',
     bio:'Co-founded Guaranty Trust Bank in 1990 and was its pioneer Managing Director until 2002. Pioneer Chairman of the National Pension Commission, having chaired the committee that drafted the Pension Reform Act 2004. Founded the FATE Foundation, which has supported more than 30,000 young entrepreneurs, and served on the Commission for Africa. Alumnus of Harvard Business School and NIPSS, Kuru.',u:WEB+'board-of-directors/'},
    {g:'Board',i:'LO',n:'Lateefah Okunnu',r:'Non-Executive Director',p:'Former Deputy Governor of Lagos State.',
     bio:'A career civil servant and former Deputy Governor of Lagos State who has served on several civic commissions, bringing public administration experience to the board.',u:WEB+'board-of-directors/'},
    {g:'Board',i:'AO',n:'Amina Oyagbola',r:'Non-Executive Director',p:'Senior executive, attorney and founder of WISCAR.',
     bio:'A senior corporate executive and attorney who held executive roles at MTN Nigeria, including Corporate Services Executive and Human Resources Executive. Founder of WISCAR (Women in Successful Careers), an NGO focused on developing women executives.',u:WEB+'board-of-directors/'},
    {g:'Board',i:'ML',n:'Muhammad Nuruddeen Lemu',r:'Non-Executive Director',p:'Islamic scholar and educator.',
     bio:'Director of Research and Training at the Da\'wah Coordination Council of Nigeria and the Islamic Education Trust in Minna. Advises national and international organisations on Islamic commercial law and civic education.',u:WEB+'board-of-directors/'},
    {g:'Board',i:'LA',n:'Lanre Akinbo',r:'Non-Executive Director',p:'Chartered accountant and finance strategist.',
     bio:'A finance strategist and chartered accountant who advises on corporate governance and investment strategy.',u:WEB+'board-of-directors/'},
    {g:'Shariah Board',i:'MK',n:'Prof. Monzer Kahf',r:'Chairman, Shariah Board',p:'Islamic economist and author.',
     bio:'An internationally recognised Islamic economist, professor and author. Former senior economist at the Islamic Development Bank in Jeddah, with foundational work on Awqaf (endowments), Islamic taxation and non-interest finance.',u:WEB+'shariah-board/'},
    {g:'Shariah Board',i:'MM',n:'Dr. Marjan Binti Muhammad',r:'Member, Shariah Board',p:'Scholar of Islamic commercial law.',
     bio:'A scholar of Fiqh al-Muamalat (Islamic commercial jurisprudence) with B.Sc., M.Sc. and Ph.D. degrees from the International Islamic University Malaysia. Former Head of Research at the International Shari\'ah Research Academy for Islamic Finance (ISRA).',u:WEB+'shariah-board/'},
    {g:'Shariah Board',i:'LZ',n:'Prof. Luqman Zakariyah',r:'Member, Shariah Board',p:'Professor of Islamic Law and Finance.',
     bio:'Professor of Islamic Law and Finance specialising in legal maxims, regulatory compliance and non-interest capital markets in West Africa. Consults for financial regulators.',u:WEB+'shariah-board/'},
    {g:'Community',i:'ST',n:'Our Staff',r:'The people behind every fund',p:'Investment, research, legal, compliance and client-service teams.',
     bio:'Behind every fund are analysts, portfolio managers, lawyers, compliance officers and client-service teams working across our head office and 11 other locations in seven states.',u:WEB+'careers/'},
    {g:'Community',i:'RG',n:'Our Regulators',r:'SEC · NGX · CBN · DMO',p:'The institutions that hold us to account.',
     bio:'The Securities and Exchange Commission licensed us in 2006. The Nigerian Exchange lists our funds and co-built the NGX LOTUS Islamic Index. The Central Bank of Nigeria licensed our sister bank in 2021, and the Debt Management Office worked with us on Nigeria\'s first sovereign Sukuk.',u:'https://sec.gov.ng/'},
    {g:'Community',i:'PT',n:'Our Partners',r:'Trustees, custodians, platforms',p:'The firms that help us serve investors.',
     bio:'Trustees and custodians such as First Trustees, STL Trustees and Citibank; advisers such as Vetiva Capital; the Central Securities Clearing System; and platforms like Cowrywise that bring our funds to new investors.',u:WEB},
    {g:'Community',i:'CL',n:'Our Clients',r:'30,900+ unit-holders',p:'The reason LOTUS exists.',
     bio:'More than 30,900 unit-holders, from first-time savers and families to institutions, the State of Osun and the Federal Government of Nigeria.',u:WEB}
  ];

  var PRESS20=[
    {y:'2009',o:'Proshare',t:'LOTUS Capital set to list N2.788 bn on Stock Exchange',u:'https://proshare.co/articles/lotus-capital-set-to-list-n2.788-bn-on-stock-exchange?menu=Market&classification=Read&category=Capital+Market'},
    {y:'2013',o:'Nigerian Stock Exchange',t:'NSE LOTUS Islamic Index undergoes screening',u:'https://doclib.ngxgroup.com/mediacenter/Press%20Releases/NSE%20Lotus%20Islamic%20Index%20Undergoes%20Screening%20-June%2024%202013.pdf'},
    {y:'2014',o:'Osun State Government',t:'Osun, LOTUS Capital bag Deal of the Year award in Dubai over Sukuk',u:'https://www.osunstate.gov.ng/2014/02/osun-lotus-capital-bag-deal-year-award-dubai-sukuk/'},
    {y:'2014',o:'Osun State Government',t:'Osun Bond: LOTUS Capital wins African Deal of the Year award',u:'https://www.osunstate.gov.ng/2014/03/osun-bond-lotus-capital-wins-african-deal-year-award/'},
    {y:'2016',o:'The Guardian',t:"Meet the power women in Nigeria's financial sector",u:'https://guardian.ng/guardian-woman/meet-the-power-women-in-nigerias-financial-sector/'},
    {y:'2017',o:'The Citizen',t:'FG appoints FBN Merchant Bank, LOTUS Ltd as DMO advisers in debut Sukuk offer',u:'https://thecitizenng.com/fg-appoints-fbn-merchant-bank-lotus-ltd-as-dmo-advisers-in-debut-sukuk-offer/'},
    {y:'2018',o:'Nairametrics',t:"LOTUS Capital's N1.49 fixed income fund gets NSE nod",u:'https://nairametrics.com/2018/06/13/lotus-capital-fixed-income-fund/'},
    {y:'2018',o:'Nairametrics',t:'LOTUS Halal Investment Fund posts a 4.49% return',u:'https://nairametrics.com/2018/07/24/lotus-halal-investment-fund-posts-a-4-49-return/'},
    {y:'2020',o:'Agusto & Co.',t:"Agusto & Co. assigns a 'Bbb' rating to LOTUS Capital Limited",u:'https://www.agusto.com/ratings/agusto-co-hereby-assigns-a-bbb-rating-to-lotus-capital-limited/'},
    {y:'2021',o:'Punch',t:'CBN grants LOTUS Bank non-interest banking licence',u:'https://punchng.com/cbn-grants-lotus-bank-non-interest-banking-licence/'},
    {y:'2021',o:'BusinessDay',t:'CBN grants LOTUS Bank license for non-interest banking operations',u:'https://businessday.ng/banking-finance/article/cbn-grants-lotus-bank-license-for-non-interest-banking-operations/'},
    {y:'2021',o:'ThisDay',t:"Hajara Fola Adeola's Giant Strides",u:'https://www.thisdaylive.com/2021/07/04/hajara-fola-adeolas-giant-strides/'},
    {y:'2021',o:'International Investor',t:'Best Islamic Investment Company, Western Africa 2021',u:'https://www.intinvestor.com/awards/winners/2021/lotus-capital/'},
    {y:'2024',o:'Nairametrics',t:'LOTUS Capital launches the LOTUS Waqf (Endowment) Fund, the first SEC registered endowment fund in Nigeria',u:'https://nairametrics.com/2024/04/04/lotus-capital-launches-the-lotus-waqf-endowment-fund-the-first-sec-registered-endowment-fund-in-nigeria/'},
    {y:'2024',o:'Nairametrics',t:'Introducing LOTUS Tribe: The halal investment app for the new generation',u:'https://nairametrics.com/2024/04/26/introducing-lotus-tribe-the-halal-investment-app-for-the-new-generation/'},
    {y:'2025',o:'Federal Ministry of Finance',t:"Wale Edun commends LOTUS Capital's leadership in non-interest finance",u:'https://finance.gov.ng/ministry/wale-edun-commends-lotus-capitals-leadership-in-non-interest-finance/'},
    {y:'2025',o:'The Nation',t:'Edun seeks PPP to deepen non-interest finance',u:'https://thenationonlineng.net/edun-seeks-ppp-to-deepen-non-interest-finance/'},
    {y:'2025',o:'Extraordinaire People',t:"Non-interest finance: Edun commends LOTUS Capital's inclusive growth initiative",u:'https://extraordinairepeople.com/2025/08/12/non-interest-finance-edun-commends-lotus-capitals-inclusive-growth-initiative/'},
    {y:'2026',o:'Nairametrics',t:'Best performing CEOs by mutual fund performance as of June 2026',u:'https://nairametrics.com/2026/07/10/best-performing-ceos-by-mutual-fund-performance-as-of-june-2026/'},
    {y:'2026',o:'Nairametrics',t:'Best performing Shariah-compliant mutual funds in H1 2026',u:'https://nairametrics.com/2026/07/14/best-performing-shariah-compliant-mutual-funds-in-h1-2026/'}
  ];

  var LOCS=[
    {n:'Head Office',c:'Lagos',k:'Head office',a:'LOTUS House, 182 Awolowo Road, Falomo, Ikoyi, Lagos, Nigeria.',t:'09087058407, 09087058408',u:'https://maps.app.goo.gl/aN8QZ2MfTMcSgcYk7',lon:3.43,lat:6.45,hq:1},
    {n:'Kano Office',c:'Kano',k:'Office',a:'LOTUS Bank, 59 Murtala Mohammed Way, Kano.',t:'09087058408, 08077099766',u:'https://maps.app.goo.gl/d9koriU3tVmFd2K88',lon:8.52,lat:12.0},
    {n:'Ikeja',c:'Lagos',k:'Service centre',a:'Empire Building, 3rd floor, 35 Oba Akran Road, Ikeja.',t:'09087058372, 0908705840',u:'https://www.google.com/maps/place/Empire+Trust+Microfinance+Bank/@6.6016032,3.3357166,17z/data=!4m6!3m5!1s0x103b922c09ce9a63:0xf49affc4f62b79b6!8m2!3d6.6016032!4d3.3382915!16s%2Fg%2F11hbgbhwsn?entry=ttu&g_ep=EgoyMDI2MDUxMS4wIKXMDSoASAFQAw%3D%3D',lon:3.34,lat:6.60},
    {n:'Egbeda',c:'Lagos',k:'Service centre',a:'Block A, Suite A61/A62, Primatek Plaza, 65 Idimu Road, Mokola B/Stop, Egbeda, Lagos.',t:'09087058402',u:'https://maps.app.goo.gl/oBuoKEx9DwLSN8dH6',lon:3.29,lat:6.59},
    {n:'Surulere',c:'Lagos',k:'Service centre',a:'Shop 14, First Floor, Town Square Mall, 62 Adeniran Ogunsanya Street, Surulere.',t:'09087058402, 09087058375',u:'https://maps.app.goo.gl/rQZFJaeBzsYCUzgp8',lon:3.36,lat:6.49},
    {n:'Ikorodu',c:'Lagos',k:'Service centre',a:'2nd Floor, Alabukun Plaza 3, Lagos-Ikorodu Road, opposite BRT Terminal, Ikorodu, Lagos.',t:'09087058404, 09169848985',u:'https://maps.app.goo.gl/kcyfCKXz5zJcfWcU9',lon:3.51,lat:6.62},
    {n:'Ijebu-Ode',c:'Ogun',k:'Service centre',a:'Al-Hayat Relief Foundation, Al-Hayat House, 33 Old Lagos/Benin Road, opposite Obalende Garage, Ijebu-Ode, Ogun State.',t:'09087058404, 09139389577',u:'https://maps.app.goo.gl/rheU8imSgBicL4CJ6',lon:3.92,lat:6.82},
    {n:'Abeokuta',c:'Ogun',k:'Service centre',a:'Al-Nusi Imran Foundation, Suite 92, Omida Ultra-Modern Shopping Complex, Omida, Abeokuta.',t:'09087058384, 09168346259',u:'https://maps.app.goo.gl/YfRbvm9Uv2BzfuKx5',lon:3.35,lat:7.15},
    {n:'Minna',c:'Niger',k:'Service centre',a:'Islamic Education Trust, No. 3 Ilmi Avenue, Minna, Niger State.',t:'09087058409, 08077099556',u:'https://maps.app.goo.gl/CrVwj94RKk3TCAKB6',lon:6.55,lat:9.61},
    {n:'Port Harcourt',c:'Rivers',k:'Service centre',a:'LOTUS Bank Building, 22 Aba Road, opposite Pleasure Park, Port Harcourt, Rivers State.',t:'09168346260, 08077099552',u:'https://maps.app.goo.gl/RXaTtdLGR2ePebBo6',lon:7.03,lat:4.82},
    {n:'Ilorin',c:'Kwara',k:'Service centre',a:'c/o Harmony Securities Ltd, 2 Sulu Gambari Road, Kwara State Library Complex, Ilorin, Kwara State.',t:'09139389580, 09087058405',u:'',lon:4.55,lat:8.49},
    {n:'Kaduna',c:'Kaduna',k:'Service centre',a:'LOTUS Bank (Kaduna Branch), 6/7 Ahmadu Bello Way, Kaduna State.',t:'08032249181, 08077099558',u:'https://maps.app.goo.gl/iiWPYsLWJBWmrSu88',lon:7.44,lat:10.52}
  ];

  var QS20=[
    {q:'In what year was LOTUS Capital licensed by the SEC?',o:['2004','2006','2008','2012'],a:1,e:'2006 is where the LOTUS@20 clock starts.'},
    {q:'The first LOTUS fund asked for ₦1bn in 2008. How much did investors bring?',o:['₦1bn','₦1.5bn','₦2.78bn','₦5bn'],a:2,e:'₦2.78bn, a 278% subscription.'},
    {q:'What did the ₦11.4bn Osun Sukuk pay for?',o:['Highways','Public secondary schools','Hospitals','An airport'],a:1,e:'Modern public secondary schools.'},
    {q:'How many highway projects did the first FGN Sovereign Sukuk fund?',o:['6','12','25','40'],a:2,e:'25 roads across all six geopolitical zones.'},
    {q:'What does "Riba" mean?',o:['Profit-sharing','Interest','Lease','Endowment'],a:1,e:'Interest, which every LOTUS product avoids.'},
    {q:'Which index did LOTUS co-build with the Nigerian Stock Exchange?',o:['NGX 30','NGX LOTUS Islamic Index','NGX Premium','NGX Pension'],a:1,e:'The NGX LOTUS Islamic Index, launched in 2012.'},
    {q:'When did the LOTUS Waqf Fund launch?',o:['2016','2019','2021','2024'],a:3,e:"April 2024, Nigeria's first SEC-registered endowment fund."},
    {q:'Roughly how much sits in LOTUS mutual funds in 2026?',o:['₦6.5bn','₦25bn','₦65bn','₦350bn'],a:2,e:'About ₦65.85bn, across 30,900+ unit-holders.'},
    {q:'What is LOTUS Tribe?',o:['A bank branch','A halal investment app','A mutual fund','A stock index'],a:1,e:'An app for a new generation of ethical investors, launched in 2024.'},
    {q:'In what year did the Halal Investment Fund list on the Stock Exchange?',o:['2008','2009','2012','2014'],a:1,e:'2009: 3.2bn units worth ₦2.79bn.'},
    {q:"Which is Nigeria's largest Shariah fixed income fund?",o:['LOTUS Halal Investment Fund','LOTUS Halal Fixed Income Fund','LOTUS Halal Equity ETF','LOTUS Waqf Fund'],a:1,e:'About ₦45.50bn in mid-2026.'},
    {q:'Which Islamic contract is based on leasing?',o:['Murabaha','Mudarabah','Ijarah','Wakalah'],a:2,e:'Ijarah: the asset is leased and the rent is the return.'},
    {q:'Who chairs the LOTUS Capital board?',o:['Fola Adeola','Amina Oyagbola','Lanre Akinbo','Lateefah Okunnu'],a:0,e:'Fola Adeola OFR, co-founder of GTBank.'},
    {q:'Founder Hajara Adeola was the first President of which body?',o:['FMAN','CIBN','NGX','ICAN'],a:0,e:'The Fund Managers Association of Nigeria.'},
    {q:'On which road is LOTUS House, the head office?',o:['Awolowo Road, Ikoyi','Broad Street, Lagos Island','Adeola Odeku, VI','Allen Avenue, Ikeja'],a:0,e:'182 Awolowo Road, Falomo, Ikoyi.'},
    {q:'Which award did the Osun Sukuk win in 2014?',o:['Best Bond Deal, Africa','IFN African Deal of the Year','Global Sukuk Award','Nigerian Deal of the Decade'],a:1,e:'Islamic Finance News, presented in Dubai.'},
    {q:'How many LOTUS locations are there across Nigeria?',o:['3','7','12','20'],a:2,e:'12 locations across 7 states.'},
    {q:'In what year did the CBN license LOTUS Bank?',o:['2019','2020','2021','2023'],a:2,e:'June 2021, as a non-interest commercial bank.'},
    {q:'Which business would a LOTUS fund screen out?',o:['A hospital','A tobacco maker','A telecoms firm','A property developer'],a:1,e:'Tobacco is one of five excluded industries.'},
    {q:'Who chairs the LOTUS Shariah Advisory Board?',o:['Prof. Monzer Kahf','Prof. Luqman Zakariyah','Dr. Marjan Muhammad','Muhammad Nuruddeen Lemu'],a:0,e:'Prof. Monzer Kahf, former senior economist at the Islamic Development Bank.'}
  ];

  var FUNDS=[
    {s:'LHFIF',n:'LOTUS Halal Fixed Income Fund',v:45.5,d:'~₦45.50bn',since:'Since 2016',pts:['~13,500 unit-holders','35 consecutive quarterly payouts','Largest Shariah fixed-income fund in Nigeria']},
    {s:'LHIF',n:'LOTUS Halal Investment Fund',v:17.0,d:'₦17.00bn',since:'Since 2008',pts:['17,000+ unit-holders','+35.85% in H1 2026','278% subscribed at launch']},
    {s:'LHE ETF',n:'LOTUS Halal Equity ETF',v:2.96,d:'₦2.96bn',since:'Since 2014',pts:['Tracks the NGX LOTUS Islamic Index','12–15 liquid halal equities']},
    {s:'WAQF',n:'LOTUS Waqf (Endowment) Fund',v:0.3956,d:'₦395.6m',since:'Since 2023',pts:['183 unit-holders','+26.47% in H1 2026','₦48.79 per unit paid in 2025']}
  ];

  var STORY=[
    {t:'London',k:'Before LOTUS',h:'Learning the markets',p:'Convertible bond analyst at BNP Paribas, then Director at UBS and at CCT Islamic Finance.'},
    {t:'2004',k:'The idea',h:'Founding LOTUS Capital',p:'Nigerians had no regulated way to invest without interest. She set out to build one.'},
    {t:'FMAN',k:'The industry',h:'Leading fund managers',p:'Became the first President of the Fund Managers Association of Nigeria.'},
    {t:'2021',k:'The bank',h:'Founding LOTUS Bank',p:'Founded and chairs LOTUS Bank, a CBN-licensed non-interest commercial bank.'},
    {t:'Today',k:'Decade three',h:'Twenty years on',p:'Leads a firm managing ₦65.85bn for 30,900+ investors. Fellow of the Aspen Global Leadership Network.'}
  ];

  var TN=[
    {l:'Money in our funds',then:['₦2.78bn','raised by our first fund, 2008'],now:['₦65.85bn','across four funds, 2026']},
    {l:'Funds on offer',then:['1','Shariah mutual fund, 2008'],now:['4','funds, including an ETF and a Waqf fund']},
    {l:'Sukuk structured',then:['₦11.4bn','our first public Sukuk, Osun 2013'],now:['₦350bn','sovereign Sukuk advised, 2017–2020']}
  ];

  var IMP=[
    {a:'road',n:'25',h:'Highways',p:'Road projects across all six geopolitical zones, funded by the first FGN Sovereign Sukuk.',y:'2017 · ₦100bn'},
    {a:'school',n:'Schools',h:'For the State of Osun',p:'Modern public secondary schools, built with Africa\'s first sub-sovereign Sukuk.',y:'2013 · ₦11.4bn'},
    {a:'tree',n:'₦48.79',h:'Per unit, given back',p:'Waqf fund returns go to education, healthcare and economic empowerment.',y:'2025 distribution'}
  ];

  var reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ==========================================================================
     LOTUS@20 Milestones & Digital Badges System - State & Storage
     ========================================================================== */
  var BADGES_STORAGE_KEY = 'lotus20:badges_unlocked';
  var PROGRESS_STORAGE_KEY = 'lotus20:badges_progress';

  var BADGES_CONFIG = [
    {
      id: 'history_explorer',
      title: 'History Explorer',
      tagline: 'Chronicles of 20 Years',
      cat: 'History · Chapter 01',
      desc: 'Explore all 20 timeline milestones (2004–2026) depicting the foundational journey of LOTUS Capital.',
      icon: '🧭',
      goto: 'timeline',
      target: 20,
      unit: 'milestones'
    },
    {
      id: 'pioneering_spirit',
      title: 'Pioneering Spirit',
      tagline: 'Industry Trailblazer',
      cat: 'Firsts · Chapter 02',
      desc: 'Discover all 20 historical firsts and industry records pioneered by LOTUS in Nigeria.',
      icon: '⚡',
      goto: 'firsts',
      target: 20,
      unit: 'records'
    },
    {
      id: 'numbers_master',
      title: 'Master of Numbers',
      tagline: 'Financial Stature',
      cat: 'Funds · Chapter 03',
      desc: 'Inspect the 20 fund facts, assets under management, and financial milestones across 20 years.',
      icon: '📈',
      goto: 'facts',
      target: 20,
      unit: 'facts'
    },
    {
      id: 'impact_advocate',
      title: 'Real-World Impact',
      tagline: 'Beyond Financial Returns',
      cat: 'Impact · Chapter 04',
      desc: 'Discover 20 societal impact stories from roads and infrastructure to clean water and education.',
      icon: '🌱',
      goto: 'impact20',
      target: 20,
      unit: 'stories'
    },
    {
      id: 'halal_guardian',
      title: 'Halal Integrity Guardian',
      tagline: 'Ethical Screening Standards',
      cat: 'Integrity · Chapter 05',
      desc: 'Examine the 20 rigorous Shari\'ah governance and non-interest finance principles.',
      icon: '⚖️',
      goto: 'halal20',
      target: 20,
      unit: 'principles'
    },
    {
      id: 'voices_lotus',
      title: 'Voices of LOTUS',
      tagline: 'Leadership & Vision',
      cat: 'People · Chapter 06',
      desc: 'Read founder Hajara Adeola\'s story and meet the key personalities who shaped two decades.',
      icon: '🎙️',
      goto: 'founder',
      target: 5,
      unit: 'profiles'
    },
    {
      id: 'nationwide_footprint',
      title: 'Nationwide Footprint',
      tagline: 'Across All Geo-Zones',
      cat: 'Presence · Chapter 08',
      desc: 'Explore LOTUS\'s branch network growth from a single Ikoyi desk to 12 locations across Nigeria.',
      icon: '📍',
      goto: 'offices',
      target: 1,
      unit: 'network'
    },
    {
      id: 'halal_scholar',
      title: 'Halal Finance Scholar',
      tagline: 'Knowledge Certified',
      cat: 'Challenge · Chapter 10',
      desc: 'Complete the 20-question LOTUS@20 interactive challenge testing your Islamic finance know-how.',
      icon: '🎓',
      goto: 'quiz',
      target: 1,
      unit: 'challenge'
    },
    {
      id: 'sonic_traveler',
      title: 'Sonic Immersion',
      tagline: 'Tuned to the Story',
      cat: 'Experience',
      desc: 'Experience the retrospective with ambient soundscapes and authentic Nigerian female voice narration.',
      icon: '🎵',
      goto: 'welcome',
      target: 1,
      unit: 'narration'
    },
    {
      id: 'grand_centurion',
      title: 'LOTUS@20 Grand Champion',
      tagline: 'Pinnacle Commemorative Award',
      cat: 'Master Award',
      desc: 'Unlock all 9 milestone badges across the commemorative retrospective to achieve master status.',
      icon: '🏆',
      goto: 'finale',
      target: 9,
      unit: 'badges'
    }
  ];

  var unlockedBadges = {};
  try {
    var rawBadges = localStorage.getItem(BADGES_STORAGE_KEY);
    if(rawBadges) unlockedBadges = JSON.parse(rawBadges) || {};
  } catch(e){}
  if(!unlockedBadges || typeof unlockedBadges !== 'object') unlockedBadges = {};

  var progressTracker = {
    timeline: {},
    firsts: {},
    facts: {},
    impact20: {},
    halal20: {},
    people20: {},
    pages: {},
    quizDone: false,
    soundActive: false
  };
  try {
    var rawProg = localStorage.getItem(PROGRESS_STORAGE_KEY);
    if(rawProg) {
      var pObj = JSON.parse(rawProg);
      if(pObj && typeof pObj === 'object') {
        Object.keys(pObj).forEach(function(k){
          if(typeof pObj[k] === 'object' && pObj[k] !== null){
            progressTracker[k] = Object.assign(progressTracker[k] || {}, pObj[k]);
          } else {
            progressTracker[k] = pObj[k];
          }
        });
      }
    }
  } catch(e){}

  if(!progressTracker.timeline) progressTracker.timeline = {};
  if(!progressTracker.firsts) progressTracker.firsts = {};
  if(!progressTracker.facts) progressTracker.facts = {};
  if(!progressTracker.impact20) progressTracker.impact20 = {};
  if(!progressTracker.halal20) progressTracker.halal20 = {};
  if(!progressTracker.people20) progressTracker.people20 = {};
  if(!progressTracker.pages) progressTracker.pages = {};

  function saveBadgesStorage(){
    try {
      localStorage.setItem(BADGES_STORAGE_KEY, JSON.stringify(unlockedBadges));
      localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(progressTracker));
    } catch(e){}
  }

  /* ---------- safe DOM helpers ---------- */
  function safeClosest(target, selector){
    if(!target) return null;
    var el = target.nodeType === 3 ? target.parentElement : target;
    return el && typeof el.closest === 'function' ? el.closest(selector) : null;
  }

  /* ---------- carousel engine ---------- */
  function Carousel(wrap,track,cards,onActive){
    var C={active:-1,cards:cards};
    C.go=function(i,force){
      if(!cards || !cards.length) return;
      i=Math.max(0,Math.min(cards.length-1,i));
      var c=cards[i];
      if(!c || !wrap || !track) return;
      var w=wrap.clientWidth;
      if(w > 0){
        var x=c.offsetLeft+c.offsetWidth/2-w/2;
        track.style.transform='translate3d('+(-x)+'px,0,0)';
      } else {
        requestAnimationFrame(function(){
          if(!wrap || !track || !cards[i]) return;
          var nw=wrap.clientWidth;
          var nc=cards[i];
          var nx=nc.offsetLeft+nc.offsetWidth/2-nw/2;
          track.style.transform='translate3d('+(-nx)+'px,0,0)';
        });
      }
      if(i!==C.active||force){
        C.active=i;
        cards.forEach(function(el,j){
          if(!el) return;
          el.classList.toggle('active',j===i);
          el.classList.toggle('near',Math.abs(j-i)===1);
          if(j!==i)el.classList.remove('open');
        });
        if(typeof onActive === 'function') onActive(i);
      }
    };
    C.step=function(d){
      if(!cards || !cards.length) return false;
      var n=C.active+d;
      if(n<0||n>cards.length-1) return false;
      C.go(n);
      return true;
    };

    var acc=0,lock=0,lastWheel=0;
    wrap.addEventListener('wheel',function(e){
      var d=Math.abs(e.deltaX)>Math.abs(e.deltaY)?e.deltaX:e.deltaY;
      var now=Date.now();
      if(now-lastWheel>300) acc=0;
      lastWheel=now;
      if(now<lock) return;
      acc+=d;
      if(Math.abs(acc)>45){
        e.preventDefault();
        var dir=acc>0?1:-1;
        acc=0;
        lock=now+380;
        stopPlay();
        C.step(dir);
      }
    },{passive:false});

    /* Touch & mouse pointer drag for smooth carousel interaction */
    var isDown=false,startX=0,startY=0,hasMoved=false;
    wrap.addEventListener('pointerdown',function(e){
      if(safeClosest(e.target,'button,a,input,select,textarea,.why')) return;
      isDown=true;
      startX=e.clientX;
      startY=e.clientY;
      hasMoved=false;
    });
    window.addEventListener('pointermove',function(e){
      if(!isDown) return;
      var dx=e.clientX-startX;
      var dy=e.clientY-startY;
      if(Math.abs(dx)>15 && Math.abs(dx)>Math.abs(dy)){
        hasMoved=true;
      }
    });
    window.addEventListener('pointerup',function(e){
      if(!isDown) return;
      isDown=false;
      if(!hasMoved) return;
      var dx=e.clientX-startX;
      var dy=e.clientY-startY;
      if(Math.abs(dx)>40 && Math.abs(dx)>Math.abs(dy)*1.1){
        stopPlay();
        C.step(dx<0?1:-1);
      }
    });

    if(cards && cards.length > 0){
      C.go(0, true);
    }

    return C;
  }

  /* ---------- timeline ---------- */
  var stage=document.getElementById('stage'),track=document.getElementById('track'),twrap=document.getElementById('twrap');
  var range=document.getElementById('range'),bigYr=document.getElementById('bigYr'),phaseName=document.getElementById('phaseName'),count=document.getElementById('count');
  var marks=document.getElementById('marks'),playBtn=document.getElementById('play');
  var N=EV.length;if(range)range.max=N-1;
  var cards=[],tl,lastYr=null;
  EV.forEach(function(ev,i){
    var c=document.createElement('article');c.className='card';
    c.style.setProperty('--tilt',(i%2?2.2:-2.2)+'deg');c.style.setProperty('--tint',ERAS[ev.e].tint);
    var partners=WHY[i][1].split(' · ').map(function(x){return '<span>'+x+'</span>';}).join('');
    c.innerHTML=(ev.f?'<span class="first">Nigerian first</span>':'')+
      '<div class="card-top"><span class="y">'+ev.y+'</span><span class="ph">'+ERAS[ev.e].n.split(' · ')[1]+'</span></div>'+
      '<div class="card-clip"><div class="illus">'+ART[ev.a]+'</div>'+
      '<div class="card-body"><h3>'+ev.h+'</h3><p>'+ev.p+'</p><span class="chip">'+ev.s+'</span><button type="button" class="why-btn">Why it mattered +</button></div>'+
      '<div class="why"><button type="button" class="why-x" aria-label="Close">&times;</button><span class="lbl">Why it mattered</span><div class="big">'+WHY[i][0]+'</div>'+
      '<div class="who"><span class="lbl">Who was involved</span><div class="partners">'+partners+'</div></div></div></div>';
    c.addEventListener('click',function(e){if(safeClosest(e.target,'button,a'))return;if(tl.active!==i){stopPlay();tl.go(i);}});
    var wb=c.querySelector('.why-btn'),wx=c.querySelector('.why-x');
    if(wb)wb.addEventListener('click',function(e){e.stopPropagation();stopPlay();if(tl.active!==i){tl.go(i);}c.classList.add('open');if(wx)wx.focus({preventScroll:true});});
    if(wx)wx.addEventListener('click',function(e){e.stopPropagation();c.classList.remove('open');if(wb)wb.focus({preventScroll:true});});
    if(track)track.appendChild(c);cards.push(c);
  });
  var eraStart=[];EV.forEach(function(ev,i){if(eraStart[ev.e]===undefined)eraStart[ev.e]=i;});
  if(marks){
    ERAS.forEach(function(er,k){
      var b=document.createElement('button');b.textContent=er.n.split(' · ')[1];b.style.left=(eraStart[k]/(N-1)*100)+'%';
      b.addEventListener('click',function(){stopPlay();tl.go(eraStart[k]);});marks.appendChild(b);
    });
  }
  tl=Carousel(twrap,track,cards,function(i){
    var ev=EV[i],er=ERAS[ev.e];
    if(stage){
      stage.style.setProperty('--stage-bg',er.bg);stage.style.setProperty('--stage-fg',er.fg);stage.style.setProperty('--stage-grid',er.grid);
    }
    if(lastYr!==i&&bigYr){bigYr.textContent=ev.y;bigYr.classList.remove('flip');void bigYr.offsetWidth;bigYr.classList.add('flip');lastYr=i;}
    if(phaseName)phaseName.textContent=er.n;
    if(count)count.textContent=String(i+1).padStart(2,'0')+' / '+N;
    if(range){range.value=i;range.style.setProperty('--fill',(i/(N-1)*100)+'%');}
    if(marks){Array.prototype.forEach.call(marks.children,function(b,k){b.classList.toggle('on',k===ev.e);});}
    if(typeof updateChrome==='function'&&cur>=0)updateChrome(cur);
    if(typeof onCardAudioTrigger==='function')onCardAudioTrigger();
    if(typeof recordTimelineCard==='function')recordTimelineCard(i);
  });
  if(range)range.addEventListener('input',function(){stopPlay();tl.go(+range.value);});
  var prevBtn=document.getElementById('prev');if(prevBtn)prevBtn.addEventListener('click',function(){stopPlay();tl.step(-1);});
  var nextBtnEl=document.getElementById('nextBtn');if(nextBtnEl)nextBtnEl.addEventListener('click',function(){stopPlay();tl.step(1);});
  var timer=null,navPlayBtn=document.getElementById('navPlayBtn');
  function updatePlayUI(playing){
    var lbl=playing?'&#10074;&#10074; Auto-advancing (5s)':'&#9654; Auto-advance (5s)';
    var shortLbl=playing?'&#10074;&#10074; Auto (5s)':'&#9654; Auto (5s)';
    if(playBtn){playBtn.setAttribute('aria-pressed',playing?'true':'false');playBtn.innerHTML=lbl;}
    if(navPlayBtn){navPlayBtn.setAttribute('aria-pressed',playing?'true':'false');navPlayBtn.innerHTML=shortLbl;}
    if(stage)stage.classList.toggle('auto-playing',playing);
  }
  function stopPlay(){
    if(timer){clearInterval(timer);timer=null;}
    updatePlayUI(false);
  }
  function startPlay(){
    if(timer)clearInterval(timer);
    updatePlayUI(true);
    timer=setInterval(function(){
      if(tl.active>=N-1||tl.active<0){
        tl.go(0);
      } else {
        tl.step(1);
      }
    },5000);
  }
  function togglePlay(){
    if(timer){
      stopPlay();
    } else {
      if(tl.active>=N-1||tl.active<0)tl.go(0);
      startPlay();
    }
  }
  if(playBtn)playBtn.addEventListener('click',togglePlay);
  if(navPlayBtn)navPlayBtn.addEventListener('click',togglePlay);

  /* ---------- "20" carousels ---------- */
  var CAR={timeline:tl};
  function Twenty(pid,items,cfg){
    var st=document.getElementById('st-'+pid);
    if(!st) return null;
    st.innerHTML='<div class="stage-head"><div><div class="st-label"><i></i>'+cfg.label+'</div><div class="fnum">#01</div><div class="phase-name"></div></div>'+
      '<div class="st-controls"><div class="count">01 / '+items.length+'</div></div></div>'+
      '<div class="track-wrap"><div class="track"></div></div>'+
      '<div class="scrub"><div class="scrub-inner"><input type="range" class="range" min="0" max="'+(items.length-1)+'" value="0" aria-label="Scrub through '+cfg.label+'"><div class="hint">Swipe, drag the slider, tap a card, or use &larr; &rarr;</div></div></div>';
    var wrap=st.querySelector('.track-wrap'),track=st.querySelector('.track'),fnum=st.querySelector('.fnum'),sub=st.querySelector('.phase-name'),cnt=st.querySelector('.count'),rng=st.querySelector('.range'),cs=[],C,last=null;
    items.forEach(function(it,i){
      var c=document.createElement('article');c.className='card fcard'+(cfg.press?' pcard':'')+(cfg.people?' ppl':'');
      c.style.setProperty('--tilt',(i%2?2:-2)+'deg');c.style.setProperty('--tint',cfg.tints[i%cfg.tints.length]);
      var badge=it.b?'<span class="chip'+(/first/i.test(it.b)?' chip-red':'')+'">'+it.b+'</span>':'';
      if(cfg.people){
        c.innerHTML=personCard(it,i);
        wirePerson(c,i);
        c.addEventListener('click',function(e){
          if(safeClosest(e.target,'a,button'))return;
          if(C&&C.active!==i)C.go(i);
        });
        track.appendChild(c);cs.push(c);
        return;
      }
      var vis=cfg.press?'<div class="outlet"><b>'+it.o+'</b><span>'+it.y+'</span></div>':(it.a&&ART[it.a]?ART[it.a]:'<div class="bigstat">'+it.big+'</div>');
      c.innerHTML='<div class="card-top"><span class="y">#'+String(i+1).padStart(2,'0')+'</span><span class="ph">'+(cfg.press?it.o:it.y)+'</span></div>'+
        '<div class="illus">'+vis+'</div><div class="card-body"><h3>'+it.t+'</h3>'+(it.p?'<p>'+it.p+'</p>':'')+badge+
        (cfg.press?'<a class="readbtn" href="'+it.u+'" target="_blank" rel="noopener">Read the story &#8599;</a>':'')+'</div>';
      c.addEventListener('click',function(e){
        if(safeClosest(e.target,'a,button'))return;
        if(C&&C.active!==i)C.go(i);
      });
      track.appendChild(c);cs.push(c);
    });
    var localMarks=null;
    if(cfg.marks){
      localMarks=document.createElement('div');localMarks.className='phase-marks';
      var scrubInner=st.querySelector('.scrub-inner');
      if(scrubInner)scrubInner.insertBefore(localMarks,scrubInner.querySelector('.hint'));
      var seen={};
      items.forEach(function(it,i){
        if(seen[it.g])return;
        seen[it.g]=1;
        var b=document.createElement('button');b.dataset.g=it.g;b.textContent=it.g;b.style.left=(i/(items.length-1)*100)+'%';
        b.addEventListener('click',function(){C.go(i);});
        localMarks.appendChild(b);
      });
    }
    C=Carousel(wrap,track,cs,function(i){
      var it=items[i];
      if(!it) return;
      st.style.setProperty('--stage-bg',cfg.bgs[i%cfg.bgs.length]);st.style.setProperty('--stage-fg',K);st.style.setProperty('--stage-grid','rgba(0,0,0,.07)');
      if(last!==i&&fnum){fnum.textContent='#'+String(i+1).padStart(2,'0');fnum.classList.remove('flip');void fnum.offsetWidth;fnum.classList.add('flip');last=i;}
      if(sub)sub.textContent=cfg.people?(it.g+' · '+it.n):cfg.press?(it.y+' · '+it.o):(it.y+' · '+it.t);
      if(localMarks)Array.prototype.forEach.call(localMarks.children,function(b){b.classList.toggle('on',b.dataset.g===it.g);});
      if(cnt)cnt.textContent=String(i+1).padStart(2,'0')+' / '+items.length;
      if(rng){rng.value=i;rng.style.setProperty('--fill',(i/(items.length-1)*100)+'%');}
      if(typeof updateChrome==='function'&&cur>=0)updateChrome(cur);
      if(typeof onCardAudioTrigger==='function')onCardAudioTrigger();
      if(typeof recordTwentyCard==='function')recordTwentyCard(pid, i);
    });
    if(rng)rng.addEventListener('input',function(){C.go(+rng.value);});
    CAR[pid]=C;return C;
  }
  var REDS=['#FFE1DC','#EAEAEA','#FBEAE7','#F5F5F5'],TINTS=['#FFFFFF','#FFE1DC','#F5F5F5','#FBEAE7'];
  Twenty('firsts',FIRSTS20,{label:'20 firsts &amp; records',bgs:REDS,tints:TINTS});
  Twenty('facts',FACTS20,{label:'20 fund facts',bgs:['#F5F5F5','#FFE1DC','#EAEAEA','#FBEAE7'],tints:TINTS});
  Twenty('impact20',IMPACT20,{label:'20 ways we made an impact',bgs:REDS,tints:TINTS});
  Twenty('halal20',HALAL20,{label:'20 ways we make it halal',bgs:['#F5F5F5','#FFE1DC','#EAEAEA','#FBEAE7'],tints:TINTS});
  var PCOL={Management:G,Board:'#FFFFFF','Shariah Board':P,Community:'#EAEAEA'};
  function personCard(m,i){
    return '<div class="card-top"><span class="y">#'+String(i+1).padStart(2,'0')+'</span><span class="ph">'+m.g+'</span></div>'+
      '<div class="card-clip"><div class="illus"><span class="pmono" style="background:'+(m.i==='FA'||m.i==='HA'?R:PCOL[m.g])+';color:'+(m.i==='FA'||m.i==='HA'?'#fff':'#111')+'">'+m.i+'</span></div>'+
      '<div class="card-body"><h3>'+m.n+'</h3><div class="prole">'+m.r+'</div><p>'+m.p+'</p><button type="button" class="why-btn bio-btn">Read full bio +</button></div>'+
      '<div class="why"><button type="button" class="why-x" aria-label="Close bio">&times;</button><span class="lbl">'+m.g+' &middot; '+m.r+'</span><div class="big">'+m.n+'</div><p class="bio">'+m.bio+'</p>'+
      '<a class="readbtn" href="'+m.u+'" target="_blank" rel="noopener">More on the LOTUS website &#8599;</a></div></div>';
  }
  function wirePerson(c,i){
    c.querySelector('.bio-btn').addEventListener('click',function(e){e.stopPropagation();var C=CAR.people20;if(C&&C.active!==i){C.go(i);}c.classList.add('open');c.querySelector('.why-x').focus({preventScroll:true});});
    c.querySelector('.why-x').addEventListener('click',function(e){e.stopPropagation();c.classList.remove('open');c.querySelector('.bio-btn').focus({preventScroll:true});});
  }
  Twenty('people20',PEOPLE20,{label:'20 personalities',bgs:['#FFE1DC','#F5F5F5','#FBEAE7','#EAEAEA'],tints:['#FFFFFF'],people:1,marks:1});
  Twenty('press',PRESS20,{label:'Top 20 headlines',bgs:REDS,tints:['#111111','#C10202','#8F0101','#333333'],press:1});

  /* ---------- counters + bars ---------- */
  function fmt(v,d,sep){var s=d?v.toFixed(d):Math.round(v).toString();if(sep)s=s.replace(/\B(?=(\d{3})+(?!\d))/g,',');return s;}
  var counted=false;
  function runCounters(){
    if(counted||reduced)return;counted=true;
    document.querySelectorAll('[data-to]').forEach(function(el){
      var to=+el.dataset.to,dec=+(el.dataset.dec||0),pre=el.dataset.pre||'',post=el.dataset.post||'',sep=el.dataset.sep,t0=performance.now();
      (function step(t){var k=Math.min(1,(t-t0)/1400),e=1-Math.pow(1-k,3);el.textContent=pre+fmt(to*e,dec,sep)+post;if(k<1)requestAnimationFrame(step);})(t0);
    });
  }
  var bars=document.getElementById('bars'),detail=document.getElementById('fundDetail'),fmax=FUNDS[0].v,barEls=[];
  FUNDS.forEach(function(f,i){
    var b=document.createElement('button');b.className='bar';b.setAttribute('aria-pressed','false');
    b.innerHTML='<span class="nm">'+f.s+'</span><span class="trk"><span class="fill" style="width:'+(reduced?(f.v/fmax*100):0)+'%"></span></span><span class="val">'+f.d+'</span>';
    b.addEventListener('click',function(){selFund(i);});bars.appendChild(b);barEls.push(b);
  });
  function selFund(i){
    var f=FUNDS[i];
    barEls.forEach(function(b,j){b.setAttribute('aria-pressed',j===i?'true':'false');});
    detail.innerHTML='<div class="since">'+f.since+'</div><h4>'+f.n+'</h4><div class="amt">'+f.d+'</div><ul>'+f.pts.map(function(p){return '<li>'+p+'</li>';}).join('')+'</ul>';
    detail.classList.remove('swap');void detail.offsetWidth;detail.classList.add('swap');
  }
  function growBars(){setTimeout(function(){FUNDS.forEach(function(f,i){barEls[i].querySelector('.fill').style.width=(f.v/fmax*100)+'%';});},250);}
  selFund(0);

  /* ---------- shariah steps ---------- */
  var stepsEl=document.getElementById('steps'),panel=document.getElementById('screenPanel'),stepBtns=[];
  STEPS.forEach(function(st,i){
    var b=document.createElement('button');b.className='step';b.setAttribute('role','tab');
    b.innerHTML='<span class="sn">0'+(i+1)+'</span><span><b>'+st.t+'</b><small>'+st.k+'</small></span>';
    b.addEventListener('click',function(){selStep(i);});stepsEl.appendChild(b);stepBtns.push(b);
  });
  function selStep(i){
    var st=STEPS[i];
    stepBtns.forEach(function(b,j){b.setAttribute('aria-selected',j===i?'true':'false');});
    panel.innerHTML='<span class="lbl">Step 0'+(i+1)+' of 04 &middot; '+st.t+'</span><h3>'+st.h+'</h3><p>'+st.p+'</p>'+
      '<div class="xlist'+(st.no?' no':'')+'">'+st.x.map(function(x,k){return '<span style="animation-delay:'+(k*60)+'ms">'+x+'</span>';}).join('')+'</div>'+
      '<div class="meter" aria-hidden="true">'+[0,1,2,3].map(function(k){return '<i class="'+(k<=i?'on':'')+'"></i>';}).join('')+'</div>';
    panel.classList.remove('swap');void panel.offsetWidth;panel.classList.add('swap');
  }
  selStep(0);

  /* ---------- glossary ---------- */
  var termsEl=document.getElementById('terms'),defn=document.getElementById('defn'),termBtns=[];
  TERMS.forEach(function(t,i){
    var b=document.createElement('button');b.className='term';b.textContent=t.w;b.setAttribute('aria-pressed','false');
    b.addEventListener('click',function(){selTerm(i);});termsEl.appendChild(b);termBtns.push(b);
  });
  function selTerm(i){
    var t=TERMS[i];
    termBtns.forEach(function(b,j){b.setAttribute('aria-pressed',j===i?'true':'false');});
    defn.innerHTML='<div class="w">'+t.w+'</div><div class="ph">Means: '+t.m+'</div><p>'+t.d+'</p><span class="use">At LOTUS: '+t.u+'</span>';
    defn.classList.remove('swap');void defn.offsetWidth;defn.classList.add('swap');
  }
  selTerm(1);

  /* ---------- Nationwide Growth Story (2006–2026) ---------- */
  var NG=[[2.70,6.37],[2.72,9.0],[3.6,10.3],[3.6,11.7],[4.1,13.5],[5.5,13.9],[6.9,13.2],[8.1,13.3],[9.6,12.8],[11.2,13.4],[12.5,13.1],[13.6,13.7],[14.2,13.1],[14.6,12.0],[14.2,11.2],[13.3,10.0],[13.1,9.0],[12.5,8.6],[11.9,7.1],[11.1,6.5],[10.6,7.1],[9.7,6.5],[8.9,5.0],[8.5,4.6],[7.1,4.4],[6.0,4.3],[5.4,5.2],[4.8,6.3],[3.4,6.4]];
  function proj(lon,lat){return [20+(lon-2.6)/(14.8-2.6)*360,20+(13.95-lat)/(13.95-4.2)*260];}
  var mapSvg=document.getElementById('mapSvg'),mapEl=document.getElementById('map');
  if(mapSvg){
    var poly=NG.map(function(c){var q=proj(c[0],c[1]);return q[0].toFixed(1)+','+q[1].toFixed(1);}).join(' ');
    mapSvg.innerHTML='<polygon points="'+poly+'" fill="#FFFFFF" stroke="#111" stroke-width="3" stroke-linejoin="round"/>'+
      '<g transform="translate(360,40)"><circle r="16" fill="#FFFFFF" stroke="#111" stroke-width="3"/><path d="M0 -10 L6 6 L0 2 L-6 6Z" fill="#111"/></g>'+
      '<text x="360" y="72" text-anchor="middle" font-family="Space Mono, monospace" font-weight="700" font-size="12" fill="#111">N</text>';
  }

  var GROWTH_STAGES=[
    {
      id:'origin',
      phase:'origin',
      era:'2006 · The Seed',
      title:'The Starting Line at Falomo, Ikoyi',
      tag:'Head Office · Lagos State',
      desc:'When LOTUS Capital received its SEC licence in 2006, non-interest finance in Nigeria was uncharted territory. Operating from LOTUS House on Awolowo Road, the founding team laid the regulatory and institutional foundation for the entire halal capital market in West Africa.',
      reach:'1 Location · 1 State (Lagos)',
      cities:['Lagos'],
      spotTitle:'LOTUS House, Ikoyi (HQ)',
      spotDesc:'The birthplace of regulated Islamic finance in Nigeria. From here, the team drafted fund structures, advised governments, and launched Nigeria\'s first halal mutual fund.'
    },
    {
      id:'north',
      phase:'north',
      era:'Commercial Hubs',
      title:'Northern Corridors: Kano & Kaduna',
      tag:'North & Northwest Expansion',
      desc:'To connect with Nigeria\'s historic trading heartlands, LOTUS established regional hubs along Murtala Mohammed Way in Kano and Ahmadu Bello Way in Kaduna. This anchored private wealth and institutional capital, building the investor trust that later powered the FGN Sovereign Sukuk issues.',
      reach:'2 Key Northern Centres · Kano & Kaduna States',
      cities:['Kano','Kaduna'],
      spotTitle:'Kano & Kaduna Corridors',
      spotDesc:'Anchoring non-interest capital in Northern commercial powerhouses, giving thousands of families and business owners direct access to regulated halal funds.'
    },
    {
      id:'belt',
      phase:'belt',
      era:'National Bridge',
      title:'Connecting the Middle Belt & Niger Delta',
      tag:'Rivers, Niger & Kwara States',
      desc:'Expansion extended across regional resource and administrative hubs: Port Harcourt along Aba Road in Rivers State, Minna in partnership with the Islamic Education Trust in Niger State, and Ilorin in Kwara State. This connected civil servants, educators, and oil & gas professionals.',
      reach:'3 Strategic Centres · Rivers, Niger & Kwara',
      cities:['Port Harcourt','Minna','Ilorin'],
      spotTitle:'Rivers, Niger & Kwara',
      spotDesc:'Expanding beyond commercial megacities to serve universities, public servants, and enterprise leaders seeking interest-free capital management.'
    },
    {
      id:'retail',
      phase:'retail',
      era:'Grassroots Reach',
      title:'Community Touchpoints & Retail Wealth',
      tag:'Decentralized Service Centres',
      desc:'To bring halal investing within walking distance of everyday people, LOTUS opened community service hubs across high-traffic commerce nodes in Lagos (Ikeja, Surulere, Egbeda, Ikorodu) and Ogun State (Abeokuta, Ijebu-Ode). Paired with the LOTUS Tribe mobile app, 30,900+ unit-holders now invest with ease.',
      reach:'6 Community Centres · Lagos & Ogun States',
      cities:['Lagos','Abeokuta','Ijebu-Ode'],
      spotTitle:'Community Touchpoints',
      spotDesc:'Physical service centres embedded in major commercial markets, pairing human guidance with digital apps so everyday savers can build wealth ethically.'
    }
  ];

  var CITY={},cityOrder=[];
  LOCS.forEach(function(l,i){
    var key=l.c==='Lagos'?'Lagos':(l.c==='Ogun'?l.n:l.c);
    if(!CITY[key]){
      CITY[key]={name:key,lon:l.c==='Lagos'?3.40:l.lon,lat:l.c==='Lagos'?6.50:l.lat,count:0};
      cityOrder.push(key);
    }
    CITY[key].count++;
  });

  var pins={};
  if(mapEl){
    cityOrder.forEach(function(k){
      var cy=CITY[k],q=proj(cy.lon,cy.lat),b=document.createElement('button');
      b.className='pin';b.setAttribute('aria-label',cy.name+' ('+cy.count+' locations)');
      b.style.left=(q[0]/400*100)+'%';b.style.top=(q[1]/300*100)+'%';
      b.innerHTML='<span class="dot">'+(cy.count>1?'<i>'+cy.count+'</i>':'')+'</span><span class="nm">'+cy.name+'</span>';
      b.addEventListener('click',function(){
        // Find matching growth stage
        var matchStageIdx=0;
        if(k==='Kano'||k==='Kaduna') matchStageIdx=1;
        else if(k==='Rivers'||k==='Niger'||k==='Kwara'||k==='Port Harcourt'||k==='Minna'||k==='Ilorin') matchStageIdx=2;
        else if(k==='Abeokuta'||k==='Ijebu-Ode'||k==='Ogun') matchStageIdx=3;
        selectGrowthStage(matchStageIdx);
      });
      mapEl.appendChild(b);pins[k]=b;
    });
  }

  var growthCardsEl=document.getElementById('growthCards');
  var growthTabsEl=document.getElementById('growthTabs');
  var gSpotKicker=document.getElementById('gSpotKicker');
  var gSpotTitle=document.getElementById('gSpotTitle');
  var gSpotDesc=document.getElementById('gSpotDesc');
  var growthMapCount=document.getElementById('growthMapCount');
  var mapCap=document.getElementById('mapCap');
  var activeCardIdx=0;

  function renderGrowthCards(filterPhase){
    if(!growthCardsEl) return;
    var filtered=(filterPhase==='all')?GROWTH_STAGES:GROWTH_STAGES.filter(function(s){return s.phase===filterPhase;});
    growthCardsEl.innerHTML=filtered.map(function(s){
      var fullIdx=GROWTH_STAGES.indexOf(s);
      var isAct=(fullIdx===activeCardIdx);
      return '<article class="g-card'+(isAct?' active':'')+'" data-idx="'+fullIdx+'" tabindex="0" role="button" aria-pressed="'+(isAct?'true':'false')+'">'+
        '<div class="g-card-top">'+
          '<span class="g-card-era">'+s.era+'</span>'+
          '<span class="g-card-tag">'+s.tag+'</span>'+
        '</div>'+
        '<h3>'+s.title+'</h3>'+
        '<p>'+s.desc+'</p>'+
        '<div class="g-card-reach">'+
          '<span class="g-card-pill"><b>Footprint:</b> '+s.reach+'</span>'+
        '</div>'+
      '</article>';
    }).join('');

    growthCardsEl.querySelectorAll('.g-card').forEach(function(card){
      card.addEventListener('click',function(){
        var idx=+card.dataset.idx;
        selectGrowthStage(idx);
      });
      card.addEventListener('keydown',function(e){
        if(e.key==='Enter'||e.key===' '){
          e.preventDefault();
          selectGrowthStage(+card.dataset.idx);
        }
      });
    });
  }

  function selectGrowthStage(idx){
    activeCardIdx=idx;
    var stage=GROWTH_STAGES[idx];
    if(!stage) return;

    if(growthCardsEl){
      growthCardsEl.querySelectorAll('.g-card').forEach(function(c){
        var isThis=+c.dataset.idx===idx;
        c.classList.toggle('active',isThis);
        c.setAttribute('aria-pressed',isThis?'true':'false');
      });
    }

    if(gSpotKicker) gSpotKicker.textContent=stage.era;
    if(gSpotTitle) gSpotTitle.textContent=stage.spotTitle;
    if(gSpotDesc) gSpotDesc.textContent=stage.spotDesc;
    if(growthMapCount) growthMapCount.textContent=stage.reach.split('·')[0].trim();
    if(mapCap) mapCap.textContent=stage.reach;

    highlightMapPins(stage.cities);

    if(typeof isAudioActive!=='undefined'&&isAudioActive){
      if(typeof playNavChime==='function') playNavChime(false);
      if(typeof speakNarration==='function') speakNarration(stage.title+'. '+stage.spotTitle+': '+stage.spotDesc);
    }
  }

  function highlightMapPins(citiesList){
    Object.keys(pins).forEach(function(cityKey){
      var shouldHighlight=!citiesList||citiesList.some(function(c){
        return cityKey.toLowerCase().indexOf(c.toLowerCase())>=0 || c.toLowerCase().indexOf(cityKey.toLowerCase())>=0;
      });
      pins[cityKey].classList.toggle('highlight',shouldHighlight);
      pins[cityKey].setAttribute('aria-pressed',shouldHighlight?'true':'false');
    });
  }

  if(growthTabsEl){
    growthTabsEl.querySelectorAll('.g-tab').forEach(function(btn){
      btn.addEventListener('click',function(){
        var ph=btn.dataset.phase;
        growthTabsEl.querySelectorAll('.g-tab').forEach(function(b){
          var isBtn=(b===btn);
          b.classList.toggle('on',isBtn);
          b.setAttribute('aria-selected',isBtn?'true':'false');
        });
        if(ph==='all'){
          renderGrowthCards('all');
          selectGrowthStage(0);
          highlightMapPins(null);
        } else {
          var foundIdx=GROWTH_STAGES.findIndex(function(s){return s.phase===ph;});
          renderGrowthCards(ph);
          if(foundIdx>=0) selectGrowthStage(foundIdx);
        }
      });
    });
  }

  renderGrowthCards('all');
  selectGrowthStage(0);

  /* ---------- then & now ---------- */
  var tnEl=document.getElementById('tn');
  function renderTN(p){
    document.querySelectorAll('.sw[data-p]').forEach(function(b){b.setAttribute('aria-pressed',b.getAttribute('data-p')===p?'true':'false');});
    tnEl.classList.toggle('now',p==='now');
    tnEl.innerHTML=TN.map(function(t){var d=t[p];return '<div class="tnc"><span class="lbl">'+t.l+'</span><div class="v flip">'+d[0]+'</div><p>'+d[1]+'</p></div>';}).join('');
  }
  document.querySelectorAll('.sw[data-p]').forEach(function(b){b.addEventListener('click',function(){renderTN(b.getAttribute('data-p'));});});
  renderTN('then');

  /* ---------- impact ---------- */
  document.getElementById('impacts').innerHTML=IMP.map(function(m,i){return '<div class="imp"><div class="illus" style="--tint:'+[P,'#FFFFFF',B][i]+'">'+ART[m.a]+'</div><div class="b"><div class="n">'+m.n+'</div><h4>'+m.h+'</h4><p>'+m.p+'</p><span class="yr">'+m.y+'</span></div></div>';}).join('');

  /* ---------- founder story ---------- */
  var sTabs=document.getElementById('storyTabs'),sCard=document.getElementById('storyCard'),sBtns=[],si=0;
  STORY.forEach(function(st,i){var b=document.createElement('button');b.setAttribute('role','tab');b.textContent=st.t;b.addEventListener('click',function(){selStory(i);});sTabs.appendChild(b);sBtns.push(b);});
  function selStory(i){
    si=i;var st=STORY[i];
    sBtns.forEach(function(b,j){b.setAttribute('aria-selected',j===i?'true':'false');});
    sCard.innerHTML='<span class="k">'+String(i+1).padStart(2,'0')+' / 05 &middot; '+st.k+'</span><h4>'+st.h+'</h4><p>'+st.p+'</p><div class="nav2"><button aria-label="Previous" '+(i===0?'disabled':'')+'>&larr;</button><button aria-label="Next" '+(i===STORY.length-1?'disabled':'')+'>&rarr;</button></div>';
    var nb=sCard.querySelectorAll('.nav2 button');nb[0].addEventListener('click',function(){selStory(si-1);});nb[1].addEventListener('click',function(){selStory(si+1);});
    sCard.classList.remove('swap');void sCard.offsetWidth;sCard.classList.add('swap');
  }
  selStory(0);

  /* ---------- backend (Supabase) ---------- */
  var SUPABASE_URL='https://phfvkmmlpwsnscnryrth.supabase.co';
  var SUPABASE_ANON_KEY='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBoZnZrbW1scHdzbnNjbnJ5cnRoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTA2NjMwMjEsImV4cCI6MjEwNjIzOTAyMX0.-KlxAF4UQCio5fS7liNTV0uFKyZrfDVi0Dqr-EvcoBU';
  var LIVE=!!(SUPABASE_URL&&SUPABASE_ANON_KEY);
  function sb(path,opt){
    opt=opt||{};
    return fetch(SUPABASE_URL.replace(/\/$/,'')+'/rest/v1/'+path,{
      method:opt.method||'GET',
      headers:{'apikey':SUPABASE_ANON_KEY,'Authorization':'Bearer '+SUPABASE_ANON_KEY,'Content-Type':'application/json','Prefer':opt.prefer||''},
      body:opt.body?JSON.stringify(opt.body):undefined
    }).then(function(r){if(!r.ok)return r.text().then(function(t){throw new Error(t||('HTTP '+r.status));});return r.status===204||r.status===201&&opt.prefer==='return=minimal'?null:r.json();});
  }
  function lsGet(k,d){
    try{
      var v=localStorage.getItem(k);
      if(v===null||v===undefined) return d;
      return JSON.parse(v);
    }catch(e){
      return d;
    }
  }
  function lsSet(k,v){
    try{
      localStorage.setItem(k,JSON.stringify(v));
    }catch(e){}
  }
  function esc(t){var d=document.createElement('div');d.textContent=t==null?'':String(t);return d.innerHTML;}

  /* ---------- notes wall ---------- */
  var nForm=document.getElementById('noteForm'),nName=document.getElementById('nName'),nRel=document.getElementById('nRel'),nMsg=document.getElementById('nMsg'),nOk=document.getElementById('nOk'),nErr=document.getElementById('nErr'),nSend=document.getElementById('nSend'),nCount=document.getElementById('nCount');
  var wallBody=document.getElementById('wallBody'),wallCount=document.getElementById('wallCount');
  var formHTML=nForm?nForm.innerHTML:'';
  if(!LIVE){var wm=document.getElementById('wallMode');if(wm){wm.textContent='Preview: notes stay on this device';wm.classList.add('preview-tag');}}
  function bindForm(){
    nName=document.getElementById('nName');nRel=document.getElementById('nRel');nMsg=document.getElementById('nMsg');nOk=document.getElementById('nOk');nErr=document.getElementById('nErr');nSend=document.getElementById('nSend');nCount=document.getElementById('nCount');
    if(nMsg&&nCount)nMsg.addEventListener('input',function(){nCount.textContent=nMsg.value.length+' / 240';});
    if(nSend)nSend.disabled=false;
  }
  bindForm();
  if(nForm){
    nForm.addEventListener('submit',function(e){
      e.preventDefault();
      var name=(nName?nName.value:'').trim(),rel=nRel?nRel.value:'',msg=(nMsg?nMsg.value:'').trim();
      if(!name){if(nErr)nErr.textContent='Add your name so we know who the note is from.';if(nName)nName.focus();return;}
      if(!rel){if(nErr)nErr.textContent='Tell us how you know LOTUS.';if(nRel)nRel.focus();return;}
      if(msg.length<3){if(nErr)nErr.textContent='Write a short note, at least a few words.';if(nMsg)nMsg.focus();return;}
      if(!nOk||!nOk.checked){if(nErr)nErr.textContent='Tick the box so we can show your note.';if(nOk)nOk.focus();return;}
      if(nErr)nErr.textContent='';
      if(nSend){nSend.disabled=true;nSend.textContent='Sending…';}
      var row={name:name,relationship:rel,message:msg};
      var done=function(){
        var mine=lsGet('lotus20:mynotes',[]);
        if(!Array.isArray(mine)) mine=[];
        mine.unshift({m:msg,n:name,r:rel,t:Date.now()});
        lsSet('lotus20:mynotes',mine.slice(0,10));
        nForm.innerHTML='<div class="sent"><b>Thank you, '+esc(name.split(' ')[0])+'.</b><p>Your note is with our team. It will appear on the wall once it has been approved.</p><button class="btn ghost sm" type="button" id="nAgain">Write another note</button></div>';
        var na=document.getElementById('nAgain');
        if(na)na.addEventListener('click',function(){nForm.innerHTML=formHTML;bindForm();});
        renderWall(lastNotes);
      };
      if(LIVE){
        sb('notes',{method:'POST',body:row,prefer:'return=minimal'}).then(done).catch(function(){
          if(nSend){nSend.disabled=false;nSend.innerHTML='Send my note &rarr;';}
          if(nErr)nErr.textContent='We could not send your note. Check your connection and try again.';
        });
      } else {
        setTimeout(done,350);
      }
    });
  }
  var lastNotes=[];
  function renderWall(list){
    lastNotes=Array.isArray(list)?list:[];
    var mine=lsGet('lotus20:mynotes',[]);
    if(!Array.isArray(mine)) mine=[];
    var html='';
    mine.forEach(function(x){
      if(!x) return;
      html+='<div class="nt pending"><p>&ldquo;'+esc(x.m||'')+'&rdquo;</p><div class="by">'+esc(x.n||'Friend')+' <i>&middot; '+esc(x.r||'')+'</i></div><span class="pend">Awaiting approval &middot; only you can see this</span></div>';
    });
    lastNotes.forEach(function(x){
      if(!x) return;
      html+='<div class="nt"><p>&ldquo;'+esc(x.message||x.m||'')+'&rdquo;</p><div class="by">'+esc(x.name||x.n||'Friend')+' <i>&middot; '+esc(x.relationship||x.r||'')+'</i></div></div>';
    });
    if(wallCount) wallCount.textContent=lastNotes.length?(lastNotes.length+' note'+(lastNotes.length>1?'s':'')+' on the wall'):'The wall';
    if(wallBody) wallBody.innerHTML=html?'<div class="notes-grid">'+html+'</div>':'<div class="wall-empty2"><b>Be the first on the wall.</b><span>Approved notes from clients, staff and partners will appear here.</span></div>';
  }
  function loadWall(){
    if(!LIVE){renderWall([]);return;}
    sb('notes?select=name,relationship,message,created_at&approved=eq.true&order=created_at.desc&limit=100').then(renderWall).catch(function(){renderWall(lastNotes);});
  }
  var wallRef=document.getElementById('wallRefresh');
  if(wallRef)wallRef.addEventListener('click',loadWall);
  renderWall([]);

  /* ---------- quiz ---------- */
  var quizBox=document.getElementById('quizBox'),qi=0,score=0,qm=[],picks=[],qName='',t0=0,tick=null,lastResult=null;
  function secs(){return Math.round((Date.now()-t0)/1000);}
  function fmtT(s){s=Math.max(0,+s||0);return Math.floor(s/60)+':'+String(s%60).padStart(2,'0');}
  function prog(){return '<div class="qprog" aria-hidden="true">'+QS20.map(function(_,k){return '<i class="'+(qm[k]===1?'ok':qm[k]===0?'no':k===qi?'cur':'')+'"></i>';}).join('')+'</div>';}
  function intro(){
    if(tick){clearInterval(tick);tick=null;}
    if(!quizBox) return;
    var saved=lsGet('lotus20:qname','');
    quizBox.innerHTML='<div class="qintro"><div class="big20q">20 questions.</div><p>Twenty years of LOTUS, one question for each. Get them right, fast, and climb the leaderboard.</p>'+
      '<label class="qlabel" for="qName">Your name for the leaderboard</label><input id="qName" maxlength="24" autocomplete="nickname" value="'+esc(saved)+'" placeholder="e.g. Tunde A."><p class="ferr" id="qErr" role="alert"></p>'+
      '<div class="qactions" style="justify-content:flex-start;margin-top:4px"><button class="btn" id="qStart">Start the quiz &rarr;</button><button class="btn ghost" id="qSeeLb">See the leaderboard</button></div></div>';
    var qs=document.getElementById('qStart'),qn=document.getElementById('qName'),ql=document.getElementById('qSeeLb');
    if(qs)qs.addEventListener('click',start);
    if(qn)qn.addEventListener('keydown',function(e){if(e.key==='Enter')start();});
    if(ql)ql.addEventListener('click',function(){goId('leaderboard');});
  }
  function start(){
    var qn=document.getElementById('qName');
    var v=(qn?qn.value:'').trim();
    if(!v){var qe=document.getElementById('qErr');if(qe)qe.textContent='Add a name so we can put you on the leaderboard.';return;}
    qName=v;lsSet('lotus20:qname',v);qi=0;score=0;qm=[];picks=[];t0=Date.now();
    if(tick)clearInterval(tick);
    tick=setInterval(function(){var el=document.getElementById('qT');if(el)el.textContent=fmtT(secs());},1000);
    showQ();
  }
  function showQ(){
    if(!quizBox||!QS20[qi]) return;
    var Q=QS20[qi];
    quizBox.innerHTML=prog()+'<div class="qmeta"><span class="qlabel">Question '+(qi+1)+' of 20</span><span><span class="qpts">'+score+' pts</span> <span class="qtimer" id="qT">'+fmtT(secs())+'</span></span></div><h3>'+Q.q+'</h3><div class="opts">'+
      Q.o.map(function(o,k){return '<button class="opt" data-k="'+k+'"><span class="k">'+'ABCD'[k]+'</span><span>'+o+'</span></button>';}).join('')+'</div><div class="qfeed" id="qfeed"></div>';
    quizBox.querySelectorAll('.opt').forEach(function(b){b.addEventListener('click',function(){answer(+b.getAttribute('data-k'));});});
    quizBox.classList.remove('swap');void quizBox.offsetWidth;quizBox.classList.add('swap');
  }
  function answer(k){
    var Q=QS20[qi];
    if(!Q) return;
    var ok=k===Q.a;if(ok)score++;qm[qi]=ok?1:0;picks[qi]=k;
    quizBox.querySelectorAll('.opt').forEach(function(b,j){b.disabled=true;if(j===Q.a)b.classList.add('right');else if(j===k)b.classList.add('wrong');else b.classList.add('dim');});
    var qp=quizBox.querySelector('.qprog');if(qp)qp.outerHTML=prog();
    var qpt=quizBox.querySelector('.qpts');if(qpt)qpt.textContent=score+' pts';
    var last=qi===QS20.length-1;
    var qf=document.getElementById('qfeed');
    if(qf){
      qf.innerHTML='<p><b>'+(ok?'Correct.':'Not quite.')+'</b> '+Q.e+'</p><button class="btn" id="qnext">'+(last?'See my score':'Next question')+' &rarr;</button>';
      var nb=document.getElementById('qnext');
      if(nb){
        nb.focus({preventScroll:true});
        nb.addEventListener('click',function(){if(last)finish();else{qi++;showQ();}});
      }
    }
  }
  function tierFor(s){return s===20?'True LOTUSIAN':s>=16?'LOTUS insider':s>=11?'Halal hero':s>=6?'Rising investor':'New to LOTUS';}
  function finish(){
    if(tick){clearInterval(tick);tick=null;}
    var t=secs(),tier=tierFor(score);
    if(typeof recordQuizFinished==='function')recordQuizFinished(score);
    if(!quizBox) return;
    quizBox.innerHTML=prog()+'<div class="qresult"><div class="qlabel">'+esc(qName)+', your score</div><div class="qscore">'+score+'/20</div><div class="qtier">'+tier+'</div><p>in '+fmtT(t)+'</p><div class="qrank" id="qRank">Saving your score…</div>'+
      '<div class="qactions"><button class="btn" id="qLb">See the leaderboard &rarr;</button><button class="btn ghost" id="qcopy">Copy my score</button><button class="btn ghost" id="qagain">Play again</button></div><div id="qcopyout"></div></div>';
    var qa=document.getElementById('qagain'),ql=document.getElementById('qLb'),qc=document.getElementById('qcopy');
    if(qa)qa.addEventListener('click',intro);
    if(ql)ql.addEventListener('click',function(){goId('leaderboard');});
    var line='I scored '+score+'/20 on the LOTUS@20 quiz: '+tier+'. How LOTUSIAN are you?';
    if(qc){
      qc.addEventListener('click',function(){
        var btn=this;
        function fallback(){
          var out=document.getElementById('qcopyout');
          if(out){
            out.innerHTML='<input class="copyfield" id="qcf" readonly aria-label="Your score text">';
            var f=document.getElementById('qcf');
            if(f){f.value=line;f.focus();f.select();}
            btn.textContent='Select & copy below';
          }
        }
        try{
          if(navigator.clipboard&&navigator.clipboard.writeText){
            navigator.clipboard.writeText(line).then(function(){btn.textContent='Copied!';setTimeout(function(){btn.textContent='Copy my score';},2000);}).catch(fallback);
          } else {
            fallback();
          }
        }catch(err){
          fallback();
        }
      });
    }
    var rankEl=document.getElementById('qRank');
    lastResult={name:qName,score:score,seconds:t,at:Date.now()};
    if(LIVE){
      sb('rpc/submit_quiz',{method:'POST',body:{p_name:qName,p_answers:picks,p_seconds:t}}).then(function(r){
        if(r&&r.rank&&rankEl)rankEl.textContent='You are #'+r.rank+' on the leaderboard';
      }).catch(function(){if(rankEl)rankEl.textContent='We could not save your score this time.';});
    } else {
      var lb=lsGet('lotus20:lb',[]);
      if(!Array.isArray(lb)) lb=[];
      lb.push(lastResult);lsSet('lotus20:lb',lb.slice(-50));
      var rank=sortLb(lb).findIndex(function(x){return x&&x.at===lastResult.at;})+1;
      if(rankEl)rankEl.textContent='You are #'+rank+' on this device’s leaderboard (preview)';
    }
  }
  function sortLb(a){
    if(!Array.isArray(a)) return [];
    return a.filter(function(x){return x&&typeof x.score==='number';}).sort(function(x,y){return (y.score-x.score)||((x.seconds||0)-(y.seconds||0));});
  }
  var lbEl=document.getElementById('lb');
  if(!LIVE){var lm=document.getElementById('lbMode');if(lm){lm.textContent='Preview: scores on this device only';lm.classList.add('preview-tag');}}
  function renderBoard(rows){
    if(!lbEl) return;
    if(!Array.isArray(rows)) rows=[];
    rows=rows.slice(0,10);
    if(!rows.length){lbEl.innerHTML='<div class="lb-empty">No scores yet. Be the first LOTUSIAN on the board.</div>';return;}
    lbEl.innerHTML='<div class="lb-row hd"><span>Rank</span><span>Name</span><span style="text-align:right">Score</span><span style="text-align:right">Time</span></div>'+
      rows.map(function(r,i){
        if(!r) return '';
        var me=lastResult&&r.name===lastResult.name&&r.score===lastResult.score&&r.seconds===lastResult.seconds;
        return '<div class="lb-row'+(i===0?' top1':'')+(me?' me':'')+'"><span class="rk">'+(i+1)+'</span><span class="nm">'+esc(r.name||'Anonymous')+'</span><span class="sc">'+(r.score||0)+'/20</span><span class="tm">'+fmtT(r.seconds||0)+'</span></div>';
      }).join('');
  }
  function loadBoard(){
    if(!lbEl) return;
    if(!LIVE){renderBoard(sortLb(lsGet('lotus20:lb',[])));return;}
    lbEl.innerHTML='<div class="lb-empty">Loading…</div>';
    sb('quiz_leaderboard?select=name,score,seconds&limit=10').then(renderBoard).catch(function(){if(lbEl)lbEl.innerHTML='<div class="lb-empty">The leaderboard could not load. Try Refresh.</div>';});
  }
  var lbr=document.getElementById('lbRefresh'),lbp=document.getElementById('lbPlay');
  if(lbr)lbr.addEventListener('click',loadBoard);
  if(lbp)lbp.addEventListener('click',function(){intro();goId('quiz');});
  function goId(id){pages.forEach(function(pg,i){if(pg.dataset.id===id)go(i);});}
  intro();

  /* ---------- welcome count-up + confetti ---------- */
  var cntEl=document.getElementById('cnt'),cfx=document.createElement('canvas');cfx.className='confetti';cfx.setAttribute('aria-hidden','true');
  var pagesParent=document.getElementById('pages');if(pagesParent)pagesParent.appendChild(cfx);
  var counting=false,confettiRaf=null;
  function countUp(){
    if(reduced||counting){if(reduced&&cntEl)cntEl.textContent='20';return;}
    if(!cntEl) return;
    counting=true;var t0=performance.now(),D=1700;cntEl.textContent='0';
    setTimeout(function(){(function step(t){var k=Math.min(1,(t-t0-150)/D);if(k<0)k=0;var e=1-Math.pow(1-k,2.2);if(cntEl)cntEl.textContent=String(Math.round(20*e));
      if(k<1)requestAnimationFrame(step);else{counting=false;if(cntEl&&cntEl.parentNode){cntEl.parentNode.classList.remove('bump');void cntEl.offsetWidth;cntEl.parentNode.classList.add('bump');}confetti();}})(performance.now());},150);
  }
  function stopConfetti(){
    if(confettiRaf){cancelAnimationFrame(confettiRaf);confettiRaf=null;}
    var ctx=cfx?cfx.getContext('2d'):null;
    if(ctx&&cfx)ctx.clearRect(0,0,cfx.width,cfx.height);
  }
  function confetti(){
    stopConfetti();
    var dpr=window.devicePixelRatio||1;
    var W=cfx.width=(cfx.offsetWidth||window.innerWidth)*dpr,H=cfx.height=(cfx.offsetHeight||window.innerHeight)*dpr;
    var ctx=cfx.getContext('2d');
    if(!ctx) return;
    var r=cntEl?cntEl.getBoundingClientRect():{left:100,top:100,width:50,height:50};
    var pr=cfx.getBoundingClientRect();
    var ox=(r.left+r.width/2-pr.left)*dpr,oy=(r.top+r.height/2-pr.top)*dpr;
    var COLS=['#FFFFFF','#EAEAEA','#F5B82E','#8F0101','#111111','#FFD9D2'],ps=[];
    function add(x,y,n,spread,up){for(var i=0;i<n;i++){var a=(Math.random()-.5)*spread-Math.PI/2,v=(6+Math.random()*10)*dpr*up;ps.push({x:x,y:y,vx:Math.cos(a)*v,vy:Math.sin(a)*v,w:(6+Math.random()*8)*dpr,h:(4+Math.random()*6)*dpr,r:Math.random()*6,vr:(Math.random()-.5)*.3,c:COLS[i%COLS.length],life:0});}}
    add(ox,oy,140,Math.PI*1.6,1);add(0,H,70,Math.PI*.5,1.2);add(W,H,70,Math.PI*.5,1.2);
    ps.forEach(function(p,i){if(i>=140&&i<210){p.vx=Math.abs(p.vx)+3*dpr;}if(i>=210){p.vx=-Math.abs(p.vx)-3*dpr;}});
    var t0=performance.now();
    (function frame(t){
      ctx.clearRect(0,0,W,H);
      var alive=false;
      ps.forEach(function(p){
        p.vy+=.28*dpr;p.vx*=.99;p.x+=p.vx;p.y+=p.vy;p.r+=p.vr;
        if(p.y<H+40){alive=true;}
        ctx.save();ctx.translate(p.x,p.y);ctx.rotate(p.r);ctx.fillStyle=p.c;ctx.fillRect(-p.w/2,-p.h/2,p.w,p.h);ctx.strokeStyle='#111';ctx.lineWidth=1*dpr;ctx.strokeRect(-p.w/2,-p.h/2,p.w,p.h);ctx.restore();
      });
      if(alive&&t-t0<5000){
        confettiRaf=requestAnimationFrame(frame);
      } else {
        ctx.clearRect(0,0,W,H);
        confettiRaf=null;
      }
    })(t0);
  }

  /* ---------- page router ---------- */
  var pages=[].slice.call(document.querySelectorAll('.page')),P_N=pages.length,cur=-1,busy=false,pendingGo=null,wipeTimeout=null,busyTimeout=null;
  var chap=document.getElementById('chap'),chapN=document.getElementById('chapN'),mcount=document.getElementById('mcount');
  var backBtn=document.getElementById('back'),fwdBtn=document.getElementById('fwd'),nextLbl=document.getElementById('nextLbl'),backLbl=document.getElementById('backLbl');
  var prevChBtn=document.getElementById('prevChBtn'),nextChBtn=document.getElementById('nextChBtn');
  var navCardCtrl=document.getElementById('navCardCtrl'),navCardPrev=document.getElementById('navCardPrev'),navCardNext=document.getElementById('navCardNext'),navCardBadge=document.getElementById('navCardBadge');
  var segs=document.getElementById('segs'),wipe=document.getElementById('wipe'),menu=document.getElementById('menu'),mgrid=document.getElementById('mgrid'),menuBtn=document.getElementById('menuBtn');
  var navPillBtn=document.getElementById('navPillBtn'),navPillTitle=document.getElementById('navPillTitle'),navPillSub=document.getElementById('navPillSub'),navPillBarFill=document.getElementById('navPillBarFill'),navPillPct=document.getElementById('navPillPct');
  var navPctBadge=document.getElementById('navPctBadge'),navPctNum=document.getElementById('navPctNum'),navPctLbl=document.getElementById('navPctLbl');
  var shareBtn=document.getElementById('shareBtn'),bottomShareBtn=document.getElementById('bottomShareBtn'),toastEl=document.getElementById('toast');
  var audioBtn=document.getElementById('audioBtn'),audioIcon=document.getElementById('audioIcon'),audioLbl=document.getElementById('audioLbl'),audioBars=document.getElementById('audioBars');
  var mobileNavToggle=document.getElementById('mobileNavToggle'),mobileNavToggleBadge=document.getElementById('mobileNavToggleBadge');
  var mobileDrawer=document.getElementById('mobileDrawer'),mobileDrawerBackdrop=document.getElementById('mobileDrawerBackdrop'),mobileDrawerClose=document.getElementById('mobileDrawerClose');
  var mobileDrawerChap=document.getElementById('mobileDrawerChap'),mobileDrawerProgressFill=document.getElementById('mobileDrawerProgressFill'),mobileDrawerProgressText=document.getElementById('mobileDrawerProgressText'),mobileDrawerChapterCount=document.getElementById('mobileDrawerChapterCount');
  var mobileDrawerChaptersBtn=document.getElementById('mobileDrawerChaptersBtn'),mobileDrawerBadgesBtn=document.getElementById('mobileDrawerBadgesBtn'),mobileDrawerBadgeCount=document.getElementById('mobileDrawerBadgeCount'),mobileDrawerBadgeRank=document.getElementById('mobileDrawerBadgeRank');
  var mobileDrawerAudioBtn=document.getElementById('mobileDrawerAudioBtn'),mobileDrawerAudioIcon=document.getElementById('mobileDrawerAudioIcon'),mobileDrawerAudioStatus=document.getElementById('mobileDrawerAudioStatus');
  var mobileDrawerShareBtn=document.getElementById('mobileDrawerShareBtn'),mobileDrawerHomeBtn=document.getElementById('mobileDrawerHomeBtn'),mobileDrawerChaptersList=document.getElementById('mobileDrawerChaptersList');
  if(navPillBtn)navPillBtn.addEventListener('click',openMenu);
  var visited={},CHN=0,chStart={},chName={},chPages={};
  pages.forEach(function(pg,i){var c=+(pg.dataset.ch||0);if(!c)return;CHN=Math.max(CHN,c);if(pg.dataset.splash){chStart[c]=i;chName[c]=pg.dataset.name;}(chPages[c]=chPages[c]||[]).push(i);});
  for(var c=1;c<=CHN;c++)(function(c){
    var sg=document.createElement('button');sg.className='seg';sg.title=chName[c]||('Chapter '+c);sg.setAttribute('aria-label','Chapter '+c+': '+(chName[c]||''));
    sg.innerHTML='<span class="seg-fill"></span>';
    sg.addEventListener('click',function(){go(chStart[c]);});if(segs)segs.appendChild(sg);
    var m=document.createElement('button');m.className='mt';m.dataset.ch=c;
    var subs=(chPages[c]||[]).filter(function(i){return pages[i]&&!pages[i].dataset.splash;}).map(function(i){return pages[i].dataset.name;}).join(' · ');
    m.innerHTML='<span class="n">Chapter '+String(c).padStart(2,'0')+'</span><b>'+(chName[c]||'')+'</b><small>'+subs+'</small>';
    m.addEventListener('click',function(){closeMenu();closeMobileDrawer();go(chStart[c]);});if(mgrid)mgrid.appendChild(m);
    if(mobileDrawerChaptersList){
      var chip=document.createElement('button');
      chip.type='button';
      chip.className='mobile-drawer-ch-chip';
      chip.dataset.ch=c;
      chip.setAttribute('role', 'listitem');
      chip.innerHTML='<span class="ch-chip-num">'+String(c).padStart(2,'0')+'</span><span class="ch-chip-name">'+(chName[c]||'')+'</span>';
      chip.addEventListener('click',function(){
        closeMobileDrawer();
        go(chStart[c]);
      });
      mobileDrawerChaptersList.appendChild(chip);
    }
  })(c);
  function pad(n){return String(n).padStart(2,'0');}
  function show(i,dir){
    pages.forEach(function(pg,j){pg.classList.toggle('on',j===i);pg.classList.remove('in-r','in-l');});
    var pg=pages[i];
    if(!pg) return;
    void pg.offsetWidth;
    if(!reduced&&dir)pg.classList.add(dir>0?'in-r':'in-l');
    pg.scrollTop=0;
  }
  function onEnter(i){
    if(!pages[i]) return;
    var id=pages[i].dataset.id;
    if(id==='numbers')runCounters();
    if(id==='funds')growBars();
    if(id==='timeline')tl.go(tl.active<0?0:tl.active,true);
    if(CAR[id]&&id!=='timeline')CAR[id].go(CAR[id].active<0?0:CAR[id].active,true);
    if(id==='welcome'){countUp();}else{stopConfetti();}
    if(id==='chapters')updateChaptersScreenUI();
    if(id==='wall')loadWall();
    if(id==='leaderboard')loadBoard();
    if(id!=='timeline')stopPlay();
    if(id!=='quiz'&&tick){clearInterval(tick);tick=null;}
    updateChrome(i);
    if(typeof onPageAudioTrigger==='function')onPageAudioTrigger(i);
    if(typeof recordPageVisit==='function')recordPageVisit(id);
  }
  function updateChrome(i){
    if(!pages[i]) return;
    var pg=pages[i],c=+(pg.dataset.ch||0);
    if(chap)chap.textContent=c?('Ch '+pad(c)+' \u00b7 '+(chName[c]||'')):(pg.dataset.name||'Welcome');
    var pos=c?(chPages[c]||[]).indexOf(i)+1:0,tot=c?(chPages[c]||[]).length:0;
    if(chapN)chapN.textContent=c?(pos+' / '+tot):'';
    if(mcount)mcount.textContent=c?('Ch '+pad(c)+' / '+pad(CHN)):(pg.dataset.name||'Welcome');

    // Sync mobile drawer status card & chapter chips
    if(mobileDrawerChap){
      mobileDrawerChap.textContent=c?('Ch '+pad(c)+' \u00b7 '+(chName[c]||'')):(pg.dataset.name||'Welcome & Introduction');
    }
    if(mobileDrawerChapterCount){
      mobileDrawerChapterCount.textContent=c?('Ch '+pad(c)+' / '+pad(CHN)):'Cover';
    }
    var totalPages=pages.length;
    var pctDone=Math.round((i/Math.max(1,totalPages-1))*100);
    if(mobileDrawerProgressFill){
      mobileDrawerProgressFill.style.width=pctDone+'%';
    }
    if(mobileDrawerProgressText){
      mobileDrawerProgressText.textContent=pctDone+'% completed';
    }
    if(mobileDrawerChaptersList){
      mobileDrawerChaptersList.querySelectorAll('.mobile-drawer-ch-chip').forEach(function(chip){
        chip.classList.toggle('active', +(chip.dataset.ch||0)===c);
      });
    }

    var C=carouselFor(i);
    var fwdArr=fwdBtn?fwdBtn.querySelector('.arr'):null;
    if(C && C.cards && C.cards.length>1){
      var ci=C.active>=0?C.active:0;
      var total=C.cards.length;
      var isTl=(pg.dataset.id==='timeline');

      if(navCardCtrl)navCardCtrl.hidden=false;
      if(navCardBadge)navCardBadge.textContent=(isTl?'Milestone ':'Card ')+pad(ci+1)+' / '+pad(total);
      if(navPlayBtn)navPlayBtn.style.display=isTl?'inline-flex':'none';

      if(ci>0){
        if(backBtn)backBtn.disabled=false;
        if(backLbl)backLbl.textContent='Prev '+(isTl?'milestone':'card');
        if(prevChBtn)prevChBtn.hidden=false;
      } else {
        if(backBtn)backBtn.disabled=(i===0);
        if(backLbl)backLbl.textContent='Back';
        if(prevChBtn)prevChBtn.hidden=true;
      }

      if(ci<total-1){
        if(isTl&&EV[ci+1]){
          if(nextLbl)nextLbl.textContent='Next: '+EV[ci+1].y;
        } else {
          if(nextLbl)nextLbl.textContent='Next card ('+pad(ci+2)+'/'+pad(total)+')';
        }
        if(fwdArr)fwdArr.innerHTML='&rarr;';
        if(nextChBtn)nextChBtn.hidden=false;
      } else {
        if(i===P_N-1){
          if(nextLbl)nextLbl.textContent='Start again';
          if(fwdArr)fwdArr.innerHTML='&#8634;';
        } else {
          var nx=pages[i+1];
          if(nx&&nextLbl)nextLbl.textContent=(nx.dataset.splash?'Next chapter: ':'Next: ')+nx.dataset.name;
          if(fwdArr)fwdArr.innerHTML='&rarr;';
        }
        if(nextChBtn)nextChBtn.hidden=true;
      }
    } else {
      if(navCardCtrl)navCardCtrl.hidden=true;
      if(prevChBtn)prevChBtn.hidden=true;
      if(nextChBtn)nextChBtn.hidden=true;

      if(backBtn)backBtn.disabled=(i===0);
      if(backLbl)backLbl.textContent=(i===1)?'Cover':'Back';

      if(i===P_N-1){
        if(nextLbl)nextLbl.textContent='Start again';
        if(fwdArr)fwdArr.innerHTML='&#8634;';
      } else {
        var nx=pages[i+1];
        if(nx&&nextLbl)nextLbl.textContent=(nx.dataset.splash?'Next chapter: ':'Next: ')+nx.dataset.name;
        if(fwdArr)fwdArr.innerHTML='&rarr;';
      }
    }

    /* Calculate continuous overall journey percentage across all chapters and milestone cards */
    var cardFracOverall=0;
    if(C && C.cards && C.cards.length>1 && C.active>=0){
      cardFracOverall=C.active/Math.max(1,C.cards.length-1);
    }
    var overallPct=0;
    if(i>0){
      var pageContribution=(i-1+(cardFracOverall*0.95))/Math.max(1,P_N-2);
      overallPct=Math.min(100,Math.max(1,Math.round(pageContribution*100)));
      if(i===P_N-1)overallPct=100;
    }

    if(navPctNum)navPctNum.textContent=overallPct+'%';
    if(navPctBadge){
      navPctBadge.classList.toggle('complete',overallPct>=100);
      navPctBadge.setAttribute('aria-label',overallPct+'% journey completed');
    }
    if(navPctLbl){
      navPctLbl.textContent=overallPct>=100?'\u2713 done':'done';
    }

    if(navPillPct){
      navPillPct.textContent=overallPct+'%';
      navPillPct.classList.toggle('complete',overallPct>=100);
    }
    if(navPillBarFill){
      navPillBarFill.style.width=overallPct+'%';
    }

    if(navPillTitle){
      if(i===0){
        navPillTitle.textContent='LOTUS@20';
        if(navPillSub)navPillSub.textContent='Tap for chapters';
      } else if(pg.dataset.id==='chapters'){
        navPillTitle.textContent='All Chapters';
        if(navPillSub)navPillSub.textContent='Tap for chapters';
      } else if(C && C.cards && C.cards.length>1){
        var ci_p=C.active>=0?C.active:0;
        var tot_p=C.cards.length;
        var isTl_p=(pg.dataset.id==='timeline');
        navPillTitle.textContent='Ch '+pad(c)+' \u00b7 '+(isTl_p?'M':'C')+pad(ci_p+1)+'/'+pad(tot_p);
        if(navPillSub)navPillSub.textContent=(chName[c]||'Tap for chapters');
      } else {
        navPillTitle.textContent=c?('Ch '+pad(c)+' \u00b7 '+(chName[c]||'')):(pg.dataset.name||'Welcome');
        if(navPillSub)navPillSub.textContent='Tap for chapters';
      }
    }

    if(c){
      visited[c]=1;
      var chCardEl=document.querySelector('.ch-card[data-ch="'+c+'"]');
      if(chCardEl){
        chCardEl.classList.add('visited');
        var chStB=chCardEl.querySelector('.ch-status-badge');
        if(chStB) chStB.textContent='✓ Visited';
      }
    }
    if(segs){
      var chP=chPages[c]||[];
      var pIdx=chP.indexOf(i);
      if(pIdx<0)pIdx=0;
      var C_cur=carouselFor(i);
      var cardFrac=0;
      if(C_cur&&C_cur.cards&&C_cur.cards.length>1&&C_cur.active>=0){
        cardFrac=(C_cur.active+1)/C_cur.cards.length;
      }
      var chProg=(pIdx+(cardFrac||1))/Math.max(1,chP.length);
      chProg=Math.max(0.18,Math.min(1,chProg));

      Array.prototype.forEach.call(segs.children,function(sg,j){
        var k=j+1;
        var fill=sg.querySelector('.seg-fill');
        if(c===0){
          sg.classList.remove('cur','done');
          if(fill){fill.style.transform='scaleX(0)';fill.style.background='var(--red)';}
        } else if(k<c){
          sg.classList.add('done');
          sg.classList.remove('cur');
          if(fill){fill.style.transform='scaleX(1)';fill.style.background='var(--ink)';}
        } else if(k===c){
          sg.classList.add('cur');
          sg.classList.remove('done');
          if(fill){fill.style.transform='scaleX('+chProg.toFixed(3)+')';fill.style.background='var(--red)';}
        } else {
          sg.classList.remove('cur','done');
          if(fill){fill.style.transform='scaleX(0)';fill.style.background='var(--red)';}
        }
      });
    }
    if(mgrid)Array.prototype.forEach.call(mgrid.children,function(m){m.classList.toggle('cur',+m.dataset.ch===c);});
    try{history.replaceState(null,'','#'+pg.dataset.id);}catch(e){}
    if(i>0){try{localStorage.setItem('lotus20:last',pg.dataset.id);}catch(e){}}
  }
  function go(i){
    i=Math.max(0,Math.min(P_N-1,i));
    if(i===cur)return;
    stopPlay();

    if(busy){
      pendingGo=i;
      return;
    }

    var dir=cur<0?0:(i>cur?1:-1),prev=cur;cur=i;
    updateChrome(i);
    if(reduced||prev<0){show(i,0);onEnter(i);return;}
    busy=true;

    var pgBg='#C10202';
    try{pgBg=getComputedStyle(pages[i]).getPropertyValue('--pg')||'#C10202';}catch(e){}
    if(wipe){
      wipe.style.background=pgBg;
      wipe.classList.remove('go','back');void wipe.offsetWidth;wipe.classList.add('go');if(dir<0)wipe.classList.add('back');
    }

    if(wipeTimeout)clearTimeout(wipeTimeout);
    if(busyTimeout)clearTimeout(busyTimeout);

    wipeTimeout=setTimeout(function(){
      try{
        show(i,dir);
        onEnter(i);
      }catch(err){
        console.error('Error during page transition:',err);
      }
    },280);

    busyTimeout=setTimeout(function(){
      busy=false;
      if(wipe)wipe.classList.remove('go','back');
      if(pendingGo!==null){
        var nextTarget=pendingGo;
        pendingGo=null;
        go(nextTarget);
      }
    },520);
  }
  if(backBtn){
    backBtn.addEventListener('click',function(){
      stopPlay();
      var C=carouselFor(cur);
      if(C&&C.active>0){
        C.step(-1);
      } else {
        go(cur-1);
      }
    });
  }
  if(fwdBtn){
    fwdBtn.addEventListener('click',function(){
      stopPlay();
      var C=carouselFor(cur);
      if(C&&C.active<C.cards.length-1){
        C.step(1);
      } else {
        go(cur===P_N-1?0:cur+1);
      }
    });
  }
  if(prevChBtn){
    prevChBtn.addEventListener('click',function(){
      stopPlay();
      var c=pages[cur]?+(pages[cur].dataset.ch||0):0;
      if(c>1&&chStart[c-1]!==undefined){
        go(chStart[c-1]);
      } else if(c&&chStart[c]!==undefined&&cur>chStart[c]){
        go(chStart[c]);
      } else {
        go(cur-1);
      }
    });
  }
  if(nextChBtn){
    nextChBtn.addEventListener('click',function(){
      stopPlay();
      var c=pages[cur]?+(pages[cur].dataset.ch||0):0;
      if(c&&c<CHN&&chStart[c+1]!==undefined){
        go(chStart[c+1]);
      } else {
        go(cur===P_N-1?0:cur+1);
      }
    });
  }
  if(navCardPrev){
    navCardPrev.addEventListener('click',function(){
      stopPlay();
      var C=carouselFor(cur);
      if(C){
        if(!C.step(-1))go(cur-1);
      }
    });
  }
  if(navCardNext){
    navCardNext.addEventListener('click',function(){
      stopPlay();
      var C=carouselFor(cur);
      if(C){
        if(!C.step(1))go(cur+1);
      }
    });
  }
  document.querySelectorAll('[data-goto]').forEach(function(b){
    b.addEventListener('click',function(e){
      e.stopPropagation();
      var g=b.getAttribute('data-goto');
      if(!g) return;
      if(g==='next'){
        go(cur+1);
      } else if(g==='prev'){
        if(cur>0) go(cur-1);
      } else if(!isNaN(+g)){
        go(+g);
      } else {
        goId(g);
      }
    });
  });

  function openMenu(){
    stopPlay();
    closeMobileDrawer();
    if(menu){menu.classList.add('open');if(menuBtn)menuBtn.setAttribute('aria-expanded','true');var c=mgrid?mgrid.querySelector('.mt.cur')||mgrid.children[0]:null;if(c)c.focus({preventScroll:true});}
  }
  function closeMenu(){
    if(menu){menu.classList.remove('open');if(menuBtn)menuBtn.setAttribute('aria-expanded','false');}
  }
  if(menuBtn)menuBtn.addEventListener('click',function(){menu&&menu.classList.contains('open')?closeMenu():openMenu();});
  var mx=document.getElementById('menuX');if(mx)mx.addEventListener('click',closeMenu);
  var om2=document.getElementById('openMenu2');if(om2)om2.addEventListener('click',openMenu);

  function openMobileDrawer(){
    stopPlay();
    if(mobileDrawer){
      mobileDrawer.classList.add('is-open');
      mobileDrawer.setAttribute('aria-hidden', 'false');
      if(mobileDrawerBackdrop) mobileDrawerBackdrop.classList.add('is-open');
      if(mobileNavToggle){
        mobileNavToggle.classList.add('is-open');
        mobileNavToggle.setAttribute('aria-expanded', 'true');
      }
      document.body.classList.add('mobile-drawer-open');
      if(mobileDrawerClose) mobileDrawerClose.focus({preventScroll:true});
    }
  }

  function closeMobileDrawer(){
    if(mobileDrawer){
      mobileDrawer.classList.remove('is-open');
      mobileDrawer.setAttribute('aria-hidden', 'true');
      if(mobileDrawerBackdrop) mobileDrawerBackdrop.classList.remove('is-open');
      if(mobileNavToggle){
        mobileNavToggle.classList.remove('is-open');
        mobileNavToggle.setAttribute('aria-expanded', 'false');
      }
      document.body.classList.remove('mobile-drawer-open');
    }
  }

  if(mobileNavToggle){
    mobileNavToggle.addEventListener('click', function(){
      mobileDrawer && mobileDrawer.classList.contains('is-open') ? closeMobileDrawer() : openMobileDrawer();
    });
  }
  if(mobileDrawerClose) mobileDrawerClose.addEventListener('click', closeMobileDrawer);
  if(mobileDrawerBackdrop) mobileDrawerBackdrop.addEventListener('click', closeMobileDrawer);

  if(mobileDrawerChaptersBtn){
    mobileDrawerChaptersBtn.addEventListener('click', function(){
      closeMobileDrawer();
      goId('chapters');
    });
  }
  if(mobileDrawerBadgesBtn){
    mobileDrawerBadgesBtn.addEventListener('click', function(){
      closeMobileDrawer();
      openBadgesOverlay();
    });
  }
  if(mobileDrawerAudioBtn){
    mobileDrawerAudioBtn.addEventListener('click', function(){
      setAudioActive(!isAudioActive, true);
    });
  }
  if(mobileDrawerShareBtn){
    mobileDrawerShareBtn.addEventListener('click', function(){
      handleShare();
    });
  }
  if(mobileDrawerHomeBtn){
    mobileDrawerHomeBtn.addEventListener('click', function(){
      closeMobileDrawer();
      go(0);
    });
  }

  window.addEventListener('keydown', function(e){
    if(e.key === 'Escape'){
      if(mobileDrawer && mobileDrawer.classList.contains('is-open')) closeMobileDrawer();
    }
  });

  /* ---------- Web Share API & Clipboard Fallback ---------- */
  var toastTimer=null;
  function showToast(msg){
    if(!toastEl)return;
    toastEl.textContent=msg;
    toastEl.classList.add('show');
    toastEl.setAttribute('aria-hidden','false');
    if(toastTimer)clearTimeout(toastTimer);
    toastTimer=setTimeout(function(){
      toastEl.classList.remove('show');
      toastEl.setAttribute('aria-hidden','true');
    },2800);
  }

  function getSharePayload(){
    var pg=pages[cur]||pages[0];
    var pageId=pg?pg.dataset.id:'welcome';
    var pageName=pg?pg.dataset.name:'Welcome';
    var ch=pg?+(pg.dataset.ch||0):0;
    var chTitle=chName[ch]||pageName||'LOTUS@20';

    var title='LOTUS Capital @20';
    var text='Twenty years of pioneering halal and ethical finance in Nigeria (2006\u20132026).';
    var shareUrl=window.location.origin+window.location.pathname+'#'+pageId;

    if(pageId==='timeline'){
      var actI=(tl&&tl.active>=0)?tl.active:0;
      var ev=EV[actI];
      if(ev){
        title='LOTUS@20 ('+ev.y+'): '+ev.h;
        text='Milestone #'+String(actI+1).padStart(2,'0')+' ('+ev.y+'): "'+ev.h+'" \u2014 '+ev.p+' #LOTUS20 #HalalFinance';
      }
    } else if(pageId==='firsts'){
      var actIdx=(CAR.firsts&&CAR.firsts.active>=0)?CAR.firsts.active:0;
      var it=FIRSTS20[actIdx];
      if(it){
        title='LOTUS@20 Record: '+it.t;
        text='20 Firsts & Records: "'+it.t+'" \u2014 '+(it.p||it.b||'')+' #LOTUS20';
      }
    } else if(pageId==='facts'){
      var actIdx=(CAR.facts&&CAR.facts.active>=0)?CAR.facts.active:0;
      var it=FACTS20[actIdx];
      if(it){
        title='LOTUS@20 Fund Fact: '+it.t;
        text='Fund Fact #'+(actIdx+1)+': "'+it.t+'" \u2014 '+(it.p||'')+' #LOTUS20';
      }
    } else if(pageId==='people20'){
      var actIdx=(CAR.people20&&CAR.people20.active>=0)?CAR.people20.active:0;
      var it=PEOPLE20[actIdx];
      if(it){
        title='LOTUS@20 Personality: '+it.n;
        text=it.n+' ('+it.r+') \u2014 '+it.p+' #LOTUS20';
      }
    } else if(pageId==='offices'){
      title='LOTUS@20 \u00b7 How Far We Have Grown';
      text='From 1 desk at LOTUS House in Ikoyi to 12 locations across 7 states, managing over \u20A665bn for 30,900+ unit-holders across Nigeria. #LOTUS20 #HalalFinance';
    } else if(ch>0){
      title='LOTUS@20 \u00b7 Chapter '+pad(ch)+': '+chTitle;
      text='Exploring Chapter '+pad(ch)+' ('+chTitle+') in the 20-year journey of LOTUS Capital.';
    }

    return {title:title,text:text,url:shareUrl};
  }

  function copyToClipboard(text){
    if(navigator.clipboard&&navigator.clipboard.writeText){
      navigator.clipboard.writeText(text).then(function(){
        showToast('\u2713 Link & milestone copied to clipboard!');
      }).catch(function(){
        execCopyFallback(text);
      });
    } else {
      execCopyFallback(text);
    }
  }

  function execCopyFallback(text){
    var ta=document.createElement('textarea');
    ta.value=text;
    ta.style.position='fixed';
    ta.style.opacity='0';
    document.body.appendChild(ta);
    ta.select();
    try{
      document.execCommand('copy');
      showToast('\u2713 Link & milestone copied to clipboard!');
    }catch(e){
      showToast('\u2713 Link: '+window.location.href);
    }
    document.body.removeChild(ta);
  }

  function handleShare(){
    var payload=getSharePayload();
    if(navigator.share){
      navigator.share(payload).catch(function(err){
        if(!err||err.name!=='AbortError'){
          copyToClipboard(payload.title+'\n'+payload.text+'\n'+payload.url);
        }
      });
    } else {
      copyToClipboard(payload.title+'\n'+payload.text+'\n'+payload.url);
    }
  }

  if(shareBtn)shareBtn.addEventListener('click',handleShare);
  if(bottomShareBtn)bottomShareBtn.addEventListener('click',handleShare);

  var siteLogoBtn=document.getElementById('siteLogoBtn');
  if(siteLogoBtn){
    siteLogoBtn.addEventListener('click',function(e){
      e.preventDefault();
      if(typeof closeMenu==='function')closeMenu();
      go(0);
    });
  }

  /* ---------- Ambient Soundscape & Journey Narration (Web Audio API & Speech Synthesis) ---------- */
  var audioCtx=null,masterGain=null,ambientGain=null,isAudioActive=false,ambientOscs=[],chimeTimer=null,narrateTimer=null;
  var PENTATONIC=[523.25, 587.33, 659.25, 783.99, 880.00, 1046.50];

  function initAudio(){
    if(audioCtx) return;
    try{
      var AC=window.AudioContext||window.webkitAudioContext;
      if(!AC) return;
      audioCtx=new AC();
      masterGain=audioCtx.createGain();
      masterGain.gain.setValueAtTime(0, audioCtx.currentTime);
      masterGain.connect(audioCtx.destination);
      startAmbientSoundscape();
    }catch(err){
      console.warn('AudioContext not available:', err);
    }
  }

  function startAmbientSoundscape(){
    if(!audioCtx) return;
    try{
      var filter=audioCtx.createBiquadFilter();
      filter.type='lowpass';
      filter.frequency.setValueAtTime(640, audioCtx.currentTime);
      filter.Q.setValueAtTime(1.8, audioCtx.currentTime);

      var lfo=audioCtx.createOscillator();
      var lfoGain=audioCtx.createGain();
      lfo.frequency.setValueAtTime(0.08, audioCtx.currentTime);
      lfoGain.gain.setValueAtTime(180, audioCtx.currentTime);
      lfo.connect(filter.frequency);
      lfo.start();

      ambientGain=audioCtx.createGain();
      ambientGain.gain.setValueAtTime(0.24, audioCtx.currentTime);
      filter.connect(ambientGain);
      ambientGain.connect(masterGain);

      var chordFreqs=[146.83, 220.00, 293.66, 369.99, 440.00];
      chordFreqs.forEach(function(f, idx){
        var osc=audioCtx.createOscillator();
        var vGain=audioCtx.createGain();
        osc.type=(idx%2===0)?'sine':'triangle';
        osc.frequency.setValueAtTime(f, audioCtx.currentTime);
        osc.detune.setValueAtTime((idx-2)*5, audioCtx.currentTime);
        vGain.gain.setValueAtTime(0.18/chordFreqs.length, audioCtx.currentTime);
        osc.connect(vGain);
        vGain.connect(filter);
        osc.start();
        ambientOscs.push(osc);
      });
      scheduleNextChime();
    }catch(e){}
  }

  function scheduleNextChime(){
    if(!isAudioActive||!audioCtx) return;
    if(chimeTimer)clearTimeout(chimeTimer);
    var delay=4500+Math.random()*3500;
    chimeTimer=setTimeout(function(){
      if(!isAudioActive||!audioCtx) return;
      playAmbientBell();
      scheduleNextChime();
    }, delay);
  }

  function playAmbientBell(){
    if(!audioCtx||!isAudioActive||!masterGain) return;
    try{
      var note=PENTATONIC[Math.floor(Math.random()*PENTATONIC.length)];
      var osc=audioCtx.createOscillator();
      var g=audioCtx.createGain();
      osc.type='sine';
      osc.frequency.setValueAtTime(note, audioCtx.currentTime);
      var now=audioCtx.currentTime;
      g.gain.setValueAtTime(0.0001, now);
      g.gain.linearRampToValueAtTime(0.06, now+0.03);
      g.gain.exponentialRampToValueAtTime(0.0001, now+1.8);
      osc.connect(g);
      g.connect(masterGain);
      osc.start(now);
      osc.stop(now+1.85);
    }catch(e){}
  }

  function playNavChime(isChapter){
    if(!audioCtx||!isAudioActive||!masterGain) return;
    try{
      var now=audioCtx.currentTime;
      if(isChapter){
        [392.00, 523.25].forEach(function(freq, idx){
          var osc=audioCtx.createOscillator();
          var g=audioCtx.createGain();
          osc.type='sine';
          osc.frequency.setValueAtTime(freq, now+idx*0.09);
          g.gain.setValueAtTime(0.001, now+idx*0.09);
          g.gain.linearRampToValueAtTime(0.08, now+idx*0.09+0.02);
          g.gain.exponentialRampToValueAtTime(0.001, now+idx*0.09+0.38);
          osc.connect(g);
          g.connect(masterGain);
          osc.start(now+idx*0.09);
          osc.stop(now+idx*0.09+0.4);
        });
      } else {
        var osc=audioCtx.createOscillator();
        var g=audioCtx.createGain();
        osc.type='sine';
        osc.frequency.setValueAtTime(659.25, now);
        g.gain.setValueAtTime(0.001, now);
        g.gain.linearRampToValueAtTime(0.07, now+0.015);
        g.gain.exponentialRampToValueAtTime(0.001, now+0.22);
        osc.connect(g);
        g.connect(masterGain);
        osc.start(now);
        osc.stop(now+0.24);
      }
    }catch(e){}
  }

  /* Authentic Nigerian Woman Voice Over (Gemini AI TTS with local en-NG fallback) */
  var currentVoiceAudio=null;
  var currentVoiceAbort=null;

  function stopNarration(){
    if(currentVoiceAbort){
      try{currentVoiceAbort.abort();}catch(e){}
      currentVoiceAbort=null;
    }
    if(currentVoiceAudio){
      try{
        currentVoiceAudio.pause();
        currentVoiceAudio.currentTime=0;
      }catch(e){}
      currentVoiceAudio=null;
    }
    if(window.speechSynthesis){
      try{window.speechSynthesis.cancel();}catch(e){}
    }
    if(ambientGain&&audioCtx&&isAudioActive){
      ambientGain.gain.setTargetAtTime(0.24, audioCtx.currentTime, 0.4);
    }
  }

  function speakNarration(text){
    if(!isAudioActive||!text) return;
    stopNarration();

    // Smoothly duck ambient music
    if(ambientGain&&audioCtx){
      ambientGain.gain.setTargetAtTime(0.04, audioCtx.currentTime, 0.15);
    }

    var controller=new AbortController();
    currentVoiceAbort=controller;

    // Primary: Gemini AI TTS with Nigerian Woman Persona
    fetch('/api/tts',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({text:text}),
      signal:controller.signal
    }).then(function(res){
      if(!res.ok) throw new Error('TTS response not ok');
      return res.json();
    }).then(function(data){
      if(controller.signal.aborted) return;
      if(!data||!data.audio) throw new Error('No audio payload');

      var audio=new Audio('data:'+(data.mimeType||'audio/wav')+';base64,'+data.audio);
      currentVoiceAudio=audio;

      audio.onended=function(){
        currentVoiceAudio=null;
        if(ambientGain&&audioCtx&&isAudioActive){
          ambientGain.gain.setTargetAtTime(0.24, audioCtx.currentTime, 0.4);
        }
      };
      audio.onerror=function(){
        currentVoiceAudio=null;
        fallbackSpeech(text);
      };

      var playPromise=audio.play();
      if(playPromise!==undefined){
        playPromise.catch(function(){
          currentVoiceAudio=null;
          fallbackSpeech(text);
        });
      }
    }).catch(function(err){
      if(controller.signal.aborted) return;
      fallbackSpeech(text);
    });
  }

  function fallbackSpeech(text){
    if(!isAudioActive||!window.speechSynthesis||!text) return;
    try{
      window.speechSynthesis.cancel();
      var utter=new SpeechSynthesisUtterance(text);
      utter.lang='en-NG';
      // Warm, melodic Nigerian female speech cadence
      utter.rate=0.92;
      utter.pitch=1.05;

      var voices=window.speechSynthesis.getVoices();
      if(voices&&voices.length){
        var ngVoice=voices.find(function(v){
          var name=(v.name||'').toLowerCase();
          var lang=(v.lang||'').toLowerCase();
          return (lang==='en-ng'||lang==='en_ng'||lang.includes('ng')||name.includes('nigeria')||name.includes('yoruba')||name.includes('hausa')||name.includes('igbo'))&&
                 (name.includes('female')||name.includes('woman')||name.includes('blessing')||name.includes('ezinne')||name.includes('chioma')||name.includes('ngozi')||!name.includes('male'));
        }) || voices.find(function(v){
          var lang=(v.lang||'').toLowerCase();
          return lang==='en-ng'||lang==='en_ng'||lang.includes('ng')||(v.name||'').toLowerCase().includes('nigeria');
        }) || voices.find(function(v){
          var name=(v.name||'').toLowerCase();
          var lang=(v.lang||'').toLowerCase();
          return lang.startsWith('en')&&(name.includes('female')||name.includes('natural')||name.includes('samantha')||name.includes('zira')||name.includes('karen')||name.includes('serena'));
        }) || voices.find(function(v){ return (v.lang||'').toLowerCase().startsWith('en'); });

        if(ngVoice) utter.voice=ngVoice;
      }

      utter.onend=utter.onerror=function(){
        if(ambientGain&&audioCtx&&isAudioActive){
          ambientGain.gain.setTargetAtTime(0.24, audioCtx.currentTime, 0.4);
        }
      };

      window.speechSynthesis.speak(utter);
    }catch(e){}
  }

  function narrateCurrentState(){
    if(!isAudioActive) return;
    var pg=pages[cur]||pages[0];
    if(!pg) return;
    var id=pg.dataset.id;
    var c=+(pg.dataset.ch||0);

    if(id==='welcome'){
      speakNarration('Welcome to LOTUS at twenty. Twenty years of halal and ethical finance in Nigeria.');
      return;
    }
    if(id==='chapters'){
      speakNarration('All exhibition chapters. Explore twenty years of LOTUS Capital across twelve commemorative chapters.');
      return;
    }
    var C=carouselFor(cur);
    if(id==='timeline'&&tl){
      var actI=tl.active>=0?tl.active:0;
      var ev=EV[actI];
      if(ev){
        speakNarration(ev.y+', '+ev.h+'. '+ev.p);
      }
    } else if(C&&C.cards&&C.active>=0){
      if(id==='firsts'&&FIRSTS20[C.active]){
        var item=FIRSTS20[C.active];
        speakNarration('Record '+(C.active+1)+': '+item.t+'. '+(item.p||''));
      } else if(id==='facts'&&FACTS20[C.active]){
        var item=FACTS20[C.active];
        speakNarration('Fund fact '+(C.active+1)+': '+item.t+'. '+(item.p||''));
      } else if(id==='people20'&&PEOPLE20[C.active]){
        var item=PEOPLE20[C.active];
        speakNarration(item.n+', '+item.r+'. '+item.p);
      } else if(id==='impact20'&&IMPACT20[C.active]){
        var item=IMPACT20[C.active];
        speakNarration(item.t+'. '+(item.p||''));
      } else if(id==='halal20'&&HALAL20[C.active]){
        var item=HALAL20[C.active];
        speakNarration(item.t+'. '+(item.p||''));
      } else if(id==='press'&&PRESS20[C.active]){
        var item=PRESS20[C.active];
        speakNarration(item.y+', '+item.o+': '+item.t);
      }
    } else if(id==='offices'){
      speakNarration('How far we have grown. From a single desk at LOTUS House in Ikoyi in 2006 to 12 locations across 7 states, managing over 65 billion naira for 30,900 unit-holders across Nigeria.');
    } else if(pg.dataset.splash){
      speakNarration('Chapter '+c+': '+(chName[c]||pg.dataset.name));
    } else {
      speakNarration(pg.dataset.name||('Chapter '+c));
    }
  }

  function onPageAudioTrigger(i){
    if(!isAudioActive) return;
    playNavChime(true);
    if(narrateTimer) clearTimeout(narrateTimer);
    narrateTimer=setTimeout(narrateCurrentState, 200);
  }

  function onCardAudioTrigger(){
    if(!isAudioActive) return;
    playNavChime(false);
    if(narrateTimer) clearTimeout(narrateTimer);
    narrateTimer=setTimeout(narrateCurrentState, 200);
  }

  function setAudioActive(active, notify){
    isAudioActive=!!active;
    if(isAudioActive){
      if(typeof recordAudioActivated==='function')recordAudioActivated();
      if(!audioCtx){
        initAudio();
      } else if(audioCtx.state==='suspended'){
        audioCtx.resume();
      }
      if(masterGain&&audioCtx){
        var now=audioCtx.currentTime;
        masterGain.gain.cancelScheduledValues(now);
        masterGain.gain.setValueAtTime(masterGain.gain.value, now);
        masterGain.gain.linearRampToValueAtTime(0.35, now+0.4);
      }
      scheduleNextChime();
      if(audioBtn){
        audioBtn.classList.add('playing');
        audioBtn.setAttribute('aria-pressed','true');
        audioBtn.setAttribute('aria-label','Mute ambient sound and narration');
        audioBtn.title='Mute ambient sound & narration (M)';
        var svgM=audioBtn.querySelector('.audio-svg-muted');
        var svgP=audioBtn.querySelector('.audio-svg-playing');
        if(svgM) svgM.style.display='none';
        if(svgP) svgP.style.display='block';
        if(audioBars) audioBars.style.display='inline-flex';
        if(audioLbl) audioLbl.textContent='Sound On';
      }
      if(mobileDrawerAudioBtn){
        mobileDrawerAudioBtn.classList.add('playing');
        mobileDrawerAudioBtn.setAttribute('aria-pressed','true');
        var mSvgM=mobileDrawerAudioIcon?mobileDrawerAudioIcon.querySelector('.audio-svg-muted'):null;
        var mSvgP=mobileDrawerAudioIcon?mobileDrawerAudioIcon.querySelector('.audio-svg-playing'):null;
        if(mSvgM) mSvgM.style.display='none';
        if(mSvgP) mSvgP.style.display='block';
        if(mobileDrawerAudioStatus) mobileDrawerAudioStatus.textContent='Sound On';
      }
      if(mobileNavToggle) mobileNavToggle.classList.add('audio-active');
      if(notify) showToast('\u266B Sound & narration enabled');
      try{localStorage.setItem('lotus20:sound','1');}catch(e){}
      narrateCurrentState();
    } else {
      if(masterGain&&audioCtx){
        var now=audioCtx.currentTime;
        masterGain.gain.cancelScheduledValues(now);
        masterGain.gain.setValueAtTime(masterGain.gain.value, now);
        masterGain.gain.linearRampToValueAtTime(0, now+0.3);
      }
      if(chimeTimer){clearTimeout(chimeTimer);chimeTimer=null;}
      if(narrateTimer){clearTimeout(narrateTimer);narrateTimer=null;}
      stopNarration();
      if(audioBtn){
        audioBtn.classList.remove('playing');
        audioBtn.setAttribute('aria-pressed','false');
        audioBtn.setAttribute('aria-label','Unmute ambient sound and narration');
        audioBtn.title='Turn on ambient sound & narration (M)';
        var svgM=audioBtn.querySelector('.audio-svg-muted');
        var svgP=audioBtn.querySelector('.audio-svg-playing');
        if(svgM) svgM.style.display='block';
        if(svgP) svgP.style.display='none';
        if(audioBars) audioBars.style.display='none';
        if(audioLbl) audioLbl.textContent='Sound';
      }
      if(mobileDrawerAudioBtn){
        mobileDrawerAudioBtn.classList.remove('playing');
        mobileDrawerAudioBtn.setAttribute('aria-pressed','false');
        var mSvgM=mobileDrawerAudioIcon?mobileDrawerAudioIcon.querySelector('.audio-svg-muted'):null;
        var mSvgP=mobileDrawerAudioIcon?mobileDrawerAudioIcon.querySelector('.audio-svg-playing'):null;
        if(mSvgM) mSvgM.style.display='block';
        if(mSvgP) mSvgP.style.display='none';
        if(mobileDrawerAudioStatus) mobileDrawerAudioStatus.textContent='Muted';
      }
      if(mobileNavToggle) mobileNavToggle.classList.remove('audio-active');
      if(notify) showToast('\u2715 Ambient sound muted');
      try{localStorage.setItem('lotus20:sound','0');}catch(e){}
    }
  }

  if(audioBtn){
    audioBtn.addEventListener('click',function(){
      setAudioActive(!isAudioActive, true);
    });
  }

  document.addEventListener('visibilitychange',function(){
    if(document.hidden){
      if(isAudioActive&&masterGain&&audioCtx){
        masterGain.gain.setTargetAtTime(0, audioCtx.currentTime, 0.2);
      }
      stopNarration();
    } else {
      if(isAudioActive&&masterGain&&audioCtx){
        masterGain.gain.setTargetAtTime(0.35, audioCtx.currentTime, 0.3);
      }
    }
  });

  if(window.speechSynthesis&&window.speechSynthesis.onvoiceschanged!==undefined){
    window.speechSynthesis.onvoiceschanged=function(){};
  }

  function carouselFor(i){var id=pages[i]&&pages[i].dataset.id;return CAR[id]||null;}

  /* Global keyboard event listeners mapping to page navigation logic */
  function navNextPage(){
    stopPlay();
    go(cur===P_N-1?0:cur+1);
  }
  function navPrevPage(){
    stopPlay();
    if(cur>0)go(cur-1);
  }

  window.addEventListener('keydown',function(e){
    var t=e.target;
    if(t&&(t.tagName==='INPUT'||t.tagName==='TEXTAREA'||t.tagName==='SELECT'||t.isContentEditable))return;
    if(e.key==='m'||e.key==='M'){
      e.preventDefault();
      setAudioActive(!isAudioActive, true);
      return;
    }
    if(e.key==='b'||e.key==='B'){
      e.preventDefault();
      var bOverlay = document.getElementById('badgesOverlay');
      if(bOverlay && !bOverlay.hidden){
        if(typeof closeBadgesOverlay==='function') closeBadgesOverlay();
      } else {
        if(typeof openBadgesOverlay==='function') openBadgesOverlay();
      }
      return;
    }
    if(e.key==='Escape'){
      var bOverlay = document.getElementById('badgesOverlay');
      if(bOverlay && !bOverlay.hidden){
        if(typeof closeBadgesOverlay==='function') closeBadgesOverlay();
        return;
      }
      if(menu&&menu.classList.contains('open'))closeMenu();
      document.querySelectorAll('.card.open').forEach(function(c){c.classList.remove('open');});
      return;
    }
    if(menu&&menu.classList.contains('open'))return;

    var C=carouselFor(cur);
    if(e.key==='ArrowRight'){
      e.preventDefault();
      navNextPage();
    } else if(e.key==='ArrowLeft'){
      e.preventDefault();
      navPrevPage();
    } else if(e.key==='PageDown'){
      e.preventDefault();
      navNextPage();
    } else if(e.key==='PageUp'){
      e.preventDefault();
      navPrevPage();
    } else if(e.key==='ArrowDown'){
      if(C){e.preventDefault();stopPlay();C.step(1);}
    } else if(e.key==='ArrowUp'){
      if(C){e.preventDefault();stopPlay();C.step(-1);}
    }
  });

  var sx=0,sy=0,st=0;
  var pagesEl=document.getElementById('pages');
  if(pagesEl){
    pagesEl.addEventListener('touchstart',function(e){
      var p=e.touches&&e.touches[0];
      if(!p) return;
      sx=p.clientX;sy=p.clientY;st=Date.now();
    },{passive:true});
    pagesEl.addEventListener('touchend',function(e){
      if(menu&&menu.classList.contains('open'))return;
      var p=e.changedTouches&&e.changedTouches[0];
      if(!p) return;
      var dx=p.clientX-sx,dy=p.clientY-sy;
      if(Math.abs(dx)<50||Math.abs(dx)<Math.abs(dy)*1.3||Date.now()-st>800)return;
      if(safeClosest(e.target,'input,textarea,select,form,button,a,.scrub'))return;
      var d=dx<0?1:-1,C=carouselFor(cur);stopPlay();
      if(C&&safeClosest(e.target,'.stage')){if(!C.step(d))go(cur+d);}else go(cur+d);
    },{passive:true});
  }
  function relayAll(){
    // Only reposition the active carousel on the current visible page to prevent thrashing
    var C=carouselFor(cur);
    if(C&&C.active>=0){
      C.go(C.active,true);
    }
  }
  window.addEventListener('resize',relayAll);
  if(document.fonts&&document.fonts.ready)document.fonts.ready.then(relayAll);

  window.addEventListener('hashchange',function(){
    var h=(location.hash||'').replace('#','');
    if(!h) return;
    for(var j=0;j<P_N;j++){
      if(pages[j]&&pages[j].dataset.id===h){
        if(j!==cur)go(j);
        break;
      }
    }
  });

  /* ---------- PWA Compliance & Mobile Floating Install Button ---------- */
  if('serviceWorker' in navigator){
    window.addEventListener('load', function(){
      navigator.serviceWorker.register('/sw.js').catch(function(err){
        console.warn('Service worker registration note:', err);
      });
    });
  }

  var deferredInstallPrompt = null;
  var pwaFloatContainer = document.getElementById('pwaFloatContainer');
  var pwaInstallBtn = document.getElementById('pwaInstallBtn');
  var pwaDismissBtn = document.getElementById('pwaDismissBtn');
  var pwaIosSheet = document.getElementById('pwaIosSheet');
  var pwaIosClose = document.getElementById('pwaIosClose');
  var pwaIosGotIt = document.getElementById('pwaIosGotIt');

  var isStandalone = window.matchMedia('(display-mode: standalone)').matches ||
                     (window.navigator.standalone === true);
  var isDismissed = false;
  try {
    isDismissed = sessionStorage.getItem('lotus20_pwa_dismiss') === '1';
  } catch(e){}

  var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent) && !window.MSStream;
  var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
                 window.innerWidth <= 768;

  function showPwaFloat(){
    if(isStandalone || isDismissed || !pwaFloatContainer) return;
    if(window.innerWidth <= 768 || isMobile){
      pwaFloatContainer.hidden = false;
      pwaFloatContainer.classList.add('visible');
    }
  }

  window.addEventListener('beforeinstallprompt', function(e){
    e.preventDefault();
    deferredInstallPrompt = e;
    showPwaFloat();
  });

  window.addEventListener('appinstalled', function(){
    deferredInstallPrompt = null;
    if(pwaFloatContainer) pwaFloatContainer.hidden = true;
    showToast('\u2713 LOTUS@20 installed successfully!');
  });

  // On mobile devices, reveal the floating install button after initial immersion
  if(!isStandalone && !isDismissed && (isMobile || window.innerWidth <= 768)){
    setTimeout(showPwaFloat, 1800);
  }

  window.addEventListener('resize', function(){
    if(!isStandalone && !isDismissed && (window.innerWidth <= 768 || isMobile)){
      showPwaFloat();
    } else if(pwaFloatContainer && window.innerWidth > 768 && !isMobile){
      pwaFloatContainer.classList.remove('visible');
    }
  });

  if(pwaInstallBtn){
    pwaInstallBtn.addEventListener('click', function(){
      if(deferredInstallPrompt){
        deferredInstallPrompt.prompt();
        deferredInstallPrompt.userChoice.then(function(choiceResult){
          if(choiceResult.outcome === 'accepted'){
            if(pwaFloatContainer) pwaFloatContainer.hidden = true;
          }
          deferredInstallPrompt = null;
        });
      } else if(isIOS){
        if(pwaIosSheet) pwaIosSheet.hidden = false;
      } else {
        showToast('To install: Open browser menu (\u22EE) and tap "Install app" or "Add to Home Screen"');
      }
    });
  }

  if(pwaDismissBtn){
    pwaDismissBtn.addEventListener('click', function(e){
      e.stopPropagation();
      if(pwaFloatContainer){
        pwaFloatContainer.hidden = true;
        pwaFloatContainer.classList.remove('visible');
      }
      isDismissed = true;
      try { sessionStorage.setItem('lotus20_pwa_dismiss', '1'); } catch(err){}
    });
  }

  if(pwaIosClose){
    pwaIosClose.addEventListener('click', function(){
      if(pwaIosSheet) pwaIosSheet.hidden = true;
    });
  }

  if(pwaIosGotIt){
    pwaIosGotIt.addEventListener('click', function(){
      if(pwaIosSheet) pwaIosSheet.hidden = true;
    });
  }

  /* ==========================================================================
     LOTUS@20 Milestones & Digital Badges System - Audio, Toast & UI Handlers
     ========================================================================== */
  function playBadgeFanfare(){
    try {
      var ctx = audioCtx || (window.AudioContext ? new (window.AudioContext || window.webkitAudioContext)() : null);
      if(!ctx) return;
      if(ctx.state === 'suspended') ctx.resume();
      var now = ctx.currentTime;
      // Triumphal neo-brutalist fanfare arpeggio: C5 (523.25), E5 (659.25), G5 (783.99), C6 (1046.50)
      [523.25, 659.25, 783.99, 1046.50].forEach(function(freq, idx){
        var osc = ctx.createOscillator();
        var gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + idx * 0.08);
        gain.gain.setValueAtTime(0.001, now + idx * 0.08);
        gain.gain.linearRampToValueAtTime(0.12, now + idx * 0.08 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.45);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + idx * 0.08);
        osc.stop(now + idx * 0.08 + 0.48);
      });
    } catch(e){}
  }

  var toastTimeout = null;
  function showBadgeToast(badge){
    var toast = document.getElementById('badgeToast');
    if(!toast) return;
    var iconEl = document.getElementById('badgeToastIcon');
    var titleEl = document.getElementById('badgeToastTitle');
    var descEl = document.getElementById('badgeToastDesc');
    var ctaEl = document.getElementById('badgeToastCta');

    if(iconEl) iconEl.textContent = badge.icon || '🏆';
    if(titleEl) titleEl.textContent = badge.title;
    if(descEl) descEl.textContent = badge.desc;

    toast.hidden = false;

    if(ctaEl){
      ctaEl.onclick = function(){
        toast.hidden = true;
        openBadgesOverlay();
      };
    }

    var closeEl = document.getElementById('badgeToastClose');
    if(closeEl){
      closeEl.onclick = function(){
        toast.hidden = true;
      };
    }

    if(toastTimeout) clearTimeout(toastTimeout);
    toastTimeout = setTimeout(function(){
      toast.hidden = true;
    }, 7000);
  }

  function triggerBadgeUnlock(badgeId){
    if(unlockedBadges[badgeId]) return;
    unlockedBadges[badgeId] = Date.now();
    saveBadgesStorage();

    var badge = BADGES_CONFIG.find(function(b){ return b.id === badgeId; });
    if(!badge) return;

    playBadgeFanfare();

    if(typeof confetti === 'function') {
      try { confetti(); } catch(e){}
    }

    showBadgeToast(badge);

    var bBtn = document.getElementById('badgesBtn');
    if(bBtn){
      bBtn.classList.add('badge-pulse', 'has-unlocked');
      setTimeout(function(){ bBtn.classList.remove('badge-pulse'); }, 2500);
    }

    updateBadgesHeaderCount();

    var overlay = document.getElementById('badgesOverlay');
    if(overlay && !overlay.hidden){
      renderBadgesOverlay();
    }

    // Check if grand centurion unlocks as a result!
    if(badgeId !== 'grand_centurion'){
      var others = Object.keys(unlockedBadges).filter(function(k){ return k !== 'grand_centurion'; }).length;
      if(others >= 9){
        setTimeout(function(){ triggerBadgeUnlock('grand_centurion'); }, 1200);
      }
    }
  }

  function getBadgeProgressDetails(badge){
    var isUnlocked = !!unlockedBadges[badge.id];
    var current = 0;
    var target = badge.target;
    var pt = progressTracker || {};

    if(badge.id === 'history_explorer'){
      current = Object.keys(pt.timeline || {}).length;
      if(isUnlocked || (pt.timeline && pt.timeline['19'])) current = target;
    } else if(badge.id === 'pioneering_spirit'){
      current = Object.keys(pt.firsts || {}).length;
      if(isUnlocked) current = target;
    } else if(badge.id === 'numbers_master'){
      current = Object.keys(pt.facts || {}).length;
      if(isUnlocked) current = target;
    } else if(badge.id === 'impact_advocate'){
      current = Object.keys(pt.impact20 || {}).length;
      if(isUnlocked) current = target;
    } else if(badge.id === 'halal_guardian'){
      current = Object.keys(pt.halal20 || {}).length;
      if(isUnlocked) current = target;
    } else if(badge.id === 'voices_lotus'){
      current = ((pt.pages && pt.pages['founder']) ? 1 : 0) + Object.keys(pt.people20 || {}).length;
      if(isUnlocked) current = target;
    } else if(badge.id === 'nationwide_footprint'){
      current = (pt.pages && pt.pages['offices']) ? 1 : 0;
      if(isUnlocked) current = target;
    } else if(badge.id === 'halal_scholar'){
      current = pt.quizDone ? 1 : 0;
      if(isUnlocked) current = target;
    } else if(badge.id === 'sonic_traveler'){
      current = (pt.soundActive || isAudioActive) ? 1 : 0;
      if(isUnlocked) current = target;
    } else if(badge.id === 'grand_centurion'){
      current = Object.keys(unlockedBadges || {}).filter(function(k){ return k !== 'grand_centurion'; }).length;
      if(isUnlocked) current = target;
    }

    current = Math.min(target, current);
    var pct = isUnlocked ? 100 : Math.round((current / target) * 100);

    return {
      current: current,
      target: target,
      pct: pct,
      unlocked: isUnlocked
    };
  }

  function getRankInfo(unlockedCount){
    if(unlockedCount >= 10) return { title: 'Grand Centurion of LOTUS@20', tag: 'Rank: Grand Champion', icon: '🏆' };
    if(unlockedCount >= 8)  return { title: 'Platinum Ambassador', tag: 'Rank: Platinum Ambassador', icon: '🌟' };
    if(unlockedCount >= 6)  return { title: 'Gold Scholar', tag: 'Rank: Gold Scholar', icon: '🥇' };
    if(unlockedCount >= 3)  return { title: 'Silver Historian', tag: 'Rank: Silver Historian', icon: '🥈' };
    if(unlockedCount >= 1)  return { title: 'Bronze Explorer', tag: 'Rank: Bronze Explorer', icon: '🥉' };
    return { title: 'Commemorative Guest', tag: 'Rank: New Visitor', icon: '🎖️' };
  }

  function updateBadgesHeaderCount(){
    var unlockedCount = Object.keys(unlockedBadges).length;
    var totalCount = BADGES_CONFIG.length;
    var rank = getRankInfo(unlockedCount);

    var pill = document.getElementById('badgeCountPill');
    if(pill) pill.textContent = unlockedCount + '/' + totalCount;

    var menuCount = document.getElementById('menuBadgeCount');
    if(menuCount) menuCount.textContent = unlockedCount + '/' + totalCount;

    var chBadgeCount = document.getElementById('chScreenBadgeCount');
    if(chBadgeCount) chBadgeCount.textContent = unlockedCount + '/' + totalCount;

    if(mobileDrawerBadgeCount) mobileDrawerBadgeCount.textContent = unlockedCount + '/' + totalCount;
    if(mobileDrawerBadgeRank) mobileDrawerBadgeRank.textContent = rank.tag + ' \u00b7 ' + rank.title;
    if(mobileDrawerBadgesBtn) mobileDrawerBadgesBtn.classList.toggle('has-unlocked', unlockedCount > 0);

    if(mobileNavToggleBadge){
      if(unlockedCount > 0){
        mobileNavToggleBadge.style.display = 'inline-flex';
        mobileNavToggleBadge.textContent = unlockedCount;
      } else {
        mobileNavToggleBadge.style.display = 'none';
      }
    }

    var bBtn = document.getElementById('badgesBtn');
    if(bBtn){
      bBtn.classList.toggle('has-unlocked', unlockedCount > 0);
    }
  }

  var activeBadgeFilter = 'all';

  function renderBadgesOverlay(){
    var unlockedCount = Object.keys(unlockedBadges).length;
    var totalCount = BADGES_CONFIG.length;
    var pct = Math.round((unlockedCount / totalCount) * 100);
    var rank = getRankInfo(unlockedCount);

    var levelIcon = document.getElementById('badgesLevelIcon');
    var levelTag = document.getElementById('badgesLevelTag');
    var levelTitle = document.getElementById('badgesLevelTitle');
    var meterPct = document.getElementById('badgesMeterPct');
    var meterFill = document.getElementById('badgesMeterFill');

    if(levelIcon) levelIcon.textContent = rank.icon;
    if(levelTag) levelTag.textContent = rank.tag;
    if(levelTitle) levelTitle.textContent = unlockedCount + ' of ' + totalCount + ' Milestones Unlocked (' + rank.title + ')';
    if(meterPct) meterPct.textContent = pct + '%';
    if(meterFill) meterFill.style.width = pct + '%';

    var fAll = document.getElementById('filterAllCount');
    var fUnlocked = document.getElementById('filterUnlockedCount');
    var fLocked = document.getElementById('filterLockedCount');

    if(fAll) fAll.textContent = totalCount;
    if(fUnlocked) fUnlocked.textContent = unlockedCount;
    if(fLocked) fLocked.textContent = totalCount - unlockedCount;

    var grid = document.getElementById('badgesGrid');
    if(!grid) return;
    grid.innerHTML = '';

    var filtered = BADGES_CONFIG.filter(function(badge){
      var isUnlocked = !!unlockedBadges[badge.id];
      if(activeBadgeFilter === 'unlocked') return isUnlocked;
      if(activeBadgeFilter === 'locked') return !isUnlocked;
      return true;
    });

    if(!filtered.length){
      var emptyNotice = document.createElement('div');
      emptyNotice.style.gridColumn = '1 / -1';
      emptyNotice.style.padding = '36px 20px';
      emptyNotice.style.textAlign = 'center';
      emptyNotice.style.background = '#fff';
      emptyNotice.style.border = '2px dashed var(--ink)';
      emptyNotice.innerHTML = '<strong>No badges match this filter.</strong><p style="margin:6px 0 0;font-size:.85rem;color:#666">Explore the exhibition to earn commemorative milestones!</p>';
      grid.appendChild(emptyNotice);
      return;
    }

    filtered.forEach(function(badge){
      grid.appendChild(createBadgeCardElement(badge));
    });
  }

  function createBadgeCardElement(badge){
    var isUnlocked = !!unlockedBadges[badge.id];
    var status = getBadgeProgressDetails(badge);
    var dateStr = '';
    if(isUnlocked){
      var d = new Date(unlockedBadges[badge.id]);
      dateStr = 'Earned ' + d.toLocaleDateString(undefined, {month:'short', day:'numeric', year:'numeric'});
    }

    var card = document.createElement('article');
    card.className = 'badge-card ' + (isUnlocked ? 'unlocked' : 'locked');
    card.innerHTML =
      '<div class="badge-card-top">' +
        '<div class="badge-icon-box" aria-hidden="true">' + badge.icon + '</div>' +
        '<span class="badge-status-tag ' + (isUnlocked ? 'unlocked' : 'locked') + '">' +
          (isUnlocked ? '✓ Unlocked' : 'Locked') +
        '</span>' +
      '</div>' +
      '<div class="badge-card-meta">' +
        '<span class="badge-cat">' + badge.cat + '</span>' +
        '<h3 class="badge-title">' + badge.title + '</h3>' +
        '<span class="badge-tagline">' + badge.tagline + '</span>' +
      '</div>' +
      '<p class="badge-desc">' + badge.desc + '</p>' +
      '<div class="badge-progress-wrap">' +
        '<div class="badge-progress-meta">' +
          '<span>' + (isUnlocked ? (dateStr || 'Completed ✓') : ('Progress: ' + status.current + ' / ' + status.target + ' ' + badge.unit)) + '</span>' +
          '<span>' + status.pct + '%</span>' +
        '</div>' +
        '<div class="badge-progress-track">' +
          '<div class="badge-progress-fill" style="width: ' + status.pct + '%"></div>' +
        '</div>' +
      '</div>' +
      '<div class="badge-actions">' +
        '<button type="button" class="btn sm ' + (isUnlocked ? 'ghost' : 'dark') + ' badge-goto-btn" data-goto="' + badge.goto + '">' +
          (isUnlocked ? 'Revisit Milestone &rarr;' : 'Explore Chapter &rarr;') +
        '</button>' +
        (isUnlocked ? '<button type="button" class="btn sm ghost badge-share-one" data-bid="' + badge.id + '" title="Share milestone achievement">Share ↗</button>' : '') +
      '</div>';

    var gotoBtn = card.querySelector('.badge-goto-btn');
    if(gotoBtn){
      gotoBtn.addEventListener('click', function(){
        closeBadgesOverlay();
        goId(badge.goto);
      });
    }

    var shareOneBtn = card.querySelector('.badge-share-one');
    if(shareOneBtn){
      shareOneBtn.addEventListener('click', function(e){
        e.stopPropagation();
        var msg = '🏆 I unlocked the "' + badge.title + '" milestone badge on the LOTUS@20 commemorative exhibition! Explore 20 years of halal finance: ' + window.location.origin + '#' + badge.goto;
        if(navigator.share){
          navigator.share({ title: 'LOTUS@20 Badge: ' + badge.title, text: msg, url: window.location.origin + '#' + badge.goto }).catch(function(){});
        } else {
          copyToClipboard(msg);
          showToast('\u2713 Milestone achievement copied to clipboard!');
        }
      });
    }

    return card;
  }

  function openBadgesOverlay(){
    stopPlay();
    closeMobileDrawer();
    var overlay = document.getElementById('badgesOverlay');
    if(!overlay) return;
    overlay.hidden = false;
    document.body.style.overflow = 'hidden';
    var btn = document.getElementById('badgesBtn');
    if(btn) btn.setAttribute('aria-expanded', 'true');
    renderBadgesOverlay();
    var closeBtn = document.getElementById('badgesCloseBtn');
    if(closeBtn) closeBtn.focus({preventScroll:true});
  }

  function closeBadgesOverlay(){
    var overlay = document.getElementById('badgesOverlay');
    if(!overlay) return;
    overlay.hidden = true;
    document.body.style.overflow = '';
    var btn = document.getElementById('badgesBtn');
    if(btn) {
      btn.setAttribute('aria-expanded', 'false');
      btn.focus({preventScroll:true});
    }
  }

  // Hook functions invoked from app navigation
  function recordTimelineCard(i){
    if(!progressTracker) progressTracker = {};
    if(!progressTracker.timeline) progressTracker.timeline = {};
    progressTracker.timeline[i] = 1;
    saveBadgesStorage();
    var count = Object.keys(progressTracker.timeline).length;
    // When user reads all 20 milestones or reaches the 2026 finale milestone (index 19)
    if(count >= 20 || i >= 19){
      triggerBadgeUnlock('history_explorer');
    }
  }

  function recordTwentyCard(pid, i){
    if(!progressTracker) progressTracker = {};
    if(!progressTracker[pid]) progressTracker[pid] = {};
    progressTracker[pid][i] = 1;
    saveBadgesStorage();

    if(pid === 'firsts'){
      var c = Object.keys(progressTracker.firsts || {}).length;
      if(c >= 12 || i >= 19) triggerBadgeUnlock('pioneering_spirit');
    } else if(pid === 'facts'){
      var c = Object.keys(progressTracker.facts || {}).length;
      if(c >= 12 || i >= 19) triggerBadgeUnlock('numbers_master');
    } else if(pid === 'impact20'){
      var c = Object.keys(progressTracker.impact20 || {}).length;
      if(c >= 12 || i >= 19) triggerBadgeUnlock('impact_advocate');
    } else if(pid === 'halal20'){
      var c = Object.keys(progressTracker.halal20 || {}).length;
      if(c >= 12 || i >= 19) triggerBadgeUnlock('halal_guardian');
    } else if(pid === 'people20'){
      var c = Object.keys(progressTracker.people20 || {}).length;
      if(progressTracker.pages && progressTracker.pages['founder'] && c >= 4) triggerBadgeUnlock('voices_lotus');
    }
  }

  function recordPageVisit(pageId){
    if(!progressTracker) progressTracker = {};
    if(!progressTracker.pages) progressTracker.pages = {};
    progressTracker.pages[pageId] = 1;
    saveBadgesStorage();

    if(pageId === 'offices') {
      triggerBadgeUnlock('nationwide_footprint');
    } else if(pageId === 'founder') {
      if(Object.keys(progressTracker.people20 || {}).length >= 2) {
        triggerBadgeUnlock('voices_lotus');
      }
    }
  }

  function recordQuizFinished(score){
    if(!progressTracker) progressTracker = {};
    progressTracker.quizDone = true;
    saveBadgesStorage();
    triggerBadgeUnlock('halal_scholar');
  }

  function recordAudioActivated(){
    if(!progressTracker) progressTracker = {};
    progressTracker.soundActive = true;
    saveBadgesStorage();
    triggerBadgeUnlock('sonic_traveler');
  }

  // Wire up Badges controls
  var badgesBtn = document.getElementById('badgesBtn');
  if(badgesBtn) badgesBtn.addEventListener('click', openBadgesOverlay);

  var badgesCloseBtn = document.getElementById('badgesCloseBtn');
  if(badgesCloseBtn) badgesCloseBtn.addEventListener('click', closeBadgesOverlay);

  var badgesOverlay = document.getElementById('badgesOverlay');
  if(badgesOverlay){
    badgesOverlay.addEventListener('click', function(e){
      if(e.target === badgesOverlay) closeBadgesOverlay();
    });
  }

  var menuBadgesTrigger = document.getElementById('menuBadgesTrigger');
  if(menuBadgesTrigger){
    menuBadgesTrigger.addEventListener('click', function(){
      closeMenu();
      openBadgesOverlay();
    });
  }

  document.querySelectorAll('.badges-filter').forEach(function(btn){
    btn.addEventListener('click', function(){
      document.querySelectorAll('.badges-filter').forEach(function(b){
        b.classList.remove('on');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('on');
      btn.setAttribute('aria-selected', 'true');
      activeBadgeFilter = btn.dataset.filter || 'all';
      renderBadgesOverlay();
    });
  });

  var shareBadgesBtn = document.getElementById('shareBadgesBtn');
  if(shareBadgesBtn){
    shareBadgesBtn.addEventListener('click', function(){
      var count = Object.keys(unlockedBadges).length;
      var rank = getRankInfo(count);
      var text = '🏆 I\'ve unlocked ' + count + ' of 10 commemorative milestone badges (' + rank.title + ') exploring LOTUS Capital\'s 20-year halal finance exhibition (2006–2026)! Experience the journey: ' + window.location.origin;
      if(navigator.share){
        navigator.share({ title: 'My LOTUS@20 Badges', text: text, url: window.location.origin }).catch(function(){});
      } else {
        copyToClipboard(text);
        showToast('\u2713 Badges summary copied to clipboard!');
      }
    });
  }

  // Chapters Screen Filter Tabs & Card Events
  function updateChaptersScreenUI(){
    var unlockedCount = Object.keys(unlockedBadges || {}).length;
    var totalCount = BADGES_CONFIG.length;
    var bCountEl = document.getElementById('chScreenBadgeCount');
    if(bCountEl) bCountEl.textContent = unlockedCount + '/' + totalCount;

    Object.keys(visited || {}).forEach(function(chNum){
      var card = document.querySelector('.ch-card[data-ch="'+chNum+'"]');
      if(card){
        card.classList.add('visited');
        var stB = card.querySelector('.ch-status-badge');
        if(stB) stB.textContent = '✓ Visited';
      }
    });
  }

  document.querySelectorAll('.ch-filter-btn').forEach(function(btn){
    btn.addEventListener('click', function(){
      document.querySelectorAll('.ch-filter-btn').forEach(function(b){
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      var filter = btn.dataset.filter || 'all';
      document.querySelectorAll('.ch-card').forEach(function(card){
        if(filter === 'all' || card.dataset.cat === filter){
          card.classList.remove('is-hidden');
        } else {
          card.classList.add('is-hidden');
        }
      });
    });
  });

  document.querySelectorAll('.ch-card').forEach(function(card){
    function triggerCardNav(e){
      if(safeClosest(e.target, '.ch-card-btn, [data-goto]')) return;
      var target = card.dataset.target;
      if(target) goId(target);
    }
    card.addEventListener('click', triggerCardNav);
    card.addEventListener('keydown', function(e){
      if(e.key === 'Enter' || e.key === ' '){
        e.preventDefault();
        var target = card.dataset.target;
        if(target) goId(target);
      }
    });
  });

  var menuOpenScreenBtn = document.getElementById('menuOpenScreenBtn');
  if(menuOpenScreenBtn){
    menuOpenScreenBtn.addEventListener('click', function(){
      closeMenu();
      goId('chapters');
    });
  }

  var chScreenBadgesTrigger = document.getElementById('chScreenBadgesTrigger');
  if(chScreenBadgesTrigger){
    chScreenBadgesTrigger.addEventListener('click', function(){
      openBadgesOverlay();
    });
  }

  // Evaluate initial state on load
  updateBadgesHeaderCount();
  updateChaptersScreenUI();
  if(isAudioActive) recordAudioActivated();

  var start=0,h=(location.hash||'').replace('#','');
  pages.forEach(function(pg,i){if(pg.dataset.id===h)start=i;});
  Object.keys(CAR).forEach(function(k){CAR[k].go(0,true);});
  go(start);
})();
