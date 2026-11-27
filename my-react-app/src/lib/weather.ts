import { useEffect, useState } from 'react';
import type { L } from './i18n';

/**
 * Live weather for Edakkom from Open-Meteo (https://open-meteo.com): free,
 * no API key, and callable straight from the visitor's browser. The data is
 * CC BY 4.0, so the weather card credits Open-Meteo.
 */

/** Edakkom town centre — the same point as the map data in index.html. */
const LAT = 12.1463;
const LON = 75.4023;
const API =
  `https://api.open-meteo.com/v1/forecast?latitude=${LAT}&longitude=${LON}` +
  '&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,weather_code,wind_speed_10m' +
  '&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max' +
  '&timezone=Asia%2FKolkata&forecast_days=5';
/** Open-Meteo refreshes current conditions every 15 minutes. */
const REFRESH_MS = 15 * 60 * 1000;

export type Day = { date: string; code: number; max: number; min: number; rain: number | null };
export type Weather = {
  /** Kerala local time of the reading, e.g. "2026-11-27T16:00". */
  time: string;
  temp: number;
  feelsLike: number;
  humidity: number;
  wind: number;
  code: number;
  isDay: boolean;
  days: Day[];
};

let cache: { data: Weather; at: number } | null = null;
let inflight: Promise<Weather> | null = null;

async function load(): Promise<Weather> {
  const res = await fetch(API);
  if (!res.ok) throw new Error(`Weather request failed: ${res.status}`);
  const { current: c, daily: d } = await res.json();
  return {
    time: c.time,
    temp: c.temperature_2m,
    feelsLike: c.apparent_temperature,
    humidity: c.relative_humidity_2m,
    wind: c.wind_speed_10m,
    code: c.weather_code,
    isDay: c.is_day === 1,
    days: (d.time as string[]).map((date, i) => ({
      date,
      code: d.weather_code[i],
      max: d.temperature_2m_max[i],
      min: d.temperature_2m_min[i],
      rain: d.precipitation_probability_max?.[i] ?? null,
    })),
  };
}

/** One request shared by every component on the page, reused for 15 minutes. */
function getWeather(): Promise<Weather> {
  if (cache && Date.now() - cache.at < REFRESH_MS) return Promise.resolve(cache.data);
  if (!inflight) {
    inflight = load()
      .then((data) => {
        cache = { data, at: Date.now() };
        return data;
      })
      .finally(() => {
        inflight = null;
      });
  }
  return inflight;
}

/**
 * Live weather, fetched in the browser once the page has started (never
 * during the build, so the prerendered HTML and React's first render match)
 * and refreshed every 15 minutes while the page is open.
 */
export function useWeather() {
  const [state, setState] = useState<{ data: Weather | null; failed: boolean }>({ data: null, failed: false });
  useEffect(() => {
    let alive = true;
    const refresh = () => {
      if (document.hidden) return;
      getWeather()
        .then((data) => alive && setState({ data, failed: false }))
        // Keep showing the last reading if a refresh fails.
        .catch(() => alive && setState((s) => ({ data: s.data, failed: !s.data })));
    };
    refresh();
    const timer = window.setInterval(refresh, REFRESH_MS);
    document.addEventListener('visibilitychange', refresh);
    return () => {
      alive = false;
      window.clearInterval(timer);
      document.removeEventListener('visibilitychange', refresh);
    };
  }, []);
  return state;
}

export type Sky = 'clear' | 'partly' | 'cloudy' | 'fog' | 'drizzle' | 'rain' | 'storm';

/** Turns a WMO weather code into an icon and words. */
export function describeWeather(code: number): { sky: Sky; label: L } {
  if (code === 0) return { sky: 'clear', label: { en: 'Clear sky', ml: 'തെളിഞ്ഞ ആകാശം' } };
  if (code === 1) return { sky: 'clear', label: { en: 'Mostly clear', ml: 'മിക്കവാറും തെളിഞ്ഞ ആകാശം' } };
  if (code === 2) return { sky: 'partly', label: { en: 'Partly cloudy', ml: 'ഭാഗികമായി മേഘാവൃതം' } };
  if (code === 45 || code === 48) return { sky: 'fog', label: { en: 'Fog', ml: 'മൂടൽമഞ്ഞ്' } };
  if (code >= 51 && code <= 57) return { sky: 'drizzle', label: { en: 'Drizzle', ml: 'ചാറ്റൽമഴ' } };
  if (code === 61 || code === 80) return { sky: 'rain', label: { en: 'Light rain', ml: 'നേരിയ മഴ' } };
  if (code === 63 || code === 66 || code === 81) return { sky: 'rain', label: { en: 'Rain', ml: 'മഴ' } };
  if (code === 65 || code === 67 || code === 82) return { sky: 'rain', label: { en: 'Heavy rain', ml: 'കനത്ത മഴ' } };
  if (code >= 95) return { sky: 'storm', label: { en: 'Thunderstorm', ml: 'ഇടിമിന്നലും മഴയും' } };
  return { sky: 'cloudy', label: { en: 'Cloudy', ml: 'മേഘാവൃതം' } };
}
