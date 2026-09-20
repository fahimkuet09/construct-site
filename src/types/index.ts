import type { LucideIcon } from "lucide-react";

export type ProjectSector =
  | "Industrial Buildings"
  | "Commercial Buildings"
  | "Residential & Other"
  | "Agro-Based Buildings";

export type ProjectStatus = "Completed" | "Ongoing";

export interface ProjectStat {
  label: string;
  value: string;
}

export interface ProjectPhase {
  phase: string;
  period: string;
  description: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
  width: number;
  height: number;
}

export interface Project {
  slug: string;
  title: string;
  client: string;
  sector: ProjectSector;
  status: ProjectStatus;
  location: string;
  country: string;
  /** Omitted when the client's precise site location isn't confirmed —
   * such projects appear in listings but not on the project map. */
  coordinates?: [number, number];
  summary: string;
  overview: string[];
  heroImage: string;
  thumbnail: string;
  stats: ProjectStat[];
  technologies: string[];
  challenges: { title: string; body: string }[];
  solutions: { title: string; body: string }[];
  phases: ProjectPhase[];
  gallery: GalleryImage[];
  featured?: boolean;
}

export interface ServiceCapability {
  title: string;
  description: string;
}

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  icon: LucideIcon;
  tagline: string;
  summary: string;
  description: string[];
  image: string;
  capabilities: ServiceCapability[];
  benefits: { title: string; description: string; icon: LucideIcon }[];
  deliverables: string[];
  stats: ProjectStat[];
  faqs: FAQ[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  duration: string;
  summary: string;
  detail: string;
  deliverables: string[];
  icon: LucideIcon;
  image: string;
}

export interface Equipment {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
  specs: { label: string; value: string }[];
  fleetCount: number;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  organisation: string;
  avatar: string;
  rating: number;
  project: string;
  videoPoster?: string;
  hasVideo?: boolean;
}

export interface NewsArticle {
  slug: string;
  title: string;
  category: "Projects" | "Company" | "Innovation" | "Sustainability" | "People";
  excerpt: string;
  body: string[];
  image: string;
  publishedAt: string;
  author: { name: string; role: string; avatar: string };
  featured?: boolean;
  tags: string[];
}

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: "Full-time" | "Contract" | "Graduate";
  level: "Graduate" | "Mid-level" | "Senior" | "Leadership";
  postedAt: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
}

export interface Leader {
  name: string;
  role: string;
  image: string;
  /** A short greeting line, shown above the welcome/bio quote. */
  greeting?: string;
  /** A one-line welcome statement, shown before the main bio quote. */
  welcome?: string;
  bio: string;
  credentials: string;
  linkedin?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  qualification: string;
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
  image?: string;
}

export interface Certification {
  id: string;
  name: string;
  standard: string;
  issuer: string;
  description: string;
  logo: string;
}

export type Division =
  | "Dhaka"
  | "Chattogram"
  | "Khulna"
  | "Rajshahi"
  | "Sylhet"
  | "Barishal"
  | "Rangpur"
  | "Mymensingh";

export interface Office {
  id: string;
  city: string;
  country: string;
  region: Division;
  address: string[];
  phone: string;
  email: string;
  coordinates: [number, number];
  isHeadquarters?: boolean;
  projectCount: number;
}

export interface Department {
  name: string;
  description: string;
  email: string;
  phone: string;
  icon: LucideIcon;
}

export interface ValuePillar {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Stat {
  value: number;
  suffix?: string;
  suffixKey?: string;
  prefix?: string;
  label: string;
  /** Keys into the i18n dictionary; fall back to the English strings. */
  labelKey?: string;
  description?: string;
  descriptionKey?: string;
  decimals?: number;
}

export interface NavLink {
  label: string;
  href: string;
  description?: string;
}

export interface MegaMenuColumn {
  heading: string;
  /** Key into the i18n dictionary; falls back to `heading` when absent. */
  headingKey?: string;
  links: NavLink[];
}

export interface NavItem {
  label: string;
  /** Key into the i18n dictionary; falls back to `label` when absent. */
  labelKey?: string;
  href: string;
  columns?: MegaMenuColumn[];
  featured?: {
    eyebrow: string;
    title: string;
    description: string;
    href: string;
    image: string;
  };
}
