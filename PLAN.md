# PLAN — Portfolio → Client-Facing Sales Page (UI + 3D)

Repo: https://github.com/dannyysaputra/portofolio
Live: https://portofolio-danny.vercel.app/
Stack: Next.js (App Router) + Tailwind, content in `/data`

## Goal

Turn the portfolio from a job-seeker site into a sales page. A non-technical business owner or startup founder should understand within 5 seconds what I can do for them, trust me, and contact me. The UI must look distinctive and premium, with one signature 3D hero.

## Ground rules

- Work phase by phase. **Stop at the end of every phase**, show results, and wait for my approval.
- Never invent metrics, clients, or testimonials. Use only the facts in this file and what already exists in `/data`.
- Copy is in English, plain language, no jargon in headlines.
- Keep the existing stack. No new dependencies unless this plan names them or you justify them first.
- Never commit or push to `main` directly. Never force-push.

## Context about me

- Danny Suggi Saputra
- Product Engineer, Solve Education! (Apr 2026 – Present)
- Backend Developer, part-time, Studyo.io (Jan 2026 – Present)
- Informatics Engineering graduate, UIN Sunan Gunung Djati Bandung (Aug 2022 – Jul 2026, GPA 3.87/4.00)
- Positioning: **"I help businesses replace manual work with AI automation and reliable backend systems, delivered fast using an agentic AI workflow."**

---

## Phase 0 — Sync the repo (do this first)

- [ ] If the repo is not on this machine: `git clone https://github.com/dannyysaputra/portofolio.git` and `cd` into it.
- [ ] Run `git status`. If there are uncommitted changes, **stop and ask me** what to do with them. Do not stash, discard, or overwrite them on your own.
- [ ] Confirm the default branch with `git remote show origin`, check it out, then `git pull origin <default-branch>`.
- [ ] Create a working branch: `git checkout -b feat/sales-portfolio`.
- [ ] `npm install`, then `npm run build` to confirm the baseline builds before any change. Report any existing errors.
- [ ] Read `app/`, `components/`, and `data/`, and give me a short summary of the current structure, plus the React and Next.js versions from `package.json`.
- [ ] Copy this file into the repo root as `PLAN.md` if it is not already there.

**Checkpoint:** structure summary + baseline build status.

---

## Phase 1 — Content & structure

Restructure the homepage into these sections, in this order:

1. **Hero**
   - Outcome headline + one-line subhead.
   - Primary CTA: "Chat on WhatsApp" (use a `WHATSAPP_URL` constant in `/data`, placeholder for now).
   - Secondary CTA: "See results".
   - Move "Download CV" to the footer as a small link.

2. **Proof bar** (numbers with context)
   - "80% less manual content work" (Arabicara)
   - "50% lower system latency" (Kafka notifications)
   - "40% faster admin workflows"
   - "Top 100, Google Solution Challenge 2024"

3. **Services** (3 cards, each: client problem → what they get → real example)
   - **AI & Workflow Automation** (n8n, Python, LLM/RAG, OCR, TTS). Examples: Arabicara TTS pipeline; automated company-research pipeline replacing ~50 manual lookups per day.
   - **Backend, APIs & Integrations** (Node.js, FastAPI, PostgreSQL, Kafka). Examples: in-app purchase and subscription pipeline; automated payouts via Wise API; BigQuery admin analytics.
   - **MVPs & Internal Tools** (Next.js, React, Laravel). Examples: hospital information system; Kasep AI recipe app deployed on AWS.

4. **Case studies**
   - Rewrite every project card and `/projects/[slug]` page as **Problem → Solution → Result**, non-technical language first.
   - Move stack and architecture details into a collapsible "Technical details" block. Rename "Architecture Hint".
   - Add two new case studies, written generically with no confidential internal details: the Studyo payment/payout work, and the lead-discovery automation.

5. **How I work**
   - Four steps: Discovery call → Scoped proposal → Weekly build updates → Handover & support.
   - Short block "Why I ship faster": I orchestrate multiple AI coding agents (Claude Code, Codex) under a lead agent for planning, implementation, review, and testing, while I own architecture and quality.

6. **Credibility**
   - Awards and RHCSA.
   - `Testimonials` component reading `/data/testimonials.ts`, **hidden when the array is empty**.

7. **FAQ + final CTA**
   - FAQ: timeline, pricing approach, how we communicate, what happens after launch, working with existing codebases.
   - Final CTA with WhatsApp and email.

Data and copy fixes:

