// Runs after `vite build` and the SSR build (dist-ssr/). For every page in
// src/data/seo.json it renders the real React page to HTML and writes
// dist/<page>/index.html with that page's own <title>, description,
// canonical URL and Open Graph tags. Phones then paint the finished page
// straight from the HTML, before any JavaScript runs; React "hydrates" it.
// Also writes sitemap.xml, 404.html and app.html (an empty shell used for
// pages that are not prerendered, such as /admin).
import { readFileSync, writeFileSync, mkdirSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { Writable } from 'node:stream';
import { renderToPipeableStream } from 'react-dom/server';

const { app } = await import(pathToFileURL(join(process.cwd(), 'dist-ssr/entry-server.js')).href);

const seo = JSON.parse(readFileSync('src/data/seo.json', 'utf8'));
const shell = readFileSync('dist/index.html', 'utf8');
const site = seo.site;
const routes = seo.routes;

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// Preload the two Malayalam font files every page needs first (body + headings).
const fonts = readdirSync('dist/assets').filter((f) =>
  /^noto-(sans|serif)-malayalam-malayalam-400-normal-.*\.woff2$/.test(f),
);
const fontPreloads = fonts
  .map((f) => `<link rel="preload" href="/assets/${f}" as="font" type="font/woff2" crossorigin />`)
  .join('\n    ');
const template = shell.replace('</head>', `    ${fontPreloads}\n  </head>`);

/** Render one URL to HTML, waiting for lazy-loaded pages to finish. */
function render(url) {
  return new Promise((resolve, reject) => {
    let html = '';
    const { pipe } = renderToPipeableStream(app(url), {
      onAllReady() {
        pipe(
          new Writable({
            write(chunk, _enc, cb) {
              html += chunk.toString();
              cb();
            },
            final(cb) {
              resolve(html);
              cb();
            },
          }),
        );
      },
      onShellError: reject,
      onError(err) {
        reject(err);
      },
    });
  });
}

function page(path, r, body) {
  const url = site + (path === '/' ? '/' : path);
  return template
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(r.title)}</title>`)
    .replace(/(<meta name="description" content=")[^"]*(")/, `$1${esc(r.description)}$2`)
    .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`)
    .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${esc(r.title)}$2`)
    .replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${esc(r.description)}$2`)
    .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`)
    .replace('<div id="root"></div>', `<div id="root">${body}</div>`);
}

for (const [path, r] of Object.entries(routes)) {
  const html = page(path, r, await render(path));
  if (path === '/') {
    writeFileSync('dist/index.html', html);
  } else {
    const dir = join('dist', path);
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, 'index.html'), html);
  }
}

// Shell for client-only routes (e.g. /admin) and unknown URLs: the browser
// renders them itself, so the HTML must not contain another page's markup.
writeFileSync('dist/app.html', template);
writeFileSync('dist/404.html', template);

const today = new Date().toISOString().slice(0, 10);
const sitemap =
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  Object.keys(routes)
    .map((p) => `  <url><loc>${site}${p === '/' ? '/' : p}</loc><lastmod>${today}</lastmod><changefreq>${p === '/news' ? 'weekly' : 'monthly'}</changefreq><priority>${p === '/' ? '1.0' : '0.8'}</priority></url>`)
    .join('\n') +
  `\n</urlset>\n`;
writeFileSync('dist/sitemap.xml', sitemap);

console.log(`Prerendered ${Object.keys(routes).length} pages (full HTML) + sitemap.xml; preloading ${fonts.length} font files`);
