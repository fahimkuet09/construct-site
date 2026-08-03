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
  {
    value: 51,
    label: "Years of delivery",
    labelKey: "stat.years",
    description: "Since 1974",
    descriptionKey: "stat.yearsNote",
  },
  {
    value: 61,
    label: "Districts",
    labelKey: "stat.districts",
    description: "Of 64 nationwide",
    descriptionKey: "stat.districtsNote",
  },
  {
    value: 18400,
    prefix: "৳",
    suffix: " cr",
    suffixKey: "unit.crore",
    label: "Portfolio under management",
    labelKey: "stat.portfolio",
    description: "Live contract value",
    descriptionKey: "stat.portfolioNote",
  },
  {
    value: 12800,
    suffix: "+",
    label: "People",
    labelKey: "stat.people",
    description: "Engineers, operatives, specialists",
    descriptionKey: "stat.peopleNote",
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
    value: 38,
    suffix: " km",
    label: "River crossings built",
    description: "Bridges and viaducts over active channels",
  },
  {
    value: 2180,
    suffix: " km",
    label: "Highway constructed",
    description: "Corridors, expressways and interchanges",
  },
  {
    value: 0.24,
    decimals: 2,
    label: "Accident frequency rate",
    description: "Per 100,000 hours worked",
  },
];

export const mission = {
  eyebrow: "Our Mission",
  title: "To build infrastructure that outlives the people who commissioned it",
  body: [
    "Meghna exists to deliver the physical systems Bangladesh depends on — the crossings, corridors, tunnels, ports and utilities that move people, water and power across one of the most demanding deltas on earth.",
    "We take on the projects where the engineering is genuinely difficult: soft alluvium with no rock at any reachable depth, rivers that move their own beds, a monsoon that closes half the working year, and a coastline that takes direct cyclone landfall. We measure ourselves on what the asset does in year forty, not on how the opening ceremony went.",
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
      "To be the contractor Bangladesh calls when a project cannot be allowed to fail, and to prove that world-class delivery is a domestic capability.",
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
      "Every person who arrives on a Meghna site goes home unharmed. No programme date, no commercial pressure and no client instruction outranks that.",
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
      "Programmes are built around the monsoon rather than in spite of it, resourced honestly, and committed to only once we have interrogated them.",
    icon: Gauge,
  },
  {
    title: "Environmental stewardship",
    description:
      "We build in a delta where a badly placed embankment can flood a village. Drainage, erosion and community impact are designed for from tender stage.",
    icon: Leaf,
  },
  {
    title: "Genuine partnership",
    description:
      "Clients, designers, supply chain and the communities we build through all carry part of the outcome. We share information early and we do not trade risk downwards.",
    icon: Handshake,
  },
  {
    title: "Building national capability",
    description:
      "Every major contract transfers skills to Bangladeshi engineers rather than importing them permanently. 94% of our technical staff are local.",
    icon: Lightbulb,
  },
];

export const milestones: Milestone[] = [
  {
    year: "1974",
    title: "Founded in Dhaka",
    description:
      "Meghna is established during post-independence reconstruction with fourteen employees and a single scope: rebuilding bridges destroyed in the Liberation War.",
    image: "/images/about/history-1974.svg",
  },
  {
    year: "1983",
    title: "First major river crossing",
    description:
      "The company completes its first significant river bridge, establishing the deep-pile foundation capability that delta work demands.",
    image: "/images/about/history-1983.svg",
  },
  {
    year: "1992",
    title: "Marine division established",
    description:
      "Purchase of the first dredgers and pontoons builds the in-house marine capability that river training and port work require.",
    image: "/images/about/history-1992.svg",
  },
  {
    year: "2001",
    title: "First international contract",
    description:
      "Meghna wins its first overseas commission in South Asia, beginning a regional export of Bangladeshi engineering capability.",
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
      "Federated BIM to ISO 19650 becomes mandatory on every project above ৳500 crore, with digital twin handover as standard.",
    image: "/images/about/history-2016.svg",
  },
  {
    year: "2021",
    title: "Tunnelling capability established",
    description:
      "Meghna acquires its first TBM for the Dhaka metro programme, bringing soft-ground urban tunnelling capability into the country.",
    image: "/images/about/history-2021.svg",
  },
  {
    year: "2025",
    title: "Fifty-one years, 61 districts",
    description:
      "The company operates in 61 of Bangladesh's 64 districts with 12,800 people and ৳18,400 crore of infrastructure under management.",
    image: "/images/about/history-2025.svg",
  },
];

