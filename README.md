# Universal Structural Steel

A premium website for **Universal Structural Steel Ltd.**, a Dhaka-based pre-engineered
steel building (PEB) company — "Concept to Construction."

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
| `npm run build` | Production build (27 static routes) |
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
    shared/                Cards, forms, gallery, page hero, map
    ui/                    Primitives — button, badge, accordion, tabs, dialog, form
    motion/                Lenis, Reveal, Counter, Magnetic, Parallax, ScrollProgress
  data/                    Typed content (projects, services, news, jobs, offices…)
  hooks/  lib/  types/
```

**Content lives in `src/data/`.** Every page reads from those typed modules, so copy,
projects, jobs and offices can be edited without touching a component. Swapping the data
layer for a CMS means replacing those exports.

### Business content

The site is built around real, publicly verifiable facts about Universal Structural
Steel Ltd.: founded 2017, Managing Director Engr. Md. Sultan Mahmud (B.Sc. Civil
Engineering, KUET), a Mohammadpur, Dhaka head office, and four building categories —
Industrial, Commercial, Residential & Other, and Agro-Based. The project portfolio lists
the company's real client names (Navana Pharmaceuticals, Amber Group, Soleman Khan Jute
Mills, and others), split between ongoing and handed-over work.

Where a fact isn't independently verifiable — precise contract values, exact project
years, ISO certifications, specific per-project engineering figures — the content is
written qualitatively (BNBC-compliant design, a 24-hour engineering turnaround, general
category-level engineering considerations) rather than invented. Testimonials are
representative feedback attributed by role and industry rather than to named individuals,
since no signed, publishable quotes were available to cite verbatim.

---

## Localisation — English & Bangla

English is the default. Bangla (বাংলা) is the only alternate, exposed as a segmented
toggle in the header rather than a dropdown, so the alternative is visible without a click.

- **State** — [`locale-provider.tsx`](src/components/locale-provider.tsx) reads the choice
  from `localStorage` through `useSyncExternalStore`, so it survives navigation and stays
  in sync across tabs. It also sets `<html lang>`, which drives the font swap and tells
  screen readers what they are reading.
- **Strings** — [`src/lib/i18n.ts`](src/lib/i18n.ts) holds both dictionaries side by side.
- **Type** — Manrope and Inter carry no Bengali glyphs, so `html[lang="bn"]` swaps the
  whole document to Noto Sans Bengali with a taller line height, because Bengali conjuncts
  and matras need more vertical room than Latin.

**What is translated:** all site chrome — navigation, mega-menu headings, hero, buttons,
search, footer, stat labels, form labels and the 404.

**What is not:** long-form editorial copy — project overviews, news articles and job
descriptions. These live in `src/data/` and are English only in this build.

## Design system

Tokens are defined once in [`src/app/globals.css`](src/app/globals.css) under `@theme`,
and everything consumes them.

- **Colour** — brand palette exactly as briefed. Every foreground/background pair used for
  text passes WCAG AA.
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
renders in its final state, and the marquee stops.

---

## Assets — placeholders

`public/` contains generated SVG placeholders plus a generated `hero.mp4` / `hero.webm`.
They are brand-coloured, structurally themed compositions sized to the exact aspect
ratios the layouts expect — so the design can be reviewed without broken images.

**Replace them with real photography before launch** — steel fabrication, site erection,
and the real projects listed in `src/data/projects.ts`. Keep the same paths and nothing
else has to change.

---

## Known scope notes

- **SEO layer is not yet built.** No JSON-LD, sitemap, robots or OG/Twitter cards.
  Page-level `title`/`description` metadata is present.
- **Forms are simulated.** The enquiry, application and newsletter forms validate fully
  (React Hook Form + Zod, inline errors, pending and success states) but no data leaves
  the browser. Each shows a visible "demo build" note. Wire to an endpoint in the
  `onSubmit` handlers.
- **Bangla covers the interface, not the articles.** See the Localisation section above.
- **No locale routing.** The choice is client-side and persisted; there are no `/bn/`
  URLs.
- **A second office address is not published.** The company's own materials state two
  offices; only the Mohammadpur head office address is public, so the second location is
  shown as a fabrication workshop without a specific street address.
