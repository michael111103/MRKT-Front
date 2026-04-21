import React, { useEffect, useState } from 'react';
import { tickerItems } from '../data/marketData';

const Ticker: React.FC = () => {
  const [items, setItems] = useState(tickerItems);

  // Simulate live price updates
  useEffect(() => {
    const interval = setInterval(() => {
      setItems(prev => prev.map(item => {
        const base = parseFloat(item.price.replace(/[$,¥]/g, ''));
        const change = (Math.random() - 0.49) * base * 0.001;
        const newBase = base + change;
        const up = change >= 0;
        const pct = ((Math.abs(change) / base) * 100).toFixed(2);
        let price = item.price.startsWith('¥')
          ? `¥${newBase.toFixed(2)}`
          : item.price.startsWith('$') && newBase > 100
            ? `$${newBase.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
            : `$${newBase.toFixed(4)}`;
        return { ...item, price, up, change: `${up ? '+' : '-'}${pct}%` };
      }));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const doubled = [...items, ...items];

  return (
    <div className="border-t border-b border-[#1a2540]/60 bg-[#0a0f1e]/80 backdrop-blur-sm overflow-hidden py-2">
      <div className="flex ticker-wrapper">
        <div className="flex items-center gap-8 animate-ticker whitespace-nowrap ticker-track" style={{ animationDuration: '25s' }}>
          {doubled.map((item, i) => (
            <div key={i} className="flex items-center gap-2 px-3">
              <span className="text-gray-500 text-xs font-mono">{item.symbol}</span>
              <span className="text-white text-xs font-mono font-bold transition-all duration-500">{item.price}</span>
              <span className={`text-xs font-mono transition-colors duration-500 ${item.up ? 'text-brand-green' : 'text-red-400'}`}>
                {item.change}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ticker;
