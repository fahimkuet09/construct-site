import {
  Building2,
  Clock,
  Compass,
  Cpu,
  Droplets,
  Gauge,
  HardHat,
  Layers,
  Leaf,
  Mountain,
  Route,
  Ship,
  ShieldCheck,
  TrendingUp,
  Waves,
} from "lucide-react";
import type { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "bridges-and-viaducts",
    title: "Bridges & Viaducts",
    shortTitle: "Bridges",
    icon: Waves,
    tagline: "Long-span crossings engineered for a 120-year design life",
    summary:
      "Cable-stayed, segmental and composite crossings delivered from concept design through to load testing and handover.",
    description: [
      "Meghna has delivered 143 major crossings since 1974, from 60-metre rural overpasses to 4.8-kilometre cable-stayed estuary spans. In a delta with no rock at any reachable depth and rivers that shift their own beds each monsoon, a crossing is won or lost on its foundations.",
      "We design for the riverbed that will exist after the worst scour of the next hundred years, not the one the survey found. Every crossing is modelled in a federated BIM environment before a single pile is driven, with erection sequences and camber profiles simulated against staged construction analysis.",
    ],
    image: "/images/services/bridges.svg",
    capabilities: [
      {
        title: "Cable-stayed & extradosed spans",
        description:
          "Pylon slipforming, stay cable installation and computer-controlled stressing to ±2% of design force.",
      },
      {
        title: "Balanced cantilever construction",
        description:
          "Form travellers and precast segmental erection with geometry control to millimetre tolerance.",
      },
      {
        title: "Incremental launching",
        description:
          "Launched steel and concrete decks over live rail, navigable rivers and dense settlement.",
      },
      {
        title: "Strengthening & replacement",
        description:
          "Post-tensioned retrofit, bearing replacement and deck widening under partial traffic management.",
      },
    ],
    benefits: [
      {
        title: "Single point of accountability",
        description:
          "Design and construction under one contract removes the gap where programme and cost usually leak.",
        icon: ShieldCheck,
      },
      {
        title: "Predictable geometry",
        description:
          "Staged construction analysis and real-time survey feedback keep closure tolerances inside 8mm.",
        icon: Compass,
      },
      {
        title: "Reduced disruption",
        description:
          "Offsite segment casting cuts on-site activity by up to 40% over conventional in-situ methods.",
        icon: Clock,
      },
    ],
    deliverables: [
      "Category III independent design check",
      "Staged construction & camber analysis",
      "Temporary works design and certification",
      "Static and dynamic load testing",
      "Structural health monitoring installation",
      "As-built model and maintenance manual",
    ],
    stats: [
      { label: "Crossings delivered", value: "143" },
      { label: "Longest crossing", value: "4,800 m" },
      { label: "Design life", value: "120 yrs" },
    ],
    faqs: [
      {
        question: "Do you carry out your own bridge design?",
        answer:
          "Yes. Our in-house structures team of 84 engineers holds design authority across AASHTO LRFD, BNBC and Eurocode standards, and we appoint an independent Category III checker on every major crossing.",
      },
      {
        question: "How do you build over rivers and settlement you cannot disturb?",
        answer:
          "We plan around the owner's operating windows and pre-assemble offsite. On the Buriganga Southern Viaduct we erected 1,860 segments entirely from deck level using overhead gantries, so no household below the alignment was displaced and the river stayed navigable throughout.",
      },
      {
        question: "What monitoring do you leave behind?",
        answer:
          "Every major span is handed over with an instrumented monitoring package — strain gauges, accelerometers, bearing displacement and cable force sensors — integrated into the client's asset management system.",
      },
    ],
  },
  {
    slug: "highways-and-rail",
    title: "Highways & Rail",
    shortTitle: "Highways & Rail",
    icon: Route,
    tagline: "Corridors that stay open while we rebuild them",
    summary:
      "Motorway widening, interchange reconstruction, heavy rail and light rail alignment delivered under live traffic.",
    description: [
      "Linear infrastructure is won or lost on logistics. Meghna's highways and rail division has completed 2,180 kilometres of carriageway and 480 kilometres of track, the majority of it beside traffic that never stopped running.",
      "We plan at the level of the individual shift, around a monsoon that closes roughly five months of productive earthworks each year. Separating slow-moving and non-motorised traffic onto service roads is the single change that has done most to bring corridor fatality rates down on the schemes we have delivered.",
    ],
    image: "/images/services/highways.svg",
    capabilities: [
      {
        title: "Motorway widening & smart corridors",
        description:
          "Lane gain under live traffic with grade-separated market intersections and segregated service roads.",
      },
      {
        title: "Grade-separated interchanges",
        description:
          "Multi-level junctions, ramp structures and retaining systems built within constrained footprints.",
      },
      {
        title: "Heavy & light rail alignment",
        description:
          "Dual-gauge formation, ballasted and slab track, and station box civils.",
      },
      {
        title: "Pavement engineering",
        description:
          "Long-life pavements on soft subgrade, embankment consolidation and full-depth recycling.",
      },
    ],
    benefits: [
      {
        title: "Traffic kept flowing",
        description:
          "Average corridor availability of 98.1% across live-carriageway schemes over the past five years.",
        icon: Gauge,
      },
      {
        title: "Lower whole-life cost",
        description:
          "Long-life pavement design targets 40 years before structural intervention is required.",
        icon: TrendingUp,
      },
      {
        title: "Lower embodied carbon",
        description:
          "Full-depth recycling and site-won material reuse cut pavement carbon by an average of 27%.",
        icon: Leaf,
      },
    ],
    deliverables: [
      "Traffic management design and safety audit",
      "Earthworks and geotechnical certification",
      "Pavement design and compliance testing",
      "Drainage, ducting and utility diversions",
      "Signalling, lighting and ITS installation",
      "Stage 3 road safety audit and handover",
    ],
    stats: [
      { label: "Carriageway built", value: "2,180 km" },
      { label: "Track laid", value: "480 km" },
      { label: "Corridor availability", value: "98.1%" },
    ],
    faqs: [
      {
        question: "How do you minimise disruption on live corridors?",
        answer:
          "Where the corridor allows it we build the permanent service road first and divert onto that, so traffic moves onto finished works rather than temporary ones. On the Dhaka–Chattogram Expressway that held corridor availability at 98.1% across 42 months on a route carrying a third of national trade.",
      },
      {
        question: "Can you deliver rail and highway scope on one contract?",
        answer:
          "Yes, and we frequently do. Interface points between road and rail are where most programmes slip, so holding both scopes under a single delivery team removes the coordination risk entirely.",
      },
      {
        question: "What is your approach to earthworks balance?",
        answer:
          "We model cut and fill at design stage to maximise site-won reuse, and we surcharge new embankment with vertical drains so it settles before it is tied into the existing carriageway rather than cracking along the joint afterwards.",
      },
    ],
  },
  {
    slug: "tunnelling-and-underground",
    title: "Tunnelling & Underground",
    shortTitle: "Tunnelling",
    icon: Mountain,
    tagline: "Ground engineering where settlement is measured in millimetres",
    summary:
      "TBM drives, sprayed concrete lining, shafts and deep basements beneath dense urban fabric.",
    description: [
      "Underground work is unforgiving: the ground gives one opportunity to get it right. Meghna brought soft-ground tunnelling capability into Bangladesh in 2021, and has since driven 24 kilometres of bored tunnel and sunk 68 shafts beneath some of the most densely occupied land on earth.",
      "Dhaka’s water table sits within two metres of the surface for most of the year, so every drive is effectively permanently below groundwater. Ground movement modelling is validated against real-time instrumentation, and where predicted settlement approaches trigger levels, compensation grouting is deployed before damage occurs, not after.",
    ],
    image: "/images/services/tunnelling.svg",
    capabilities: [
      {
        title: "TBM drives",
        description:
          "EPB machines from 6.2m to 9.8m diameter, configured for saturated soft alluvium.",
      },
      {
        title: "Sprayed concrete lining",
        description:
          "SCL caverns, cross-passages and junctions with fibre-reinforced and steel-mesh systems.",
      },
      {
        title: "Shafts & deep basements",
        description:
          "Diaphragm walls and secant piles toed into clay to form a cut-off, to depths beyond 40 metres.",
      },
      {
        title: "Ground treatment",
        description:
          "Jet grouting, compensation grouting, liquefaction mitigation and dewatering design.",
      },
    ],
    benefits: [
      {
        title: "Assets protected",
        description:
          "Zero structural damage claims across 24km of urban drives, verified by independent survey.",
        icon: ShieldCheck,
      },
      {
        title: "Live instrumentation",
        description:
          "Automated monitoring reports settlement against trigger levels every fifteen minutes.",
        icon: Cpu,
      },
      {
        title: "Continuous advance",
        description:
          "Average TBM utilisation of 68% in saturated ground, above the international benchmark for comparable conditions.",
        icon: Gauge,
      },
    ],
    deliverables: [
      "Ground investigation and geotechnical baseline report",
      "Settlement prediction and damage assessment",
      "Instrumentation and monitoring regime",
      "Segment supply and lining design",
      "Compensation grouting scheme",
      "Tunnel fit-out, M&E and commissioning",
    ],
    stats: [
      { label: "Tunnel driven", value: "24 km" },
      { label: "Shafts sunk", value: "68" },
      { label: "TBM utilisation", value: "68%" },
    ],
    faqs: [
      {
        question: "How do you protect buildings above a drive?",
        answer:
          "Where record drawings do not exist — which in much of Dhaka they do not — we survey every structure by laser scan and intrusive inspection before the drive reaches it. On Metro Line 4 that meant 610 buildings, 84 of which were strengthened pre-emptively rather than monitored and hoped for.",
      },
      {
        question: "What ground conditions can your fleet handle?",
        answer:
          "Our owned fleet covers EPB machines from 6.2m to 9.8m, configured for the saturated soft alluvium that underlies most Bangladeshi cities. We have driven through Dhaka clay, silt and water-bearing sand lenses with the face permanently below groundwater.",
      },
      {
        question: "Do you self-perform the ground treatment?",
        answer:
          "Yes. Grouting, liquefaction mitigation and dewatering are delivered by our own geotechnical specialists, which means the treatment design responds to what the TBM is actually seeing rather than to a subcontractor's fixed scope.",
      },
    ],
  },
  {
    slug: "marine-and-ports",
    title: "Marine & Ports",
    shortTitle: "Marine & Ports",
    icon: Ship,
    tagline: "Building where the tide sets the programme",
    summary:
      "Deep-water quays, breakwaters, reclamation and offshore foundations delivered from our own marine fleet.",
    description: [
      "Marine construction on the Bay of Bengal compresses everything difficult about civil engineering into a season. Meghna operates an owned fleet of jack-up barges, cutter suction dredgers and heavy-lift pontoons, so our programme is governed by weather rather than by charter availability.",
      "We have reclaimed 1,240 hectares and constructed 26 kilometres of quay wall and river training works. Cyclone return-period loading, not normal operating conditions, governs the design of everything we build on this coast.",
    ],
    image: "/images/services/marine.svg",
    capabilities: [
      {
        title: "Deep-water quay walls",
        description:
          "Combi-wall, blockwork and open-piled berths for post-Panamax and ULCV operation.",
      },
      {
        title: "Breakwaters & coastal defence",
        description:
          "Rubble mound and CC block armour designed against 1-in-200-year cyclone surge and wave climate.",
      },
      {
        title: "Land reclamation",
        description:
          "Hydraulic fill, vertical drains and vibro-compaction with settlement monitoring to closure.",
      },
      {
        title: "Offshore foundations",
        description:
          "Monopile and jacket installation designed for cyclone return-period loading.",
      },
    ],
    benefits: [
      {
        title: "Owned marine fleet",
        description:
          "No charter dependency — vessels mobilise to our programme, not to the spot market.",
        icon: Ship,
      },
      {
        title: "Hydrodynamically verified",
        description:
          "Storm surge and wave modelling on every coastal and river training scheme.",
        icon: Waves,
      },
      {
        title: "Environmental control",
        description:
          "Silt curtains, turbidity monitoring and bubble curtains protect hilsa and river dolphin habitat.",
        icon: Leaf,
      },
    ],
    deliverables: [
      "Bathymetric and geophysical survey",
      "Hydrodynamic and wave climate modelling",
      "Dredging and reclamation method statement",
      "Quay wall and mooring design",
      "Environmental monitoring plan",
      "Berth trials and operational handover",
    ],
    stats: [
      { label: "Quay & river training", value: "26 km" },
      { label: "Land reclaimed", value: "1,240 ha" },
      { label: "Marine vessels", value: "19" },
    ],
    faqs: [
      {
        question: "Do you own your marine plant?",
        answer:
          "We own 19 vessels including three jack-up barges, two cutter suction dredgers and a 1,200-tonne heavy-lift pontoon. Owning the fleet is why our marine programmes hold their dates across a season that only opens twice a year.",
      },
      {
        question: "How do you protect marine ecology?",
        answer:
          "Every scheme runs an environmental impact assessment under DoE clearance, with silt curtains, continuous turbidity monitoring and seasonal restrictions around hilsa spawning and dolphin migration windows.",
      },
      {
        question: "Can you work in remote locations?",
        answer:
          "Yes. At Matarbari we mobilised a self-sufficient marine spread — accommodation, batching and fuel bunkering — onto a coast with no existing port infrastructure, under a cyclone protocol with a 72-hour evacuation trigger.",
      },
    ],
  },
  {
    slug: "water-and-energy",
    title: "Water & Energy",
    shortTitle: "Water & Energy",
    icon: Droplets,
    tagline: "Critical utilities built to run for generations",
    summary:
      "Dams, treatment works, pumping stations, transmission networks and renewable generation infrastructure.",
    description: [
      "Water and energy assets are judged on availability, not on handover. Meghna builds the civil infrastructure utilities depend on — treatment works, pumping stations, embankments, substations and renewable generation — with commissioning support that continues well past practical completion.",
      "In a country where surface water carries 2,000 NTU through the monsoon and land for solar is scarce enough to be the binding constraint, process design has to start from local conditions rather than from a standard template.",
    ],
    image: "/images/services/water-energy.svg",
    capabilities: [
      {
        title: "Dams & impounding reservoirs",
        description:
          "Embankment dams, polders, flood embankments and river training with spillway and outlet works.",
      },
      {
        title: "Water & wastewater treatment",
        description:
          "Full process civils, MEICA integration and commissioning to regulatory standard.",
      },
      {
        title: "Transmission & distribution",
        description:
          "Substation civils, cable tunnels, tower foundations and pipeline corridors.",
      },
      {
        title: "Renewable generation",
        description:
          "Offshore wind foundations, flood-resilient solar balance of plant and pumped storage civils.",
      },
    ],
    benefits: [
      {
        title: "Operational resilience",
        description:
          "Redundancy and maintenance access designed in from tender stage, not retrofitted.",
        icon: ShieldCheck,
      },
      {
        title: "Commissioning support",
        description:
          "Process engineers remain on site through the first full operating cycle after handover.",
        icon: Layers,
      },
      {
        title: "Regulatory compliance",
        description:
          "Drinking water, dam safety and grid connection standards evidenced and audited.",
        icon: HardHat,
      },
    ],
    deliverables: [
      "Process and hydraulic design review",
      "Dam safety and DoE clearance liaison",
      "Civil, structural and MEICA integration",
      "Factory and site acceptance testing",
      "Operations and maintenance documentation",
      "Post-handover performance monitoring",
    ],
    stats: [
      { label: "Treatment capacity", value: "1.4M m³/d" },
      { label: "Embankments & polders", value: "340 km" },
      { label: "Renewable capacity", value: "1.6 GW" },
    ],
    faqs: [
      {
        question: "Are you pre-qualified with the utilities?",
        answer:
          "We are pre-qualified with Dhaka WASA, Chattogram WASA, BWDB, BPDB and PGCB, and have delivered contracts financed by the World Bank, ADB, JICA and the Government of Bangladesh.",
      },
      {
        question: "How is commissioning handled?",
        answer:
          "Our process engineers remain embedded on site through the first full operating cycle, which typically means three to six months beyond practical completion at no additional cost under our standard terms.",
      },
      {
        question: "What renewable experience do you have?",
        answer:
          "1.6 GW of installed capacity across offshore wind foundations, flood-resilient utility-scale solar and the country’s first pumped storage scheme.",
      },
    ],
  },
  {
    slug: "industrial-and-buildings",
    title: "Industrial & Buildings",
    shortTitle: "Industrial",
    icon: Building2,
    tagline: "Complex facilities where tolerance is measured in millimetres",
    summary:
      "Advanced manufacturing plants, data centres, logistics hubs and civic buildings delivered to operational standard.",
    description: [
      "Industrial facilities carry engineering demands that ordinary construction does not: vibration-sensitive floor slabs, cleanroom envelopes, high-density power distribution and process integration that has to work on day one.",
      "Meghna delivers these buildings as engineered systems rather than as shells. Structure, envelope, services and process are coordinated in a single federated model, clash-resolved before mobilisation, and commissioned against the operator's performance criteria — including the on-site generation that makes a tenant's production date credible when grid supply is still developing.",
    ],
    image: "/images/services/industrial.svg",
    capabilities: [
      {
        title: "Advanced manufacturing",
        description:
          "Readymade garment and light engineering facilities with compliant fire and egress design.",
      },
      {
        title: "Data centres",
        description:
          "Tier III facilities with N+1 power, cooling and structured containment.",
      },
      {
        title: "Logistics & distribution",
        description:
          "High-bay warehousing, superflat floors to FM2 and automated handling integration.",
      },
      {
        title: "Civic & institutional",
        description:
          "Hospitals, transport interchanges and education campuses under occupied-site constraints.",
      },
    ],
    benefits: [
      {
        title: "Model-first delivery",
        description:
          "Federated BIM with clash resolution complete before the first delivery arrives on site.",
        icon: Layers,
      },
      {
        title: "Operational readiness",
        description:
          "Soft landings approach with operator training delivered before handover, not after.",
        icon: Compass,
      },
      {
        title: "Programme certainty",
        description:
          "94% of industrial facilities handed over on or ahead of contractual completion date.",
        icon: Clock,
      },
    ],
    deliverables: [
      "Federated BIM model and clash report",
      "Structural, envelope and services coordination",
      "Vibration and floor flatness verification",
      "Integrated systems testing",
      "Soft landings and operator training",
      "Digital twin and asset data handover",
    ],
    stats: [
      { label: "Floor area delivered", value: "2.8M m²" },
      { label: "On-time handover", value: "94%" },
      { label: "On-site generation", value: "94 MW" },
    ],
    faqs: [
      {
        question: "Can you deliver on an occupied site?",
        answer:
          "Regularly. We have extended live hospitals, railway stations and manufacturing plants without interrupting operations, using segregated logistics routes, phased possession plans and temporary arrangements sized for peak demand rather than average demand.",
      },
      {
        question: "How do you guarantee floor flatness?",
        answer:
          "Superflat slabs are laser-screeded and surveyed to FM2 or better, with results issued within 48 hours of pour so any remediation happens before the racking contractor mobilises.",
      },
      {
        question: "What does soft landings mean in practice?",
        answer:
          "The operations team joins design reviews at concept stage, operator training runs before handover, and our commissioning engineers remain on site through a full monsoon cycle afterwards.",
      },
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
