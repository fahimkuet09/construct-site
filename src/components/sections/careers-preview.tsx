import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, MapPin } from "lucide-react";
import { jobs, benefits, culture } from "@/data/careers";
import { Button } from "@/components/ui/button";
import { Badge, SectionHeading } from "@/components/ui";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { ParallaxImage } from "@/components/motion/parallax";

export function CareersPreview() {
  const openRoles = jobs.slice(0, 4);

  return (
    <section id="careers" className="section-y bg-surface">
      <div className="container-shell">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          {/* ---------------------------------------------- narrative */}
          <div>
            <Reveal>
              <SectionHeading
                eyebrow="Careers"
                title="Engineering is the point, not a detour"
                lead="We are a technical business run by engineers. Graduates contribute to live projects in their first week, and technical excellence is a route to senior leadership rather than away from it."
              />
            </Reveal>

            <RevealGroup className="mt-9 flex flex-col gap-5" as="ul">
              {culture.map((item) => {
                const Icon = item.icon;
                return (
                  <RevealItem key={item.title} as="li" className="flex gap-4">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary">
                      <Icon className="size-5" strokeWidth={1.9} aria-hidden />
                    </span>
                    <span>
                      <span className="block font-heading text-[1rem] font-bold text-heading">
                        {item.title}
                      </span>
                      <span className="mt-1 block text-[0.9375rem] leading-relaxed text-body">
                        {item.description}
                      </span>
                    </span>
                  </RevealItem>
                );
              })}
            </RevealGroup>

            <Reveal delay={0.08}>
              <div className="mt-10">
                <ParallaxImage
                  className="aspect-[16/9] w-full rounded-[var(--radius-card)]"
                  intensity={8}
                >
                  <Image
                    src="/images/careers/culture-01.svg"
                    alt="A Meridian delivery team during a morning briefing on site"
                    fill
                    sizes="(max-width: 1024px) 100vw, 560px"
                    className="object-cover"
                  />
                </ParallaxImage>
              </div>
            </Reveal>
          </div>

          {/* ------------------------------------------------- roles */}
          <div>
            <Reveal direction="left">
              <div className="flex items-end justify-between gap-6">
                <p className="font-heading text-[0.6875rem] font-bold tracking-[0.16em] text-muted uppercase">
                  Open positions
                </p>
                <span className="font-heading text-[0.8125rem] font-bold text-primary tabular-nums">
                  {jobs.length} live roles
                </span>
              </div>
            </Reveal>

            <RevealGroup as="ul" stagger={0.06} className="mt-5 flex flex-col gap-3">
              {openRoles.map((job) => (
                <RevealItem key={job.id} as="li">
                  <Link
                    href={`/careers#${job.id}`}
                    className="group flex items-center gap-5 rounded-[var(--radius-card)] border border-line bg-surface p-6 transition-all duration-400 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-[var(--shadow-raise)]"
                  >
                    <span className="min-w-0 flex-1">
                      <span className="flex flex-wrap items-center gap-2.5">
                        <span className="font-heading text-[1.0625rem] font-bold text-heading transition-colors group-hover:text-primary">
                          {job.title}
                        </span>
                        <Badge tone="primary">{job.type}</Badge>
                      </span>
                      <span className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-[0.875rem] text-muted">
                        <span>{job.department}</span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="size-3.5" aria-hidden />
                          {job.location}
                        </span>
                      </span>
                    </span>
                    <span
                      aria-hidden
                      className="flex size-11 shrink-0 items-center justify-center rounded-full border border-line text-muted transition-all duration-400 group-hover:border-primary group-hover:bg-primary group-hover:text-white"
                    >
                      <ArrowUpRight className="size-4.5" />
                    </span>
                  </Link>
                </RevealItem>
              ))}
            </RevealGroup>

            <Reveal delay={0.08}>
              <Button asChild variant="primary" size="lg" className="mt-6 w-full sm:w-auto">
                <Link href="/careers#positions">
                  See all {jobs.length} positions
                  <ArrowUpRight
                    className="size-4.5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                    aria-hidden
                  />
                </Link>
              </Button>
            </Reveal>

            {/* --------------------------------------------- benefits */}
            <Reveal delay={0.12}>
              <div className="mt-10 rounded-[var(--radius-card)] border border-line bg-background p-7">
                <p className="font-heading text-[0.6875rem] font-bold tracking-[0.16em] text-muted uppercase">
                  What we offer
                </p>
                <ul className="mt-5 grid gap-x-6 gap-y-4 sm:grid-cols-2">
                  {benefits.map((benefit) => {
                    const Icon = benefit.icon;
                    return (
                      <li key={benefit.title} className="flex items-start gap-3">
                        <Icon
                          className="mt-0.5 size-4.5 shrink-0 text-accent-700"
                          strokeWidth={2}
                          aria-hidden
                        />
                        <span className="text-[0.9375rem] font-medium text-heading">
                          {benefit.title}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
