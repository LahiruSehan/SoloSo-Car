
import { createClient } from '@supabase/supabase-js';

const getEnv = (key: string) => {
  try {
    return (window as any).process?.env?.[key] || (import.meta as any).env?.[key] || '';
  } catch {
    return '';
  }
};

const supabaseUrl = getEnv('VITE_SUPABASE_URL');
const supabaseAnonKey = getEnv('VITE_SUPABASE_ANON_KEY');

const isValidUrl = (url: string) => {
  return typeof url === 'string' && url.startsWith('https://') && url.includes('.supabase.co');
};

const createMockSupabase = () => ({
  auth: {
    getSession: async () => ({ data: { session: null }, error: null }),
    onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
    signInWithPassword: async () => ({ 
      data: { user: null, session: null }, 
      error: { message: 'Supabase URL not configured' } 
    }),
    signUp: async () => ({ 
      data: { user: null, session: null }, 
      error: { message: 'Supabase URL not configured' } 
    }),
    signOut: async () => ({ error: null })
  },
  from: () => ({
    select: () => ({ 
      order: () => Promise.resolve({ data: [], error: null }) 
    }),
    update: () => ({ 
      eq: () => Promise.resolve({ error: { message: 'Offline Mode' } }) 
    }),
    insert: () => Promise.resolve({ error: { message: 'Offline Mode' } }),
    delete: () => ({ 
      eq: () => Promise.resolve({ error: { message: 'Offline Mode' } }) 
    })
  })
});

export const supabase = isValidUrl(supabaseUrl) && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : createMockSupabase();

if (!isValidUrl(supabaseUrl)) {
  console.warn('SOLO-SO: Supabase environment variables are missing. Running in demonstration mode.');
}
