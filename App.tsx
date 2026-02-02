
import React, { useState, useEffect, createContext, useContext } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, X, LayoutDashboard, User as UserIcon, Loader2 } from 'lucide-react';
import { User } from './types';
import { supabase } from './supabase';

// Components
import Header from './components/Header';
import WhatsAppButton from './components/WhatsAppButton';
import Navigation from './components/Navigation';

// Pages
import HomePage from './pages/HomePage';
import InventoryPage from './pages/InventoryPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import AuthPage from './pages/AuthPage';
import AdminDashboard from './pages/AdminDashboard';

// Auth Context
interface AuthContextType {
  user: User | null;
  loading: boolean;
  logout: () => Promise<void>;
}
const AuthContext = createContext<AuthContextType>({ user: null, loading: true, logout: async () => {} });
export const useAuth = () => useContext(AuthContext);

const PageTransition = ({ children }: { children?: React.ReactNode }) => {
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

const ProtectedRoute = ({ children }: { children?: React.ReactNode }) => {
  const { user, loading } = useAuth();
  if (loading) return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <Loader2 className="animate-spin text-[#0A5CFF] mb-4" size={40} />
      <p className="text-slate-400 font-black text-[10px] uppercase tracking-widest">Verifying Session...</p>
    </div>
  );
  if (!user || user.role !== 'admin') return <Navigate to="/auth" />;
  return <>{children}</>;
};

const AppContent = () => {
  const location = useLocation();
  const { user, logout } = useAuth();
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
            <Route path="/auth" element={<PageTransition><AuthPage /></PageTransition>} />
            <Route path="/admin" element={
              <ProtectedRoute>
                <PageTransition><AdminDashboard /></PageTransition>
              </ProtectedRoute>
            } />
          </Routes>
        </AnimatePresence>

        <Navigation />

        {/* Floating Actions */}
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

        {/* Side Drawer Menu */}
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
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                <div className="h-px bg-slate-100 my-4" />
                {user?.role === 'admin' && <Link to="/admin" onClick={() => setIsMenuOpen(false)} className="text-[#0A5CFF]">Admin Console</Link>}
                {user ? (
                  <button onClick={() => { logout(); setIsMenuOpen(false); }} className="text-red-500 text-left">Logout</button>
                ) : (
                  <Link to="/auth" onClick={() => setIsMenuOpen(false)} className="bg-[#0A5CFF] text-white px-8 py-4 rounded-2xl text-center shadow-xl shadow-blue-500/20">Login</Link>
                )}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const App = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initializing Supabase state
    const initializeAuth = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (session) {
          setUser({
            id: session.user.id,
            email: session.user.email || '',
            role: session.user.email?.endsWith('@solo.so') ? 'admin' : 'user'
          });
        }
      } catch (err) {
        console.error('Auth initialization error:', err);
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        setUser({
          id: session.user.id,
          email: session.user.email || '',
          role: session.user.email?.endsWith('@solo.so') ? 'admin' : 'user'
        });
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => subscription?.unsubscribe();
  }, []);

  const logout = async () => {
    try {
      await supabase.auth.signOut();
    } catch (err) {
      console.error('Logout error:', err);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, logout }}>
      <Router>
        <AppContent />
      </Router>
    </AuthContext.Provider>
  );
};

// Root Mounting Logic (Merged from index.tsx)
const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

export default App;
