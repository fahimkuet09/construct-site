import {
  Baby,
  BookOpen,
  Coins,
  GraduationCap,
  HeartPulse,
  Plane,
  Scale,
  Users,
} from "lucide-react";
import type { FAQ, JobOpening, ValuePillar } from "@/types";

export const jobs: JobOpening[] = [
  {
    id: "job-01",
    title: "Senior Bridge Engineer",
    department: "Structures",
    location: "Dhaka",
    type: "Full-time",
    level: "Senior",
    postedAt: "2026-07-20",
    summary:
      "Lead the structural design of long-span crossings from concept through to construction support, working alongside the delivery teams who will build them.",
    responsibilities: [
      "Own the structural design of major crossings from concept to detailed design",
      "Carry out staged construction analysis and camber calculation",
      "Support site teams through erection, stressing and closure operations",
      "Coordinate with the independent Category III checker",
      "Mentor graduate and mid-level engineers within the structures team",
    ],
    requirements: [
      "Membership of IEB, or working towards it",
      "Eight or more years in bridge design, including at least one long-span project",
      "Fluency in AASHTO LRFD and BNBC; Eurocode experience an advantage",
      "Experience with staged construction analysis software",
      "Willingness to spend time on site during critical operations",
    ],
  },
  {
    id: "job-02",
    title: "Tunnelling Project Manager",
    department: "Underground",
    location: "Dhaka — Metro Line 4 site",
    type: "Full-time",
    level: "Leadership",
    postedAt: "2026-07-14",
    summary:
      "Take delivery accountability for a TBM drive beneath dense central Dhaka, including ground treatment, monitoring and cross-passage construction.",
    responsibilities: [
      "Hold delivery accountability for programme, cost, safety and quality on a live drive",
      "Direct the interface between TBM operations, ground treatment and monitoring",
      "Lead the client, designer and stakeholder relationship at project level",
      "Manage a multidisciplinary team of approximately 180 people",
      "Own the settlement risk position and the response regime",
    ],
    requirements: [
      "Ten or more years in tunnelling, including TBM drive management",
      "Demonstrable experience of urban drives with settlement constraints",
      "IEB membership or equivalent professional standing",
      "Strong commercial and contractual capability under FIDIC and PPR",
      "Fluency in Bangla and English essential",
    ],
  },
  {
    id: "job-03",
    title: "Geotechnical Engineer",
    department: "Ground Engineering",
    location: "Chattogram",
    type: "Full-time",
    level: "Mid-level",
    postedAt: "2026-07-11",
    summary:
      "Deliver ground investigation interpretation, foundation design and ground improvement schemes across river, marine and land-based infrastructure projects.",
    responsibilities: [
      "Interpret ground investigation data and produce geotechnical design reports",
      "Design piled and shallow foundations for marine and land structures",
      "Specify and verify ground improvement schemes",
      "Review instrumentation data and advise on trigger-level responses",
      "Support tender teams with geotechnical risk assessment",
    ],
    requirements: [
      "Four or more years in geotechnical design",
      "MSc in geotechnical engineering or equivalent",
      "Experience with soft alluvial soils, ground improvement and settlement analysis",
      "Familiarity with delta and marine geotechnics an advantage",
      "Working towards IEB membership",
    ],
  },
  {
    id: "job-04",
    title: "Site Agent — Highways",
    department: "Delivery",
    location: "Cumilla — Expressway corridor",
    type: "Full-time",
    level: "Senior",
    postedAt: "2026-07-08",
    summary:
      "Run a section of live-carriageway expressway works, holding responsibility for production, safety, traffic management and the workforce on your section.",
    responsibilities: [
      "Manage day-to-day delivery of a defined section of the corridor",
      "Own safety performance and the traffic management interface",
      "Plan and resource weekly production against the programme",
      "Supervise directly employed operatives and subcontract packages",
      "Maintain quality records and as-built information",
    ],
    requirements: [
      "Six or more years in highways delivery, including live-carriageway works",
      "NEBOSH IGC or equivalent supervisory safety qualification",
      "Strong understanding of temporary traffic management design",
      "Practical earthworks and pavement experience",
      "Comfortable working shift patterns including night possessions",
    ],
  },
  {
    id: "job-05",
    title: "Digital Engineering Lead",
    department: "Digital Delivery",
    location: "Dhaka",
    type: "Full-time",
    level: "Senior",
    postedAt: "2026-07-02",
    summary:
      "Own the federated BIM environment on a major industrial programme, from information management through to digital twin handover.",
    responsibilities: [
      "Establish and run the common data environment to ISO 19650",
      "Lead federated model coordination and clash resolution",
      "Develop 4D programme integration with the planning team",
      "Define and deliver the asset information model for handover",
      "Train project teams in model-based working practices",
    ],
    requirements: [
      "Five or more years in digital engineering on major infrastructure",
      "Deep working knowledge of ISO 19650",
      "Proficiency with Revit, Civil 3D, Navisworks and a CDE platform",
      "Experience delivering asset information models to operators",
      "Scripting capability (Dynamo, Python) an advantage",
    ],
  },
  {
    id: "job-06",
    title: "Environmental Manager",
    department: "Sustainability",
    location: "Rangamati — Kaptai site",
    type: "Full-time",
    level: "Mid-level",
    postedAt: "2026-06-27",
    summary:
      "Lead environmental compliance and habitat management on a remote pumped storage scheme in the Chittagong Hill Tracts.",
    responsibilities: [
      "Own environmental compliance against consents and permits",
      "Manage spoil disposal, erosion control and reinstatement programmes",
      "Coordinate ecological surveys and protected species licensing",
      "Run environmental monitoring, auditing and incident reporting",
      "Engage with regulators, agencies and local communities",
    ],
    requirements: [
      "Four or more years in construction environmental management",
      "Membership of IEB or a recognised environmental institute",
      "Experience with hill tract or protected forest environments",
      "Working knowledge of DoE clearance and ECA requirements",
      "Full driving licence and willingness to work remotely",
    ],
  },
  {
    id: "job-07",
    title: "Graduate Civil Engineer — 2026 Intake",
    department: "Graduate Programme",
    location: "Multiple locations",
    type: "Graduate",
    level: "Graduate",
    postedAt: "2026-06-18",
    summary:
      "A structured 24-month programme across three rotations — design, site delivery and a specialist function — mapped directly to chartership.",
    responsibilities: [
      "Complete three six-to-nine month rotations across the business",
      "Contribute to live project delivery from your first week",
      "Maintain a professional development record towards professional membership",
      "Participate in the graduate technical seminar programme",
      "Take part in community and STEM outreach activity",
    ],
    requirements: [
      "Degree in civil, structural, geotechnical or environmental engineering",
      "Accredited course accredited by the Board of Accreditation for Engineering",
      "Genuine interest in heavy civil infrastructure",
      "Willingness to relocate between rotations",
      "Right to work in at least one operating region",
    ],
  },
  {
    id: "job-08",
    title: "Marine Works Superintendent",
    department: "Marine",
    location: "Offshore — Bay of Bengal",
    type: "Contract",
    level: "Senior",
    postedAt: "2026-06-10",
    summary:
      "Supervise offshore foundation installation from a jack-up vessel, holding operational responsibility for lifting, piling and noise-abated installation.",
    responsibilities: [
      "Supervise monopile and jacket installation offshore",
      "Own the lifting plan and marine operations on shift",
      "Manage noise abatement and marine mammal observation compliance",
      "Coordinate with the vessel master and marine warranty surveyor",
      "Maintain installation records and verticality verification",
    ],
    requirements: [
      "Eight or more years in offshore or heavy marine construction",
      "Valid offshore survival and medical certification",
      "Experience with jack-up operations and heavy lifting",
      "Understanding of noise abatement and environmental compliance",
      "Rotational working pattern — 3 weeks on, 3 weeks off",
    ],
  },
];

