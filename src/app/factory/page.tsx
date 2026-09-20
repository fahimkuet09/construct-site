import type { Metadata } from "next";
import { MapPin, Phone, Mail } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { SectionHeading } from "@/components/ui";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { factoryEquipment } from "@/data/factory";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Factory",
  description:
    "Inside Universal Structural Steel Ltd.'s fabrication workshop in Bhaluka, Mymensingh — the machinery and materials behind every structure we deliver.",
};

const materialsSpec = [
  {
    component: "Built-up section",
    spec: "M.S. Plate — ASTM A572-50 grade",
    strength: "Fy = 345 MPa",
  },
  {
    component: "Purlin and girt",
    spec: "Rolled formed steel, minimum yield stress 275 MPa",
    strength: "Fy(min) = 275 MPa",
  },
  {
    component: "Roof and wall cladding",
    spec: "Hi-Ten painted 0.47mm steel, 55% aluminium / 45% zinc coating, AS1397 G550-AZ150",
    strength: "Fy = 550 N/mm²",
  },
  {
    component: "Anchor bolts",
    spec: "Galvanized / naturally quenched black",
    strength: "Fy = 24.5–35.0 kN/cm²",
  },
  {
    component: "High-strength bolts",
    spec: "A325M Type 1, hot-dip galvanized / naturally quenched black",
    strength: "Ft = 55 kN/cm²",
  },
];

export default function FactoryPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Factory"
        title="Where every frame is cut, welded and prepared"
        lead="Our own fabrication workshop in Bhaluka, Mymensingh — not a subcontracted workshop — is where primary frames, purlins and cladding are cut, drilled, welded and coated to drawing before they ever reach a site."
        image="/images/Portfolio/factory-shed-exterior-completed.jpg"
        crumbs={[{ label: "Home", href: "/" }, { label: "Factory" }]}
      />

      {/* ================================================== location */}
      <section className="section-y-sm bg-background">
        <div className="container-shell">
          <Reveal>
            <div className="grid gap-6 rounded-[var(--radius-card)] border border-line bg-surface p-8 sm:grid-cols-3 lg:p-10">
              <div className="flex items-start gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary">
                  <MapPin className="size-5" strokeWidth={1.9} aria-hidden />
                </span>
                <div>
                  <p className="font-heading text-[0.8125rem] font-bold text-heading">
                    Factory address
                  </p>
                  <p className="mt-1 text-[0.9375rem] leading-relaxed text-body">
                    {site.factory.street}, {site.factory.locality},{" "}
                    {site.factory.region}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary">
                  <Phone className="size-5" strokeWidth={1.9} aria-hidden />
                </span>
                <div>
                  <p className="font-heading text-[0.8125rem] font-bold text-heading">
                    Factory hotline
                  </p>
                  <a
                    href={`tel:${site.factory.phoneHref}`}
                    className="mt-1 block text-[0.9375rem] text-body transition-colors hover:text-primary"
                  >
                    {site.factory.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary">
                  <Mail className="size-5" strokeWidth={1.9} aria-hidden />
                </span>
                <div>
                  <p className="font-heading text-[0.8125rem] font-bold text-heading">
                    Factory email
                  </p>
                  <a
                    href={`mailto:${site.factory.email}`}
                    className="mt-1 block text-[0.9375rem] text-body transition-colors hover:text-primary"
                  >
                    {site.factory.email}
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================================================== equipment */}
      <section className="section-y relative overflow-hidden bg-surface">
        <div aria-hidden className="blueprint-grid absolute inset-0 opacity-60" />
        <div className="container-shell relative">
          <Reveal>
            <SectionHeading
              eyebrow="Factory setup"
              title="Fabrication kept in-house, start to finish"
              lead="Cutting, forming, welding, coating and quality checks happen under our own roof — not queued behind a third-party workshop's schedule."
            />
          </Reveal>

          <RevealGroup
            as="ul"
            stagger={0.05}
            className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {factoryEquipment.map((item) => {
              const Icon = item.icon;
              return (
                <RevealItem
                  key={item.name}
                  as="li"
                  className="group rounded-[var(--radius-card)] border border-line bg-background p-6 transition-all duration-400 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[var(--shadow-raise)]"
                >
                  <span className="flex size-11 items-center justify-center rounded-xl bg-primary-50 text-primary transition-colors duration-400 group-hover:bg-primary group-hover:text-white">
                    <Icon className="size-5" strokeWidth={1.9} aria-hidden />
                  </span>
                  <h3 className="mt-5 font-heading text-[0.9375rem] font-bold text-heading">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-[0.8125rem] leading-relaxed text-muted">
                    {item.description}
                  </p>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </div>
      </section>

      {/* =============================================== materials spec */}
      <section className="section-y bg-background">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Materials specification"
              title="What actually goes into a structure"
              lead="The components, grades and coatings our steel buildings are fabricated from."
            />
          </Reveal>

          <Reveal delay={0.05}>
            <div className="mt-12 overflow-x-auto rounded-[var(--radius-card)] border border-line">
              <table className="w-full min-w-[640px] border-collapse text-left text-[0.9375rem]">
                <thead>
                  <tr className="border-b border-line bg-surface">
                    <th className="px-6 py-4 font-heading text-[0.75rem] font-bold tracking-[0.08em] text-muted uppercase">
                      Component
                    </th>
                    <th className="px-6 py-4 font-heading text-[0.75rem] font-bold tracking-[0.08em] text-muted uppercase">
                      Specification
                    </th>
                    <th className="px-6 py-4 font-heading text-[0.75rem] font-bold tracking-[0.08em] text-muted uppercase">
                      Strength
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {materialsSpec.map((row, i) => (
                    <tr
                      key={row.component}
                      className={i % 2 === 1 ? "bg-surface/60" : "bg-surface"}
                    >
                      <td className="border-t border-line px-6 py-4 font-heading font-bold text-heading">
                        {row.component}
                      </td>
                      <td className="border-t border-line px-6 py-4 text-body">
                        {row.spec}
                      </td>
                      <td className="border-t border-line px-6 py-4 tabular-nums text-body">
                        {row.strength}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        eyebrow="Concept to construction"
        title="See where your structure gets built"
        body="From site measurement through to fabrication in Bhaluka and erection on your site — one accountable team, start to finish."
        primary={{ label: "Talk to our team", href: "/contact" }}
        secondary={{ label: "See our projects", href: "/projects" }}
      />
    </>
  );
}
