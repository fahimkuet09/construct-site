import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";
import { services } from "@/data/services";
import { processSteps } from "@/data/process";
import { PageHero } from "@/components/shared/page-hero";
import { FaqSection } from "@/components/shared/faq-section";
import { CtaBand } from "@/components/sections/cta-band";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";

export const metadata: Metadata = {
  title: "Capabilities",
  description:
    "Bridges, highways and rail, tunnelling, marine and ports, water and energy, and industrial facilities — delivered design-and-build under a single contract.",
};

const generalFaqs = [
  {
    question: "Do you take on design-and-build contracts?",
    answer:
      "Yes, and it is our preferred model. We hold in-house design authority across structures, geotechnics and process engineering, which removes the interface risk that sits between designer and contractor on traditional contracts.",
  },
  {
    question: "What contract size do you work at?",
    answer:
      "Our typical range is ৳500 crore to ৳25,000 crore. We will consider smaller values where the engineering is genuinely complex or the work forms part of a longer programme with an existing client.",
  },
  {
    question: "How much of the work do you self-perform?",
    answer:
      "We self-perform the structural core of every project — piling, concrete, steel erection, tunnelling and marine works — using directly employed operatives and owned plant. Specialist packages are subcontracted, but never the critical path.",
  },
  {
    question: "Can you work across multiple sectors on one programme?",
    answer:
      "Regularly. Interface points between disciplines are where most programmes slip, so holding several scopes under one delivery team removes coordination risk rather than distributing it.",
  },
  {
    question: "What forms of contract do you work under?",
    answer:
      "FIDIC Red, Yellow and Silver Book, Bangladesh PPR item-rate and design-and-build contracts, and PPP arrangements. We have delivered schemes financed by the World Bank, ADB, JICA and the Government of Bangladesh.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Capabilities"
        title="Six capabilities, delivered under one accountable contract"
        lead="From estuary crossings to metro tunnels, deep-water quays to economic zone campuses — with the design authority and the plant to deliver them ourselves."
        image="/images/services/bridges.svg"
        crumbs={[{ label: "Home", href: "/" }, { label: "Capabilities" }]}
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
                        alt={`${service.title} — a Meghna project under construction`}
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
                            service.title === "Tunnelling & Underground"
                              ? "Tunnelling"
                              : service.title,
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

      {/* =================================================== benefits */}
      <section className="section-y relative overflow-hidden bg-secondary text-white">
        <div aria-hidden className="blueprint-grid-dark absolute inset-0 opacity-60" />
        <div className="container-shell relative">
          <Reveal>
            <SectionHeading
              invert
              align="center"
              eyebrow="Why design-and-build"
              title="One contract removes the gap where projects usually fail"
              lead="On a traditional contract, the space between designer and contractor is where programme, cost and buildability quietly leak. We close it by holding both."
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
                body: "Design and construction sit inside one accountable team, so buildability is resolved before it becomes a variation.",
              },
              {
                title: "Programme built from first principles",
                body: "Sequences are modelled in 4D and resourced honestly before we commit to a date, not reverse-engineered from one.",
              },
              {
                title: "Owned plant, owned dates",
                body: "TBMs, marine vessels, gantries and cranes are ours. The programme answers to the project, not the charter market.",
              },
              {
                title: "Independent checking",
                body: "Category III design checks are commissioned by us and reported directly to the client, not filtered through us.",
              },
              {
                title: "Evidence at handover",
                body: "Assets transfer with as-built models, test records and structured asset data — not a box of drawings.",
              },
              {
                title: "Support past completion",
                body: "Our engineers remain on site through the first full operating cycle, under standard terms.",
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
              title="The same governed sequence on every contract"
              lead="Whatever the sector, delivery runs through six stages with a named owner, a defined deliverable and an acceptance criterion for each."
            />
          </Reveal>

          <RevealGroup
            as="ul"
            stagger={0.06}
            className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
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
