import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-[#1a2540] bg-[#050810] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 bg-brand-green rounded-sm flex items-center justify-center">
                <span className="text-[#050810] font-bold text-xs font-mono">M</span>
              </div>
              <span className="text-white font-bold text-lg font-mono">MRKT</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Unlock Smarter, Faster Trades with AI-Powered Market Research Platform
            </p>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-white font-bold mb-4 font-mono text-sm">Connect</h4>
            <div className="space-y-2">
              {[
                { name: 'Instagram', url: '#' },
                { name: 'TikTok', url: '#' },
                { name: 'Discord', url: '#' },
                { name: 'LinkedIn', url: '#' },
                { name: 'X / Twitter', url: '#' },
                { name: 'YouTube', url: '#' },
              ].map(link => (
                <a key={link.name} href={link.url} className="block text-gray-500 text-sm hover:text-brand-green transition-colors">
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-bold mb-4 font-mono text-sm">Quick Links</h4>
            <div className="space-y-2">
              {[
                { name: 'Features', href: '#features' },
                { name: 'Affiliates', href: '#' },
                { name: 'Pricing', href: '#pricing' },
              ].map(link => (
                <a key={link.name} href={link.href} className="block text-gray-500 text-sm hover:text-brand-green transition-colors">
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* More features */}
          <div>
            <h4 className="text-white font-bold mb-4 font-mono text-sm">More Features</h4>
            <div className="space-y-2">
              {[
                'Capital flows', 'Crypto price prediction', 'Daily bias',
                'Fundamental backtesting', 'Global markets dashboard',
                'Market direction tracker', 'Price forecasts',
              ].map(f => (
                <a key={f} href="#" className="block text-gray-500 text-sm hover:text-brand-green transition-colors capitalize">
                  {f}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#1a2540] pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-gray-600 text-xs max-w-2xl leading-relaxed">
            Disclaimer: MRKT is a market intelligence and data analytics platform. We are not a brokerage, investment advisor, or financial institution.
            The platform provides AI-powered analysis of market events and economic data for informational purposes only.
            We do not provide financial advice, investment recommendations, or trading signals.
          </p>
          <div className="flex gap-4 shrink-0">
            <a href="#" className="text-gray-500 text-sm hover:text-brand-green transition-colors">Disclaimer</a>
            <a href="#" className="text-gray-500 text-sm hover:text-brand-green transition-colors">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
