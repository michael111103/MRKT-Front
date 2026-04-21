import React from 'react';

const logos = [
  { name: 'Reuters', src: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/Reuters_Logo.svg' },
  { name: 'LSE Group', src: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/LSE_Group_logo.svg' },
  { name: 'NASDAQ', src: 'https://upload.wikimedia.org/wikipedia/commons/8/87/NASDAQ_Logo.svg' },
  { name: 'CME Group', src: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/CME_Group_Logo.svg' },
];

const LogoTicker: React.FC = () => {
  const doubled = [...logos, ...logos, ...logos, ...logos];

  return (
    <div className="py-8 border-t border-b border-[#1a2540]/40 bg-[#050810] overflow-hidden">
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#050810] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#050810] to-transparent z-10 pointer-events-none" />
        <div className="flex items-center logo-ticker-track" style={{ animationDuration: '20s' }}>
          {doubled.map((logo, i) => (
            <div key={i} className="flex items-center justify-center px-10 shrink-0">
              <img
                src={logo.src}
                alt={logo.name}
                className="h-6 opacity-30 hover:opacity-60 transition-opacity"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoTicker;
