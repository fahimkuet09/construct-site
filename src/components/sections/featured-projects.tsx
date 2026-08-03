"use client";

import * as React from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, SearchX } from "lucide-react";
import { projects, projectSectors } from "@/data/projects";
import { ProjectCard } from "@/components/shared/project-card";
import { Button } from "@/components/ui/button";
import { SectionHeading, EmptyState } from "@/components/ui";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

const FILTERS = ["All", ...projectSectors] as const;

export function FeaturedProjects() {
  const [filter, setFilter] = React.useState<string>("All");
  const reduced = useReducedMotion();

  const visible = React.useMemo(() => {
    const pool = filter === "All" ? projects : projects.filter((p) => p.sector === filter);
    return pool.slice(0, 6);
  }, [filter]);

  return (
    <section id="projects" className="section-y bg-background">
      <div className="container-shell">
        <Reveal>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Selected work"
              title="Projects that could not be allowed to fail"
              lead="A portfolio of crossings, corridors, tunnels and terminals delivered under live operation, tight tolerance and immovable dates."
            />
            <Button asChild variant="outline" size="lg" className="shrink-0">
              <Link href="/projects">
                View all projects
                <ArrowUpRight
                  className="size-4.5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                  aria-hidden
                />
              </Link>
            </Button>
          </div>
        </Reveal>

        {/* --------------------------------------------------- filters */}
        <Reveal delay={0.06}>
          <div
            role="tablist"
            aria-label="Filter projects by sector"
            className="mt-12 flex flex-wrap gap-2"
          >
            {FILTERS.map((option) => {
              const active = filter === option;
              const count =
                option === "All"
                  ? projects.length
                  : projects.filter((p) => p.sector === option).length;

              return (
                <button
                  key={option}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setFilter(option)}
                  className={cn(
                    "group/f relative cursor-pointer rounded-full border px-5 py-2.5",
                    "font-heading text-[0.875rem] font-bold transition-all duration-300",
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
        </Reveal>

        {/* ----------------------------------------------------- grid */}
        <div className="mt-10 lg:mt-12">
          {visible.length === 0 ? (
            <EmptyState
              icon={<SearchX className="size-6" aria-hidden />}
              title="No projects in this sector yet"
              description="Our portfolio in this area is in pre-construction. Talk to us about what we are currently bidding."
              action={
                <Button asChild variant="primary" size="md" className="mt-2">
                  <Link href="/contact">Talk to our team</Link>
                </Button>
              }
            />
          ) : (
            <AnimatePresence mode="wait">
              <motion.ul
                key={filter}
                initial={reduced ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduced ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
                className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
              >
                {visible.map((project, i) => (
                  <motion.li
                    key={project.slug}
                    initial={reduced ? false : { opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: reduced ? 0 : i * 0.06,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <ProjectCard project={project} />
                  </motion.li>
                ))}
              </motion.ul>
            </AnimatePresence>
          )}
        </div>
      </div>
    </section>
  );
}
