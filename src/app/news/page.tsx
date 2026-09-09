import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { NewsExplorer } from "@/components/sections/news-explorer";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  title: "News",
  description:
    "Engineering explainers, process notes and company announcements from Universal Structural Steel Ltd.",
};

export default function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="News"
        title="Notes from the workshop and the site"
        lead="Engineering explainers and company updates — written by the team doing the work."
        image="/images/news/news-01.svg"
        crumbs={[{ label: "Home", href: "/" }, { label: "News" }]}
      />

      <NewsExplorer />

      <CtaBand
        eyebrow="Planning a project?"
        title="Start with a site visit"
        body="Send us the rough size, use and site location, and we'll arrange a site visit — the first step in our four-stage process."
        primary={{ label: "Talk to our team", href: "/contact" }}
        secondary={{ label: "See our projects", href: "/projects" }}
      />
    </>
  );
}
