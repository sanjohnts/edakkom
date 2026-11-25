import { useEffect } from 'react';
import { useLang } from '../lib/i18n';
import { Container, Pill } from '../components/ui';

export default function NotFound() {
  const { t } = useLang();
  useEffect(() => {
    document.title = 'Page not found · edakkom.com';
  }, []);
  return (
    <section className="m-3 flex min-h-[80vh] items-center rounded-[var(--radius-card)] bg-coal pt-16 text-ivory sm:m-4">
      <Container className="text-center">
        <p className="label text-lime">404</p>
        <h1 className="headline mt-4 text-[clamp(2.6rem,7vw,5.5rem)]">
          {t({ en: 'This path is', ml: 'ഈ വഴി' })} <em className="font-serif font-normal italic">{t({ en: 'not on the map.', ml: 'മാപ്പിലില്ല.' })}</em>
        </h1>
        <Pill to="/" tone="ivory" className="mt-10">{t({ en: 'Back home', ml: 'ഹോമിലേക്ക്' })}</Pill>
      </Container>
    </section>
  );
}
