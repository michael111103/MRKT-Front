# MRKT Edge Clone

Replika 1:1 dari [mrktedge.ai](https://www.mrktedge.ai/) — AI-powered market intelligence landing page.

## Stack
- React 18 + TypeScript
- Tailwind CSS v3
- Framer Motion
- Canvas API (live animated chart)
- Lucide React

## Cara Run Lokal

```bash
npm install
npm start
```

Buka [http://localhost:3000](http://localhost:3000)

## Deploy ke Vercel

### Cara 1 — Vercel CLI
```bash
npm install -g vercel
vercel
```

### Cara 2 — GitHub + Vercel Dashboard
1. Push project ini ke GitHub
2. Buka [vercel.com](https://vercel.com) → New Project
3. Import repo GitHub kamu
4. Settings:
   - Framework Preset: **Create React App**
   - Build Command: `npm run build`
   - Output Directory: `build`
5. Klik **Deploy**

## Fitur yang Direplikasi
- ✅ Live animated candlestick chart (Canvas API)
- ✅ Ticker harga bergerak horizontal (NQUSD, XAUUSD, BTCUSD, dll)
- ✅ 3 kolom berita auto-scroll vertikal
- ✅ Glow effects & scan line
- ✅ Grid background
- ✅ Fade-in on scroll (Intersection Observer)
- ✅ Before/After transformation demo
- ✅ Feature cards dengan icons
- ✅ How it works flow diagram
- ✅ Testimonials scrolling (2 baris)
- ✅ Comparison table (Signals vs MRKT)
- ✅ Pricing section dengan toggle monthly/annual
- ✅ Responsive mobile-first
- ✅ Navbar blur on scroll
