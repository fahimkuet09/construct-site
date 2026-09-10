"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { SearchX, SlidersHorizontal } from "lucide-react";
import { projects, projectSectors } from "@/data/projects";
import type { ProjectStatus } from "@/types";
import { ProjectCard } from "@/components/shared/project-card";
import { Button } from "@/components/ui/button";
import { EmptyState } from "@/components/ui";
import { cn } from "@/lib/utils";

const STATUSES: (ProjectStatus | "All")[] = ["All", "Completed", "Ongoing"];

export function ProjectsExplorer() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const reduced = useReducedMotion();

  // The URL is the single source of truth for the sector filter, so a
  // mega-menu deep link, the back button and the chips below all agree
  // without any state to keep in sync.
  const sector = searchParams.get("sector") ?? "All";
  const [status, setStatus] = React.useState<ProjectStatus | "All">("All");

  const selectSector = (value: string) => {
    const query =
      value === "All" ? "/projects" : `/projects?sector=${encodeURIComponent(value)}`;
    router.replace(query, { scroll: false });
  };

  const visible = React.useMemo(
    () =>
      projects.filter(
        (p) =>
          (sector === "All" || p.sector === sector) &&
          (status === "All" || p.status === status),
      ),
    [sector, status],
  );

  const reset = () => {
    setStatus("All");
    selectSector("All");
  };

  return (
    <section className="section-y bg-background">
      <div className="container-shell">
        <h2 className="sr-only">Project portfolio</h2>

        {/* ---------------------------------------------- filter bar */}
        <div className="flex flex-col gap-6 rounded-[var(--radius-card)] border border-line bg-surface p-6 lg:p-8">
          <div className="flex items-center gap-2.5">
            <SlidersHorizontal
              className="size-4.5 text-primary"
              strokeWidth={2}
              aria-hidden
            />
            <p className="font-heading text-[0.6875rem] font-bold tracking-[0.16em] text-muted uppercase">
              Filter the portfolio
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <fieldset>
              <legend className="mb-3 font-heading text-[0.8125rem] font-bold text-heading">
                Sector
              </legend>
              <div className="flex flex-wrap gap-2">
                {["All", ...projectSectors].map((option) => {
                  const active = sector === option;
                  const count =
                    option === "All"
                      ? projects.length
                      : projects.filter((p) => p.sector === option).length;
                  return (
                    <button
                      key={option}
                      type="button"
                      aria-pressed={active}
                      onClick={() => selectSector(option)}
                      className={cn(
                        "cursor-pointer rounded-full border px-4 py-2 font-heading text-[0.8125rem] font-bold transition-all duration-300",
                        active
                          ? "border-primary bg-primary text-white"
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
            </fieldset>

            <fieldset>
              <legend className="mb-3 font-heading text-[0.8125rem] font-bold text-heading">
                Status
              </legend>
              <div className="flex flex-wrap gap-2">
                {STATUSES.map((option) => {
                  const active = status === option;
                  return (
                    <button
                      key={option}
                      type="button"
                      aria-pressed={active}
                      onClick={() => setStatus(option)}
                      className={cn(
                        "cursor-pointer rounded-full border px-4 py-2 font-heading text-[0.8125rem] font-bold transition-all duration-300",
                        active
                          ? "border-accent bg-accent text-white"
                          : "border-line bg-surface text-body hover:border-accent/50 hover:text-accent-700",
                      )}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
            </fieldset>
          </div>

          <div className="flex items-center justify-between gap-4 border-t border-line pt-5">
            <p
              aria-live="polite"
              className="text-[0.875rem] font-medium text-muted"
            >
              Showing{" "}
              <span className="font-heading font-bold text-heading tabular-nums">
                {visible.length}
              </span>{" "}
              of {projects.length} projects
            </p>
            {sector !== "All" || status !== "All" ? (
              <button
                type="button"
                onClick={reset}
                className="cursor-pointer font-heading text-[0.8125rem] font-bold text-primary transition-colors hover:text-primary-700"
              >
                Clear filters
              </button>
            ) : null}
          </div>
        </div>

        {/* --------------------------------------------------- grid */}
        <div className="mt-10 lg:mt-12">
          {visible.length === 0 ? (
            <EmptyState
              icon={<SearchX className="size-6" aria-hidden />}
              title="No projects match those filters"
              description="Try widening the category or status — or talk to us about a project like this that we're currently quoting."
              action={
                <div className="mt-2 flex flex-wrap justify-center gap-3">
                  <Button variant="primary" size="md" onClick={reset}>
                    Clear filters
                  </Button>
                  <Button asChild variant="outline" size="md">
                    <Link href="/contact">Talk to our team</Link>
                  </Button>
                </div>
              }
            />
          ) : (
            <AnimatePresence mode="wait">
              <motion.ul
                key={`${sector}-${status}`}
                initial={reduced ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduced ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
              >
                {visible.map((project, i) => (
                  <motion.li
                    key={project.slug}
                    initial={reduced ? false : { opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: reduced ? 0 : Math.min(i, 8) * 0.05,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <ProjectCard project={project} priority={i < 3} />
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
