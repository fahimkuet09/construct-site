import { formatCrore } from "@/lib/utils";

/**
 * Leaflet touches `window` at module scope, so anything that needs pin data
 * on the server must live here rather than alongside the map component.
 */
export interface MapPin {
  id: string;
  title: string;
  subtitle: string;
  coordinates: [number, number];
  href?: string;
  meta?: string;
  accent?: boolean;
}

export function pinsFromProjects(
  items: {
    slug: string;
    title: string;
    sector: string;
    coordinates: [number, number];
    country: string;
    contractValueCrore: number;
    featured?: boolean;
  }[],
): MapPin[] {
  return items.map((p) => ({
    id: p.slug,
    title: p.title,
    subtitle: p.sector,
    coordinates: p.coordinates,
    href: `/projects/${p.slug}`,
    meta: `${p.country} — ${formatCrore(p.contractValueCrore)} contract value`,
    accent: p.featured,
  }));
}

export function pinsFromOffices(
  items: {
    id: string;
    city: string;
    country: string;
    region: string;
    coordinates: [number, number];
    projectCount: number;
    isHeadquarters?: boolean;
  }[],
): MapPin[] {
  return items.map((o) => ({
    id: o.id,
    title: `${o.city}, ${o.country}`,
    subtitle: o.isHeadquarters ? "Head office" : `${o.region} Division`,
    coordinates: o.coordinates,
    meta: `${o.projectCount} projects delivered from this office`,
    accent: o.isHeadquarters,
  }));
}
