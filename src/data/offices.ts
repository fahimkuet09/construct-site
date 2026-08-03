import { Briefcase, HardHat, Newspaper, ShieldCheck, Users } from "lucide-react";
import type { Department, FAQ, Office } from "@/types";

export const offices: Office[] = [
  {
    id: "dhaka",
    city: "Dhaka",
    country: "Bangladesh",
    region: "Dhaka",
    address: ["Meghna House", "Plot 42, Road 11, Banani", "Dhaka 1213"],
    phone: "+880 2 5566 8100",
    email: "dhaka@meghnaconstruct.com.bd",
    coordinates: [23.7936, 90.4043],
    isHeadquarters: true,
    projectCount: 46,
  },
  {
    id: "chattogram",
    city: "Chattogram",
    country: "Bangladesh",
    region: "Chattogram",
    address: ["Meghna Tower", "1207 Sheikh Mujib Road, Agrabad", "Chattogram 4100"],
    phone: "+880 31 272 4400",
    email: "chattogram@meghnaconstruct.com.bd",
    coordinates: [22.3268, 91.8098],
    projectCount: 38,
  },
  {
    id: "khulna",
    city: "Khulna",
    country: "Bangladesh",
    region: "Khulna",
    address: ["Meghna Regional Office", "18 KDA Avenue", "Khulna 9100"],
    phone: "+880 41 273 1200",
    email: "khulna@meghnaconstruct.com.bd",
    coordinates: [22.8156, 89.5687],
    projectCount: 21,
  },
  {
    id: "sylhet",
    city: "Sylhet",
    country: "Bangladesh",
    region: "Sylhet",
    address: ["Meghna Regional Office", "42 Airport Road, Amberkhana", "Sylhet 3100"],
    phone: "+880 821 271 900",
    email: "sylhet@meghnaconstruct.com.bd",
    coordinates: [24.8949, 91.8687],
    projectCount: 17,
  },
  {
    id: "rajshahi",
    city: "Rajshahi",
    country: "Bangladesh",
    region: "Rajshahi",
    address: ["Meghna Regional Office", "9 Greater Road, Laxmipur", "Rajshahi 6000"],
    phone: "+880 721 276 300",
    email: "rajshahi@meghnaconstruct.com.bd",
    coordinates: [24.3745, 88.6042],
    projectCount: 19,
  },
  {
    id: "rangpur",
    city: "Rangpur",
    country: "Bangladesh",
    region: "Rangpur",
    address: ["Meghna Regional Office", "26 Station Road", "Rangpur 5400"],
    phone: "+880 521 265 700",
    email: "rangpur@meghnaconstruct.com.bd",
    coordinates: [25.7439, 89.2752],
    projectCount: 14,
  },
  {
    id: "barishal",
    city: "Barishal",
    country: "Bangladesh",
    region: "Barishal",
    address: ["Meghna Regional Office", "31 Sadar Road", "Barishal 8200"],
    phone: "+880 431 264 100",
    email: "barishal@meghnaconstruct.com.bd",
    coordinates: [22.701, 90.3535],
    projectCount: 12,
  },
  {
    id: "coxs-bazar",
    city: "Cox's Bazar",
    country: "Bangladesh",
    region: "Chattogram",
    address: ["Matarbari Project Office", "Maheshkhali Upazila", "Cox's Bazar 4710"],
    phone: "+880 341 264 800",
    email: "matarbari@meghnaconstruct.com.bd",
    coordinates: [21.7902, 91.8623],
    projectCount: 9,
  },
];

export const headquarters = offices.find((o) => o.isHeadquarters) ?? offices[0];

export const contactDepartments: Department[] = [
  {
    name: "Tenders & Pre-qualification",
    description:
      "Government tender enquiries, PPA pre-qualification and framework opportunities across all six sectors.",
    email: "tenders@meghnaconstruct.com.bd",
    phone: "+880 2 5566 8120",
    icon: Briefcase,
  },
  {
    name: "Project Delivery",
    description:
      "Existing contract enquiries, programme updates and site coordination for live projects.",
    email: "delivery@meghnaconstruct.com.bd",
    phone: "+880 2 5566 8122",
    icon: HardHat,
  },
  {
    name: "Supply Chain",
    description:
      "Supplier registration, subcontract packages and local sourcing enquiries.",
    email: "supplychain@meghnaconstruct.com.bd",
    phone: "+880 2 5566 8124",
    icon: Users,
  },
  {
    name: "Health, Safety & Compliance",
    description:
      "Safety documentation, audit requests, ISO certification evidence and compliance queries.",
    email: "hsq@meghnaconstruct.com.bd",
    phone: "+880 2 5566 8126",
    icon: ShieldCheck,
  },
  {
    name: "Media & Communications",
    description:
      "Press enquiries, interview requests, imagery and speaking opportunities.",
    email: "press@meghnaconstruct.com.bd",
    phone: "+880 2 5566 8128",
    icon: Newspaper,
  },
];

export const enquiryTypes = [
  "New project enquiry",
  "Government tender or pre-qualification",
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
      "Our typical contract range is ৳500 crore to ৳25,000 crore. We will consider smaller values where the engineering is genuinely complex or the work forms part of a longer programme with a client we already work with.",
  },
  {
    question: "Where in Bangladesh do you operate?",
    answer:
      "We have delivered work in all eight divisions and 61 of the 64 districts, run from seven regional offices plus project offices established for major schemes. Where we hold no permanent presence, a delivery team mobilises from the nearest regional office.",
  },
  {
    question: "Do you work on donor-funded and government tenders?",
    answer:
      "Yes. We hold pre-qualification with RHD, BBA, Bangladesh Railway, CPA, BWDB and BPDB, and we have delivered contracts financed by the World Bank, ADB, JICA and the Government of Bangladesh under both PPR and international procurement rules.",
  },
  {
    question: "Do you work under design-and-build contracts?",
    answer:
      "Yes, and it is our preferred model. We hold in-house design authority across structures, geotechnics and process engineering, which removes the interface risk that sits between designer and contractor on traditional item-rate contracts. We also work under FIDIC and PPP arrangements.",
  },
  {
    question: "How do I register as a supplier or subcontractor?",
    answer:
      "Contact our supply chain team with your capability statement, trade licence, TIN/BIN, relevant certifications and recent project references. Pre-qualification typically takes three to four weeks and covers safety performance, financial standing and technical capability.",
  },
  {
    question: "How quickly will I receive a response?",
    answer:
      "Tender and new business enquiries receive a response within two working days. Media enquiries are answered same day where possible. Every enquiry is routed to a named individual rather than a shared inbox.",
  },
];
