import React from 'react';
import { useInView } from '../hooks/useInView';

const TransformSection: React.FC = () => {
  const { ref, inView } = useInView();

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-green/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`fade-section ${inView ? 'visible' : ''} text-center mb-16`}>
          <h2 className="text-4xl sm:text-5xl font-bold font-display mb-4">
            <span className="text-white">Markets Do Not Move on </span>
            <span className="gradient-text">News.</span>
            <br />
            <span className="text-white">They Move on </span>
            <span className="gradient-text">Interpretation</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Everyone sees the same news. The edge is understanding what it means before the market does.
          </p>
          <button className="mt-6 bg-brand-green text-[#050810] font-bold px-6 py-2.5 rounded-lg hover:bg-brand-greenDim transition-all duration-200 text-sm hover:scale-105">
            Get Started Now
          </button>
        </div>

        {/* Before / After */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Before */}
          <div className={`fade-section ${inView ? 'visible' : ''} transition-delay-200`}>
            <div className="relative card-dark rounded-xl overflow-hidden border border-[#1a2540]">
              <div className="absolute top-3 left-3 bg-[#1a2540] text-gray-400 text-xs font-mono px-2 py-1 rounded z-10">
                Before
              </div>
              <div className="p-6 pt-12">
                <div className="space-y-2">
                  {[
                    { time: '08:30', event: 'US CPI Data Release', impact: 'HIGH', color: 'red' },
                    { time: '10:00', event: 'Fed Chair Speech', impact: 'HIGH', color: 'red' },
                    { time: '14:00', event: 'FOMC Meeting Minutes', impact: 'MED', color: 'yellow' },
                    { time: '15:30', event: 'Weekly Jobless Claims', impact: 'MED', color: 'yellow' },
                    { time: '18:00', event: 'Treasury Bond Auction', impact: 'LOW', color: 'green' },
                  ].map((row, i) => (
                    <div key={i} className="flex items-center gap-3 py-2 border-b border-[#1a2540]/40">
                      <span className="text-gray-600 font-mono text-xs w-12">{row.time}</span>
                      <span className="text-gray-400 text-xs flex-1">{row.event}</span>
                      <span className={`text-xs font-mono px-2 py-0.5 rounded ${
                        row.color === 'red' ? 'bg-red-500/20 text-red-400' :
                        row.color === 'yellow' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-green-500/20 text-green-400'
                      }`}>{row.impact}</span>
                    </div>
                  ))}
                </div>
                <p className="text-gray-600 text-xs mt-4 text-center italic">Raw data — no context, no direction</p>
              </div>
            </div>
          </div>

          {/* After */}
          <div className={`fade-section ${inView ? 'visible' : ''} transition-delay-400`}>
            <div className="relative card-dark rounded-xl overflow-hidden border border-brand-green/30 glow-green">
              <div className="absolute top-3 left-3 bg-brand-green/20 text-brand-green text-xs font-mono px-2 py-1 rounded z-10">
                After — MRKT
              </div>
              <div className="p-6 pt-12">
                {/* AI badge */}
                <div className="flex items-center gap-2 mb-4 bg-brand-green/10 border border-brand-green/20 rounded-lg p-3">
                  <div className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
                  <span className="text-brand-green text-xs font-bold font-mono">MARKET OPTIMISM DETECTED — Buy Signal Identified</span>
                </div>

                <div className="border border-[#1a2540] rounded-lg overflow-hidden mb-4">
                  <div className="flex items-center gap-2 px-3 py-2 bg-red-500/10 border-b border-[#1a2540]">
                    <span className="bg-red-500/20 text-red-400 text-[10px] font-mono px-2 py-0.5 rounded font-bold">HIGH IMPACT</span>
                    <span className="text-gray-500 text-xs">Just now</span>
                  </div>
                  <div className="p-3">
                    <p className="text-white text-xs font-bold font-mono mb-2">TRUMP: THIS WILL BE A DOUBLE SIDED CEASEFIRE</p>
                    <p className="text-gray-400 text-xs mb-3">
                      Ceasefire framework announced — significant geopolitical de-escalation. Risk assets to rally.
                    </p>
                    <div className="flex gap-2">
                      <span className="text-brand-green text-xs font-mono font-bold border border-brand-green/30 bg-brand-green/10 px-2 py-0.5 rounded">S&amp;P 500 ↑ +0.91%</span>
                      <span className="text-red-400 text-xs font-mono font-bold border border-red-400/30 bg-red-400/10 px-2 py-0.5 rounded">Oil ↓ -6.93%</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex-1 bg-brand-green/10 border border-brand-green/20 rounded-lg p-3 text-center">
                    <div className="text-gray-500 text-[10px] font-mono mb-1">SWING</div>
                    <div className="text-brand-green text-sm font-bold">Bullish ↑</div>
                  </div>
                  <div className="flex-1 bg-brand-green/10 border border-brand-green/20 rounded-lg p-3 text-center">
                    <div className="text-gray-500 text-[10px] font-mono mb-1">DAY</div>
                    <div className="text-brand-green text-sm font-bold">Bullish ↑</div>
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

export default TransformSection;
