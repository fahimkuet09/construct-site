import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { offices, contactDepartments, contactFaqs } from "@/data/offices";
import { PageHero } from "@/components/shared/page-hero";
import { OfficesMap } from "@/components/sections/offices-map";
import { EnquiryForm } from "@/components/shared/enquiry-form";
import { FaqSection } from "@/components/shared/faq-section";
import { Badge, SectionHeading } from "@/components/ui";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to Universal Structural Steel Ltd. — our Dhaka office and workshop, department contacts, and an enquiry form to start your project.",
};

const regions = ["Dhaka"] as const;

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us about the building you're planning"
        lead="Send us the rough size, use and site location, and we'll arrange a site visit — the first step in our four-stage process."
        image="/images/Portfolio/institutional-building-exterior.jpg"
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      >
        <div className="mt-10 flex flex-wrap gap-x-10 gap-y-5">
          <a
            href={`tel:${site.phoneHref}`}
            className="flex items-center gap-2.5 font-heading text-[1.0625rem] font-bold text-white transition-colors hover:text-accent"
          >
            <Phone className="size-4.5 text-accent" aria-hidden />
            {site.phone}
          </a>
          <a
            href={`mailto:${site.email}`}
            className="flex items-center gap-2.5 font-heading text-[1.0625rem] font-bold text-white transition-colors hover:text-accent"
          >
            <Mail className="size-4.5 text-accent" aria-hidden />
            {site.email}
          </a>
          <span className="flex items-center gap-2.5 text-[0.9375rem] text-white/60">
            <Clock className="size-4.5 text-accent" aria-hidden />
            Sat–Thu, 09:00–18:00 (Dhaka time)
          </span>
        </div>
      </PageHero>

      {/* ============================================== form + intro */}
      <section className="section-y bg-background">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <Reveal>
              <div className="lg:sticky lg:top-32">
                <SectionHeading
                  eyebrow="Send an enquiry"
                  title="What happens after you hit send"
                />

                <ol className="mt-8 flex flex-col gap-5">
                  {[
                    {
                      title: "Routed to a named person",
                      body: "Your enquiry goes to the individual who owns that sector or region, not to a shared mailbox.",
                    },
                    {
                      title: "Reviewed by an engineer",
                      body: "Technical enquiries are read by someone who has actually delivered that type of work.",
                    },
                    {
                      title: "Answered within two days",
                      body: "You get a substantive reply, not an acknowledgement. If we are not right for the job, we will say so.",
                    },
                  ].map((step, i) => (
                    <li key={step.title} className="flex gap-4">
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary font-heading text-[0.8125rem] font-extrabold text-white tabular-nums">
                        {i + 1}
                      </span>
                      <span>
                        <span className="block font-heading text-[1rem] font-bold text-heading">
                          {step.title}
                        </span>
                        <span className="mt-1 block text-[0.9375rem] leading-relaxed text-body">
                          {step.body}
                        </span>
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>

            <Reveal direction="left">
              <div className="rounded-[var(--radius-card)] border border-line bg-surface p-7 lg:p-10">
                <EnquiryForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================================================ departments */}
      <section className="section-y relative overflow-hidden bg-surface">
        <div aria-hidden className="blueprint-grid absolute inset-0 opacity-60" />
        <div className="container-shell relative">
          <Reveal>
            <SectionHeading
              eyebrow="Departments"
              title="Go direct to the right team"
              lead="If you already know who you need, these lines bypass the general enquiry route entirely."
            />
          </Reveal>

          <RevealGroup
            as="ul"
            stagger={0.06}
            className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
          >
            {contactDepartments.map((dept) => {
              const Icon = dept.icon;
              return (
                <RevealItem
                  key={dept.name}
                  as="li"
                  className="group flex flex-col rounded-[var(--radius-card)] border border-line bg-surface p-7 transition-all duration-400 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[var(--shadow-raise)]"
                >
                  <span className="flex size-13 items-center justify-center rounded-[16px] bg-primary-50 text-primary transition-colors duration-400 group-hover:bg-primary group-hover:text-white">
                    <Icon className="size-6" strokeWidth={1.85} aria-hidden />
                  </span>
                  <h3 className="mt-6 text-[1.0625rem] font-bold text-heading">
                    {dept.name}
                  </h3>
                  <p className="mt-2.5 flex-1 text-[0.9375rem] leading-relaxed text-body">
                    {dept.description}
                  </p>
                  <div className="mt-6 flex flex-col gap-2 border-t border-line pt-5">
                    <a
                      href={`mailto:${dept.email}`}
                      className="flex items-center gap-2 text-[0.875rem] font-semibold text-primary transition-colors hover:text-primary-700"
                    >
                      <Mail className="size-4 shrink-0" aria-hidden />
                      <span className="truncate">{dept.email}</span>
                    </a>
                    <a
                      href={`tel:${dept.phone.replace(/[^+\d]/g, "")}`}
                      className="flex items-center gap-2 text-[0.875rem] font-semibold text-primary transition-colors hover:text-primary-700"
                    >
                      <Phone className="size-4 shrink-0" aria-hidden />
                      {dept.phone}
                    </a>
                  </div>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </div>
      </section>

      <OfficesMap />

      {/* =================================================== offices */}
      <section className="section-y bg-surface">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Our offices"
              title="Head office and fabrication workshop, Dhaka"
              lead="Based in Dhaka, with erection crews that travel to project sites across Bangladesh."
            />
          </Reveal>

          <div className="mt-14 flex flex-col gap-12">
            {regions.map((region) => {
              const regionOffices = offices.filter((o) => o.region === region);
              if (regionOffices.length === 0) return null;

              return (
                <Reveal key={region}>
                  <h3 className="font-heading text-[0.6875rem] font-bold tracking-[0.16em] text-muted uppercase">
                    {region}
                  </h3>
                  <ul className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                    {regionOffices.map((office) => (
                      <li
                        key={office.id}
                        className="rounded-[var(--radius-card)] border border-line bg-background p-7 transition-all duration-400 hover:border-primary/25 hover:shadow-[var(--shadow-raise)]"
                      >
                        <div className="flex flex-wrap items-center gap-2.5">
                          <h4 className="font-heading text-[1.125rem] font-bold text-heading">
                            {office.city}
                          </h4>
                          {office.isHeadquarters ? (
                            <Badge tone="accent">Headquarters</Badge>
                          ) : null}
                        </div>

                        <address className="mt-3 flex items-start gap-2.5 text-[0.9375rem] leading-relaxed text-body not-italic">
                          <MapPin
                            className="mt-1 size-4 shrink-0 text-accent-700"
                            aria-hidden
                          />
                          <span>
                            {office.address.map((line) => (
                              <span key={line} className="block">
                                {line}
                              </span>
                            ))}
                            <span className="block">{office.country}</span>
                          </span>
                        </address>

                        <div className="mt-5 flex flex-col gap-2 border-t border-line pt-4">
                          <a
                            href={`tel:${office.phone.replace(/[^+\d]/g, "")}`}
                            className="flex items-center gap-2 text-[0.875rem] font-semibold text-primary transition-colors hover:text-primary-700"
                          >
                            <Phone className="size-4 shrink-0" aria-hidden />
                            {office.phone}
                          </a>
                          <a
                            href={`mailto:${office.email}`}
                            className="flex items-center gap-2 text-[0.875rem] font-semibold text-primary transition-colors hover:text-primary-700"
                          >
                            <Mail className="size-4 shrink-0" aria-hidden />
                            <span className="truncate">{office.email}</span>
                          </a>
                        </div>

                        <p className="mt-4 font-heading text-[0.75rem] font-bold tracking-[0.06em] text-muted uppercase">
                          {office.isHeadquarters
                            ? "Head office & enquiries"
                            : "Fabrication & workshop operations"}
                        </p>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <FaqSection
        faqs={contactFaqs}
        eyebrow="Before you write"
        title="Questions we get asked first"
        className="section-y bg-background"
      />
    </>
  );
}
