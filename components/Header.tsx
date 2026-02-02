
import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  onMenuToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuToggle }) => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerBg = !isHome || scrolled ? 'bg-white/90 backdrop-blur-xl border-b border-slate-100 shadow-sm py-2' : 'bg-transparent py-4';
  const logoHeight = !isHome || scrolled ? 'h-10' : 'h-12';

  return (
    <header className={`fixed top-0 left-0 right-0 z-[150] transition-all duration-300 max-w-full md:max-w-md lg:max-w-lg mx-auto ${headerBg}`}>
      <div className="px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <img 
            src="https://i.ibb.co/nNxxKRtz/Solo-So.png" 
            alt="Solo So" 
            className={`transition-all duration-300 object-contain ${logoHeight}`} 
            style={{ filter: !isHome || scrolled ? 'none' : 'brightness(0) invert(1)' }}
          />
        </Link>
        
        <div className="flex items-center gap-2">
          <button 
            onClick={onMenuToggle}
            className={`p-2.5 rounded-xl transition-all shadow-sm active:scale-90 ${!isHome || scrolled ? 'bg-slate-900 text-white' : 'bg-[#0A5CFF] text-white'}`}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
