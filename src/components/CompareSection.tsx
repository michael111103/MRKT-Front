import React from 'react';
import { Check, X } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const CompareSection: React.FC = () => {
  const { ref, inView } = useInView();

  const rows = [
    { label: 'Context for price moves', signal: false, mrkt: true },
    { label: 'Works across any condition', signal: false, mrkt: true },
    { label: 'Builds your understanding', signal: false, mrkt: true },
    { label: 'Macro-to-price instantly', signal: false, mrkt: true },
    { label: 'No explanation given', signal: true, mrkt: false },
    { label: 'Creates dependency', signal: true, mrkt: false },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[300px] bg-brand-green/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`fade-section ${inView ? 'visible' : ''} text-center mb-16`}>
          <h2 className="text-4xl sm:text-5xl font-bold font-display mb-4">
            <span className="text-white">Signals keep you </span>
            <span className="gradient-text">dependent.</span>
            <br />
            <span className="text-white">MRKT gives you the </span>
            <span className="gradient-text">edge you own.</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Following someone else's trades is not a strategy. Understanding the market is.
          </p>
          <button className="mt-6 bg-brand-green text-[#050810] font-bold px-6 py-2.5 rounded-lg hover:bg-brand-greenDim transition-all text-sm hover:scale-105">
            Stop Following, Start Owning
          </button>
        </div>

        <div className={`fade-section ${inView ? 'visible' : ''} grid grid-cols-1 md:grid-cols-2 gap-6`}>
          {/* Signal services */}
          <div className="card-dark rounded-xl p-6 border border-[#1a2540]">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-red-400" />
              <h3 className="text-white font-bold font-display">Signal Services</h3>
            </div>
            <p className="text-gray-500 text-sm mb-6">No context. No understanding. Just instructions.</p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <X size={16} className="text-red-400 shrink-0" />
                <span className="text-gray-400 text-sm">No explanation, just instructions</span>
              </div>
              <div className="flex items-center gap-3">
                <X size={16} className="text-red-400 shrink-0" />
                <span className="text-gray-400 text-sm">Breaks when conditions shift</span>
              </div>
              <div className="flex items-center gap-3">
                <X size={16} className="text-red-400 shrink-0" />
                <span className="text-gray-400 text-sm">Builds dependency, not skill</span>
              </div>
              <div className="flex items-center gap-3">
                <X size={16} className="text-red-400 shrink-0" />
                <span className="text-gray-400 text-sm">Zero macro context</span>
              </div>
            </div>
          </div>

          {/* MRKT */}
          <div className="card-dark rounded-xl p-6 border border-brand-green/30 glow-green relative">
            <div className="absolute top-3 right-3 bg-brand-green/20 text-brand-green text-xs font-mono px-2 py-0.5 rounded">RECOMMENDED</div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
              <h3 className="text-white font-bold font-display">MRKT</h3>
            </div>
            <p className="text-gray-400 text-sm mb-6">Context. Direction. Yours to keep.</p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Check size={16} className="text-brand-green shrink-0" />
                <span className="text-gray-300 text-sm">Tells you why price is moving</span>
              </div>
              <div className="flex items-center gap-3">
                <Check size={16} className="text-brand-green shrink-0" />
                <span className="text-gray-300 text-sm">Works across any condition</span>
              </div>
              <div className="flex items-center gap-3">
                <Check size={16} className="text-brand-green shrink-0" />
                <span className="text-gray-300 text-sm">You own the understanding</span>
              </div>
              <div className="flex items-center gap-3">
                <Check size={16} className="text-brand-green shrink-0" />
                <span className="text-gray-300 text-sm">Macro to price, instantly</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompareSection;
