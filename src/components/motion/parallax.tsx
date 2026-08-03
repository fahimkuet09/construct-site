"use client";

import * as React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Vertical parallax driven by the element's own progress through the
 * viewport, so it behaves the same wherever it sits on the page.
 */
export function Parallax({
  children,
  className,
  distance = 60,
  direction = "up",
}: {
  children: React.ReactNode;
  className?: string;
  distance?: number;
  direction?: "up" | "down";
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const sign = direction === "up" ? -1 : 1;
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [distance * sign * -1, distance * sign],
  );

  if (reduced) return <div className={className}>{children}</div>;

  return (
    <motion.div ref={ref} className={className} style={{ y }}>
      {children}
    </motion.div>
  );
}

/**
 * Image that drifts slightly slower than the page — the container clips,
 * the image is oversized, so no gap ever appears at the edges.
 */
export function ParallaxImage({
  children,
  className,
  intensity = 12,
}: {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [`-${intensity}%`, `${intensity}%`]);

  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      {reduced ? (
        <div className="absolute inset-0">{children}</div>
      ) : (
        <motion.div
          className="absolute inset-0"
          style={{ y, height: `${100 + intensity * 2}%`, top: `-${intensity}%` }}
        >
          {children}
        </motion.div>
      )}
    </div>
  );
}
