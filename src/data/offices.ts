import { Factory, HardHat, MessageSquare, Users } from "lucide-react";
import type { Department, FAQ, Office } from "@/types";
import { site } from "@/lib/site";

export const offices: Office[] = [
  {
    id: "dhaka-head-office",
    city: "Dhaka",
    country: "Bangladesh",
    region: "Dhaka",
    address: [
      site.address.street,
      `${site.address.locality} ${site.address.postalCode}`,
    ],
    phone: site.phone,
    email: site.email,
    coordinates: [23.7639, 90.3572],
    isHeadquarters: true,
    projectCount: 109,
  },
  {
    id: "dhaka-fabrication-workshop",
    city: "Dhaka",
    country: "Bangladesh",
    region: "Dhaka",
    address: ["Fabrication Workshop", "Dhaka"],
    phone: site.phoneSecondary,
    email: site.email,
    coordinates: [23.83, 90.41],
    projectCount: 109,
  },
];

export const headquarters = offices.find((o) => o.isHeadquarters) ?? offices[0];

export const contactDepartments: Department[] = [
  {
    name: "New Project Enquiries",
    description:
      "Planning an industrial, commercial, residential or agro-based steel building? Start here to arrange a site visit.",
    email: site.email,
    phone: site.phone,
    icon: MessageSquare,
  },
  {
    name: "Existing Project Support",
    description:
      "Already working with us on a live project? Reach the team handling your fabrication or site erection.",
    email: site.email,
    phone: site.phoneSecondary,
    icon: HardHat,
  },
  {
    name: "Fabrication Workshop",
    description:
      "Questions about fabrication scheduling, delivery or workshop capacity.",
    email: site.email,
    phone: site.phoneSecondary,
    icon: Factory,
  },
  {
    name: "Careers",
    description: "Applications and general recruitment enquiries.",
    email: site.careersEmail,
    phone: site.phone,
    icon: Users,
  },
];

export const enquiryTypes = [
  "New project enquiry",
  "Existing project",
  "Careers",
  "Media enquiry",
  "Other",
] as const;

export const contactFaqs: FAQ[] = [
  {
    question: "What size of project do you take on?",
    answer:
      "From a single agro-based shed to a multi-bay factory building. Send us the rough dimensions and use, and we'll tell you honestly whether it's a fit.",
  },
  {
    question: "Which areas of Bangladesh do you work in?",
    answer:
      "We're based in Dhaka and deliver projects across the country. Fabrication happens at our Dhaka workshop; our erection crews travel to the site.",
  },
  {
    question: "How is pricing worked out?",
    answer:
      "After a site visit, we calculate the structural design and return a firm quotation — typically within 24 hours — based on the building's size, use and site conditions.",
  },
  {
    question: "Do you handle foundations as well as the steel structure?",
    answer:
      "We design and supply the foundation loading for your civil contractor, and coordinate directly with them. Foundation and floor slab construction itself is usually run by a separate civil contractor.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "It depends on the building's size and site conditions. We'll give you a specific programme as part of the quotation, once measurement and calculation are complete.",
  },
  {
    question: "How quickly will I get a response to my enquiry?",
    answer:
      "We aim to respond to every enquiry within a couple of working days and arrange a site visit from there.",
  },
];
