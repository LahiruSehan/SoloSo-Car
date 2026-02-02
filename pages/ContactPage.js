
import React from 'react';
import { MapPin, Phone, Mail, MessageCircle, Clock } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="px-6 space-y-12">
      <section className="pt-4">
        <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase mb-2">Connect</h1>
        <p className="text-slate-400 text-sm font-medium">We're available 24/7 for your inquiries.</p>
      </section>

      <div className="rounded-[40px] overflow-hidden aspect-square relative shadow-xl border border-slate-100 bg-slate-100">
        <img 
          src="https://picsum.photos/seed/map/800/800" 
          className="w-full h-full object-cover grayscale opacity-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white p-4 rounded-3xl shadow-2xl flex items-center gap-3">
            <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white">
              <MapPin size={24} />
            </div>
            <div>
              <p className="font-bold text-slate-900 text-xs">SOLO-SO SHOWROOM</p>
              <p className="text-slate-400 text-[10px] uppercase font-bold tracking-widest">Marawila, Sri Lanka</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-4">
        <ContactCard 
          icon={React.createElement(MapPin, { className: "text-[#0A5CFF]" })} 
          label="Location" 
          value="Mudukatuwa, Marawila, Sri Lanka" 
        />
        <ContactCard 
          icon={React.createElement(Phone, { className: "text-[#0A5CFF]" })} 
          label="Direct Call" 
          value="0701 999 999" 
        />
        <ContactCard 
          icon={React.createElement(Mail, { className: "text-[#0A5CFF]" })} 
          label="Email Address" 
          value="info@solo-so.com" 
        />
        <ContactCard 
          icon={React.createElement(Clock, { className: "text-[#0A5CFF]" })} 
          label="Operating Hours" 
          value="8:00 AM - 6:00 PM (Daily)" 
        />
      </div>

      <div className="bg-[#EAF1FF] p-8 rounded-[40px] text-center">
        <h3 className="text-xl font-black text-[#0A5CFF] uppercase tracking-tighter mb-4">Visit Us Today</h3>
        <p className="text-slate-600 text-sm mb-6">Experience the premium vehicles firsthand in our Marawila showroom.</p>
        <button className="w-full bg-[#0A5CFF] text-white py-4 rounded-2xl font-black uppercase text-sm shadow-lg">
          Get Directions
        </button>
      </div>
    </div>
  );
};

const ContactCard = ({ icon, label, value }) => (
  <div className="bg-slate-50 p-6 rounded-3xl flex items-center gap-6 border border-slate-100">
    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
      {icon}
    </div>
    <div>
      <p className="text-slate-400 text-[10px] uppercase font-bold tracking-widest mb-1">{label}</p>
      <p className="text-slate-900 font-bold">{value}</p>
    </div>
  </div>
);

export default ContactPage;
