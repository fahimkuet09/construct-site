import type { NavItem } from "@/types";
import { services } from "./services";
import { projectSectors } from "./projects";

export const navigation: NavItem[] = [
  {
    label: "Services",
    href: "/services",
    columns: [
      {
        heading: "Capabilities",
        links: services.slice(0, 3).map((s) => ({
          label: s.title,
          href: `/services/${s.slug}`,
          description: s.tagline,
        })),
      },
      {
        heading: "Sectors",
        links: services.slice(3).map((s) => ({
          label: s.title,
          href: `/services/${s.slug}`,
          description: s.tagline,
        })),
      },
    ],
    featured: {
      eyebrow: "How we work",
      title: "Six stages, one accountable team",
      description:
        "Design authority and self-performed construction under a single contract — from feasibility through to the first operating cycle.",
      href: "/#process",
      image: "/images/services/nav-featured.svg",
    },
  },
  {
    label: "Projects",
    href: "/projects",
    columns: [
      {
        heading: "By sector",
        links: projectSectors.slice(0, 3).map((sector) => ({
          label: sector,
          href: `/projects?sector=${encodeURIComponent(sector)}`,
        })),
      },
      {
        heading: "More sectors",
        links: projectSectors.slice(3).map((sector) => ({
          label: sector,
          href: `/projects?sector=${encodeURIComponent(sector)}`,
        })),
      },
    ],
    featured: {
      eyebrow: "Featured project",
      title: "North Estuary Crossing",
      description:
        "A 1,420-metre cable-stayed crossing delivered four months early, without ever closing the structure it replaced.",
      href: "/projects/north-estuary-crossing",
      image: "/images/projects/north-estuary-thumb.svg",
    },
  },
  {
    label: "About",
    href: "/about",
    columns: [
      {
        heading: "The company",
        links: [
          {
            label: "Who we are",
            href: "/about",
            description: "Fifty-one years of heavy civil engineering",
          },
          {
            label: "Leadership",
            href: "/about#leadership",
            description: "The people accountable for delivery",
          },
          {
            label: "Our history",
            href: "/about#history",
            description: "From fourteen employees to 24 countries",
          },
        ],
      },
      {
        heading: "Standards",
        links: [
          {
            label: "Safety & quality",
            href: "/about#certifications",
            description: "ISO certification and assurance",
          },
          {
            label: "Awards",
            href: "/about#awards",
            description: "Industry recognition",
          },
          {
            label: "Sustainability",
            href: "/about#sustainability",
            description: "Net zero by 2035",
          },
        ],
      },
    ],
  },
  { label: "Careers", href: "/careers" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
];

export const footerNav = [
  {
    heading: "Capabilities",
    links: services.map((s) => ({
      label: s.title,
      href: `/services/${s.slug}`,
    })),
  },
  {
    heading: "Company",
    links: [
      { label: "About Meridian", href: "/about" },
      { label: "Leadership", href: "/about#leadership" },
      { label: "Our history", href: "/about#history" },
      { label: "Sustainability", href: "/about#sustainability" },
      { label: "Awards", href: "/about#awards" },
      { label: "Newsroom", href: "/news" },
    ],
  },
  {
    heading: "Work with us",
    links: [
      { label: "All projects", href: "/projects" },
      { label: "Open positions", href: "/careers#positions" },
      { label: "Graduate programme", href: "/careers#positions" },
      { label: "Supply chain", href: "/contact" },
      { label: "Contact us", href: "/contact" },
    ],
  },
];

export const legalLinks = [
  { label: "Privacy notice", href: "/contact" },
  { label: "Terms of use", href: "/contact" },
  { label: "Modern slavery statement", href: "/about" },
  { label: "Gender pay gap report", href: "/careers" },
  { label: "Accessibility", href: "/contact" },
];
