"use client";

import * as React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, EffectFade, Keyboard } from "swiper/modules";
import type { Swiper as SwiperClass } from "swiper";
import { ArrowLeft, ArrowRight, Pause, Play } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import "swiper/css";
import "swiper/css/effect-fade";
import type { HeroSlide } from "@/data/hero-slides";
import { cn } from "@/lib/utils";

/**
 * Split in two so the interactive controls can live outside the
 * parallax-transformed media layer: a CSS `transform` (which the parallax
 * effect applies) always creates a new stacking context, so any control
 * nested inside it can never paint above later, untransformed siblings
 * (the readability gradients) no matter its z-index. The parent (Hero)
 * renders <HeroCarouselMedia> inside the parallax wrapper and
 * <HeroCarouselControls> as a plain sibling after the gradient overlays.
 */
export function HeroCarouselMedia({
  slides,
  onSwiper,
  onSlideChange,
}: {
  slides: HeroSlide[];
  onSwiper: (swiper: SwiperClass) => void;
  onSlideChange: (index: number) => void;
}) {
  const reduced = useReducedMotion();
  const multi = slides.length > 1;

  return (
    <Swiper
      modules={[Autoplay, Keyboard, A11y, EffectFade]}
      onSwiper={onSwiper}
      onSlideChange={(s) => onSlideChange(s.realIndex)}
      effect="fade"
      fadeEffect={{ crossFade: true }}
      speed={1200}
      loop={multi}
      autoplay={
        multi && !reduced
          ? { delay: 6000, disableOnInteraction: false, pauseOnMouseEnter: true }
          : false
      }
      keyboard={{ enabled: true }}
      a11y={{ prevSlideMessage: "Previous slide", nextSlideMessage: "Next slide" }}
      allowTouchMove={multi}
      className="size-full"
    >
      {slides.map((slide, i) => (
        <SwiperSlide key={slide.id}>
          <div className="relative size-full">
            {slide.imageMobile ? (
              <>
                <Image
                  src={slide.imageMobile}
                  alt={slide.alt}
                  fill
                  priority={i < 2}
                  sizes="100vw"
                  style={{ objectPosition: slide.focalPoint ?? "center" }}
                  className="block object-cover md:hidden"
                />
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  priority={i < 2}
                  sizes="100vw"
                  style={{ objectPosition: slide.focalPoint ?? "center" }}
                  className="hidden object-cover md:block"
                />
              </>
            ) : (
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority={i < 2}
                sizes="100vw"
                style={{ objectPosition: slide.focalPoint ?? "center" }}
                className="object-cover"
              />
            )}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export function HeroCarouselControls({
  count,
  activeIndex,
  swiperRef,
}: {
  count: number;
  activeIndex: number;
  swiperRef: React.RefObject<SwiperClass | null>;
}) {
  const [playing, setPlaying] = React.useState(true);

  if (count <= 1) return null;

  const togglePlay = () => {
    const autoplay = swiperRef.current?.autoplay;
    if (!autoplay) return;
    if (playing) {
      autoplay.stop();
    } else {
      autoplay.start();
    }
    setPlaying((v) => !v);
  };

  return (
    <div className="flex">
      <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 p-2 backdrop-blur-md">
        <button
          type="button"
          aria-label="Previous slide"
          onClick={() => swiperRef.current?.slidePrev()}
          className="flex size-9 shrink-0 cursor-pointer items-center justify-center rounded-full text-white transition-colors duration-300 hover:bg-white/15"
        >
          <ArrowLeft className="size-4" aria-hidden />
        </button>

        <button
          type="button"
          aria-label={playing ? "Pause slideshow" : "Play slideshow"}
          onClick={togglePlay}
          className="flex size-9 shrink-0 cursor-pointer items-center justify-center rounded-full bg-accent text-primary-950 transition-colors duration-300 hover:bg-accent-600"
        >
          {playing ? (
            <Pause className="size-3.5 fill-current" aria-hidden />
          ) : (
            <Play className="ml-0.5 size-3.5 fill-current" aria-hidden />
          )}
        </button>

        <div className="flex items-center gap-1.5 px-1.5">
          {Array.from({ length: count }, (_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === activeIndex}
              onClick={() => swiperRef.current?.slideToLoop(i)}
              className={cn(
                "h-[3px] rounded-full transition-all duration-300",
                i === activeIndex
                  ? "w-6 bg-accent"
                  : "w-3 bg-white/35 hover:bg-white/55",
              )}
            />
          ))}
        </div>

        <button
          type="button"
          aria-label="Next slide"
          onClick={() => swiperRef.current?.slideNext()}
          className="flex size-9 shrink-0 cursor-pointer items-center justify-center rounded-full text-white transition-colors duration-300 hover:bg-white/15"
        >
          <ArrowRight className="size-4" aria-hidden />
        </button>
      </div>
    </div>
  );
}
