"use client";

import dynamic from "next/dynamic";
import { offices } from "@/data/offices";
import { pinsFromOffices } from "@/lib/map";
import { SectionHeading, Skeleton } from "@/components/ui";
import { Reveal } from "@/components/motion/reveal";

const ProjectMap = dynamic(
  () => import("@/components/shared/project-map").then((m) => m.ProjectMap),
  { ssr: false, loading: () => <Skeleton className="size-full rounded-none" /> },
);

const pins = pinsFromOffices(offices);

export function OfficesMap() {
  return (
    <section className="section-y bg-background">
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Find us"
            title="Head office and fabrication workshop"
            lead="Select a marker to see what each location handles."
          />
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-12 overflow-hidden rounded-[var(--radius-card)] border border-line shadow-[var(--shadow-raise)]">
            <div className="h-[24rem] w-full sm:h-[30rem] lg:h-[34rem]">
              <ProjectMap pins={pins} center={[23.8, 90.39]} zoom={11} />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
