import type { Metadata } from "next";
import Image from "next/image";
import { Award as AwardIcon, Leaf } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { SectionHeading, Badge } from "@/components/ui";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { Counter } from "@/components/motion/counter";
import { ParallaxImage } from "@/components/motion/parallax";
import {
  LinkedInIcon,
} from "@/components/ui/social-icon";
import {
  awards,
  certifications,
  impactStats,
  leadership,
  milestones,
  mission,
  sustainability,
  values,
  visionValues,
} from "@/data/company";

export const metadata: Metadata = {
  title: "About",
  description:
    "Fifty-one years of heavy civil engineering. Meridian Construct's history, leadership, values, certifications and awards.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Meridian"
        title="Fifty-one years of building things that have to work"
        lead="An international civil engineering contractor of 12,800 people, delivering infrastructure across 24 countries — with design authority and self-performed construction under one roof."
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
                  alt="Meridian engineers on a tunnel drive during a shift handover"
                  fill
                  sizes="(max-width: 1024px) 100vw, 560px"
                  className="object-cover"
                />
              </ParallaxImage>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ==================================================== values */}
      <section className="section-y relative overflow-hidden bg-surface">
        <div aria-hidden className="blueprint-grid absolute inset-0 opacity-60" />
        <div className="container-shell relative">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="What we stand for"
              title="Six commitments we are willing to be measured against"
              lead="These are not aspirations on a wall. Each one has a decision attached to it that costs us something when we honour it."
              className="mx-auto"
            />
          </Reveal>

          <RevealGroup
            as="ul"
            stagger={0.07}
            className="mt-14 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-8"
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

      {/* =================================================== history */}
      <section id="history" className="section-y bg-secondary text-white">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              invert
              eyebrow="Our history"
              title="From fourteen people to twenty-four countries"
              lead="Five decades of deliberate expansion — each step taken to remove a dependency that was limiting what we could take on."
            />
          </Reveal>

          <div className="relative mt-16 lg:mt-20">
            {/* Vertical datum */}
            <span
              aria-hidden
              className="absolute top-0 bottom-0 left-[1.4375rem] w-px bg-white/15 lg:left-1/2 lg:-translate-x-1/2"
            />

            <ol className="flex flex-col gap-10 lg:gap-14">
              {milestones.map((milestone, i) => {
                const rightSide = i % 2 === 1;
                return (
                  <Reveal
                    key={milestone.year}
                    as="li"
                    direction={rightSide ? "left" : "right"}
                    className="relative pl-16 lg:grid lg:grid-cols-2 lg:gap-16 lg:pl-0"
                  >
                    {/* Node */}
                    <span
                      aria-hidden
                      className="absolute top-2 left-4 flex size-4 items-center justify-center rounded-full border-2 border-accent bg-secondary lg:left-1/2 lg:-translate-x-1/2"
                    >
                      <span className="size-1.5 rounded-full bg-accent" />
                    </span>

                    <div
                      className={
                        rightSide
                          ? "lg:col-start-2 lg:pl-4"
                          : "lg:col-start-1 lg:pr-4 lg:text-right"
                      }
                    >
                      <span className="font-heading text-[1.75rem] leading-none font-extrabold text-accent tabular-nums">
                        {milestone.year}
                      </span>
                      <h3 className="mt-3 text-[1.25rem] font-bold text-white">
                        {milestone.title}
                      </h3>
                      <p className="mt-2.5 max-w-[46ch] text-[0.9375rem] leading-relaxed text-white/60 lg:inline-block">
                        {milestone.description}
                      </p>
                    </div>

                    {milestone.image ? (
                      <div
                        className={`mt-5 lg:mt-0 ${
                          rightSide ? "lg:col-start-1 lg:row-start-1" : "lg:col-start-2"
                        }`}
                      >
                        <div className="relative aspect-[16/10] overflow-hidden rounded-[var(--radius-card)] border border-white/10">
                          <Image
                            src={milestone.image}
                            alt={`${milestone.year} — ${milestone.title}`}
                            fill
                            sizes="(max-width: 1024px) 100vw, 520px"
                            className="object-cover"
                          />
                        </div>
                      </div>
                    ) : null}
                  </Reveal>
                );
              })}
            </ol>
          </div>
        </div>
      </section>

      {/* ================================================ leadership */}
      <section id="leadership" className="section-y bg-background">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Leadership"
              title="The people accountable for delivery"
              lead="Our executive team is drawn overwhelmingly from engineering. Twenty-two of our senior leaders joined through the graduate scheme, including the group chief executive."
            />
          </Reveal>

          <RevealGroup
            as="ul"
            stagger={0.06}
            className="mt-14 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-8"
          >
            {leadership.map((leader) => (
              <RevealItem
                key={leader.name}
                as="li"
                className="group overflow-hidden rounded-[var(--radius-card)] border border-line bg-surface transition-all duration-400 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[var(--shadow-raise)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-primary-950">
                  <Image
                    src={leader.image}
                    alt={`Portrait of ${leader.name}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 420px"
                    className="object-cover transition-transform duration-[900ms] ease-[var(--ease-out-quint)] group-hover:scale-[1.05]"
                  />
                  {leader.linkedin ? (
                    <a
                      href={leader.linkedin}
                      aria-label={`${leader.name} on LinkedIn`}
                      className="absolute top-4 right-4 flex size-11 translate-y-2 items-center justify-center rounded-full bg-white/95 text-primary opacity-0 transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100 hover:bg-accent hover:text-primary-950"
                    >
                      <LinkedInIcon />
                    </a>
                  ) : null}
                </div>

                <div className="p-6 lg:p-7">
                  <h3 className="text-[1.125rem] font-bold text-heading">
                    {leader.name}
                  </h3>
                  <p className="mt-1 font-heading text-[0.875rem] font-semibold text-primary">
                    {leader.role}
                  </p>
                  <p className="mt-3 text-[0.875rem] leading-relaxed text-body">
                    {leader.bio}
                  </p>
                  <p className="mt-4 border-t border-line pt-4 font-heading text-[0.75rem] font-bold tracking-[0.06em] text-muted uppercase">
                    {leader.credentials}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* ============================================ certifications */}
      <section id="certifications" className="section-y bg-surface">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Certifications"
              title="Independently audited, every region, every year"
              lead="Certification is verified across all 24 countries of operation rather than held at group level and assumed to cascade."
            />
          </Reveal>

          <RevealGroup
            as="ul"
            stagger={0.06}
            className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {certifications.map((cert) => (
              <RevealItem
                key={cert.id}
                as="li"
                className="flex gap-5 rounded-[var(--radius-card)] border border-line bg-background p-7"
              >
                <Image
                  src={cert.logo}
                  alt=""
                  width={64}
                  height={64}
                  className="size-16 shrink-0"
                />
                <div>
                  <h3 className="font-heading text-[1.0625rem] font-extrabold text-heading">
                    {cert.standard}
                  </h3>
                  <p className="font-heading text-[0.875rem] font-semibold text-primary">
                    {cert.name}
                  </p>
                  <p className="mt-2.5 text-[0.875rem] leading-relaxed text-body">
                    {cert.description}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* =================================================== awards */}
      <section id="awards" className="section-y bg-background">
        <div className="container-shell">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <Reveal>
              <SectionHeading
                eyebrow="Recognition"
                title="Awarded for the projects that were hardest to deliver"
              />
              <p className="mt-5 max-w-[52ch] text-body">
                We do not enter awards for their own sake. Every entry below was
                submitted by the client or the design team rather than by our
                marketing function.
              </p>
            </Reveal>

            <Reveal direction="left">
              <ul className="flex flex-col divide-y divide-line border-y border-line">
                {awards.map((award) => (
                  <li
                    key={`${award.year}-${award.title}`}
                    className="group flex items-start gap-6 py-6 transition-colors hover:bg-surface"
                  >
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-accent/12 text-accent-700">
                      <AwardIcon className="size-5.5" strokeWidth={1.9} aria-hidden />
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-heading text-[1.0625rem] font-bold text-heading">
                        {award.title}
                      </h3>
                      <p className="mt-1 text-[0.9375rem] text-body">{award.body}</p>
                      <p className="mt-1.5 text-[0.8125rem] text-muted">
                        {award.project}
                      </p>
                    </div>
                    <Badge tone="primary" className="shrink-0">
                      {award.year}
                    </Badge>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
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
            <div className="flex items-center gap-3">
              <span className="flex size-12 items-center justify-center rounded-2xl bg-success/15 text-success">
                <Leaf className="size-6" strokeWidth={1.9} aria-hidden />
              </span>
            </div>
            <SectionHeading
              invert
              className="mt-6"
              eyebrow="Sustainability"
              title="Net zero by 2035, validated not asserted"
              lead="Our scope 1 and 2 reduction pathway is independently validated under the Science Based Targets initiative. The reductions that matter most have changed how we build, not just what we buy."
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
                <p className="font-heading text-[2.25rem] leading-none font-extrabold text-white tabular-nums">
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

      <CtaBand
        eyebrow="Work with us"
        title="Fifty-one years of judgement, available to your project"
        body="Whether you are shaping a business case or holding a programme that has already started to slip, we will give you a straight answer about what is achievable."
        primary={{ label: "Talk to our team", href: "/contact" }}
        secondary={{ label: "See our capabilities", href: "/services" }}
      />
    </>
  );
}
