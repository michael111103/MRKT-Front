import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#050810]/95 backdrop-blur-xl border-b border-[#1a2540]/60' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <a href="/" className="flex items-center gap-2">
              <div className="w-7 h-7 bg-brand-green rounded-sm flex items-center justify-center">
                <span className="text-[#050810] font-bold text-xs font-mono">M</span>
              </div>
              <span className="text-white font-bold text-lg font-mono tracking-wide">MRKT</span>
            </a>
            <div className="hidden md:flex items-center gap-6">
              <a href="#features" className="text-gray-400 hover:text-white text-sm transition-colors">Features</a>
              <a href="#pricing" className="text-gray-400 hover:text-white text-sm transition-colors">Pricing</a>
              <a href="#faq" className="text-gray-400 hover:text-white text-sm transition-colors">FAQ</a>
              <span className="text-[#1a2540] text-sm">Resources</span>
            </div>
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button className="text-gray-400 hover:text-white text-sm transition-colors">Sign In</button>
            <button className="bg-brand-green text-[#050810] font-semibold text-sm px-4 py-2 rounded-md hover:bg-brand-greenDim transition-colors">
              Unlock MRKT
            </button>
          </div>

          {/* Mobile toggle */}
          <button className="md:hidden text-gray-400" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#050810]/98 border-b border-[#1a2540] px-4 py-4 flex flex-col gap-4">
          <a href="#features" className="text-gray-300 text-sm">Features</a>
          <a href="#pricing" className="text-gray-300 text-sm">Pricing</a>
          <a href="#faq" className="text-gray-300 text-sm">FAQ</a>
          <button className="text-gray-400 text-sm text-left">Sign In</button>
          <button className="bg-brand-green text-[#050810] font-semibold text-sm px-4 py-2 rounded-md w-full">
            Unlock MRKT
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
