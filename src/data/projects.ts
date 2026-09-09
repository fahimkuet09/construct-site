import type { Project, ProjectSector } from "@/types";

export const projectSectors: ProjectSector[] = [
  "Industrial Buildings",
  "Commercial Buildings",
  "Residential & Other",
  "Agro-Based Buildings",
];

const gallery = (base: string, alt: string) => [
  {
    src: `/images/projects/${base}-01.svg`,
    alt: `${alt} — completed steel structure`,
    caption: "Completed structure",
    width: 1600,
    height: 1067,
  },
  {
    src: `/images/projects/${base}-02.svg`,
    alt: `${alt} — primary frame under erection`,
    caption: "Primary frame erection",
    width: 1600,
    height: 1067,
  },
  {
    src: `/images/projects/${base}-03.svg`,
    alt: `${alt} — steel connection detail`,
    caption: "Connection detail",
    width: 1200,
    height: 1500,
  },
  {
    src: `/images/projects/${base}-04.svg`,
    alt: `${alt} — roof and cladding installation`,
    caption: "Roof and wall cladding",
    width: 1600,
    height: 1067,
  },
];

/** Generic, category-level challenge/solution pairs — not project-specific claims. */
const industrialChallenges = [
  {
    title: "A clear production floor",
    body: "Production and storage layouts need a floor plate free of intermediate columns, which drives the portal frame span and purlin spacing from day one.",
  },
  {
    title: "A tight commissioning date",
    body: "Factory clients are working back from a production or tenancy start date, which puts the programme — not just the design — under pressure from the first site visit.",
  },
  {
    title: "Coordinating with the civil contractor",
    body: "Foundation and floor slab works are typically run by a separate civil contractor, so the steel frame design has to hand over clean loading and anchor bolt information early.",
  },
];

const industrialSolutions = [
  {
    title: "Portal frames sized for the floor plan",
    body: "Bay spacing and clear span are set from the client's production or racking layout, not from a standard shed template.",
  },
  {
    title: "Fabrication run in parallel with foundations",
    body: "Because our engineering turnaround is fast, fabrication starts while the civil contractor is still on foundations — so the frame is ready to erect the moment they hand over.",
  },
  {
    title: "One set of coordinated drawings",
    body: "Foundation loading and anchor bolt setting-out are issued to the civil contractor directly from our structural design, removing a common source of on-site rework.",
  },
];

const agroChallenges = [
  {
    title: "Ventilation and roof pitch",
    body: "An agro-based shed lives or dies on ventilation — roof pitch, ridge venting and eave height have to be right for the specific livestock or process, not generic.",
  },
  {
    title: "A wash-down environment",
    body: "Farm and mill buildings are cleaned and disinfected regularly, which the structural coating and detailing need to tolerate over years of use.",
  },
  {
    title: "Rural site access",
    body: "Sites are often outside Dhaka's core industrial belt, which affects delivery logistics and erection crew scheduling more than the engineering itself.",
  },
];

const agroSolutions = [
  {
    title: "Roof pitch and venting sized to the operation",
    body: "Ridge height, pitch and open-sided bay spacing are set around the specific livestock density or process, not copied from a generic shed design.",
  },
  {
    title: "Coating specified for wash-down duty",
    body: "Cladding and frame coating are specified for a regular wash-down and agricultural environment rather than a standard dry-shed finish.",
  },
  {
    title: "Delivery sequenced around site access",
    body: "Frame sections and cladding are sequenced for delivery to match what the site access actually allows, keeping the erection crew supplied without on-site storage congestion.",
  },
];

const standardPhases = [
  {
    phase: "Measurement",
    period: "Site visit",
    description: "Site dimensions, ground conditions and the client's usage brief recorded on site.",
  },
  {
    phase: "Engineering & calculation",
    period: "Within 24 hours",
    description: "Structural design, load calculation and firm quotation returned against BNBC requirements.",
  },
  {
    phase: "Fabrication & erection",
    period: "Fabrication to site",
    description: "Frame, purlin and cladding fabricated to drawing, delivered and bolted together on site.",
  },
  {
    phase: "Final inspection & handover",
    period: "Project close-out",
    description: "Structure checked against approved drawings, snags closed out, and the building signed over.",
  },
];

const industrialTech = [
  "Portal frame steel structure",
  "Cold-formed Z/C purlins",
  "Profiled roof & wall cladding",
  "Bolted site connections",
  "BNBC-compliant structural design",
  "Computer-aided structural analysis",
];

