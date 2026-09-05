# CodeCave Ads Agency — Website

This is the codebase for the CodeCave Ads Agency billboard marketplace, built
with Next.js + Tailwind CSS, based on the Stitch UI/UX designs and the
approved site tree.

## What's in this Stage 1 delivery

- A working, deployable Next.js project — every page in the sitemap exists as
  a real route and the site builds with **zero errors**.
- The unified design system (colors, spacing, fonts) pulled from the Stitch
  export's Tailwind config — confirmed consistent across all 13 designed
  screens, so nothing needed reconciling there.
- Fully built: **Homepage**, shared **Public Header/Footer**, and the shared
  **Dashboard Shell** (sidebar + top bar) used by Customer, Owner, and Admin
  areas.
- One fix to a real design inconsistency found in the Stitch export: the
  "Billboard Detail" screen had been generated using the authenticated
  dashboard's sidebar layout, even though it's a **public** page any visitor
  can view. It now correctly uses the public header/footer, consistent with
  Browse Billboards and the Homepage.
- Every other page from the sitemap exists as a placeholder screen (labeled
  with which stage will build it and which Stitch design file it comes from),
  so the whole site skeleton is live and clickable today.

## The stages ahead

| Stage | What gets built | Depends on |
|---|---|---|
| 1 ✅ | Project scaffold, design system, homepage, shared layout shells, all routes stubbed | — |
| 2 ✅ | Public pages: Browse Billboards, Billboard Detail, How It Works, About, Contact, FAQ, Sign Up/Login/Forgot Password, Terms/Privacy/Pricing | Stage 1 |
| 3 | Customer dashboard: bookings, checkout, messages, saved, reviews, profile | Stage 1 |
| 4 | Owner dashboard: listings wizard, bookings, earnings, KYC | Stage 1 |
| 5 | Admin dashboard: approval queue, payments/escrow, disputes, audit log | Stage 1 |
| 6 | Supabase backend: database schema, auth, file storage, and wiring every screen to real data | Stages 2–5 |
| 7 | Payments (Paystack/Flutterwave escrow flow), notifications, deployment polish | Stage 6 |

### What's new in Stage 2

- **Browse Billboards** (`/billboards`) — filter sidebar (state, type, price,
  availability), sort dropdown, and a responsive results grid.
- **Billboard Detail** (`/billboards/[id]`) — photo gallery, specs panel,
  pricing/booking panel, and a reviews placeholder section.
- **4 sample billboard listings** (`lib/mock-billboards.ts`) so these pages
  have something real to render — this file is the single place Stage 6 will
  swap for live Supabase data.
- **Images**: the AI-generated billboard photo and headshot from your Stitch
  design package are now used as placeholder imagery across these pages
  (`public/images/`), since no real owner photos exist yet.
- **How It Works**, **About**, **Contact** (with a working-styled form, not
  yet wired to send anywhere), and **FAQ** (interactive accordion).
- **Sign Up** (single page, Customer/Owner toggle), **Log In**, **Forgot
  Password**.
- **Terms of Service**, **Privacy Policy** (both flagged as legal drafts —
  need a lawyer's review before launch), and **Pricing** (commission
  transparency page, written at a general level since your questionnaire
  answer on whether to publish the exact 10–20% rate was unclear — flag this
  for me to confirm).


We build and review one stage at a time so you can see progress continuously
rather than waiting for one giant handoff.

## Updating your live site (Stage 2 onward)

Since your GitHub repo and Vercel deployment are already connected, you don't
need to repeat the Step 1/2 setup below. Just:

1. On your GitHub repo page, delete the old files and drag in everything
   from this new zip (unzip it first) — or use **Add file → Upload files**
   and let it overwrite the changed ones.
2. Commit the changes.
3. Vercel will automatically detect the update and redeploy — check your
   Vercel dashboard in a minute or two, then refresh your live URL.

*(If re-uploading the whole project each time feels tedious, this is the
point where switching to GitHub Desktop is worth it — say the word and I'll
walk you through it.)*

## First-time setup (already done — kept here for reference)


### Step 1: Put this code on GitHub
1. Go to [github.com](https://github.com) and create a free account if you
   don't have one.
2. Click the **+** icon (top right) → **New repository**.
3. Name it `codecave-ads-agency`, keep it **Private**, don't add a README
   (we already have one), click **Create repository**.
4. On the new repo's page, click **uploading an existing file** and drag in
   everything from this project folder (unzip it first). Commit the upload.

*(If you'd rather not drag-and-drop hundreds of files: tell me and I'll walk
you through installing GitHub Desktop instead, which is easier for ongoing
updates once we're past Stage 1.)*

### Step 2: Deploy it with Vercel
1. Go to [vercel.com](https://vercel.com) and sign up using your **GitHub**
   account (this links them automatically).
2. Click **Add New → Project**.
3. Select the `codecave-ads-agency` repo you just created.
4. Leave all settings on their defaults (Vercel auto-detects Next.js) and
   click **Deploy**.
5. In a couple of minutes you'll get a live URL like
   `codecave-ads-agency.vercel.app` — that's your real, live website, hosted
   for free at this stage.

Every time we update the code on GitHub going forward, Vercel automatically
redeploys the new version — you won't need to repeat this step.

### Step 3: Connect Supabase (when we reach Stage 6)
When we get to the backend stage, you'll:
1. Create a free project at [supabase.com](https://supabase.com).
2. Copy three values from your Supabase project's **Settings → API** page
   into a file we'll prepare called `.env.local` (a template already exists
   at `.env.example` in this project).
3. Paste those same three values into Vercel's **Project → Settings →
   Environment Variables** page.

I'll give you the exact fields to copy when we get there — no coding
required on your end, just copy-pasting values between two websites.

## Local preview (optional)

If at any point you or a developer wants to preview the site on a computer
before it's on Vercel:
```
npm install
npm run dev
```
Then open http://localhost:3000.
