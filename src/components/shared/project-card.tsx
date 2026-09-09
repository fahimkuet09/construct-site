import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, MapPin } from "lucide-react";
import type { Project } from "@/types";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui";

export function ProjectCard({
  project,
  priority = false,
  size = "default",
  className,
}: {
  project: Project;
  priority?: boolean;
  size?: "default" | "large";
  className?: string;
}) {
  const large = size === "large";

  return (
    <article className={cn("group h-full", className)}>
      <Link
        href={`/projects/${project.slug}`}
        className="flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border border-line bg-surface transition-all duration-500 ease-[var(--ease-out-quint)] hover:-translate-y-1.5 hover:border-primary/25 hover:shadow-[var(--shadow-lift)]"
      >
        <div
          className={cn(
            "relative overflow-hidden bg-primary-950",
            large ? "aspect-[16/10]" : "aspect-[4/3]",
          )}
        >
          <Image
            src={project.thumbnail}
            alt={`${project.title} — ${project.location}, ${project.country}`}
            fill
            priority={priority}
            sizes={
              large
                ? "(max-width: 768px) 100vw, (max-width: 1280px) 60vw, 780px"
                : "(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 460px"
            }
            className="object-cover transition-transform duration-[900ms] ease-[var(--ease-out-quint)] group-hover:scale-[1.06]"
          />
          <span
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-primary-950/80 via-primary-950/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95"
          />

          <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-3 p-5">
            <Badge tone="dark">{project.sector}</Badge>
            <Badge
              tone="dark"
              className={cn(
                project.status === "Completed" &&
                  "border-success-400/45 text-success-400",
                project.status === "Ongoing" && "border-accent/55 text-accent",
              )}
            >
              {project.status}
            </Badge>
          </div>

          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5">
            <span className="flex items-center gap-1.5 text-[0.8125rem] font-semibold text-white/85">
              <MapPin className="size-3.5 shrink-0 text-accent" aria-hidden />
              {project.location}, {project.country}
            </span>
            <span
              aria-hidden
              className="flex size-11 shrink-0 translate-y-2 items-center justify-center rounded-full bg-accent text-primary-950 opacity-0 transition-all duration-500 ease-[var(--ease-out-quint)] group-hover:translate-y-0 group-hover:opacity-100"
            >
              <ArrowUpRight className="size-5" strokeWidth={2.5} />
            </span>
          </div>
        </div>

        <div className="flex flex-1 flex-col p-6 lg:p-7">
          <h3
            className={cn(
              "font-bold tracking-[-0.02em] text-heading transition-colors duration-300 group-hover:text-primary",
              large ? "text-[1.5rem] lg:text-[1.75rem]" : "text-[1.25rem]",
            )}
          >
            {project.title}
          </h3>
          <p
            className={cn(
              "mt-3 flex-1 leading-relaxed text-body",
              large ? "text-[1rem]" : "text-[0.9375rem]",
            )}
          >
            {project.summary}
          </p>

          <dl className="mt-6 grid grid-cols-1 gap-4 border-t border-line pt-5">
            <div>
              <dt className="font-heading text-[0.6875rem] font-bold tracking-[0.1em] text-muted uppercase">
                Client
              </dt>
              <dd className="mt-1 font-heading text-[0.9375rem] font-extrabold text-heading">
                {project.client}
              </dd>
            </div>
          </dl>
        </div>
      </Link>
    </article>
  );
}
