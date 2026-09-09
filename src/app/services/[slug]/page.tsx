import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";
import { services, getService } from "@/data/services";
import { projects } from "@/data/projects";
import { processSteps } from "@/data/process";
import { PageHero } from "@/components/shared/page-hero";
import { FaqSection } from "@/components/shared/faq-section";
import { CtaBand } from "@/components/sections/cta-band";
import { ProjectCard } from "@/components/shared/project-card";
import { ServiceCard } from "@/components/shared/service-card";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";

/** Maps a service onto the project category that represents it. */
const SECTOR_BY_SERVICE: Record<string, string> = {
  "industrial-buildings": "Industrial Buildings",
  "commercial-buildings": "Commercial Buildings",
  "residential-buildings": "Residential & Other",
  "agro-based-buildings": "Agro-Based Buildings",
};

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Capability not found" };

  return {
    title: service.title,
    description: service.summary,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const sector = SECTOR_BY_SERVICE[service.slug];
  const relatedProjects = projects
    .filter((p) => p.sector === sector)
    .slice(0, 3);
  const otherServices = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={service.tagline}
        title={service.title}
        lead={service.summary}
        image={service.image}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
      >
        <dl className="mt-10 flex flex-wrap gap-x-12 gap-y-6">
          {service.stats.map((stat) => (
            <div key={stat.label}>
              <dd className="font-heading text-[1.75rem] leading-none font-extrabold text-white tabular-nums">
                {stat.value}
              </dd>
              <dt className="mt-2 font-heading text-[0.8125rem] font-semibold text-accent">
                {stat.label}
              </dt>
            </div>
          ))}
        </dl>
      </PageHero>

      {/* ================================================== overview */}
      <section className="section-y bg-background">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
            <Reveal>
              <SectionHeading
                eyebrow="Overview"
                title={`What ${service.shortTitle.toLowerCase()} work involves`}
              />
              {service.description.map((para) => (
                <p key={para} className="mt-5 max-w-[62ch] text-body">
                  {para}
                </p>
              ))}
            </Reveal>

            <Reveal direction="left">
              <div className="rounded-[var(--radius-card)] border border-line bg-surface p-8">
                <h3 className="font-heading text-[0.6875rem] font-bold tracking-[0.16em] text-muted uppercase">
                  What you receive
                </h3>
                <ul className="mt-6 flex flex-col gap-3.5">
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary">
                        <Check className="size-3" strokeWidth={3.2} aria-hidden />
                      </span>
                      <span className="text-[0.9375rem] leading-relaxed text-body">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button asChild variant="primary" size="md" className="mt-7 w-full">
                  <Link href="/contact">
                    Discuss your project
                    <ArrowUpRight className="size-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================================== capabilities */}
      <section className="section-y relative overflow-hidden bg-surface">
        <div aria-hidden className="blueprint-grid absolute inset-0 opacity-60" />
        <div className="container-shell relative">
          <Reveal>
            <SectionHeading
              eyebrow="Capabilities"
              title="What this service covers"
              lead="Each of these is delivered by our own engineering, fabrication and erection teams — not passed to a separate subcontractor."
            />
          </Reveal>

          <RevealGroup
            as="ul"
            stagger={0.06}
            className="mt-14 grid gap-6 sm:grid-cols-2 lg:gap-8"
          >
            {service.capabilities.map((cap, i) => (
              <RevealItem
                key={cap.title}
                as="li"
                className="group rounded-[var(--radius-card)] border border-line bg-surface p-8 transition-all duration-400 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[var(--shadow-raise)]"
              >
                <span
                  aria-hidden
                  className="font-heading text-[0.8125rem] font-extrabold tracking-[0.1em] text-accent tabular-nums"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-[1.1875rem] font-bold text-heading">
                  {cap.title}
                </h3>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-body">
                  {cap.description}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* ================================================== benefits */}
      <section className="section-y bg-secondary text-white">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              invert
              eyebrow="Why it matters"
              title="What this approach changes for you"
            />
          </Reveal>

          <RevealGroup
            as="ul"
            stagger={0.08}
            className="mt-14 grid gap-6 lg:grid-cols-3 lg:gap-8"
          >
            {service.benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <RevealItem
                  key={benefit.title}
                  as="li"
                  className="rounded-[var(--radius-card)] border border-white/12 bg-white/[0.05] p-8"
                >
                  <span className="flex size-13 items-center justify-center rounded-[16px] bg-accent/15 text-accent">
                    <Icon className="size-6" strokeWidth={1.85} aria-hidden />
                  </span>
                  <h3 className="mt-6 text-[1.1875rem] font-bold text-white">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-white/60">
                    {benefit.description}
                  </p>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </div>
      </section>

      {/* =================================================== process */}
      <section className="section-y bg-background">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow="How we deliver it"
              title="Four stages, from site visit to handover"
            />
          </Reveal>

          <RevealGroup
            as="ol"
            stagger={0.05}
            className="mt-14 grid gap-px overflow-hidden rounded-[var(--radius-card)] border border-line bg-line md:grid-cols-2 lg:grid-cols-4"
          >
            {processSteps.map((step) => {
              const Icon = step.icon;
              return (
                <RevealItem key={step.id} as="li" className="bg-surface p-7">
                  <div className="flex items-center gap-4">
                    <span className="flex size-11 items-center justify-center rounded-xl bg-primary-50 text-primary">
                      <Icon className="size-5" strokeWidth={1.9} aria-hidden />
                    </span>
                    <span className="font-heading text-[0.75rem] font-extrabold tracking-[0.14em] text-accent-700 uppercase">
                      Stage {step.number}
                    </span>
                  </div>
                  <h3 className="mt-5 text-[1.0625rem] font-bold text-heading">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[0.875rem] leading-relaxed text-body">
                    {step.summary}
                  </p>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </div>
      </section>

      {/* =========================================== related projects */}
      {relatedProjects.length > 0 ? (
        <section className="section-y bg-surface">
          <div className="container-shell">
            <Reveal>
              <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                <SectionHeading
                  eyebrow="Proof"
                  title={`${service.shortTitle} projects we have delivered`}
                />
                <Button asChild variant="outline" size="lg" className="shrink-0">
                  <Link href={`/projects?sector=${encodeURIComponent(sector ?? "")}`}>
                    All {service.shortTitle.toLowerCase()} projects
                    <ArrowUpRight className="size-4.5" aria-hidden />
                  </Link>
                </Button>
              </div>
            </Reveal>

            <RevealGroup
              as="ul"
              stagger={0.07}
              className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
            >
              {relatedProjects.map((project) => (
                <RevealItem key={project.slug} as="li">
                  <ProjectCard project={project} />
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>
      ) : null}

      <FaqSection
        faqs={service.faqs}
        eyebrow="Questions"
        title={`${service.shortTitle} — what clients ask`}
        className="section-y bg-background"
      />

      {/* =========================================== other services */}
      <section className="section-y bg-surface">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Other services"
              title="What else we can deliver on the same contract"
            />
          </Reveal>

          <RevealGroup
            as="ul"
            stagger={0.07}
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
          >
            {otherServices.map((other, i) => (
              <RevealItem key={other.slug} as="li">
                <ServiceCard service={other} index={i} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <CtaBand
        eyebrow="Next step"
        title={`Have a ${service.shortTitle.toLowerCase()} project in the pipeline?`}
        body="Tell us the constraint that worries you most. We will give you a straight assessment of what is achievable and what it will take."
        primary={{ label: "Start a conversation", href: "/contact" }}
        secondary={{ label: "See all services", href: "/services" }}
      />
    </>
  );
}
