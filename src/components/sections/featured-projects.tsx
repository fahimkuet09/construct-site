import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { getProject } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { Badge, SectionHeading } from "@/components/ui";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";

/**
 * A curated homepage teaser, not the full filterable archive — that lives at
 * /projects. Five projects, one dominant and four in an alternating
 * large/small rhythm, so the portfolio reads as an editorial spread rather
 * than a uniform card grid.
 */
const FEATURED_SLUG = "navana-pharmaceuticals-shed";
const SUPPORTING_SLUGS = [
  "amber-group-facility",
  "nourish-poultry-facility",
  "soleman-khan-jute-mills",
  "silver-line-composite-textile",
];

export function FeaturedProjects() {
  const featured = getProject(FEATURED_SLUG);
  const supporting = SUPPORTING_SLUGS.map(getProject).filter(
    (p): p is NonNullable<typeof p> => Boolean(p),
  );

  if (!featured) return null;

  return (
    <section id="projects" className="section-y bg-background">
      <div className="container-shell">
        <Reveal>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Our portfolio"
              title="Steel structures we've built, and structures underway"
              lead="A selection of industrial and agro-based work, from measurement to handover."
            />
            <Button asChild variant="outline" size="lg" className="shrink-0">
              <Link href="/projects">
                View all projects
                <ArrowUpRight
                  className="size-4.5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                  aria-hidden
                />
              </Link>
            </Button>
          </div>
        </Reveal>

        {/* --------------------------------------------- dominant feature */}
        <Reveal delay={0.06}>
          <Link
            href={`/projects/${featured.slug}`}
            className="group relative mt-14 block overflow-hidden rounded-[var(--radius-card)] border border-line lg:mt-16"
          >
            <div className="relative aspect-[16/10] w-full sm:aspect-[21/9]">
              <Image
                src={featured.heroImage}
                alt={`${featured.title} — ${featured.client}`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 1400px"
                className="object-cover transition-transform duration-[1200ms] ease-[var(--ease-out-quint)] group-hover:scale-[1.04]"
              />
              <span
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-primary-950/85 via-primary-950/15 to-transparent"
              />

              <div className="absolute inset-x-0 top-0 flex flex-wrap items-start justify-between gap-3 p-5 sm:p-9">
                <span
                  aria-hidden
                  className="font-heading text-[0.75rem] font-extrabold tracking-[0.14em] text-white/50 uppercase sm:text-[0.8125rem]"
                >
                  01 — Featured
                </span>

                <span className="flex flex-wrap justify-end gap-2">
                  <Badge tone="dark">{featured.sector}</Badge>
                  <Badge
                    tone="dark"
                    className={
                      featured.status === "Completed"
                        ? "border-success-400/45 text-success-400"
                        : "border-accent/55 text-accent"
                    }
                  >
                    {featured.status}
                  </Badge>
                </span>
              </div>

              <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 p-7 sm:flex-row sm:items-end sm:justify-between sm:gap-6 sm:p-9">
                <span className="min-w-0">
                  <span className="block text-[clamp(1.5rem,1.1rem+1.6vw,2.5rem)] leading-[1.1] font-bold tracking-[-0.02em] text-white">
                    {featured.title}
                  </span>
                  <span className="mt-2 block text-[0.9375rem] text-white/70">
                    {featured.client} — {featured.location}, {featured.country}
                  </span>
                </span>
                <span className="flex shrink-0 items-center gap-2 font-heading text-[0.9375rem] font-bold text-white transition-colors group-hover:text-accent">
                  View project
                  <ArrowUpRight
                    className="size-4.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden
                  />
                </span>
              </div>
            </div>
          </Link>
        </Reveal>

        {/* ---------------------------------------- alternating supporting */}
        <RevealGroup
          as="ul"
          stagger={0.07}
          className="mt-6 flex flex-col gap-6 lg:mt-8"
        >
          {[supporting.slice(0, 2), supporting.slice(2, 4)].map((pair, row) =>
            pair.length ? (
              <li key={row} className="grid gap-6 sm:grid-cols-3">
                {pair.map((project, i) => {
                  const isLarge = row % 2 === 0 ? i === 0 : i === 1;
                  return (
                    <RevealItem
                      key={project.slug}
                      className={isLarge ? "sm:col-span-2" : "sm:col-span-1"}
                    >
                      <Link
                        href={`/projects/${project.slug}`}
                        className="group relative block overflow-hidden rounded-[var(--radius-card)] border border-line"
                      >
                        <div
                          className={`relative w-full ${isLarge ? "aspect-[16/10]" : "aspect-[4/5] sm:aspect-[4/3]"}`}
                        >
                          <Image
                            src={project.thumbnail}
                            alt={`${project.title} — ${project.client}`}
                            fill
                            sizes={
                              isLarge
                                ? "(max-width: 640px) 100vw, 66vw"
                                : "(max-width: 640px) 100vw, 33vw"
                            }
                            className="object-cover transition-transform duration-[1000ms] ease-[var(--ease-out-quint)] group-hover:scale-[1.06]"
                          />
                          <span
                            aria-hidden
                            className="absolute inset-0 bg-gradient-to-t from-primary-950/80 via-primary-950/5 to-transparent"
                          />
                          <span className="absolute top-5 right-5">
                            <Badge tone="dark">{project.status}</Badge>
                          </span>
                          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                            <span className="block text-[1.0625rem] leading-tight font-bold text-white sm:text-[1.25rem]">
                              {project.title}
                            </span>
                            <span className="mt-1.5 block text-[0.8125rem] text-white/65">
                              {project.sector}
                            </span>
                          </div>
                        </div>
                      </Link>
                    </RevealItem>
                  );
                })}
              </li>
            ) : null,
          )}
        </RevealGroup>
      </div>
    </section>
  );
}
