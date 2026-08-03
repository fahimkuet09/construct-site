import Link from "next/link";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

export function Logo({
  invert = false,
  className,
}: {
  invert?: boolean;
  className?: string;
}) {
  return (
    <Link
      href="/"
      aria-label={`${site.name} — home`}
      className={cn(
        "group flex shrink-0 items-center gap-3 rounded-lg transition-opacity hover:opacity-90",
        className,
      )}
    >
      <span
        className={cn(
          "flex size-11 items-center justify-center rounded-[13px] transition-colors",
          invert ? "bg-white/12 backdrop-blur-sm" : "bg-primary",
        )}
      >
        <svg
          viewBox="0 0 48 48"
          className="size-7"
          aria-hidden
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            d="M10 34 L19 17 L24 26 L29 17 L38 34"
            stroke="#fff"
            strokeWidth={3.4}
          />
          <circle cx="24" cy="26" r="2.7" fill="#F59E0B" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-heading text-[1.0625rem] font-extrabold tracking-[-0.025em]",
            invert ? "text-white" : "text-heading",
          )}
        >
          Meghna
        </span>
        <span
          className={cn(
            "mt-1 font-heading text-[0.5625rem] font-bold tracking-[0.24em] uppercase",
            invert ? "text-white/55" : "text-muted",
          )}
        >
          Construct
        </span>
      </span>
    </Link>
  );
}
