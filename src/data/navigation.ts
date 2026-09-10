import type { NavItem } from "@/types";
import { services } from "./services";
import { projectSectors, projects } from "./projects";
import { site } from "@/lib/site";

const featuredProject = projects.find((p) => p.featured) ?? projects[0];

export const navigation: NavItem[] = [
  {
    label: "Services",
    labelKey: "nav.services",
    href: "/services",
    columns: [
      {
        heading: "Capabilities",
        headingKey: "nav.capabilities",
        links: services.slice(0, 2).map((s) => ({
          label: s.title,
          href: `/services/${s.slug}`,
          description: s.tagline,
        })),
      },
      {
        heading: "More capabilities",
        headingKey: "nav.sectors",
        links: services.slice(2).map((s) => ({
          label: s.title,
          href: `/services/${s.slug}`,
          description: s.tagline,
        })),
      },
    ],
    featured: {
      eyebrow: "How we work",
      title: "Four stages, one accountable team",
      description:
        "Measurement, engineering, fabrication and handover — under a single contract, with a 24-hour design turnaround.",
      href: "/#process",
      image: "/images/Portfolio/factory-shed-exterior-completed.jpg",
    },
  },
  {
    label: "Projects",
    labelKey: "nav.projects",
    href: "/projects",
    columns: [
      {
        heading: "By category",
        headingKey: "nav.bySector",
        links: projectSectors.slice(0, 2).map((sector) => ({
          label: sector,
          href: `/projects?sector=${encodeURIComponent(sector)}`,
        })),
      },
      {
        heading: "More categories",
        headingKey: "nav.moreSectors",
        links: projectSectors.slice(2).map((sector) => ({
          label: sector,
          href: `/projects?sector=${encodeURIComponent(sector)}`,
        })),
      },
    ],
    featured: {
      eyebrow: "Featured project",
      title: featuredProject.title,
      description: featuredProject.summary,
      href: `/projects/${featuredProject.slug}`,
      image: featuredProject.thumbnail,
    },
  },
  {
    label: "About",
    labelKey: "nav.about",
    href: "/about",
    columns: [
      {
        heading: "The company",
        headingKey: "nav.theCompany",
        links: [
          {
            label: "Who we are",
            href: "/about",
            description: `Structural steel, concept to construction, since ${site.founded}`,
          },
          {
            label: "Managing Director's message",
            href: "/about#leadership",
            description: "The vision behind the company",
          },
          {
            label: "Why choose us",
            href: "/about",
            description: "What clients get from working with us",
          },
        ],
      },
      {
        heading: "Standards",
        headingKey: "nav.standards",
        links: [
          {
            label: "Engineering standards",
            href: "/about#standards",
            description: "BNBC design, computer-aided analysis",
          },
          {
            label: "Sustainability",
            href: "/about#sustainability",
            description: "Why steel is resource-efficient",
          },
        ],
      },
    ],
  },
  { label: "Careers", labelKey: "nav.careers", href: "/careers" },
  { label: "News", labelKey: "nav.news", href: "/news" },
  { label: "Contact", labelKey: "nav.contact", href: "/contact" },
];

export const footerNav = [
  {
    heading: "Capabilities",
    headingKey: "footer.capabilities",
    links: services.map((s) => ({
      label: s.title,
      href: `/services/${s.slug}`,
    })),
  },
  {
    heading: "Company",
    headingKey: "footer.company",
    links: [
      { label: `About ${site.shortName}`, href: "/about" },
      { label: "Managing Director's message", href: "/about#leadership" },
      { label: "Engineering standards", href: "/about#standards" },
      { label: "Sustainability", href: "/about#sustainability" },
      { label: "Newsroom", href: "/news" },
    ],
  },
  {
    heading: "Work with us",
    headingKey: "footer.workWithUs",
    links: [
      { label: "All projects", href: "/projects" },
      { label: "Open positions", href: "/careers#positions" },
      { label: "Contact us", href: "/contact" },
    ],
  },
];

export const legalLinks = [
  { label: "Privacy notice", href: "/contact" },
  { label: "Terms of use", href: "/contact" },
  { label: "Accessibility", href: "/contact" },
];
