import Image from "next/image";
import { Breadcrumb, type Crumb } from "@/components/ui/breadcrumb";
import { Eyebrow } from "@/components/ui";
import { cn } from "@/lib/utils";

/**
 * Dark banner every inner route opens with. It is what lets the header sit
 * transparent on load across the whole site rather than only on the homepage.
 */
export function PageHero({
  eyebrow,
  title,
  lead,
  image,
  crumbs,
  children,
  align = "left",
  size = "default",
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  image: string;
  crumbs: Crumb[];
  children?: React.ReactNode;
  align?: "left" | "center";
  size?: "default" | "tall";
}) {
  return (
    <section
      className={cn(
        "relative flex flex-col justify-end overflow-hidden bg-primary-950",
        size === "tall" ? "min-h-[68svh]" : "min-h-[54svh]",
      )}
    >
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-primary-950/68 via-primary-950/28 to-primary-950/90"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-primary-950/88 via-primary-950/38 to-transparent"
      />
      <div aria-hidden className="blueprint-grid-dark absolute inset-0 opacity-35" />

      <div className="relative">
        <div
          className={cn(
            "container-shell pt-36 pb-14 lg:pt-44 lg:pb-20",
            align === "center" && "text-center",
          )}
        >
          <Breadcrumb items={crumbs} invert className="mb-8" />

          <div className={cn(align === "center" && "mx-auto max-w-3xl")}>
            <Eyebrow invert>{eyebrow}</Eyebrow>
            <h1 className="mt-5 max-w-[20ch] text-[clamp(2.25rem,1.5rem+3.4vw,4rem)] leading-[1.06] font-extrabold tracking-[-0.035em] text-white">
              {title}
            </h1>
            {lead ? (
              <p
                className={cn(
                  "mt-6 max-w-[62ch] text-lead text-white/70",
                  align === "center" && "mx-auto",
                )}
              >
                {lead}
              </p>
            ) : null}
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
