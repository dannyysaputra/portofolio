# 05_BUILD_SPEC.md

## Output yang harus dibangun
Agent harus menghasilkan implementasi portfolio web, bukan hanya konsep.

## Stack wajib
- Next.js
- TypeScript
- Tailwind CSS
- App Router
- reusable components
- responsive layout

## Struktur proyek yang disarankan

```txt
app/
  page.tsx
  projects/
    ai-screening-service/page.tsx
    arabicara/page.tsx
    kasep/page.tsx
components/
  layout/
  sections/
  cards/
  ui/
data/
  projects.ts
  profile.ts
lib/
  utils.ts
public/
  images/
```

## Komponen minimum
### Layout
- Navbar
- Footer
- Page container
- Section wrapper

### Homepage sections
- HeroSection
- ProofStrip
- FeaturedProjectsSection
- ExperienceHighlightsSection
- AboutSection
- TechnicalStrengthsSection
- TrustSignalsSection
- ContactSection

### Reusable project components
- FeaturedProjectCard
- ProjectHero
- ProjectQuickFacts
- ProjectSection
- MetricCard
- CapabilityGroup
- TrustItem

## SEO minimum
- metadata title
- metadata description
- Open Graph basic
- semantic headings
- accessible link labels

## Responsiveness
- mobile first
- desktop layout boleh editorial
- mobile jangan kehilangan hierarchy
- CTA harus mudah dijangkau

## Content behavior
- data project harus disimpan di file data terpisah
- mudah diedit tanpa bongkar layout
- gunakan placeholder yang jelas kalau asset belum ada

## Asset placeholder rules
Jika screenshot asli belum ada:
- gunakan framed placeholder block
- tampilkan judul visual placeholder
- jangan pakai stock image generik

## CTA behavior
CTA utama:
- View Case Studies
- Download CV
- GitHub
- Contact Me

CTA project:
- View Case Study
- View Code jika tersedia
- Live Demo jika tersedia

## Build priorities
1. global layout
2. homepage hero
3. proof strip
4. featured project cards
5. case study pages
6. technical strengths
7. trust signals
8. contact

## Hal yang harus dipastikan
- typography hierarchy terasa kuat
- project cards terasa seperti editorial preview
- spacing antar section tidak padat
- copy tidak generik
- halaman case study terasa teknis dan evidence-based
