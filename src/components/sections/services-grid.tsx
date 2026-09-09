import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";
import { ServiceCard } from "@/components/shared/service-card";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";

export function ServicesGrid() {
  return (
    <section id="services" className="section-y relative overflow-hidden bg-surface">
      <div aria-hidden className="blueprint-grid absolute inset-0 opacity-60" />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-line to-transparent"
      />

      <div className="container-shell relative">
        <Reveal>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="What we build"
              title="Four categories, one delivery model"
              lead="Site measurement through to handover under a single contract — so accountability never falls into the gap between design, fabrication and erection."
            />
            <Button asChild variant="outline" size="lg" className="shrink-0">
              <Link href="/services">
                All services
                <ArrowUpRight
                  className="size-4.5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                  aria-hidden
                />
              </Link>
            </Button>
          </div>
        </Reveal>

        <RevealGroup
          as="ul"
          stagger={0.07}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-8"
        >
          {services.map((service, i) => (
            <RevealItem key={service.slug} as="li">
              <ServiceCard service={service} index={i} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
