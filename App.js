
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, X, MessageCircle } from 'lucide-react';

import Header from './components/Header.js';
import WhatsAppButton from './components/WhatsAppButton.js';
import Navigation from './components/Navigation.js';
import HomePage from './pages/HomePage.js';
import InventoryPage from './pages/InventoryPage.js';
import AboutPage from './pages/AboutPage.js';
import ContactPage from './pages/ContactPage.js';
import MediaPage from './pages/MediaPage.js';
import SocialProofPage from './pages/SocialProofPage.js';

const PageTransition = ({ children }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`min-h-screen ${isHome ? 'pt-0' : 'pt-24 pb-32'}`}
    >
      {children}
    </motion.div>
  );
};

const AppContent = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showFloating, setShowFloating] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setShowFloating(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex justify-center selection:bg-[#0A5CFF] selection:text-white">
      <div className="w-full max-w-full md:max-w-md lg:max-w-lg relative bg-white min-h-screen shadow-2xl overflow-hidden">
        <Header onMenuToggle={() => setIsMenuOpen(!isMenuOpen)} />
        
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><HomePage /></PageTransition>} />
            <Route path="/inventory" element={<PageTransition><InventoryPage /></PageTransition>} />
            <Route path="/about" element={<PageTransition><AboutPage /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
            <Route path="/media" element={<PageTransition><MediaPage /></PageTransition>} />
            <Route path="/reviews" element={<PageTransition><SocialProofPage /></PageTransition>} />
          </Routes>
        </AnimatePresence>

        <Navigation />

        <AnimatePresence>
          {showFloating && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              className="fixed bottom-24 right-6 z-[100] flex flex-col gap-3"
            >
              <WhatsAppButton />
              <motion.a
                href="tel:+94701999999"
                whileTap={{ scale: 0.9 }}
                className="bg-[#0A5CFF] text-white p-4 rounded-full shadow-2xl flex items-center justify-center border border-white/20"
              >
                <Phone size={24} />
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-0 z-[200] bg-white p-8 flex flex-col"
            >
              <div className="flex justify-between items-center mb-12">
                <img src="https://i.ibb.co/nNxxKRtz/Solo-So.png" alt="Solo So" className="h-12" />
                <button onClick={() => setIsMenuOpen(false)} className="p-2 bg-slate-100 rounded-full">
                  <X size={24} className="text-slate-900" />
                </button>
              </div>

              <nav className="flex flex-col gap-8 text-3xl font-black text-slate-900 uppercase tracking-tighter">
                <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
                <Link to="/inventory" onClick={() => setIsMenuOpen(false)}>Stock</Link>
                <Link to="/about" onClick={() => setIsMenuOpen(false)}>Our Story</Link>
                <Link to="/reviews" onClick={() => setIsMenuOpen(false)}>Reviews</Link>
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                <div className="h-px bg-slate-100 my-4" />
                <a 
                  href="https://wa.me/94701999999" 
                  target="_blank" 
                  rel="noreferrer"
                  className="bg-[#25D366] text-white px-8 py-4 rounded-2xl text-center shadow-xl flex items-center justify-center gap-2 text-xl"
                >
                  <MessageCircle size={24} fill="currentColor" /> WhatsApp
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
