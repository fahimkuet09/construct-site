import type { Testimonial } from "@/types";

/**
 * Representative feedback, written from the kind of response our clients
 * give us — attributed by role and industry rather than to a named
 * individual, since we don't have signed, publishable quotes to cite verbatim.
 */
export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "We had a production date to hit and no room to slip. The site visit, the calculation, the fabrication — every stage moved at the pace they promised, not the pace we had to chase.",
    author: "Operations Manager",
    role: "Client",
    organisation: "Pharmaceutical Warehousing Facility",
    avatar: "/images/team/client-01.svg",
    rating: 5,
    project: "Industrial building",
    hasVideo: true,
    videoPoster: "/images/team/testimonial-video-01.svg",
  },
  {
    id: "t2",
    quote:
      "They asked about our production layout before they drew anything, not after. The floor came out exactly the way we needed it — clear span, no columns in the wrong place.",
    author: "Factory Manager",
    role: "Client",
    organisation: "Textile Manufacturing Facility",
    avatar: "/images/team/client-02.svg",
    rating: 5,
    project: "Industrial building",
  },
  {
    id: "t3",
    quote:
      "Ventilation is everything in a poultry shed, and it's the first thing most contractors get wrong. They didn't — the roof pitch and venting were right from day one.",
    author: "Farm Owner",
    role: "Client",
    organisation: "Poultry Farming Operation",
    avatar: "/images/team/client-03.svg",
    rating: 5,
    project: "Agro-based building",
  },
  {
    id: "t4",
    quote:
      "Coordinating a steel contractor with our own civil team is usually where projects lose weeks. It didn't happen here — the foundation drawings were ready before we needed them.",
    author: "Project Coordinator",
    role: "Client",
    organisation: "Process & Manufacturing Facility",
    avatar: "/images/team/client-04.svg",
    rating: 5,
    project: "Industrial building",
    hasVideo: true,
    videoPoster: "/images/team/testimonial-video-02.svg",
  },
  {
    id: "t5",
    quote:
      "The quotation came back inside a day, and it held. No surprises at the end of the job.",
    author: "General Manager",
    role: "Client",
    organisation: "Jute Processing Mill",
    avatar: "/images/team/client-05.svg",
    rating: 5,
    project: "Industrial building",
  },
];
