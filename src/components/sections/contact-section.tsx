"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { offices } from "@/data/offices";
import { EnquiryForm } from "@/components/shared/enquiry-form";
import { Badge, SectionHeading, Skeleton } from "@/components/ui";
import { Reveal } from "@/components/motion/reveal";
import { pinsFromOffices } from "@/lib/map";

const ProjectMap = dynamic(
  () => import("@/components/shared/project-map").then((m) => m.ProjectMap),
  {
    ssr: false,
    loading: () => <Skeleton className="size-full rounded-none" />,
  },
);

const officePins = pinsFromOffices(offices);

export function ContactSection() {
  return (
    <section id="contact" className="section-y bg-background">
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Start a conversation"
            title="Tell us about the constraint that worries you most"
            lead="Every enquiry is routed to a named individual rather than a shared inbox. Tender and new business enquiries receive a response within two working days."
          />
        </Reveal>

        <div className="mt-14 grid gap-8 lg:mt-16 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
          {/* ------------------------------------------------- form */}
          <Reveal>
            <div className="rounded-[var(--radius-card)] border border-line bg-surface p-7 lg:p-10">
              <EnquiryForm />
            </div>
          </Reveal>

          {/* ------------------------------------- map + branch list */}
          <Reveal direction="left" className="flex flex-col gap-8">
            <div className="overflow-hidden rounded-[var(--radius-card)] border border-line">
              <div className="h-64 w-full sm:h-72">
                <ProjectMap pins={officePins} center={[28, 24]} zoom={1.6} />
              </div>
              <div className="border-t border-line bg-surface p-6">
                <div className="flex items-start gap-3.5">
                  <MapPin
                    className="mt-0.5 size-5 shrink-0 text-accent-700"
                    strokeWidth={1.9}
                    aria-hidden
                  />
                  <div>
                    <p className="flex flex-wrap items-center gap-2.5">
                      <span className="font-heading text-[1rem] font-bold text-heading">
                        London
                      </span>
                      <Badge tone="accent">Headquarters</Badge>
                    </p>
                    <address className="mt-1.5 text-[0.9375rem] leading-relaxed text-body not-italic">
                      Meridian House, 14 Blackfriars Road
                      <br />
                      London SE1 8NW, United Kingdom
                    </address>
                    <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                      <a
                        href="tel:+442079460318"
                        className="flex items-center gap-2 text-[0.875rem] font-semibold text-primary transition-colors hover:text-primary-700"
                      >
                        <Phone className="size-4" aria-hidden />
                        +44 20 7946 0318
                      </a>
                      <a
                        href="mailto:enquiries@meridianconstruct.com"
                        className="flex items-center gap-2 text-[0.875rem] font-semibold text-primary transition-colors hover:text-primary-700"
                      >
                        <Mail className="size-4" aria-hidden />
                        enquiries@meridianconstruct.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ------------------------------------------- branches */}
            <div className="rounded-[var(--radius-card)] border border-line bg-surface p-7">
              <div className="flex items-end justify-between gap-4">
                <p className="font-heading text-[0.6875rem] font-bold tracking-[0.16em] text-muted uppercase">
                  Regional offices
                </p>
                <Link
                  href="/contact"
                  className="font-heading text-[0.8125rem] font-bold text-primary transition-colors hover:text-primary-700"
                >
                  All offices
                </Link>
              </div>

              <ul className="mt-5 grid gap-x-6 gap-y-4 sm:grid-cols-2">
                {offices
                  .filter((o) => !o.isHeadquarters)
                  .map((office) => (
                    <li key={office.id}>
                      <p className="font-heading text-[0.9375rem] font-bold text-heading">
                        {office.city}
                      </p>
                      <p className="text-[0.8125rem] text-muted">
                        {office.country} — {office.projectCount} projects
                      </p>
                      <a
                        href={`tel:${office.phone.replace(/[^+\d]/g, "")}`}
                        className="mt-1 inline-block text-[0.8125rem] font-medium text-primary transition-colors hover:text-primary-700"
                      >
                        {office.phone}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
