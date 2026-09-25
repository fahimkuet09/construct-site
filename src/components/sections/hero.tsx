"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/motion/magnetic";
import { Counter } from "@/components/motion/counter";
import { heroStats } from "@/data/company";
import { useLocale } from "@/components/locale-provider";
import type { TranslationKey } from "@/lib/i18n";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const ref = React.useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { t } = useLocale();
  const tk = (key: string | undefined, fallback: string) =>
    key ? t(key as TranslationKey) : fallback;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Content lifts and fades faster than the media behind it.
  const mediaY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "38%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-primary-950"
      aria-label="Universal Structural Steel — introduction"
    >
      {/* ------------------------------------------------------- media */}
      <motion.div
        className="absolute inset-0"
        style={reduced ? undefined : { y: mediaY, scale: 1.12 }}
      >
        <motion.div
          className="absolute inset-0"
          initial={reduced ? undefined : { opacity: 0, scale: 1 }}
          animate={reduced ? undefined : { opacity: 1, scale: 1.08 }}
          transition={
            reduced
              ? undefined
              : {
                  opacity: { duration: 1.6, ease: EASE },
                  scale: {
                    duration: 20,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "reverse",
                  },
                }
          }
        >
          <Image
            src="/images/hero/hero-image-new.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>
      </motion.div>

      {/* ----------------------------------------------------- overlays */}
      {/* Kept light enough that the footage still reads, dark enough to hold
          WCAG AA on the headline and body copy. */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-primary-950/70 via-primary-950/30 to-primary-950/88"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-primary-950/88 via-primary-950/35 to-transparent"
      />
      <div aria-hidden className="blueprint-grid-dark absolute inset-0 opacity-40" />

      {/* ----------------------------------------------------- content */}
      <motion.div
        className="relative"
        style={reduced ? undefined : { y: contentY, opacity: contentOpacity }}
      >
        <div className="container-shell pt-36 pb-12 lg:pt-40 lg:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
            className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.07] py-2 pr-5 pl-2 backdrop-blur-md"
          >
            <span className="rounded-full bg-accent px-3 py-1 font-heading text-[0.6875rem] font-extrabold tracking-[0.1em] whitespace-nowrap text-primary-950 uppercase">
              {t("hero.badge")}
            </span>
            <span className="text-[0.8125rem] font-medium text-white/75">
              {t("hero.badgeText")}
            </span>
          </motion.div>

          <h1 className="max-w-[32ch] text-display text-white">
            {[t("hero.line1")].map((line, i) =>
              reduced ? (
                <span key={line} className="block">
                  {line}
                </span>
              ) : (
                <span key={line} className="block overflow-hidden pb-[0.06em]">
                  <motion.span
                    className="block"
                    initial={{ y: "110%" }}
                    animate={{ y: "0%" }}
                    transition={{ duration: 1, delay: 0.15 + i * 0.11, ease: EASE }}
                  >
                    {line}
                  </motion.span>
                </span>
              ),
            )}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.55, ease: EASE }}
            className="mt-7 max-w-[56ch] text-lead text-white/72"
          >
            {t("hero.lead")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.7, ease: EASE }}
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Magnetic>
              <Button asChild variant="accent" size="lg" className="w-full sm:w-auto">
                <Link href="/projects">
                  {t("cta.exploreProjects")}
                  <ArrowRight
                    className="size-4.5 transition-transform duration-300 group-hover/btn:translate-x-1"
                    aria-hidden
                  />
                </Link>
              </Button>
            </Magnetic>

            <Magnetic strength={0.22}>
              <Button asChild variant="light" size="lg" className="w-full sm:w-auto">
                <Link href="/about">
                  <Play className="size-4 fill-current" aria-hidden />
                  {t("cta.whoWeAre")}
                </Link>
              </Button>
            </Magnetic>
          </motion.div>
        </div>

        {/* ------------------------------------------------ stats rail */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.95, ease: EASE }}
          className="border-t border-white/12 bg-primary-950/40 backdrop-blur-md"
        >
          <div className="container-shell">
            <dl className="grid grid-cols-2 divide-white/10 lg:grid-cols-4 lg:divide-x">
              {heroStats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`px-0 py-6 lg:px-8 lg:py-8 ${
                    i === 0 ? "lg:pl-0" : ""
                  } ${i % 2 === 0 ? "pr-4" : "pl-4 lg:pl-8"} ${
                    i < 2 ? "border-b border-white/10 lg:border-b-0" : ""
                  }`}
                >
                  <dd className="font-heading text-[clamp(1.75rem,1.2rem+1.8vw,2.5rem)] leading-none font-extrabold text-white tabular-nums">
                    <Counter
                      value={stat.value}
                      prefix={stat.prefix}
                      suffix={tk(stat.suffixKey, stat.suffix ?? "")}
                      decimals={stat.decimals}
                    />
                  </dd>
                  <dt className="mt-2.5 font-heading text-[0.875rem] font-bold text-accent">
                    {tk(stat.labelKey, stat.label)}
                  </dt>
                  {stat.description ? (
                    <p className="mt-1 text-[0.8125rem] text-white/45">
                      {tk(stat.descriptionKey, stat.description)}
                    </p>
                  ) : null}
                </div>
              ))}
            </dl>
          </div>
        </motion.div>
      </motion.div>

      {/* --------------------------------------------- scroll indicator */}
      <motion.a
        href="#clients"
        aria-label="Scroll to content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute right-8 bottom-56 hidden flex-col items-center gap-2.5 text-white/45 transition-colors hover:text-white xl:flex"
      >
        <span className="[writing-mode:vertical-rl] font-heading text-[0.625rem] font-bold tracking-[0.22em] uppercase">
          {t("hero.scroll")}
        </span>
        <span className="relative flex h-11 w-6 justify-center overflow-hidden rounded-full border border-white/25">
          <span
            aria-hidden
            className="animate-scroll-hint mt-2 h-2 w-0.5 rounded-full bg-accent"
          />
        </span>
      </motion.a>
    </section>
  );
}
