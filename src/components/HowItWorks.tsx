import React, { useEffect, useRef } from 'react';
import { useInView } from '../hooks/useInView';

const steps = [
  {
    num: '01',
    title: 'Aggregates global market data',
    desc: 'News, economic releases, central bank signals, and cross-market activity pulled in real time.',
  },
  {
    num: '02',
    title: 'AI interprets impact and sentiment',
    desc: 'Identifies what matters, what was expected, and how price is likely to react — before it does.',
  },
  {
    num: '03',
    title: 'You get clear direction',
    desc: 'Bias, scenarios, and risk zones delivered instantly. No extra analysis needed.',
  },
];

// Orbit planets: logo image or text, radius offset, speed
const orbitPlanets = [
  {
    name: 'Reuters',
    img: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/Reuters_Logo.svg',
    bg: '#ffffff',
    size: 64,
    orbitRadius: 130,
    speed: 0.4, // degrees per frame
    startAngle: 60,
  },
  {
    name: 'Bloomberg',
    img: null,
    bg: '#1a1a1a',
    size: 58,
    orbitRadius: 130,
    speed: 0.4,
    startAngle: 180,
  },
  {
    name: 'TV',
    img: null,
    bg: '#1a1a1a',
    size: 58,
    orbitRadius: 130,
    speed: 0.4,
    startAngle: 300,
  },
  {
    name: 'LSEG',
    img: null,
    bg: '#1a4fff',
    size: 64,
    orbitRadius: 170,
    speed: 0.25,
    startAngle: 240,
  },
];

const OrbitDiagram: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const anglesRef = useRef(orbitPlanets.map(p => p.startAngle));
  const imgCacheRef = useRef<{ [key: string]: HTMLImageElement }>({});

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const SIZE = 340;
    canvas.width = SIZE;
    canvas.height = SIZE;
    const cx = SIZE / 2, cy = SIZE / 2;

    // Preload Reuters logo
    const reutersImg = new Image();
    reutersImg.crossOrigin = 'anonymous';
    reutersImg.src = 'https://upload.wikimedia.org/wikipedia/commons/8/8d/Reuters_Logo.svg';
    reutersImg.onload = () => { imgCacheRef.current['reuters'] = reutersImg; };

    const draw = () => {
      ctx.clearRect(0, 0, SIZE, SIZE);

      // Outer glow behind center
      const radialGrad = ctx.createRadialGradient(cx, cy, 20, cx, cy, 120);
      radialGrad.addColorStop(0, 'rgba(255,255,255,0.06)');
      radialGrad.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = radialGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, 120, 0, Math.PI * 2);
      ctx.fill();

      // Draw orbit rings
      orbitPlanets.forEach((planet, i) => {
        // Only draw unique orbit radii
        if (i === 0 || planet.orbitRadius !== orbitPlanets[i-1].orbitRadius) {
          ctx.beginPath();
          ctx.arc(cx, cy, planet.orbitRadius, 0, Math.PI * 2);
          ctx.strokeStyle = 'rgba(255,255,255,0.12)';
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });

      // Draw planets
      orbitPlanets.forEach((planet, i) => {
        const angle = (anglesRef.current[i] * Math.PI) / 180;
        const px = cx + planet.orbitRadius * Math.cos(angle);
        const py = cy + planet.orbitRadius * Math.sin(angle);
        const r = planet.size / 2;

        // Shadow/glow
        ctx.save();
        ctx.shadowColor = 'rgba(0,0,0,0.6)';
        ctx.shadowBlur = 12;

        // Circle background
        ctx.beginPath();
        ctx.arc(px, py, r, 0, Math.PI * 2);
        ctx.fillStyle = planet.bg;
        ctx.fill();
        ctx.strokeStyle = 'rgba(255,255,255,0.15)';
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.restore();

        // Content inside circle
        ctx.save();
        ctx.beginPath();
        ctx.arc(px, py, r, 0, Math.PI * 2);
        ctx.clip();

        if (planet.name === 'Reuters' && imgCacheRef.current['reuters']) {
          // Draw Reuters logo image
          const img = imgCacheRef.current['reuters'];
          const iw = r * 1.4, ih = r * 0.7;
          ctx.drawImage(img, px - iw/2, py - ih/2, iw, ih);
        } else if (planet.name === 'TV') {
          // TradingView logo text
          ctx.fillStyle = '#fff';
          ctx.font = 'bold 18px monospace';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText('TV', px, py);
          // small superscript-like mark
          ctx.font = 'bold 10px monospace';
          ctx.fillText('⬛', px + 10, py - 8);
        } else if (planet.name === 'Bloomberg') {
          ctx.fillStyle = '#fff';
          ctx.font = '9px Arial, sans-serif';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText('Bloomberg', px, py);
        } else if (planet.name === 'LSEG') {
          // LSEG: blue background with text + badge
          ctx.fillStyle = '#fff';
          ctx.font = 'bold 13px Arial, sans-serif';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText('LSEG', px, py + 6);
          // small icon above
          ctx.font = '12px Arial';
          ctx.fillText('⚜', px, py - 8);
        }

        ctx.restore();

        // Update angle
        anglesRef.current[i] += planet.speed;
      });

      // Center circle — MRKT AI ENGINE
      // Outer ring
      ctx.beginPath();
      ctx.arc(cx, cy, 58, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(255,255,255,0.8)';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Inner fill
      ctx.beginPath();
      ctx.arc(cx, cy, 56, 0, Math.PI * 2);
      ctx.fillStyle = '#050810';
      ctx.fill();

      // Center text
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 13px monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('MRKT', cx, cy - 6);
      ctx.font = '8px monospace';
      ctx.fillStyle = 'rgba(255,255,255,0.5)';
      ctx.fillText('AI ENGINE', cx, cy + 8);

      animRef.current = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  return (
    <div className="flex items-center justify-center">
      <canvas
        ref={canvasRef}
        style={{ width: '340px', height: '340px', maxWidth: '100%' }}
      />
    </div>
  );
};

const HowItWorks: React.FC = () => {
  const { ref, inView } = useInView();

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-brand-green/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`fade-section ${inView ? 'visible' : ''} text-center mb-16`}>
          <h2 className="text-4xl sm:text-5xl font-bold font-display mb-4">
            <span className="text-white">How MRKT Delivers</span>
            <br />
            <span className="gradient-text">This Advantage</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From raw market data to clear direction — MRKT reads the news, interprets what it means,
            and tells you where to act.
          </p>
          <button className="mt-6 text-brand-green border border-brand-green/40 px-6 py-2.5 rounded-lg hover:bg-brand-green/10 transition-all text-sm font-semibold">
            See For Yourself →
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Steps */}
          <div className="space-y-0">
            {steps.map((step, i) => (
              <div
                key={i}
                className={`fade-section ${inView ? 'visible' : ''} flex gap-6 py-8 ${
                  i < steps.length - 1 ? 'border-b border-[#1a2540]/60' : ''
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="shrink-0">
                  <span className="text-5xl font-bold font-display" style={{
                    background: 'linear-gradient(135deg, #7c6ef0, #a78bfa)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}>{step.num}</span>
                </div>
                <div className="pt-2">
                  <h3 className="text-white font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
            <p className="text-gray-400 text-sm italic pt-4">
              This happens in real time. Not after the move.
            </p>
          </div>

          {/* Orbit diagram */}
          <div className={`fade-section ${inView ? 'visible' : ''}`} style={{ transitionDelay: '300ms' }}>
            <OrbitDiagram />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
