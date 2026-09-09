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
    client: string;
    status: string;
    coordinates: [number, number];
    featured?: boolean;
  }[],
): MapPin[] {
  return items.map((p) => ({
    id: p.slug,
    title: p.title,
    subtitle: p.sector,
    coordinates: p.coordinates,
    href: `/projects/${p.slug}`,
    meta: `${p.client} — ${p.status}`,
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
    isHeadquarters?: boolean;
  }[],
): MapPin[] {
  return items.map((o) => ({
    id: o.id,
    title: `${o.city}, ${o.country}`,
    subtitle: o.isHeadquarters ? "Head office" : `${o.region} — fabrication workshop`,
    coordinates: o.coordinates,
    meta: o.isHeadquarters
      ? "Enquiries, design and project management"
      : "Fabrication and workshop operations",
    accent: o.isHeadquarters,
  }));
}
