
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabase';
import { Mail, Lock, ArrowRight, Loader2 } from 'lucide-react';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (isLogin) {
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        setError(error.message);
        setLoading(false);
      } else {
        if (data.user?.email?.endsWith('@solo.so')) {
          navigate('/admin');
        } else {
          navigate('/');
        }
      }
    } else {
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) {
        setError(error.message);
        setLoading(false);
      } else {
        alert('Verification email sent! Check your inbox.');
        setIsLogin(true);
        setLoading(false);
      }
    }
  };

  return (
    <div className="min-h-[80vh] flex flex-col justify-center px-6 md:max-w-md mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase mb-2">
          {isLogin ? 'Welcome Back' : 'Create Account'}
        </h1>
        <p className="text-slate-400 font-medium">Access your vehicle dashboard.</p>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-8 rounded-[40px] shadow-2xl border border-slate-100"
      >
        {error && (
          <div className="mb-6 p-4 bg-red-50 text-red-500 rounded-2xl text-xs font-bold uppercase tracking-tight">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="email" 
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-[#0A5CFF] font-medium"
                placeholder="name@company.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="password" 
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-[#0A5CFF] font-medium"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button 
            type="submit"
            disabled={loading}
            className="w-full bg-[#0A5CFF] text-white py-4 rounded-2xl font-black uppercase text-sm flex items-center justify-center gap-2 shadow-xl hover:scale-[1.02] transition-all disabled:opacity-50"
          >
            {loading ? <Loader2 className="animate-spin" size={18} /> : (isLogin ? 'Sign In' : 'Register Now')}
            {!loading && <ArrowRight size={18} />}
          </button>
        </form>

        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-100"></div></div>
          <div className="relative flex justify-center text-xs uppercase"><span className="bg-white px-2 text-slate-400 font-bold">Or continue with</span></div>
        </div>

        <button className="w-full bg-slate-50 text-slate-900 py-4 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 mb-6 border border-slate-100">
           Social Sign In
        </button>

        <p className="text-center text-slate-500 text-sm font-medium">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
          <button 
            onClick={() => setIsLogin(!isLogin)}
            className="text-[#0A5CFF] font-black uppercase"
          >
            {isLogin ? 'Sign Up' : 'Login'}
          </button>
        </p>
      </motion.div>
      
      <p className="mt-8 text-center text-slate-400 text-[10px] font-bold uppercase tracking-widest">
        Hint: use an email ending in "@solo.so" for Admin rights
      </p>
    </div>
  );
};

export default AuthPage;
