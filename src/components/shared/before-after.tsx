"use client";

import * as React from "react";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";

/**
 * Draggable before/after comparison.
 *
 * The handle is a real range input so it works with keyboard and screen
 * readers; the visible handle is drawn on top and the input is transparent.
 */
export function BeforeAfter({
  before,
  after,
  label,
  beforeAlt = "Before construction",
  afterAlt = "After completion",
}: {
  before: string;
  after: string;
  label?: string;
  beforeAlt?: string;
  afterAlt?: string;
}) {
  const [position, setPosition] = React.useState(50);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const dragging = React.useRef(false);

  const updateFromClientX = React.useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  }, []);

  React.useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (!dragging.current) return;
      e.preventDefault();
      updateFromClientX(e.clientX);
    };
    const onUp = () => {
      dragging.current = false;
    };
    window.addEventListener("pointermove", onMove, { passive: false });
    window.addEventListener("pointerup", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, [updateFromClientX]);

  return (
    <figure className="m-0">
      <div
        ref={containerRef}
        onPointerDown={(e) => {
          dragging.current = true;
          updateFromClientX(e.clientX);
        }}
        className="relative aspect-[16/10] w-full touch-none overflow-hidden rounded-[var(--radius-card)] border border-line bg-primary-950 select-none"
      >
        {/* After — full width underneath */}
        <Image
          src={after}
          alt={afterAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 1100px"
          className="object-cover"
        />

        {/* Before — clipped to the handle position */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <Image
            src={before}
            alt={beforeAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 1100px"
            className="object-cover"
          />
        </div>

        {/* Corner labels */}
        <span className="pointer-events-none absolute top-5 left-5 rounded-full border border-white/20 bg-primary-950/70 px-3.5 py-1.5 font-heading text-[0.6875rem] font-bold tracking-[0.1em] text-white uppercase backdrop-blur-sm">
          Before
        </span>
        <span className="pointer-events-none absolute top-5 right-5 rounded-full border border-accent/40 bg-accent/85 px-3.5 py-1.5 font-heading text-[0.6875rem] font-bold tracking-[0.1em] text-white uppercase backdrop-blur-sm">
          After
        </span>

        {/* Divider + grip */}
        <div
          className="pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow-[0_0_18px_rgba(0,0,0,.45)]"
          style={{ left: `${position}%` }}
        >
          <span className="absolute top-1/2 left-1/2 flex size-13 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-primary text-white shadow-[var(--shadow-lift)]">
            <MoveHorizontal className="size-5" strokeWidth={2.4} aria-hidden />
          </span>
        </div>

        <label className="sr-only" htmlFor="before-after-range">
          Reveal the before and after images
        </label>
        <input
          id="before-after-range"
          type="range"
          min={0}
          max={100}
          step={1}
          value={Math.round(position)}
          onChange={(e) => setPosition(Number(e.target.value))}
          aria-valuetext={`${Math.round(position)}% before, ${100 - Math.round(position)}% after`}
          className="absolute inset-0 size-full cursor-ew-resize opacity-0"
        />
      </div>

      {label ? (
        <figcaption className="mt-4 text-[0.875rem] text-muted">{label}</figcaption>
      ) : null}
    </figure>
  );
}
