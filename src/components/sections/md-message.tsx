import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Quote } from "lucide-react";
import { leadership } from "@/data/company";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";

export function MdMessage() {
  const md = leadership[0];

  return (
    <section className="section-y bg-secondary text-white">
      <div className="container-shell">
        <div className="grid gap-14 lg:grid-cols-[0.6fr_1.4fr] lg:items-center lg:gap-20">
          <Reveal>
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="relative size-40 shrink-0 overflow-hidden rounded-full border-4 border-white/10 shadow-[var(--shadow-deep)] sm:size-48">
                <Image
                  src={md.image}
                  alt={`Portrait of ${md.name}`}
                  fill
                  sizes="(max-width: 640px) 160px, 192px"
                  className="object-cover"
                />
              </div>
              <p className="mt-6 font-heading text-[1rem] font-bold text-white">
                {md.name}
              </p>
              <p className="mt-1 text-[0.8125rem] text-white/65">{md.role}</p>
            </div>
          </Reveal>

          <Reveal direction="left">
            <span className="eyebrow text-accent">
              <span aria-hidden className="h-px w-8 bg-accent/50" />
              Managing Director&rsquo;s message
            </span>

            <Quote
              aria-hidden
              className="mt-6 size-9 text-accent/35"
              strokeWidth={1.5}
            />

            {md.welcome ? (
              <p className="mt-5 max-w-[58ch] text-[1.1875rem] leading-relaxed text-white/85 italic">
                {md.welcome}
              </p>
            ) : null}

            <Button asChild variant="light" size="md" className="mt-8">
              <Link href="/about#leadership">
                Read the full message
                <ArrowUpRight
                  className="size-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                  aria-hidden
                />
              </Link>
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