const agroTech = [
  "Open-sided portal frame steel structure",
  "Natural ventilation roof detailing",
  "Cold-formed Z/C purlins",
  "Wash-down rated cladding & coating",
  "BNBC-compliant structural design",
  "Computer-aided structural analysis",
];

export const projects: Project[] = [
  {
    slug: "navana-pharmaceuticals-shed",
    title: "Navana Pharmaceuticals Shed",
    client: "Navana Pharmaceuticals Ltd.",
    sector: "Industrial Buildings",
    status: "Completed",
    location: "Dhaka",
    country: "Bangladesh",
    coordinates: [23.8103, 90.4125],
    summary:
      "A single-storey pre-engineered steel shed for pharmaceutical warehousing and light processing, delivered from measurement through to handover.",
    overview: [
      "Navana Pharmaceuticals needed a clear-span steel shed for warehousing and light processing, with a floor plate free of intermediate columns to keep racking and material flow unconstrained.",
      "We ran the project through our standard four-stage process — site measurement, structural calculation, fabrication, and site erection — coordinating foundation loading with the client's civil contractor throughout.",
    ],
    heroImage: "/images/projects/navana-hero.svg",
    thumbnail: "/images/projects/navana-thumb.svg",
    stats: [
      { label: "Building type", value: "Industrial shed" },
      { label: "Structure", value: "Bolted steel frame" },
      { label: "Scope", value: "Design–fabrication–erection" },
    ],
    technologies: industrialTech,
    challenges: industrialChallenges,
    solutions: industrialSolutions,
    phases: standardPhases,
    gallery: gallery("navana", "Navana Pharmaceuticals Shed"),
    featured: true,
  },
  {
    slug: "amber-group-facility",
    title: "Amber Group Facility",
    client: "Amber Group",
    sector: "Industrial Buildings",
    status: "Ongoing",
    location: "Gazipur",
    country: "Bangladesh",
    coordinates: [23.9999, 90.4203],
    summary:
      "An industrial steel structure for Amber Group, currently in progress under our standard measurement-to-handover process.",
    overview: [
      "Amber Group's facility is being delivered as a clear-span steel structure sized around the client's production floor requirements.",
      "The project is progressing through fabrication and site erection, coordinated with the client's civil works on the same programme.",
    ],
    heroImage: "/images/projects/amber-hero.svg",
    thumbnail: "/images/projects/amber-thumb.svg",
    stats: [
      { label: "Building type", value: "Industrial facility" },
      { label: "Structure", value: "Bolted steel frame" },
      { label: "Scope", value: "Design–fabrication–erection" },
    ],
    technologies: industrialTech,
    challenges: industrialChallenges,
    solutions: industrialSolutions,
    phases: standardPhases,
    gallery: gallery("amber", "Amber Group Facility"),
    featured: true,
  },
  {
    slug: "soleman-khan-jute-mills",
    title: "Soleman Khan Jute Mills",
    client: "Soleman Khan Jute Mills Ltd. — a Rising Group concern",
    sector: "Industrial Buildings",
    status: "Ongoing",
    location: "Narayanganj",
    country: "Bangladesh",
    coordinates: [23.6238, 90.5],
    summary:
      "A large-span industrial steel structure for jute processing, engineered for heavy internal traffic and long production runs.",
    overview: [
      "Soleman Khan Jute Mills Ltd., part of the Rising Group, required a wide-bay steel structure to house jute processing lines with clear internal access for material handling.",
      "Frame spacing and clear height were set around the mill's process equipment and internal vehicle movement rather than a standard shed template.",
    ],
    heroImage: "/images/projects/soleman-khan-hero.svg",
    thumbnail: "/images/projects/soleman-khan-thumb.svg",
    stats: [
      { label: "Building type", value: "Process mill shed" },
      { label: "Structure", value: "Bolted steel frame" },
      { label: "Scope", value: "Design–fabrication–erection" },
    ],
    technologies: industrialTech,
    challenges: industrialChallenges,
    solutions: industrialSolutions,
    phases: standardPhases,
    gallery: gallery("soleman-khan", "Soleman Khan Jute Mills"),
  },
  {
    slug: "sigma-oil-factory",
    title: "Sigma Oil Factory Building",
    client: "Sigma Oil Factory",
    sector: "Industrial Buildings",
    status: "Ongoing",
    location: "Narayanganj",
    country: "Bangladesh",
    coordinates: [23.6489, 90.5017],
    summary:
      "A process building for edible oil production, engineered around plant and tankage layout with clear internal spans.",
    overview: [
      "Sigma Oil Factory's building houses oil processing plant and storage, requiring clear spans free of intermediate columns around the equipment layout.",
      "The structure is being delivered through our standard process, with fabrication drawings coordinated directly against the client's equipment supplier layout.",
    ],
    heroImage: "/images/projects/sigma-oil-hero.svg",
    thumbnail: "/images/projects/sigma-oil-thumb.svg",
    stats: [
      { label: "Building type", value: "Process building" },
      { label: "Structure", value: "Bolted steel frame" },
      { label: "Scope", value: "Design–fabrication–erection" },
    ],
    technologies: industrialTech,
    challenges: industrialChallenges,
    solutions: industrialSolutions,
    phases: standardPhases,
    gallery: gallery("sigma-oil", "Sigma Oil Factory Building"),
  },
  {
    slug: "nourish-poultry-facility",
    title: "Nourish Poultry Facility",
    client: "Nourish Poultry",
    sector: "Agro-Based Buildings",
    status: "Ongoing",
    location: "Savar",
    country: "Bangladesh",
    coordinates: [23.8583, 90.2667],
    summary:
      "A naturally ventilated poultry shed, with roof pitch and eave detailing sized around flock density and airflow requirements.",
    overview: [
      "Nourish Poultry's facility required an open-sided steel shed with the ventilation characteristics a poultry house depends on — roof pitch, ridge venting and eave height sized to the shed length and flock density.",
      "Steel framing and wash-down rated cladding were specified for the long-term hygiene and maintenance demands of a working poultry operation.",
    ],
    heroImage: "/images/projects/nourish-hero.svg",
    thumbnail: "/images/projects/nourish-thumb.svg",
    stats: [
      { label: "Building type", value: "Poultry shed" },
      { label: "Structure", value: "Open-sided steel frame" },
      { label: "Scope", value: "Design–fabrication–erection" },
    ],
    technologies: agroTech,
    challenges: agroChallenges,
    solutions: agroSolutions,
    phases: standardPhases,
    gallery: gallery("nourish", "Nourish Poultry Facility"),
    featured: true,
  },
  {
    slug: "qsl-s-factory",
    title: "QSL.S Factory Building",
    client: "QSL.S",
    sector: "Industrial Buildings",
    status: "Ongoing",
    location: "Gazipur",
    country: "Bangladesh",
    coordinates: [23.966, 90.4265],
    summary:
      "A manufacturing facility delivered as a clear-span steel structure, currently progressing through fabrication and erection.",
    overview: [
      "QSL.S's factory building is being engineered as a column-light manufacturing shell, sized to the client's production floor requirements.",
      "The project follows our standard measurement-to-handover process, with foundation coordination running alongside the client's civil contractor.",
    ],
    heroImage: "/images/projects/qsl-s-hero.svg",
    thumbnail: "/images/projects/qsl-s-thumb.svg",
    stats: [
      { label: "Building type", value: "Manufacturing facility" },
      { label: "Structure", value: "Bolted steel frame" },
      { label: "Scope", value: "Design–fabrication–erection" },
    ],
    technologies: industrialTech,
    challenges: industrialChallenges,
    solutions: industrialSolutions,
    phases: standardPhases,
    gallery: gallery("qsl-s", "QSL.S Factory Building"),
  },
  {
    slug: "windy-group-shed",
    title: "Windy Group Factory Shed",
    client: "Windy Group",
    sector: "Industrial Buildings",
    status: "Completed",
    location: "Narayanganj",
    country: "Bangladesh",
    coordinates: [23.6172, 90.4995],
    summary:
      "A completed factory shed for Windy Group, handed over after fabrication and site erection under our standard process.",
    overview: [
      "Windy Group's factory shed was delivered as a clear-span steel structure, sized around the production layout the client specified at the measurement stage.",
      "The finished structure was inspected against its approved drawings before handover, with the client's civil contractor completing foundations and flooring in parallel.",
    ],
    heroImage: "/images/projects/windy-hero.svg",
    thumbnail: "/images/projects/windy-thumb.svg",
    stats: [
      { label: "Building type", value: "Factory shed" },
      { label: "Structure", value: "Bolted steel frame" },
      { label: "Scope", value: "Design–fabrication–erection" },
    ],
    technologies: industrialTech,
    challenges: industrialChallenges,
    solutions: industrialSolutions,
    phases: standardPhases,
    gallery: gallery("windy", "Windy Group Factory Shed"),
  },
  {
    slug: "universal-knitting-dyeing",
    title: "Universal Knitting and Dyeing Facility",
    client: "Universal Knitting and Dyeing Ltd.",
    sector: "Industrial Buildings",
    status: "Completed",
    location: "Narayanganj",
    country: "Bangladesh",
    coordinates: [23.6301, 90.5062],
    summary:
      "A completed textile manufacturing structure, engineered for the clear spans and internal access a knitting and dyeing operation needs.",
    overview: [
      "Universal Knitting and Dyeing Ltd.'s facility required wide-bay steel framing to accommodate knitting and dyeing production lines without intermediate columns interrupting the floor.",
      "The structure was delivered and handed over on our standard process, with fabrication drawings coordinated against the client's process equipment layout.",
    ],
    heroImage: "/images/projects/uk-dyeing-hero.svg",
    thumbnail: "/images/projects/uk-dyeing-thumb.svg",
    stats: [
      { label: "Building type", value: "Textile mill shed" },
      { label: "Structure", value: "Bolted steel frame" },
      { label: "Scope", value: "Design–fabrication–erection" },
    ],
    technologies: industrialTech,
    challenges: industrialChallenges,
    solutions: industrialSolutions,
    phases: standardPhases,
    gallery: gallery("uk-dyeing", "Universal Knitting and Dyeing Facility"),
  },
  {
    slug: "standard-group-shed",
    title: "Standard Group Factory Shed",
    client: "Standard Group",
    sector: "Industrial Buildings",
    status: "Completed",
    location: "Dhaka",
    country: "Bangladesh",
    coordinates: [23.7461, 90.3742],
    summary:
      "A handed-over factory shed for Standard Group, delivered as a clear-span bolted steel structure.",
    overview: [
      "Standard Group's shed was engineered and fabricated to the client's production floor requirements, with erection completed by our own site crew.",
      "Final inspection against the approved drawings was carried out before the structure was signed over.",
    ],
    heroImage: "/images/projects/standard-group-hero.svg",
    thumbnail: "/images/projects/standard-group-thumb.svg",
    stats: [
      { label: "Building type", value: "Factory shed" },
      { label: "Structure", value: "Bolted steel frame" },
      { label: "Scope", value: "Design–fabrication–erection" },
    ],
    technologies: industrialTech,
    challenges: industrialChallenges,
    solutions: industrialSolutions,
    phases: standardPhases,
    gallery: gallery("standard-group", "Standard Group Factory Shed"),
  },
  {
    slug: "silver-line-composite-textile",
    title: "Silver Line Composite and Textile Mills",
    client: "Silver Line Composite and Textile Mills Ltd.",
    sector: "Industrial Buildings",
    status: "Completed",
    location: "Narayanganj",
    country: "Bangladesh",
    coordinates: [23.6355, 90.4938],
    summary:
      "A completed textile production facility, built as a wide-span steel structure to house composite and textile manufacturing lines.",
    overview: [
      "Silver Line Composite and Textile Mills Ltd. needed a large clear-span shed for its textile production lines, with bay spacing set around the equipment and material flow.",
      "The project ran through our full process from site measurement to final inspection, with the finished structure handed over on programme.",
    ],
    heroImage: "/images/projects/silver-line-hero.svg",
    thumbnail: "/images/projects/silver-line-thumb.svg",
    stats: [
      { label: "Building type", value: "Textile mill shed" },
      { label: "Structure", value: "Bolted steel frame" },
      { label: "Scope", value: "Design–fabrication–erection" },
    ],
    technologies: industrialTech,
    challenges: industrialChallenges,
    solutions: industrialSolutions,
    phases: standardPhases,
    gallery: gallery("silver-line", "Silver Line Composite and Textile Mills"),
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getRelatedProjects(slug: string, count = 3) {
  const current = getProject(slug);
  if (!current) return projects.slice(0, count);

  const sameSector = projects.filter(
    (p) => p.slug !== slug && p.sector === current.sector,
  );
  const rest = projects.filter(
    (p) => p.slug !== slug && p.sector !== current.sector,
  );
  return [...sameSector, ...rest].slice(0, count);
}