export const departments = Array.from(new Set(jobs.map((j) => j.department)));
export const jobLocations = Array.from(new Set(jobs.map((j) => j.location)));

export const benefits: ValuePillar[] = [
  {
    title: "Chartership, fully supported",
    description:
      "Every engineer gets a supervising engineer, funded IEB membership, study leave and a rotation plan mapped to your professional review.",
    icon: GraduationCap,
  },
  {
    title: "Health and wellbeing",
    description:
      "Family medical cover, on-site occupational health, confidential counselling and an annual health screening for every employee.",
    icon: HeartPulse,
  },
  {
    title: "Meaningful reward",
    description:
      "Profit participation, project completion bonuses, two annual festival bonuses and a provident fund matched at 10%.",
    icon: Coins,
  },
  {
    title: "Nationwide mobility",
    description:
      "Assignments across every division with full relocation support, site accommodation and family allowance.",
    icon: Plane,
  },
  {
    title: "Family and life balance",
    description:
      "Six months' fully paid maternity leave and one month's paternity leave, on-site childcare at head office, and flexible working where the role allows.",
    icon: Baby,
  },
  {
    title: "Continuous learning",
    description:
      "A funded technical academy, external qualification sponsorship and five paid development days every year.",
    icon: BookOpen,
  },
];

