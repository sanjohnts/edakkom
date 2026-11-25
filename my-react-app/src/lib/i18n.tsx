import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

export type Lang = 'ml' | 'en';
/** A piece of text in both languages. */
export type L = { en: string; ml: string };

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (text: L | string | undefined) => string };

const LangContext = createContext<Ctx | null>(null);

function initialLang(): Lang {
  if (typeof window === 'undefined') return 'ml';
  const q = new URLSearchParams(window.location.search).get('lang');
  if (q === 'en' || q === 'ml') return q;
  const saved = window.localStorage.getItem('edakkom-lang');
  return saved === 'en' ? 'en' : 'ml';
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    window.localStorage.setItem('edakkom-lang', lang);
  }, [lang]);

  const t = (text: L | string | undefined) => {
    if (!text) return '';
    if (typeof text === 'string') return text;
    return text[lang] || text.en;
  };

  return <LangContext.Provider value={{ lang, setLang: setLangState, t }}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used inside LangProvider');
  return ctx;
}
