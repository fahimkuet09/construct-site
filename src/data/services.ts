import {
  Building2,
  Clock,
  Compass,
  Factory,
  Home,
  Layers,
  Leaf,
  ShieldCheck,
  Sprout,
  Timer,
  TrendingUp,
} from "lucide-react";
import type { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "industrial-buildings",
    title: "Industrial Buildings",
    shortTitle: "Industrial",
    icon: Factory,
    tagline: "Clear-span steel structures built for production, not just shelter",
    summary:
      "Factory sheds, warehouses, godowns and process buildings engineered as pre-engineered steel structures — fast to erect, easy to expand, built to run.",
    description: [
      "Industrial clients don't buy a building, they buy production days. A pre-engineered steel (PEB) structure goes from foundation to weathertight shell in a fraction of the time an equivalent RCC building takes, which is what lets a tenant's commissioning date hold.",
      "We design and fabricate the primary portal frames, secondary members, roof and wall cladding as one coordinated system rather than assembling components from different suppliers, so tolerances, bolt patterns and load paths are resolved before anything reaches site.",
    ],
    image: "/images/Portfolio/factory-shed-exterior-completed.jpg",
    capabilities: [
      {
        title: "Factory sheds & process buildings",
        description:
          "Textile, garments, pharmaceutical, oil and ceramic production floors with clear internal spans free of intermediate columns.",
      },
      {
        title: "Warehousing & godowns",
        description:
          "High-bay storage and distribution buildings sized for racking layout, dock access and forklift turning circles.",
      },
      {
        title: "Steel re-rolling & heavy process sheds",
        description:
          "Crane-gantry buildings and re-rolling mill structures designed for overhead crane loading and vibration.",
      },
      {
        title: "Machine towers",
        description:
          "Elevated steel support towers and platforms for process and production equipment.",
      },
      {
        title: "Expansion & mezzanine additions",
        description:
          "Bolted steel frames that let an existing facility add floor area or bay length without disrupting production.",
      },
    ],
    benefits: [
      {
        title: "Faster to occupy",
        description:
          "Off-site fabrication and bolted site erection compress the construction programme well below a comparable RCC shed.",
        icon: Clock,
      },
      {
        title: "Long clear spans",
        description:
          "Portal-frame steel carries wide bays without intermediate columns, keeping the floor plate free for production layout.",
        icon: Compass,
      },
      {
        title: "Built to expand",
        description:
          "Bolted connections and modular bay spacing mean a shed can be lengthened or heightened as the business grows.",
        icon: TrendingUp,
      },
    ],
    deliverables: [
      "Site measurement and load assessment",
      "Structural design & calculation per BNBC",
      "Primary frame, purlin and cladding fabrication",
      "Foundation and anchor bolt coordination",
      "Site erection and quality inspection",
      "Final inspection and handover",
    ],
    stats: [
      { label: "Engineering turnaround", value: "24 hrs" },
      { label: "Delivery process", value: "4 stages" },
      { label: "Structure type", value: "Bolted steel" },
    ],
    faqs: [
      {
        question: "How much faster is a steel shed than an RCC building?",
        answer:
          "Because the frame, purlins and cladding are fabricated off-site while foundations are being cast, erection on site is largely a bolting operation rather than a wet-trade one — which is the main reason steel sheds reach weathertight condition well ahead of an equivalent RCC structure.",
      },
      {
        question: "Can a steel building be extended later?",
        answer:
          "Yes — bolted portal frames on a repeating bay grid are designed to be lengthened by adding further bays, and in many cases heightened, without demolishing what is already standing.",
      },
      {
        question: "Do you handle both design and construction?",
        answer:
          "Yes. Measurement, structural calculation, fabrication and site erection are delivered under one contract, so there is a single point of accountability from concept to handover.",
      },
    ],
  },
  {
    slug: "commercial-buildings",
    title: "Commercial Buildings",
    shortTitle: "Commercial",
    icon: Building2,
    tagline: "Steel-framed retail, office and fuel-service structures",
    summary:
      "Multi-storied steel buildings, retail and market structures, super shops and filling station canopies — framed for long spans and a fast fit-out.",
    description: [
      "Commercial developments need a shell that opens to trade quickly and adapts as tenants change. Structural steel framing gives wide, column-light floor plates for retail and market layouts, and a multi-storey frame that erects in a fraction of the time of cast-in-place concrete.",
      "We coordinate the structural frame with the envelope and services from the outset, so the building is ready for fit-out contractors the day the shell is handed over.",
    ],
    image: "/images/Portfolio/commercial-building-dusk.jpg",
    capabilities: [
      {
        title: "Multi-storied steel buildings",
        description:
          "Composite steel-frame structures for office and mixed-use developments, engineered for future floor loading changes.",
      },
      {
        title: "Retail & market buildings",
        description:
          "Column-light retail floors and super shop structures designed around merchandising and circulation layouts.",
      },
      {
        title: "Filling station canopies",
        description:
          "Wide-span cantilevered and portal canopy structures for fuel and service stations.",
      },
      {
        title: "Office & showroom shells",
        description:
          "Steel-framed office and showroom shells ready for glazing, partitioning and MEP fit-out on handover.",
      },
    ],
    benefits: [
      {
        title: "Opens to trade sooner",
        description:
          "A steel shell reaches fit-out-ready condition far faster than an equivalent concrete frame, shortening time to first revenue.",
        icon: Clock,
      },
      {
        title: "Flexible floor plates",
        description:
          "Wide column spacing keeps retail and office layouts adaptable as tenants and merchandising plans change.",
        icon: Layers,
      },
      {
        title: "Predictable quality",
        description:
          "Factory-fabricated members arrive to fixed tolerances, reducing the on-site rework that concrete formwork is prone to.",
        icon: ShieldCheck,
      },
    ],
    deliverables: [
      "Site measurement and structural survey",
      "Structural design & calculation per BNBC",
      "Steel frame and cladding fabrication",
      "Foundation coordination with civil contractor",
      "Site erection and quality inspection",
      "Final inspection and handover",
    ],
    stats: [
      { label: "Engineering turnaround", value: "24 hrs" },
      { label: "Delivery process", value: "4 stages" },
      { label: "Structure type", value: "Bolted steel" },
    ],
    faqs: [
      {
        question: "Can steel framing support a multi-storey building?",
        answer:
          "Yes — structural steel is a standard framing choice for multi-storey commercial buildings worldwide, typically combined with composite floor decking. We engineer the frame to the loading and code requirements of the specific project.",
      },
      {
        question: "Do you work alongside our own civil or fit-out contractor?",
        answer:
          "Yes. We coordinate foundation interfaces with an existing civil contractor and hand the completed frame and envelope over ready for a separate fit-out team where that suits the client's programme.",
      },
      {
        question: "What is included in the quoted price?",
        answer:
          "Structural design, fabrication, delivery and site erection of the steel frame and cladding package, following the measurement and calculation stages of our standard process.",
      },
    ],
  },
  {
    slug: "residential-buildings",
    title: "Residential & Other Structures",
    shortTitle: "Residential",
    icon: Home,
    tagline: "Duplex homes, resorts and specialist steel structures",
    summary:
      "Duplex and triplex residences, resort buildings, foot-over bridges, emergency steel stairs and lift cores — engineered steel wherever an RCC solution isn't the right fit.",
    description: [
      "Steel framing suits residential and specialist structures where earthquake resistance, speed of construction or long-term resale flexibility matter — a duplex or resort building erected in weeks rather than months, on a frame that performs predictably under seismic loading.",
      "This category also covers the smaller specialist structures every developer eventually needs: foot-over bridges, external emergency stairs and steel lift cores added to an existing building.",
    ],
    image: "/images/Portfolio/institutional-building-exterior.jpg",
    capabilities: [
      {
        title: "Duplex & triplex residences",
        description:
          "Steel-framed homes designed for a faster build programme and strong earthquake performance relative to unreinforced masonry.",
      },
      {
        title: "Resort & low-rise hospitality structures",
        description:
          "Steel frames for resort villas and low-rise hospitality buildings, suited to sites with tight construction windows.",
      },
      {
        title: "Foot-over bridges",
        description:
          "Pedestrian steel bridge structures for factory campuses, institutions and public crossings.",
      },
      {
        title: "Emergency stairs & steel lift cores",
        description:
          "Bolted external fire-escape stairs and standalone steel lift shafts added to existing buildings without major structural disruption.",
      },
    ],
    benefits: [
      {
        title: "Earthquake resistance",
        description:
          "Steel's ductility gives it well-documented seismic performance advantages over unreinforced masonry construction.",
        icon: ShieldCheck,
      },
      {
        title: "Shorter build time",
        description:
          "A bolted steel frame reaches lock-up stage in weeks, shortening the return on a residential or hospitality investment.",
        icon: Timer,
      },
      {
        title: "Add-on friendly",
        description:
          "Stairs, lift cores and small bridge structures can be fitted to an existing building with minimal disruption to occupants.",
        icon: Compass,
      },
    ],
    deliverables: [
      "Site measurement and structural assessment",
      "Structural design & calculation per BNBC",
      "Fabrication of frame, stair and cladding elements",
      "Foundation and tie-in coordination",
      "Site erection and quality inspection",
      "Final inspection and handover",
    ],
    stats: [
      { label: "Engineering turnaround", value: "24 hrs" },
      { label: "Delivery process", value: "4 stages" },
      { label: "Structure type", value: "Bolted steel" },
    ],
    faqs: [
      {
        question: "Is a steel-framed house as durable as an RCC one?",
        answer:
          "A properly engineered and maintained steel frame has a long service life and, unlike RCC, does not depend on rebar corrosion protection within the concrete — the trade-off is that cladding and finishes need to be selected and detailed for the local climate.",
      },
      {
        question: "Can you add a lift core or emergency stair to a building we didn't build?",
        answer:
          "Yes — this is a common request. We survey the existing structure, design the new steel element to tie into it safely, and erect it with minimal disruption to the building's occupants.",
      },
      {
        question: "Do you build resorts outside Dhaka?",
        answer:
          "Yes, we mobilise our fabrication and erection teams to sites across Bangladesh; remoteness mainly affects transport logistics and programme, not feasibility.",
      },
    ],
  },
  {
    slug: "agro-based-buildings",
    title: "Agro-Based Buildings",
    shortTitle: "Agro-Based",
    icon: Sprout,
    tagline: "Purpose-built steel structures for farms, feed and grain",
    summary:
      "Poultry sheds, cattle farm structures, grain storage, feed mill and auto rice mill buildings, and auto brick field sheds — steel structures sized for ventilation, hygiene and throughput.",
    description: [
      "Agricultural buildings have their own engineering brief: ventilation and roof pitch for livestock welfare, clear spans for feed and grain handling equipment, and a structure that can be washed down and kept hygienic. A generic shed built for storage doesn't automatically meet those needs.",
      "We size the frame, roof pitch and ventilation openings around the specific operation — poultry, dairy, grain or feed milling — rather than treating every agro-based building as an identical steel box.",
    ],
    image: "/images/Portfolio/open-sided-shed-erection.jpg",
    capabilities: [
      {
        title: "Poultry shed buildings",
        description:
          "Long, naturally ventilated steel sheds with roof pitch and eave detailing suited to poultry-house environmental control.",
      },
      {
        title: "Cow & dairy farm sheds",
        description:
          "Open-sided steel structures for livestock housing with clear spans for feeding and milking equipment access.",
      },
      {
        title: "Grain storage sheds",
        description:
          "Clear-span steel buildings engineered for bulk grain storage loads and equipment access.",
      },
      {
        title: "Feed mill & auto rice mill sheds",
        description:
          "Process-building steel frames sized around milling equipment, conveyor runs and vehicle access.",
      },
      {
        title: "Auto brick field sheds",
        description:
          "Steel structures for automatic brick field kilns and drying sheds, sized around the production line and vehicle access.",
      },
    ],
    benefits: [
      {
        title: "Built for the operation",
        description:
          "Roof pitch, ventilation and bay spacing are sized around the specific agricultural process, not a generic shed template.",
        icon: Compass,
      },
      {
        title: "Fast to put into production",
        description:
          "A bolted steel frame gets a farm or mill building operational well ahead of an equivalent RCC structure.",
        icon: Timer,
      },
      {
        title: "Low-maintenance structure",
        description:
          "Coated steel cladding and framing hold up to wash-down and agricultural environments with straightforward upkeep.",
        icon: Leaf,
      },
    ],
    deliverables: [
      "Site measurement and process requirements review",
      "Structural design & calculation per BNBC",
      "Frame, purlin and cladding fabrication",
      "Foundation and floor coordination",
      "Site erection and quality inspection",
      "Final inspection and handover",
    ],
    stats: [
      { label: "Engineering turnaround", value: "24 hrs" },
      { label: "Delivery process", value: "4 stages" },
      { label: "Structure type", value: "Bolted steel" },
    ],
    faqs: [
      {
        question: "Do you design around the equipment we're installing?",
        answer:
          "Yes — for feed mills and rice mills in particular, bay spacing, door and conveyor openings are set around the equipment layout you supply, rather than a standard building being adapted afterwards.",
      },
      {
        question: "Can a poultry shed be designed for natural ventilation?",
        answer:
          "Yes. Roof pitch, ridge venting and eave height are the main levers for natural ventilation in an open-sided poultry shed, and we size these to the shed length and flock density you specify.",
      },
      {
        question: "How do you handle sites in more remote agricultural areas?",
        answer:
          "Fabrication happens off-site, so the main logistics consideration is transporting frame sections and arranging a local erection crew — feasible across the districts we work in.",
      },
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
