"use client";

import * as React from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Briefcase, ChevronDown, MapPin, SearchX } from "lucide-react";
import { jobs, departments, jobLocations } from "@/data/careers";
import { Badge, EmptyState } from "@/components/ui";
import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/form";
import { formatDate, cn } from "@/lib/utils";

export function JobsBoard() {
  const [department, setDepartment] = React.useState("All");
  const [location, setLocation] = React.useState("All");
  const [expanded, setExpanded] = React.useState<string | null>(jobs[0]?.id ?? null);
  const reduced = useReducedMotion();

  const visible = React.useMemo(
    () =>
      jobs.filter(
        (j) =>
          (department === "All" || j.department === department) &&
          (location === "All" || j.location === location),
      ),
    [department, location],
  );

  const reset = () => {
    setDepartment("All");
    setLocation("All");
  };

  return (
    <section id="positions" className="section-y bg-background">
      <div className="container-shell">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="eyebrow text-primary">
              <span aria-hidden className="h-px w-8 bg-primary/35" />
              Open positions
            </span>
            <h2 className="mt-5 text-section max-w-[16ch]">
              {jobs.length} roles open right now
            </h2>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0">
            <div className="sm:w-56">
              <label htmlFor="filter-department" className="sr-only">
                Filter by department
              </label>
              <Select
                id="filter-department"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
              >
                <option value="All">All departments</option>
                {departments.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </Select>
            </div>

            <div className="sm:w-56">
              <label htmlFor="filter-location" className="sr-only">
                Filter by location
              </label>
              <Select
                id="filter-location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              >
                <option value="All">All locations</option>
                {jobLocations.map((l) => (
                  <option key={l} value={l}>
                    {l}
                  </option>
                ))}
              </Select>
            </div>
          </div>
        </div>

        <p aria-live="polite" className="mt-6 text-[0.875rem] font-medium text-muted">
          Showing{" "}
          <span className="font-heading font-bold text-heading tabular-nums">
            {visible.length}
          </span>{" "}
          of {jobs.length} positions
        </p>

        <div className="mt-6">
          {visible.length === 0 ? (
            <EmptyState
              icon={<SearchX className="size-6" aria-hidden />}
              title="No positions match those filters"
              description="We recruit continuously across all disciplines. Send us a speculative application and we will keep it on file."
              action={
                <div className="mt-2 flex flex-wrap justify-center gap-3">
                  <Button variant="primary" size="md" onClick={reset}>
                    Clear filters
                  </Button>
                  <Button asChild variant="outline" size="md">
                    <a href="#apply">Speculative application</a>
                  </Button>
                </div>
              }
            />
          ) : (
            <ul className="flex flex-col gap-3">
              {visible.map((job) => {
                const open = expanded === job.id;

                return (
                  <li
                    key={job.id}
                    id={job.id}
                    className={cn(
                      "scroll-mt-32 overflow-hidden rounded-[var(--radius-card)] border bg-surface transition-all duration-400",
                      open
                        ? "border-primary/30 shadow-[var(--shadow-raise)]"
                        : "border-line hover:border-primary/25",
                    )}
                  >
                    <h3>
                      <button
                        type="button"
                        onClick={() => setExpanded(open ? null : job.id)}
                        aria-expanded={open}
                        aria-controls={`${job.id}-panel`}
                        className="flex w-full cursor-pointer items-start gap-5 p-6 text-left lg:p-7"
                      >
                        <span className="min-w-0 flex-1">
                          <span className="flex flex-wrap items-center gap-2.5">
                            <span className="font-heading text-[1.125rem] font-bold text-heading">
                              {job.title}
                            </span>
                            <Badge tone="primary">{job.type}</Badge>
                            <Badge tone="neutral">{job.level}</Badge>
                          </span>
                          <span className="mt-2.5 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-[0.875rem] text-muted">
                            <span className="flex items-center gap-1.5">
                              <Briefcase className="size-3.5" aria-hidden />
                              {job.department}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <MapPin className="size-3.5" aria-hidden />
                              {job.location}
                            </span>
                            <span>Posted {formatDate(job.postedAt)}</span>
                          </span>
                        </span>

                        <span
                          aria-hidden
                          className={cn(
                            "flex size-11 shrink-0 items-center justify-center rounded-full border transition-all duration-400",
                            open
                              ? "rotate-180 border-primary bg-primary text-white"
                              : "border-line text-muted",
                          )}
                        >
                          <ChevronDown className="size-4.5" />
                        </span>
                      </button>
                    </h3>

                    <AnimatePresence initial={false}>
                      {open ? (
                        <motion.div
                          id={`${job.id}-panel`}
                          initial={reduced ? false : { height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={reduced ? undefined : { height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="border-t border-line px-6 pt-6 pb-7 lg:px-7">
                            <p className="max-w-[68ch] text-body">{job.summary}</p>

                            <div className="mt-7 grid gap-8 sm:grid-cols-2">
                              <div>
                                <h4 className="font-heading text-[0.6875rem] font-bold tracking-[0.16em] text-muted uppercase">
                                  What you will do
                                </h4>
                                <ul className="mt-4 flex flex-col gap-2.5">
                                  {job.responsibilities.map((item) => (
                                    <li
                                      key={item}
                                      className="flex items-start gap-2.5 text-[0.9375rem] leading-relaxed text-body"
                                    >
                                      <span
                                        aria-hidden
                                        className="mt-2 size-1.5 shrink-0 rounded-full bg-accent"
                                      />
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <div>
                                <h4 className="font-heading text-[0.6875rem] font-bold tracking-[0.16em] text-muted uppercase">
                                  What we are looking for
                                </h4>
                                <ul className="mt-4 flex flex-col gap-2.5">
                                  {job.requirements.map((item) => (
                                    <li
                                      key={item}
                                      className="flex items-start gap-2.5 text-[0.9375rem] leading-relaxed text-body"
                                    >
                                      <span
                                        aria-hidden
                                        className="mt-2 size-1.5 shrink-0 rounded-full bg-primary/40"
                                      />
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>

                            <Button asChild variant="primary" size="md" className="mt-8">
                              <a href="#apply">Apply for this role</a>
                            </Button>
                          </div>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
