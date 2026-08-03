import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHero } from "@/components/shared/page-hero";
import { ProjectsExplorer } from "@/components/sections/projects-explorer";
import { ProjectMapSection } from "@/components/sections/project-map-section";
import { CtaBand } from "@/components/sections/cta-band";
import { Skeleton } from "@/components/ui";
import { projects } from "@/data/projects";
import { formatCurrencyCompact } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Bridges, metros, ports, highways, energy and industrial facilities delivered by Meridian Construct across 24 countries.",
};

const totalValue = projects.reduce((sum, p) => sum + p.contractValueUsd, 0);

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Projects that could not be allowed to fail"
        lead="Crossings, corridors, tunnels and terminals delivered under live operation, tight tolerance and immovable dates. Filter by sector or status to find work like yours."
        image="/images/projects/north-estuary-hero.svg"
        crumbs={[{ label: "Home", href: "/" }, { label: "Projects" }]}
      >
        <dl className="mt-10 flex flex-wrap gap-x-12 gap-y-6">
          <div>
            <dd className="font-heading text-[1.75rem] leading-none font-extrabold text-white tabular-nums">
              {projects.length}
            </dd>
            <dt className="mt-2 font-heading text-[0.8125rem] font-semibold text-accent">
              Featured projects
            </dt>
          </div>
          <div>
            <dd className="font-heading text-[1.75rem] leading-none font-extrabold text-white tabular-nums">
              {formatCurrencyCompact(totalValue)}
            </dd>
            <dt className="mt-2 font-heading text-[0.8125rem] font-semibold text-accent">
              Combined contract value
            </dt>
          </div>
          <div>
            <dd className="font-heading text-[1.75rem] leading-none font-extrabold text-white tabular-nums">
              6
            </dd>
            <dt className="mt-2 font-heading text-[0.8125rem] font-semibold text-accent">
              Infrastructure sectors
            </dt>
          </div>
        </dl>
      </PageHero>

      {/* useSearchParams needs a Suspense boundary during prerender. */}
      <Suspense
        fallback={
          <section className="section-y bg-background">
            <div className="container-shell">
              <Skeleton className="h-64 w-full" />
              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                {Array.from({ length: 6 }, (_, i) => (
                  <Skeleton key={i} className="h-[30rem] w-full" />
                ))}
              </div>
            </div>
          </section>
        }
      >
        <ProjectsExplorer />
      </Suspense>

      <ProjectMapSection />

      <CtaBand
        eyebrow="Next step"
        title="Recognise your project in any of these?"
        body="Most of the work above started as a conversation about a constraint someone thought was unsolvable. Send us yours."
      />
    </>
  );
}
