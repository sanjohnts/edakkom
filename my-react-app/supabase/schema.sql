-- ════════════════════════════════════════════════════════════════
--  edakkom.com — Supabase database setup
--  Run this whole file once in Supabase → SQL Editor → New query.
--  Safe to re-run: it uses IF NOT EXISTS / OR REPLACE where possible.
-- ════════════════════════════════════════════════════════════════

-- ——— Admins ———————————————————————————————————————————————
create table if not exists public.admins (
  user_id uuid primary key references auth.users (id) on delete cascade,
  created_at timestamptz not null default now()
);
alter table public.admins enable row level security;

create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (select 1 from public.admins where user_id = auth.uid());
$$;
grant execute on function public.is_admin() to anon, authenticated;

drop policy if exists "admins read admins" on public.admins;
create policy "admins read admins" on public.admins for select using (public.is_admin());

-- ——— Public submissions (photos, stories, corrections) ————————————
create table if not exists public.submissions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  type text not null default 'photo',
  name text not null,
  contact text not null,            -- private: never exposed publicly
  title text not null,
  description text not null,
  year text,
  location text,
  credit_name boolean not null default true,
  storage_path text,
  language text,
  status text not null default 'pending' check (status in ('pending', 'approved', 'rejected')),
  admin_note text
);
alter table public.submissions enable row level security;

drop policy if exists "anyone can submit" on public.submissions;
create policy "anyone can submit" on public.submissions
  for insert to anon, authenticated
  with check (status = 'pending' and admin_note is null and char_length(description) <= 10000);

drop policy if exists "admins manage submissions" on public.submissions;
create policy "admins manage submissions" on public.submissions
  for all using (public.is_admin()) with check (public.is_admin());

-- ——— Published content tables ——————————————————————————————
create table if not exists public.gallery_items (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  storage_path text not null,
  title_en text not null,
  title_ml text,
  caption_en text,
  caption_ml text,
  category text not null default 'historical'
    check (category in ('historical','village','education','religious','festivals','people','development','nature')),
  era text not null default 'old' check (era in ('old', 'new')),
  year text,
  credit text,
  published boolean not null default true,
  submission_id uuid references public.submissions (id) on delete set null
);

create table if not exists public.news_posts (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  date date not null default current_date,
  tag_en text,
  tag_ml text,
  title_en text not null,
  title_ml text,
  body_en text not null,
  body_ml text,
  photo_url text,
  published boolean not null default true
);

create table if not exists public.timeline_events (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  sort_year integer not null,
  when_label text not null,
  title_en text not null,
  title_ml text,
  body_en text not null,
  body_ml text,
  source text,
  photo_url text,
  published boolean not null default true
);

create table if not exists public.people (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  role_en text,
  role_ml text,
  story_en text,
  story_ml text,
  photo_url text,
  consent_confirmed boolean not null default false,
  published boolean not null default false,
  -- a profile can only be published once consent is recorded
  constraint people_consent_before_publish check (not published or consent_confirmed)
);

do $$
declare t text;
begin
  foreach t in array array['gallery_items', 'news_posts', 'timeline_events', 'people'] loop
    execute format('alter table public.%I enable row level security', t);
    execute format('drop policy if exists "public reads published" on public.%I', t);
    execute format('create policy "public reads published" on public.%I for select using (published or public.is_admin())', t);
    execute format('drop policy if exists "admins write" on public.%I', t);
    execute format('create policy "admins write" on public.%I for all using (public.is_admin()) with check (public.is_admin())', t);
  end loop;
end $$;

-- ——— Photo storage ———————————————————————————————————————————
-- Public bucket: published photos are served by URL. Uploads are limited
-- to images up to 10 MB. Visitors may only upload into submissions/.
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('photos', 'photos', true, 10485760, array['image/jpeg','image/png','image/webp','image/heic','image/heif','image/gif'])
on conflict (id) do update
  set public = excluded.public,
      file_size_limit = excluded.file_size_limit,
      allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "visitors upload submissions" on storage.objects;
create policy "visitors upload submissions" on storage.objects
  for insert to anon, authenticated
  with check (bucket_id = 'photos' and (storage.foldername(name))[1] = 'submissions');

drop policy if exists "admins manage photos" on storage.objects;
create policy "admins manage photos" on storage.objects
  for all using (bucket_id = 'photos' and public.is_admin())
  with check (bucket_id = 'photos' and public.is_admin());

-- ——— Make yourself an admin ————————————————————————————————————
-- 1. Supabase → Authentication → Users → Add user (email + password).
-- 2. Then run (with your email):
--
--   insert into public.admins (user_id)
--   select id from auth.users where email = 'you@example.com';
