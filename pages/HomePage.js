
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight, ShieldCheck, Globe, Clock, MessageCircle } from 'lucide-react';
import { TRUST_STATS } from '../constants.js';

const HERO_IMAGES = [
  "https://i.ibb.co/GfLm2Pv5/Best-Cars8.png",
  "https://i.ibb.co/gM0CFQbX/Best-Cars7.png",
  "https://i.ibb.co/0j5Rb2x7/Best-Cars6.png",
  "https://i.ibb.co/spVbdMxC/Best-Cars5.png",
  "https://i.ibb.co/tw4zzZRf/Best-Cars4.png",
  "https://i.ibb.co/kgFs37Jw/Best-Cars3.png",
  "https://i.ibb.co/gMwFSm5d/Best-Cars2.png",
  "https://i.ibb.co/zhWCY3t3/Best-Cars.png"
];

const HomePage = () => {
  const navigate = useNavigate();
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const handleWhatsApp = () => {
    window.open('https://wa.me/94701999999?text=Hello%20SOLO-SO%20Car%20Sale!%20I%20am%20interested%20in%20inquiring%20about%20a%20vehicle.', '_blank');
  };

  return (
    <div className="space-y-16 pb-32">
      <section className="relative h-screen min-h-[600px] flex flex-col justify-end overflow-hidden bg-slate-900">
        <div className="absolute inset-0">
          <AnimatePresence initial={false}>
            <motion.img 
              key={HERO_IMAGES[bgIndex]}
              src={HERO_IMAGES[bgIndex]} 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.85 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full object-cover"
              alt="Solo So Premium Car"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/50"></div>
        </div>

        <div className="relative z-10 p-8 pb-[96px] space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-1"
          >
            <span className="bg-[#0A5CFF] text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl inline-block mb-1">
              Direct Import Specialist
            </span>
            <h1 className="text-5xl font-black text-white tracking-tighter uppercase leading-[0.85]">
              Redefining <br />
              <span className="text-[#0A5CFF]">Trust.</span>
            </h1>
            <p className="text-slate-900 font-black text-sm max-w-xs mt-2">
              Directly sourcing grade 4.5+ luxury vehicles from Japan, UK & Europe.
            </p>
          </motion.div>

          <motion.div className="flex flex-col gap-[6px]">
            <button 
              onClick={() => navigate('/inventory')}
              className="w-full bg-[#0A5CFF] text-white py-4 rounded-2xl font-black text-sm uppercase shadow-2xl flex items-center justify-center gap-2"
            >
              Explore Inventory <ArrowUpRight size={18} />
            </button>
            <button 
              onClick={handleWhatsApp}
              className="w-full bg-[#25D366] text-white py-4 rounded-2xl font-black text-sm uppercase shadow-lg flex items-center justify-center gap-2"
            >
              <MessageCircle size={18} fill="currentColor" /> WhatsApp Us
            </button>
          </motion.div>
        </div>
      </section>

      <section className="px-8 grid grid-cols-2 gap-4">
        {TRUST_STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            className="bg-white p-6 rounded-3xl border border-slate-50 shadow-sm text-center flex flex-col items-center"
          >
            <span className="text-3xl mb-2">{stat.icon}</span>
            <div className="text-2xl font-black text-slate-900 tracking-tighter">
              {stat.value}{stat.suffix || '+'}
            </div>
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</span>
          </motion.div>
        ))}
      </section>
    </div>
  );
};

export default HomePage;
