import React from 'react';
import { useInView } from '../hooks/useInView';
import { Zap, TrendingUp, Globe, BarChart2, Cpu, Clock } from 'lucide-react';

const featureCards = [
  {
    icon: <Zap size={20} />,
    title: 'Instant Trade Direction',
    desc: 'Get bullish or bearish bias the moment news breaks. No analysis needed.',
    color: 'brand-green',
  },
  {
    icon: <TrendingUp size={20} />,
    title: 'Real-Time Market Sentiment',
    desc: 'Track live market mood across all major asset classes simultaneously.',
    color: 'blue',
  },
  {
    icon: <Globe size={20} />,
    title: 'Global Macro Coverage',
    desc: 'Forex, futures, crypto, and equities — all in one unified view.',
    color: 'purple',
  },
  {
    icon: <BarChart2 size={20} />,
    title: 'AI Economic Calendar',
    desc: 'Every data release pre-analyzed with expected vs actual impact.',
    color: 'orange',
  },
  {
    icon: <Cpu size={20} />,
    title: 'AI Signal Engine',
    desc: 'Proprietary AI trained on millions of market events and price reactions.',
    color: 'pink',
  },
  {
    icon: <Clock size={20} />,
    title: 'Before The Move',
    desc: 'Get context and direction before the market fully prices in the news.',
    color: 'cyan',
  },
];

const colorMap: Record<string, string> = {
  'brand-green': 'text-brand-green border-brand-green/20 bg-brand-green/10',
  'blue': 'text-blue-400 border-blue-400/20 bg-blue-400/10',
  'purple': 'text-purple-400 border-purple-400/20 bg-purple-400/10',
  'orange': 'text-orange-400 border-orange-400/20 bg-orange-400/10',
  'pink': 'text-pink-400 border-pink-400/20 bg-pink-400/10',
  'cyan': 'text-cyan-400 border-cyan-400/20 bg-cyan-400/10',
};

const KnowWhatToDo: React.FC = () => {
  const { ref, inView } = useInView();

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-green/4 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`fade-section ${inView ? 'visible' : ''} text-center mb-16`}>
          <h2 className="text-4xl sm:text-5xl font-bold font-display mb-4">
            <span className="text-white">Know What To Do</span>
            <br />
            <span className="gradient-text">The Moment It Matters</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Most tools give you information. MRKT gives you direction.
            No analysis loop, no hesitation, just a clear plan.
          </p>
          <button className="mt-6 text-brand-green border border-brand-green/40 px-6 py-2.5 rounded-lg hover:bg-brand-green/10 transition-all text-sm font-semibold">
            Get Instant Clarity →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featureCards.map((card, i) => (
            <div
              key={i}
              className={`fade-section ${inView ? 'visible' : ''} card-dark rounded-xl p-6 border border-[#1a2540] hover:border-brand-green/20 hover:-translate-y-1 transition-all duration-300 group`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg border mb-4 ${colorMap[card.color]}`}>
                {card.icon}
              </div>
              <h3 className="text-white font-bold mb-2 group-hover:text-brand-green transition-colors">{card.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KnowWhatToDo;
