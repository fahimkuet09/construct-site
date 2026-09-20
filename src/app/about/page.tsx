import type { Metadata } from "next";
import Image from "next/image";
import { Quote } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { SectionHeading } from "@/components/ui";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { Counter } from "@/components/motion/counter";
import { ParallaxImage } from "@/components/motion/parallax";
import {
  engineeringStandards,
  impactStats,
  leadership,
  mission,
  sustainability,
  team,
  values,
  visionValues,
} from "@/data/company";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Universal Structural Steel Ltd. — mission, leadership and engineering standards behind Bangladesh's pre-engineered steel buildings.",
};

export default function AboutPage() {
  const md = leadership[0];

  return (
    <>
      <PageHero
        eyebrow={`About ${site.shortName}`}
        title="Concept to construction, in structural steel"
        lead={`A Dhaka-based structural steel company delivering pre-engineered buildings across Bangladesh since ${site.founded} — one accountable team from site measurement through to handover.`}
        image="/images/about/about-hero.svg"
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        size="tall"
      />

      {/* ============================================ mission & vision */}
      <section className="section-y bg-background">
        <div className="container-shell">
          <div className="grid gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
            <Reveal>
              <SectionHeading eyebrow={mission.eyebrow} title={mission.title} />
              {mission.body.map((para) => (
                <p key={para} className="mt-5 max-w-[58ch] text-body">
                  {para}
                </p>
              ))}

              <dl className="mt-10 grid gap-px overflow-hidden rounded-[var(--radius-card)] border border-line bg-line sm:grid-cols-2">
                {impactStats.map((stat) => (
                  <div key={stat.label} className="bg-surface p-6">
                    <dd className="font-heading text-[1.875rem] leading-none font-extrabold text-heading tabular-nums">
                      <Counter
                        value={stat.value}
                        prefix={stat.prefix}
                        suffix={stat.suffix}
                        decimals={stat.decimals}
                      />
                    </dd>
                    <dt className="mt-2.5 font-heading text-[0.875rem] font-bold text-primary">
                      {stat.label}
                    </dt>
                    <p className="mt-1 text-[0.8125rem] text-muted">
                      {stat.description}
                    </p>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal direction="left" className="flex flex-col gap-5">
              {visionValues.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="flex gap-5 rounded-[var(--radius-card)] border border-line bg-surface p-7"
                  >
                    <span className="flex size-13 shrink-0 items-center justify-center rounded-[16px] bg-primary-50 text-primary">
                      <Icon className="size-6" strokeWidth={1.85} aria-hidden />
                    </span>
                    <div>
                      <h3 className="font-heading text-[1.125rem] font-bold text-heading">
                        {pillar.title}
                      </h3>
                      <p className="mt-2 text-[0.9375rem] leading-relaxed text-body">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                );
              })}

              <ParallaxImage
                className="mt-3 aspect-[4/3] w-full rounded-[var(--radius-card)]"
                intensity={8}
              >
                <Image
                  src="/images/about/values.svg"
                  alt="Structural steel frame under erection on site"
                  fill
                  sizes="(max-width: 1024px) 100vw, 560px"
                  className="object-cover"
                />
              </ParallaxImage>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================================================ why choose us */}
      <section className="section-y relative overflow-hidden bg-surface">
        <div aria-hidden className="blueprint-grid absolute inset-0 opacity-60" />
        <div className="container-shell relative">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="Why choose us"
              title="What clients get from working with us"
              lead="Four things that decide whether a steel building project goes well — versatility across building types, professionalism in the engineering, a client-first process, and a team that keeps its word on programme."
              className="mx-auto"
            />
          </Reveal>

          <RevealGroup
            as="ul"
            stagger={0.07}
            className="mt-14 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-8"
          >
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <RevealItem
                  key={value.title}
                  as="li"
                  className="group rounded-[var(--radius-card)] border border-line bg-surface p-8 transition-all duration-400 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[var(--shadow-raise)]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="flex size-14 items-center justify-center rounded-[16px] bg-primary-50 text-primary transition-colors duration-400 group-hover:bg-primary group-hover:text-white">
                      <Icon className="size-6" strokeWidth={1.85} aria-hidden />
                    </span>
                    <span
                      aria-hidden
                      className="font-heading text-[0.8125rem] font-extrabold text-line tabular-nums"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-6 text-[1.1875rem] font-bold text-heading">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-body">
                    {value.description}
                  </p>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </div>
      </section>

      {/* ================================================ leadership */}
      <section id="leadership" className="section-y bg-secondary text-white">
        <div className="container-shell">
          <div className="grid gap-16 lg:grid-cols-[0.72fr_1.28fr] lg:items-center lg:gap-24">
            <Reveal>
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                <div className="relative size-56 shrink-0 overflow-hidden rounded-full border-4 border-white/10 shadow-[var(--shadow-deep)] sm:size-64 lg:size-72">
                  <Image
                    src={md.image}
                    alt={`Portrait of ${md.name}`}
                    fill
                    sizes="(max-width: 640px) 224px, (max-width: 1024px) 256px, 288px"
                    className="object-cover"
                  />
                </div>
                <p className="mt-7 font-heading text-[1.0625rem] font-bold text-white">
                  {md.name}
                </p>
                <p className="mt-1 text-[0.875rem] text-white/65">{md.role}</p>
              </div>
            </Reveal>

            <Reveal direction="left">
              <span className="eyebrow text-accent">
                <span aria-hidden className="h-px w-8 bg-accent/50" />
                Managing Director&rsquo;s message
              </span>

              <Quote
                aria-hidden
                className="mt-7 size-11 text-accent/35"
                strokeWidth={1.5}
              />

              {md.greeting ? (
                <h2 className="mt-5 text-[clamp(1.75rem,1.3rem+2vw,2.75rem)] leading-[1.1] font-bold tracking-[-0.03em] text-white">
                  {md.greeting}
                </h2>
              ) : null}

              {md.welcome ? (
                <p className="mt-5 max-w-[58ch] text-[1.1875rem] leading-relaxed text-white/85 italic">
                  {md.welcome}
                </p>
              ) : null}

              <p className="mt-5 max-w-[60ch] text-[1.0625rem] leading-relaxed text-white/70">
                {md.bio}
              </p>

              <p className="mt-8 border-t border-white/12 pt-6 font-heading text-[0.8125rem] font-bold tracking-[0.08em] text-accent uppercase">
                {md.credentials}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =========================================== team of professionals */}
      <section className="section-y bg-background">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Our people"
              title="Our team of professionals"
              lead="The engineers and staff behind measurement, calculation, fabrication and site delivery."
            />
          </Reveal>

          <Reveal delay={0.05}>
            <div className="mt-12 overflow-x-auto rounded-[var(--radius-card)] border border-line">
              <table className="w-full min-w-[560px] border-collapse text-left text-[0.9375rem]">
                <thead>
                  <tr className="border-b border-line bg-surface">
                    <th className="px-6 py-4 font-heading text-[0.75rem] font-bold tracking-[0.08em] text-muted uppercase">
                      Name
                    </th>
                    <th className="px-6 py-4 font-heading text-[0.75rem] font-bold tracking-[0.08em] text-muted uppercase">
                      Designation
                    </th>
                    <th className="px-6 py-4 font-heading text-[0.75rem] font-bold tracking-[0.08em] text-muted uppercase">
                      Qualification
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {team.map((member, i) => (
                    <tr
                      key={`${member.name}-${member.role}`}
                      className={i % 2 === 1 ? "bg-surface/60" : "bg-surface"}
                    >
                      <td className="border-t border-line px-6 py-4 font-heading font-bold text-heading">
                        {member.name}
                      </td>
                      <td className="border-t border-line px-6 py-4 text-primary">
                        {member.role}
                      </td>
                      <td className="border-t border-line px-6 py-4 text-body">
                        {member.qualification}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================ engineering standards */}
      <section id="standards" className="section-y bg-background">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Engineering standards"
              title="How every structure is designed and checked"
              lead="Not a certificate on a wall — the working discipline behind every calculation and every erected frame."
            />
          </Reveal>

          <RevealGroup
            as="ul"
            stagger={0.06}
            className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {engineeringStandards.map((standard) => {
              const Icon = standard.icon;
              return (
                <RevealItem
                  key={standard.title}
                  as="li"
                  className="flex gap-5 rounded-[var(--radius-card)] border border-line bg-surface p-7"
                >
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-[14px] bg-primary-50 text-primary">
                    <Icon className="size-5.5" strokeWidth={1.9} aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-heading text-[1rem] font-bold text-heading">
                      {standard.title}
                    </h3>
                    <p className="mt-2 text-[0.9375rem] leading-relaxed text-body">
                      {standard.description}
                    </p>
                  </div>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </div>
      </section>

      {/* =========================================== sustainability */}
      <section
        id="sustainability"
        className="section-y relative overflow-hidden bg-primary-950 text-white"
      >
        <div aria-hidden className="blueprint-grid-dark absolute inset-0 opacity-60" />
        <div
          aria-hidden
          className="absolute -top-32 -left-24 size-[32rem] rounded-full bg-success/12 blur-[130px]"
        />

        <div className="container-shell relative">
          <Reveal>
            <SectionHeading
              invert
              eyebrow="Steel & sustainability"
              title="Why steel is the more resource-efficient choice"
              lead="Structural steel construction has inherent advantages over cast-in-place concrete on waste, recyclability and time on site."
            />
          </Reveal>

          <RevealGroup
            as="ul"
            stagger={0.07}
            className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {sustainability.map((item) => (
              <RevealItem
                key={item.label}
                as="li"
                className="rounded-[var(--radius-card)] border border-white/12 bg-white/[0.05] p-7"
              >
                <p className="font-heading text-[2rem] leading-none font-extrabold text-white">
                  {item.value}
                </p>
                <p className="mt-3 font-heading text-[0.9375rem] font-bold text-success">
                  {item.label}
                </p>
                <p className="mt-2 text-[0.875rem] leading-relaxed text-white/55">
                  {item.detail}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* =============================================== sister concerns */}
      <section className="section-y-sm bg-surface">
        <div className="container-shell">
          <Reveal>
            <p className="text-center font-heading text-[0.75rem] font-bold tracking-[0.16em] text-muted uppercase">
              Sister concerns
            </p>
          </Reveal>
          <RevealGroup
            as="ul"
            stagger={0.06}
            className="mt-8 grid gap-5 sm:grid-cols-3"
          >
            {site.sisterConcerns.map((concern) => (
              <RevealItem
                key={concern.name}
                as="li"
                className="rounded-[var(--radius-card)] border border-line bg-background p-6 text-center"
              >
                <p className="font-heading text-[1.0625rem] font-bold text-heading">
                  {concern.name}
                </p>
                <p className="mt-1.5 text-[0.875rem] text-muted">
                  {concern.description}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <CtaBand
        eyebrow="Work with us"
        title="Structural steel expertise, ready for your next building"
        body="Whether you're planning a factory shed, a commercial shell or a farm structure, we'll give you a straight assessment of what it takes — starting with a site visit."
        primary={{ label: "Talk to our team", href: "/contact" }}
        secondary={{ label: "See our services", href: "/services" }}
      />
    </>
  );
}
