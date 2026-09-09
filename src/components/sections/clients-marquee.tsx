import Image from "next/image";
import { clients } from "@/data/company";

const logos = clients.map((name, i) => ({
  name,
  src: `/images/logos/clients/client-${String(i + 1).padStart(2, "0")}.svg`,
}));

export function ClientsMarquee() {
  // Rendered twice so the -50% keyframe loops seamlessly.
  const track = [...logos, ...logos];

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
          className="animate-marquee flex w-max items-center gap-14 lg:gap-20"
          style={{ ["--marquee-duration" as string]: "54s" }}
        >
          {track.map((logo, i) => (
            <li
              key={`${logo.name}-${i}`}
              className="shrink-0 text-muted/70 transition-colors duration-500 hover:text-primary"
              aria-hidden={i >= logos.length}
            >
              <Image
                src={logo.src}
                alt={i < logos.length ? logo.name : ""}
                width={200}
                height={57}
                className="h-13 w-auto opacity-75 transition-opacity duration-500 hover:opacity-100"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
