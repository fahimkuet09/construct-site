import { Briefcase, HardHat, Newspaper, ShieldCheck, Users } from "lucide-react";
import type { Department, FAQ, Office } from "@/types";

export const offices: Office[] = [
  {
    id: "london",
    city: "London",
    country: "United Kingdom",
    region: "Europe",
    address: ["Meridian House", "14 Blackfriars Road", "London SE1 8NW"],
    phone: "+44 20 7946 0318",
    email: "london@meridianconstruct.com",
    coordinates: [51.5045, -0.1043],
    isHeadquarters: true,
    projectCount: 34,
  },
  {
    id: "berlin",
    city: "Berlin",
    country: "Germany",
    region: "Europe",
    address: ["Meridian Bau GmbH", "Chausseestraße 112", "10115 Berlin"],
    phone: "+49 30 2887 4600",
    email: "berlin@meridianconstruct.com",
    coordinates: [52.5321, 13.3776],
    projectCount: 21,
  },
  {
    id: "rotterdam",
    city: "Rotterdam",
    country: "Netherlands",
    region: "Europe",
    address: ["Meridian Nederland BV", "Wilhelminakade 178", "3072 AP Rotterdam"],
    phone: "+31 10 217 4900",
    email: "rotterdam@meridianconstruct.com",
    coordinates: [51.9048, 4.4869],
    projectCount: 18,
  },
  {
    id: "dubai",
    city: "Dubai",
    country: "United Arab Emirates",
    region: "Middle East",
    address: ["Meridian Gulf LLC", "Emirates Financial Tower", "DIFC, Dubai"],
    phone: "+971 4 386 2200",
    email: "dubai@meridianconstruct.com",
    coordinates: [25.2138, 55.2796],
    projectCount: 27,
  },
  {
    id: "singapore",
    city: "Singapore",
    country: "Singapore",
    region: "Asia Pacific",
    address: ["Meridian Asia Pte Ltd", "8 Marina Boulevard", "Singapore 018981"],
    phone: "+65 6812 4400",
    email: "singapore@meridianconstruct.com",
    coordinates: [1.2816, 103.8546],
    projectCount: 16,
  },
  {
    id: "sydney",
    city: "Sydney",
    country: "Australia",
    region: "Asia Pacific",
    address: ["Meridian Australia Pty", "200 George Street", "Sydney NSW 2000"],
    phone: "+61 2 8046 7100",
    email: "sydney@meridianconstruct.com",
    coordinates: [-33.8627, 151.2089],
    projectCount: 14,
  },
  {
    id: "toronto",
    city: "Toronto",
    country: "Canada",
    region: "Americas",
    address: ["Meridian North America Inc", "181 Bay Street", "Toronto ON M5J 2T3"],
    phone: "+1 416 862 8800",
    email: "toronto@meridianconstruct.com",
    coordinates: [43.6465, -79.3803],
    projectCount: 19,
  },
  {
    id: "nairobi",
    city: "Nairobi",
    country: "Kenya",
    region: "Africa",
    address: ["Meridian East Africa Ltd", "Riverside Drive", "Nairobi 00100"],
    phone: "+254 20 271 4400",
    email: "nairobi@meridianconstruct.com",
    coordinates: [-1.2705, 36.8034],
    projectCount: 11,
  },
];

export const headquarters = offices.find((o) => o.isHeadquarters) ?? offices[0];

export const contactDepartments: Department[] = [
  {
    name: "New Business & Tenders",
    description:
      "Pre-qualification, tender enquiries and framework opportunities across all six sectors.",
    email: "tenders@meridianconstruct.com",
    phone: "+44 20 7946 0320",
    icon: Briefcase,
  },
  {
    name: "Project Delivery",
    description:
      "Existing contract enquiries, programme updates and site coordination for live projects.",
    email: "delivery@meridianconstruct.com",
    phone: "+44 20 7946 0322",
    icon: HardHat,
  },
  {
    name: "Supply Chain",
    description:
      "Supplier registration, subcontract packages and procurement pre-qualification.",
    email: "supplychain@meridianconstruct.com",
    phone: "+44 20 7946 0324",
    icon: Users,
  },
  {
    name: "Health, Safety & Compliance",
    description:
      "Safety documentation, audit requests, certification evidence and compliance queries.",
    email: "hsq@meridianconstruct.com",
    phone: "+44 20 7946 0326",
    icon: ShieldCheck,
  },
  {
    name: "Media & Communications",
    description:
      "Press enquiries, interview requests, imagery and speaking opportunities.",
    email: "press@meridianconstruct.com",
    phone: "+44 20 7946 0328",
    icon: Newspaper,
  },
];

export const enquiryTypes = [
  "New project enquiry",
  "Tender or pre-qualification",
  "Existing project",
  "Supply chain registration",
  "Careers",
  "Media enquiry",
  "Other",
] as const;

export const contactFaqs: FAQ[] = [
  {
    question: "What size of project do you take on?",
    answer:
      "Our typical contract range is $50 million to $2.5 billion. We will consider smaller values where the engineering is genuinely complex or where the work forms part of a longer-term programme with a client we already work with.",
  },
  {
    question: "Which regions do you operate in?",
    answer:
      "We deliver across 24 countries from eight regional offices in Europe, the Middle East, Asia Pacific, the Americas and Africa. Where we do not hold a permanent presence we mobilise a delivery team from the nearest regional office.",
  },
  {
    question: "Do you work under design-and-build contracts?",
    answer:
      "Yes, and it is our preferred model. We hold in-house design authority across structures, geotechnics and process engineering, which removes the interface risk that sits between designer and contractor on traditional contracts. We also work under NEC, FIDIC and alliance arrangements.",
  },
  {
    question: "How do I register as a supplier or subcontractor?",
    answer:
      "Contact our supply chain team with your capability statement, relevant certifications and recent project references. Pre-qualification typically takes three to four weeks and covers safety performance, financial standing and technical capability.",
  },
  {
    question: "How quickly will I receive a response?",
    answer:
      "Tender and new business enquiries receive a response within two working days. Media enquiries are answered same day where possible. Every enquiry is routed to a named individual rather than a shared inbox.",
  },
];
