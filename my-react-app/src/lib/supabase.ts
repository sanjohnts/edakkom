import { createClient, type SupabaseClient } from '@supabase/supabase-js';

const url = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const key = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

/**
 * The Supabase client, or null when the site is running without a backend.
 * Every page works with the built-in content in src/data when this is null;
 * submissions and the admin dashboard need it.
 */
export const supabase: SupabaseClient | null = url && key ? createClient(url, key) : null;
export const isBackendConnected = supabase !== null;

export const PHOTO_BUCKET = 'photos';

export function publicPhotoUrl(path: string) {
  if (!supabase) return path;
  if (path.startsWith('http') || path.startsWith('/')) return path;
  return supabase.storage.from(PHOTO_BUCKET).getPublicUrl(path).data.publicUrl;
}
