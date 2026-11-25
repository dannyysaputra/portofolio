# DESIGN — Danny Suggi Saputra, sales page

The single source of truth for visual decisions. Tokens live in `app/globals.css` (`@theme`), shared components in `components/ui/`. If a style is not expressible with these tokens and components, change this file first.

## Direction

A dark, editorial page for a serious engineer. Calm, warm off-black surfaces, bone-white type, and one signal-orange accent that marks only two things: **actions** and **results**. Serif headlines give it a human, premium voice; mono labels carry the technical texture.

## Tokens

### Color (dark only)

| Token | Value | Use | Contrast on `bg` |
|---|---|---|---|
| `bg` | `#0e0d0b` | Page background | — |
| `surface` | `#171512` | Raised blocks (cards, details) | — |
| `surface-2` | `#1f1d19` | Hover / pressed surface | — |
| `line` | `#2e2b26` | Hairlines, dividers, card borders | decorative |
| `line-strong` | `#4a453d` | Secondary button border | decorative |
| `fg` | `#ece6da` | Primary text (bone) | 15.6 : 1 |
| `muted` | `#a59e91` | Body copy, secondary text | 7.3 : 1 |
| `subtle` | `#8a8378` | Mono labels, metadata | 5.2 : 1 |
| `accent` | `#ff5b1f` | CTAs and result numbers **only** | 6.3 : 1 |
| `accent-hover` | `#ff7240` | Primary button hover only | — |
| `accent-fg` | `#0e0d0b` | Text on accent backgrounds | 6.3 : 1 |

All text pairs pass WCAG AA (>= 4.5 : 1), including on `surface`. No other hues. No gradients.

### Type

| Role | Font | Size | Notes |
|---|---|---|---|
| Display (h1) | Instrument Serif 400 | `clamp(2.75rem, 7vw, 5.75rem)` / 1.0 | One per page |
| Section title (h2) | Instrument Serif 400 | `clamp(2.25rem, 4.6vw, 3.5rem)` / 1.05 | One per section |
| Heading (h3) | Geist 500 | 1.25rem / 1.3 | |
| Body | Geist 400 | 1.0625rem / 1.65 | Max 65ch |
| Small | Geist 400 | 0.875rem / 1.55 | |
| Label | Geist Mono 500 | 0.75rem, uppercase, tracking 0.08em | Eyebrows, field labels |
| Number | Geist Mono 500 | `clamp(2.25rem, 4vw, 3rem)` | Result numbers in `accent` |

Fonts load through `next/font/google` with `display: swap` and CSS variables `--font-serif`, `--font-sans`, `--font-mono`.

### Space and layout

- 4px base. Common steps: 8, 12, 16, 24, 32, 48, 64, 96, 128.
- Container: max 72rem, side gutter 1.25rem (mobile) / 2rem (>= 768px).
- Section rhythm: `padding-block` 4.5rem mobile, 7rem desktop. Sections are separated by a `line` hairline, never by background color changes.
- 12-column grid on desktop. Section headers sit in the left columns; content starts beside or below them. Layout is **left-aligned**; nothing is centered except the poster art.
- Line length: body text max `65ch`.

### Shape and depth

- Radius: 2px for tags, 6px for buttons, 10px for cards and media.
- No shadows, no blur, no glass. Depth comes from `surface` steps and hairlines.

## Components (`components/ui/`)

| Component | Contract |
|---|---|
| `Section` | `id`, `index` ("01"), `eyebrow`, `title`, optional `intro`, children. Renders the hairline, the mono eyebrow, one `h2`. |
| `Button` | `variant: primary \| secondary \| ghost`, `href`, `external`. Primary = accent background + `accent-fg` text. Min height 44px. |
| `Card` | Surface block with `line` border, 10px radius, 24-32px padding. Content-agnostic. |
| `Stat` | `value`, `label`, `context`. Value in mono accent, label in `fg`, context in mono `subtle`. |
| `Tag` | Small mono label with `line` border; for stacks and categories. |

Rule: sections compose these; no one-off colors, radii, or font declarations inside sections.

## Rules

- **Do not:** purple/blue gradients, glassmorphism, three identical icon cards, emoji as icons, centered-everything layouts, decorative blobs, drop shadows.
- **Accent budget:** orange appears only on primary buttons, result numbers/headlines, focus rings, and the 3D pulses. Never on body text, borders, or decoration.
- One clear headline per section. Whitespace beats more content.
- Icons (lucide) are functional only (arrows, external link, chat), always `aria-hidden` next to a text label.

## Accessibility

- WCAG AA contrast for all text (see table).
- Visible focus: 2px `accent` outline, 3px offset, on every interactive element (`:focus-visible`).
- Semantic headings: one `h1` per page, one `h2` per section, `h3` inside.
- All images through `next/image` with meaningful `alt`; decorative art is `aria-hidden`.
- Tap targets >= 44 x 44px.
- Motion respects `prefers-reduced-motion` (Phase 3).
