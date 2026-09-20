import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";
import { services } from "@/data/services";
import { processSteps } from "@/data/process";
import { consultancyServices, constructionSolutions } from "@/data/capabilities";
import type { ProjectSector } from "@/types";

const sectorBySlug: Record<string, ProjectSector> = {
  "industrial-buildings": "Industrial Buildings",
  "commercial-buildings": "Commercial Buildings",
  "residential-buildings": "Residential & Other",
  "agro-based-buildings": "Agro-Based Buildings",
};
import { PageHero } from "@/components/shared/page-hero";
import { FaqSection } from "@/components/shared/faq-section";
import { CtaBand } from "@/components/sections/cta-band";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Industrial, commercial, residential and agro-based steel buildings — designed, fabricated and erected under a single contract.",
};

const generalFaqs = [
  {
    question: "Do you handle design and construction under one contract?",
    answer:
      "Yes — that's the whole point of the process. Site measurement, structural design, fabrication and site erection are delivered by the same team, so there's a single point of accountability from the first visit to handover.",
  },
  {
    question: "What size of project do you take on?",
    answer:
      "From a single agro-based shed to a multi-bay industrial facility. Send us the rough dimensions and use, and we'll tell you honestly whether it's a fit.",
  },
  {
    question: "Do you handle foundations as well as the steel structure?",
    answer:
      "We design and supply the foundation loading for your civil contractor, and coordinate directly with them. Foundation and floor slab construction is usually run by a separate civil contractor working alongside us.",
  },
  {
    question: "Can a project combine more than one building type?",
    answer:
      "Yes — an industrial site with an attached office block, for example. We size and coordinate each part of the structure together rather than treating them as separate jobs.",
  },
  {
    question: "How fast is the engineering turnaround?",
    answer:
      "Structural calculation and a firm quotation are typically returned within 24 hours of the site visit, so you're not waiting weeks for a number to plan around.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Four building categories, one accountable contract"
        lead="Industrial sheds to agro-based structures — with the engineering, fabrication and erection team to deliver them ourselves."
        image="/images/Portfolio/wide-span-frame-erection.jpg"
        crumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />

      {/* ========================================= detailed sections */}
      {services.map((service, index) => {
        const Icon = service.icon;
        const flip = index % 2 === 1;

        return (
          <section
            key={service.slug}
            id={service.slug}
            className={`section-y ${flip ? "bg-surface" : "bg-background"}`}
          >
            <div className="container-shell">
              <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
                {/* -------------------------------------------- media */}
                <Reveal
                  direction={flip ? "left" : "right"}
                  className={flip ? "lg:order-2" : ""}
                >
                  <div className="relative">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-card)] border border-line bg-primary-950">
                      <Image
                        src={service.image}
                        alt={`${service.title} — a Universal Structural Steel project under construction`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 620px"
                        className="object-cover"
                      />
                      <span
                        aria-hidden
                        className="absolute inset-0 bg-gradient-to-t from-primary-950/60 to-transparent"
                      />
                    </div>

                    <dl className="mt-6 grid grid-cols-3 gap-px overflow-hidden rounded-[var(--radius-card)] border border-line bg-line">
                      {service.stats.map((stat) => (
                        <div key={stat.label} className="bg-surface p-5 text-center">
                          <dd className="font-heading text-[1.375rem] leading-none font-extrabold text-heading tabular-nums">
                            {stat.value}
                          </dd>
                          <dt className="mt-2 text-[0.75rem] leading-snug text-muted">
                            {stat.label}
                          </dt>
                        </div>
                      ))}
                    </dl>
                  </div>
                </Reveal>

                {/* --------------------------------------------- copy */}
                <div className={flip ? "lg:order-1" : ""}>
                  <Reveal>
                    <span className="flex size-15 items-center justify-center rounded-[18px] bg-primary text-white">
                      <Icon className="size-7" strokeWidth={1.75} aria-hidden />
                    </span>

                    <span className="eyebrow mt-7 text-primary">
                      <span aria-hidden className="h-px w-8 bg-primary/35" />
                      Capability {String(index + 1).padStart(2, "0")}
                    </span>

                    <h2 className="mt-4 text-[clamp(1.75rem,1.25rem+2vw,2.75rem)] leading-[1.1] font-bold tracking-[-0.03em] text-heading">
                      {service.title}
                    </h2>
                    <p className="mt-3 font-heading text-[1.125rem] font-semibold text-accent-700">
                      {service.tagline}
                    </p>
                    {service.description.map((para) => (
                      <p key={para} className="mt-5 max-w-[58ch] text-body">
                        {para}
                      </p>
                    ))}
                  </Reveal>

                  <RevealGroup
                    as="ul"
                    stagger={0.05}
                    className="mt-9 grid gap-4 sm:grid-cols-2"
                  >
                    {service.capabilities.map((cap) => (
                      <RevealItem
                        key={cap.title}
                        as="li"
                        className="rounded-2xl border border-line bg-surface p-5"
                      >
                        <h3 className="font-heading text-[0.9375rem] font-bold text-heading">
                          {cap.title}
                        </h3>
                        <p className="mt-2 text-[0.875rem] leading-relaxed text-body">
                          {cap.description}
                        </p>
                      </RevealItem>
                    ))}
                  </RevealGroup>

                  <Reveal delay={0.06}>
                    <div className="mt-8 flex flex-wrap gap-3">
                      <Button asChild variant="primary" size="lg">
                        <Link href={`/services/${service.slug}`}>
                          Full capability detail
                          <ArrowUpRight
                            className="size-4.5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                            aria-hidden
                          />
                        </Link>
                      </Button>
                      <Button asChild variant="outline" size="lg">
                        <Link
                          href={`/projects?sector=${encodeURIComponent(
                            sectorBySlug[service.slug] ?? service.title,
                          )}`}
                        >
                          Related projects
                        </Link>
                      </Button>
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* ============================================ full capability list */}
      <section className="section-y bg-background">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Beyond steel buildings"
              title="Our full range of consultancy and construction capabilities"
              lead="Delivered directly or through our sister concerns, Versatile Design Consultants and Versatile Construction Solutions Ltd."
            />
          </Reveal>

          <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal>
              <h3 className="font-heading text-[1.0625rem] font-bold text-heading">
                Consultancy services
              </h3>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {consultancyServices.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-[0.9375rem] text-body"
                  >
                    <Check
                      className="mt-1 size-4 shrink-0 text-primary"
                      strokeWidth={2.6}
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.05}>
              <h3 className="font-heading text-[1.0625rem] font-bold text-heading">
                Construction solutions services
              </h3>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {constructionSolutions.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-[0.9375rem] text-body"
                  >
                    <Check
                      className="mt-1 size-4 shrink-0 text-primary"
                      strokeWidth={2.6}
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =================================================== benefits */}
      <section className="section-y relative overflow-hidden bg-secondary text-white">
        <div aria-hidden className="blueprint-grid-dark absolute inset-0 opacity-60" />
        <div className="container-shell relative">
          <Reveal>
            <SectionHeading
              invert
              align="center"
              eyebrow="Why one contract"
              title="One accountable team removes the gap where projects usually go wrong"
              lead="On a split contract, the space between designer, fabricator and erector is where programme and quality quietly leak. We close it by holding all three."
              className="mx-auto"
            />
          </Reveal>

          <RevealGroup
            as="ul"
            stagger={0.07}
            className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {[
              {
                title: "No interface risk",
                body: "Design, fabrication and erection sit inside one team, so a buildability issue is resolved before it reaches site.",
              },
              {
                title: "Fast, honest calculation",
                body: "Structural design and a firm quotation are typically returned within 24 hours — not weeks of back-and-forth.",
              },
              {
                title: "In-house fabrication",
                body: "Cutting, roll-forming, welding and coating happen in our own workshop, not a third-party subcontractor's queue.",
              },
              {
                title: "Our own erection crews",
                body: "The team that bolts the frame together on site works for us — the programme answers to the project.",
              },
              {
                title: "Checked before handover",
                body: "Every structure is inspected against its approved drawings before it's signed over — not assumed correct.",
              },
              {
                title: "One coordinated set of drawings",
                body: "Foundation loading and anchor bolt information are issued directly to your civil contractor from our own design.",
              },
            ].map((item) => (
              <RevealItem
                key={item.title}
                as="li"
                className="rounded-[var(--radius-card)] border border-white/12 bg-white/[0.05] p-7"
              >
                <span className="flex size-11 items-center justify-center rounded-xl bg-accent/15 text-accent">
                  <Check className="size-5" strokeWidth={2.6} aria-hidden />
                </span>
                <h3 className="mt-5 font-heading text-[1.0625rem] font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-white/60">
                  {item.body}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* ==================================================== process */}
      <section className="section-y bg-background">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Our process"
              title="The same four stages on every project"
              lead="Whatever the building type, delivery runs through the same sequence — measurement, calculation, fabrication and erection, then final inspection."
            />
          </Reveal>

          <RevealGroup
            as="ul"
            stagger={0.06}
            className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8"
          >
            {processSteps.map((step) => {
              const Icon = step.icon;
              return (
                <RevealItem
                  key={step.id}
                  as="li"
                  className="group rounded-[var(--radius-card)] border border-line bg-surface p-7 transition-all duration-400 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[var(--shadow-raise)]"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="flex size-13 items-center justify-center rounded-[16px] bg-primary-50 text-primary transition-colors duration-400 group-hover:bg-primary group-hover:text-white">
                      <Icon className="size-6" strokeWidth={1.85} aria-hidden />
                    </span>
                    <span className="font-heading text-[0.8125rem] font-extrabold text-line tabular-nums">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="mt-6 text-[1.1875rem] font-bold text-heading">
                    {step.title}
                  </h3>
                  <p className="mt-1 font-heading text-[0.8125rem] font-semibold text-accent-700">
                    {step.duration}
                  </p>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-body">
                    {step.summary}
                  </p>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </div>
      </section>

      <FaqSection
        faqs={generalFaqs}
        eyebrow="Capability questions"
        title="What clients ask before appointing us"
        className="section-y bg-surface"
      />

      <CtaBand
        eyebrow="Next step"
        title="Which of these does your project actually need?"
        body="Send us the scope and the constraint. We will tell you which capabilities apply, and where we would push back on the current approach."
      />
    </>
  );
}
