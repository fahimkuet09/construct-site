# Meridian Construct

A premium civil engineering / infrastructure contractor website, built to the brief in
[CLAUDE.md](CLAUDE.md).

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Radix UI · GSAP ·
Framer Motion · Lenis · Swiper · React Leaflet · LightGallery · React Hook Form + Zod.

---

## Getting started

```bash
npm install
npm run dev          # http://localhost:3000
```

| Script | Purpose |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` | Production build (33 static routes) |
| `npm start` | Serve the production build |
| `npm run lint` | ESLint (Next 16 flat config) |
| `npm run typecheck` | `tsc --noEmit` |
| `node scripts/generate-assets.mjs` | Regenerate the placeholder image set |

---

## Structure

```
src/
  app/                     Routes — all statically prerendered
    page.tsx               Home (14 sections)
    about/  services/[slug]/  projects/[slug]/  careers/  contact/  news/[slug]/
    not-found.tsx          404
  components/
    layout/                Header (mega menu, search, language, drawer), mega footer
    sections/              Page-level composed sections
    shared/                Cards, forms, gallery, before/after, page hero, map
    ui/                    Primitives — button, badge, accordion, tabs, dialog, form
    motion/                Lenis, Reveal, Counter, Magnetic, Parallax, ScrollProgress
  data/                    Typed content (projects, services, news, jobs, offices…)
  hooks/  lib/  types/
```

**Content lives in `src/data/`.** Every page reads from those typed modules, so copy,
projects, jobs and offices can be edited without touching a component. Swapping the data
layer for a CMS means replacing those exports.

---

## Design system

Tokens are defined once in [`src/app/globals.css`](src/app/globals.css) under `@theme`,
and everything consumes them.

- **Colour** — brand palette exactly as briefed. Every foreground/background pair used for
  text passes WCAG AA (verified; the one green that failed on white was split into
  `--color-success-700` for text and `--color-success-400` for badges on dark imagery).
- **Type** — Manrope (headings) / Inter (body) via `next/font`. Fluid clamp scale hitting
  the briefed 72 / 56 / 40 / 18 px desktop targets and staying readable at 375 px.
- **Layout** — 1440 px shell, 120 px section rhythm (compressed on small screens), 32 px
  grid gutter, 20 px cards, 16 px buttons.
- **Signature** — a blueprint grid texture, hairline datum rules and editorial `01/02`
  numbering carry the "industrial luxury" register instead of gradients or glassmorphism.

## Motion

GSAP ScrollTrigger is synchronised with Lenis smooth scroll. Framer Motion handles
reveals, staggers, parallax, counters, magnetic buttons and page transitions.

`prefers-reduced-motion` is honoured throughout — Lenis does not mount, every reveal
renders in its final state, and the marquee stops. Horizontal reveal offsets degrade to
vertical below the `lg` breakpoint so nothing is pushed off a narrow viewport.

---

## Assets — placeholders

`public/` contains **189 generated SVG placeholders** plus a generated `hero.mp4` /
`hero.webm`. They are brand-coloured, structurally themed compositions (cable stays,
tunnel rings, quay walls, cranes) sized to the exact aspect ratios the layouts expect —
so the design can be reviewed without broken images.

**Replace them with photography before launch.** Keep the same paths and nothing else has
to change. Re-run `node scripts/generate-assets.mjs` to regenerate.

Because these are SVGs, `next.config.ts` sets `images.dangerouslyAllowSVG` with a strict
CSP. Once real raster photography is in place, that flag can be removed.

---

## Known scope notes

- **SEO layer is deliberately not built.** Descoped for this client demo — no JSON-LD,
  sitemap, robots, canonicals or OG/Twitter cards. Page-level `title`/`description`
  metadata is present. This is a half-day of work to add.
- **Forms are simulated.** The enquiry, application and newsletter forms validate fully
  (React Hook Form + Zod, inline errors, pending and success states) but no data leaves
  the browser. Each shows a visible "demo build" note. Wire to an endpoint in the
  `onSubmit` handlers.
- **The language switcher is presentational.** It shows five locales and remembers the
  selection, but no i18n routing or translation layer is wired up.
- **Video testimonials reuse the hero showreel** as a stand-in for client films.
- **Social brand icons are hand-authored SVGs** in `src/components/ui/social-icon.tsx`.
  The brief asked for Lucide only, but lucide-react v1 removed its brand icons, so
  LinkedIn / X / YouTube / Instagram are drawn to match Lucide's 24×24 grid. Every other
  icon on the site is Lucide.

## Verified

- 33 routes build and prerender statically; `tsc --noEmit` and ESLint both clean
  (2 remaining warnings are inherent to react-hook-form's `watch()` API).
- Zero console errors on every route at 375 / 768 / 1440 px.
- No horizontal scrolling on any route at any of those widths.
- One `<h1>` and one `<main>` per page, no heading-level skips, all interactive elements
  have accessible names, visible focus rings throughout, skip-to-content link.
