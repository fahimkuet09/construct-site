"use client";

import * as React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Keyboard, Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperClass } from "swiper";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import { equipment } from "@/data/equipment";
import { SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/motion/reveal";

export function EquipmentSlider() {
  const swiperRef = React.useRef<SwiperClass | null>(null);
  const [atStart, setAtStart] = React.useState(true);
  const [atEnd, setAtEnd] = React.useState(false);

  const sync = (swiper: SwiperClass) => {
    setAtStart(swiper.isBeginning);
    setAtEnd(swiper.isEnd);
  };

  return (
    <section id="equipment" className="section-y bg-background">
      <div className="container-shell">
        <Reveal>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Plant & fleet"
              title="We own the plant that governs the programme"
              lead="Tunnel boring machines, jack-up barges, launching gantries and heavy lift crawlers — owned outright, so our dates depend on our schedule rather than the charter market."
            />

            <div className="flex shrink-0 gap-2.5">
              <button
                type="button"
                aria-label="Previous equipment"
                disabled={atStart}
                onClick={() => swiperRef.current?.slidePrev()}
                className="flex size-13 cursor-pointer items-center justify-center rounded-full border border-line bg-surface text-heading transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-line disabled:hover:bg-surface disabled:hover:text-heading"
              >
                <ArrowLeft className="size-5" aria-hidden />
              </button>
              <button
                type="button"
                aria-label="Next equipment"
                disabled={atEnd}
                onClick={() => swiperRef.current?.slideNext()}
                className="flex size-13 cursor-pointer items-center justify-center rounded-full border border-line bg-surface text-heading transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-line disabled:hover:bg-surface disabled:hover:text-heading"
              >
                <ArrowRight className="size-5" aria-hidden />
              </button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-12 lg:mt-14">
            <Swiper
              modules={[Navigation, Pagination, Keyboard, A11y]}
              onSwiper={(s) => {
                swiperRef.current = s;
                sync(s);
              }}
              onSlideChange={sync}
              onResize={sync}
              keyboard={{ enabled: true }}
              a11y={{
                prevSlideMessage: "Previous equipment",
                nextSlideMessage: "Next equipment",
              }}
              spaceBetween={24}
              slidesPerView={1.08}
              breakpoints={{
                640: { slidesPerView: 1.6, spaceBetween: 24 },
                1024: { slidesPerView: 2.3, spaceBetween: 28 },
                1440: { slidesPerView: 3, spaceBetween: 32 },
              }}
              className="swiper-equipment"
            >
              {equipment.map((item) => (
                <SwiperSlide key={item.id} className="h-auto">
                  <article className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border border-line bg-surface transition-all duration-500 hover:border-primary/25 hover:shadow-[var(--shadow-lift)]">
                    <div className="relative aspect-[4/3] overflow-hidden bg-primary-950">
                      <Image
                        src={item.image}
                        alt={`${item.name} operating on a Meghna site`}
                        fill
                        sizes="(max-width: 640px) 92vw, (max-width: 1440px) 45vw, 440px"
                        className="object-cover transition-transform duration-[900ms] ease-[var(--ease-out-quint)] group-hover:scale-[1.06]"
                      />
                      <span
                        aria-hidden
                        className="absolute inset-0 bg-gradient-to-t from-primary-950/75 to-transparent"
                      />
                      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
                        <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 font-heading text-[0.6875rem] font-bold tracking-[0.08em] text-white uppercase backdrop-blur-sm">
                          {item.category}
                        </span>
                        <span className="font-heading text-[0.75rem] font-bold text-white/70">
                          {item.fleetCount} in fleet
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col p-6 lg:p-7">
                      <h3 className="text-[1.25rem] leading-tight font-bold tracking-[-0.02em] text-heading">
                        {item.name}
                      </h3>
                      <p className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-body">
                        {item.description}
                      </p>

                      <dl className="mt-6 flex flex-col divide-y divide-line border-t border-line">
                        {item.specs.map((spec) => (
                          <div
                            key={spec.label}
                            className="flex items-baseline justify-between gap-4 py-2.5"
                          >
                            <dt className="text-[0.8125rem] text-muted">
                              {spec.label}
                            </dt>
                            <dd className="font-heading text-[0.875rem] font-bold text-heading tabular-nums">
                              {spec.value}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
