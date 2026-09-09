import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/types";
import { cn, pad } from "@/lib/utils";

export function ServiceCard({
  service,
  index,
  className,
}: {
  service: Service;
  index: number;
  className?: string;
}) {
  const Icon = service.icon;

  return (
    <article className={cn("group h-full", className)}>
      <Link
        href={`/services/${service.slug}`}
        className={cn(
          "relative flex h-full flex-col overflow-hidden rounded-[var(--radius-card)]",
          "border border-line bg-surface p-7 lg:p-9",
          "transition-all duration-500 ease-[var(--ease-out-quint)]",
          "hover:-translate-y-1.5 hover:border-primary/25 hover:shadow-[var(--shadow-lift)]",
        )}
      >
        {/* Large illustration, revealed on hover */}
        <span
          aria-hidden
          className="pointer-events-none absolute -top-8 -right-10 size-56 opacity-[0.07] transition-all duration-700 ease-[var(--ease-out-quint)] group-hover:scale-110 group-hover:opacity-[0.13]"
        >
          <Image
            src={service.image}
            alt=""
            fill
            sizes="224px"
            className="rounded-full object-cover"
          />
        </span>

        <div className="relative flex items-start justify-between gap-4">
          <span className="flex size-15 items-center justify-center rounded-[18px] bg-primary-50 text-primary transition-all duration-500 ease-[var(--ease-out-quint)] group-hover:bg-primary group-hover:text-white">
            <Icon className="size-7" strokeWidth={1.75} aria-hidden />
          </span>
          <span
            aria-hidden
            className="font-heading text-[0.8125rem] font-extrabold tracking-[0.1em] text-muted/70 tabular-nums"
          >
            {pad(index + 1)}
          </span>
        </div>

        <h3 className="relative mt-7 text-[1.375rem] leading-tight font-bold tracking-[-0.02em] text-heading transition-colors duration-300 group-hover:text-primary">
          {service.title}
        </h3>
        <p className="relative mt-1.5 font-heading text-[0.875rem] font-semibold text-accent-700">
          {service.tagline}
        </p>
        <p className="relative mt-4 flex-1 text-[0.9375rem] leading-relaxed text-body">
          {service.summary}
        </p>

        <ul className="relative mt-6 flex flex-wrap gap-2 border-t border-line pt-5">
          {service.capabilities.slice(0, 3).map((cap) => (
            <li
              key={cap.title}
              className="rounded-full bg-background px-3 py-1.5 text-[0.75rem] font-medium text-muted"
            >
              {cap.title}
            </li>
          ))}
        </ul>

        <span className="relative mt-6 inline-flex items-center gap-2 font-heading text-[0.875rem] font-bold text-primary">
          Explore capability
          <ArrowUpRight
            aria-hidden
            className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </span>
      </Link>
    </article>
  );
}
