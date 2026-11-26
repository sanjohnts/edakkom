import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { LangProvider } from './lib/i18n';
import App, { preloadPages } from './App';
// Self-hosted fonts (only the weights the design uses). Each file covers one
// script, so a Malayalam page never downloads the Cyrillic or Greek parts.
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/noto-sans-malayalam/400.css';
import '@fontsource/noto-sans-malayalam/500.css';
import '@fontsource/noto-serif-malayalam/400.css';
import '@fontsource/noto-serif-malayalam/500.css';
import '@fontsource/playfair-display/400.css';
import '@fontsource/playfair-display/400-italic.css';
import './index.css';

const container = document.getElementById('root')!;
const app = (
  <StrictMode>
    {/* v7_startTransition: while the next page's file loads, keep the current
        page on screen instead of flashing a dark placeholder. */}
    <BrowserRouter future={{ v7_startTransition: true }}>
      <LangProvider>
        <App />
      </LangProvider>
    </BrowserRouter>
  </StrictMode>
);

// Pages are prerendered in Malayalam. Reuse that HTML (hydrate) unless the
// visitor wants English, in which case render fresh to avoid a mismatch.
function wantsEnglish() {
  const q = new URLSearchParams(window.location.search).get('lang');
  if (q) return q === 'en';
  try {
    return window.localStorage.getItem('edakkom-lang') === 'en';
  } catch {
    return false;
  }
}

if (container.hasChildNodes() && !wantsEnglish()) hydrateRoot(container, app);
else createRoot(container).render(app);

// After the first page has fully loaded (photos included) and the phone is
// idle, fetch the other pages' files (~35 KB in all) so later taps are
// instant. Skipped when the visitor has turned on data saving.
function preloadWhenIdle() {
  const conn = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
  if (conn?.saveData) return;
  if ('requestIdleCallback' in window) window.requestIdleCallback(preloadPages, { timeout: 4000 });
  else setTimeout(preloadPages, 1000);
}
if (document.readyState === 'complete') preloadWhenIdle();
else window.addEventListener('load', preloadWhenIdle, { once: true });
