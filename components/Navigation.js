
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Car, MessageCircle, Info } from 'lucide-react';
import { motion } from 'framer-motion';

const Navigation = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-[100] bg-white/80 backdrop-blur-xl border-t border-slate-100 px-6 pt-4 pb-8 flex justify-between items-center max-w-full md:max-w-md lg:max-w-lg mx-auto shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
      <NavItem to="/" icon={React.createElement(Home, { size: 22 })} label="Home" />
      <NavItem to="/inventory" icon={React.createElement(Car, { size: 22 })} label="Stock" />
      <NavItem to="/about" icon={React.createElement(Info, { size: 22 })} label="Story" />
      <NavItem to="/contact" icon={React.createElement(MessageCircle, { size: 22 })} label="Inquiry" />
    </nav>
  );
};

const NavItem = ({ to, icon, label }) => (
  <NavLink
    to={to}
    className={({ isActive }) => 
      `flex flex-col items-center gap-1.5 transition-all duration-300 relative px-4 ${isActive ? 'text-[#0A5CFF]' : 'text-slate-400'}`
    }
  >
    {({ isActive }) => (
      <>
        {icon}
        <span className="text-[10px] font-black uppercase tracking-[0.1em]">{label}</span>
      </>
    )}
  </NavLink>
);

export default Navigation;
