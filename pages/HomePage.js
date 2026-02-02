
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight, ShieldCheck, Globe, Clock, MessageCircle } from 'lucide-react';
import { TRUST_STATS } from '../constants';

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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col gap-[6px]"
          >
            <button 
              onClick={() => navigate('/inventory')}
              className="w-full bg-[#0A5CFF] text-white py-4 rounded-2xl font-black text-sm uppercase shadow-2xl flex items-center justify-center gap-2 active:scale-95 transition-transform"
            >
              Explore Inventory <ArrowUpRight size={18} />
            </button>
            <button 
              onClick={handleWhatsApp}
              className="w-full bg-[#25D366] text-white py-4 rounded-2xl font-black text-sm uppercase shadow-lg flex items-center justify-center gap-2 active:scale-95 transition-transform border-none"
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
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-6 rounded-3xl border border-slate-50 shadow-[0_20px_50px_rgba(0,0,0,0.04)] text-center flex flex-col items-center"
          >
            <span className="text-3xl mb-2">{stat.icon}</span>
            <div className="text-2xl font-black text-slate-900 tracking-tighter">
              {stat.value}{stat.suffix || '+'}
            </div>
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</span>
          </motion.div>
        ))}
      </section>

      <section className="px-8 space-y-12">
        <div className="space-y-2">
          <h2 className="text-3xl font-black text-slate-900 tracking-tighter uppercase leading-none">
            Why <span className="text-[#0A5CFF]">Solo-So?</span>
          </h2>
          <p className="text-slate-400 text-sm font-medium">Over 12 years of importing excellence.</p>
        </div>

        <div className="space-y-6">
          <FeatureItem 
            icon={React.createElement(Globe, { className: "text-[#0A5CFF]" })} 
            title="Global Sourcing" 
            desc="Access to exclusive auction houses in Tokyo, London, and Berlin." 
          />
          <FeatureItem 
            icon={React.createElement(ShieldCheck, { className: "text-[#0A5CFF]" })} 
            title="Total Transparency" 
            desc="Verified auction sheets and original documentation shared before bidding." 
          />
          <FeatureItem 
            icon={React.createElement(Clock, { className: "text-[#0A5CFF]" })} 
            title="Rapid Clearing" 
            desc="Expert logistics ensuring doorstep delivery within 21 days of arrival." 
          />
        </div>
      </section>

      <section className="px-4">
        <div className="bg-[#0A5CFF] p-10 rounded-[40px] text-white space-y-6 shadow-2xl shadow-blue-500/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
          <h2 className="text-3xl font-black uppercase tracking-tighter leading-tight relative z-10">
            Ready to <br /> Import?
          </h2>
          <p className="text-white/60 text-sm font-medium leading-relaxed relative z-10">
            Join 1,200+ satisfied owners. Start your direct import journey today with a free consultation.
          </p>
          <button 
            onClick={() => navigate('/contact')}
            className="bg-white text-[#0A5CFF] px-8 py-4 rounded-2xl font-black uppercase text-xs shadow-xl relative z-10 active:scale-95 transition-transform"
          >
            Contact a Specialist
          </button>
        </div>
      </section>

      <footer className="px-8 py-16 border-t border-slate-50 flex flex-col items-center gap-6">
        <img src="https://i.ibb.co/nNxxKRtz/Solo-So.png" alt="Solo So" className="h-12" />
        <p className="text-slate-300 text-[10px] font-black uppercase tracking-widest text-center">
          © 2024 Solo-So Car Sale Pvt Ltd. <br /> Marawila, Sri Lanka.
        </p>
      </footer>
    </div>
  );
};

const FeatureItem = ({ icon, title, desc }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="flex gap-6 items-start"
  >
    <div className="w-14 h-14 bg-[#EAF1FF] rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
      {icon}
    </div>
    <div>
      <h4 className="font-black text-slate-900 uppercase tracking-tight">{title}</h4>
      <p className="text-slate-500 text-sm mt-1 leading-relaxed">{desc}</p>
    </div>
  </motion.div>
);

export default HomePage;
