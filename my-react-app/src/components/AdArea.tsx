import { useEffect, useRef, useState } from 'react';
import { useLang } from '../lib/i18n';
import { AD_CLIENT, AD_SLOT } from '../lib/ads';
import { Container } from './ui';

/**
 * A responsive AdSense ad: full screen width on phones, as wide as the page
 * column on laptops, with Google choosing a size that fits. The area takes
 * no space and shows no label until Google actually places an ad (see
 * `.ad-area` in index.css), so pages look unchanged when no ad is served.
 *
 * The ad is only added in the browser, after the page has started, so the
 * prerendered HTML and React's copy of it always match.
 */
export function AdArea({ className = '' }: { className?: string }) {
  const { t } = useLang();
  const [inBrowser, setInBrowser] = useState(false);
  const ins = useRef<HTMLModElement>(null);
  const requested = useRef(false);

  useEffect(() => setInBrowser(true), []);
  useEffect(() => {
    if (!inBrowser || !ins.current || requested.current) return;
    requested.current = true; // one request per ad area, even in dev's double effects
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // Ad blockers or a not-yet-approved site: the area just stays collapsed.
    }
  }, [inBrowser]);

  if (!AD_SLOT) return null;
  return (
    <aside className={`ad-area ${className}`} aria-label={t({ en: 'Advertisement', ml: 'പരസ്യം' })}>
      <Container>
        <p className="ad-label label mb-3 text-center text-ink-faint">{t({ en: 'Advertisement', ml: 'പരസ്യം' })}</p>
        {inBrowser && (
          <ins
            ref={ins}
            className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client={AD_CLIENT}
            data-ad-slot={AD_SLOT}
            data-ad-format="auto"
            data-full-width-responsive="true"
          />
        )}
      </Container>
    </aside>
  );
}
