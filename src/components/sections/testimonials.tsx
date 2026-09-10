"use client";

import * as React from "react";
import Image from "next/image";
import { Play, Quote, Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import type { Testimonial } from "@/types";
import { SectionHeading } from "@/components/ui";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

function Rating({ value, invert = false }: { value: number; invert?: boolean }) {
  return (
    <div
      className="flex items-center gap-0.5"
      role="img"
      aria-label={`Rated ${value} out of 5`}
    >
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          aria-hidden
          className={cn(
            "size-4",
            i < value
              ? "fill-accent text-accent"
              : invert
                ? "text-white/25"
                : "text-line",
          )}
        />
      ))}
    </div>
  );
}

export function Testimonials() {
  const [playing, setPlaying] = React.useState<Testimonial | null>(null);
  const [featured, ...rest] = testimonials;

  return (
    <section id="testimonials" className="section-y bg-surface">
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Client feedback"
            title="What it's like to work with us"
            lead="Representative feedback from the kind of clients we build for — factory owners, plant managers and operators across Bangladesh."
            className="mx-auto"
          />
        </Reveal>

        {/* ---------------------------------------------- lead quote */}
        <Reveal delay={0.06}>
          <figure className="mt-14 grid overflow-hidden rounded-[var(--radius-card)] border border-line bg-background lg:mt-16 lg:grid-cols-[1fr_0.85fr]">
            <div className="flex flex-col justify-center p-8 lg:p-14">
              <Quote
                className="size-11 text-accent/35"
                strokeWidth={1.5}
                aria-hidden
              />
              <blockquote className="mt-6 text-[clamp(1.25rem,1rem+1.1vw,1.75rem)] leading-[1.45] font-medium tracking-[-0.02em] text-heading">
                “{featured.quote}”
              </blockquote>

              <figcaption className="mt-8 flex items-center gap-4">
                <Image
                  src={featured.avatar}
                  alt=""
                  width={56}
                  height={56}
                  className="size-14 shrink-0 rounded-full object-cover"
                />
                <span className="min-w-0">
                  <span className="block font-heading text-[1rem] font-bold text-heading">
                    {featured.author}
                  </span>
                  <span className="block text-[0.875rem] text-body">
                    {featured.role}, {featured.organisation}
                  </span>
                  <span className="mt-1.5 flex items-center gap-3">
                    <Rating value={featured.rating} />
                    <span className="text-[0.75rem] font-medium text-muted">
                      {featured.project}
                    </span>
                  </span>
                </span>
              </figcaption>
            </div>

            {featured.hasVideo && featured.videoPoster ? (
              <button
                type="button"
                onClick={() => setPlaying(featured)}
                aria-label={`Play video testimonial from ${featured.author}`}
                className="group relative min-h-72 cursor-pointer overflow-hidden bg-primary-950 lg:min-h-full"
              >
                <Image
                  src={featured.videoPoster}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 560px"
                  className="object-cover transition-transform duration-[900ms] ease-[var(--ease-out-quint)] group-hover:scale-105"
                />
                <span
                  aria-hidden
                  className="absolute inset-0 bg-primary-950/45 transition-colors duration-500 group-hover:bg-primary-950/30"
                />
                <span
                  aria-hidden
                  className="absolute top-1/2 left-1/2 flex size-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-accent text-white shadow-[var(--shadow-lift)] transition-transform duration-400 ease-[var(--ease-out-quint)] group-hover:scale-110"
                >
                  <Play className="size-7 translate-x-0.5 fill-current" />
                </span>
                <span className="absolute inset-x-0 bottom-0 p-6 text-left">
                  <span className="font-heading text-[0.6875rem] font-bold tracking-[0.16em] text-accent uppercase">
                    Video testimonial
                  </span>
                  <span className="mt-1 block font-heading text-[1rem] font-bold text-white">
                    {featured.project}
                  </span>
                </span>
              </button>
            ) : null}
          </figure>
        </Reveal>

        {/* -------------------------------------------------- grid */}
        <RevealGroup
          as="ul"
          stagger={0.07}
          className="mt-6 grid gap-6 md:grid-cols-2 lg:mt-8 lg:grid-cols-3 lg:gap-8"
        >
          {rest.map((item) => (
            <RevealItem key={item.id} as="li">
              <figure className="flex h-full flex-col rounded-[var(--radius-card)] border border-line bg-surface p-7 transition-all duration-400 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[var(--shadow-raise)]">
                <div className="flex items-center justify-between gap-4">
                  <Rating value={item.rating} />
                  {item.hasVideo ? (
                    <button
                      type="button"
                      onClick={() => setPlaying(item)}
                      className="flex cursor-pointer items-center gap-1.5 rounded-full border border-line px-3 py-1.5 font-heading text-[0.6875rem] font-bold tracking-[0.06em] text-primary uppercase transition-colors hover:border-primary hover:bg-primary hover:text-white"
                    >
                      <Play className="size-3 fill-current" aria-hidden />
                      Watch
                    </button>
                  ) : null}
                </div>

                <blockquote className="mt-5 flex-1 text-[0.9375rem] leading-relaxed text-body">
                  “{item.quote}”
                </blockquote>

                <figcaption className="mt-7 flex items-center gap-3.5 border-t border-line pt-5">
                  <Image
                    src={item.avatar}
                    alt=""
                    width={44}
                    height={44}
                    className="size-11 shrink-0 rounded-full object-cover"
                  />
                  <span className="min-w-0">
                    <span className="block font-heading text-[0.9375rem] font-bold text-heading">
                      {item.author}
                    </span>
                    <span className="block truncate text-[0.8125rem] text-muted">
                      {item.role}, {item.organisation}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>

      {/* ------------------------------------------------ video modal */}
      <Dialog open={Boolean(playing)} onOpenChange={(o) => !o && setPlaying(null)}>
        <DialogContent className="max-w-4xl p-0 md:p-0">
          <DialogTitle className="sr-only">
            Video testimonial from {playing?.author}
          </DialogTitle>
          <DialogDescription className="sr-only">
            {playing?.organisation} on the {playing?.project} project.
          </DialogDescription>

          <div className="relative aspect-video overflow-hidden rounded-t-[var(--radius-card)] bg-primary-950">
            {playing ? (
              <video
                controls
                autoPlay
                playsInline
                poster={playing.videoPoster}
                className="size-full object-cover"
              >
                <source src="/videos/hero.webm" type="video/webm" />
                <source src="/videos/hero.mp4" type="video/mp4" />
                Your browser does not support embedded video.
              </video>
            ) : null}
          </div>

          <div className="p-7 md:p-8">
            <p className="font-heading text-[0.6875rem] font-bold tracking-[0.16em] text-primary uppercase">
              {playing?.project}
            </p>
            <p className="mt-3 text-[1.0625rem] leading-relaxed text-body">
              “{playing?.quote}”
            </p>
            <p className="mt-4 font-heading text-[0.9375rem] font-bold text-heading">
              {playing?.author}
              <span className="ml-2 font-body text-[0.875rem] font-normal text-muted">
                {playing?.role}, {playing?.organisation}
              </span>
            </p>
            <p className="mt-4 rounded-xl bg-background px-4 py-3 text-[0.8125rem] text-muted">
              Demo build — the showreel stands in for the client film.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
