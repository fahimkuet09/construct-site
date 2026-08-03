import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Crumb {
  label: string;
  href?: string;
}

export function Breadcrumb({
  items,
  invert = false,
  className,
}: {
  items: Crumb[];
  invert?: boolean;
  className?: string;
}) {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.8125rem] font-medium">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-2">
              {item.href && !last ? (
                <Link
                  href={item.href}
                  className={cn(
                    "transition-colors",
                    invert
                      ? "text-white/60 hover:text-white"
                      : "text-muted hover:text-primary",
                  )}
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  aria-current={last ? "page" : undefined}
                  className={cn(
                    "font-semibold",
                    invert ? "text-white" : "text-heading",
                  )}
                >
                  {item.label}
                </span>
              )}
              {!last ? (
                <ChevronRight
                  aria-hidden
                  className={cn(
                    "size-3.5",
                    invert ? "text-white/35" : "text-muted/50",
                  )}
                />
              ) : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
