import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const PricingSection: React.FC = () => {
  const [annual, setAnnual] = useState(true);
  const { ref, inView } = useInView();

  const features = [
    'Personalized AI-Powered Market Analysis',
    'Real-Time Market Sentiment',
    'Live Market Headlines & News',
    'AI-Enhanced Economic Calendar',
    'Global Market Dashboards',
    'Advanced Stock Research Tools',
  ];

  return (
    <section className="py-24 relative overflow-hidden" id="pricing">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-brand-green/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`fade-section ${inView ? 'visible' : ''} text-center mb-12`}>
          <h2 className="text-4xl sm:text-5xl font-bold font-display mb-4">
            <span className="text-white">Start Trading With</span>
            <br />
            <span className="gradient-text">Market Clarity Today</span>
          </h2>
          <p className="text-gray-400 text-lg">See what you've been missing within minutes</p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <button
              onClick={() => setAnnual(false)}
              className={`text-sm transition-colors ${!annual ? 'text-white font-semibold' : 'text-gray-500'}`}
            >Monthly</button>
            <button
              onClick={() => setAnnual(!annual)}
              className={`relative w-12 h-6 rounded-full transition-colors ${annual ? 'bg-brand-green' : 'bg-[#1a2540]'}`}
            >
              <div className={`absolute top-1 w-4 h-4 bg-[#050810] rounded-full transition-transform ${annual ? 'translate-x-7' : 'translate-x-1'}`} />
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`text-sm transition-colors ${annual ? 'text-white font-semibold' : 'text-gray-500'}`}
            >Annual</button>
            {annual && (
              <span className="bg-brand-green/20 text-brand-green text-xs px-2 py-0.5 rounded font-mono">Save 17%</span>
            )}
          </div>
        </div>

        {/* Pricing card */}
        <div className={`fade-section ${inView ? 'visible' : ''} max-w-md mx-auto`}>
          <div className="card-dark rounded-2xl border border-brand-green/30 glow-green p-8">
            <div className="text-gray-400 text-sm font-mono mb-1">Premium Plan</div>
            <div className="flex items-end gap-2 mb-2">
              <span className="text-5xl font-bold text-white font-display">
                ${annual ? '41.67' : '49.99'}
              </span>
              <span className="text-gray-400 mb-2">/month</span>
            </div>
            {annual && (
              <p className="text-gray-500 text-sm mb-6">Billed annually ($499.99/year)</p>
            )}
            {!annual && (
              <p className="text-gray-500 text-sm mb-6">Billed monthly</p>
            )}

            <div className="space-y-3 mb-8">
              {features.map((f, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-green/20 border border-brand-green/40 flex items-center justify-center shrink-0">
                    <Check size={11} className="text-brand-green" />
                  </div>
                  <span className="text-gray-300 text-sm">{f}</span>
                </div>
              ))}
            </div>

            <button className="w-full bg-brand-green text-[#050810] font-bold py-3.5 rounded-xl hover:bg-brand-greenDim transition-all duration-200 hover:shadow-[0_0_30px_rgba(0,255,136,0.3)] text-base">
              Access MRKT now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
