
import { createClient } from '@supabase/supabase-js';

// These would normally be in .env, but for GH Pages we can use hardcoded values if safe (public anon key)
// or provided via build secrets. Replace with your actual project credentials.
const supabaseUrl = (import.meta as any).env?.VITE_SUPABASE_URL || 'https://your-project.supabase.co';
const supabaseAnonKey = (import.meta as any).env?.VITE_SUPABASE_ANON_KEY || 'your-anon-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
