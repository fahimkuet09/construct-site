import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { news } from "@/data/news";
import { NewsCard } from "@/components/shared/news-card";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";

export function NewsPreview() {
  const [lead, ...rest] = news.slice(0, 4);

  return (
    <section id="news" className="section-y bg-background">
      <div className="container-shell">
        <Reveal>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Newsroom"
              title="What our teams are building and learning"
              lead="Project milestones, method notes and engineering analysis written by the people doing the work."
            />
            <Button asChild variant="outline" size="lg" className="shrink-0">
              <Link href="/news">
                All news
                <ArrowUpRight
                  className="size-4.5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                  aria-hidden
                />
              </Link>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="mt-12 lg:mt-14">
            <NewsCard article={lead} featured />
          </div>
        </Reveal>

        <RevealGroup
          as="ul"
          stagger={0.07}
          className="mt-6 grid gap-6 md:grid-cols-3 lg:mt-8 lg:gap-8"
        >
          {rest.map((article) => (
            <RevealItem key={article.slug} as="li">
              <NewsCard article={article} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
