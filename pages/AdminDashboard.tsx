
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '../supabase';
import { Plus, Edit2, Trash2, Image as ImageIcon, X, Search, Filter, LayoutGrid, List, Loader2 } from 'lucide-react';
import { Car } from '../types';

const AdminDashboard = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAdding, setIsAdding] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');

  const [form, setForm] = useState<Partial<Car>>({
    brand: '', model: '', year: 2024, price: '', condition: 'Brand New', status: 'Available', specs: { engine: '', fuel: '' }
  });

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('cars')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) console.error(error);
    else setCars(data || []);
    setLoading(false);
  };

  const handleSave = async () => {
    setIsSaving(true);
    if (editingId) {
      const { error } = await supabase
        .from('cars')
        .update({ ...form })
        .eq('id', editingId);
      if (error) alert(error.message);
    } else {
      const { error } = await supabase
        .from('cars')
        .insert([{ 
          ...form, 
          image: 'https://images.unsplash.com/photo-1594976612318-961f01f80293?q=80&w=800&auto=format&fit=crop',
          images: []
        }]);
      if (error) alert(error.message);
    }
    
    setIsSaving(false);
    setIsAdding(false);
    setEditingId(null);
    setForm({ brand: '', model: '', year: 2024, price: '', condition: 'Brand New', status: 'Available', specs: { engine: '', fuel: '' } });
    fetchCars();
  };

  const deleteCar = async (id: string) => {
    if (window.confirm('Remove listing permanently?')) {
      const { error } = await supabase.from('cars').delete().eq('id', id);
      if (error) alert(error.message);
      else fetchCars();
    }
  };

  const startEdit = (car: Car) => {
    setForm(car);
    setEditingId(car.id);
    setIsAdding(true);
  };

  return (
    <div className="px-5 md:px-12 space-y-8 pb-24 pt-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase leading-none">CONSOLE</h1>
          <p className="text-slate-400 text-[9px] font-black uppercase tracking-widest mt-1">Inventory Management Portal</p>
        </div>
        <div className="flex gap-2">
          <div className="bg-slate-100 p-1 rounded-xl flex">
            <button onClick={() => setViewMode('list')} className={`p-2 rounded-lg transition-all ${viewMode === 'list' ? 'bg-white shadow-sm text-[#0A5CFF]' : 'text-slate-400'}`}><List size={18} /></button>
            <button onClick={() => setViewMode('grid')} className={`p-2 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-white shadow-sm text-[#0A5CFF]' : 'text-slate-400'}`}><LayoutGrid size={18} /></button>
          </div>
          <button onClick={() => setIsAdding(true)} className="bg-[#0A5CFF] text-white px-5 py-3 rounded-xl shadow-lg font-black uppercase text-[10px] flex items-center gap-1.5 active:scale-95 transition-all">
            <Plus size={16} /> NEW ENTRY
          </button>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
          <Search className="text-slate-400" size={18} />
          <input className="bg-transparent outline-none text-[10px] font-black uppercase tracking-tight flex-1" placeholder="SEARCH RECORDS..." />
          <Filter className="text-slate-400" size={18} />
        </div>

        <div className={viewMode === 'grid' ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" : "space-y-2"}>
          {loading ? (
            <div className="py-20 flex justify-center w-full col-span-full">
              <Loader2 className="animate-spin text-[#0A5CFF]" size={32} />
            </div>
          ) : cars.map(car => (
            <motion.div 
              key={car.id} 
              layout
              className={`bg-white border border-slate-100 shadow-sm ${viewMode === 'list' ? 'p-3 rounded-2xl flex items-center gap-4' : 'p-4 rounded-3xl flex flex-col gap-4'}`}
            >
              <img src={car.image} className={`${viewMode === 'list' ? 'w-16 h-16 rounded-xl' : 'w-full h-40 rounded-2xl'} object-cover`} alt={car.model} />
              <div className="flex-1">
                <h4 className="font-black text-slate-900 uppercase tracking-tighter text-sm">{car.brand} {car.model}</h4>
                <div className="flex gap-2 mt-0.5">
                  <span className="bg-slate-50 text-slate-400 px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-widest">{car.year}</span>
                  <span className={`px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-widest ${car.status === 'Available' ? 'bg-green-50 text-green-500' : 'bg-red-50 text-red-500'}`}>{car.status}</span>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                <p className="text-[#0A5CFF] font-black text-sm tracking-tighter">{car.price}</p>
                <div className="flex gap-1.5">
                  <button onClick={() => startEdit(car)} className="p-2 bg-slate-50 text-slate-600 rounded-lg hover:bg-slate-100"><Edit2 size={14} /></button>
                  <button onClick={() => deleteCar(car.id)} className="p-2 bg-red-50 text-red-500 rounded-lg hover:bg-red-100"><Trash2 size={14} /></button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {isAdding && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] bg-slate-900/90 backdrop-blur-2xl flex items-center justify-center p-6">
            <motion.div initial={{ scale: 0.95, y: 30 }} animate={{ scale: 1, y: 0 }} className="bg-white w-full max-w-lg rounded-[36px] p-8 max-h-[85vh] overflow-y-auto no-scrollbar shadow-2xl">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-black tracking-tighter uppercase text-slate-900">{editingId ? 'Modify Entry' : 'New Listing'}</h3>
                <button onClick={() => setIsAdding(false)} className="p-2.5 bg-slate-100 rounded-full hover:bg-slate-200"><X size={18}/></button>
              </div>

              <div className="space-y-6">
                 <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1.5">
                      <label className="text-[9px] font-black uppercase text-slate-400 tracking-widest ml-1">Brand</label>
                      <input value={form.brand} onChange={e => setForm({...form, brand: e.target.value})} className="w-full p-3.5 bg-slate-50 rounded-xl outline-none text-xs font-bold uppercase tracking-tight border border-slate-100 focus:bg-white focus:ring-2 focus:ring-[#0A5CFF] transition-all" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[9px] font-black uppercase text-slate-400 tracking-widest ml-1">Model</label>
                      <input value={form.model} onChange={e => setForm({...form, model: e.target.value})} className="w-full p-3.5 bg-slate-50 rounded-xl outline-none text-xs font-bold uppercase tracking-tight border border-slate-100 focus:bg-white focus:ring-2 focus:ring-[#0A5CFF] transition-all" />
                    </div>
                 </div>

                 <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1.5">
                      <label className="text-[9px] font-black uppercase text-slate-400 tracking-widest ml-1">Year</label>
                      <input type="number" value={form.year} onChange={e => setForm({...form, year: parseInt(e.target.value)})} className="w-full p-3.5 bg-slate-50 rounded-xl outline-none text-xs font-bold border border-slate-100 focus:bg-white focus:ring-2 focus:ring-[#0A5CFF] transition-all" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[9px] font-black uppercase text-slate-400 tracking-widest ml-1">Price Label</label>
                      <input value={form.price} onChange={e => setForm({...form, price: e.target.value})} className="w-full p-3.5 bg-slate-50 rounded-xl outline-none text-xs font-bold uppercase border border-slate-100 focus:bg-white focus:ring-2 focus:ring-[#0A5CFF] transition-all" placeholder="Rs. 10.5M" />
                    </div>
                 </div>

                 <div className="space-y-1.5">
                    <label className="text-[9px] font-black uppercase text-slate-400 tracking-widest ml-1">Status</label>
                    <div className="grid grid-cols-2 gap-2">
                      <button onClick={() => setForm({...form, status: 'Available'})} className={`py-3 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all ${form.status === 'Available' ? 'bg-[#0A5CFF] text-white' : 'bg-slate-50 text-slate-400'}`}>Available</button>
                      <button onClick={() => setForm({...form, status: 'Sold'})} className={`py-3 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all ${form.status === 'Sold' ? 'bg-red-500 text-white' : 'bg-slate-50 text-slate-400'}`}>Sold</button>
                    </div>
                 </div>

                 <div className="flex items-center gap-4 bg-slate-50 p-6 rounded-2xl border border-dashed border-slate-200 group cursor-pointer hover:border-[#0A5CFF] transition-all">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm text-slate-200 group-hover:text-[#0A5CFF]">
                      <ImageIcon size={24} />
                    </div>
                    <div className="flex-1">
                      <p className="text-[9px] font-black text-slate-900 uppercase tracking-widest">Showcase Image</p>
                      <p className="text-[8px] text-slate-400 font-bold uppercase">Change Image</p>
                    </div>
                 </div>

                 <button 
                  disabled={isSaving}
                  onClick={handleSave} 
                  className="w-full bg-slate-900 text-white py-4.5 rounded-2xl font-black uppercase text-xs shadow-xl active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                 >
                   {isSaving && <Loader2 className="animate-spin" size={16} />}
                   {editingId ? 'Update Entry' : 'Commit Entry'}
                 </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AdminDashboard;
