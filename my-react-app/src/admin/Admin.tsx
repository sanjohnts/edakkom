import { useCallback, useEffect, useState, type FormEvent } from 'react';
import type { Session } from '@supabase/supabase-js';
import { PHOTO_BUCKET, publicPhotoUrl, supabase } from '../lib/supabase';
import { CATEGORIES } from '../data/photos';
import { Container, Label } from '../components/ui';

/* ————————————————————————————————————————————————
   Admin dashboard (English only — for the site team)
   Requires Supabase: see supabase/schema.sql and README.
   ———————————————————————————————————————————————— */

type Field = {
  key: string;
  label: string;
  type?: 'text' | 'textarea' | 'date' | 'number' | 'select' | 'image' | 'checkbox';
  options?: { value: string; label: string }[];
  required?: boolean;
  list?: boolean; // show in table
};

type TableConfig = { table: string; title: string; fields: Field[]; order: string; ascending?: boolean };

const TABLES: TableConfig[] = [
  {
    table: 'gallery_items',
    title: 'Gallery',
    order: 'created_at',
    fields: [
      { key: 'storage_path', label: 'Photo', type: 'image', required: true, list: true },
      { key: 'title_en', label: 'Title (English)', required: true, list: true },
      { key: 'title_ml', label: 'Title (Malayalam)' },
      { key: 'caption_en', label: 'Caption (English)', type: 'textarea' },
      { key: 'caption_ml', label: 'Caption (Malayalam)', type: 'textarea' },
      { key: 'category', label: 'Category', type: 'select', options: CATEGORIES.map((c) => ({ value: c.id, label: c.label.en })), required: true, list: true },
      { key: 'era', label: 'Era', type: 'select', options: [{ value: 'old', label: 'Historical' }, { value: 'new', label: 'Present day' }], required: true, list: true },
      { key: 'year', label: 'Year / decade', list: true },
      { key: 'credit', label: 'Photo credit' },
      { key: 'published', label: 'Published', type: 'checkbox', list: true },
    ],
  },
  {
    table: 'news_posts',
    title: 'News',
    order: 'date',
    fields: [
      { key: 'date', label: 'Date', type: 'date', required: true, list: true },
      { key: 'title_en', label: 'Title (English)', required: true, list: true },
      { key: 'title_ml', label: 'Title (Malayalam)' },
      { key: 'tag_en', label: 'Tag (English)', list: true },
      { key: 'tag_ml', label: 'Tag (Malayalam)' },
      { key: 'body_en', label: 'Text (English)', type: 'textarea', required: true },
      { key: 'body_ml', label: 'Text (Malayalam)', type: 'textarea' },
      { key: 'photo_url', label: 'Photo', type: 'image' },
      { key: 'published', label: 'Published', type: 'checkbox', list: true },
    ],
  },
  {
    table: 'timeline_events',
    title: 'Timeline',
    order: 'sort_year',
    ascending: true,
    fields: [
      { key: 'sort_year', label: 'Sort year (number)', type: 'number', required: true, list: true },
      { key: 'when_label', label: 'Date label (e.g. “1962” or “1970s”)', required: true, list: true },
      { key: 'title_en', label: 'Title (English)', required: true, list: true },
      { key: 'title_ml', label: 'Title (Malayalam)' },
      { key: 'body_en', label: 'Text (English)', type: 'textarea', required: true },
      { key: 'body_ml', label: 'Text (Malayalam)', type: 'textarea' },
      { key: 'source', label: 'Source / reference' },
      { key: 'photo_url', label: 'Photo', type: 'image' },
      { key: 'published', label: 'Published', type: 'checkbox', list: true },
    ],
  },
  {
    table: 'people',
    title: 'People',
    order: 'created_at',
    fields: [
      { key: 'name', label: 'Name', required: true, list: true },
      { key: 'role_en', label: 'Role (English)', list: true },
      { key: 'role_ml', label: 'Role (Malayalam)' },
      { key: 'story_en', label: 'Story (English)', type: 'textarea' },
      { key: 'story_ml', label: 'Story (Malayalam)', type: 'textarea' },
      { key: 'photo_url', label: 'Photo', type: 'image' },
      { key: 'consent_confirmed', label: 'Consent received from the person / family', type: 'checkbox', list: true },
      { key: 'published', label: 'Published', type: 'checkbox', list: true },
    ],
  },
];

const input = 'w-full rounded-2xl border border-ink/20 bg-white px-3 py-2 text-sm outline-none focus:border-ink';
const btn = 'label rounded-full px-3.5 py-2 transition-colors';

