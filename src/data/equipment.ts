import type { Equipment } from "@/types";

export const equipment: Equipment[] = [
  {
    id: "cnc-plasma-cutting",
    name: "CNC Plasma & Profile Cutting",
    category: "Cutting",
    image: "/images/equipment/cnc-cutting.svg",
    description:
      "Computer-controlled cutting of primary and secondary steel members straight from the approved fabrication drawing, holding dimensional tolerance before a piece ever reaches the welding bay.",
    specs: [
      { label: "Process", value: "CNC plasma / profile" },
      { label: "Input", value: "Approved shop drawings" },
      { label: "Output", value: "Frame & bracket members" },
      { label: "Tolerance check", value: "Pre-weld inspection" },
    ],
    fleetCount: 1,
  },
  {
    id: "roll-forming",
    name: "Purlin & Cladding Roll-Forming",
    category: "Roll-forming",
    image: "/images/equipment/roll-forming.svg",
    description:
      "Cold roll-formed Z and C purlins, and profiled roof and wall sheeting, produced to the run lengths a project needs rather than cut down from stock sizes.",
    specs: [
      { label: "Products", value: "Purlins, roof & wall sheet" },
      { label: "Profile", value: "Z / C section, trapezoidal" },
      { label: "Coating", value: "Colour-coated / galvanised" },
      { label: "Run length", value: "Made to project spec" },
    ],
    fleetCount: 1,
  },
  {
    id: "welding-bay",
    name: "Structural Welding Bays",
    category: "Fabrication",
    image: "/images/equipment/welding.svg",
    description:
      "Primary frame members — column, rafter and bracket assemblies — welded and jig-checked in the workshop before they are shot-blasted and painted.",
    specs: [
      { label: "Members", value: "Columns, rafters, brackets" },
      { label: "Process", value: "MIG / arc welding" },
      { label: "Check", value: "Jig-verified geometry" },
      { label: "Next step", value: "Shot-blast & paint" },
    ],
    fleetCount: 1,
  },
  {
    id: "shot-blast-paint",
    name: "Shot-Blasting & Paint Line",
    category: "Surface Treatment",
    image: "/images/equipment/paint-line.svg",
    description:
      "Fabricated members are shot-blasted to remove mill scale and coated before dispatch, giving the erected structure a consistent, corrosion-resistant finish.",
    specs: [
      { label: "Prep", value: "Shot-blast to bare metal" },
      { label: "Coating", value: "Primer + finish coat" },
      { label: "Purpose", value: "Corrosion resistance" },
      { label: "Stage", value: "Pre-dispatch" },
    ],
    fleetCount: 1,
  },
  {
    id: "erection-crew",
    name: "Site Erection Crew & Lifting Plant",
    category: "Erection",
    image: "/images/equipment/erection-crew.svg",
    description:
      "Our own erection crews bolt the fabricated frame together on site, supported by mobile cranes and lifting plant sized to the span and bay of each project.",
    specs: [
      { label: "Connections", value: "Bolted, site-assembled" },
      { label: "Lifting", value: "Mobile crane, sized per bay" },
      { label: "Crew", value: "In-house erection team" },
      { label: "Handover", value: "Alignment & inspection" },
    ],
    fleetCount: 1,
  },
  {
    id: "transport-fleet",
    name: "Delivery & Site Logistics",
    category: "Transport",
    image: "/images/equipment/transport.svg",
    description:
      "Fabricated frame sections, purlins and cladding are transported directly from the workshop to site and sequenced for erection, keeping the erection crew supplied without on-site storage congestion.",
    specs: [
      { label: "Load", value: "Frame, purlin, cladding" },
      { label: "Sequencing", value: "Matched to erection order" },
      { label: "Coverage", value: "Sites across Bangladesh" },
      { label: "Coordination", value: "With site engineer" },
    ],
    fleetCount: 1,
  },
];