export const leadership: Leader[] = [
  {
    name: "Nasreen Jahan Rahman",
    role: "Group Chief Executive",
    image: "/images/team/leader-01.svg",
    bio: "Nasreen joined Meghna as a graduate engineer in 1998 and has led the group since 2019, following six years running the bridges division. They are a Fellow of the Institution of Engineers, Bangladesh.",
    credentials: "FIEB, BSc Civil Engineering (BUET), MBA (IBA)",
    linkedin: "#",
  },
  {
    name: "Kamrul Hasan Siddiqui",
    role: "Group Technical Director",
    image: "/images/team/leader-02.svg",
    bio: "Kamrul holds design authority across the group and chairs the technical assurance board. Their career spans 29 years of long-span bridge and deep foundation design in delta conditions.",
    credentials: "FIEB, MSc Structural Engineering (BUET), PhD Geotechnics",
    linkedin: "#",
  },
  {
    name: "Farhana Islam Chowdhury",
    role: "Chief Operating Officer",
    image: "/images/team/leader-03.svg",
    bio: "Farhana is accountable for delivery across all six sectors and every division. They previously led the Chattogram region, where they delivered the group's largest marine programme to date.",
    credentials: "MIEB, BSc Civil Engineering (CUET), MBA",
    linkedin: "#",
  },
  {
    name: "Tanvir Ahmed Bhuiyan",
    role: "Director of Health, Safety & Wellbeing",
    image: "/images/team/leader-04.svg",
    bio: "Tanvir has driven the group's accident frequency rate down by 71% over eight years and built the stop-work authority programme. They report directly to the board.",
    credentials: "NEBOSH IGC, MSc Occupational Health & Safety",
    linkedin: "#",
  },
  {
    name: "Sabrina Karim",
    role: "Director of Sustainability",
    image: "/images/team/leader-05.svg",
    bio: "Sabrina authored Meghna's net zero pathway and leads carbon, climate resilience and community impact across design and delivery. Their background is in environmental engineering.",
    credentials: "MSc Environmental Engineering (BUET), CEnv",
    linkedin: "#",
  },
  {
    name: "Rezaul Karim Talukder",
    role: "Group Finance Director",
    image: "/images/team/leader-06.svg",
    bio: "Rezaul oversees financial strategy and the commercial governance that underpins Meghna's approach to major public tenders and donor-financed contracts.",
    credentials: "FCA (ICAB), MBA Finance",
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
      "Group-wide quality management system audited annually across every region and project type.",
    logo: "/images/logos/certifications/iso-9001.svg",
  },
  {
    id: "iso-14001",
    name: "Environmental Management",
    standard: "ISO 14001:2015",
    issuer: "BSI Group",
    description:
      "Environmental management covering carbon, waste, river ecology and pollution prevention on all sites.",
    logo: "/images/logos/certifications/iso-14001.svg",
  },
  {
    id: "iso-45001",
    name: "Occupational Health & Safety",
    standard: "ISO 45001:2018",
    issuer: "BSI Group",
    description:
      "Health and safety management system independently certified across every operating region.",
    logo: "/images/logos/certifications/iso-45001.svg",
  },
  {
    id: "iso-19650",
    name: "Information Management",
    standard: "ISO 19650-2",
    issuer: "BSI Group",
    description:
      "BIM information management certified for the delivery phase, mandatory above ৳500 crore contract value.",
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
    title: "National Engineering Award — Infrastructure",
    body: "Institution of Engineers, Bangladesh",
    project: "Meghna Estuary Crossing",
  },
  {
    year: "2025",
    title: "Infrastructure Project of the Year",
    body: "SAARC Chamber of Commerce & Industry",
    project: "Meghna Estuary Crossing",
  },
  {
    year: "2025",
    title: "Safety Initiative of the Year",
    body: "Institution of Engineers, Bangladesh",
    project: "Dhaka Metro Line 4",
  },
  {
    year: "2025",
    title: "Water Sector Achievement Award",
    body: "Bangladesh Water Partnership",
    project: "Sayedabad Water Treatment",
  },
  {
    year: "2024",
    title: "Ports & Logistics Project of the Year",
    body: "Bangladesh Infrastructure Awards",
    project: "Matarbari Deep Sea Terminal",
  },
  {
    year: "2023",
    title: "Award for Structural Engineering",
    body: "Institution of Engineers, Bangladesh",
    project: "Buriganga Southern Viaduct",
  },
];

export const qualityStandards = [
  {
    title: "Independent design checking",
    description:
      "An independent Category III check on every primary structure, commissioned by us and reported to the client directly.",
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
      "Every operative is authorised to stop work without consequence. 38,000 stop-work observations logged last year.",
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
  "Roads & Highways Department",
  "Bangladesh Bridge Authority",
  "Dhaka Mass Transit Company",
  "Chittagong Port Authority",
  "Bangladesh Railway",
  "Dhaka WASA",
  "Bangladesh Water Development Board",
  "Bangladesh Power Development Board",
  "Power Grid Company of Bangladesh",
  "Bangladesh Economic Zones Authority",
  "Local Government Engineering Dept",
  "RAJUK",
];

export const sustainability = [
  {
    value: "2040",
    label: "Net zero target",
    detail: "Scope 1 and 2, aligned to Bangladesh's NDC commitments",
  },
  {
    value: "-38%",
    label: "Carbon intensity",
    detail: "Reduction per crore of turnover since the 2019 baseline",
  },
  {
    value: "91%",
    label: "Waste diverted",
    detail: "Construction waste diverted from landfill across all sites",
  },
  {
    value: "2.4M",
    label: "Trees planted",
    detail: "Along corridors and embankments we have built since 2015",
  },
];
