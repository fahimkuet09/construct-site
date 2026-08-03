"use client";

import * as React from "react";
import Image from "next/image";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import { Expand } from "lucide-react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";
import type { GalleryImage } from "@/types";
import { cn } from "@/lib/utils";

export function ProjectGallery({ images }: { images: GalleryImage[] }) {
  return (
    <LightGallery
      plugins={[lgThumbnail, lgZoom]}
      speed={420}
      download={false}
      licenseKey="0000-0000-000-0000"
      elementClassNames="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6"
    >
      {images.map((image, i) => {
        // First frame runs full width on large screens to anchor the grid.
        const wide = i === 0;
        const portrait = image.height > image.width;

        return (
          <a
            key={image.src}
            href={image.src}
            data-sub-html={`<p style="font-family:sans-serif">${image.caption ?? image.alt}</p>`}
            className={cn(
              "group relative block cursor-pointer overflow-hidden rounded-[var(--radius-card)] border border-line bg-primary-950",
              wide && "col-span-2 lg:col-span-2 lg:row-span-2",
              portrait ? "aspect-[4/5]" : "aspect-[4/3]",
              wide && "lg:aspect-auto",
            )}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1280px) 33vw, 400px"
              className="object-cover transition-transform duration-[900ms] ease-[var(--ease-out-quint)] group-hover:scale-[1.06]"
            />
            <span
              aria-hidden
              className="absolute inset-0 bg-primary-950/0 transition-colors duration-500 group-hover:bg-primary-950/35"
            />
            <span
              aria-hidden
              className="absolute top-1/2 left-1/2 flex size-13 -translate-x-1/2 -translate-y-1/2 scale-90 items-center justify-center rounded-full bg-accent text-primary-950 opacity-0 transition-all duration-400 ease-[var(--ease-out-quint)] group-hover:scale-100 group-hover:opacity-100"
            >
              <Expand className="size-5" strokeWidth={2.2} />
            </span>
            {image.caption ? (
              <span className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-primary-950/90 to-transparent p-4 text-[0.75rem] leading-snug font-medium text-white opacity-0 transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100">
                {image.caption}
              </span>
            ) : null}
          </a>
        );
      })}
    </LightGallery>
  );
}
