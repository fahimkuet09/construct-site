import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Clock, Tag } from "lucide-react";
import { news, getArticle, getRelatedArticles } from "@/data/news";
import { PageHero } from "@/components/shared/page-hero";
import { NewsCard } from "@/components/shared/news-card";
import { CtaBand } from "@/components/sections/cta-band";
import { SectionHeading } from "@/components/ui";
import { Button } from "@/components/ui/button";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import {
  LinkedInIcon,
  XIcon,
} from "@/components/ui/social-icon";
import { formatDate, readingTime } from "@/lib/utils";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return news.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: "Article not found" };

  return { title: article.title, description: article.excerpt };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const related = getRelatedArticles(slug, 3);
  const minutes = readingTime(article.body.join(" "));
  const shareUrl = `${site.url}/news/${article.slug}`;

  return (
    <>
      <PageHero
        eyebrow={article.category}
        title={article.title}
        image={article.image}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "News", href: "/news" },
          { label: article.category },
        ]}
      >
        <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-[0.9375rem] text-white/65">
          <span className="flex items-center gap-2.5">
            <Image
              src={article.author.avatar}
              alt=""
              width={36}
              height={36}
              className="size-9 rounded-full object-cover"
            />
            <span className="font-heading font-bold text-white">
              {article.author.name}
            </span>
          </span>
          <span aria-hidden className="size-1 rounded-full bg-white/25" />
          <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
          <span aria-hidden className="size-1 rounded-full bg-white/25" />
          <span className="flex items-center gap-1.5">
            <Clock className="size-4" aria-hidden />
            {minutes} min read
          </span>
        </div>
      </PageHero>

      {/* ==================================================== article */}
      <article className="section-y bg-background">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[1fr_18rem] lg:gap-16">
            {/* --------------------------------------------- body */}
            <Reveal>
              <div className="max-w-[68ch]">
                <p className="text-[clamp(1.125rem,1rem+0.6vw,1.375rem)] leading-[1.6] font-medium text-heading">
                  {article.excerpt}
                </p>

                <div className="mt-9 flex flex-col gap-6">
                  {article.body.map((para, i) => (
                    <p key={i} className="text-body">
                      {para}
                    </p>
                  ))}
                </div>

                {/* Tags */}
                <div className="mt-12 flex flex-wrap items-center gap-3 border-t border-line pt-8">
                  <Tag className="size-4 text-muted" aria-hidden />
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-line bg-surface px-3.5 py-1.5 text-[0.8125rem] font-medium text-body"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Button asChild variant="outline" size="md" className="mt-10">
                  <Link href="/news">
                    <ArrowLeft className="size-4" aria-hidden />
                    Back to newsroom
                  </Link>
                </Button>
              </div>
            </Reveal>

            {/* -------------------------------------------- sidebar */}
            <Reveal direction="left">
              <aside className="lg:sticky lg:top-32">
                <div className="rounded-[var(--radius-card)] border border-line bg-surface p-6">
                  <p className="font-heading text-[0.6875rem] font-bold tracking-[0.16em] text-muted uppercase">
                    Written by
                  </p>
                  <div className="mt-4 flex items-center gap-3.5">
                    <Image
                      src={article.author.avatar}
                      alt=""
                      width={52}
                      height={52}
                      className="size-13 rounded-full object-cover"
                    />
                    <div className="min-w-0">
                      <p className="font-heading text-[0.9375rem] font-bold text-heading">
                        {article.author.name}
                      </p>
                      <p className="text-[0.8125rem] text-muted">
                        {article.author.role}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-5 rounded-[var(--radius-card)] border border-line bg-surface p-6">
                  <p className="font-heading text-[0.6875rem] font-bold tracking-[0.16em] text-muted uppercase">
                    Share
                  </p>
                  <div className="mt-4 flex gap-2.5">
                    <a
                      href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}`}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="Share this article on LinkedIn"
                      className="flex size-11 items-center justify-center rounded-full border border-line text-body transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white"
                    >
                      <LinkedInIcon />
                    </a>
                    <a
                      href={`https://x.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(article.title)}`}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="Share this article on X"
                      className="flex size-11 items-center justify-center rounded-full border border-line text-body transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white"
                    >
                      <XIcon />
                    </a>
                    <a
                      href={`mailto:?subject=${encodeURIComponent(article.title)}&body=${encodeURIComponent(shareUrl)}`}
                      aria-label="Share this article by email"
                      className="flex h-11 items-center justify-center rounded-full border border-line px-4 font-heading text-[0.8125rem] font-bold text-body transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white"
                    >
                      Email
                    </a>
                  </div>
                </div>
              </aside>
            </Reveal>
          </div>
        </div>
      </article>

      {/* =========================================== related articles */}
      <section className="section-y bg-surface">
        <div className="container-shell">
          <Reveal>
            <SectionHeading eyebrow="Keep reading" title="Related stories" />
          </Reveal>

          <RevealGroup
            as="ul"
            stagger={0.07}
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
          >
            {related.map((item) => (
              <RevealItem key={item.slug} as="li">
                <NewsCard article={item} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <CtaBand
        eyebrow="Next step"
        title="Working on something similar?"
        body="If any of this is relevant to a project you are shaping, we are happy to talk it through — with no expectation of a tender at the end of it."
      />
    </>
  );
}
