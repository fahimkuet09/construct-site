import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Zero-pads a 1-based index for editorial numbering: 1 → "01". */
export function pad(n: number, width = 2) {
  return String(n).padStart(width, "0");
}

export function formatDate(
  iso: string,
  opts: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  },
) {
  return new Intl.DateTimeFormat("en-GB", { ...opts, timeZone: "UTC" }).format(
    new Date(iso),
  );
}

/**
 * Contract values are held in crore taka, which is how they are reported and
 * tendered in Bangladesh. 1 crore = 10 million, so ৳12,400 crore reads the way
 * a procurement notice would rather than as an abstract 124,000,000,000.
 */
export function formatCrore(valueInCrore: number) {
  const formatted = new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: valueInCrore < 100 ? 1 : 0,
  }).format(valueInCrore);
  return `৳${formatted} cr`;
}

/** Long form for body copy and fact sheets. */
export function formatCroreLong(valueInCrore: number) {
  const formatted = new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: valueInCrore < 100 ? 1 : 0,
  }).format(valueInCrore);
  return `৳${formatted} crore`;
}

/** Deterministic slug — used for anchors and route params. */
export function slugify(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export function readingTime(text: string) {
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 220));
}
