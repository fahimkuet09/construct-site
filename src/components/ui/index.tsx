import * as React from "react";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ Badge */

const badgeTone = {
  neutral: "border-line bg-surface text-muted",
  primary: "border-primary-200 bg-primary-50 text-primary",
  accent: "border-accent/30 bg-accent/10 text-accent-700",
  success: "border-success/25 bg-success/10 text-success-700",
  dark: "border-white/20 bg-white/10 text-white backdrop-blur-sm",
} as const;

export function Badge({
  className,
  tone = "neutral",
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & {
  tone?: keyof typeof badgeTone;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1",
        "font-heading text-[0.75rem] font-bold tracking-[0.06em] uppercase leading-none",
        badgeTone[tone],
        className,
      )}
      {...props}
    />
  );
}

/* ---------------------------------------------------------------- Surface */

export function Card({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-[var(--radius-card)] border border-line bg-surface",
        className,
      )}
      {...props}
    />
  );
}

/* --------------------------------------------------------------- Eyebrow */

export function Eyebrow({
  children,
  className,
  invert = false,
}: {
  children: React.ReactNode;
  className?: string;
  invert?: boolean;
}) {
  return (
    <span
      className={cn(
        "eyebrow",
        invert ? "text-accent" : "text-primary",
        className,
      )}
    >
      <span
        aria-hidden
        className={cn(
          "h-px w-8",
          invert ? "bg-accent/50" : "bg-primary/35",
        )}
      />
      {children}
    </span>
  );
}

/* --------------------------------------------------------- Section header */

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  invert = false,
  className,
  as: Tag = "h2",
  children,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  align?: "left" | "center";
  invert?: boolean;
  className?: string;
  as?: "h1" | "h2" | "h3";
  children?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow ? <Eyebrow invert={invert}>{eyebrow}</Eyebrow> : null}
      <Tag
        className={cn(
          "text-section max-w-[19ch]",
          align === "center" && "max-w-[22ch]",
          invert && "text-white",
        )}
      >
        {title}
      </Tag>
      {lead ? (
        <p
          className={cn(
            "text-lead max-w-[58ch]",
            invert ? "text-white/72" : "text-body",
          )}
        >
          {lead}
        </p>
      ) : null}
      {children}
    </div>
  );
}

/* ------------------------------------------------------------- Stat block */

export function StatBlock({
  value,
  label,
  description,
  invert = false,
  className,
}: {
  value: React.ReactNode;
  label: string;
  description?: string;
  invert?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <span
        className={cn(
          "font-heading text-[clamp(2rem,1.4rem+2.2vw,3rem)] font-extrabold leading-[1.05] tracking-[-0.03em] tabular-nums",
          invert ? "text-white" : "text-heading",
        )}
      >
        {value}
      </span>
      <span
        className={cn(
          "font-heading text-[0.9375rem] font-bold",
          invert ? "text-accent" : "text-primary",
        )}
      >
        {label}
      </span>
      {description ? (
        <span
          className={cn(
            "text-[0.875rem] leading-relaxed",
            invert ? "text-white/55" : "text-muted",
          )}
        >
          {description}
        </span>
      ) : null}
    </div>
  );
}

/* --------------------------------------------------------------- Skeleton */

export function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      aria-hidden
      className={cn(
        "skeleton-shimmer relative overflow-hidden rounded-xl bg-line/70",
        className,
      )}
      {...props}
    />
  );
}

/* ------------------------------------------------------------ Empty state */

export function EmptyState({
  icon,
  title,
  description,
  action,
  className,
}: {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  action?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-4 rounded-[var(--radius-card)]",
        "border border-dashed border-line bg-surface px-8 py-20 text-center",
        className,
      )}
    >
      {icon ? (
        <span className="flex size-14 items-center justify-center rounded-2xl bg-primary-50 text-primary">
          {icon}
        </span>
      ) : null}
      <h3 className="text-[1.375rem] font-bold">{title}</h3>
      {description ? (
        <p className="max-w-[46ch] text-[0.9375rem] leading-relaxed text-muted">
          {description}
        </p>
      ) : null}
      {action}
    </div>
  );
}
