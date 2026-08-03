import type { Metadata } from "next";
import Image from "next/image";
import { jobs, benefits, culture, hiringProcess, careersFaqs } from "@/data/careers";
import { PageHero } from "@/components/shared/page-hero";
import { JobsBoard } from "@/components/sections/jobs-board";
import { ApplicationForm } from "@/components/shared/application-form";
import { FaqSection } from "@/components/shared/faq-section";
import { CtaBand } from "@/components/sections/cta-band";
import { SectionHeading } from "@/components/ui";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { ParallaxImage } from "@/components/motion/parallax";
import { Counter } from "@/components/motion/counter";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Open engineering, delivery and commercial positions at Meghna Construct, plus our graduate programme, benefits and hiring process.",
};

const peopleStats = [
  { value: 12800, suffix: "+", label: "People nationwide" },
  { value: 84, suffix: "%", label: "Graduate retention at 5 years" },
  { value: 140, suffix: "", label: "Graduate places for 2026" },
  { value: 7, suffix: "", label: "Regional offices" },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build things that outlive everyone who worked on them"
        lead="We are a technical business run by engineers. Graduates contribute to live projects in their first week, and technical excellence is a route to senior leadership rather than away from it."
        image="/images/careers/careers-hero.svg"
        crumbs={[{ label: "Home", href: "/" }, { label: "Careers" }]}
      >
        <dl className="mt-10 grid grid-cols-2 gap-x-10 gap-y-6 sm:grid-cols-4">
          {peopleStats.map((stat) => (
            <div key={stat.label}>
              <dd className="font-heading text-[1.75rem] leading-none font-extrabold text-white tabular-nums">
                <Counter value={stat.value} suffix={stat.suffix} />
              </dd>
              <dt className="mt-2 font-heading text-[0.8125rem] font-semibold text-accent">
                {stat.label}
              </dt>
            </div>
          ))}
        </dl>
      </PageHero>

      {/* ==================================================== culture */}
      <section className="section-y bg-background">
        <div className="container-shell">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
            <Reveal>
              <SectionHeading
                eyebrow="Culture"
                title="What it is actually like to work here"
                lead="We are not going to tell you we are a family. We will tell you what we expect and what you get in return."
              />

              <RevealGroup className="mt-10 flex flex-col gap-5" as="ul">
                {culture.map((item) => {
                  const Icon = item.icon;
                  return (
                    <RevealItem
                      key={item.title}
                      as="li"
                      className="flex gap-5 rounded-[var(--radius-card)] border border-line bg-surface p-6"
                    >
                      <span className="flex size-12 shrink-0 items-center justify-center rounded-[14px] bg-primary-50 text-primary">
                        <Icon className="size-5.5" strokeWidth={1.9} aria-hidden />
                      </span>
                      <span>
                        <span className="block font-heading text-[1.0625rem] font-bold text-heading">
                          {item.title}
                        </span>
                        <span className="mt-1.5 block text-[0.9375rem] leading-relaxed text-body">
                          {item.description}
                        </span>
                      </span>
                    </RevealItem>
                  );
                })}
              </RevealGroup>
            </Reveal>

            <Reveal direction="left">
              <div className="grid gap-5 sm:grid-cols-2">
                <ParallaxImage
                  className="aspect-[3/4] w-full rounded-[var(--radius-card)] sm:mt-10"
                  intensity={7}
                >
                  <Image
                    src="/images/careers/culture-02.svg"
                    alt="A design engineer reviewing a federated model"
                    fill
                    sizes="(max-width: 640px) 100vw, 300px"
                    className="object-cover"
                  />
                </ParallaxImage>
                <ParallaxImage
                  className="aspect-[3/4] w-full rounded-[var(--radius-card)]"
                  intensity={7}
                >
                  <Image
                    src="/images/careers/culture-03.svg"
                    alt="A tunnelling team during a shift changeover underground"
                    fill
                    sizes="(max-width: 640px) 100vw, 300px"
                    className="object-cover"
                  />
                </ParallaxImage>
              </div>
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
              eyebrow="Benefits"
              title="What we offer, stated plainly"
              lead="No vague talk about perks. Here is the actual package, the same in every advert we publish."
              className="mx-auto"
            />
          </Reveal>

          <RevealGroup
            as="ul"
            stagger={0.07}
            className="mt-14 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-8"
          >
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <RevealItem
                  key={benefit.title}
                  as="li"
                  className="rounded-[var(--radius-card)] border border-white/12 bg-white/[0.05] p-8 transition-colors duration-400 hover:border-accent/35 hover:bg-white/[0.08]"
                >
                  <span className="flex size-13 items-center justify-center rounded-[16px] bg-accent/15 text-accent">
                    <Icon className="size-6" strokeWidth={1.85} aria-hidden />
                  </span>
                  <h3 className="mt-6 text-[1.125rem] font-bold text-white">
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

      <JobsBoard />

      {/* ============================================ hiring process */}
      <section className="section-y bg-surface">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Hiring process"
              title="Five steps, no timed tests, no ghosting"
              lead="Every application is read by a person. You will get a decision at every stage, whichever way it goes."
            />
          </Reveal>

          <RevealGroup
            as="ol"
            stagger={0.07}
            className="mt-14 grid gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-5 lg:gap-4"
          >
            {hiringProcess.map((step, i) => (
              <RevealItem
                key={step.step}
                as="li"
                className="relative flex flex-col rounded-[var(--radius-card)] border border-line bg-background p-6"
              >
                {/* Connector on wide screens */}
                {i < hiringProcess.length - 1 ? (
                  <span
                    aria-hidden
                    className="absolute top-11 -right-4 hidden h-px w-4 bg-line lg:block"
                  />
                ) : null}

                <span className="flex size-12 items-center justify-center rounded-full bg-primary font-heading text-[0.875rem] font-extrabold text-white tabular-nums">
                  {step.step}
                </span>
                <h3 className="mt-5 font-heading text-[1.0625rem] font-bold text-heading">
                  {step.title}
                </h3>
                <p className="mt-2.5 flex-1 text-[0.875rem] leading-relaxed text-body">
                  {step.description}
                </p>
                <p className="mt-4 border-t border-line pt-3.5 font-heading text-[0.75rem] font-bold text-accent-700">
                  {step.duration}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* ================================================ apply form */}
      <section id="apply" className="section-y scroll-mt-24 bg-background">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <Reveal>
              <div className="lg:sticky lg:top-32">
                <SectionHeading
                  eyebrow="Apply"
                  title="Send us your application"
                  lead="Applying for a specific role, or speculatively — both go to the same team and both get a reply."
                />

                <div className="mt-9 rounded-[var(--radius-card)] border border-line bg-surface p-7">
                  <p className="font-heading text-[0.6875rem] font-bold tracking-[0.16em] text-muted uppercase">
                    Currently recruiting
                  </p>
                  <p className="mt-4 font-heading text-[2.5rem] leading-none font-extrabold text-heading tabular-nums">
                    {jobs.length}
                  </p>
                  <p className="mt-2 text-[0.9375rem] text-body">
                    open positions across {new Set(jobs.map((j) => j.department)).size}{" "}
                    departments
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal direction="left">
              <div className="rounded-[var(--radius-card)] border border-line bg-surface p-7 lg:p-10">
                <ApplicationForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <FaqSection
        faqs={careersFaqs}
        eyebrow="Careers questions"
        title="What candidates ask us"
        contactHref="/careers#apply"
        className="section-y bg-surface"
      />

      <CtaBand
        eyebrow="Not seeing your role?"
        title="We recruit continuously across every discipline"
        body="If nothing above fits but you think you would do well here, send a speculative application. We keep good people on file and we do come back to them."
        primary={{ label: "Speculative application", href: "/careers#apply" }}
        secondary={{ label: "About Meghna", href: "/about" }}
      />
    </>
  );
}