- [ ] Add Solve Education! (Product Engineer, Apr 2026 – Present) and Studyo.io (Backend Developer, part-time, Jan 2026 – Present) to the experience data.
- [ ] Remove the Dicoding cohort from "Production Experience".
- [ ] AI Screening Service and Arabicara currently share `projek_forecast.png`. Give each project its own image; if none exists, create a clean placeholder graphic and list the real screenshots I need to supply.
- [ ] Metadata: title "Danny Suggi Saputra — AI Automation & Backend Engineer", matching description and OG tags.
- [ ] Replace "open to roles" copy with "available for freelance and contract projects".

**Checkpoint:** commit `feat: sales-page content and structure`, show the diff summary and a screenshot of the full page.

---

## Phase 2 — Design system

- [ ] Write `DESIGN.md` first (tokens and rules), then implement.
- [ ] Tokens as CSS variables + Tailwind theme. Shared components: `Section`, `Button`, `Card`, `Stat`, `Tag`. No one-off styles.

Direction:

- **Dark-only.** Off-black background, bone-white text.
- **One accent** (signal orange), used only for CTAs and result numbers.
- **Fonts via `next/font`:** Instrument Serif for headlines, Geist for body, Geist Mono for numbers and technical labels.

Rules:

- No purple/blue gradients, no glassmorphism, no three identical icon cards, no emoji as icons, not everything centered, no decorative blobs.
- One clear headline per section, generous whitespace, max ~65ch line length, consistent vertical rhythm.
- WCAG AA contrast, visible focus rings, semantic headings, alt text.
- `next/image` for all images.

Order of work:

- [ ] Build the hero first, with a static placeholder where the 3D scene will go.
- [ ] Show me screenshots at 375px and 1440px. **Wait for approval.**
- [ ] Apply the system to every other section.

**Checkpoint:** commit `feat: design system`, screenshots at 375 / 768 / 1440px.

---

## Phase 3 — 3D & motion

### Signature hero scene

Concept: floating, scattered blocks (manual chaos) assemble, driven by scroll progress, into an ordered pipeline: one central "lead" node dispatching to several worker nodes, with light pulses travelling along the connections.

- Idle state: slow drift + subtle pointer parallax.
- Colors come from the design tokens. Accent only on the pulses.

Implementation requirements:

- [ ] Check the React version and install the matching React Three Fiber major (v8 for React 18, v9 for React 19) plus `three` and `@react-three/drei`. Pin exact versions.
- [ ] The `Canvas` lives in a `'use client'` component, loaded through a client wrapper using `next/dynamic` with `ssr: false`. Never call `ssr: false` from a Server Component.
- [ ] Headline, subhead, and CTAs stay as real HTML next to the canvas, never inside it. The 3D must not be the LCP element.
- [ ] Lazy-load the scene after first paint, with a static poster image as placeholder.
- [ ] Pause rendering when the canvas is offscreen or the tab is hidden.
- [ ] Cap DPR at 1.5. Use instanced meshes. No post-processing unless it stays within budget.
- [ ] Fallbacks: `prefers-reduced-motion` → static poster. No WebGL or low-end device → static poster. Mobile → simplified scene (fewer instances, no parallax).
- [ ] Budget: 3D chunk loads only on the homepage, target under ~200 kB gzipped for the 3D code.

### Lightweight 3D touches (CSS only, no WebGL)

- [ ] Pointer-tilt on case study cards using perspective transforms.
- [ ] Depth reveal on stat numbers.
- [ ] Subtle scroll reveals on sections.
- [ ] All of the above disabled under `prefers-reduced-motion`. No layout shift.

**Checkpoint:** commit `feat: 3d hero and motion`, a short screen recording or screenshot sequence of the scroll animation, plus bundle size of the 3D chunk.

---

## Phase 4 — QA & release

- [ ] Screenshots at 375 / 768 / 1440px.
- [ ] Mobile: sticky bottom "Chat on WhatsApp" CTA, tap targets ≥ 44px, no horizontal scroll.
- [ ] `npm run build` and lint pass with no errors.
- [ ] Lighthouse (mobile): Performance ≥ 90, Accessibility ≥ 95, no layout shift from the 3D load. Fix what fails.
- [ ] New OG image matching the design.
- [ ] Click tracking on the WhatsApp and email CTAs.
- [ ] Remove any temporary routes or debug code.
- [ ] Push the branch: `git push -u origin feat/sales-portfolio`, and open a pull request to the default branch. **Do not merge.** I will review the Vercel preview and merge myself.

**Final report:** before/after screenshots, Lighthouse scores, and the placeholder checklist below.

---

## Placeholders I (Danny) must supply before launch

- [ ] `WHATSAPP_URL`
- [ ] Real screenshot or diagram for each project
- [ ] 1–2 real testimonials (name, role, company, quote)
- [ ] Confirmation that the Studyo and lead-discovery case studies are OK to publish as written
