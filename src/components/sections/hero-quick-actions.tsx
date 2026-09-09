import Link from "next/link";
import { ArrowUpRight, Building2, Factory, Send, Users } from "lucide-react";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";

const actions = [
  {
    title: "Start a Project",
    description: "Tell us what you're building — we'll arrange a site visit.",
    href: "/contact",
    icon: Send,
  },
  {
    title: "Our Services",
    description: "Industrial, commercial, residential & agro-based buildings.",
    href: "/services",
    icon: Factory,
  },
  {
    title: "Our Projects",
    description: "Completed and ongoing work across Bangladesh.",
    href: "/projects",
    icon: Building2,
  },
  {
    title: "Careers",
    description: "Join a small technical team building real projects.",
    href: "/careers",
    icon: Users,
  },
];

/**
 * Sits between Hero and the sections below it, pulled up with a negative
 * margin so the card row physically overlaps the hero's bottom edge —
 * bridging the full-bleed image into the page content rather than sitting
 * flush beneath it.
 */
export function HeroQuickActions() {
  return (
    <div className="relative z-10 -mt-12 lg:-mt-16">
      <div className="container-shell">
        <RevealGroup
          as="ul"
          stagger={0.07}
          className="grid gap-4 rounded-[var(--radius-card)] bg-surface p-4 shadow-[var(--shadow-lift)] sm:grid-cols-2 lg:grid-cols-4 lg:gap-5 lg:p-5"
        >
          {actions.map((action) => {
            const Icon = action.icon;
            return (
              <RevealItem key={action.title} as="li">
                <Link
                  href={action.href}
                  className="group flex h-full flex-col rounded-2xl border border-line bg-background p-6 transition-all duration-400 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[var(--shadow-raise)]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-[14px] bg-primary-50 text-primary transition-colors duration-400 group-hover:bg-primary group-hover:text-white">
                      <Icon className="size-5.5" strokeWidth={1.9} aria-hidden />
                    </span>
                    <span
                      aria-hidden
                      className="flex size-9 shrink-0 items-center justify-center rounded-full border border-line text-muted opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 -translate-x-1"
                    >
                      <ArrowUpRight className="size-4" />
                    </span>
                  </div>
                  <h3 className="mt-5 font-heading text-[1.0625rem] font-bold text-heading">
                    {action.title}
                  </h3>
                  <p className="mt-2 text-[0.875rem] leading-relaxed text-body">
                    {action.description}
                  </p>
                </Link>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </div>
  );
}
