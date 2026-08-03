import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  Award,
  Building2,
  CalendarClock,
  CircleDollarSign,
  Cpu,
  Lightbulb,
  MapPin,
  TriangleAlert,
} from "lucide-react";
import { projects, getProject, getRelatedProjects } from "@/data/projects";
import { PageHero } from "@/components/shared/page-hero";
import { ProjectGallery } from "@/components/shared/project-gallery";
import { BeforeAfter } from "@/components/shared/before-after";
import { ProjectCard } from "@/components/shared/project-card";
import { CtaBand } from "@/components/sections/cta-band";
import { Badge, SectionHeading } from "@/components/ui";
import { Button } from "@/components/ui/button";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { formatCrore } from "@/lib/utils";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found" };

  return { title: project.title, description: project.summary };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const related = getRelatedProjects(slug, 3);

  const factSheet = [
    { icon: Building2, label: "Client", value: project.client },
    { icon: MapPin, label: "Location", value: `${project.location}, ${project.country}` },
    {
      icon: CircleDollarSign,
      label: "Contract value",
      value: formatCrore(project.contractValueCrore),
    },
    {
      icon: CalendarClock,
      label: "Programme",
      value: `${project.durationMonths} months`,
    },
  ];

  return (
    <>
      <PageHero
        eyebrow={project.sector}
        title={project.title}
        lead={project.summary}
        image={project.heroImage}
        size="tall"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "/projects" },
          { label: project.title },
        ]}
      >
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Badge tone="dark">{project.status}</Badge>
          <Badge tone="dark">{project.year}</Badge>
          <Badge tone="dark">
            <MapPin className="size-3" aria-hidden />
            {project.country}
          </Badge>
        </div>

        <dl className="mt-10 grid grid-cols-2 gap-x-10 gap-y-6 sm:grid-cols-4">
          {project.stats.map((stat) => (
            <div key={stat.label}>
              <dd className="font-heading text-[clamp(1.5rem,1.2rem+0.9vw,2rem)] leading-none font-extrabold text-white tabular-nums">
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
              <SectionHeading eyebrow="Overview" title="What the project involved" />
              {project.overview.map((para) => (
                <p key={para} className="mt-5 max-w-[62ch] text-body">
                  {para}
                </p>
              ))}

              {project.awards?.length ? (
                <div className="mt-9 rounded-[var(--radius-card)] border border-accent/25 bg-accent/8 p-6">
                  <div className="flex items-center gap-2.5">
                    <Award className="size-5 text-accent-700" strokeWidth={1.9} aria-hidden />
                    <p className="font-heading text-[0.6875rem] font-bold tracking-[0.16em] text-accent-700 uppercase">
                      Recognition
                    </p>
                  </div>
                  <ul className="mt-4 flex flex-col gap-2">
                    {project.awards.map((award) => (
                      <li
                        key={award}
                        className="text-[0.9375rem] font-medium text-heading"
                      >
                        {award}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </Reveal>

            <Reveal direction="left" className="flex flex-col gap-6">
              {/* Fact sheet */}
              <div className="rounded-[var(--radius-card)] border border-line bg-surface p-7">
                <h2 className="font-heading text-[0.6875rem] font-bold tracking-[0.16em] text-muted uppercase">
                  Project facts
                </h2>
                <dl className="mt-5 flex flex-col divide-y divide-line">
                  {factSheet.map((fact) => {
                    const Icon = fact.icon;
                    return (
                      <div
                        key={fact.label}
                        className="flex items-start gap-3.5 py-3.5 first:pt-0 last:pb-0"
                      >
                        <Icon
                          className="mt-0.5 size-4.5 shrink-0 text-primary"
                          strokeWidth={1.9}
                          aria-hidden
                        />
                        <div className="min-w-0">
                          <dt className="text-[0.75rem] font-medium text-muted">
                            {fact.label}
                          </dt>
                          <dd className="font-heading text-[0.9375rem] font-bold text-heading">
                            {fact.value}
                          </dd>
                        </div>
                      </div>
                    );
                  })}
                </dl>
              </div>

              {/* Technologies */}
              <div className="rounded-[var(--radius-card)] border border-line bg-surface p-7">
                <div className="flex items-center gap-2.5">
                  <Cpu className="size-4.5 text-primary" strokeWidth={1.9} aria-hidden />
                  <h2 className="font-heading text-[0.6875rem] font-bold tracking-[0.16em] text-muted uppercase">
                    Technologies & methods
                  </h2>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-line bg-background px-3.5 py-1.5 text-[0.8125rem] font-medium text-body"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              <Button asChild variant="primary" size="lg">
                <Link href="/contact">
                  Discuss a similar project
                  <ArrowUpRight className="size-4.5" aria-hidden />
                </Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ==================================== challenges & solutions */}
      <section className="section-y relative overflow-hidden bg-secondary text-white">
        <div aria-hidden className="blueprint-grid-dark absolute inset-0 opacity-60" />
        <div className="container-shell relative">
          <Reveal>
            <SectionHeading
              invert
              eyebrow="The hard part"
              title="What made this project difficult, and what we did about it"
              lead="Every entry on the left is a constraint that could have stopped the programme. Every entry on the right is the decision that removed it."
            />
          </Reveal>

          <div className="mt-14 grid gap-8 lg:mt-16 lg:grid-cols-2 lg:gap-10">
            {/* Challenges */}
            <div>
              <div className="flex items-center gap-3">
                <span className="flex size-11 items-center justify-center rounded-xl bg-danger/15 text-danger">
                  <TriangleAlert className="size-5" strokeWidth={2} aria-hidden />
                </span>
                <h3 className="font-heading text-[0.6875rem] font-bold tracking-[0.16em] text-white/45 uppercase">
                  Challenges
                </h3>
              </div>

              <RevealGroup as="ul" stagger={0.07} className="mt-6 flex flex-col gap-4">
                {project.challenges.map((item, i) => (
                  <RevealItem
                    key={item.title}
                    as="li"
                    className="rounded-[var(--radius-card)] border border-white/12 bg-white/[0.04] p-7"
                  >
                    <span
                      aria-hidden
                      className="font-heading text-[0.75rem] font-extrabold tracking-[0.1em] text-white/30 tabular-nums"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h4 className="mt-3 font-heading text-[1.0625rem] font-bold text-white">
                      {item.title}
                    </h4>
                    <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-white/60">
                      {item.body}
                    </p>
                  </RevealItem>
                ))}
              </RevealGroup>
            </div>

            {/* Solutions */}
            <div>
              <div className="flex items-center gap-3">
                <span className="flex size-11 items-center justify-center rounded-xl bg-accent/15 text-accent">
                  <Lightbulb className="size-5" strokeWidth={2} aria-hidden />
                </span>
                <h3 className="font-heading text-[0.6875rem] font-bold tracking-[0.16em] text-white/45 uppercase">
                  Solutions
                </h3>
              </div>

              <RevealGroup as="ul" stagger={0.07} className="mt-6 flex flex-col gap-4">
                {project.solutions.map((item, i) => (
                  <RevealItem
                    key={item.title}
                    as="li"
                    className="rounded-[var(--radius-card)] border border-accent/25 bg-accent/8 p-7"
                  >
                    <span
                      aria-hidden
                      className="font-heading text-[0.75rem] font-extrabold tracking-[0.1em] text-accent/60 tabular-nums"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h4 className="mt-3 font-heading text-[1.0625rem] font-bold text-white">
                      {item.title}
                    </h4>
                    <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-white/70">
                      {item.body}
                    </p>
                  </RevealItem>
                ))}
              </RevealGroup>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================== timeline */}
      <section className="section-y bg-background">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Programme"
              title="How the work was sequenced"
              lead={`${project.durationMonths} months from mobilisation to handover, phased to keep the critical path clear of the constraints above.`}
            />
          </Reveal>

          <div className="relative mt-14 lg:mt-16">
            <span
              aria-hidden
              className="absolute top-0 bottom-0 left-[1.4375rem] w-px bg-line"
            />

            <ol className="flex flex-col gap-8">
              {project.phases.map((phase, i) => (
                <Reveal key={phase.phase} as="li" className="relative pl-16">
                  <span
                    aria-hidden
                    className="absolute top-1 left-0 flex size-12 items-center justify-center rounded-full border border-line bg-surface font-heading text-[0.8125rem] font-extrabold text-primary tabular-nums"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="rounded-[var(--radius-card)] border border-line bg-surface p-7 transition-all duration-400 hover:border-primary/25 hover:shadow-[var(--shadow-raise)]">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                      <h3 className="font-heading text-[1.125rem] font-bold text-heading">
                        {phase.phase}
                      </h3>
                      <span className="shrink-0 font-heading text-[0.8125rem] font-bold text-accent-700 tabular-nums">
                        {phase.period}
                      </span>
                    </div>
                    <p className="mt-3 max-w-[70ch] text-[0.9375rem] leading-relaxed text-body">
                      {phase.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ============================================== before/after */}
      {project.beforeAfter ? (
        <section className="section-y bg-surface">
          <div className="container-shell">
            <Reveal>
              <SectionHeading
                eyebrow="Before & after"
                title="The same view, five years apart"
                lead="Drag the handle to compare the site as we found it against the asset in operational service."
              />
            </Reveal>

            <Reveal delay={0.08}>
              <div className="mt-12">
                <BeforeAfter
                  before={project.beforeAfter.before}
                  after={project.beforeAfter.after}
                  label={project.beforeAfter.label}
                  beforeAlt={`${project.title} — the site before construction`}
                  afterAlt={`${project.title} — the completed asset in service`}
                />
              </div>
            </Reveal>
          </div>
        </section>
      ) : null}

      {/* =================================================== gallery */}
      <section className="section-y bg-background">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Gallery"
              title="The project on site"
              lead="Select any frame to open the full gallery."
            />
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-12">
              <ProjectGallery images={project.gallery} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* =========================================== related projects */}
      <section className="section-y bg-surface">
        <div className="container-shell">
          <Reveal>
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <SectionHeading eyebrow="More work" title="Related projects" />
              <Button asChild variant="outline" size="lg" className="shrink-0">
                <Link href="/projects">
                  All projects
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
            {related.map((item) => (
              <RevealItem key={item.slug} as="li">
                <ProjectCard project={item} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <CtaBand
        eyebrow="Next step"
        title="Facing something like this?"
        body="Tell us the constraint. We will tell you honestly whether it is solvable, what it would take, and whether we are the right contractor for it."
        primary={{ label: "Start a conversation", href: "/contact" }}
        secondary={{ label: "See our capabilities", href: "/services" }}
      />
    </>
  );
}
