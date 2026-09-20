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
import type { Leader, Stat, TeamMember, ValuePillar } from "@/types";
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
    "Our mission is to provide workmanship and customer service that maintains the highest level of professionalism and honesty. We keep professionalism and fairness in our relationship with our customers, employees and vendors.",
    "We grow by continually providing useful and significant products, services and solutions to the markets we already serve, and by expanding into new areas that build on our competencies and our customers' interests.",
  ],
};

export const visionValues: ValuePillar[] = [
  {
    title: "Mission",
    description:
      "To provide workmanship and customer service that maintains the highest level of professionalism and honesty, growing by continually providing useful, significant products and solutions to our markets.",
    icon: Target,
  },
  {
    title: "Vision",
    description:
      "To be the preferred contractor of choice — a company our customers want to work with, and our employees are proud to work for.",
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
    image: "/images/team/md-sultan-mahmud.png",
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

/** Real clients — names and logos from the company profile. */
export const clients: { name: string; logo: string }[] = [
  { name: "Bangladesh Army", logo: "/images/logos/clients/bangladesh-army.png" },
  { name: "UNICEF", logo: "/images/logos/clients/unicef.png" },
  { name: "Embassy of Japan", logo: "/images/logos/clients/embassy-of-japan.png" },
  { name: "JMI Group", logo: "/images/logos/clients/jmi-group.png" },
  { name: "Sparrow", logo: "/images/logos/clients/sparrow.png" },
  { name: "Beximco", logo: "/images/logos/clients/beximco.png" },
  { name: "Shimizu Corporation", logo: "/images/logos/clients/shimizu-corporation.png" },
  { name: "AKH Group", logo: "/images/logos/clients/akh-group.png" },
  { name: "BKSP", logo: "/images/logos/clients/bksp.png" },
  { name: "Unique Group", logo: "/images/logos/clients/unique-group.png" },
  { name: "Daffodil International University", logo: "/images/logos/clients/daffodil-international-university.png" },
  { name: "Odyssey Craft (Pvt.) Ltd.", logo: "/images/logos/clients/odyssey-craft-pvt-ltd.png" },
  { name: "Gazi Tyres", logo: "/images/logos/clients/gazi-tyres.png" },
  { name: "Keya", logo: "/images/logos/clients/keya.png" },
  { name: "Bay Power Technology", logo: "/images/logos/clients/bay-power-technology.png" },
  { name: "Public Works Department", logo: "/images/logos/clients/public-works-department.png" },
  { name: "Alokito Hridoy Foundation", logo: "/images/logos/clients/alokito-hridoy-foundation.png" },
  { name: "Hazrat Amanat Shah Spinning Mills Ltd.", logo: "/images/logos/clients/hazrat-amanat-shah-spinning-mills-ltd.png" },
  { name: "S.A Group", logo: "/images/logos/clients/sa-group.png" },
  { name: "Libra Group", logo: "/images/logos/clients/libra-group.png" },
  { name: "Osman Group of Industries", logo: "/images/logos/clients/osman-group-of-industries.png" },
  { name: "Silver Line Group", logo: "/images/logos/clients/silver-line-group.png" },
  { name: "Ha-Meem Group", logo: "/images/logos/clients/ha-meem-group.png" },
  { name: "Mumtaz", logo: "/images/logos/clients/mumtaz.png" },
  { name: "TRZ", logo: "/images/logos/clients/trz.png" },
  { name: "Rangpur Community Medical College", logo: "/images/logos/clients/rangpur-community-medical-college.png" },
  { name: "Finis", logo: "/images/logos/clients/finis.png" },
  { name: "AWR Real Estate", logo: "/images/logos/clients/awr-real-estate.png" },
  { name: "Rising Group", logo: "/images/logos/clients/rising-group.png" },
  { name: "SOIL", logo: "/images/logos/clients/soil.png" },
  { name: "IPC", logo: "/images/logos/clients/ipc.png" },
  { name: "Amber Group", logo: "/images/logos/clients/amber-group.png" },
  { name: "Nourish Poultry", logo: "/images/logos/clients/nourish-poultry.png" },
  { name: "BIT", logo: "/images/logos/clients/bit.png" },
  { name: "DW", logo: "/images/logos/clients/dw.png" },
  { name: "Windy Group", logo: "/images/logos/clients/windy-group.png" },
  { name: "Standard Group", logo: "/images/logos/clients/standard-group.png" },
  { name: "JBFH", logo: "/images/logos/clients/jbfh.png" },
  { name: "Fortune Shoes Ltd.", logo: "/images/logos/clients/fortune-shoes-ltd.png" },
  { name: "JASML", logo: "/images/logos/clients/jasml.png" },
  { name: "K.A Design Wear Limited", logo: "/images/logos/clients/ka-design-wear-limited.png" },
  { name: "Crystal Group", logo: "/images/logos/clients/crystal-group.png" },
  { name: "Holcim", logo: "/images/logos/clients/holcim.png" },
  { name: "Kazi Farms", logo: "/images/logos/clients/kazi-farms.png" },
  { name: "AMC Knit Composite", logo: "/images/logos/clients/amc-knit-composite.png" },
  { name: "Newage", logo: "/images/logos/clients/newage.png" },
  { name: "Ispahani", logo: "/images/logos/clients/ispahani.png" },
  { name: "Ispahani Agro Ltd.", logo: "/images/logos/clients/ispahani-agro-ltd.png" },
  { name: "Laila Group", logo: "/images/logos/clients/laila-group.png" },
  { name: "Mirpur Cadet College", logo: "/images/logos/clients/mirpur-cadet-college.png" },
  { name: "MNR Group", logo: "/images/logos/clients/mnr-group.png" },
  { name: "Japfa", logo: "/images/logos/clients/japfa.png" },
  { name: "GMS Composite Knitting Ind. Ltd.", logo: "/images/logos/clients/gms-composite-knitting-ind-ltd.png" },
  { name: "Group Reedisha", logo: "/images/logos/clients/group-reedisha.png" },
  { name: "Desh Garments Limited", logo: "/images/logos/clients/desh-garments-limited.png" },
];

/** Full roster from the company profile's "Our Team of Professionals" table. */
export const team: TeamMember[] = [
  { name: "Engr. Md. Sultan Mahmud", role: "Managing Director", qualification: "B.Sc. Engg. Civil (KUET), MIEB" },
  { name: "Masachige Don Nihal Weheragoda", role: "Executive Director", qualification: "B.Sc. Engg. Civil (Sri Lanka)" },
  { name: "Engr. Md. Sanjid Islam", role: "Structural Design Engineer", qualification: "B.Sc. Engg. Civil (IUT)" },
  { name: "Engr. Md Kaosar Ali", role: "Executive Engineer", qualification: "B.Sc. Engg. Civil (EUB)" },
  { name: "Engr. Nirmal Kumar", role: "Deputy General Manager", qualification: "B.Sc. Engg. (Civil)" },
  { name: "Engr. Md. Kawsar Sikder", role: "Asst. General Manager", qualification: "B.Sc. Engg. (Civil), (EUB)" },
  { name: "Engr. Md. Sujan Miah", role: "Project Coordinator", qualification: "B.Sc. Engg. (Civil), (SU)" },
  { name: "Engr. Md. Sujan Miah", role: "Project Engineer", qualification: "B.Sc. Engg. (Civil)" },
  { name: "Engr. Md. Tariqul Islam", role: "Project Engineer", qualification: "B.Sc. Engg. (Civil)" },
  { name: "Md. Ripon Miah", role: "CAD Detailer", qualification: "Architecture and Interior" },
  { name: "Debashis Ray", role: "General Manager", qualification: "Degree Pass (B.A)" },
  { name: "Engr. Iftekhar Hossain", role: "Assistant General Manager", qualification: "B.Sc. Engg. (Civil), (CUET), MIEB" },
  { name: "Engr. Md Enamul Hoque", role: "Assistant Engineer", qualification: "B.Sc. Engr. (Civil), (SU)" },
  { name: "Md. Raqibul Islam", role: "Assistant Engineer", qualification: "B.Sc. Engg. (Civil), (EUB)" },
  { name: "Engr. Md. Rayhan Uddin", role: "Assistant Engineer", qualification: "B.Sc. Engr. Civil, (EUB)" },
  { name: "Sultana Rabeya", role: "Marketing Officer", qualification: "Honr's, Masters" },
  { name: "Farida Akter", role: "Marketing Officer", qualification: "Bachelor of Social Science (BSS)" },
  { name: "Md. Shafiqul Islam", role: "Senior Executive", qualification: "Degree Pass (B.Com)" },
  { name: "Md. Ashraful Haque", role: "VAT Officer", qualification: "Honr's, Masters" },
  { name: "Foysal Ahmed", role: "Senior Officer", qualification: "Honr's" },
  { name: "Atikur Rahman", role: "Senior Officer", qualification: "Honr's" },
  { name: "Toufiq Khan", role: "Senior Officer", qualification: "Honr's" },
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
