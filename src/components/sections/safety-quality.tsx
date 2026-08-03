import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Trophy } from "lucide-react";
import { certifications, qualityStandards, awards } from "@/data/company";
import { SectionHeading } from "@/components/ui";
import { Button } from "@/components/ui/button";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { Counter } from "@/components/motion/counter";

export function SafetyQuality() {
  return (
    <section
      id="safety"
      className="section-y relative overflow-hidden bg-primary-950 text-white"
    >
      <div aria-hidden className="blueprint-grid-dark absolute inset-0 opacity-60" />
      <div
        aria-hidden
        className="absolute -right-40 -bottom-32 size-[36rem] rounded-full bg-primary/25 blur-[140px]"
      />

      <div className="container-shell relative">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          {/* -------------------------------------------------- intro */}
          <div>
            <Reveal>
              <SectionHeading
                invert
                eyebrow="Safety & quality"
                title="Assurance you can audit, not just assertions"
                lead="Independent certification across every operating region, an accident frequency rate a third of the sector benchmark, and evidence packaged for handover rather than assembled on request."
              />
            </Reveal>

            <Reveal delay={0.08}>
              <div className="mt-10 rounded-[var(--radius-card)] border border-accent/25 bg-accent/8 p-7">
                <p className="font-heading text-[0.6875rem] font-bold tracking-[0.16em] text-accent uppercase">
                  Accident frequency rate
                </p>
                <p className="mt-3 font-heading text-[3.5rem] leading-none font-extrabold text-white tabular-nums">
                  <Counter value={0.21} decimals={2} />
                </p>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-white/60">
                  Per 100,000 hours worked — a 74% reduction over eight years, and
                  the eighth consecutive year with zero fatalities.
                </p>
              </div>
            </Reveal>

            <RevealGroup className="mt-8 flex flex-col gap-5" as="ul">
              {qualityStandards.map((standard) => {
                const Icon = standard.icon;
                return (
                  <RevealItem key={standard.title} as="li" className="flex gap-4">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-white/12 bg-white/[0.06] text-accent">
                      <Icon className="size-5" strokeWidth={1.9} aria-hidden />
                    </span>
                    <span>
                      <span className="block font-heading text-[1rem] font-bold text-white">
                        {standard.title}
                      </span>
                      <span className="mt-1 block text-[0.9375rem] leading-relaxed text-white/60">
                        {standard.description}
                      </span>
                    </span>
                  </RevealItem>
                );
              })}
            </RevealGroup>
          </div>

          {/* ------------------------------------------ certifications */}
          <div>
            <Reveal direction="left">
              <p className="font-heading text-[0.6875rem] font-bold tracking-[0.16em] text-white/40 uppercase">
                Independently certified
              </p>
            </Reveal>

            <RevealGroup
              as="ul"
              stagger={0.06}
              className="mt-6 grid gap-4 sm:grid-cols-2"
            >
              {certifications.map((cert) => (
                <RevealItem
                  key={cert.id}
                  as="li"
                  className="group rounded-[var(--radius-card)] border border-white/12 bg-white/[0.05] p-6 transition-all duration-400 hover:border-accent/40 hover:bg-white/[0.08]"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-white">
                      <Image
                        src={cert.logo}
                        alt=""
                        width={44}
                        height={44}
                        className="size-11"
                      />
                    </span>
                    <span>
                      <span className="block font-heading text-[1rem] font-extrabold text-white">
                        {cert.standard}
                      </span>
                      <span className="block text-[0.8125rem] text-accent">
                        {cert.name}
                      </span>
                    </span>
                  </div>
                  <p className="mt-4 text-[0.875rem] leading-relaxed text-white/55">
                    {cert.description}
                  </p>
                  <p className="mt-3 font-heading text-[0.6875rem] font-bold tracking-[0.1em] text-white/35 uppercase">
                    Issued by {cert.issuer}
                  </p>
                </RevealItem>
              ))}
            </RevealGroup>

            {/* ---------------------------------------------- awards */}
            <Reveal delay={0.1}>
              <div className="mt-10 rounded-[var(--radius-card)] border border-white/12 bg-white/[0.04] p-7">
                <div className="flex items-center gap-3">
                  <Trophy className="size-5 text-accent" strokeWidth={1.9} aria-hidden />
                  <p className="font-heading text-[0.6875rem] font-bold tracking-[0.16em] text-white/45 uppercase">
                    Recent industry recognition
                  </p>
                </div>

                <ul className="mt-5 flex flex-col divide-y divide-white/8">
                  {awards.slice(0, 4).map((award) => (
                    <li
                      key={`${award.year}-${award.title}`}
                      className="flex items-baseline gap-5 py-3.5 first:pt-0 last:pb-0"
                    >
                      <span className="w-11 shrink-0 font-heading text-[0.8125rem] font-extrabold text-accent tabular-nums">
                        {award.year}
                      </span>
                      <span className="min-w-0">
                        <span className="block font-heading text-[0.9375rem] font-bold text-white">
                          {award.title}
                        </span>
                        <span className="block text-[0.8125rem] text-white/45">
                          {award.body} — {award.project}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>

                <Button asChild variant="light" size="sm" className="mt-6">
                  <Link href="/about#awards">
                    All awards &amp; accreditations
                    <ArrowUpRight
                      className="size-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                      aria-hidden
                    />
                  </Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
