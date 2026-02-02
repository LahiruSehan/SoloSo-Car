
import { createClient } from '@supabase/supabase-js';

// Accessing environment variables in a way that works for both Vite and static ESM
const getEnv = (key: string) => {
  return (window as any).process?.env?.[key] || (import.meta as any).env?.[key] || '';
};

const supabaseUrl = getEnv('VITE_SUPABASE_URL');
const supabaseAnonKey = getEnv('VITE_SUPABASE_ANON_KEY');

// Helper to check if the URL is a valid Supabase endpoint
const isValidUrl = (url: string) => {
  try {
    return url.startsWith('https://') && url.includes('.supabase.co');
  } catch {
    return false;
  }
};

// Initialize with a fallback to avoid crashing the whole app if keys are missing
export const supabase = isValidUrl(supabaseUrl) 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : {
      auth: {
        getSession: async () => ({ data: { session: null }, error: null }),
        onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
        signInWithPassword: async () => ({ data: {}, error: { message: 'Supabase not configured' } }),
        signUp: async () => ({ data: {}, error: { message: 'Supabase not configured' } }),
        signOut: async () => ({ error: null })
      },
      from: () => ({
        select: () => ({ order: () => Promise.resolve({ data: [], error: null }) }),
        update: () => ({ eq: () => Promise.resolve({ error: { message: 'Supabase not configured' } }) }),
        insert: () => Promise.resolve({ error: { message: 'Supabase not configured' } }),
        delete: () => ({ eq: () => Promise.resolve({ error: { message: 'Supabase not configured' } }) })
      })
    } as any;

if (!isValidUrl(supabaseUrl)) {
  console.warn('Supabase URL is missing or invalid. Application is running in "Offline/Mock" mode.');
}
