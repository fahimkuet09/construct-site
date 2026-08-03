import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Clock } from "lucide-react";
import type { NewsArticle } from "@/types";
import { formatDate, readingTime, cn } from "@/lib/utils";
import { Badge } from "@/components/ui";

export function NewsCard({
  article,
  featured = false,
  className,
  priority = false,
}: {
  article: NewsArticle;
  featured?: boolean;
  className?: string;
  priority?: boolean;
}) {
  const minutes = readingTime(article.body.join(" "));

  return (
    <article className={cn("group h-full", className)}>
      <Link
        href={`/news/${article.slug}`}
        className={cn(
          "flex h-full overflow-hidden rounded-[var(--radius-card)] border border-line bg-surface",
          "transition-all duration-500 ease-[var(--ease-out-quint)]",
          "hover:-translate-y-1.5 hover:border-primary/25 hover:shadow-[var(--shadow-lift)]",
          featured ? "flex-col lg:flex-row" : "flex-col",
        )}
      >
        <div
          className={cn(
            "relative overflow-hidden bg-primary-950",
            featured ? "aspect-[16/10] lg:aspect-auto lg:w-[52%]" : "aspect-[16/10]",
          )}
        >
          <Image
            src={article.image}
            alt=""
            fill
            priority={priority}
            sizes={
              featured
                ? "(max-width: 1024px) 100vw, 700px"
                : "(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 440px"
            }
            className="object-cover transition-transform duration-[900ms] ease-[var(--ease-out-quint)] group-hover:scale-[1.06]"
          />
          <span
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-primary-950/55 to-transparent"
          />
          <div className="absolute top-5 left-5">
            <Badge tone="dark">{article.category}</Badge>
          </div>
        </div>

        <div
          className={cn(
            "flex flex-1 flex-col p-6 lg:p-8",
            featured && "lg:justify-center lg:p-10",
          )}
        >
          <div className="flex items-center gap-3 text-[0.8125rem] font-medium text-muted">
            <time dateTime={article.publishedAt}>
              {formatDate(article.publishedAt)}
            </time>
            <span aria-hidden className="size-1 rounded-full bg-line" />
            <span className="flex items-center gap-1.5">
              <Clock className="size-3.5" aria-hidden />
              {minutes} min read
            </span>
          </div>

          <h3
            className={cn(
              "mt-3.5 font-bold tracking-[-0.02em] text-heading transition-colors duration-300 group-hover:text-primary",
              featured
                ? "text-[1.5rem] leading-[1.2] lg:text-[2rem]"
                : "text-[1.1875rem] leading-[1.3]",
            )}
          >
            {article.title}
          </h3>

          <p
            className={cn(
              "mt-3 flex-1 leading-relaxed text-body",
              featured ? "text-[1.0625rem]" : "text-[0.9375rem]",
            )}
          >
            {article.excerpt}
          </p>

          <span className="mt-6 inline-flex items-center gap-2 font-heading text-[0.875rem] font-bold text-primary">
            Read the story
            <ArrowUpRight
              aria-hidden
              className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </span>
        </div>
      </Link>
    </article>
  );
}
