"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLocale } from "@/components/locale-provider";
import type { TranslationKey } from "@/lib/i18n";

interface FooterColumn {
  heading: string;
  headingKey?: string;
  links: { label: string; href: string }[];
}

/**
 * Footer link column.
 *
 * Below `lg` the list collapses behind its heading so the footer does not turn
 * into a long scroll on a phone. At `lg` and above it is always open and the
 * toggle disappears entirely.
 *
 * The open/closed state is expressed with a `grid-rows` transition rather than
 * a measured height, which means the desktop "always open" case is pure CSS —
 * no JS breakpoint check, so there is no flash of collapsed content during
 * hydration.
 */
export function FooterNavColumn({ column }: { column: FooterColumn }) {
  const [open, setOpen] = React.useState(false);
  const { t } = useLocale();

  const panelId = `footer-${column.heading.toLowerCase().replace(/\s+/g, "-")}`;
  const heading = column.headingKey
    ? t(column.headingKey as TranslationKey)
    : column.heading;

  return (
    <nav
      aria-label={heading}
      className="border-b border-white/10 py-1 lg:border-0 lg:py-0"
    >
      <h2>
        {/* Toggle on small screens… */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={panelId}
          className={cn(
            "flex w-full cursor-pointer items-center justify-between gap-4 py-4",
            "font-heading text-[0.75rem] font-bold tracking-[0.16em] uppercase",
            "text-white/70 transition-colors hover:text-white lg:hidden",
          )}
        >
          {heading}
          <ChevronDown
            aria-hidden
            className={cn(
              "size-4 shrink-0 text-white/45 transition-transform duration-300",
              open && "rotate-180",
            )}
          />
        </button>

        {/* …plain heading from lg upwards */}
        <span className="hidden font-heading text-[0.6875rem] font-bold tracking-[0.16em] text-white/45 uppercase lg:block">
          {heading}
        </span>
      </h2>

      <div
        id={panelId}
        className={cn(
          "grid transition-[grid-template-rows] duration-300 ease-[var(--ease-out-quint)]",
          "lg:grid-rows-[1fr]",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        {/* `invisible` also takes the collapsed links out of the tab order,
            and `lg:visible` restores them without any JS breakpoint check. */}
        <div
          className={cn(
            "overflow-hidden transition-[visibility] duration-300 lg:visible",
            open ? "visible" : "invisible",
          )}
        >
          <ul className="flex flex-col gap-3 pb-5 lg:mt-5 lg:pb-0">
            {column.links.map((link) => (
              <li key={link.href + link.label}>
                <Link
                  href={link.href}
                  className="group inline-flex items-center gap-1.5 text-[0.9375rem] text-white/65 transition-colors hover:text-white"
                >
                  {link.label}
                  <ArrowUpRight
                    aria-hidden
                    className="size-3.5 -translate-x-1 opacity-0 transition-all duration-250 group-hover:translate-x-0 group-hover:opacity-100"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
