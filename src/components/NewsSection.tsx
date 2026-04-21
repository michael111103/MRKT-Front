import React, { useEffect, useRef } from 'react';
import { newsItems } from '../data/marketData';
import { useInView } from '../hooks/useInView';

const NewsCard: React.FC<{ item: typeof newsItems[0] }> = ({ item }) => (
  <div className="news-card border border-[#1a2540]/60 rounded-lg p-4 mb-3 transition-all duration-200 cursor-pointer bg-[#0a0f1e]/60 backdrop-blur-sm mx-1">
    <div className="flex items-center gap-2 mb-2">
      <span className="bg-red-500/20 text-red-400 text-[10px] font-mono px-2 py-0.5 rounded font-bold tracking-wider">
        {item.impact} IMPACT
      </span>
      <span className="text-gray-600 text-xs font-mono">{item.time}</span>
      <span className="text-gray-700 text-xs">●{item.ago}</span>
    </div>
    <h3 className="text-white text-sm font-bold mb-2 leading-snug font-mono">{item.headline}</h3>
    <p className="text-gray-400 text-xs mb-3 leading-relaxed">{item.analysis}</p>
    <div className="flex gap-2">
      {item.signals.map((s, i) => (
        <span key={i} className={`text-xs font-mono font-bold px-2 py-0.5 rounded border ${
          s.up
            ? 'text-brand-green border-brand-green/30 bg-brand-green/10'
            : 'text-red-400 border-red-400/30 bg-red-400/10'
        }`}>
          {s.symbol}{s.dir}
        </span>
      ))}
    </div>
  </div>
);

const NewsSection: React.FC = () => {
  const { ref, inView } = useInView();

  return (
    <section className="py-24 relative overflow-hidden" id="features">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`fade-section ${inView ? 'visible' : ''} text-center mb-16`}>
          <h2 className="text-4xl sm:text-5xl font-bold font-display mb-4">
            <span className="text-white">The market doesn't lack </span>
            <span className="gradient-text">information.</span>
            <br />
            <span className="text-white">It lacks </span>
            <span className="gradient-text">clarity</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Every trader sees the same data. News hits. Indicators move. Charts react.
            But knowing what it means and how to act is where most traders struggle.
          </p>
          <button className="mt-6 text-brand-green border border-brand-green/40 px-6 py-2.5 rounded-lg hover:bg-brand-green/10 transition-all duration-200 text-sm font-semibold">
            Show Me The Solution →
          </button>
        </div>

        {/* Dual scrolling news columns */}
        <div className="flex gap-4 overflow-hidden" style={{ height: '500px' }}>
          {/* Col 1: scroll up */}
          <div className="flex-1 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-b from-[#050810] via-transparent to-[#050810] z-10 pointer-events-none" />
            <div className="animate-news-scroll" style={{ animationDuration: '35s' }}>
              {[...newsItems, ...newsItems].map((item, i) => (
                <NewsCard key={i} item={item} />
              ))}
            </div>
          </div>

          {/* Col 2: scroll down */}
          <div className="flex-1 overflow-hidden relative hidden sm:block">
            <div className="absolute inset-0 bg-gradient-to-b from-[#050810] via-transparent to-[#050810] z-10 pointer-events-none" />
            <div className="animate-news-scroll-rev" style={{ animationDuration: '40s' }}>
              {[...newsItems.slice(3), ...newsItems, ...newsItems.slice(0, 3)].map((item, i) => (
                <NewsCard key={i} item={item} />
              ))}
            </div>
          </div>

          {/* Col 3: scroll up */}
          <div className="flex-1 overflow-hidden relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-b from-[#050810] via-transparent to-[#050810] z-10 pointer-events-none" />
            <div className="animate-news-scroll" style={{ animationDuration: '45s' }}>
              {[...newsItems.slice(2), ...newsItems, ...newsItems.slice(0, 2)].map((item, i) => (
                <NewsCard key={i} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
