import { useEffect, useState } from 'react';
import { supabase } from './supabase';

/**
 * Returns the built-in items immediately, then appends published rows from a
 * Supabase table (if the backend is connected). `map` turns a DB row into the
 * same shape as the built-in items.
 */
export function useContent<T, R = Record<string, unknown>>(
  table: string,
  builtIn: T[],
  map: (row: R) => T,
  opts: { orderBy?: string; ascending?: boolean } = {},
) {
  const [items, setItems] = useState<T[]>(builtIn);

  useEffect(() => {
    if (!supabase) return;
    let cancelled = false;
    supabase
      .from(table)
      .select('*')
      .eq('published', true)
      .order(opts.orderBy ?? 'created_at', { ascending: opts.ascending ?? false })
      .then(({ data, error }) => {
        if (cancelled || error || !data) return;
        setItems([...(data as R[]).map(map), ...builtIn]);
      });
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [table]);

  return items;
}
