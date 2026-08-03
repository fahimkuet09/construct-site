import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/motion/magnetic";
import { Reveal } from "@/components/motion/reveal";
import { site } from "@/lib/site";

export function CtaBand({
  eyebrow = "Next step",
  title = "Have a project that cannot be allowed to fail?",
  body = "Send us the constraint that worries you most. We will tell you honestly whether we are the right contractor for it — and if we are not, who is.",
  primary = { label: "Start a project", href: "/contact" },
  secondary = { label: "Explore our work", href: "/projects" },
}: {
  eyebrow?: string;
  title?: string;
  body?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="relative overflow-hidden bg-primary">
      <div aria-hidden className="blueprint-grid-dark absolute inset-0 opacity-60" />
      <div
        aria-hidden
        className="absolute -top-32 -left-24 size-[32rem] rounded-full bg-accent/12 blur-[130px]"
      />

      <div className="container-shell relative section-y-sm">
        <Reveal>
          <div className="flex flex-col items-start gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
            <div className="max-w-[38rem]">
              <span className="eyebrow text-accent">
                <span aria-hidden className="h-px w-8 bg-accent/50" />
                {eyebrow}
              </span>
              <h2 className="mt-5 text-[clamp(1.875rem,1.3rem+2.4vw,3rem)] leading-[1.1] font-bold tracking-[-0.03em] text-white">
                {title}
              </h2>
              <p className="mt-5 text-[1.0625rem] leading-relaxed text-white/70">
                {body}
              </p>
            </div>

            <div className="flex w-full flex-col gap-4 lg:w-auto lg:shrink-0">
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <Magnetic>
                  <Button asChild variant="accent" size="lg" className="w-full">
                    <Link href={primary.href}>
                      {primary.label}
                      <ArrowRight
                        className="size-4.5 transition-transform duration-300 group-hover/btn:translate-x-1"
                        aria-hidden
                      />
                    </Link>
                  </Button>
                </Magnetic>
                <Magnetic strength={0.22}>
                  <Button asChild variant="light" size="lg" className="w-full">
                    <Link href={secondary.href}>{secondary.label}</Link>
                  </Button>
                </Magnetic>
              </div>

              <a
                href={`tel:${site.phoneHref}`}
                className="flex items-center justify-center gap-2.5 rounded-[var(--radius-btn)] border border-white/15 px-5 py-3.5 font-heading text-[0.9375rem] font-bold text-white/85 transition-colors hover:border-white/35 hover:text-white lg:justify-start"
              >
                <Phone className="size-4 text-accent" aria-hidden />
                {site.phone}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
