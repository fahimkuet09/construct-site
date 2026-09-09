import type { NewsArticle } from "@/types";

export const news: NewsArticle[] = [
  {
    slug: "why-steel-beats-rcc-for-fast-turnaround-buildings",
    title: "Why steel outpaces RCC for a fast-turnaround industrial building",
    category: "Innovation",
    excerpt:
      "When a client is working back from a production date, the difference between a steel frame and a cast-in-place structure isn't marginal — it's the difference between hitting the date and missing it.",
    body: [
      "Every industrial client we work with is, in one way or another, working backwards from a date — a lease start, a production deadline, a tenant move-in. The structure has to be ready by then, not eventually.",
      "A cast-in-place concrete building is a sequence of wet trades: formwork, reinforcement, pour, cure, strip, repeat, floor by floor. Each step waits on the last one to finish and cure before the next can start.",
      "A pre-engineered steel structure moves the slow part off the critical path. While foundations are being cast on site, the frame, purlins and cladding are already being cut, welded and coated in the workshop. By the time foundations are ready, there's a structure ready to bolt onto them.",
      "That's the whole logic behind our four-stage process — measurement, calculation, fabrication and erection. Fabrication doesn't wait for site works to finish; it runs alongside them.",
      "None of this means steel is the right answer for every building. But for a client whose real constraint is time rather than budget, it's usually the deciding factor.",
    ],
    image: "/images/news/news-01.svg",
    publishedAt: "2026-08-15",
    author: {
      name: "Engineering Team",
      role: "Universal Structural Steel Ltd.",
      avatar: "/images/team/author-01.svg",
    },
    featured: true,
    tags: ["Industrial buildings", "Engineering"],
  },
  {
    slug: "inside-our-24-hour-engineering-turnaround",
    title: "Inside our 24-hour engineering turnaround",
    category: "Company",
    excerpt:
      "A structural calculation and a firm quotation, usually within a day of the site visit. Here's what actually happens in that 24 hours.",
    body: [
      "One of the most common questions we get is how we can turn a firm quotation around in 24 hours when other quotes take weeks. The honest answer is that most of the delay elsewhere isn't in the calculation — it's in the back-and-forth beforehand.",
      "We start with a site visit, not a form. An engineer records the actual dimensions, ground conditions and the client's usage requirements in person, which removes most of the clarifying questions that usually stall a quotation.",
      "From there, structural design runs on computer-aided analysis software against BNBC loading requirements — sizing the primary frame, purlins, bracing and connections in one pass rather than several rounds of revision.",
      "The output is a firm design and price, not a rough estimate that changes later. It's also why we can move straight into fabrication drawings once a client confirms — there's no second design phase to wait for.",
    ],
    image: "/images/news/news-02.svg",
    publishedAt: "2026-07-22",
    author: {
      name: "Engineering Team",
      role: "Universal Structural Steel Ltd.",
      avatar: "/images/team/author-01.svg",
    },
    featured: true,
    tags: ["Process", "Engineering"],
  },
  {
    slug: "what-makes-a-good-poultry-shed",
    title: "What makes a good poultry shed: ventilation, pitch and ridge height",
    category: "Innovation",
    excerpt:
      "An agro-based shed lives or dies on airflow. Three details decide whether a poultry house works for the birds in it — or just looks like a generic steel box.",
    body: [
      "It's tempting to treat every steel shed as the same design exercise with different dimensions. For agro-based buildings, that's a mistake — a poultry shed that isn't designed around ventilation will underperform no matter how solid the steel frame is.",
      "Roof pitch controls how effectively hot air rises and escapes rather than pooling under the ridge. Too shallow, and a shed traps heat exactly where it shouldn't.",
      "Ridge venting is the second piece — a continuous outlet at the highest point of the roof, sized to the shed length, gives hot, humid air somewhere to go. Without it, even a well-pitched roof underperforms.",
      "Eave height sets the airflow path through open sides at bird level, which matters more to flock welfare than most of the structural spec sheet.",
      "None of this is exotic engineering — it's just designing the shed around the operation it's actually going to house, rather than adapting a standard template after the fact.",
    ],
    image: "/images/news/news-03.svg",
    publishedAt: "2026-06-30",
    author: {
      name: "Engineering Team",
      role: "Universal Structural Steel Ltd.",
      avatar: "/images/team/author-01.svg",
    },
    tags: ["Agro-based buildings", "Engineering"],
  },
  {
    slug: "new-website-launch",
    title: "A new home for our project portfolio, online",
    category: "Company",
    excerpt:
      "We've rebuilt our website around what clients actually ask us: what we build, how the process works, and what we've delivered so far.",
    body: [
      "We've launched a new website built around the questions prospective clients actually ask us — what kind of buildings we take on, how our four-stage process works, and what we've delivered so far.",
      "The project portfolio is organised by building category — industrial, commercial, residential and agro-based — rather than as one long undifferentiated list, so it's easier to find work comparable to what you're planning.",
      "We'll keep adding projects as they're completed. If you're planning a structure and want to see something specific, get in touch directly.",
    ],
    image: "/images/news/news-04.svg",
    publishedAt: "2026-05-18",
    author: {
      name: "Universal Structural Steel Ltd.",
      role: "Company update",
      avatar: "/images/team/author-01.svg",
    },
    tags: ["Company"],
  },
];

export const newsCategories = [
  "All",
  "Projects",
  "Company",
  "Innovation",
  "Sustainability",
  "People",
] as const;

export function getArticle(slug: string) {
  return news.find((n) => n.slug === slug);
}

export function getRelatedArticles(slug: string, limit = 3) {
  const current = getArticle(slug);
  if (!current) return news.slice(0, limit);
  const same = news.filter(
    (n) => n.slug !== slug && n.category === current.category,
  );
  const rest = news.filter(
    (n) => n.slug !== slug && n.category !== current.category,
  );
  return [...same, ...rest].slice(0, limit);
}
