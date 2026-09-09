export interface HeroSlide {
  id: string;
  /** Default (desktop/tablet) image. */
  image: string;
  /**
   * Optional dedicated mobile crop. Use this when the desktop image is a
   * very wide banner (e.g. ~21:9) that would lose its subject if simply
   * cropped down the sides for a taller mobile viewport — a purpose-cropped
   * mobile version (tighter on the building, less empty sky either side)
   * reads far better than forcing one image into every aspect ratio.
   */
  imageMobile?: string;
  alt: string;
  /** CSS object-position, e.g. "center 35%". Defaults to "center". */
  focalPoint?: string;
}

/**
 * Hero background slides, in display order. Add more entries here to grow
 * the carousel — nothing else needs to change. Each `image` (and optional
 * `imageMobile`) path must exist under `public/`.
 */
export const heroSlides: HeroSlide[] = [
  {
    id: "slide-01",
    image: "/images/hero/hero_1.png",
    alt: "A large pre-engineered steel industrial shed nearing completion at sunset, with the erection crew on site",
  },
  {
    id: "slide-02",
    image: "/images/hero/hero_2.png",
    alt: "A wide-angle view of a steel portal frame structure under construction at sunset, engineers reviewing progress on site",
  },
];
