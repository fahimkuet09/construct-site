"use client";

import * as React from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import { processSteps } from "@/data/process";
import { SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

export function ProcessTimeline() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const reduced = useReducedMotion();
  const active = processSteps[activeIndex];
  const tabRefs = React.useRef<(HTMLButtonElement | null)[]>([]);

  // Roving focus so the timeline behaves like a real tab list.
  const onKeyDown = (e: React.KeyboardEvent) => {
    const last = processSteps.length - 1;
    let next: number | null = null;

    if (e.key === "ArrowRight" || e.key === "ArrowDown") next = activeIndex === last ? 0 : activeIndex + 1;
    else if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = activeIndex === 0 ? last : activeIndex - 1;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = last;

    if (next !== null) {
      e.preventDefault();
      setActiveIndex(next);
      tabRefs.current[next]?.focus();
    }
  };

  return (
    <section
      id="process"
      className="section-y relative overflow-hidden bg-secondary text-white"
    >
      <div aria-hidden className="blueprint-grid-dark absolute inset-0 opacity-70" />
      <div
        aria-hidden
        className="absolute -top-32 left-1/4 size-[38rem] rounded-full bg-primary/25 blur-[140px]"
      />

      <div className="container-shell relative">
        <Reveal>
          <SectionHeading
            invert
            align="center"
            eyebrow="How we deliver"
            title="Six stages, one accountable team"
            lead="Every project runs the same governed sequence — from the constraint that decides everything, through to the first full operating cycle after handover."
            className="mx-auto"
          />
        </Reveal>

        {/* --------------------------------------------------- rail */}
        <Reveal delay={0.08}>
          <div
            role="tablist"
            aria-label="Construction process stages"
            onKeyDown={onKeyDown}
            className="relative mt-16 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:mt-20 lg:grid-cols-6 lg:gap-0"
          >
            {/* Connecting datum line */}
            <span
              aria-hidden
              className="absolute top-7 right-0 left-0 hidden h-px bg-white/15 lg:block"
            />
            <span
              aria-hidden
              className="absolute top-7 left-0 hidden h-px bg-accent transition-all duration-700 ease-[var(--ease-out-quint)] lg:block"
              style={{
                width: `${((activeIndex + 0.5) / processSteps.length) * 100}%`,
              }}
            />

            {processSteps.map((step, i) => {
              const isActive = i === activeIndex;
              const isDone = i < activeIndex;
              const Icon = step.icon;

              return (
                <button
                  key={step.id}
                  ref={(el) => {
                    tabRefs.current[i] = el;
                  }}
                  role="tab"
                  type="button"
                  id={`process-tab-${step.id}`}
                  aria-selected={isActive}
                  aria-controls={`process-panel-${step.id}`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActiveIndex(i)}
                  className="group relative flex cursor-pointer flex-col items-center gap-3 pt-0 text-center lg:px-2"
                >
                  <span
                    className={cn(
                      "relative z-1 flex size-14 items-center justify-center rounded-full border-2 transition-all duration-400 ease-[var(--ease-out-quint)]",
                      isActive
                        ? "scale-110 border-accent bg-accent text-primary-950"
                        : isDone
                          ? "border-accent/60 bg-secondary text-accent"
                          : "border-white/20 bg-secondary text-white/50 group-hover:border-white/45 group-hover:text-white",
                    )}
                  >
                    {isDone ? (
                      <Check className="size-5.5" strokeWidth={2.6} aria-hidden />
                    ) : (
                      <Icon className="size-5.5" strokeWidth={1.9} aria-hidden />
                    )}
                  </span>

                  <span className="flex flex-col gap-0.5">
                    <span
                      className={cn(
                        "font-heading text-[0.625rem] font-bold tracking-[0.16em] uppercase transition-colors",
                        isActive ? "text-accent" : "text-white/40",
                      )}
                    >
                      {step.number}
                    </span>
                    <span
                      className={cn(
                        "font-heading text-[0.9375rem] font-bold transition-colors",
                        isActive ? "text-white" : "text-white/60 group-hover:text-white/85",
                      )}
                    >
                      {step.title}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* -------------------------------------------------- panel */}
        <div className="mt-14 lg:mt-18">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              role="tabpanel"
              id={`process-panel-${active.id}`}
              aria-labelledby={`process-tab-${active.id}`}
              initial={reduced ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduced ? undefined : { opacity: 0, y: -12 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="grid gap-10 overflow-hidden rounded-[var(--radius-card)] border border-white/12 bg-white/[0.04] backdrop-blur-sm lg:grid-cols-[1.1fr_1fr] lg:gap-0"
            >
              <div className="p-8 lg:p-12">
                <span className="inline-flex items-center gap-2.5 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1.5 font-heading text-[0.6875rem] font-bold tracking-[0.1em] text-accent uppercase">
                  Stage {active.number} — {active.duration}
                </span>

                <h3 className="mt-6 text-[clamp(1.75rem,1.3rem+1.6vw,2.5rem)] leading-tight font-bold tracking-[-0.03em] text-white">
                  {active.title}
                </h3>
                <p className="mt-3 max-w-[46ch] font-heading text-[1.0625rem] font-semibold text-accent/90">
                  {active.summary}
                </p>
                <p className="mt-5 max-w-[58ch] text-[1rem] leading-relaxed text-white/65">
                  {active.detail}
                </p>

                <div className="mt-8">
                  <p className="font-heading text-[0.6875rem] font-bold tracking-[0.16em] text-white/40 uppercase">
                    What you receive
                  </p>
                  <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                    {active.deliverables.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-[0.9375rem] text-white/75"
                      >
                        <Check
                          className="mt-1 size-4 shrink-0 text-accent"
                          strokeWidth={2.8}
                          aria-hidden
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="relative min-h-72 lg:min-h-full">
                <Image
                  src={active.image}
                  alt={`${active.title} stage in progress`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 620px"
                  className="object-cover"
                />
                <span
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-secondary/70 via-transparent to-transparent lg:bg-gradient-to-r lg:from-secondary/80 lg:via-secondary/10 lg:to-transparent"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
