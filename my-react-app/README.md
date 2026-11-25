# edakkom.com — എടക്കോം

The digital village archive of **Edakkom, Kannur, Kerala** — history, timeline, geography, culture, religious places, education, tourism, old vs new photos, people & development, gallery, news, directory, contributions and an admin dashboard. Malayalam + English.

Design language: adapted from the "Elsewhere" travel landing page — warm ivory and muted olive, rounded photo cards, Playfair Display serif with italic accents, olive-black pill buttons with round arrows, numbered "how it works" steps and a photo-backed form card.

Stack: **React 18 + TypeScript + Vite + Tailwind CSS 4**, optional **Supabase** (database, photo storage, admin login).

---

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build → dist/ (prerendered pages + sitemap.xml)
npm run preview    # serve the build locally
```

## Add or replace photos

1. Put photos in `photos-original/` (JPG, PNG, WEBP, HEIC).
2. Run `npm run images` — this writes web-sized copies to `public/images/` and thumbnails to `public/images/thumb/`.
3. Describe them in `src/data/photos.ts` (title, caption, category, era, year, status).

**Hero photo:** save the drone photo (the hilltop church by Shutter Magic Photography) as `photos-original/edakkom-aerial.jpg` and run `npm run images -- --force`. If the file is sideways (portrait), the script turns it upright automatically. The homepage, Geography page and social-share image use it, with a photo credit on the hero. Until then they fall back to the bridge-road photo. Get the photographer's permission — and ideally the original high-resolution file — before going live.

### Photo honesty labels
Every photo and fact carries a status badge (`src/data/site.ts`):

| Status | Meaning |
|---|---|
| `verified` | Confirmed from an official source / confirmed as Edakkom |
| `directory` | From public listings — needs confirmation |
| `to-verify` | Needs local records or elders' accounts |
| `context` | Well-documented Kerala/Malabar history |
| `reference` | Representative photo of Kerala/North Malabar, **not** confirmed as Edakkom |

When a photo is confirmed as Edakkom, change its status to `verified` and add the year and credit.

## Edit content
All built-in content is in `src/data/` — every text is `{ en: '…', ml: '…' }`:

- `site.ts` — navigation, quick facts, sources, contact (**fill in `CONTACT.email` / `CONTACT.whatsapp`**)
- `history.ts` — timeline events and history chapters
- `places.ts` — religious places, schools, tourism, nearby places, directory, emergency numbers
- `culture.ts` — culture, old-vs-new pairs, news, people groups
- `photos.ts` — gallery
- `seo.json` — page titles and meta descriptions (used at runtime and by the prerender script)

## Turn on submissions + admin dashboard (Supabase)

The site works without a backend. To let visitors submit photos/stories and to manage content from `/admin`:

1. Create a free project at <https://supabase.com>.
2. **SQL Editor → New query** → paste all of `supabase/schema.sql` → Run.
3. **Project Settings → API** → copy the Project URL and the `anon` public key.
4. `cp .env.example .env` and paste them into `VITE_SUPABASE_URL` / `VITE_SUPABASE_ANON_KEY`.
5. **Authentication → Users → Add user** (your email + a strong password).
6. Make that user an admin (SQL Editor):
   ```sql
   insert into public.admins (user_id)
   select id from auth.users where email = 'you@example.com';
   ```
7. `npm run build` and redeploy. Sign in at `https://edakkom.com/admin`.

The keys must be present **at build time** (Vite bakes them in). The `anon` key is safe to publish; all access is controlled by the row-level-security rules in `schema.sql`:
- anyone can **submit** (status is forced to `pending`; contact details are never readable publicly);
- only admins can review submissions, publish to the gallery, and edit news, timeline and people;
- people profiles cannot be published until consent is recorded.

Admin dashboard tabs: **Submissions** (approve / reject / publish to gallery), **Gallery**, **News**, **Timeline**, **People**. Published items appear on the site next to the built-in content.

## Deploy
`npm run build` produces a static `dist/` folder with a real HTML file per page (good for Google and WhatsApp/Facebook link previews).

- **Netlify / Cloudflare Pages / Vercel:** build command `npm run build`, output `dist`, add the two `VITE_SUPABASE_*` environment variables. `_redirects` is included.
- **cPanel / Apache hosting:** upload the contents of `dist/` to `public_html`. `.htaccess` is included.

Then point the `edakkom.com` DNS to the host.

## SEO checklist
- Per-page `<title>`, description, canonical and Open Graph tags (prerendered) — `src/data/seo.json`
- `sitemap.xml` and `robots.txt` generated / included (`/admin` is excluded)
- `Place` structured data (JSON-LD) in `index.html`
- Malayalam + English keywords: *Edakkom Kannur, Edakkom Kerala, Edakkom history, Edakkom village, Edakkom photos, Edakkom old photos, Edakkom map, Edakkom PIN code 670581, Edakkom Chapparappadava, എടക്കോം, എടക്കോം ചരിത്രം, എടക്കോം കണ്ണൂർ, എടക്കോം പഴയ ചിത്രങ്ങൾ*
- After launch: add the site to **Google Search Console**, submit `https://edakkom.com/sitemap.xml`, and create a **Google Business Profile**-style listing for the project if appropriate.

## Before going public
- Confirm the `to-verify` / `directory` facts (local body, PIN details, church dates, distances) with the panchayat, parishes, schools and elders.
- Make sure you have the right to publish each photo. Several current images came from the internet (news sites, photographers, archives) — replace them with your own or get permission, and add credits. A freepik stock image (`photos-original/3.webp`) was deliberately **not** used.
- Fill in `CONTACT` in `src/data/site.ts`.

## Sources used
See the About page (`/about`) — onefivenine (Edakkom village & PIN 670581), Wikipedia (Chapparapadavu, Panapuzha), UCA News church directory (Archdiocese of Tellicherry), Kerala Tourism, Sametham School Data Bank, Census of India.
