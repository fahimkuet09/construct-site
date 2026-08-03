import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { NewsExplorer } from "@/components/sections/news-explorer";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  title: "Newsroom",
  description:
    "Project milestones, engineering method notes and company announcements from Meridian Construct.",
};

export default function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Newsroom"
        title="What our teams are building and learning"
        lead="Project milestones, method notes and engineering analysis — written by the people doing the work rather than by a communications agency."
        image="/images/news/news-01.svg"
        crumbs={[{ label: "Home", href: "/" }, { label: "News" }]}
      />

      <NewsExplorer />

      <CtaBand
        eyebrow="Stay informed"
        title="Get the quarterly briefing"
        body="Project case studies, method notes and engineering analysis, four times a year. No marketing, no sales follow-up."
        primary={{ label: "Talk to our team", href: "/contact" }}
        secondary={{ label: "See our projects", href: "/projects" }}
      />
    </>
  );
}
