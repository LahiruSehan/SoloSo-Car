
import React from 'react';
import { motion } from 'framer-motion';
import { Car } from '../types';
import { Share2, ArrowRight } from 'lucide-react';

interface CarCardProps {
  car: Car;
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  return (
    <motion.div
      whileTap={{ scale: 0.98 }}
      className="bg-white rounded-[32px] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.05)] border border-slate-100 mb-6 group"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img 
          src={car.image} 
          alt={car.model} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <span className={`px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest ${car.condition === 'Brand New' ? 'bg-[#0A5CFF] text-white' : 'bg-white/90 backdrop-blur-md text-slate-900'}`}>
            {car.condition}
          </span>
        </div>
        {car.status === 'Sold' && (
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center">
            <span className="bg-white text-slate-900 px-6 py-2 rounded-xl text-xs font-black uppercase tracking-widest shadow-2xl">
              Reserved
            </span>
          </div>
        )}
      </div>
      
      <div className="p-6 space-y-4">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <h3 className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] leading-none">{car.brand} {car.year}</h3>
            <h2 className="text-slate-900 font-black text-xl leading-none tracking-tighter uppercase">{car.model}</h2>
          </div>
          <div className="text-right">
            <p className="text-[#0A5CFF] font-black text-lg tracking-tighter leading-none">{car.price}</p>
          </div>
        </div>

        <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
          <SpecBadge label="Engine" value={car.specs.engine} />
          <SpecBadge label="Fuel" value={car.specs.fuel} />
          {car.specs.mileage && <SpecBadge label="Mileage" value={car.specs.mileage} />}
        </div>

        <div className="pt-2 flex gap-3">
          <button className="flex-1 bg-slate-900 text-white py-4 rounded-2xl font-black text-xs uppercase flex items-center justify-center gap-2 active:scale-95 transition-transform">
            View Details <ArrowRight size={14} />
          </button>
          <a 
            href={`https://wa.me/94701999999?text=Inquiry:%20${car.brand}%20${car.model}`}
            target="_blank"
            className="w-14 h-14 bg-[#EAF1FF] text-[#0A5CFF] rounded-2xl flex items-center justify-center shrink-0 active:scale-95 transition-transform"
          >
            <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" className="w-6 h-6" alt="WA" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const SpecBadge = ({ label, value }: { label: string, value: string }) => (
  <div className="bg-slate-50 px-4 py-2 rounded-xl flex flex-col min-w-fit">
    <span className="text-[8px] text-slate-400 font-black uppercase tracking-widest">{label}</span>
    <span className="text-slate-900 text-[11px] font-bold">{value}</span>
  </div>
);

export default CarCard;
