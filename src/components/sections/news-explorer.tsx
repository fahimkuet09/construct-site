"use client";

import * as React from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { SearchX } from "lucide-react";
import { news, newsCategories } from "@/data/news";
import { NewsCard } from "@/components/shared/news-card";
import { EmptyState } from "@/components/ui";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function NewsExplorer() {
  const [category, setCategory] = React.useState<string>("All");
  const reduced = useReducedMotion();

  const visible = React.useMemo(
    () => (category === "All" ? news : news.filter((n) => n.category === category)),
    [category],
  );

  const [lead, ...rest] = visible;

  return (
    <section className="section-y bg-background">
      <div className="container-shell">
        <h2 className="sr-only">Articles</h2>

        {/* ------------------------------------------------- filters */}
        <div
          role="tablist"
          aria-label="Filter news by category"
          className="flex flex-wrap gap-2"
        >
          {newsCategories.map((option) => {
            const active = category === option;
            const count =
              option === "All"
                ? news.length
                : news.filter((n) => n.category === option).length;

            return (
              <button
                key={option}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setCategory(option)}
                className={cn(
                  "cursor-pointer rounded-full border px-5 py-2.5 font-heading text-[0.875rem] font-bold transition-all duration-300",
                  active
                    ? "border-primary bg-primary text-white shadow-[var(--shadow-raise)]"
                    : "border-line bg-surface text-body hover:border-primary/40 hover:text-primary",
                )}
              >
                {option}
                <span
                  className={cn(
                    "ml-2 text-[0.75rem] tabular-nums",
                    active ? "text-white/60" : "text-muted",
                  )}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* ---------------------------------------------------- list */}
        <div className="mt-10 lg:mt-12">
          {visible.length === 0 ? (
            <EmptyState
              icon={<SearchX className="size-6" aria-hidden />}
              title="Nothing published in this category yet"
              description="We publish four to six times a quarter. Subscribe to the briefing and you will get the next one as it lands."
              action={
                <Button
                  variant="primary"
                  size="md"
                  className="mt-2"
                  onClick={() => setCategory("All")}
                >
                  Show all articles
                </Button>
              }
            />
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={category}
                initial={reduced ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduced ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                {lead ? <NewsCard article={lead} featured priority /> : null}

                {rest.length > 0 ? (
                  <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:mt-8 lg:grid-cols-3 lg:gap-8">
                    {rest.map((article, i) => (
                      <motion.li
                        key={article.slug}
                        initial={reduced ? false : { opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: reduced ? 0 : i * 0.06,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                      >
                        <NewsCard article={article} />
                      </motion.li>
                    ))}
                  </ul>
                ) : null}
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </div>
    </section>
  );
}
