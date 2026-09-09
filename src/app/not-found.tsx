import Link from "next/link";
import { ArrowRight, Compass, Home, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

const routes = [
  { label: "Projects", href: "/projects", description: "The full portfolio, filterable by category" },
  { label: "Services", href: "/services", description: "The four building categories we deliver" },
  { label: "About", href: "/about", description: "Mission, leadership and engineering standards" },
  { label: "Careers", href: "/careers", description: "Open positions at Universal Structural Steel" },
];

export default function NotFound() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-primary-950 text-white">
      <div aria-hidden className="blueprint-grid-dark absolute inset-0 opacity-60" />
      <div
        aria-hidden
        className="absolute -top-32 -right-24 size-[34rem] rounded-full bg-primary/25 blur-[140px]"
      />

      <div className="container-shell relative py-32">
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20">
          <div>
            <span className="eyebrow text-accent">
              <span aria-hidden className="h-px w-8 bg-accent/50" />
              Error 404
            </span>

            <p
              aria-hidden
              className="mt-6 font-heading text-[clamp(5rem,3rem+12vw,11rem)] leading-[0.85] font-extrabold tracking-[-0.05em] text-white/10 tabular-nums"
            >
              404
            </p>

            <h1 className="mt-2 text-[clamp(2rem,1.4rem+2.6vw,3.25rem)] leading-[1.08] font-bold tracking-[-0.03em] text-white">
              This page is not on the drawing
            </h1>

            <p className="mt-6 max-w-[52ch] text-lead text-white/65">
              The address you followed does not correspond to anything we have built.
              It may have moved, or the link may have been mistyped.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="accent" size="lg">
                <Link href="/">
                  <Home className="size-4.5" aria-hidden />
                  Back to home
                </Link>
              </Button>
              <Button asChild variant="light" size="lg">
                <Link href="/contact">
                  Report a broken link
                  <ArrowRight className="size-4.5" aria-hidden />
                </Link>
              </Button>
            </div>

            <a
              href={`tel:${site.phoneHref}`}
              className="mt-6 inline-flex items-center gap-2.5 text-[0.9375rem] font-semibold text-white/60 transition-colors hover:text-white"
            >
              <Phone className="size-4 text-accent" aria-hidden />
              {site.phone}
            </a>
          </div>

          <nav aria-label="Popular pages">
            <div className="flex items-center gap-3">
              <Compass className="size-5 text-accent" strokeWidth={1.9} aria-hidden />
              <p className="font-heading text-[0.6875rem] font-bold tracking-[0.16em] text-white/45 uppercase">
                Try one of these instead
              </p>
            </div>

            <ul className="mt-6 flex flex-col gap-3">
              {routes.map((route) => (
                <li key={route.href}>
                  <Link
                    href={route.href}
                    className="group flex items-center gap-5 rounded-[var(--radius-card)] border border-white/12 bg-white/[0.05] p-6 transition-all duration-400 hover:-translate-y-0.5 hover:border-accent/40 hover:bg-white/[0.09]"
                  >
                    <span className="min-w-0 flex-1">
                      <span className="block font-heading text-[1.0625rem] font-bold text-white">
                        {route.label}
                      </span>
                      <span className="mt-1 block text-[0.875rem] text-white/55">
                        {route.description}
                      </span>
                    </span>
                    <span
                      aria-hidden
                      className="flex size-11 shrink-0 items-center justify-center rounded-full border border-white/15 text-white/60 transition-all duration-400 group-hover:border-accent group-hover:bg-accent group-hover:text-primary-950"
                    >
                      <ArrowRight className="size-4.5" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}