async function uploadImage(file: File, folder: string) {
  if (!supabase) throw new Error('Not connected');
  const ext = file.name.split('.').pop()?.toLowerCase() || 'jpg';
  const path = `${folder}/${crypto.randomUUID()}.${ext}`;
  const { error } = await supabase.storage.from(PHOTO_BUCKET).upload(path, file, { contentType: file.type });
  if (error) throw error;
  return path;
}

/* ——— Login ——— */
function Login() {
  const [msg, setMsg] = useState('');
  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const { error } = await supabase!.auth.signInWithPassword({ email: String(d.get('email')), password: String(d.get('password')) });
    setMsg(error ? error.message : '');
  }
  return (
    <form onSubmit={onSubmit} className="mx-auto max-w-sm space-y-4 rounded-2xl bg-paper p-8">
      <p className="headline text-3xl">Admin sign in</p>
      <input name="email" type="email" required placeholder="Email" className={input} autoComplete="username" />
      <input name="password" type="password" required placeholder="Password" className={input} autoComplete="current-password" />
      {msg && <p className="text-sm text-laterite">{msg}</p>}
      <button className={`${btn} w-full bg-coal py-3 text-bone`}>Sign in ↗</button>
      <p className="text-xs text-ink-faint">Accounts are created in Supabase → Authentication, then added to the <code>admins</code> table.</p>
    </form>
  );
}

/* ——— Submissions review ——— */
type Submission = {
  id: string; created_at: string; type: string; name: string; contact: string; title: string; description: string;
  year: string; location: string; credit_name: boolean; storage_path: string | null; status: string; admin_note: string | null;
};

