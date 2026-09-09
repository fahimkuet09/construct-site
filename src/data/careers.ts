import {
  Coins,
  GraduationCap,
  HeartPulse,
  Scale,
  TrendingUp,
  Users,
} from "lucide-react";
import type { FAQ, JobOpening, ValuePillar } from "@/types";

export const jobs: JobOpening[] = [
  {
    id: "job-01",
    title: "Structural Design Engineer",
    department: "Design",
    location: "Dhaka (Head Office)",
    type: "Full-time",
    level: "Mid-level",
    postedAt: "2026-08-01",
    summary:
      "Carry out structural calculation and fabrication drawing for industrial, commercial and agro-based steel buildings, from site measurement through to issued-for-fabrication drawings.",
    responsibilities: [
      "Prepare structural calculations for portal frame steel buildings per BNBC",
      "Produce fabrication and erection drawings from approved design",
      "Turn around calculation and quotation within our standard 24-hour target",
      "Coordinate foundation loading with the client's civil contractor",
      "Support site teams with technical queries during erection",
    ],
    requirements: [
      "B.Sc. in Civil Engineering from a recognised university",
      "Working knowledge of structural analysis and steel design software",
      "Familiarity with AutoCAD; Tekla or STAAD.Pro an advantage",
      "One or more years of structural steel design experience preferred",
      "Comfortable visiting sites for measurement when required",
    ],
  },
  {
    id: "job-02",
    title: "Site Engineer — Erection",
    department: "Site Execution",
    location: "Project sites, Bangladesh-wide",
    type: "Full-time",
    level: "Mid-level",
    postedAt: "2026-07-20",
    summary:
      "Supervise steel frame erection on site, working from the approved fabrication drawings through to final inspection and handover.",
    responsibilities: [
      "Supervise the erection crew and verify alignment against drawings",
      "Coordinate delivery sequencing of frame, purlin and cladding",
      "Maintain daily progress and quality records on site",
      "Liaise with the client and civil contractor on interfacing works",
      "Carry out the final inspection checklist ahead of handover",
    ],
    requirements: [
      "Diploma or B.Sc. in Civil Engineering",
      "Experience supervising steel or general construction site works",
      "Willingness to travel to project sites across Bangladesh",
      "Practical understanding of bolted steel connections",
      "Clear, organised site record-keeping",
    ],
  },
  {
    id: "job-03",
    title: "Fabrication & QC Supervisor",
    department: "Workshop",
    location: "Dhaka (Fabrication Workshop)",
    type: "Full-time",
    level: "Mid-level",
    postedAt: "2026-07-10",
    summary:
      "Oversee cutting, welding and coating of structural members in the workshop, checking each stage against the approved fabrication drawing.",
    responsibilities: [
      "Schedule and supervise cutting, welding and coating of frame members",
      "Check completed members against fabrication drawings and tolerances",
      "Maintain workshop safety standards and housekeeping",
      "Coordinate dispatch sequencing with the site erection programme",
      "Report fabrication progress against the project schedule",
    ],
    requirements: [
      "Diploma in Mechanical or Civil Engineering, or equivalent trade experience",
      "Hands-on experience in structural steel fabrication",
      "Working knowledge of welding standards and quality inspection",
      "Ability to read fabrication and shop drawings",
      "Team supervision experience",
    ],
  },
  {
    id: "job-04",
    title: "Business Development Executive",
    department: "Business Development",
    location: "Dhaka (Head Office)",
    type: "Full-time",
    level: "Mid-level",
    postedAt: "2026-06-28",
    summary:
      "Develop new industrial, commercial and agro-based building enquiries, and manage the client relationship from first site visit through to signed contract.",
    responsibilities: [
      "Identify and follow up new project enquiries across target sectors",
      "Coordinate site visits and liaise between clients and the design team",
      "Prepare and present quotations and proposals to prospective clients",
      "Maintain client relationships through project delivery and after handover",
      "Track the enquiry pipeline and report on conversion",
    ],
    requirements: [
      "Bachelor's degree in a relevant discipline",
      "Prior experience in construction, engineering or industrial B2B sales preferred",
      "Strong communication skills in Bangla and English",
      "Comfortable travelling to client sites across Bangladesh",
      "Basic understanding of construction or steel structures an advantage",
    ],
  },
];

export const departments = Array.from(new Set(jobs.map((j) => j.department)));
export const jobLocations = Array.from(new Set(jobs.map((j) => j.location)));

export const benefits: ValuePillar[] = [
  {
    title: "Real project responsibility, early",
    description:
      "A small technical team means every engineer works directly on live projects — not on a holding pattern before getting real work.",
    icon: TrendingUp,
  },
  {
    title: "Learning across building types",
    description:
      "Industrial, commercial, residential and agro-based projects in the same year, working alongside our Managing Director and senior engineers.",
    icon: GraduationCap,
  },
  {
    title: "Fair, transparent reward",
    description:
      "Festival bonus and a clear salary review process, discussed openly rather than left to guesswork.",
    icon: Coins,
  },
  {
    title: "A workplace that looks after people",
    description:
      "Group healthcare support and a workplace that takes safety on site as seriously as it takes the engineering.",
    icon: HeartPulse,
  },
];

export const culture: ValuePillar[] = [
  {
    title: "Small team, direct access",
    description:
      "You will work directly with senior engineers and the Managing Director — decisions are made quickly, not through layers of process.",
    icon: Users,
  },
  {
    title: "The engineering has to hold up",
    description:
      "We are a technical business. A design that doesn't work gets raised and fixed, whatever stage the project is at.",
    icon: Scale,
  },
  {
    title: "Growing steadily",
    description:
      "As the project list grows, so does the team — genuine opportunities to take on more responsibility as you prove you can carry it.",
    icon: GraduationCap,
  },
];

export const hiringProcess = [
  {
    step: "01",
    title: "Application",
    description:
      "Send your CV and a short note about the kind of work you want to do. Every application is read by a person.",
    duration: "Response within 5 working days",
  },
  {
    step: "02",
    title: "Interview",
    description:
      "A conversation with the relevant department lead about your experience and how you approach a real technical or site problem.",
    duration: "45–60 minutes",
  },
  {
    step: "03",
    title: "Office or site visit",
    description:
      "Meet the team, see the workshop or a live site, and ask what the day-to-day work actually looks like.",
    duration: "Half day",
  },
  {
    step: "04",
    title: "Offer",
    description:
      "A written offer setting out the role and package clearly, with a named contact for any questions before you decide.",
    duration: "Within a few working days",
  },
];

export const careersFaqs: FAQ[] = [
  {
    question: "Do site-based roles require travel across Bangladesh?",
    answer:
      "Yes — site engineers and erection supervisors travel to project sites across the country as work is confirmed. Travel and site arrangements are agreed before you're assigned to a project.",
  },
  {
    question: "Do you hire recent graduates?",
    answer:
      "We consider strong graduates for design and site engineering roles, particularly where they've had relevant internship or project experience in structural or civil engineering.",
  },
  {
    question: "What tools should a design engineer be comfortable with?",
    answer:
      "AutoCAD is expected for all design roles. Familiarity with structural analysis software (STAAD.Pro or similar) and Tekla for detailing is a strong advantage, and we support engineers in building that skill on the job.",
  },
  {
    question: "Is the head office role fully office-based?",
    answer:
      "Design and business development roles are based at our Mohammadpur office, with occasional site visits for measurement, client meetings or project reviews.",
  },
];
