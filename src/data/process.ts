import { ClipboardCheck, DraftingCompass, HardHat, Ruler } from "lucide-react";
import type { ProcessStep } from "@/types";

export const processSteps: ProcessStep[] = [
  {
    id: "measurement",
    number: "01",
    title: "Measurement",
    duration: "Site visit",
    summary:
      "An engineer visits the site to record the exact measurements and constraints the design has to work with.",
    detail:
      "Every project starts with a site visit rather than a desk estimate. We record plot dimensions, ground conditions, access routes and any neighbouring structures, and confirm what the client needs the finished building to do — clear span, eave height, door and equipment openings — before a single calculation is run.",
    deliverables: [
      "Site dimensions and boundary constraints",
      "Access and logistics assessment",
      "Client requirement and usage brief",
      "Preliminary layout sketch",
    ],
    icon: Ruler,
    image: "/images/services/process-planning.svg",
  },
  {
    id: "calculation",
    number: "02",
    title: "Engineering & Calculation",
    duration: "Within 24 hours",
    summary:
      "Structural calculation and design turned around fast, so the client has a firm design and quote to work from quickly.",
    detail:
      "Our engineers size the primary frame, secondary members, foundations and connections against BNBC loading requirements, using computer-aided structural analysis. Because the site data is already in hand, a design and firm quotation is typically ready within 24 hours of the site visit.",
    deliverables: [
      "Structural design & load calculation",
      "Material and fabrication drawings",
      "Foundation loading for the civil contractor",
      "Firm quotation and specification",
    ],
    icon: DraftingCompass,
    image: "/images/services/process-design.svg",
  },
  {
    id: "execution",
    number: "03",
    title: "Fabrication & Execution",
    duration: "Fabrication to erection",
    summary:
      "Steel is fabricated to the approved drawings, then transported and bolted together on site by our own erection crew.",
    detail:
      "Primary frames, purlins, bracing and cladding are cut, drilled and prepared to the approved drawings before leaving the workshop, so site work is largely a bolting and alignment operation. Our crews erect the structure while the client's civil contractor completes foundations and flooring in parallel where the programme allows.",
    deliverables: [
      "Frame, purlin and cladding fabrication",
      "Delivery and site logistics",
      "Structural steel erection",
      "Roof and wall cladding installation",
    ],
    icon: HardHat,
    image: "/images/services/process-construction.svg",
  },
  {
    id: "handover",
    number: "04",
    title: "Final Inspection & Handover",
    duration: "Project close-out",
    summary:
      "The finished structure is checked against the approved drawings before it is signed over to the client.",
    detail:
      "Before handover, the erected structure is inspected against the approved design — connections, alignment, cladding fixings and finishes — and any snags are closed out. The client receives the building, the approved drawings, and a point of contact for any post-handover query.",
    deliverables: [
      "Structural and cladding inspection",
      "Snagging and defect close-out",
      "Approved drawings handed to client",
      "Project sign-off and payment close-out",
    ],
    icon: ClipboardCheck,
    image: "/images/services/process-completion.svg",
  },
];
