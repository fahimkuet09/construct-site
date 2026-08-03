import {
  ClipboardCheck,
  Compass,
  DraftingCompass,
  HardHat,
  Ruler,
  Sparkles,
} from "lucide-react";
import type { ProcessStep } from "@/types";

export const processSteps: ProcessStep[] = [
  {
    id: "planning",
    number: "01",
    title: "Planning",
    duration: "Weeks 1–12",
    summary:
      "Understanding the constraint that actually governs the project before anyone draws anything.",
    detail:
      "Every project has one constraint that decides everything else — a tidal window, a possession regime, a settlement limit, a fixed go-live date. We find it first. Feasibility, ground investigation, stakeholder mapping and consent strategy are all built around that single governing constraint rather than around a standard template.",
    deliverables: [
      "Feasibility and options appraisal",
      "Ground investigation strategy",
      "Consent and stakeholder roadmap",
      "Risk register and cost plan",
    ],
    icon: Compass,
    image: "/images/services/process-planning.svg",
  },
  {
    id: "design",
    number: "02",
    title: "Design",
    duration: "Weeks 8–36",
    summary:
      "Design authority held in-house, so buildability is decided by the people who will build it.",
    detail:
      "Our structural, geotechnical and process engineers sit alongside the delivery team from concept onwards. Temporary works, erection sequence and plant access are resolved during design rather than discovered on site. Every primary structure receives an independent Category III check commissioned by us and reported directly to the client.",
    deliverables: [
      "Concept and detailed design",
      "Category III independent check",
      "Federated BIM model (ISO 19650)",
      "Buildability and temporary works review",
    ],
    icon: DraftingCompass,
    image: "/images/services/process-design.svg",
  },
  {
    id: "engineering",
    number: "03",
    title: "Engineering",
    duration: "Weeks 24–52",
    summary:
      "Turning a design into a sequence of shifts that can actually be resourced and delivered.",
    detail:
      "This is where a drawing becomes a programme. Method statements, plant selection, logistics, supply chain and workforce are sequenced against a four-dimensional model. Materials are procured against verified lead times, and every critical activity is rehearsed on the model before it is rehearsed on site.",
    deliverables: [
      "4D construction programme",
      "Method statements and lift plans",
      "Procurement and logistics plan",
      "Site establishment design",
    ],
    icon: Ruler,
    image: "/images/services/process-engineering.svg",
  },
  {
    id: "construction",
    number: "04",
    title: "Construction",
    duration: "Weeks 40–220",
    summary:
      "Self-performed heavy civils with our own plant, our own people and our own accountability.",
    detail:
      "Meridian self-performs the structural core of every project. Owning the plant and directly employing the operatives means the programme responds to the project rather than to a subcontractor's other commitments. Progress, quality and safety are reported daily against the model, not monthly against a bar chart.",
    deliverables: [
      "Daily progress against 4D model",
      "Quality inspection and test records",
      "Real-time safety and environmental data",
      "Monthly cost and programme reporting",
    ],
    icon: HardHat,
    image: "/images/services/process-construction.svg",
  },
  {
    id: "inspection",
    number: "05",
    title: "Inspection",
    duration: "Weeks 200–240",
    summary:
      "Proving performance against the specification, with evidence rather than assurance.",
    detail:
      "Testing is planned from the start, not assembled at the end. Load testing, integrated systems testing, commissioning and regulatory verification each have an owner, a date and an acceptance criterion set before construction begins. Nothing is signed off on the basis that it looks right.",
    deliverables: [
      "Static and dynamic load testing",
      "Integrated systems testing",
      "Regulatory and consent verification",
      "Snagging and defect close-out",
    ],
    icon: ClipboardCheck,
    image: "/images/services/process-inspection.svg",
  },
  {
    id: "completion",
    number: "06",
    title: "Completion",
    duration: "Weeks 236+",
    summary:
      "Handing over an asset the operator can run, with the data they need to maintain it.",
    detail:
      "Handover is an operational event, not a ceremonial one. Operator training runs before completion, our engineers remain on site through the first full operating cycle, and the asset is transferred with an as-built digital twin, complete test records and a structured maintenance data set.",
    deliverables: [
      "As-built digital twin",
      "Operations and maintenance manuals",
      "Operator training and soft landings",
      "Post-handover performance monitoring",
    ],
    icon: Sparkles,
    image: "/images/services/process-completion.svg",
  },
];
