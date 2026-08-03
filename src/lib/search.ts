import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { news } from "@/data/news";
import { jobs } from "@/data/careers";

export interface SearchDoc {
  id: string;
  title: string;
  description: string;
  href: string;
  group: "Projects" | "Capabilities" | "News" | "Careers" | "Pages";
  keywords: string;
}

const staticPages: SearchDoc[] = [
  {
    id: "page-about",
    title: "About Meghna",
    description: "Fifty-one years of heavy civil engineering across Bangladesh.",
    href: "/about",
    group: "Pages",
    keywords: "about history leadership values mission vision awards certifications iso",
  },
  {
    id: "page-projects",
    title: "All projects",
    description: "Browse the full portfolio by sector, status and region.",
    href: "/projects",
    group: "Pages",
    keywords: "projects portfolio work case studies",
  },
  {
    id: "page-careers",
    title: "Careers at Meghna",
    description: "Open positions, graduate programme, benefits and hiring process.",
    href: "/careers",
    group: "Pages",
    keywords: "careers jobs vacancies graduate hiring benefits",
  },
  {
    id: "page-contact",
    title: "Contact",
    description: "Offices, departments and enquiry form.",
    href: "/contact",
    group: "Pages",
    keywords: "contact offices phone email enquiry tender supply chain",
  },
];

export const searchIndex: SearchDoc[] = [
  ...projects.map((p) => ({
    id: `project-${p.slug}`,
    title: p.title,
    description: p.summary,
    href: `/projects/${p.slug}`,
    group: "Projects" as const,
    keywords: [
      p.sector,
      p.country,
      p.location,
      p.client,
      p.status,
      ...p.technologies,
    ].join(" "),
  })),
  ...services.map((s) => ({
    id: `service-${s.slug}`,
    title: s.title,
    description: s.tagline,
    href: `/services/${s.slug}`,
    group: "Capabilities" as const,
    keywords: [s.summary, ...s.capabilities.map((c) => c.title)].join(" "),
  })),
  ...news.map((n) => ({
    id: `news-${n.slug}`,
    title: n.title,
    description: n.excerpt,
    href: `/news/${n.slug}`,
    group: "News" as const,
    keywords: [n.category, ...n.tags].join(" "),
  })),
  ...jobs.map((j) => ({
    id: `job-${j.id}`,
    title: j.title,
    description: `${j.department} — ${j.location}`,
    href: `/careers#${j.id}`,
    group: "Careers" as const,
    keywords: [j.department, j.location, j.type, j.level, j.summary].join(" "),
  })),
  ...staticPages,
];

export function searchSite(query: string, limit = 8): SearchDoc[] {
  const q = query.trim().toLowerCase();
  if (q.length < 2) return [];

  const terms = q.split(/\s+/);

  return searchIndex
    .map((doc) => {
      const title = doc.title.toLowerCase();
      const haystack = `${title} ${doc.description} ${doc.keywords}`.toLowerCase();

      // Every term must appear somewhere, then rank by where the match landed.
      if (!terms.every((t) => haystack.includes(t))) return null;

      let score = 0;
      for (const t of terms) {
        if (title.startsWith(t)) score += 12;
        else if (title.includes(t)) score += 7;
        if (doc.description.toLowerCase().includes(t)) score += 2;
      }
      return { doc, score };
    })
    .filter((r): r is { doc: SearchDoc; score: number } => r !== null)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((r) => r.doc);
}
