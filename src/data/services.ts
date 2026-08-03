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
      "Meridian has delivered 143 major crossings since 1974, from 60-metre highway overpasses to 1.4-kilometre cable-stayed estuary spans. Our bridge division combines in-house design capability with self-performed heavy civils, which removes the interface risk that typically sits between designer and contractor.",
      "Every crossing is modelled in a federated BIM environment before a single pile is driven. Erection sequences, temporary works and camber profiles are simulated against staged construction analysis, so what is built on site matches what was signed off in the model.",
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
          "Launched steel and concrete decks over live rail, water and environmentally sensitive corridors.",
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
      { label: "Longest span", value: "1,420 m" },
      { label: "Design life", value: "120 yrs" },
    ],
    faqs: [
      {
        question: "Do you carry out your own bridge design?",
        answer:
          "Yes. Our in-house structures team of 84 engineers holds design authority across Eurocodes, AASHTO LRFD and BS standards, and we appoint an independent Category III checker on every major crossing.",
      },
      {
        question: "How do you build over live infrastructure?",
        answer:
          "We plan possessions around the asset owner's operating windows and pre-assemble offsite. On the Elbe Nord viaduct we launched 4,800 tonnes of deck across an active freight corridor using six night possessions of four hours each.",
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
      "Linear infrastructure is won or lost on logistics. Meridian's highways and rail division has completed 2,180 kilometres of carriageway and 640 kilometres of track, the majority of it beside traffic that never stopped running.",
      "We plan at the level of the individual shift. Materials, plant, possessions and workforce are sequenced against a four-dimensional programme, and the traffic management design is treated as a permanent works discipline rather than an afterthought.",
    ],
    image: "/images/services/highways.svg",
    capabilities: [
      {
        title: "Motorway widening & smart corridors",
        description:
          "Lane gain under live traffic with gantries, MIDAS loops and variable mandatory signalling.",
      },
      {
        title: "Grade-separated interchanges",
        description:
          "Multi-level junctions, ramp structures and retaining systems built within constrained footprints.",
      },
      {
        title: "Heavy & light rail alignment",
        description:
          "Formation, ballasted and slab track, OLE foundations, and station box civils.",
      },
      {
        title: "Pavement engineering",
        description:
          "Long-life flexible and rigid pavements, warm-mix asphalt, and full-depth recycling.",
      },
    ],
    benefits: [
      {
        title: "Traffic kept flowing",
        description:
          "Average corridor availability of 96.4% across live-carriageway schemes over the past five years.",
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
          "Full-depth recycling and warm-mix asphalt cut pavement carbon by an average of 31%.",
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
      { label: "Track laid", value: "640 km" },
      { label: "Corridor availability", value: "96.4%" },
    ],
    faqs: [
      {
        question: "How do you minimise disruption on live corridors?",
        answer:
          "We front-load the traffic management design, work to narrow-lane running rather than closures wherever the safety case allows, and concentrate high-impact activity into pre-agreed weekend possessions communicated to road users four weeks ahead.",
      },
      {
        question: "Can you deliver rail and highway scope on one contract?",
        answer:
          "Yes, and we frequently do. Interface points between road and rail are where most programmes slip, so holding both scopes under a single delivery team removes the coordination risk entirely.",
      },
      {
        question: "What is your approach to earthworks balance?",
        answer:
          "We model cut and fill at design stage to target site-won material reuse above 90%, which reduces both haulage cost and the carbon associated with imported fill.",
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
      "Underground work is unforgiving: the ground gives one opportunity to get it right. Meridian's tunnelling division has driven 96 kilometres of bored tunnel and sunk 214 shafts, much of it beneath occupied buildings and heritage structures.",
      "Our ground movement modelling is validated against real-time instrumentation, with automated total stations and fibre-optic strain monitoring reporting into a live dashboard. Where predicted settlement approaches trigger levels, compensation grouting is deployed before damage occurs, not after.",
    ],
    image: "/images/services/tunnelling.svg",
    capabilities: [
      {
        title: "TBM drives",
        description:
          "EPB and slurry machines from 3.2m to 15.6m diameter, including mixed-face and high-pressure ground.",
      },
      {
        title: "Sprayed concrete lining",
        description:
          "SCL caverns, cross-passages and junctions with fibre-reinforced and steel-mesh systems.",
      },
      {
        title: "Shafts & deep basements",
        description:
          "Diaphragm walls, secant piles and caisson sinking to depths beyond 65 metres.",
      },
      {
        title: "Ground treatment",
        description:
          "Jet grouting, compensation grouting, ground freezing and dewatering design.",
      },
    ],
    benefits: [
      {
        title: "Assets protected",
        description:
          "Zero category 2 building damage across 96km of urban drives, verified by independent survey.",
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
          "Average TBM utilisation of 71%, roughly ten points above the industry benchmark.",
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
      { label: "Tunnel driven", value: "96 km" },
      { label: "Shafts sunk", value: "214" },
      { label: "TBM utilisation", value: "71%" },
    ],
    faqs: [
      {
        question: "How do you protect buildings above a drive?",
        answer:
          "We complete a staged damage assessment before work starts, instrument every structure inside the settlement contour, and hold compensation grouting arrays on standby beneath sensitive assets so we can inject before movement reaches trigger level.",
      },
      {
        question: "What ground conditions can your fleet handle?",
        answer:
          "Our owned fleet covers EPB and slurry machines from 3.2m to 15.6m. We have driven through London Clay, Chalk Marl, mixed-face glacial till and water-bearing sands at up to 6 bar face pressure.",
      },
      {
        question: "Do you self-perform the ground treatment?",
        answer:
          "Yes. Grouting, freezing and dewatering are delivered by our own geotechnical specialists, which means the treatment design responds to what the TBM is actually seeing rather than to a subcontractor's fixed scope.",
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
      "Marine construction compresses everything difficult about civil engineering into a tidal window. Meridian operates an owned fleet of jack-up barges, cutter suction dredgers and heavy-lift pontoons, which means our programme is governed by weather rather than by charter availability.",
      "We have reclaimed 1,240 hectares and constructed 38 kilometres of quay wall and breakwater, with hydrodynamic modelling on every scheme to confirm that what we build will still be there in eighty years.",
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
          "Rubble mound, caisson and accropode armour designed against 1-in-200-year wave climate.",
      },
      {
        title: "Land reclamation",
        description:
          "Hydraulic fill, vertical drains and vibro-compaction with settlement monitoring to closure.",
      },
      {
        title: "Offshore foundations",
        description:
          "Monopile, jacket and gravity base installation for fixed offshore wind.",
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
          "Physical and numerical wave modelling on every breakwater and coastal defence scheme.",
        icon: Waves,
      },
      {
        title: "Environmental control",
        description:
          "Silt curtains, turbidity monitoring and bubble curtains protect sensitive marine habitat.",
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
      { label: "Quay & breakwater", value: "38 km" },
      { label: "Land reclaimed", value: "1,240 ha" },
      { label: "Marine vessels", value: "26" },
    ],
    faqs: [
      {
        question: "Do you own your marine plant?",
        answer:
          "We own 26 vessels including four jack-up barges, two cutter suction dredgers and a 1,600-tonne heavy-lift pontoon. Owning the fleet is why our marine programmes hold their dates.",
      },
      {
        question: "How do you protect marine ecology?",
        answer:
          "Every scheme runs a habitat regulations assessment, with silt curtains, continuous turbidity monitoring and seasonal working restrictions around spawning and migration windows.",
      },
      {
        question: "Can you work in remote locations?",
        answer:
          "Yes. We have delivered port infrastructure in locations with no existing landside access, mobilising a self-sufficient marine spread including accommodation, batching and fuel bunkering.",
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
      "Water and energy assets are judged on availability, not on handover. Meridian builds the civil infrastructure that utilities depend on — impounding dams, treatment works, pumping stations, substations and renewable generation — with commissioning support that continues well past practical completion.",
      "Our process engineering team works alongside the civils delivery team from tender onwards, so buildability, maintenance access and operational resilience are designed in rather than negotiated later.",
    ],
    image: "/images/services/water-energy.svg",
    capabilities: [
      {
        title: "Dams & impounding reservoirs",
        description:
          "RCC, embankment and concrete gravity dams with spillway and outlet works.",
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
          "Onshore and offshore wind foundations, solar balance of plant, and pumped storage civils.",
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
          "Reservoir safety, drinking water and grid connection standards evidenced and audited.",
        icon: HardHat,
      },
    ],
    deliverables: [
      "Process and hydraulic design review",
      "Reservoir safety engineer liaison",
      "Civil, structural and MEICA integration",
      "Factory and site acceptance testing",
      "Operations and maintenance documentation",
      "Post-handover performance monitoring",
    ],
    stats: [
      { label: "Treatment capacity", value: "4.2M m³/d" },
      { label: "Dams delivered", value: "17" },
      { label: "Renewable capacity", value: "3.1 GW" },
    ],
    faqs: [
      {
        question: "Do you work under water industry frameworks?",
        answer:
          "We hold positions on six utility capital delivery frameworks across the UK, Germany and the Gulf, covering AMP-cycle water investment and grid reinforcement programmes.",
      },
      {
        question: "How is commissioning handled?",
        answer:
          "Our process engineers remain embedded on site through the first full operating cycle, which typically means three to six months beyond practical completion at no additional cost under our standard terms.",
      },
      {
        question: "What renewable experience do you have?",
        answer:
          "3.1 GW of installed capacity across offshore wind foundations, onshore wind civils, utility-scale solar balance of plant and two pumped storage schemes.",
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
      "Meridian delivers these buildings as engineered systems rather than as shells. Structure, envelope, services and process are coordinated in a single federated model, clash-resolved before mobilisation, and commissioned against the operator's performance criteria.",
    ],
    image: "/images/services/industrial.svg",
    capabilities: [
      {
        title: "Advanced manufacturing",
        description:
          "Vibration-controlled slabs, cleanroom envelopes and process utility distribution.",
      },
      {
        title: "Data centres",
        description:
          "Tier III and Tier IV facilities with N+1 power, cooling and structured containment.",
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
      { label: "Floor area delivered", value: "6.4M m²" },
      { label: "On-time handover", value: "94%" },
      { label: "Data centre capacity", value: "820 MW" },
    ],
    faqs: [
      {
        question: "Can you deliver on an occupied site?",
        answer:
          "Regularly. We have extended live hospitals, airports and manufacturing plants without interrupting operations, using segregated logistics routes, acoustic mitigation and phased possession plans agreed with the operator.",
      },
      {
        question: "How do you guarantee floor flatness?",
        answer:
          "Superflat slabs are laser-screeded and surveyed to FM2 or better, with results issued within 48 hours of pour so any remediation happens before the racking contractor mobilises.",
      },
      {
        question: "What does soft landings mean in practice?",
        answer:
          "The facilities team joins design reviews from RIBA Stage 3, operator training runs before handover, and our commissioning engineers remain on site for a full seasonal cycle afterwards.",
      },
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
