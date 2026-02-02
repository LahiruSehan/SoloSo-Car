
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
    // Fixed: Mock auth methods should return data with user and session as null instead of an empty object
    // to match Supabase's AuthResponse structure and fix TypeScript errors during property access.
    signInWithPassword: async (_credentials?: any) => ({ 
      data: { user: null, session: null }, 
      error: { message: 'Supabase not configured' } 
    }),
    signUp: async (_credentials?: any) => ({ 
      data: { user: null, session: null }, 
      error: { message: 'Supabase not configured' } 
    }),
    signOut: async () => ({ error: null })
  },
  from: () => ({
    select: () => ({ order: () => Promise.resolve({ data: [], error: null }) }),
    update: () => ({ eq: () => Promise.resolve({ error: { message: 'Supabase not configured' } }) }),
    insert: () => Promise.resolve({ error: { message: 'Supabase not configured' } }),
    delete: () => ({ eq: () => Promise.resolve({ error: { message: 'Supabase not configured' } }) })
  })
});

export const supabase = isValidUrl(supabaseUrl) && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : createMockSupabase();

if (!isValidUrl(supabaseUrl)) {
  console.warn('Supabase URL is missing or invalid. Check environment variables.');
}
