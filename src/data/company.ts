import {
  Calculator,
  Compass,
  Eye,
  Gauge,
  Handshake,
  HardHat,
  Layers,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";
import type { Leader, Stat, ValuePillar } from "@/types";
import { site } from "@/lib/site";

const yearsOfExperience = Math.max(
  1,
  new Date().getFullYear() - Number(site.founded),
);

export const heroStats: Stat[] = [
  {
    value: yearsOfExperience,
    label: "Years of experience",
    labelKey: "stat.years",
    description: `Since ${site.founded}`,
    descriptionKey: "stat.yearsNote",
  },
  {
    value: 109,
    suffix: "+",
    label: "Projects delivered",
    labelKey: "stat.projects",
    description: "Ongoing and handed over",
    descriptionKey: "stat.projectsNote",
  },
  {
    value: 200,
    suffix: "+",
    label: "Satisfied clients",
    labelKey: "stat.clients",
    description: "Across Bangladesh",
    descriptionKey: "stat.clientsNote",
  },
  {
    value: 4,
    label: "Building categories",
    labelKey: "stat.categories",
    description: "Industrial, commercial, residential, agro",
    descriptionKey: "stat.categoriesNote",
  },
];

export const impactStats: Stat[] = [
  {
    value: 190,
    suffix: "+",
    label: "Companies worked with",
    description: "Factory owners, developers and institutions",
  },
  {
    value: 109,
    suffix: "+",
    label: "Projects completed",
    description: "Ongoing and handed over",
  },
  {
    value: 2,
    label: "Offices",
    description: "Serving projects nationwide",
  },
  {
    value: yearsOfExperience,
    label: "Years in structural steel",
    description: `Since ${site.founded}`,
  },
];

export const mission = {
  eyebrow: "Our Mission",
  title: "Safe, economical steel structures — built without compromise",
  body: [
    "Universal Structural Steel Ltd. exists to give Bangladeshi businesses a faster, more resilient alternative to conventional RCC construction: pre-engineered steel buildings that are safe, economical, and engineered for long-term stability.",
    "Every structure we deliver — an industrial shed, a commercial building, a residence or an agro-based facility — is designed to the same standard: proper synchronisation of planning, structural design, fabrication and site supervision, so the finished building performs exactly as calculated.",
  ],
};

export const visionValues: ValuePillar[] = [
  {
    title: "Mission",
    description:
      "To provide clients safe, economical, stable and earthquake-resistant steel structures — at a price that makes sense for the project.",
    icon: Target,
  },
  {
    title: "Vision",
    description:
      "To be the structural steel partner Bangladeshi businesses turn to first, for high-tech, high-quality metal buildings across every sector of construction.",
    icon: Eye,
  },
  {
    title: "Approach",
    description:
      "One accountable team from measurement through calculation, fabrication and erection to final handover — not a chain of separate contractors.",
    icon: Compass,
  },
];

/** Sourced from the company's own "why choose us" positioning. */
export const values: ValuePillar[] = [
  {
    title: "Versatility",
    description:
      "From industrial sheds to residential frames, agro-based buildings to commercial structures — one engineering team covers every building type we take on.",
    icon: Layers,
  },
  {
    title: "Professionalism",
    description:
      "Structural design follows the Bangladesh National Building Code, checked with computer-aided analysis before a single member is fabricated.",
    icon: ShieldCheck,
  },
  {
    title: "Client-first service",
    description:
      "A site visit, a firm calculation within 24 hours, and a team that stays reachable through fabrication, erection and handover.",
    icon: Handshake,
  },
  {
    title: "Reliability",
    description:
      "We commit to a programme and hold it — the reason clients return to us for their next shed, extension or building.",
    icon: HardHat,
  },
];

export const leadership: Leader[] = [
  {
    name: "Engr. Md. Sultan Mahmud",
    role: "Managing Director",
    image: "/images/team/leader-01.svg",
    greeting: "Assalamu Alaikum",
    welcome:
      "Dear valued clients, take my warmest welcome to my company “Universal Structural Steel Ltd.”",
    bio: "Our honest and dedicated vision of offering high-tech along with high-quality metal buildings at an affordable price in all sector of constructions. As a civil engineer, I believe that a proper synchronization of project planning, design, materials fabrication, constructions supervision must lead to a classy and fabulous creation after all.",
    credentials: "B.Sc. in Civil Engineering (KUET), MIEB",
  },
];

/** General engineering practices — not third-party certifications. */
export const engineeringStandards = [
  {
    title: "Designed to BNBC",
    description:
      "Every structure is calculated against Bangladesh National Building Code loading, wind and seismic requirements.",
    icon: Calculator,
  },
  {
    title: "Computer-aided structural analysis",
    description:
      "Frame, connection and foundation design is verified with structural analysis software before fabrication drawings are issued.",
    icon: Gauge,
  },
  {
    title: "Experienced engineering team",
    description:
      "Site measurement, design and supervision are carried out by our own engineers — not outsourced to a third party mid-project.",
    icon: Users,
  },
  {
    title: "Inspected before handover",
    description:
      "Every structure is checked against its approved drawings — connections, alignment and cladding — before it is signed over.",
    icon: ShieldCheck,
  },
];

/** Real client / project names drawn from completed and ongoing work. */
export const clients = [
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

/** Qualitative, verifiable points about steel construction — no invented metrics. */
export const sustainability = [
  {
    value: "PEB",
    label: "Pre-engineered fabrication",
    detail: "Members are cut and prepared to drawing in the workshop, reducing on-site material waste compared with cast-in-place concrete.",
  },
  {
    value: "100%",
    label: "Recyclable structure",
    detail: "Structural steel can be recycled at the end of a building's service life without loss of material quality.",
  },
  {
    value: "Faster",
    label: "Shorter build programme",
    detail: "Off-site fabrication and bolted erection reduce how long a site stays an active construction zone.",
  },
  {
    value: "BNBC",
    label: "Designed to code",
    detail: "Every structure is engineered against national building code loading and seismic requirements, not a generic template.",
  },
];
