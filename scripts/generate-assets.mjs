/**
 * Placeholder art-direction generator.
 *
 * Produces branded SVG stand-ins for every image slot the site references so
 * the layout can be reviewed with real composition and aspect ratios in place.
 * Swap these for photography before launch — the paths stay identical.
 *
 *   node scripts/generate-assets.mjs
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const PUB = join(ROOT, "public");

/* ---------- deterministic pseudo-random, seeded by filename ------------- */
function seeded(seed) {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return () => {
    h += 0x6d2b79f5;
    let t = h;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const write = (rel, content) => {
  const abs = join(PUB, rel);
  mkdirSync(dirname(abs), { recursive: true });
  writeFileSync(abs, content, "utf8");
};

/* ---------- palettes per subject, all inside the brand range ----------- */
const PALETTES = {
  bridge: ["#03040f", "#080b32", "#0b1051"],
  tunnel: ["#050d16", "#0a2a45", "#123f63"],
  marine: ["#04141f", "#0b3a55", "#12557a"],
  highway: ["#0b1220", "#1e293b", "#33465f"],
  energy: ["#0a1420", "#0d4360", "#136b7d"],
  industrial: ["#0c111c", "#1e293b", "#3b4c66"],
  earth: ["#141210", "#2b2418", "#4a3b22"],
  light: ["#e6ecf3", "#d3dde8", "#c2cfdd"],
  agro: ["#0b1710", "#1c3524", "#2f5738"],
  steel: ["#0a1119", "#16283f", "#255177"],
};

const KIND_PALETTE = {
  bridges: "bridge",
  tunnelling: "tunnel",
  marine: "marine",
  highways: "highway",
  "water-energy": "energy",
  industrial: "industrial",
};

/* ---------- structural line-art motifs --------------------------------- */

function motifCableStay(w, h, rnd) {
  const deckY = h * 0.68;
  const towers = [w * 0.3, w * 0.72];
  let s = "";
  for (const tx of towers) {
    const topY = h * (0.12 + rnd() * 0.04);
    s += `<line x1="${tx}" y1="${topY}" x2="${tx}" y2="${deckY}" stroke="rgba(255,255,255,.5)" stroke-width="3"/>`;
    s += `<line x1="${tx - 26}" y1="${topY + h * 0.16}" x2="${tx + 26}" y2="${topY + h * 0.16}" stroke="rgba(255,255,255,.32)" stroke-width="3"/>`;
    for (let i = 1; i <= 9; i++) {
      const spread = (i / 9) * w * 0.24;
      const y = topY + (i / 9) * (deckY - topY) * 0.42;
      s += `<line x1="${tx}" y1="${y}" x2="${tx - spread}" y2="${deckY}" stroke="rgba(215,0,18,.4)" stroke-width="1.1"/>`;
      s += `<line x1="${tx}" y1="${y}" x2="${tx + spread}" y2="${deckY}" stroke="rgba(215,0,18,.4)" stroke-width="1.1"/>`;
    }
  }
  s += `<line x1="0" y1="${deckY}" x2="${w}" y2="${deckY}" stroke="rgba(255,255,255,.72)" stroke-width="4"/>`;
  s += `<line x1="0" y1="${deckY + 13}" x2="${w}" y2="${deckY + 13}" stroke="rgba(255,255,255,.24)" stroke-width="2"/>`;
  return s;
}

function motifTunnel(w, h, rnd) {
  const cx = w * 0.5;
  const cy = h * 0.58;
  let s = "";
  for (let i = 8; i >= 1; i--) {
    const r = (i / 8) * Math.min(w, h) * 0.46;
    const o = 0.1 + (1 - i / 8) * 0.42;
    s += `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="rgba(255,255,255,${o.toFixed(2)})" stroke-width="${(1 + (1 - i / 8) * 2.4).toFixed(1)}"/>`;
  }
  for (let i = 0; i < 12; i++) {
    const a = (i / 12) * Math.PI * 2 + rnd() * 0.1;
    const r1 = Math.min(w, h) * 0.2;
    const r2 = Math.min(w, h) * 0.46;
    s += `<line x1="${cx + Math.cos(a) * r1}" y1="${cy + Math.sin(a) * r1}" x2="${cx + Math.cos(a) * r2}" y2="${cy + Math.sin(a) * r2}" stroke="rgba(215,0,18,.34)" stroke-width="1.2"/>`;
  }
  s += `<circle cx="${cx}" cy="${cy}" r="${Math.min(w, h) * 0.075}" fill="rgba(215,0,18,.5)"/>`;
  return s;
}

function motifCrane(w, h, rnd) {
  let s = "";
  const n = 3;
  for (let i = 0; i < n; i++) {
    const bx = w * (0.16 + i * 0.3) + rnd() * 30;
    const th = h * (0.3 + rnd() * 0.34);
    const by = h * 0.82;
    s += `<line x1="${bx}" y1="${by}" x2="${bx}" y2="${by - th}" stroke="rgba(255,255,255,.46)" stroke-width="3.5"/>`;
    const jib = w * (0.16 + rnd() * 0.08);
    s += `<line x1="${bx - jib * 0.32}" y1="${by - th}" x2="${bx + jib}" y2="${by - th}" stroke="rgba(215,0,18,.62)" stroke-width="3"/>`;
    s += `<line x1="${bx}" y1="${by - th - 30}" x2="${bx + jib}" y2="${by - th}" stroke="rgba(255,255,255,.26)" stroke-width="1.3"/>`;
    s += `<line x1="${bx}" y1="${by - th - 30}" x2="${bx - jib * 0.32}" y2="${by - th}" stroke="rgba(255,255,255,.26)" stroke-width="1.3"/>`;
    s += `<line x1="${bx}" y1="${by - th}" x2="${bx}" y2="${by - th - 30}" stroke="rgba(255,255,255,.4)" stroke-width="2"/>`;
    const hook = by - th + h * (0.12 + rnd() * 0.2);
    s += `<line x1="${bx + jib * 0.72}" y1="${by - th}" x2="${bx + jib * 0.72}" y2="${hook}" stroke="rgba(255,255,255,.3)" stroke-width="1.1"/>`;
  }
  s += `<line x1="0" y1="${h * 0.82}" x2="${w}" y2="${h * 0.82}" stroke="rgba(255,255,255,.5)" stroke-width="2.5"/>`;
  return s;
}

function motifRoad(w, h) {
  let s = "";
  const hz = h * 0.44;
  s += `<path d="M ${w * 0.3} ${hz} L ${-w * 0.15} ${h} L ${w * 0.62} ${h} Z" fill="rgba(255,255,255,.07)"/>`;
  s += `<path d="M ${w * 0.42} ${hz} L ${w * 0.72} ${h} L ${w * 1.18} ${h} Z" fill="rgba(255,255,255,.05)"/>`;
  s += `<line x1="0" y1="${hz}" x2="${w}" y2="${hz}" stroke="rgba(255,255,255,.28)" stroke-width="1.4"/>`;
  for (let i = 0; i < 7; i++) {
    const t = i / 7;
    const y = hz + (h - hz) * (t * t + 0.04);
    const seg = 10 + t * 70;
    s += `<line x1="${w * 0.36 - t * w * 0.24}" y1="${y}" x2="${w * 0.36 - t * w * 0.24 + seg}" y2="${y}" stroke="rgba(215,0,18,.7)" stroke-width="${2 + t * 5}"/>`;
  }
  for (let i = 0; i < 5; i++) {
    const gx = w * (0.12 + i * 0.2);
    s += `<line x1="${gx}" y1="${hz - 60}" x2="${gx}" y2="${hz + 10}" stroke="rgba(255,255,255,.2)" stroke-width="2"/>`;
  }
  return s;
}

function motifMarine(w, h, rnd) {
  let s = "";
  const wl = h * 0.6;
  for (let i = 0; i < 5; i++) {
    const y = wl + i * (h * 0.08);
    let d = `M 0 ${y}`;
    for (let x = 0; x <= w; x += w / 12) {
      d += ` Q ${x + w / 24} ${y - 9 - rnd() * 8}, ${x + w / 12} ${y}`;
    }
    s += `<path d="${d}" fill="none" stroke="rgba(255,255,255,${(0.3 - i * 0.05).toFixed(2)})" stroke-width="1.6"/>`;
  }
  s += `<rect x="0" y="${wl - h * 0.1}" width="${w}" height="${h * 0.1}" fill="rgba(255,255,255,.1)"/>`;
  for (let i = 0; i < 9; i++) {
    const px = w * (0.06 + i * 0.11);
    s += `<line x1="${px}" y1="${wl - h * 0.1}" x2="${px}" y2="${wl + h * 0.22}" stroke="rgba(255,255,255,.24)" stroke-width="3"/>`;
  }
  for (let i = 0; i < 4; i++) {
    const cx = w * (0.2 + i * 0.2);
    const ch = h * (0.16 + rnd() * 0.1);
    s += `<rect x="${cx}" y="${wl - h * 0.1 - ch}" width="${w * 0.07}" height="${ch}" fill="none" stroke="rgba(215,0,18,.5)" stroke-width="2"/>`;
  }
  return s;
}

function motifIndustrial(w, h, rnd) {
  let s = "";
  const base = h * 0.8;
  for (let i = 0; i < 6; i++) {
    const bx = w * (0.06 + i * 0.155);
    const bh = h * (0.2 + rnd() * 0.4);
    s += `<rect x="${bx}" y="${base - bh}" width="${w * 0.11}" height="${bh}" fill="none" stroke="rgba(255,255,255,.34)" stroke-width="2"/>`;
    const rows = Math.max(2, Math.round(bh / 40));
    for (let r = 1; r < rows; r++) {
      const y = base - bh + (bh / rows) * r;
      s += `<line x1="${bx}" y1="${y}" x2="${bx + w * 0.11}" y2="${y}" stroke="rgba(255,255,255,.13)" stroke-width="1"/>`;
    }
  }
  s += `<line x1="0" y1="${base}" x2="${w}" y2="${base}" stroke="rgba(215,0,18,.55)" stroke-width="3"/>`;
  return s;
}

function motifEnergy(w, h, rnd) {
  let s = "";
  const base = h * 0.84;
  for (let i = 0; i < 3; i++) {
    const cx = w * (0.22 + i * 0.28);
    const th = h * (0.34 + rnd() * 0.2);
    s += `<line x1="${cx}" y1="${base}" x2="${cx}" y2="${base - th}" stroke="rgba(255,255,255,.44)" stroke-width="3"/>`;
    for (let b = 0; b < 3; b++) {
      const a = (b / 3) * Math.PI * 2 + rnd();
      s += `<line x1="${cx}" y1="${base - th}" x2="${cx + Math.cos(a) * w * 0.075}" y2="${base - th + Math.sin(a) * w * 0.075}" stroke="rgba(215,0,18,.55)" stroke-width="2.4"/>`;
    }
  }
  for (let i = 0; i < 4; i++) {
    const y = base + 12 + i * 14;
    s += `<line x1="0" y1="${y}" x2="${w}" y2="${y}" stroke="rgba(255,255,255,.12)" stroke-width="1"/>`;
  }
  return s;
}

const MOTIFS = {
  bridge: motifCableStay,
  tunnel: motifTunnel,
  marine: motifMarine,
  highway: motifRoad,
  energy: motifEnergy,
  industrial: motifIndustrial,
  crane: motifCrane,
  earth: motifRoad,
  agro: motifIndustrial,
  steel: motifIndustrial,
};

/* ---------- the main "photograph" placeholder --------------------------- */
function scene({ w, h, seed, palette = "bridge", motif, label, sub }) {
  const rnd = seeded(seed);
  const [c0, c1, c2] = PALETTES[palette] ?? PALETTES.bridge;
  const m = MOTIFS[motif ?? palette] ?? motifCableStay;
  const id = seed.replace(/[^a-z0-9]/gi, "");

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="${label ?? "Universal Structural Steel"}">
  <defs>
    <linearGradient id="g${id}" x1="0" y1="0" x2="0.35" y2="1">
      <stop offset="0%" stop-color="${c2}"/>
      <stop offset="55%" stop-color="${c1}"/>
      <stop offset="100%" stop-color="${c0}"/>
    </linearGradient>
    <radialGradient id="v${id}" cx="50%" cy="38%" r="78%">
      <stop offset="0%" stop-color="#fff" stop-opacity="0.14"/>
      <stop offset="100%" stop-color="#000" stop-opacity="0.5"/>
    </radialGradient>
    <pattern id="p${id}" width="72" height="72" patternUnits="userSpaceOnUse">
      <path d="M72 0 L0 0 0 72" fill="none" stroke="rgba(255,255,255,.055)" stroke-width="1"/>
    </pattern>
    <filter id="n${id}"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3"/><feColorMatrix type="saturate" values="0"/></filter>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#g${id})"/>
  <rect width="${w}" height="${h}" fill="url(#p${id})"/>
  ${m(w, h, rnd)}
  <rect width="${w}" height="${h}" fill="url(#v${id})"/>
  <rect width="${w}" height="${h}" filter="url(#n${id})" opacity="0.045"/>
  ${
    label
      ? `<g font-family="Manrope, ui-sans-serif, system-ui, sans-serif">
    <rect x="${w * 0.055}" y="${h - h * 0.055 - 46}" width="4" height="46" fill="#D70012"/>
    <text x="${w * 0.055 + 18}" y="${h - h * 0.055 - 24}" fill="#ffffff" font-size="${Math.max(13, w * 0.019).toFixed(0)}" font-weight="700" letter-spacing="0.5">${label}</text>
    ${sub ? `<text x="${w * 0.055 + 18}" y="${h - h * 0.055 - 4}" fill="rgba(255,255,255,.62)" font-size="${Math.max(10, w * 0.012).toFixed(0)}" font-weight="600" letter-spacing="2.4">${sub.toUpperCase()}</text>` : ""}
  </g>`
      : ""
  }
</svg>`;
}

/* ---------- monogram avatar -------------------------------------------- */
function avatar(seed, initials) {
  const rnd = seeded(seed);
  const hues = ["#0b1051", "#131a3d", "#080b32", "#2832c3", "#12557a"];
  const bg = hues[Math.floor(rnd() * hues.length)];
  return `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400" role="img" aria-label="${initials}">
  <defs><linearGradient id="a${seed.replace(/\W/g, "")}" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0%" stop-color="${bg}"/><stop offset="100%" stop-color="#03040f"/>
  </linearGradient></defs>
  <rect width="400" height="400" fill="url(#a${seed.replace(/\W/g, "")})"/>
  <path d="M400 0 L0 0 0 400" fill="none" stroke="rgba(255,255,255,.06)" stroke-width="1"/>
  <circle cx="200" cy="158" r="62" fill="rgba(255,255,255,.16)"/>
  <path d="M78 400 C78 300 130 254 200 254 C270 254 322 300 322 400 Z" fill="rgba(255,255,255,.16)"/>
  <text x="200" y="372" text-anchor="middle" fill="rgba(215,0,18,.9)" font-family="Manrope, sans-serif" font-size="30" font-weight="800" letter-spacing="3">${initials}</text>
</svg>`;
}

/* ---------- client wordmark -------------------------------------------- */
function wordmark(name) {
  const initials = name
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
  const short = name.length > 22 ? name.slice(0, 20) + "…" : name;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="280" height="80" viewBox="0 0 280 80" role="img" aria-label="${name}">
  <rect x="4" y="18" width="44" height="44" rx="10" fill="none" stroke="#5C5E66" stroke-width="2.5" opacity=".85"/>
  <path d="M14 50 L26 30 L38 50" fill="none" stroke="#5C5E66" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" opacity=".85"/>
  <text x="60" y="40" font-family="Manrope, sans-serif" font-size="19" font-weight="800" fill="#5C5E66" letter-spacing="-0.3">${initials}</text>
  <text x="60" y="58" font-family="Inter, sans-serif" font-size="11.5" font-weight="600" fill="#5C5E66" opacity=".72" letter-spacing="0.4">${short}</text>
</svg>`;
}

/* ---------- ISO certification badge ------------------------------------ */
function certBadge(standard, name) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="240" height="240" viewBox="0 0 240 240" role="img" aria-label="${standard}">
  <circle cx="120" cy="120" r="112" fill="none" stroke="#0B1051" stroke-width="2" opacity=".28"/>
  <circle cx="120" cy="120" r="96" fill="none" stroke="#0B1051" stroke-width="1" opacity=".2"/>
  <path d="M120 44 L176 72 L176 128 C176 166 152 188 120 198 C88 188 64 166 64 128 L64 72 Z" fill="none" stroke="#0B1051" stroke-width="3" opacity=".8"/>
  <path d="M96 122 L113 139 L148 100" fill="none" stroke="#D70012" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
  <text x="120" y="166" text-anchor="middle" font-family="Manrope, sans-serif" font-size="17" font-weight="800" fill="#0A0E2E">${standard}</text>
  <text x="120" y="184" text-anchor="middle" font-family="Inter, sans-serif" font-size="10" font-weight="600" fill="#5C5E66" letter-spacing="1.4">${name.toUpperCase()}</text>
</svg>`;
}

/* ======================================================================== */
/*  ASSET MANIFEST                                                          */
/* ======================================================================== */

const LAND = { w: 1600, h: 1067 };
const PORT = { w: 1200, h: 1500 };
const WIDE = { w: 2400, h: 1350 };
const THUMB = { w: 1200, h: 900 };


const PROJECTS = [
  ["navana", "steel"],
  ["amber", "industrial"],
  ["soleman-khan", "industrial"],
  ["sigma-oil", "steel"],
  ["nourish", "agro"],
  ["qsl-s", "industrial"],
  ["windy", "steel"],
  ["uk-dyeing", "industrial"],
  ["standard-group", "steel"],
  ["silver-line", "industrial"],
];

let count = 0;
const emit = (rel, svg) => {
  write(rel, svg);
  count++;
};

/* Projects: hero, thumb, 4 gallery frames (matches gallery() in projects.ts) */
for (const [base, palette] of PROJECTS) {
  emit(
    `images/projects/${base}-hero.svg`,
    scene({ ...WIDE, seed: `${base}-hero`, palette, motif: "crane" }),
  );
  emit(
    `images/projects/${base}-thumb.svg`,
    scene({ ...THUMB, seed: `${base}-thumb`, palette }),
  );
  const motifs = [palette, "crane", palette, palette];
  for (let i = 1; i <= 4; i++) {
    const portrait = i === 3;
    emit(
      `images/projects/${base}-0${i}.svg`,
      scene({
        ...(portrait ? PORT : LAND),
        seed: `${base}-0${i}`,
        palette,
        motif: motifs[i - 1],
      }),
    );
  }
}

/* Services */
const SERVICE_IMAGES = [
  ["industrial", "industrial", "Industrial Buildings"],
  ["commercial", "steel", "Commercial Buildings"],
  ["residential", "bridge", "Residential & Other"],
  ["agro", "agro", "Agro-Based Buildings"],
];
for (const [file, palette, label] of SERVICE_IMAGES) {
  emit(
    `images/services/${file}.svg`,
    // Every service is a steel-frame building, so the skyline/portal-frame
    // motif applies across the board — an explicit motif keeps that true
    // even for palettes (like "bridge") whose own default motif is a
    // cable-stay diagram, which has nothing to do with any of these.
    scene({
      ...LAND,
      seed: `svc-${file}`,
      palette,
      motif: "industrial",
      label,
      sub: "Service",
    }),
  );
}
emit(
  "images/services/nav-featured.svg",
  scene({ w: 800, h: 600, seed: "nav-featured", palette: "steel", motif: "industrial" }),
);

/* Process steps (measurement, calculation, execution, handover) */
const PROCESS = [
  ["planning", "highway", "Measurement"],
  ["design", "steel", "Engineering & Calculation"],
  ["construction", "industrial", "Fabrication & Execution"],
  ["completion", "agro", "Final Inspection & Handover"],
];
for (const [file, palette, label] of PROCESS) {
  emit(
    `images/services/process-${file}.svg`,
    scene({
      ...LAND,
      seed: `proc-${file}`,
      palette,
      motif: file === "construction" ? "crane" : undefined,
      label,
      sub: "Delivery stage",
    }),
  );
}

/* About */
emit(
  "images/about/about-hero.svg",
  scene({ ...WIDE, seed: "about-hero", palette: "industrial", motif: "crane" }),
);
emit(
  "images/about/mission.svg",
  scene({ ...PORT, seed: "mission", palette: "steel", label: "Our mission" }),
);
emit(
  "images/about/values.svg",
  scene({ ...LAND, seed: "values", palette: "industrial", label: "Our values" }),
);

/* Careers / office / news */
emit(
  "images/careers/careers-hero.svg",
  scene({ ...WIDE, seed: "careers-hero", palette: "steel", motif: "crane" }),
);
emit(
  "images/careers/culture-01.svg",
  scene({ ...LAND, seed: "culture-01", palette: "industrial", label: "On site" }),
);
emit(
  "images/careers/culture-02.svg",
  scene({ ...PORT, seed: "culture-02", palette: "steel", label: "In design" }),
);
emit(
  "images/careers/culture-03.svg",
  scene({ ...LAND, seed: "culture-03", palette: "agro", label: "On site" }),
);
emit(
  "images/office/office-hero.svg",
  scene({ ...WIDE, seed: "office-hero", palette: "industrial" }),
);

const NEWS_PALETTES = ["industrial", "steel", "agro", "highway"];
for (let i = 1; i <= 4; i++) {
  emit(
    `images/news/news-0${i}.svg`,
    scene({ ...LAND, seed: `news-0${i}`, palette: NEWS_PALETTES[i - 1] }),
  );
}

/* Fabrication capability (equipment slider) */
const EQUIP = [
  ["cnc-cutting", "steel"],
  ["roll-forming", "industrial"],
  ["welding", "steel"],
  ["paint-line", "industrial"],
  ["erection-crew", "highway"],
  ["transport", "steel"],
];
for (const [file, palette] of EQUIP) {
  emit(
    `images/equipment/${file}.svg`,
    scene({ w: 1400, h: 1050, seed: `eq-${file}`, palette }),
  );
}

/* People — five avatars, matching the five testimonial entries */
emit("images/team/leader-01.svg", avatar("leader-0", "SM"));
const CLIENTS_INI = ["OM", "FM", "FO", "PC", "GM"];
CLIENTS_INI.forEach((ini, i) =>
  emit(`images/team/client-0${i + 1}.svg`, avatar(`client-${i}`, ini)),
);
emit("images/team/author-01.svg", avatar("author-1", "USS"));
for (let i = 1; i <= 2; i++) {
  emit(
    `images/team/testimonial-video-0${i}.svg`,
    scene({ ...LAND, seed: `vid-0${i}`, palette: ["industrial", "steel"][i - 1] }),
  );
}

/* Client wordmarks — real project clients, in the order data/company.ts lists them */
const CLIENT_NAMES = [
  "Navana Pharmaceuticals Ltd.",
  "Amber Group",
  "Soleman Khan Jute Mills Ltd.",
  "Sigma Oil Factory",
  "Nourish Poultry",
  "Windy Group",
  "Universal Knitting and Dyeing Ltd.",
  "Standard Group",
  "Silver Line Composite and Textile Mills Ltd.",
  "QSL.S",
];
CLIENT_NAMES.forEach((n, i) =>
  emit(`images/logos/clients/client-${String(i + 1).padStart(2, "0")}.svg`, wordmark(n)),
);

/* Brand mark + favicon */
emit(
  "icons/logo-mark.svg",
  `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" role="img" aria-label="Universal Structural Steel">
  <rect width="48" height="48" rx="11" fill="#0B1051"/>
  <path d="M10 34 L19 17 L24 26 L29 17 L38 34" fill="none" stroke="#fff" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="24" cy="26" r="2.6" fill="#D70012"/>
</svg>`,
);

/* OG default image */
emit(
  "images/hero/og-default.svg",
  scene({
    w: 1200,
    h: 630,
    seed: "og",
    palette: "steel",
    motif: "industrial",
    label: "Universal Structural Steel",
    sub: "Concept to construction, since 2017",
  }),
);

console.log(`Generated ${count} placeholder assets.`);