function Submissions() {
  const [rows, setRows] = useState<Submission[]>([]);
  const [status, setStatus] = useState('pending');
  const [busy, setBusy] = useState(false);

  const load = useCallback(async () => {
    const { data } = await supabase!.from('submissions').select('*').eq('status', status).order('created_at', { ascending: false });
    setRows((data as Submission[]) ?? []);
  }, [status]);
  useEffect(() => void load(), [load]);

  async function setRowStatus(id: string, s: string) {
    setBusy(true);
    await supabase!.from('submissions').update({ status: s }).eq('id', id);
    setBusy(false);
    load();
  }

  async function publishToGallery(r: Submission) {
    if (!r.storage_path) return;
    const category = window.prompt('Gallery category (historical, village, education, religious, festivals, people, development, nature):', 'historical');
    if (!category) return;
    setBusy(true);
    const era = /^\d{4}/.test(r.year) && Number(r.year.slice(0, 4)) >= 2005 ? 'new' : 'old';
    const { error } = await supabase!.from('gallery_items').insert({
      storage_path: r.storage_path,
      title_en: r.title,
      title_ml: r.title,
      caption_en: r.description,
      caption_ml: r.description,
      category,
      era,
      year: r.year,
      credit: r.credit_name ? r.name : null,
      published: true,
      submission_id: r.id,
    });
    if (!error) await supabase!.from('submissions').update({ status: 'approved' }).eq('id', r.id);
    setBusy(false);
    if (error) alert(error.message);
    load();
  }

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {['pending', 'approved', 'rejected'].map((s) => (
          <button key={s} onClick={() => setStatus(s)} className={`${btn} border ${status === s ? 'border-ink bg-ink text-bone' : 'border-ink/20'}`}>
            {s}
          </button>
        ))}
      </div>
      {rows.length === 0 && <p className="mt-10 text-ink-faint">Nothing here.</p>}
      <div className="mt-6 space-y-4">
        {rows.map((r) => (
          <article key={r.id} className="grid gap-5 rounded-2xl bg-paper p-5 md:grid-cols-[200px_1fr]">
            <div className="aspect-square overflow-hidden rounded-2xl bg-bone-2">
              {r.storage_path ? (
                <a href={publicPhotoUrl(r.storage_path)} target="_blank" rel="noreferrer">
                  <img src={publicPhotoUrl(r.storage_path)} alt="" className="size-full object-cover" />
                </a>
              ) : (
                <div className="label flex size-full items-center justify-center text-ink-faint">no photo</div>
              )}
            </div>
            <div>
              <p className="label text-ink-faint">
                {r.type} · {new Date(r.created_at).toLocaleString()} · {r.year || 'no year'} · {r.location || 'no place'}
              </p>
              <p className="headline mt-2 text-2xl">{r.title}</p>
              <p className="mt-2 whitespace-pre-wrap text-sm leading-relaxed text-ink-soft">{r.description}</p>
              <p className="mt-3 text-sm">
                <strong>{r.name}</strong> · <span className="text-ink-soft">{r.contact}</span> · {r.credit_name ? 'credit by name' : 'no name credit'}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {r.storage_path && (
                  <button disabled={busy} onClick={() => publishToGallery(r)} className={`${btn} bg-lime`}>Publish to gallery ↗</button>
                )}
                {r.status !== 'approved' && <button disabled={busy} onClick={() => setRowStatus(r.id, 'approved')} className={`${btn} bg-coal text-bone`}>Mark approved</button>}
                {r.status !== 'rejected' && <button disabled={busy} onClick={() => setRowStatus(r.id, 'rejected')} className={`${btn} border border-ink/20`}>Reject</button>}
                {r.status !== 'pending' && <button disabled={busy} onClick={() => setRowStatus(r.id, 'pending')} className={`${btn} border border-ink/20`}>Back to pending</button>}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

/* ——— Generic table editor ——— */
type AnyRow = Record<string, unknown> & { id?: string };

function Editor({ cfg }: { cfg: TableConfig }) {
  const [rows, setRows] = useState<AnyRow[]>([]);
  const [editing, setEditing] = useState<AnyRow | null>(null);
  const [saving, setSaving] = useState(false);
  const [err, setErr] = useState('');

  const load = useCallback(async () => {
    const { data } = await supabase!.from(cfg.table).select('*').order(cfg.order, { ascending: cfg.ascending ?? false });
    setRows((data as AnyRow[]) ?? []);
  }, [cfg]);
  useEffect(() => {
    setEditing(null);
    load();
  }, [load]);

  async function save(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSaving(true);
    setErr('');
    try {
      const d = new FormData(e.currentTarget);
      const row: AnyRow = {};
      for (const f of cfg.fields) {
        if (f.type === 'image') {
          const file = d.get(f.key) as File | null;
          if (file && file.size > 0) row[f.key] = await uploadImage(file, cfg.table);
          else if (editing?.[f.key]) row[f.key] = editing[f.key];
          else if (f.required) throw new Error(`${f.label} is required`);
        } else if (f.type === 'checkbox') row[f.key] = d.get(f.key) === 'on';
        else if (f.type === 'number') row[f.key] = Number(d.get(f.key));
        else row[f.key] = String(d.get(f.key) ?? '') || null;
      }
      const q = editing?.id ? supabase!.from(cfg.table).update(row).eq('id', editing.id) : supabase!.from(cfg.table).insert(row);
      const { error } = await q;
      if (error) throw error;
      setEditing(null);
      load();
    } catch (x) {
      setErr(x instanceof Error ? x.message : String(x));
    } finally {
      setSaving(false);
    }
  }

  async function remove(r: AnyRow) {
    if (!r.id || !window.confirm('Delete this item permanently? This cannot be undone.')) return;
    await supabase!.from(cfg.table).delete().eq('id', r.id);
    load();
  }

  const listed = cfg.fields.filter((f) => f.list);

  return (
    <div>
      <div className="flex items-center justify-between">
        <p className="label text-ink-faint">{rows.length} items</p>
        <button onClick={() => setEditing({ published: true })} className={`${btn} bg-lime`}>+ New</button>
      </div>

      {editing && (
        <form onSubmit={save} className="mt-6 grid gap-4 rounded-2xl bg-paper p-6 md:grid-cols-2">
          {cfg.fields.map((f) => (
            <label key={f.key} className={`block ${f.type === 'textarea' ? 'md:col-span-2' : ''}`}>
              <span className="label text-ink-faint">{f.label}{f.required ? ' *' : ''}</span>
              <div className="mt-1.5">
                {f.type === 'textarea' ? (
                  <textarea name={f.key} rows={4} defaultValue={(editing[f.key] as string) ?? ''} required={f.required} className={input} />
                ) : f.type === 'select' ? (
                  <select name={f.key} defaultValue={(editing[f.key] as string) ?? f.options?.[0]?.value} className={input}>
                    {f.options?.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
                  </select>
                ) : f.type === 'checkbox' ? (
                  <input type="checkbox" name={f.key} defaultChecked={Boolean(editing[f.key])} className="accent-ink" />
                ) : f.type === 'image' ? (
                  <div className="flex items-center gap-3">
                    {typeof editing[f.key] === 'string' && <img src={publicPhotoUrl(editing[f.key] as string)} alt="" className="size-12 rounded object-cover" />}
                    <input type="file" name={f.key} accept="image/*" className="text-sm" />
                  </div>
                ) : (
                  <input name={f.key} type={f.type ?? 'text'} defaultValue={(editing[f.key] as string) ?? ''} required={f.required} className={input} />
                )}
              </div>
            </label>
          ))}
          {err && <p className="text-sm text-laterite md:col-span-2">{err}</p>}
          <div className="flex gap-2 md:col-span-2">
            <button disabled={saving} className={`${btn} bg-coal text-bone`}>{saving ? 'Saving…' : 'Save'}</button>
            <button type="button" onClick={() => setEditing(null)} className={`${btn} border border-ink/20`}>Cancel</button>
          </div>
        </form>
      )}

      <div className="mt-6 overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="label text-ink-faint">
              {listed.map((f) => <th key={f.key} className="border-b border-ink/15 py-2 pr-4 font-normal">{f.label}</th>)}
              <th className="border-b border-ink/15" />
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id} className="border-b border-ink/10 align-middle">
                {listed.map((f) => (
                  <td key={f.key} className="py-2.5 pr-4">
                    {f.type === 'image' && r[f.key] ? (
                      <img src={publicPhotoUrl(r[f.key] as string)} alt="" className="size-12 rounded object-cover" />
                    ) : f.type === 'checkbox' ? (
                      r[f.key] ? '✓' : '—'
                    ) : (
                      String(r[f.key] ?? '')
                    )}
                  </td>
                ))}
                <td className="py-2.5 text-right whitespace-nowrap">
                  <button onClick={() => setEditing(r)} className={`${btn} border border-ink/20`}>Edit</button>{' '}
                  <button onClick={() => remove(r)} className={`${btn} text-laterite`}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ——— Shell ——— */
export default function Admin() {
  const [session, setSession] = useState<Session | null>(null);
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [tab, setTab] = useState('submissions');

  useEffect(() => {
    const meta = document.createElement('meta');
    meta.name = 'robots';
    meta.content = 'noindex, nofollow';
    document.head.appendChild(meta);
    document.title = 'Admin · edakkom.com';
    return () => meta.remove();
  }, []);

  useEffect(() => {
    if (!supabase) return;
    supabase.auth.getSession().then(({ data }) => setSession(data.session));
    const { data } = supabase.auth.onAuthStateChange((_e, s) => setSession(s));
    return () => data.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!supabase || !session) return setIsAdmin(null);
    supabase.rpc('is_admin').then(({ data }) => setIsAdmin(Boolean(data)));
  }, [session]);

  return (
    <section className="min-h-screen bg-bone pt-28 pb-24">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Label no="⚙" className="text-ink-faint">edakkom.com</Label>
            <h1 className="headline mt-3 text-5xl">Admin dashboard</h1>
          </div>
          {session && (
            <div className="flex items-center gap-3 text-sm">
              <span className="text-ink-soft">{session.user.email}</span>
              <button onClick={() => supabase!.auth.signOut()} className={`${btn} border border-ink/20`}>Sign out</button>
            </div>
          )}
        </div>

        <div className="mt-10">
          {!supabase ? (
            <div className="max-w-2xl rounded-2xl bg-paper p-8 leading-relaxed">
              <p className="headline text-2xl">Connect Supabase to enable the dashboard</p>
              <ol className="mt-4 list-decimal space-y-2 pl-5 text-ink-soft">
                <li>Create a free project at supabase.com.</li>
                <li>Open SQL Editor and run <code>supabase/schema.sql</code> from this project.</li>
                <li>Copy <code>.env.example</code> to <code>.env</code> and paste the Project URL and anon key.</li>
                <li>Create your admin user in Authentication → Users, then add it to the <code>admins</code> table (see README).</li>
                <li>Rebuild and redeploy the site.</li>
              </ol>
            </div>
          ) : !session ? (
            <Login />
          ) : isAdmin === false ? (
            <p className="rounded-2xl bg-laterite/10 p-6 text-laterite">This account is signed in but is not in the <code>admins</code> table.</p>
          ) : isAdmin === null ? (
            <p className="text-ink-faint">Checking access…</p>
          ) : (
            <>
              <nav className="no-scrollbar flex gap-2 overflow-x-auto border-b border-ink/15 pb-4">
                {[{ id: 'submissions', title: 'Submissions' }, ...TABLES.map((x) => ({ id: x.table, title: x.title }))].map((x) => (
                  <button key={x.id} onClick={() => setTab(x.id)} className={`${btn} shrink-0 border ${tab === x.id ? 'border-ink bg-ink text-bone' : 'border-ink/20'}`}>
                    {x.title}
                  </button>
                ))}
              </nav>
              <div className="mt-8">{tab === 'submissions' ? <Submissions /> : <Editor cfg={TABLES.find((x) => x.table === tab)!} />}</div>
            </>
          )}
        </div>
      </Container>
    </section>
  );
}
