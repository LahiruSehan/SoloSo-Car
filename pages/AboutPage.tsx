
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Award, Globe, ShieldCheck } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative h-[40vh] overflow-hidden -mt-16">
        <img 
          src="https://picsum.photos/seed/showroom/800/600" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0A5CFF]/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-6">
          <motion.h1 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-4xl font-black tracking-tighter uppercase text-center"
          >
            Since 2014 <br />
            The Standard of <br />
            Trust in Marawila
          </motion.h1>
        </div>
      </section>

      {/* Story */}
      <section className="px-6 space-y-6">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           className="bg-[#EAF1FF] p-8 rounded-[40px]"
        >
          <h2 className="text-2xl font-black text-[#0A5CFF] tracking-tighter uppercase mb-4">OUR STORY</h2>
          <p className="text-slate-700 leading-loose font-medium">
            Solo-So Car Sale is a verified vehicle import company based in Marawila, Sri Lanka. 
            For over a decade, we have redefined how luxury and utility vehicles reach the Sri Lankan roads.
            Directly importing from Japan, Thailand, UK and Europe.
          </p>
        </motion.div>

        <div className="grid gap-4">
          <TimelineItem year="2014" title="Founded" desc="Started as a small import house in Marawila." />
          <TimelineItem year="2018" title="Market Leader" desc="Became the #1 V8 importer in the district." />
          <TimelineItem year="2022" title="Expansion" desc="Opened digital-first showroom for FB fans." />
          <TimelineItem year="Today" title="Your Partner" desc="Continuing the legacy of transparency." />
        </div>
      </section>

      {/* Certifications */}
      <section className="px-6">
        <div className="bg-slate-900 rounded-[40px] p-8 text-center text-white">
          <Award className="mx-auto mb-4 text-[#0A5CFF]" size={48} />
          <h3 className="text-xl font-bold mb-2">Government Verified</h3>
          <p className="text-white/60 text-sm">We handle all SL Customs and Excise documentation legally and transparently.</p>
        </div>
      </section>
    </div>
  );
};

const TimelineItem = ({ year, title, desc }: { year: string; title: string; desc: string }) => (
  <div className="flex gap-6 border-l-2 border-slate-100 pl-6 pb-8 relative">
    <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#0A5CFF] rounded-full border-4 border-white shadow-sm"></div>
    <div>
      <span className="text-[#0A5CFF] font-black text-xs uppercase tracking-widest">{year}</span>
      <h4 className="font-bold text-slate-900 mt-1">{title}</h4>
      <p className="text-slate-500 text-sm mt-1">{desc}</p>
    </div>
  </div>
);

export default AboutPage;
