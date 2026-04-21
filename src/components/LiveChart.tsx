import React, { useEffect, useRef, useState } from 'react';

interface Candle {
  open: number;
  high: number;
  low: number;
  close: number;
}

type Phase = 'pullback' | 'news_hit' | 'surge' | 'target_reached' | 'reset';

const BASE_PRICE = 24100;
const TARGET_PRICE = 25080;

function generatePullbackCandles(count: number): Candle[] {
  const candles: Candle[] = [];
  let price = BASE_PRICE + 180;
  for (let i = 0; i < count; i++) {
    const open = price;
    const move = (Math.random() - 0.56) * 38;
    const close = open + move;
    const high = Math.max(open, close) + Math.random() * 18;
    const low = Math.min(open, close) - Math.random() * 18;
    price = close;
    candles.push({ open, high, low, close });
  }
  return candles;
}

const LiveChart: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const phaseRef = useRef<Phase>('pullback');
  const phaseFrameRef = useRef(0);
  const frameRef = useRef(0);
  const candlesRef = useRef<Candle[]>(generatePullbackCandles(18));
  const [phase, setPhase] = useState<Phase>('pullback');
  const [showNews, setShowNews] = useState(false);
  const [showTarget, setShowTarget] = useState(false);
  const [displayPrice, setDisplayPrice] = useState(BASE_PRICE);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener('resize', resize);

    const draw = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      const candles = candlesRef.current;
      const cw = Math.max(5, Math.floor((w - 80) / candles.length) - 3);
      const gap = 2;
      const chartW = w - 70;

      const allPrices = candles.flatMap(c => [c.high, c.low]);
      const minP = Math.min(...allPrices) - 100;
      const maxP = Math.max(...allPrices) + 100;
      const priceRange = maxP - minP;

      const scaleY = (p: number) => h - 28 - ((p - minP) / priceRange) * (h - 55);

      // Grid
      ctx.strokeStyle = 'rgba(26,37,64,0.5)';
      ctx.lineWidth = 0.5;
      for (let i = 0; i <= 4; i++) {
        const y = 10 + (i * (h - 38) / 4);
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(chartW, y); ctx.stroke();
        const p = maxP - (i / 4) * priceRange;
        ctx.fillStyle = 'rgba(80,100,140,0.6)';
        ctx.font = '9px monospace';
        ctx.textAlign = 'right';
        ctx.fillText(Math.round(p).toLocaleString(), w - 4, y + 3);
      }

      // Candles
      candles.forEach((c, i) => {
        const x = i * (cw + gap) + 12;
        const cx = x + cw / 2;
        const bull = c.close >= c.open;
        const color = bull ? '#00ff88' : '#ef4444';

        ctx.strokeStyle = color;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(cx, scaleY(c.high));
        ctx.lineTo(cx, scaleY(c.low));
        ctx.stroke();

        const bodyTop = scaleY(Math.max(c.open, c.close));
        const bodyH = Math.max(Math.abs(scaleY(c.open) - scaleY(c.close)), 1.5);
        ctx.fillStyle = color;
        ctx.fillRect(x, bodyTop, cw, bodyH);
      });

      // Current price dashed line + badge
      const last = candles[candles.length - 1];
      const priceY = scaleY(last.close);
      const pulse = (Math.sin(frameRef.current * 0.08) + 1) / 2;

      ctx.strokeStyle = `rgba(0,255,136,${0.35 + pulse * 0.45})`;
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(0, priceY);
      ctx.lineTo(chartW - 4, priceY);
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.fillStyle = '#00ff88';
      const badgeX = w - 66;
      ctx.beginPath();
      (ctx as any).roundRect(badgeX, priceY - 9, 62, 18, 3);
      ctx.fill();
      ctx.fillStyle = '#050810';
      ctx.font = 'bold 9px monospace';
      ctx.textAlign = 'center';
      ctx.fillText(Math.round(last.close).toLocaleString(), badgeX + 31, priceY + 4);

      const ph = phaseRef.current;

      // Pullback area label
      if (ph === 'pullback' || ph === 'news_hit') {
        const labelY = scaleY(BASE_PRICE + 40);
        ctx.fillStyle = 'rgba(10,15,30,0.8)';
        ctx.beginPath();
        (ctx as any).roundRect(12, labelY - 11, 98, 20, 4);
        ctx.fill();
        ctx.fillStyle = 'rgba(200,210,230,0.7)';
        ctx.font = '10px monospace';
        ctx.textAlign = 'left';
        ctx.fillText('Pullback Area', 16, labelY + 3);
      }

      // Target line during surge
      if (ph === 'surge' || ph === 'target_reached') {
        const tY = scaleY(TARGET_PRICE);
        ctx.strokeStyle = 'rgba(0,255,136,0.5)';
        ctx.lineWidth = 1;
        ctx.setLineDash([5, 4]);
        ctx.beginPath(); ctx.moveTo(0, tY); ctx.lineTo(chartW, tY); ctx.stroke();
        ctx.setLineDash([]);
        ctx.fillStyle = 'rgba(0,255,136,0.8)';
        ctx.font = 'bold 9px monospace';
        ctx.textAlign = 'left';
        ctx.fillText(`TARGET $${TARGET_PRICE.toLocaleString()}`, 8, tY - 4);
      }

      // TradingView logo
      ctx.fillStyle = 'rgba(80,100,140,0.35)';
      ctx.font = 'bold 12px monospace';
      ctx.textAlign = 'left';
      ctx.fillText('⬛TV', 10, h - 6);

      // Time labels
      ctx.fillStyle = 'rgba(80,100,140,0.5)';
      ctx.font = '9px monospace';
      ctx.textAlign = 'center';
      ctx.fillText('6', 20, h - 4);
      ctx.fillText('07:00', 140, h - 4);
      if (ph === 'surge' || ph === 'target_reached') {
        ctx.fillText('12:00', chartW / 2, h - 4);
      }

      // ---- Phase logic ----
      phaseFrameRef.current++;
      frameRef.current++;
      const pf = phaseFrameRef.current;

      if (ph === 'pullback') {
        if (pf % 8 === 0) {
          const lc = candlesRef.current[candlesRef.current.length - 1];
          const o = lc.close;
          const mv = (Math.random() - 0.56) * 35;
          const cl = Math.max(o + mv, BASE_PRICE - 80);
          candlesRef.current.push({ open: o, close: cl, high: Math.max(o, cl) + Math.random() * 14, low: Math.min(o, cl) - Math.random() * 14 });
          if (candlesRef.current.length > 22) candlesRef.current.shift();
          setDisplayPrice(Math.round(cl));
        }
        if (pf > 130) { phaseRef.current = 'news_hit'; phaseFrameRef.current = 0; setPhase('news_hit'); setShowNews(true); }
      } else if (ph === 'news_hit') {
        if (pf > 70) { phaseRef.current = 'surge'; phaseFrameRef.current = 0; setPhase('surge'); }
      } else if (ph === 'surge') {
        if (pf % 5 === 0) {
          const lc = candlesRef.current[candlesRef.current.length - 1];
          const o = lc.close;
          const diff = TARGET_PRICE - o;
          const mv = Math.max(25, diff * 0.2) + Math.random() * 18;
          const cl = Math.min(o + mv, TARGET_PRICE + 15);
          candlesRef.current.push({ open: o, close: cl, high: cl + Math.random() * 12, low: o - Math.random() * 8 });
          if (candlesRef.current.length > 30) candlesRef.current.shift();
          setDisplayPrice(Math.round(cl));
          if (cl >= TARGET_PRICE - 20) { phaseRef.current = 'target_reached'; phaseFrameRef.current = 0; setPhase('target_reached'); setShowTarget(true); }
        }
      } else if (ph === 'target_reached') {
        if (pf % 10 === 0) {
          const lc = candlesRef.current[candlesRef.current.length - 1];
          const o = lc.close;
          const cl = o + (Math.random() - 0.45) * 18;
          candlesRef.current.push({ open: o, close: cl, high: Math.max(o, cl) + Math.random() * 9, low: Math.min(o, cl) - Math.random() * 9 });
          if (candlesRef.current.length > 30) candlesRef.current.shift();
        }
        if (pf > 160) { phaseRef.current = 'reset'; phaseFrameRef.current = 0; setPhase('reset'); }
      } else if (ph === 'reset') {
        if (pf > 30) {
          candlesRef.current = generatePullbackCandles(18);
          phaseRef.current = 'pullback';
          phaseFrameRef.current = 0;
          setPhase('pullback');
          setShowNews(false);
          setShowTarget(false);
          setDisplayPrice(BASE_PRICE);
        }
      }

      animRef.current = requestAnimationFrame(draw);
    };

    draw();
    return () => { cancelAnimationFrame(animRef.current); window.removeEventListener('resize', resize); };
  }, []);

  const pctGain = (((displayPrice - BASE_PRICE) / BASE_PRICE) * 100).toFixed(2);

  return (
    <div className="relative w-full h-full">
      <canvas ref={canvasRef} className="w-full h-full block" />

      {showNews && (
        <div className="absolute top-2 right-2 left-2 space-y-1.5 pointer-events-none">
          <div className="bg-[#1a0808]/95 border border-red-500/40 rounded-lg p-2.5 backdrop-blur-sm"
            style={{ animation: 'fadeSlideIn 0.4s ease-out forwards' }}>
            <div className="flex items-center gap-2 mb-1">
              <span className="bg-red-500/25 text-red-400 text-[9px] font-mono px-1.5 py-0.5 rounded font-bold tracking-wider">HIGH IMPACT</span>
              <span className="text-gray-500 text-[10px]">Just now</span>
            </div>
            <p className="text-white text-[10px] font-bold font-mono leading-snug">TRUMP: THIS WILL BE A DOUBLE SIDED CEASEFIRE</p>
          </div>
          <div className="bg-[#1a0808]/95 border border-red-500/40 rounded-lg p-2.5 backdrop-blur-sm"
            style={{ animation: 'fadeSlideIn 0.4s ease-out 0.25s both' }}>
            <div className="flex items-center gap-2 mb-1">
              <span className="bg-red-500/25 text-red-400 text-[9px] font-mono px-1.5 py-0.5 rounded font-bold tracking-wider">HIGH IMPACT</span>
              <span className="text-gray-500 text-[10px]">Just now</span>
            </div>
            <p className="text-white text-[10px] font-bold font-mono leading-snug">TRUMP: I AGREE TO SUSPEND BOMBING AND ATTACK OF IRAN FOR A PERIOD OF TWO WEEKS</p>
          </div>
        </div>
      )}

      {showTarget && (
        <div className="absolute bottom-8 left-2 right-2 pointer-events-none"
          style={{ animation: 'fadeSlideIn 0.5s ease-out forwards' }}>
          <div className="bg-[#00ff88]/15 border border-[#00ff88]/60 rounded-lg px-3 py-2.5 backdrop-blur-sm flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-[#00ff88] flex items-center justify-center shrink-0">
              <svg width="12" height="10" viewBox="0 0 12 10"><path d="M1 5l3 3 7-7" stroke="#050810" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>
            </div>
            <div>
              <div className="text-[9px] font-mono text-[#00ff88]/70 tracking-widest uppercase">Target Reached</div>
              <div className="text-[#00ff88] font-bold font-mono text-sm">
                ${TARGET_PRICE.toLocaleString()} <span className="text-xs opacity-80">+{pctGain}%</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LiveChart;
