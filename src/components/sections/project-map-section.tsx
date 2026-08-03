"use client";

import dynamic from "next/dynamic";
import { Globe2, Layers, MapPin, Users } from "lucide-react";
import { projects } from "@/data/projects";
import { pinsFromProjects } from "@/lib/map";
import { SectionHeading, Skeleton } from "@/components/ui";
import { Reveal } from "@/components/motion/reveal";
import { Counter } from "@/components/motion/counter";

// Leaflet reaches for `window` at module scope, so it can never be rendered
// on the server.
const ProjectMap = dynamic(
  () => import("@/components/shared/project-map").then((m) => m.ProjectMap),
  {
    ssr: false,
    loading: () => (
      <div className="flex size-full items-center justify-center bg-background">
        <Skeleton className="size-full rounded-none" />
      </div>
    ),
  },
);

const mapStats = [
  { icon: Globe2, value: 61, suffix: "", label: "Districts" },
  { icon: Layers, value: 1140, suffix: "+", label: "Projects delivered" },
  { icon: MapPin, value: 7, suffix: "", label: "Regional offices" },
  { icon: Users, value: 12800, suffix: "+", label: "People" },
];

export function ProjectMapSection() {
  const pins = pinsFromProjects(projects);

  return (
    <section id="map" className="section-y bg-surface">
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Where we work"
            title="Sixty-one districts, one delivery standard"
            lead="Every marker is a live or completed contract. Wherever we hold no permanent presence, a delivery team mobilises from the nearest regional office."
          />
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-12 overflow-hidden rounded-[var(--radius-card)] border border-line shadow-[var(--shadow-raise)] lg:mt-14">
            <div className="h-[26rem] w-full sm:h-[32rem] lg:h-[38rem]">
              <ProjectMap pins={pins} center={[23.7, 90.4]} zoom={7} />
            </div>

            <dl className="grid grid-cols-2 gap-px border-t border-line bg-line lg:grid-cols-4">
              {mapStats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="flex items-center gap-4 bg-surface p-6 lg:p-7"
                  >
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary-50 text-primary">
                      <Icon className="size-5.5" strokeWidth={1.9} aria-hidden />
                    </span>
                    <span>
                      <dd className="font-heading text-[1.5rem] leading-none font-extrabold text-heading tabular-nums">
                        <Counter value={stat.value} suffix={stat.suffix} />
                      </dd>
                      <dt className="mt-1.5 text-[0.8125rem] font-medium text-muted">
                        {stat.label}
                      </dt>
                    </span>
                  </div>
                );
              })}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
