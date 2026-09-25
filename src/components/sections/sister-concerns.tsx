import Image from "next/image";
import { site } from "@/lib/site";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";

export function SisterConcerns() {
  return (
    <section className="section-y-sm bg-surface">
      <div className="container-shell">
        <Reveal>
          <p className="text-center font-heading text-[0.75rem] font-bold tracking-[0.16em] text-muted uppercase">
            Sister concerns
          </p>
        </Reveal>
        <RevealGroup
          as="ul"
          stagger={0.06}
          className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {site.sisterConcerns.map((concern) => (
            <RevealItem
              key={concern.name}
              as="li"
              className="flex flex-col items-center gap-4 rounded-[var(--radius-card)] border border-line bg-background p-6 text-center"
            >
              <span className="relative h-12 w-full">
                <Image
                  src={concern.logo}
                  alt={concern.name}
                  fill
                  sizes="200px"
                  className="object-contain"
                />
              </span>
              <span>
                <p className="font-heading text-[1.0625rem] font-bold text-heading">
                  {concern.name}
                </p>
                <p className="mt-1.5 text-[0.875rem] text-muted">
                  {concern.description}
                </p>
              </span>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
