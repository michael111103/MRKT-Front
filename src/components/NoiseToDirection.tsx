import React, { useEffect, useState } from 'react';
import { useInView } from '../hooks/useInView';

const features = [
  {
    title: 'All headlines in one sentence',
    desc: 'Complex news distilled into a single, actionable statement. No reading between the lines.',
    icon: '📰',
    badge: null,
  },
  {
    title: 'AI-powered market impact',
    desc: 'Instantly understand which assets are affected and in which direction.',
    icon: '🤖',
    badge: 'MARKET OPTIMISM DETECTED',
  },
  {
    title: 'Price movement context',
    desc: 'See exactly how much each instrument moved and why — before most traders react.',
    icon: '📊',
    badge: null,
  },
];

const NoiseToDirection: React.FC = () => {
  const { ref, inView } = useInView();
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-brand-green/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`fade-section ${inView ? 'visible' : ''} text-center mb-16`}>
          <h2 className="text-4xl sm:text-5xl font-bold font-display mb-4">
            <span className="text-white">MRKT turns </span>
            <span className="gradient-text">noise</span>
            <span className="text-white"> into </span>
            <span className="gradient-text">direction</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            No more hesitating, second-guessing, or watching opportunities pass.
            You don't see more. You see what matters.
          </p>
          <button className="mt-6 bg-brand-green text-[#050810] font-bold px-6 py-2.5 rounded-lg hover:bg-brand-greenDim transition-all text-sm hover:scale-105">
            Get Started Today
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Feature list */}
          <div className="space-y-4">
            {features.map((f, i) => (
              <div
                key={i}
                onClick={() => setActiveFeature(i)}
                className={`fade-section ${inView ? 'visible' : ''} p-5 rounded-xl border cursor-pointer transition-all duration-300 ${
                  activeFeature === i
                    ? 'border-brand-green/40 bg-brand-green/5 glow-green'
                    : 'border-[#1a2540] bg-[#0a0f1e]/60 hover:border-[#2a3560]'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <span className="text-2xl">{f.icon}</span>
                  <div>
                    <h3 className={`font-bold mb-1 transition-colors ${activeFeature === i ? 'text-white' : 'text-gray-300'}`}>
                      {f.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </div>
                {activeFeature === i && (
                  <div className="mt-3 h-0.5 bg-brand-green/30 rounded-full">
                    <div className="h-full bg-brand-green rounded-full animate-[progress_3s_linear_forwards]" style={{ animation: 'width 3s linear forwards', width: '100%' }} />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Live news card demo */}
          <div className={`fade-section ${inView ? 'visible' : ''}`} style={{ transitionDelay: '300ms' }}>
            <div className="card-dark rounded-xl border border-[#1a2540] overflow-hidden">
              {/* Window chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1a2540] bg-[#0a0f1e]">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
                <span className="text-gray-600 text-xs font-mono ml-2">app.mrktedge.ai/home</span>
              </div>

              <div className="p-5">
                {/* AI badge */}
                <div className="flex items-center gap-2 mb-4 bg-brand-green/10 border border-brand-green/20 rounded-lg p-3">
                  <div className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
                  <span className="text-brand-green text-xs font-bold font-mono">MARKET OPTIMISM DETECTED</span>
                  <span className="text-gray-400 text-xs ml-auto">Buy signal identified</span>
                </div>

                {/* Main news card */}
                <div className="border border-[#1a2540] rounded-lg overflow-hidden">
                  <div className="bg-red-500/10 border-b border-[#1a2540] px-3 py-2 flex items-center gap-2">
                    <span className="bg-red-500/20 text-red-400 text-[10px] font-mono px-2 py-0.5 rounded font-bold">HIGH IMPACT</span>
                    <span className="text-gray-500 text-xs">Just now</span>
                  </div>
                  <div className="p-4">
                    <p className="text-white text-xs font-bold font-mono mb-2 leading-snug">
                      TRUMP: THIS WILL BE A DOUBLE SIDED CEASEFIRE
                    </p>
                    <p className="text-gray-400 text-xs mb-3 leading-relaxed">
                      Trump announces ceasefire framework, signaling potential end to major conflict
                      with significant geopolitical de-escalation implications
                    </p>
                    <div className="flex gap-2">
                      <span className="text-brand-green text-xs font-mono border border-brand-green/30 bg-brand-green/10 px-2 py-0.5 rounded font-bold">
                        S&amp;P 500 ↑ +0.91%
                      </span>
                      <span className="text-red-400 text-xs font-mono border border-red-400/30 bg-red-400/10 px-2 py-0.5 rounded font-bold">
                        Oil ↓ -6.93%
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bias indicators */}
                <div className="flex gap-3 mt-4">
                  <div className="flex-1 bg-brand-green/10 border border-brand-green/20 rounded-lg p-3 text-center">
                    <div className="text-gray-500 text-[10px] font-mono mb-1">SWING TRADING</div>
                    <div className="text-brand-green text-sm font-bold">Slightly Bullish ↑</div>
                  </div>
                  <div className="flex-1 bg-brand-green/10 border border-brand-green/20 rounded-lg p-3 text-center">
                    <div className="text-gray-500 text-[10px] font-mono mb-1">DAY TRADING</div>
                    <div className="text-brand-green text-sm font-bold">Slightly Bullish ↑</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NoiseToDirection;