export const culture: ValuePillar[] = [
  {
    title: "You will be trusted early",
    description:
      "Graduates contribute to live projects in their first week. We do not have a holding pattern, and we do not give people work that does not matter.",
    icon: Users,
  },
  {
    title: "Speaking up is protected",
    description:
      "Every person on site can stop work without consequence. That principle extends to design reviews, programme meetings and board discussions.",
    icon: Scale,
  },
  {
    title: "Engineering is the point",
    description:
      "We are a technical business run by engineers. Technical excellence is a route to senior leadership here, not a detour away from it.",
    icon: GraduationCap,
  },
];

export const hiringProcess = [
  {
    step: "01",
    title: "Application",
    description:
      "A CV and a short covering note. No timed online tests, and no algorithmic screening — every application is read by a person.",
    duration: "Response within 5 working days",
  },
  {
    step: "02",
    title: "Technical conversation",
    description:
      "A 45-minute discussion with an engineer from the team about work you have actually done and decisions you actually made.",
    duration: "45 minutes, remote",
  },
  {
    step: "03",
    title: "Project scenario",
    description:
      "A real constraint from a live project, discussed openly. We are interested in how you reason, not whether you arrive at our answer.",
    duration: "90 minutes, remote or in person",
  },
  {
    step: "04",
    title: "Site or office visit",
    description:
      "Meet the team, see the work, and ask everything. You should be assessing us as seriously as we are assessing you.",
    duration: "Half day, on location",
  },
  {
    step: "05",
    title: "Offer",
    description:
      "A written offer with the full package set out plainly, and a named contact for any question before you decide.",
    duration: "Within 3 working days",
  },
];

export const careersFaqs: FAQ[] = [
  {
    question: "Do I need to relocate for a site-based role?",
    answer:
      "Most major project roles are site-based. We provide accommodation at every project camp, a site allowance, and paid travel home on a rotation agreed before you accept. Family accommodation is available at the larger established sites.",
  },
  {
    question: "Do you recruit from outside the major engineering universities?",
    answer:
      "Yes. We recruit from BUET, CUET, KUET, RUET, MIST and the private engineering universities, and we assess on the technical conversation rather than on where the degree came from. Roughly a third of our 2025 graduate intake came from outside the top four public universities.",
  },
  {
    question: "Can I move between disciplines or divisions?",
    answer:
      "Internal mobility is actively encouraged. Roughly a third of our engineers have changed discipline or division at least once, and internal applicants are always considered before a role is advertised externally.",
  },
  {
    question: "What does the graduate rotation actually involve?",
    answer:
      "Three placements over 24 months: one in design, one in site delivery and one in a specialist function such as geotechnics, digital delivery or sustainability. Each rotation carries real project responsibility and is mapped against your IEB professional development objectives.",
  },
  {
    question: "Is site-based work required?",
    answer:
      "It depends on the role. Design and technical roles are typically office-based with periodic site attendance during critical operations. Delivery roles are site-based. We are explicit about the expectation in every job description rather than leaving it to be discovered later.",
  },
  {
    question: "What is your approach to flexible working?",
    answer:
      "Office-based roles operate on a hybrid pattern of four days in the workplace. Site roles follow the project's shift pattern, which is set out in the advert. Flexible start times and part-time arrangements are available in most non-site roles.",
  },
];
