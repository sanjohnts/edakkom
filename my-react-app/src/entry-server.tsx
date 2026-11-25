import { StrictMode } from 'react';
import { StaticRouter } from 'react-router-dom/server';
import { LangProvider } from './lib/i18n';
import App from './App';

/**
 * Used only at build time by scripts/prerender.mjs: returns the full app for
 * one URL so every page ships as finished HTML (fast first paint on phones,
 * and the real content for search engines and link previews).
 */
export function app(url: string) {
  return (
    <StrictMode>
      <StaticRouter location={url}>
        <LangProvider>
          <App />
        </LangProvider>
      </StaticRouter>
    </StrictMode>
  );
}
