import React, { useEffect, useState } from 'react';
import LiveChart from './LiveChart';
import Ticker from './Ticker';

const avatars = [
  'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=100&q=60',
  'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=60',
  'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&q=60',
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=60',
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=60',
];

const Hero: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col pt-16 overflow-hidden">
      {/* Background glows */}
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-green/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Ticker */}
      <Ticker />

      {/* Main hero content */}
      <div className="flex-1 flex flex-col lg:flex-row max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 gap-8 items-center">

        {/* Left: Text */}
        <div className={`flex-1 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Social proof */}
          <div className="flex items-center gap-2 mb-6">
            <div className="flex -space-x-2">
              {avatars.map((src, i) => (
                <img key={i} src={src} alt="" className="w-8 h-8 rounded-full border-2 border-[#050810] object-cover" />
              ))}
            </div>
            <span className="text-gray-400 text-sm">Trusted by <span className="text-white font-semibold">10,000+</span> traders</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 font-display">
            <span className="text-white">See what the market</span>
            <br />
            <span className="gradient-text glow-text">is about to do</span>
            <br />
            <span className="text-white">before most traders</span>
            <br />
            <span className="text-gray-400">even react</span>
          </h1>

          <p className="text-gray-400 text-lg mb-8 max-w-lg leading-relaxed">
            MRKT turns macro, news, and market signals into clear trade direction instantly.
            No economics background. No second guessing.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <button className="bg-brand-green text-[#050810] font-bold px-6 py-3 rounded-lg hover:bg-brand-greenDim transition-all duration-200 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,255,136,0.3)]">
              Get Access to MRKT
            </button>
          </div>
        </div>

        {/* Right: Chart panel */}
        <div className={`flex-1 max-w-2xl w-full transition-all duration-1000 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="card-dark rounded-xl overflow-hidden glow-green border border-[#1a2540]">
            {/* Chart header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-[#1a2540]/60">
              <div className="flex items-center gap-3">
                <span className="live-badge text-brand-green text-xs font-mono font-bold">LIVE</span>
                <span className="text-white font-mono font-bold text-sm">NQ / USD</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="bg-brand-green/20 border border-brand-green/40 text-brand-green text-xs font-mono font-bold px-3 py-1 rounded">
                  BIAS ↗ Bullish
                </span>
              </div>
            </div>

            {/* Time selectors */}
            <div className="flex gap-2 px-4 py-2 border-b border-[#1a2540]/40">
              {['1m', '5m', '15m', '1H', '4H', '1D'].map(t => (
                <button key={t} className={`text-xs font-mono px-2 py-1 rounded transition-colors ${
                  t === '15m' ? 'bg-brand-green/20 text-brand-green' : 'text-gray-500 hover:text-gray-300'
                }`}>{t}</button>
              ))}
            </div>

            {/* Chart canvas — candlestick with storytelling */}
            <div className="scan-container" style={{ height: '240px' }}>
              <LiveChart />
            </div>

            {/* Bottom bias panel */}
            <div className="border-t border-[#1a2540]/60 px-4 py-3">
              <p className="text-gray-400 text-xs mb-2 font-mono uppercase tracking-wide">
                Nasdaq rallies on ceasefire relief as weak GDP fades; Hormuz reopening key
              </p>
              <div className="flex gap-3">
                <div className="flex-1 bg-brand-green/10 border border-brand-green/20 rounded-lg p-3">
                  <div className="text-gray-500 text-[10px] font-mono mb-1">SWING TRADING</div>
                  <div className="text-brand-green text-xs font-bold">Slightly Bullish ↑</div>
                </div>
                <div className="flex-1 bg-brand-green/10 border border-brand-green/20 rounded-lg p-3">
                  <div className="text-gray-500 text-[10px] font-mono mb-1">DAY TRADING</div>
                  <div className="text-brand-green text-xs font-bold">Slightly Bullish ↑</div>
                </div>
              </div>
            </div>
          </div>

          {/* Data providers with logos */}
          <div className="mt-4 flex items-center gap-3 flex-wrap">
            <span className="text-gray-600 text-xs font-mono uppercase tracking-wider">Data Powered By</span>
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/8d/Reuters_Logo.svg" alt="Reuters" className="h-4 opacity-40 hover:opacity-70 transition-opacity" style={{ filter: 'brightness(0) invert(1)' }} />
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b2/LSE_Group_logo.svg" alt="LSE Group" className="h-4 opacity-40 hover:opacity-70 transition-opacity" style={{ filter: 'brightness(0) invert(1)' }} />
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/87/NASDAQ_Logo.svg" alt="NASDAQ" className="h-4 opacity-40 hover:opacity-70 transition-opacity" style={{ filter: 'brightness(0) invert(1)' }} />
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/f0/CME_Group_Logo.svg" alt="CME Group" className="h-4 opacity-40 hover:opacity-70 transition-opacity" style={{ filter: 'brightness(0) invert(1)' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
