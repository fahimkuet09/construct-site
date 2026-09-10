import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

const LOGO_WIDTH = 817;
const LOGO_HEIGHT = 515;

const SIZE_CLASSES = {
  sm: "h-9",
  md: "h-11",
  lg: "h-13 lg:h-15",
} as const;

export function Logo({
  invert = false,
  size = "md",
  priority = false,
  className,
}: {
  invert?: boolean;
  size?: keyof typeof SIZE_CLASSES;
  priority?: boolean;
  className?: string;
}) {
  return (
    <Link
      href="/"
      aria-label={`${site.name} — home`}
      className={cn(
        "group inline-flex shrink-0 items-center transition-opacity hover:opacity-90",
        className,
      )}
    >
      <Image
        src={invert ? "/images/logos/uss-logo-white.png" : "/images/logos/uss-logo.png"}
        alt={site.name}
        width={LOGO_WIDTH}
        height={LOGO_HEIGHT}
        priority={priority}
        className={cn("w-auto object-contain", SIZE_CLASSES[size])}
      />
    </Link>
  );
}
