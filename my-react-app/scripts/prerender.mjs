// Runs after `vite build`. For every page in src/data/seo.json it writes
// dist/<page>/index.html with that page's own <title>, description,
// canonical URL and Open Graph tags, plus crawlable text and links inside
// #root (React replaces it on load). Also writes sitemap.xml and 404.html.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const seo = JSON.parse(readFileSync('src/data/seo.json', 'utf8'));
const template = readFileSync('dist/index.html', 'utf8');
const site = seo.site;
const routes = seo.routes;

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const nav = Object.entries(routes)
  .map(([path, r]) => `<li><a href="${path}">${esc(r.title.split('|')[0].trim())}</a></li>`)
  .join('');

function render(path, r) {
  const url = site + (path === '/' ? '/' : path);
  let html = template
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(r.title)}</title>`)
    .replace(/(<meta name="description" content=")[^"]*(")/, `$1${esc(r.description)}$2`)
    .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`)
    .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${esc(r.title)}$2`)
    .replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${esc(r.description)}$2`)
    .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`);
  const body = `<div id="root"><main style="max-width:720px;margin:0 auto;padding:96px 24px;font-family:sans-serif"><h1>${esc(r.title)}</h1><p>${esc(r.description)}</p><nav><ul>${nav}</ul></nav></main></div>`;
  html = html.replace('<div id="root"></div>', body);
  return html;
}

for (const [path, r] of Object.entries(routes)) {
  const html = render(path, r);
  if (path === '/') {
    writeFileSync('dist/index.html', html);
  } else {
    const dir = join('dist', path);
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, 'index.html'), html);
  }
}

// 404 page for static hosts (SPA fallback still renders the right route)
writeFileSync('dist/404.html', template);

const today = new Date().toISOString().slice(0, 10);
const sitemap =
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  Object.keys(routes)
    .map((p) => `  <url><loc>${site}${p === '/' ? '/' : p}</loc><lastmod>${today}</lastmod><changefreq>${p === '/news' ? 'weekly' : 'monthly'}</changefreq><priority>${p === '/' ? '1.0' : '0.8'}</priority></url>`)
    .join('\n') +
  `\n</urlset>\n`;
writeFileSync('dist/sitemap.xml', sitemap);

console.log(`Prerendered ${Object.keys(routes).length} pages + sitemap.xml`);
