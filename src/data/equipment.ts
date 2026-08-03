import type { Equipment } from "@/types";

export const equipment: Equipment[] = [
  {
    id: "tbm-atlas",
    name: "Earth Pressure Balance TBM",
    category: "Tunnelling",
    image: "/images/equipment/tbm.svg",
    description:
      "Closed-face machines for soft ground and mixed-face drives beneath dense urban environments, with active face pressure control and back-filling in a single pass.",
    specs: [
      { label: "Cutterhead diameter", value: "3.2 – 15.6 m" },
      { label: "Installed power", value: "5,200 kW" },
      { label: "Max face pressure", value: "6.0 bar" },
      { label: "Advance rate", value: "up to 24 m/day" },
    ],
    fleetCount: 9,
  },
  {
    id: "crawler-crane",
    name: "Heavy Lift Crawler Crane",
    category: "Lifting",
    image: "/images/equipment/crawler-crane.svg",
    description:
      "Lattice-boom crawlers configured for bridge segment erection, offshore module handling and heavy precast placement with superlift attachment.",
    specs: [
      { label: "Maximum capacity", value: "1,350 t" },
      { label: "Main boom", value: "126 m" },
      { label: "Luffing jib", value: "84 m" },
      { label: "Ground bearing", value: "18 t/m²" },
    ],
    fleetCount: 14,
  },
  {
    id: "jack-up-barge",
    name: "Self-Elevating Jack-Up Barge",
    category: "Marine",
    image: "/images/equipment/jack-up-barge.svg",
    description:
      "Self-elevating platforms that convert tide-dependent marine work into stable land-based operations, carrying piling rigs and heavy lift plant.",
    specs: [
      { label: "Deck area", value: "1,840 m²" },
      { label: "Operating depth", value: "up to 62 m" },
      { label: "Leg length", value: "84 m" },
      { label: "Deck load", value: "4,200 t" },
    ],
    fleetCount: 4,
  },
  {
    id: "form-traveller",
    name: "Balanced Cantilever Form Traveller",
    category: "Bridges",
    image: "/images/equipment/form-traveller.svg",
    description:
      "Purpose-engineered travellers for in-situ balanced cantilever bridge construction, with hydraulic advance and integrated geometry control.",
    specs: [
      { label: "Segment length", value: "up to 6.0 m" },
      { label: "Segment weight", value: "310 t" },
      { label: "Cycle time", value: "7 days" },
      { label: "Advance system", value: "Hydraulic rail" },
    ],
    fleetCount: 12,
  },
  {
    id: "cutter-dredger",
    name: "Cutter Suction Dredger",
    category: "Marine",
    image: "/images/equipment/dredger.svg",
    description:
      "Self-propelled dredgers for capital dredging, channel deepening and hydraulic fill placement in reclamation programmes.",
    specs: [
      { label: "Cutter power", value: "6,000 kW" },
      { label: "Dredging depth", value: "35 m" },
      { label: "Discharge diameter", value: "900 mm" },
      { label: "Production rate", value: "9,400 m³/hr" },
    ],
    fleetCount: 2,
  },
  {
    id: "launching-gantry",
    name: "Overhead Launching Gantry",
    category: "Bridges",
    image: "/images/equipment/launching-gantry.svg",
    description:
      "Span-by-span erection gantries that build viaducts entirely from deck level, eliminating ground access across sensitive or inaccessible terrain.",
    specs: [
      { label: "Span capability", value: "up to 62 m" },
      { label: "Lifting capacity", value: "240 t" },
      { label: "Gantry length", value: "148 m" },
      { label: "Erection cycle", value: "4 days/span" },
    ],
    fleetCount: 6,
  },
  {
    id: "spmt",
    name: "Self-Propelled Modular Transporter",
    category: "Heavy Transport",
    image: "/images/equipment/spmt.svg",
    description:
      "Computer-controlled modular transporters for bridge deck exchange, module relocation and heavy structural movement within possession windows.",
    specs: [
      { label: "Axle lines", value: "up to 96" },
      { label: "Payload", value: "6,800 t" },
      { label: "Steering", value: "360° independent" },
      { label: "Stroke", value: "700 mm" },
    ],
    fleetCount: 8,
  },
  {
    id: "diaphragm-rig",
    name: "Diaphragm Wall Grab & Cutter",
    category: "Foundations",
    image: "/images/equipment/diaphragm-rig.svg",
    description:
      "Hydraulic grabs and hydromills for diaphragm wall construction, deep shaft retention and cut-off walls in variable and rocky ground.",
    specs: [
      { label: "Panel depth", value: "up to 92 m" },
      { label: "Panel thickness", value: "0.6 – 1.8 m" },
      { label: "Verticality", value: "< 0.3%" },
      { label: "Rock capability", value: "180 MPa UCS" },
    ],
    fleetCount: 11,
  },
];
