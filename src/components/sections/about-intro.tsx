import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { mission, visionValues, impactStats } from "@/data/company";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { ParallaxImage } from "@/components/motion/parallax";
import { Counter } from "@/components/motion/counter";

export function AboutIntro() {
  return (
    <section id="about" className="section-y bg-background">
      <div className="container-shell">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
          {/* ------------------------------------------------- imagery */}
          <Reveal direction="right" className="order-2 lg:order-1">
            <div className="relative">
              <ParallaxImage
                className="aspect-[4/5] w-full rounded-[var(--radius-card)]"
                intensity={9}
              >
                <Image
                  src="/images/about/mission.svg"
                  alt="Meridian engineers reviewing setting-out data on a bridge deck"
                  fill
                  sizes="(max-width: 1024px) 100vw, 620px"
                  className="object-cover"
                />
              </ParallaxImage>

              {/* Overlapping secondary frame */}
              <div className="absolute -right-4 -bottom-10 hidden w-[46%] overflow-hidden rounded-[var(--radius-card)] border-6 border-background shadow-[var(--shadow-lift)] sm:block lg:-right-10">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/images/about/values.svg"
                    alt="Tunnel boring machine cutterhead during a shift change"
                    fill
                    sizes="300px"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Founding datum */}
              <div className="absolute -top-6 -left-4 rounded-2xl bg-primary px-6 py-5 shadow-[var(--shadow-lift)] lg:-left-10">
                <p className="font-heading text-[0.625rem] font-bold tracking-[0.16em] text-white/60 uppercase">
                  Established
                </p>
                <p className="mt-1 font-heading text-[2rem] leading-none font-extrabold text-white tabular-nums">
                  1974
                </p>
              </div>
            </div>
          </Reveal>

          {/* --------------------------------------------------- copy */}
          <div className="order-1 lg:order-2">
            <Reveal>
              <Eyebrow>{mission.eyebrow}</Eyebrow>
              <h2 className="mt-5 text-section max-w-[18ch]">{mission.title}</h2>
              {mission.body.map((para) => (
                <p key={para} className="mt-5 max-w-[58ch] text-body">
                  {para}
                </p>
              ))}
            </Reveal>

            <RevealGroup className="mt-10 flex flex-col gap-5" as="ul">
              {visionValues.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <RevealItem
                    key={pillar.title}
                    as="li"
                    className="flex gap-5 rounded-[var(--radius-card)] border border-line bg-surface p-6 transition-all duration-400 hover:border-primary/25 hover:shadow-[var(--shadow-raise)]"
                  >
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-[14px] bg-primary-50 text-primary">
                      <Icon className="size-5.5" strokeWidth={1.9} aria-hidden />
                    </span>
                    <span>
                      <span className="block font-heading text-[1.0625rem] font-bold text-heading">
                        {pillar.title}
                      </span>
                      <span className="mt-1.5 block text-[0.9375rem] leading-relaxed text-body">
                        {pillar.description}
                      </span>
                    </span>
                  </RevealItem>
                );
              })}
            </RevealGroup>

            <Reveal delay={0.1}>
              <Button asChild variant="outline" size="lg" className="mt-9">
                <Link href="/about">
                  More about Meridian
                  <ArrowUpRight
                    className="size-4.5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                    aria-hidden
                  />
                </Link>
              </Button>
            </Reveal>
          </div>
        </div>

        {/* -------------------------------------------- impact figures */}
        <Reveal delay={0.05}>
          <dl className="mt-20 grid gap-px overflow-hidden rounded-[var(--radius-card)] border border-line bg-line sm:grid-cols-2 lg:mt-28 lg:grid-cols-4">
            {impactStats.map((stat) => (
              <div key={stat.label} className="bg-surface p-7 lg:p-8">
                <dd className="font-heading text-[clamp(1.875rem,1.3rem+1.8vw,2.5rem)] leading-none font-extrabold text-heading tabular-nums">
                  <Counter
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                  />
                </dd>
                <dt className="mt-3 font-heading text-[0.9375rem] font-bold text-primary">
                  {stat.label}
                </dt>
                {stat.description ? (
                  <p className="mt-1.5 text-[0.875rem] leading-relaxed text-muted">
                    {stat.description}
                  </p>
                ) : null}
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
