import { useEffect } from 'react';
import seo from '../data/seo.json';

type RouteSeo = { title: string; description: string };
const routes = seo.routes as Record<string, RouteSeo>;

function setMeta(selector: string, attr: string, value: string) {
  const el = document.head.querySelector<HTMLMetaElement | HTMLLinkElement>(selector);
  if (el) el.setAttribute(attr, value);
}

/** Sets title, description, canonical and Open Graph tags for the current page. */
export function useSeo(path: string, override?: Partial<RouteSeo>) {
  useEffect(() => {
    const base = routes[path] ?? routes['/'];
    const title = override?.title ?? base.title;
    const description = override?.description ?? base.description;
    const url = seo.site + (path === '/' ? '/' : path);
    document.title = title;
    setMeta('meta[name="description"]', 'content', description);
    setMeta('link[rel="canonical"]', 'href', url);
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[property="og:url"]', 'content', url);
  }, [path, override?.title, override?.description]);
}
