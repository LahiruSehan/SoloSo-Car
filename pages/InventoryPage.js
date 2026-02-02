
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MOCK_CARS } from '../constants';
import CarCard from '../components/CarCard';
import { Search, SlidersHorizontal } from 'lucide-react';

const InventoryPage = () => {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');

  const filteredCars = MOCK_CARS.filter(car => {
    const matchesFilter = filter === 'All' || car.condition === filter;
    const matchesSearch = car.brand.toLowerCase().includes(search.toLowerCase()) || 
                          car.model.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="px-5 md:px-12 space-y-6 pt-6 pb-24">
      <div className="text-center md:text-left space-y-1">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">FLEET</h1>
        <p className="text-slate-400 text-[9px] font-black uppercase tracking-widest">Global Sourcing • Local Delivery</p>
      </div>

      <div className="sticky top-20 z-30 bg-white/80 backdrop-blur-xl pt-1 pb-4 flex flex-col gap-3">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
          <input 
            type="text" 
            placeholder="FIND YOUR VEHICLE..."
            className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-100 rounded-[18px] outline-none focus:ring-2 focus:ring-[#0A5CFF] focus:bg-white transition-all font-black text-xs text-slate-900 uppercase tracking-tight"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="flex gap-2 overflow-x-auto no-scrollbar py-0.5">
          {['All', 'Brand New', 'Used', 'Registered'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded-full whitespace-nowrap text-[9px] font-black uppercase tracking-widest transition-all ${filter === cat ? 'bg-[#0A5CFF] text-white shadow-lg' : 'bg-slate-100 text-slate-500'}`}
            >
              {cat}
            </button>
          ))}
          <button className="px-4 py-2.5 bg-slate-900 text-white rounded-full flex items-center gap-2 text-[9px] font-black uppercase">
            <SlidersHorizontal size={12} /> Filter
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {filteredCars.length > 0 ? (
          filteredCars.map((car, idx) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
            >
              <CarCard car={car} />
            </motion.div>
          ))
        ) : (
          <div className="col-span-full py-20 text-center space-y-3">
            <div className="w-20 h-20 bg-slate-50 rounded-full mx-auto flex items-center justify-center">
              <Search size={32} className="text-slate-200" />
            </div>
            <p className="text-slate-400 font-black text-[10px] uppercase tracking-widest">No matching results found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default InventoryPage;
