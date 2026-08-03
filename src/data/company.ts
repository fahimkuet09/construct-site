import {
  Award,
  Compass,
  Cpu,
  Eye,
  Gauge,
  HardHat,
  Handshake,
  Leaf,
  Lightbulb,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";
import type {
  Certification,
  Leader,
  Milestone,
  Stat,
  ValuePillar,
} from "@/types";

export const heroStats: Stat[] = [
  { value: 51, suffix: "", label: "Years of delivery", description: "Since 1974" },
  { value: 24, suffix: "", label: "Countries", description: "Active operations" },
  {
    value: 18.4,
    prefix: "$",
    suffix: "B",
    decimals: 1,
    label: "Portfolio under management",
    description: "Live contract value",
  },
  {
    value: 12800,
    suffix: "+",
    label: "People",
    description: "Engineers, operatives, specialists",
  },
];

export const impactStats: Stat[] = [
  {
    value: 1140,
    suffix: "+",
    label: "Projects delivered",
    description: "Across six infrastructure sectors",
  },
  {
    value: 96,
    suffix: " km",
    label: "Tunnel driven",
    description: "Beneath live urban environments",
  },
  {
    value: 2180,
    suffix: " km",
    label: "Carriageway constructed",
    description: "Highways, corridors and interchanges",
  },
  {
    value: 0.21,
    decimals: 2,
    label: "Accident frequency rate",
    description: "Per 100,000 hours worked",
  },
];

export const mission = {
  eyebrow: "Our Mission",
  title: "To build infrastructure that outlives the people who commissioned it",
  body: [
    "Meridian exists to deliver the physical systems that societies depend on — the crossings, corridors, tunnels, ports and utilities that move people, water and power. We take on the projects where the engineering is genuinely difficult and the consequences of getting it wrong are permanent.",
    "We measure ourselves on what the asset does in year forty, not on how the handover ceremony went.",
  ],
};

export const visionValues: ValuePillar[] = [
  {
    title: "Mission",
    description:
      "To deliver critical infrastructure that performs for generations — engineered honestly, built safely, and handed over ready to serve.",
    icon: Target,
  },
  {
    title: "Vision",
    description:
      "To be the contractor that governments and operators call when a project cannot be allowed to fail.",
    icon: Eye,
  },
  {
    title: "Approach",
    description:
      "Design authority and self-performed construction under one roof, so accountability never falls into a gap between parties.",
    icon: Compass,
  },
];

export const values: ValuePillar[] = [
  {
    title: "Safety is non-negotiable",
    description:
      "Every person who arrives on a Meridian site goes home unharmed. No programme date, no commercial pressure and no client instruction outranks that.",
    icon: HardHat,
  },
  {
    title: "Engineering integrity",
    description:
      "We say what the analysis says. When a design does not work we raise it early, in writing, whatever the commercial consequence of doing so.",
    icon: ShieldCheck,
  },
  {
    title: "Certainty of delivery",
    description:
      "Programmes are built from first principles and resourced honestly. We commit to dates we have interrogated, then we hold them.",
    icon: Gauge,
  },
  {
    title: "Environmental stewardship",
    description:
      "We build in places people care about. Carbon, habitat and community impact are designed for from tender stage, not mitigated afterwards.",
    icon: Leaf,
  },
  {
    title: "Genuine partnership",
    description:
      "Clients, designers, supply chain and communities all carry part of the outcome. We share information early and we do not trade risk downwards.",
    icon: Handshake,
  },
  {
    title: "Applied innovation",
    description:
      "New methods earn their place by reducing risk, carbon or programme on a live project — not by looking impressive in a bid document.",
    icon: Lightbulb,
  },
];

export const milestones: Milestone[] = [
  {
    year: "1974",
    title: "Founded in London",
    description:
      "Meridian is established as a heavy civils contractor with fourteen employees and a single scope: bridge foundations for the national roads programme.",
    image: "/images/about/history-1974.svg",
  },
  {
    year: "1983",
    title: "First international contract",
    description:
      "The company wins its first overseas commission — a 640-metre river crossing in West Africa — beginning five decades of international delivery.",
    image: "/images/about/history-1983.svg",
  },
  {
    year: "1992",
    title: "Tunnelling division established",
    description:
      "Meridian acquires its first TBM and forms a dedicated underground division, entering the urban metro market that now represents a third of turnover.",
    image: "/images/about/history-1992.svg",
  },
  {
    year: "2001",
    title: "Marine fleet acquired",
    description:
      "Purchase of the first jack-up barges and cutter suction dredger removes charter dependency from marine programmes for good.",
    image: "/images/about/history-2001.svg",
  },
  {
    year: "2009",
    title: "In-house design authority",
    description:
      "The structures and geotechnical design teams are brought in-house, establishing the integrated design-and-build model the company runs today.",
    image: "/images/about/history-2009.svg",
  },
  {
    year: "2016",
    title: "Digital delivery mandated",
    description:
      "Federated BIM to ISO 19650 becomes mandatory on every project above $50 million, with digital twin handover as standard.",
    image: "/images/about/history-2016.svg",
  },
  {
    year: "2021",
    title: "Net zero commitment",
    description:
      "Meridian commits to net zero scope 1 and 2 emissions by 2035, validated under the Science Based Targets initiative.",
    image: "/images/about/history-2021.svg",
  },
  {
    year: "2025",
    title: "Fifty-one years, 24 countries",
    description:
      "The company operates across 24 countries with 12,800 people and $18.4 billion of infrastructure under management.",
    image: "/images/about/history-2025.svg",
  },
];

export const leadership: Leader[] = [
  {
    name: "Adaeze Okonkwo",
    role: "Group Chief Executive",
    image: "/images/team/leader-01.svg",
    bio: "Adaeze joined Meridian as a graduate engineer in 1998 and has led the group since 2019, following six years running the international division. They hold chartered status with the Institution of Civil Engineers.",
    credentials: "CEng FICE, MSc Structural Engineering",
    linkedin: "#",
  },
  {
    name: "Henrik Lindqvist",
    role: "Group Technical Director",
    image: "/images/team/leader-02.svg",
    bio: "Henrik holds design authority across the group and chairs the technical assurance board. Their career spans 28 years of long-span bridge and deep tunnel design across Europe and Asia.",
    credentials: "CEng FIStructE, PhD Geotechnics",
    linkedin: "#",
  },
  {
    name: "Mariam Haddad",
    role: "Chief Operating Officer",
    image: "/images/team/leader-03.svg",
    bio: "Mariam is accountable for delivery across all six sectors and 24 countries. They previously led the Gulf region, where they delivered the group's largest marine programme to date.",
    credentials: "CEng MICE, MBA",
    linkedin: "#",
  },
  {
    name: "Tomás Ferreira",
    role: "Director of Health, Safety & Wellbeing",
    image: "/images/team/leader-04.svg",
    bio: "Tomás has driven the group's accident frequency rate down by 74% over eight years. They sit on the industry safety leadership council and report directly to the board.",
    credentials: "CMIOSH, MSc Occupational Health",
    linkedin: "#",
  },
  {
    name: "Yuki Tanaka",
    role: "Director of Sustainability",
    image: "/images/team/leader-05.svg",
    bio: "Yuki authored Meridian's science-based net zero pathway and leads carbon reduction across design and delivery. Their background is in environmental engineering and life-cycle assessment.",
    credentials: "CEnv MIEMA, MSc Environmental Engineering",
    linkedin: "#",
  },
  {
    name: "Rowan Whitfield",
    role: "Group Finance Director",
    image: "/images/team/leader-06.svg",
    bio: "Rowan oversees the group's financial strategy and risk framework, including the commercial governance that underpins Meridian's approach to major project bidding.",
    credentials: "FCA, MA Economics",
    linkedin: "#",
  },
];

export const certifications: Certification[] = [
  {
    id: "iso-9001",
    name: "Quality Management",
    standard: "ISO 9001:2015",
    issuer: "BSI Group",
    description:
      "Group-wide quality management system audited annually across every operating region and project type.",
    logo: "/images/logos/certifications/iso-9001.svg",
  },
  {
    id: "iso-14001",
    name: "Environmental Management",
    standard: "ISO 14001:2015",
    issuer: "BSI Group",
    description:
      "Environmental management covering carbon, waste, biodiversity and pollution prevention on all sites.",
    logo: "/images/logos/certifications/iso-14001.svg",
  },
  {
    id: "iso-45001",
    name: "Occupational Health & Safety",
    standard: "ISO 45001:2018",
    issuer: "BSI Group",
    description:
      "Health and safety management system independently certified across all 24 countries of operation.",
    logo: "/images/logos/certifications/iso-45001.svg",
  },
  {
    id: "iso-19650",
    name: "Information Management",
    standard: "ISO 19650-2",
    issuer: "BSI Group",
    description:
      "BIM information management certified for the delivery phase of assets, mandatory above $50M contract value.",
    logo: "/images/logos/certifications/iso-19650.svg",
  },
  {
    id: "iso-27001",
    name: "Information Security",
    standard: "ISO 27001:2022",
    issuer: "BSI Group",
    description:
      "Information security management protecting client, design and critical national infrastructure data.",
    logo: "/images/logos/certifications/iso-27001.svg",
  },
  {
    id: "iso-50001",
    name: "Energy Management",
    standard: "ISO 50001:2018",
    issuer: "BSI Group",
    description:
      "Energy management across offices, depots, batching plants and site establishments.",
    logo: "/images/logos/certifications/iso-50001.svg",
  },
];

export const awards = [
  {
    year: "2025",
    title: "Infrastructure Project of the Year",
    body: "Institution of Civil Engineers",
    project: "North Estuary Crossing",
  },
  {
    year: "2025",
    title: "Award for Long-Span Structures",
    body: "Institution of Structural Engineers",
    project: "North Estuary Crossing",
  },
  {
    year: "2025",
    title: "Safety Initiative of the Year",
    body: "International Tunnelling Association",
    project: "Capital Metro Line 4",
  },
  {
    year: "2025",
    title: "Capital Project of the Year",
    body: "Water Industry Achievement Awards",
    project: "Riverside Water Reclamation",
  },
  {
    year: "2024",
    title: "Ports Project of the Year",
    body: "Middle East Infrastructure Awards",
    project: "Gulf Container Terminal",
  },
  {
    year: "2023",
    title: "Outstanding Concrete Structures",
    body: "Fédération Internationale du Béton",
    project: "Southern Ring Viaduct",
  },
];

export const qualityStandards = [
  {
    title: "Independent design checking",
    description:
      "Category III independent check on every primary structure, commissioned by us and reported to the client directly.",
    icon: ShieldCheck,
  },
  {
    title: "Digital assurance",
    description:
      "Federated BIM to ISO 19650 with clash resolution closed out before mobilisation on every major contract.",
    icon: Cpu,
  },
  {
    title: "Behavioural safety programme",
    description:
      "Every operative is authorised to stop work without consequence. 41,000 stop-work observations logged last year.",
    icon: Users,
  },
  {
    title: "Verified handover",
    description:
      "Assets are handed over with as-built models, performance test records and a full asset data set — not a box of drawings.",
    icon: Award,
  },
];

export const clients = [
  "Department for Transport",
  "Metropolitan Transit Authority",
  "Gulf Ports Authority",
  "National Grid Ventures",
  "Regional Water Authority",
  "National Railways",
  "City Transit Board",
  "Atlantic Renewables",
  "Northgate Industrial",
  "National Roads Directorate",
  "Metropolitan Highways",
  "Regional Energy Authority",
];

export const sustainability = [
  {
    value: "2035",
    label: "Net zero target",
    detail: "Scope 1 and 2, validated under the Science Based Targets initiative",
  },
  {
    value: "-46%",
    label: "Carbon intensity",
    detail: "Reduction per million of turnover since the 2019 baseline",
  },
  {
    value: "94%",
    label: "Waste diverted",
    detail: "Construction waste diverted from landfill across all sites",
  },
  {
    value: "+18%",
    label: "Biodiversity net gain",
    detail: "Average measured uplift across schemes completed in 2024",
  },
];
