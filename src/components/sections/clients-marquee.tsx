import Image from "next/image";
import { clients } from "@/data/company";

export function ClientsMarquee() {
  // Rendered twice so the -50% keyframe loops seamlessly.
  const track = [...clients, ...clients];

  return (
    <section
      id="clients"
      aria-label="Selected clients"
      className="section-y-sm border-y border-line bg-surface"
    >
      <div className="container-shell">
        <p className="text-center font-heading text-[0.75rem] font-bold tracking-[0.16em] text-muted uppercase">
          Trusted by manufacturers and developers across Bangladesh
        </p>
      </div>

      <div
        className="relative mt-10 overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <ul
          className="animate-marquee flex w-max items-center gap-10 lg:gap-14"
          style={{ ["--marquee-duration" as string]: "150s" }}
        >
          {track.map((logo, i) => (
            <li
              key={`${logo.name}-${i}`}
              className="flex h-16 w-36 shrink-0 items-center justify-center"
              aria-hidden={i >= clients.length}
            >
              <Image
                src={logo.logo}
                alt={i < clients.length ? logo.name : ""}
                width={220}
                height={130}
                className="h-full max-h-14 w-auto max-w-full object-contain opacity-90 transition-opacity duration-500 hover:opacity-100"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
