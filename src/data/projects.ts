import type { Project, ProjectSector } from "@/types";

export const projectSectors: ProjectSector[] = [
  "Bridges & Viaducts",
  "Highways & Rail",
  "Tunnelling",
  "Marine & Ports",
  "Water & Energy",
  "Industrial & Buildings",
];

const gallery = (base: string, alt: string) => [
  {
    src: `/images/projects/${base}-01.svg`,
    alt: `${alt} — aerial view of the completed works`,
    caption: "Aerial survey flight, final inspection week",
    width: 1600,
    height: 1067,
  },
  {
    src: `/images/projects/${base}-02.svg`,
    alt: `${alt} — primary structure under construction`,
    caption: "Primary structure at 60% completion",
    width: 1600,
    height: 1067,
  },
  {
    src: `/images/projects/${base}-03.svg`,
    alt: `${alt} — site engineers reviewing setting-out data`,
    caption: "Setting-out verification against the federated model",
    width: 1200,
    height: 1500,
  },
  {
    src: `/images/projects/${base}-04.svg`,
    alt: `${alt} — heavy plant operating on site`,
    caption: "Heavy lift operation during the main erection sequence",
    width: 1600,
    height: 1067,
  },
  {
    src: `/images/projects/${base}-05.svg`,
    alt: `${alt} — detail of the finished structural interface`,
    caption: "Structural interface detail at handover",
    width: 1200,
    height: 1500,
  },
  {
    src: `/images/projects/${base}-06.svg`,
    alt: `${alt} — the asset in operational service`,
    caption: "The asset in operational service",
    width: 1600,
    height: 1067,
  },
];

export const projects: Project[] = [
  {
    slug: "north-estuary-crossing",
    title: "North Estuary Crossing",
    client: "Department for Transport",
    sector: "Bridges & Viaducts",
    status: "Completed",
    location: "Humber Estuary",
    country: "United Kingdom",
    coordinates: [53.7076, -0.4504],
    year: "2024",
    durationMonths: 52,
    contractValueUsd: 1_420_000_000,
    summary:
      "A 1,420-metre cable-stayed crossing carrying six lanes and a segregated active travel corridor across a tidal estuary with 9-metre range.",
    overview: [
      "The North Estuary Crossing replaces a 1960s structure that had reached the end of its serviceable life while carrying 78,000 vehicles a day. Meridian delivered the replacement on an alignment 240 metres downstream, allowing the existing crossing to remain fully open throughout construction.",
      "The main span is a 620-metre cable-stayed structure flanked by balanced-cantilever approach viaducts. Two 187-metre pylons were slipformed continuously over eleven days each, and the composite deck was erected by a pair of purpose-built form travellers working symmetrically from each pylon.",
      "The scheme included 4.1 kilometres of approach highway, a grade-separated interchange at the southern landfall, and the demolition and marine recycling of the original crossing following changeover.",
    ],
    heroImage: "/images/projects/north-estuary-hero.svg",
    thumbnail: "/images/projects/north-estuary-thumb.svg",
    stats: [
      { label: "Main span", value: "620 m" },
      { label: "Total length", value: "1,420 m" },
      { label: "Pylon height", value: "187 m" },
      { label: "Deck area", value: "43,600 m²" },
    ],
    technologies: [
      "Cable-stayed superstructure",
      "Balanced cantilever erection",
      "Continuous pylon slipforming",
      "Federated BIM (ISO 19650)",
      "Structural health monitoring",
      "Low-carbon CEM III concrete",
      "Automated total station survey",
      "Marine piling from jack-up barge",
    ],
    challenges: [
      {
        title: "A 9-metre tidal range",
        body: "Marine access to the pier locations was available for roughly five hours in every twelve, and the estuary carries a shipping channel that could not be closed. Conventional floating plant would have lost more than half of its available working time to tide and traffic.",
      },
      {
        title: "Soft alluvium over chalk",
        body: "Ground investigation identified up to 34 metres of soft alluvial deposits above the chalk bearing stratum, with significant lateral variability between boreholes. Pile design based on the baseline report alone carried unacceptable settlement risk.",
      },
      {
        title: "Overwintering bird populations",
        body: "The estuary is a designated Special Protection Area supporting internationally significant overwintering wader populations. Percussive piling was prohibited between October and March.",
      },
    ],
    solutions: [
      {
        title: "Jack-up platforms replaced floating plant",
        body: "Four jack-up barges were legged down onto the seabed at each pier location, converting a tide-dependent marine operation into a stable land-based one. Available working hours rose from 42% to 91% of each shift.",
      },
      {
        title: "Every pile instrumented and verified",
        body: "All 96 main foundation piles were instrumented with thermal integrity profiling and cross-hole sonic logging. Two piles were extended by 4 metres following real-time analysis, avoiding a settlement problem that would have surfaced years after handover.",
      },
      {
        title: "Silent piling through the bird season",
        body: "Percussive driving was replaced with rotary bored piling and press-in techniques during the ecological window, supported by continuous noise and vibration monitoring. The scheme recorded no ecological breach across 52 months.",
      },
    ],
    phases: [
      {
        phase: "Site establishment & marine mobilisation",
        period: "Q1 2020 – Q3 2020",
        description:
          "Compound construction, jetty installation, and mobilisation of the marine spread including four jack-up barges.",
      },
      {
        phase: "Foundations & substructure",
        period: "Q3 2020 – Q4 2021",
        description:
          "96 bored piles to 58m depth, pile caps cast within cofferdams, and pier shaft construction to deck level.",
      },
      {
        phase: "Pylon construction",
        period: "Q1 2022 – Q4 2022",
        description:
          "Continuous slipforming of both 187m pylons, followed by cross-beam construction and stay anchorage installation.",
      },
      {
        phase: "Deck erection & stay stressing",
        period: "Q1 2023 – Q2 2024",
        description:
          "Symmetrical form-traveller advance from each pylon, stay cable installation and computer-controlled stressing to closure.",
      },
      {
        phase: "Approach works & interchange",
        period: "Q2 2023 – Q3 2024",
        description:
          "4.1km of approach carriageway, grade-separated interchange, drainage and gantry installation.",
      },
      {
        phase: "Testing, changeover & demolition",
        period: "Q3 2024 – Q4 2024",
        description:
          "Static and dynamic load testing, traffic changeover, and marine demolition and recycling of the original crossing.",
      },
    ],
    gallery: gallery("north-estuary", "North Estuary Crossing"),
    beforeAfter: {
      before: "/images/projects/north-estuary-before.svg",
      after: "/images/projects/north-estuary-after.svg",
      label: "Original 1960s crossing, replaced in Q4 2024",
    },
    featured: true,
    awards: [
      "ICE Infrastructure Project of the Year 2025",
      "IStructE Award for Long-Span Structures 2025",
    ],
  },
  {
    slug: "capital-metro-line-4",
    title: "Capital Metro Line 4",
    client: "Metropolitan Transit Authority",
    sector: "Tunnelling",
    status: "In Progress",
    location: "Central District",
    country: "Germany",
    coordinates: [52.52, 13.405],
    year: "2027",
    durationMonths: 74,
    contractValueUsd: 2_180_000_000,
    summary:
      "Twin 8.4-kilometre bored tunnels and six deep station boxes beneath a dense historic city centre with a 12-millimetre settlement limit.",
    overview: [
      "Line 4 extends the metro network through the historic core, connecting the central interchange to the eastern districts. Meridian is delivering the twin running tunnels, six station boxes, eleven cross-passages and all associated ground treatment.",
      "The alignment passes beneath 340 buildings, including 62 listed structures, at depths between 18 and 41 metres. The contractual settlement limit at ground level is 12 millimetres, with a 6-millimetre trigger requiring intervention.",
      "Two 9.8-metre EPB machines were launched from the eastern portal in staggered sequence, with a compensation grouting array installed beneath the most sensitive heritage cluster before either drive commenced.",
    ],
    heroImage: "/images/projects/metro-line-4-hero.svg",
    thumbnail: "/images/projects/metro-line-4-thumb.svg",
    stats: [
      { label: "Twin tunnel", value: "8.4 km" },
      { label: "TBM diameter", value: "9.8 m" },
      { label: "Station boxes", value: "6" },
      { label: "Settlement limit", value: "12 mm" },
    ],
    technologies: [
      "EPB tunnel boring machines",
      "Compensation grouting arrays",
      "Automated total station monitoring",
      "Fibre-optic strain sensing",
      "Diaphragm wall station boxes",
      "Sprayed concrete cross-passages",
      "Precast segmental lining",
      "Real-time settlement dashboard",
    ],
    challenges: [
      {
        title: "340 buildings inside the settlement contour",
        body: "The alignment passes directly beneath a dense historic quarter, including 62 listed structures with shallow masonry footings and no measurable tolerance for differential movement.",
      },
      {
        title: "Mixed-face geology",
        body: "The drive crosses from stiff clay into water-bearing sand and gravel over a 600-metre transition, with the interface running diagonally across the tunnel face for much of that length.",
      },
      {
        title: "No available surface laydown",
        body: "Station box sites average 2,800 square metres in a city centre where road closures are restricted to eight-hour night windows. Conventional logistics sequencing was not viable.",
      },
    ],
    solutions: [
      {
        title: "Predictive rather than reactive grouting",
        body: "Compensation grouting arrays were installed and pressure-tested ahead of the drive. Injection is triggered by predicted settlement from the TBM's advancing position, not by measured movement, so correction happens before the structure above ever responds.",
      },
      {
        title: "Face pressure managed shift by shift",
        body: "A geotechnical engineer sits alongside the TBM operator through the mixed-face transition, adjusting face pressure and conditioning against forward probe data. Volume loss has been held below 0.4% across the transition zone.",
      },
      {
        title: "Just-in-time logistics from a remote hub",
        body: "A consolidation centre 14 kilometres from site sequences all deliveries into pre-booked eight-hour night slots. Site storage requirements fell by 68% and delivery-related street disruption by 74%.",
      },
    ],
    phases: [
      {
        phase: "Enabling works & utility diversion",
        period: "Q2 2022 – Q1 2023",
        description:
          "Diversion of 34km of buried services, archaeological watching brief and compound establishment.",
      },
      {
        phase: "Station box construction",
        period: "Q4 2022 – Q3 2025",
        description:
          "Diaphragm walling, top-down excavation and permanent works for six deep station boxes.",
      },
      {
        phase: "Ground treatment",
        period: "Q1 2023 – Q4 2023",
        description:
          "Compensation grouting arrays, jet grouting at cross-passage locations and dewatering installation.",
      },
      {
        phase: "TBM drives",
        period: "Q3 2023 – Q2 2026",
        description:
          "Staggered launch and advance of two 9.8m EPB machines with continuous settlement monitoring.",
      },
      {
        phase: "Cross-passages & secondary lining",
        period: "Q2 2025 – Q3 2026",
        description:
          "Eleven SCL cross-passages, secondary lining, and tunnel drainage installation.",
      },
      {
        phase: "Fit-out, systems & commissioning",
        period: "Q1 2026 – Q4 2027",
        description:
          "Track, traction power, signalling, ventilation and station fit-out through to trial operation.",
      },
    ],
    gallery: gallery("metro-line-4", "Capital Metro Line 4"),
    featured: true,
    awards: ["ITA Tunnelling Award — Safety Initiative of the Year 2025"],
  },
  {
    slug: "gulf-container-terminal",
    title: "Gulf Container Terminal",
    client: "Gulf Ports Authority",
    sector: "Marine & Ports",
    status: "Completed",
    location: "Jebel Ali Corridor",
    country: "United Arab Emirates",
    coordinates: [25.0119, 55.0617],
    year: "2023",
    durationMonths: 41,
    contractValueUsd: 980_000_000,
    summary:
      "A 2.4-kilometre deep-water quay and 168-hectare reclamation delivering ULCV capacity for 4.1 million TEU annually.",
    overview: [
      "The terminal adds ULCV-capable capacity to one of the world's busiest transhipment corridors. Meridian delivered 168 hectares of reclamation, 2.4 kilometres of combi-wall quay at minus 18 metres chart datum, and the full landside pavement and utility network.",
      "Reclamation used 21 million cubic metres of hydraulic fill, ground-improved by vibro-compaction and monitored to residual settlement below 25 millimetres before pavement construction was permitted to begin.",
      "The quay was designed for eight ship-to-shore cranes with a 24-container outreach, and the crane rail was surveyed to a straightness tolerance of ±3 millimetres over its full length.",
    ],
    heroImage: "/images/projects/gulf-terminal-hero.svg",
    thumbnail: "/images/projects/gulf-terminal-thumb.svg",
    stats: [
      { label: "Quay length", value: "2,400 m" },
      { label: "Reclamation", value: "168 ha" },
      { label: "Design depth", value: "-18 m CD" },
      { label: "Annual capacity", value: "4.1M TEU" },
    ],
    technologies: [
      "Combi-wall quay construction",
      "Cutter suction dredging",
      "Vibro-compaction ground improvement",
      "Hydraulic fill placement",
      "Settlement monitoring instrumentation",
      "Heavy-duty concrete block pavement",
      "Cathodic protection systems",
      "Crane rail precision survey",
    ],
    challenges: [
      {
        title: "Residual settlement risk",
        body: "168 hectares of hydraulic fill over compressible marine deposits presented a settlement profile that, left untreated, would have caused pavement failure and crane rail misalignment within five years of operation.",
      },
      {
        title: "Live adjacent berth operations",
        body: "The adjoining terminal continued handling 2.8 million TEU annually throughout construction, with dredging and piling both capable of disrupting vessel movements.",
      },
      {
        title: "Summer working temperatures",
        body: "Ambient temperatures above 48°C for four months a year threatened both concrete quality and workforce safety on a programme with no float for seasonal shutdown.",
      },
    ],
    solutions: [
      {
        title: "Improve, monitor, then verify",
        body: "Vibro-compaction on a 3.2-metre triangular grid was followed by an eighteen-month monitoring period using 340 settlement plates and 62 piezometers. Pavement construction was released area by area only once residual settlement fell below 25mm.",
      },
      {
        title: "Coordinated marine traffic windows",
        body: "A joint operations room with the adjacent terminal sequenced all dredging and piling against the published vessel schedule. The neighbouring terminal recorded zero construction-attributable berth delays over 41 months.",
      },
      {
        title: "Night pours and ice-chilled concrete",
        body: "All structural concrete was placed between 20:00 and 06:00 using ice-substituted batching and liquid nitrogen cooling, holding placement temperature below 32°C. Heat stress incidents fell to zero in the final two summers.",
      },
    ],
    phases: [
      {
        phase: "Dredging & reclamation",
        period: "Q1 2020 – Q2 2021",
        description:
          "Capital dredging of the approach channel and placement of 21 million m³ of hydraulic fill.",
      },
      {
        phase: "Ground improvement",
        period: "Q4 2020 – Q3 2021",
        description:
          "Vibro-compaction across 168 hectares with instrumentation installation and monitoring commencement.",
      },
      {
        phase: "Quay wall construction",
        period: "Q2 2021 – Q4 2022",
        description:
          "Combi-wall driving, anchor wall installation, capping beam and fender system construction.",
      },
      {
        phase: "Landside infrastructure",
        period: "Q1 2022 – Q2 2023",
        description:
          "Pavement, drainage, utilities, reefer racks, gate complex and terminal buildings.",
      },
      {
        phase: "Crane rail & equipment interface",
        period: "Q3 2022 – Q3 2023",
        description:
          "Crane rail installation to ±3mm straightness, power trench and equipment commissioning support.",
      },
      {
        phase: "Trials & operational handover",
        period: "Q3 2023 – Q4 2023",
        description:
          "Berth trials, first vessel call and phased operational handover to the terminal operator.",
      },
    ],
    gallery: gallery("gulf-terminal", "Gulf Container Terminal"),
    beforeAfter: {
      before: "/images/projects/gulf-terminal-before.svg",
      after: "/images/projects/gulf-terminal-after.svg",
      label: "Open water to operational terminal, 2020–2023",
    },
    featured: true,
    awards: ["Middle East Ports Project of the Year 2024"],
  },
  {
    slug: "alpine-corridor-a9",
    title: "Alpine Corridor A9 Upgrade",
    client: "National Roads Directorate",
    sector: "Highways & Rail",
    status: "Completed",
    location: "Tyrol Region",
    country: "Austria",
    coordinates: [47.2692, 11.4041],
    year: "2023",
    durationMonths: 38,
    contractValueUsd: 640_000_000,
    summary:
      "68 kilometres of mountain motorway widened to three lanes with 14 replacement structures, delivered without closing the corridor.",
    overview: [
      "The A9 is the primary freight route through the eastern Alps, carrying 4,200 heavy goods vehicles daily with no viable diversion. Meridian widened 68 kilometres to three lanes in each direction and replaced fourteen structures that had reached the end of their design life.",
      "Work was carried out under contraflow with a minimum of two lanes open in each direction at all times. Structure replacements were executed as full-weekend possessions using self-propelled modular transporters to roll out the old deck and roll in the new.",
      "The scheme incorporated 22 kilometres of avalanche protection galleries and rockfall netting, and used full-depth pavement recycling to cut imported aggregate by 71%.",
    ],
    heroImage: "/images/projects/alpine-a9-hero.svg",
    thumbnail: "/images/projects/alpine-a9-thumb.svg",
    stats: [
      { label: "Corridor length", value: "68 km" },
      { label: "Structures replaced", value: "14" },
      { label: "Aggregate reused", value: "71%" },
      { label: "Lane availability", value: "97.8%" },
    ],
    technologies: [
      "Self-propelled modular transporters",
      "Full-depth pavement recycling",
      "Warm-mix asphalt",
      "Avalanche protection galleries",
      "Rock anchoring and netting",
      "Contraflow traffic management",
      "Precast parapet systems",
      "Automated slope monitoring",
    ],
    challenges: [
      {
        title: "A freight route with no alternative",
        body: "Closing the A9 would have diverted 4,200 HGVs a day onto valley roads through residential villages. Full closure was politically and practically impossible.",
      },
      {
        title: "A seven-month working season",
        body: "Altitudes above 1,100 metres restricted asphalt and concrete operations to roughly seven months a year, compressing a five-year workload into an effective 26 months of production.",
      },
      {
        title: "Active rockfall exposure",
        body: "Nine kilometres of the corridor sit beneath slopes with a documented rockfall history, creating a live hazard to both the workforce and the traffic passing through the works.",
      },
    ],
    solutions: [
      {
        title: "Deck replacement in 54-hour windows",
        body: "Replacement decks were built offline on temporary staging, then exchanged using SPMTs during single weekend possessions. Each of the fourteen structures was replaced within 54 hours against a 72-hour contractual allowance.",
      },
      {
        title: "Winter work moved offsite",
        body: "Precast parapets, drainage units and bridge decks were manufactured in a covered facility through the winter months, so the short summer season was spent exclusively on operations that could only happen on site.",
      },
      {
        title: "Slope monitoring with automatic closure",
        body: "Radar and geophone arrays on the exposed slopes trigger automatic gantry closure of the affected lanes within eleven seconds of a detected event. The system operated twice during construction and remains in service.",
      },
    ],
    phases: [
      {
        phase: "Survey, design & enabling",
        period: "Q2 2020 – Q4 2020",
        description:
          "LiDAR corridor survey, structural assessment of existing bridges and traffic management design.",
      },
      {
        phase: "Slope stabilisation",
        period: "Q1 2021 – Q4 2021",
        description:
          "Rock anchoring, netting and avalanche gallery construction across nine exposed kilometres.",
      },
      {
        phase: "Structure replacement",
        period: "Q2 2021 – Q3 2022",
        description:
          "Offline deck construction and fourteen SPMT weekend exchange operations.",
      },
      {
        phase: "Widening & pavement",
        period: "Q2 2021 – Q3 2023",
        description:
          "Carriageway widening, full-depth recycling and warm-mix asphalt surfacing across 68km.",
      },
      {
        phase: "Systems & safety",
        period: "Q1 2023 – Q3 2023",
        description:
          "Gantries, variable signalling, slope monitoring integration and lighting installation.",
      },
      {
        phase: "Safety audit & handover",
        period: "Q3 2023 – Q4 2023",
        description:
          "Stage 3 road safety audit, snagging and phased handover to the roads directorate.",
      },
    ],
    gallery: gallery("alpine-a9", "Alpine Corridor A9 Upgrade"),
    featured: true,
  },
  {
    slug: "riverside-water-reclamation",
    title: "Riverside Water Reclamation Works",
    client: "Regional Water Authority",
    sector: "Water & Energy",
    status: "Completed",
    location: "Thames Valley",
    country: "United Kingdom",
    coordinates: [51.4934, -0.3762],
    year: "2024",
    durationMonths: 34,
    contractValueUsd: 410_000_000,
    summary:
      "A 620,000 m³/day treatment works upgrade delivering nutrient removal to the tightest consent standard in the region, built on a live operational site.",
    overview: [
      "The works serves 2.1 million people and had to remain fully compliant throughout a complete process upgrade. Meridian delivered new inlet works, twelve activated sludge lanes, tertiary filtration and a sludge treatment centre with combined heat and power.",
      "The upgrade responds to a tightened discharge consent of 0.25 mg/l total phosphorus, requiring chemical dosing, tertiary membrane filtration and a substantially rebuilt biological stage.",
      "Every tie-in to the live process stream was executed under a temporary bypass, with no consent breach recorded across 34 months of construction on an operational site.",
    ],
    heroImage: "/images/projects/riverside-water-hero.svg",
    thumbnail: "/images/projects/riverside-water-thumb.svg",
    stats: [
      { label: "Treatment capacity", value: "620k m³/d" },
      { label: "Population served", value: "2.1M" },
      { label: "Phosphorus consent", value: "0.25 mg/l" },
      { label: "CHP generation", value: "8.4 MW" },
    ],
    technologies: [
      "Tertiary membrane filtration",
      "Activated sludge process",
      "Anaerobic digestion with CHP",
      "Chemical phosphorus removal",
      "SCADA and telemetry integration",
      "Temporary process bypass systems",
      "Odour control and biofiltration",
      "Digital twin for operations",
    ],
    challenges: [
      {
        title: "The works could never stop",
        body: "A treatment works serving 2.1 million people cannot be taken offline. Every tie-in to the live process stream carried the risk of a consent breach and regulatory action against the client.",
      },
      {
        title: "Deep excavation beside live assets",
        body: "New structures required excavation to 14 metres within four metres of operating tanks whose foundations dated from the 1960s and were poorly documented.",
      },
      {
        title: "Odour in a residential setting",
        body: "The site is bounded on two sides by housing. Opening sludge streams during construction risked odour complaints capable of halting the works under statutory nuisance provisions.",
      },
    ],
    solutions: [
      {
        title: "Bypass before breach",
        body: "Each of the 43 process tie-ins was executed under a purpose-designed temporary bypass, commissioned and proven before the permanent stream was interrupted. The works maintained full compliance for all 34 months.",
      },
      {
        title: "Secant walls and continuous monitoring",
        body: "Deep excavations were retained by secant piled walls, with the adjacent 1960s structures instrumented for tilt and settlement. Movement was held below 4mm against an 8mm trigger.",
      },
      {
        title: "Sealed and scrubbed sludge works",
        body: "All sludge-stream construction was carried out under temporary sealed enclosures with carbon-filtered extraction. The scheme recorded zero substantiated odour complaints across its full duration.",
      },
    ],
    phases: [
      {
        phase: "Enabling & temporary works",
        period: "Q1 2021 – Q3 2021",
        description:
          "Site establishment, temporary bypass design and construction, and service diversions.",
      },
      {
        phase: "Inlet works & primary treatment",
        period: "Q3 2021 – Q2 2022",
        description:
          "New inlet screening, grit removal and primary settlement tank construction.",
      },
      {
        phase: "Biological stage",
        period: "Q1 2022 – Q3 2023",
        description:
          "Twelve activated sludge lanes, blower house, and final settlement tank construction.",
      },
      {
        phase: "Tertiary treatment",
        period: "Q4 2022 – Q1 2024",
        description:
          "Membrane filtration building, chemical dosing facility and UV disinfection.",
      },
      {
        phase: "Sludge treatment & CHP",
        period: "Q2 2022 – Q2 2024",
        description:
          "Anaerobic digesters, gas holder, CHP engines and cake handling facility.",
      },
      {
        phase: "Commissioning & performance testing",
        period: "Q1 2024 – Q3 2024",
        description:
          "Process commissioning, consent verification and twelve-month performance monitoring.",
      },
    ],
    gallery: gallery("riverside-water", "Riverside Water Reclamation Works"),
    awards: ["Water Industry Achievement Award — Capital Project 2025"],
  },
  {
    slug: "meridian-logistics-campus",
    title: "Meridian Logistics Campus",
    client: "Northgate Industrial REIT",
    sector: "Industrial & Buildings",
    status: "Completed",
    location: "Rotterdam Port Zone",
    country: "Netherlands",
    coordinates: [51.9225, 4.4792],
    year: "2024",
    durationMonths: 22,
    contractValueUsd: 285_000_000,
    summary:
      "A 214,000 m² automated distribution campus with superflat floors, 42-metre clear height and full solar canopy, delivered five weeks early.",
    overview: [
      "The campus comprises three automated distribution buildings, a shared gatehouse and 214,000 square metres of covered floor area serving a major European retail network.",
      "Floor flatness governed the entire programme. The automated storage and retrieval systems require FM3 superflat tolerance across the high-bay areas, with any deviation forcing costly shimming of the racking.",
      "The roof carries an 18 MW solar array, and the buildings achieved BREEAM Outstanding with an operational energy intensity 46% below the portfolio benchmark.",
    ],
    heroImage: "/images/projects/logistics-campus-hero.svg",
    thumbnail: "/images/projects/logistics-campus-thumb.svg",
    stats: [
      { label: "Floor area", value: "214,000 m²" },
      { label: "Clear height", value: "42 m" },
      { label: "Solar capacity", value: "18 MW" },
      { label: "Delivered", value: "5 wks early" },
    ],
    technologies: [
      "Laser-screeded superflat floors",
      "Automated storage & retrieval integration",
      "Vibro-replacement ground improvement",
      "Roof-mounted photovoltaic array",
      "Federated BIM coordination",
      "Prefabricated structural steel",
      "Rainwater harvesting",
      "Digital twin handover",
    ],
    challenges: [
      {
        title: "FM3 tolerance across 214,000 m²",
        body: "Automated cranes operating at 42 metres amplify any floor deviation. FM3 superflat tolerance had to hold across an area larger than thirty football pitches, on reclaimed port land.",
      },
      {
        title: "Compressible reclaimed ground",
        body: "The site sits on hydraulically placed fill over soft marine clay, with predicted differential settlement well beyond what a superflat slab can tolerate.",
      },
      {
        title: "A fixed retail go-live date",
        body: "The operator's peak season commitment set an immovable handover date, with liquidated damages structured to make any delay commercially severe.",
      },
    ],
    solutions: [
      {
        title: "Survey feedback inside the pour",
        body: "Laser screeds were paired with real-time survey feedback, with flatness results issued within four hours of each pour rather than the industry-normal 48. Every one of 186 pours met FM3 first time.",
      },
      {
        title: "Ground improved, then proof-loaded",
        body: "Vibro-replacement stone columns on a 2.4-metre grid were verified by zone proof-loading before any slab was cast, converting a settlement assumption into measured evidence.",
      },
      {
        title: "Steel and cladding built offsite",
        body: "Structural steel and cladding cassettes were manufactured in parallel with foundation work and erected in a continuous sequence, compressing the critical path enough to hand over five weeks ahead of contract date.",
      },
    ],
    phases: [
      {
        phase: "Ground improvement & foundations",
        period: "Q3 2022 – Q1 2023",
        description:
          "Vibro-replacement across the full footprint, proof-loading and pad foundation construction.",
      },
      {
        phase: "Structural steel erection",
        period: "Q4 2022 – Q2 2023",
        description:
          "Erection of three high-bay frames including 42m clear-height portal structures.",
      },
      {
        phase: "Envelope & roof",
        period: "Q1 2023 – Q3 2023",
        description:
          "Cladding cassette installation, roof build-up and photovoltaic array mounting.",
      },
      {
        phase: "Superflat floor construction",
        period: "Q2 2023 – Q4 2023",
        description:
          "186 laser-screeded pours to FM3 tolerance with same-day survey verification.",
      },
      {
        phase: "Services & automation interface",
        period: "Q3 2023 – Q1 2024",
        description:
          "MEP installation, sprinkler systems and ASRS interface coordination with the operator.",
      },
      {
        phase: "Commissioning & early handover",
        period: "Q1 2024 – Q2 2024",
        description:
          "Integrated systems testing, BREEAM verification and handover five weeks ahead of programme.",
      },
    ],
    gallery: gallery("logistics-campus", "Meridian Logistics Campus"),
  },
  {
    slug: "harbour-light-rail",
    title: "Harbour Light Rail Extension",
    client: "City Transit Board",
    sector: "Highways & Rail",
    status: "In Progress",
    location: "Harbour District",
    country: "Australia",
    coordinates: [-33.8688, 151.2093],
    year: "2026",
    durationMonths: 44,
    contractValueUsd: 720_000_000,
    summary:
      "14.2 kilometres of light rail with nine stops, a maintenance depot and a 340-metre harbour bridge, threaded through a live waterfront district.",
    overview: [
      "The extension links the harbour district to the existing network, adding nine stops and a new maintenance and stabling facility. The alignment runs largely on-street through an area carrying heavy pedestrian and vehicle movement.",
      "A 340-metre cable-stayed bridge carries the alignment across the inner harbour, designed to accommodate both light rail loading and a pedestrian and cycle deck.",
      "The scheme includes complete streetscape reconstruction along the corridor, with utility renewal, public realm works and 1,400 new street trees.",
    ],
    heroImage: "/images/projects/harbour-rail-hero.svg",
    thumbnail: "/images/projects/harbour-rail-thumb.svg",
    stats: [
      { label: "Route length", value: "14.2 km" },
      { label: "New stops", value: "9" },
      { label: "Harbour bridge", value: "340 m" },
      { label: "Street trees", value: "1,400" },
    ],
    technologies: [
      "Slab track construction",
      "Overhead line equipment",
      "Cable-stayed rail bridge",
      "Utility renewal and diversion",
      "Traction power substations",
      "Wire-free running sections",
      "Public realm and landscaping",
      "Vibration isolation bearings",
    ],
    challenges: [
      {
        title: "Building a railway down a live high street",
        body: "The alignment runs through an active retail and hospitality district where businesses depend on continuous pedestrian access and evening trade.",
      },
      {
        title: "Uncharted Victorian-era utilities",
        body: "Records for the waterfront district were incomplete, with services dating back to the 1890s and no reliable as-built information across roughly 40% of the corridor.",
      },
      {
        title: "Vibration into heritage structures",
        body: "Several listed buildings sit within eight metres of the alignment, with operational vibration criteria tighter than standard slab track can deliver.",
      },
    ],
    solutions: [
      {
        title: "Corridor split into 200-metre cells",
        body: "The route is built in 200-metre cells, each with a guaranteed six-week duration and continuous pedestrian access maintained on both sides. Business turnover along completed sections has recovered to 98% of pre-works baseline.",
      },
      {
        title: "Full-corridor GPR before excavation",
        body: "Ground-penetrating radar and vacuum excavation surveyed the entire corridor ahead of works, producing a verified 3D utility model. Recorded utility strikes stand at three across 14.2 kilometres.",
      },
      {
        title: "Floating slab through sensitive zones",
        body: "Floating slab track on elastomeric bearings is used adjacent to listed structures, tested to deliver 14 dB of vibration attenuation against a 10 dB requirement.",
      },
    ],
    phases: [
      {
        phase: "Utility survey & diversion",
        period: "Q1 2023 – Q2 2024",
        description:
          "Full-corridor GPR survey, vacuum excavation verification and staged utility renewal.",
      },
      {
        phase: "Harbour bridge construction",
        period: "Q3 2023 – Q1 2026",
        description:
          "Marine piling, pylon construction, deck erection and stay cable installation.",
      },
      {
        phase: "Corridor civils & trackform",
        period: "Q2 2024 – Q2 2026",
        description:
          "Cell-by-cell street reconstruction, slab track and floating slab installation.",
      },
      {
        phase: "Depot & stabling facility",
        period: "Q1 2024 – Q3 2025",
        description:
          "Maintenance building, stabling roads, wash plant and control facility construction.",
      },
      {
        phase: "Systems installation",
        period: "Q4 2025 – Q3 2026",
        description:
          "OLE, traction substations, signalling, communications and stop fit-out.",
      },
      {
        phase: "Testing & trial running",
        period: "Q3 2026 – Q4 2026",
        description:
          "Dynamic testing, driver familiarisation, trial operation and passenger service entry.",
      },
    ],
    gallery: gallery("harbour-rail", "Harbour Light Rail Extension"),
  },
  {
    slug: "cascade-pumped-storage",
    title: "Cascade Pumped Storage Scheme",
    client: "National Grid Ventures",
    sector: "Water & Energy",
    status: "In Progress",
    location: "Northern Highlands",
    country: "United Kingdom",
    coordinates: [57.4778, -4.2247],
    year: "2028",
    durationMonths: 68,
    contractValueUsd: 1_640_000_000,
    summary:
      "A 1.2 GW pumped storage facility with an underground machine hall, 6.8 kilometres of waterway tunnel and a 78-metre RCC dam.",
    overview: [
      "Cascade provides 1.2 GW of dispatchable capacity and 22 GWh of storage, supporting grid stability as intermittent renewable generation expands. The scheme is one of the largest energy storage investments in the region.",
      "Meridian is delivering the upper reservoir dam, headrace and tailrace tunnels, the underground machine hall cavern, and the surface substation and grid connection civils.",
      "The machine hall is a 142-metre by 24-metre cavern excavated 420 metres below ground, with a 52-metre crown span supported by pattern rock bolting and fibre-reinforced sprayed concrete.",
    ],
    heroImage: "/images/projects/cascade-storage-hero.svg",
    thumbnail: "/images/projects/cascade-storage-thumb.svg",
    stats: [
      { label: "Generating capacity", value: "1.2 GW" },
      { label: "Storage", value: "22 GWh" },
      { label: "Waterway tunnel", value: "6.8 km" },
      { label: "Dam height", value: "78 m" },
    ],
    technologies: [
      "Roller-compacted concrete dam",
      "Underground cavern excavation",
      "Drill-and-blast tunnelling",
      "Pattern rock bolting",
      "Fibre-reinforced sprayed concrete",
      "Steel-lined pressure shaft",
      "Grid connection civils",
      "Rock mass monitoring",
    ],
    challenges: [
      {
        title: "A 52-metre unsupported crown span",
        body: "The machine hall crown spans 52 metres in rock with variable jointing, 420 metres below the surface where remedial access is effectively impossible once excavation has passed.",
      },
      {
        title: "A remote site with no infrastructure",
        body: "The nearest sealed road ended eleven kilometres from the site, and there was no grid power, water supply or accommodation within reasonable travelling distance.",
      },
      {
        title: "Protected peatland habitat",
        body: "The upper reservoir footprint sits within blanket bog of high conservation value and significant stored carbon, where conventional stripping would release decades of sequestration.",
      },
    ],
    solutions: [
      {
        title: "Excavate, then confirm, then advance",
        body: "The cavern is excavated in eleven benches, with convergence monitoring and instrumented rock bolts confirming stability before each subsequent bench is released. Measured crown convergence is tracking at 62% of predicted.",
      },
      {
        title: "A self-sufficient site",
        body: "Meridian built the eleven-kilometre access road, a 340-bed accommodation village, an on-site batching plant and a temporary 11 kV supply before main works commenced.",
      },
      {
        title: "Peat lifted, stored and reinstated",
        body: "Peat is excavated in intact turves, stored hydrated, and reinstated onto restoration areas. Independent monitoring shows 91% vegetation survival against a 70% contractual target.",
      },
    ],
    phases: [
      {
        phase: "Access & site infrastructure",
        period: "Q3 2023 – Q3 2024",
        description:
          "Eleven-kilometre access road, accommodation village, batching plant and temporary power.",
      },
      {
        phase: "Tunnel drives",
        period: "Q1 2024 – Q4 2026",
        description:
          "Drill-and-blast excavation of 6.8km of headrace and tailrace waterway tunnels.",
      },
      {
        phase: "Machine hall cavern",
        period: "Q3 2024 – Q1 2027",
        description:
          "Eleven-bench cavern excavation with pattern bolting, sprayed concrete and convergence monitoring.",
      },
      {
        phase: "Upper reservoir dam",
        period: "Q2 2025 – Q3 2027",
        description:
          "78m RCC dam construction, spillway, outlet works and reservoir preparation.",
      },
      {
        phase: "Mechanical & electrical installation",
        period: "Q1 2027 – Q2 2028",
        description:
          "Pump-turbine installation, steel pressure shaft lining and substation construction.",
      },
      {
        phase: "Filling, testing & commissioning",
        period: "Q2 2028 – Q4 2028",
        description:
          "First filling, reservoir safety verification, wet commissioning and grid energisation.",
      },
    ],
    gallery: gallery("cascade-storage", "Cascade Pumped Storage Scheme"),
  },
  {
    slug: "southern-ring-viaduct",
    title: "Southern Ring Viaduct",
    client: "Metropolitan Highways Agency",
    sector: "Bridges & Viaducts",
    status: "Completed",
    location: "Lisbon Metropolitan Area",
    country: "Portugal",
    coordinates: [38.7223, -9.1393],
    year: "2022",
    durationMonths: 29,
    contractValueUsd: 380_000_000,
    summary:
      "A 2.1-kilometre precast segmental viaduct erected over a live rail corridor and protected wetland using overhead launching gantries.",
    overview: [
      "The viaduct completes the southern ring road, crossing a live commuter rail corridor, a protected wetland and an industrial estate within a 2.1-kilometre alignment.",
      "1,240 precast segments were manufactured in a purpose-built casting yard and erected span-by-span using two overhead launching gantries, eliminating the need for ground-level access across the wetland entirely.",
      "The scheme was delivered with zero rail possessions beyond the four originally programmed, and the wetland was handed back with an ecological condition assessment better than its pre-construction baseline.",
    ],
    heroImage: "/images/projects/southern-viaduct-hero.svg",
    thumbnail: "/images/projects/southern-viaduct-thumb.svg",
    stats: [
      { label: "Viaduct length", value: "2,100 m" },
      { label: "Precast segments", value: "1,240" },
      { label: "Typical span", value: "48 m" },
      { label: "Rail possessions", value: "4" },
    ],
    technologies: [
      "Precast segmental construction",
      "Overhead launching gantries",
      "Match-cast segment production",
      "External post-tensioning",
      "Epoxy jointing systems",
      "Elastomeric bearings",
      "Wetland protection measures",
      "Geometry control software",
    ],
    challenges: [
      {
        title: "A protected wetland beneath the alignment",
        body: "900 metres of the alignment crosses a Natura 2000 wetland where ground-level access, temporary works and material laydown were all prohibited.",
      },
      {
        title: "A live commuter rail crossing",
        body: "The alignment crosses a rail corridor carrying 220 services a day, with possessions limited to four four-hour night windows for the entire scheme.",
      },
      {
        title: "Cumulative geometry error",
        body: "Match-cast segmental construction compounds every casting deviation along the span. Without active control, a 2.1-kilometre viaduct would have closed well outside tolerance.",
      },
    ],
    solutions: [
      {
        title: "Everything worked from above",
        body: "Two overhead launching gantries erected all 1,240 segments from deck level, supported by piers founded on individually accessed micropile groups. The wetland surface was never trafficked.",
      },
      {
        title: "Rail spans pre-assembled offline",
        body: "Spans over the rail corridor were assembled on temporary staging beside the alignment and transversely skidded into position, using only two of the four available possessions.",
      },
      {
        title: "Geometry corrected span by span",
        body: "Each segment was surveyed on the casting bed and its actual geometry fed into the erection model, allowing correction to be distributed across subsequent segments. Final closure error at the last span was 6mm.",
      },
    ],
    phases: [
      {
        phase: "Casting yard establishment",
        period: "Q1 2020 – Q3 2020",
        description:
          "Construction of the precast facility, casting beds and segment storage area.",
      },
      {
        phase: "Foundations & piers",
        period: "Q2 2020 – Q2 2021",
        description:
          "Micropile groups, pile caps and pier construction including wetland-sensitive access.",
      },
      {
        phase: "Segment production",
        period: "Q3 2020 – Q3 2021",
        description:
          "Match-cast production of 1,240 segments with individual geometry survey.",
      },
      {
        phase: "Gantry erection",
        period: "Q1 2021 – Q1 2022",
        description:
          "Span-by-span erection using two overhead launching gantries with active geometry control.",
      },
      {
        phase: "Rail crossing spans",
        period: "Q3 2021 – Q4 2021",
        description:
          "Offline assembly and transverse skidding of spans across the live rail corridor.",
      },
      {
        phase: "Surfacing, testing & handover",
        period: "Q1 2022 – Q2 2022",
        description:
          "Waterproofing, surfacing, parapets, load testing and ecological reinstatement.",
      },
    ],
    gallery: gallery("southern-viaduct", "Southern Ring Viaduct"),
    awards: ["FIB Award for Outstanding Concrete Structures 2023"],
  },
  {
    slug: "atlantic-offshore-wind",
    title: "Atlantic Offshore Wind Foundations",
    client: "Atlantic Renewables Consortium",
    sector: "Marine & Ports",
    status: "Handover",
    location: "Atlantic Shelf",
    country: "Ireland",
    coordinates: [53.3498, -8.5],
    year: "2025",
    durationMonths: 31,
    contractValueUsd: 890_000_000,
    summary:
      "112 monopile foundations and two offshore substation jackets installed in water depths to 58 metres across a 340 km² lease area.",
    overview: [
      "Meridian delivered the foundation package for a 1.4 GW offshore wind farm, comprising 112 monopiles up to 11 metres in diameter and two offshore substation platform jackets.",
      "Installation was carried out from a purpose-configured jack-up vessel operating in an Atlantic wave climate with a limited weather window between April and September.",
      "The scheme used noise-abated installation throughout to protect cetacean populations, with double bubble curtains deployed on every pile.",
    ],
    heroImage: "/images/projects/atlantic-wind-hero.svg",
    thumbnail: "/images/projects/atlantic-wind-thumb.svg",
    stats: [
      { label: "Monopiles installed", value: "112" },
      { label: "Maximum diameter", value: "11 m" },
      { label: "Water depth", value: "58 m" },
      { label: "Farm capacity", value: "1.4 GW" },
    ],
    technologies: [
      "Monopile installation",
      "Jacket foundation installation",
      "Double bubble curtain noise abatement",
      "Dynamic positioning vessels",
      "Scour protection placement",
      "Subsea cable protection",
      "Marine mammal observation",
      "Weather window forecasting",
    ],
    challenges: [
      {
        title: "A six-month weather window",
        body: "Atlantic conditions restricted installation to April through September, requiring 112 foundations to be placed in two working seasons rather than three.",
      },
      {
        title: "Cetacean noise exposure",
        body: "The lease area overlaps a cetacean migration route, with regulatory limits on underwater noise that conventional impact driving comfortably exceeds.",
      },
      {
        title: "Variable seabed geology",
        body: "Boulder-strewn glacial till across roughly a third of the array created a real risk of pile refusal above the design penetration depth.",
      },
    ],
    solutions: [
      {
        title: "Forecasting turned into schedule",
        body: "A dedicated metocean forecasting service fed a rolling seven-day installation plan updated twice daily. Weather-related downtime was held to 18% against a 31% tender allowance.",
      },
      {
        title: "Double bubble curtains on every pile",
        body: "All piles were driven inside a double bubble curtain with marine mammal observers and passive acoustic monitoring on station. Measured noise stayed 8 dB below the consented limit throughout.",
      },
      {
        title: "Boulder clearance ahead of the vessel",
        body: "A dedicated survey and clearance campaign preceded the installation vessel by four weeks, removing obstructions before they could cause standby. No pile failed to reach design penetration.",
      },
    ],
    phases: [
      {
        phase: "Geophysical & geotechnical survey",
        period: "Q2 2022 – Q4 2022",
        description:
          "Full array survey, boulder mapping and site-specific pile design verification.",
      },
      {
        phase: "Fabrication & load-out",
        period: "Q3 2022 – Q2 2024",
        description:
          "Monopile and jacket fabrication, coating, and marshalling at the load-out port.",
      },
      {
        phase: "Season one installation",
        period: "Q2 2023 – Q3 2023",
        description:
          "Installation of 58 monopiles with noise abatement and scour protection placement.",
      },
      {
        phase: "Season two installation",
        period: "Q2 2024 – Q3 2024",
        description:
          "Remaining 54 monopiles plus two offshore substation jacket foundations.",
      },
      {
        phase: "Scour protection & cable interface",
        period: "Q3 2023 – Q4 2024",
        description:
          "Rock placement scour protection and cable protection system installation.",
      },
      {
        phase: "Survey, verification & handover",
        period: "Q1 2025 – Q3 2025",
        description:
          "As-built survey, verticality verification and phased handover to the turbine installer.",
      },
    ],
    gallery: gallery("atlantic-wind", "Atlantic Offshore Wind Foundations"),
  },
  {
    slug: "central-station-redevelopment",
    title: "Central Station Redevelopment",
    client: "National Railways",
    sector: "Industrial & Buildings",
    status: "In Progress",
    location: "Milan",
    country: "Italy",
    coordinates: [45.4642, 9.19],
    year: "2027",
    durationMonths: 56,
    contractValueUsd: 760_000_000,
    summary:
      "Complete redevelopment of a Grade I listed terminus handling 320,000 passengers a day, delivered without closing a single platform.",
    overview: [
      "The redevelopment restores and re-plans a listed 1930s terminus while doubling concourse capacity, adding a new below-ground interchange and completely renewing the platform environment.",
      "The station handled 320,000 passengers daily throughout construction. No platform was closed for more than 48 consecutive hours, and the main concourse remained in public use for the entire programme.",
      "Heritage fabric including the vaulted booking hall, stone facades and original steelwork was conserved under the supervision of the national heritage authority.",
    ],
    heroImage: "/images/projects/central-station-hero.svg",
    thumbnail: "/images/projects/central-station-thumb.svg",
    stats: [
      { label: "Daily passengers", value: "320,000" },
      { label: "Concourse area", value: "48,000 m²" },
      { label: "Platforms renewed", value: "24" },
      { label: "Listed grade", value: "Grade I" },
    ],
    technologies: [
      "Heritage fabric conservation",
      "Top-down basement construction",
      "Temporary passenger routing",
      "Structural steel strengthening",
      "Laser scanning and HBIM",
      "Acoustic and vibration mitigation",
      "Phased possession management",
      "Modular platform components",
    ],
    challenges: [
      {
        title: "320,000 passengers a day, every day",
        body: "The station could not close. Every construction activity had to be planned around continuous passenger movement, emergency egress compliance and step-free access.",
      },
      {
        title: "Undocumented heritage structure",
        body: "The 1930s structure had been modified repeatedly with poor record-keeping. Load paths through the original steelwork were largely unknown before intrusive survey.",
      },
      {
        title: "Excavating beneath a live concourse",
        body: "The new interchange required 18 metres of excavation directly beneath the operational concourse floor, with movement tolerances set by the heritage fabric above.",
      },
    ],
    solutions: [
      {
        title: "Passenger routes designed as permanent works",
        body: "Temporary concourse routes were designed, modelled for crowd flow and signed to permanent-works standard, then rotated in eleven planned configurations. Passenger satisfaction has held above 82% throughout.",
      },
      {
        title: "The building surveyed before it was touched",
        body: "Full laser scanning and intrusive investigation produced an HBIM model of the existing structure, replacing assumption with measurement and identifying nine strengthening interventions before design was fixed.",
      },
      {
        title: "Top-down excavation with live monitoring",
        body: "The interchange box is being built top-down, with the concourse slab acting as permanent propping. Real-time monitoring of the heritage fabric reports movement against a 5mm trigger, currently tracking below 2mm.",
      },
    ],
    phases: [
      {
        phase: "Survey & heritage recording",
        period: "Q1 2023 – Q4 2023",
        description:
          "Laser scanning, intrusive investigation, HBIM model creation and heritage impact assessment.",
      },
      {
        phase: "Enabling & temporary works",
        period: "Q3 2023 – Q2 2024",
        description:
          "Temporary passenger routes, hoarding, service diversions and structural propping.",
      },
      {
        phase: "Structural strengthening",
        period: "Q1 2024 – Q3 2025",
        description:
          "Nine strengthening interventions to original steelwork and masonry consolidation.",
      },
      {
        phase: "Interchange box construction",
        period: "Q2 2024 – Q4 2026",
        description:
          "Top-down excavation to 18m beneath the live concourse with continuous heritage monitoring.",
      },
      {
        phase: "Platform & concourse renewal",
        period: "Q1 2025 – Q2 2027",
        description:
          "Phased renewal of 24 platforms and concourse fit-out under rolling possessions.",
      },
      {
        phase: "Conservation & completion",
        period: "Q3 2026 – Q4 2027",
        description:
          "Facade and booking hall conservation, final fit-out and phased operational handover.",
      },
    ],
    gallery: gallery("central-station", "Central Station Redevelopment"),
  },
  {
    slug: "desert-solar-transmission",
    title: "Desert Solar & Transmission Link",
    client: "Regional Energy Authority",
    sector: "Water & Energy",
    status: "Completed",
    location: "Sonoran Basin",
    country: "United States",
    coordinates: [33.4484, -112.074],
    year: "2024",
    durationMonths: 27,
    contractValueUsd: 520_000_000,
    summary:
      "1.8 GW of utility-scale solar with 240 kilometres of 500 kV transmission across desert terrain, delivered three months early.",
    overview: [
      "The scheme combines 1.8 GW of single-axis tracking photovoltaic generation with the 500 kV transmission link required to bring that capacity to the regional grid.",
      "Meridian delivered all balance of plant — piling, tracker installation, collection systems, substations — plus 240 kilometres of transmission line and two 500 kV switchyards.",
      "The site sits within protected desert tortoise habitat, requiring a comprehensive translocation programme and permanent habitat corridors through the array.",
    ],
    heroImage: "/images/projects/desert-solar-hero.svg",
    thumbnail: "/images/projects/desert-solar-thumb.svg",
    stats: [
      { label: "Generation capacity", value: "1.8 GW" },
      { label: "Transmission line", value: "240 km" },
      { label: "Tracker piles", value: "186,000" },
      { label: "Delivered", value: "3 mo early" },
    ],
    technologies: [
      "Single-axis tracker systems",
      "Automated pile driving",
      "500 kV transmission construction",
      "GIS substation installation",
      "Desert habitat translocation",
      "Robotic panel cleaning systems",
      "SCADA and grid integration",
      "Dust suppression management",
    ],
    challenges: [
      {
        title: "186,000 piles across variable ground",
        body: "Tracker foundation piles had to be driven across a site with caliche layers of unpredictable depth and hardness, where refusal or under-penetration compromises tracker alignment.",
      },
      {
        title: "Protected tortoise habitat",
        body: "The array footprint sits within designated desert tortoise habitat, with strict clearance survey, translocation and exclusion fencing obligations before any ground disturbance.",
      },
      {
        title: "Extreme heat and dust",
        body: "Summer temperatures above 46°C combined with high dust loading created both a workforce safety issue and a real threat to electrical installation quality.",
      },
    ],
    solutions: [
      {
        title: "Pile driving with live refusal feedback",
        body: "GPS-guided pile drivers logged driving resistance in real time, flagging caliche encounters immediately so pre-drilling could be deployed the same shift. Pile rework was held to 0.4%.",
      },
      {
        title: "Translocation ahead of the works front",
        body: "Authorised biologists cleared and translocated tortoises six weeks ahead of the construction front, with permanent habitat corridors designed through the array. 340 animals were relocated with a 96% twelve-month survival rate.",
      },
      {
        title: "Shift patterns built around the heat",
        body: "Work moved to a 04:00–12:00 pattern through the summer, with electrical terminations carried out inside climate-controlled enclosures. The project recorded zero heat illness cases across 27 months.",
      },
    ],
    phases: [
      {
        phase: "Environmental clearance",
        period: "Q3 2021 – Q1 2022",
        description:
          "Tortoise survey, translocation, exclusion fencing and habitat corridor establishment.",
      },
      {
        phase: "Civil works & grading",
        period: "Q4 2021 – Q2 2022",
        description:
          "Access roads, drainage, grading and substation platform construction.",
      },
      {
        phase: "Tracker foundations & installation",
        period: "Q1 2022 – Q3 2023",
        description:
          "186,000 driven piles, tracker assembly and module installation across the array.",
      },
      {
        phase: "Collection & substations",
        period: "Q3 2022 – Q1 2024",
        description:
          "Medium-voltage collection network, inverter stations and two 500 kV switchyards.",
      },
      {
        phase: "Transmission line construction",
        period: "Q1 2023 – Q2 2024",
        description:
          "240km of 500 kV line including tower foundations, erection and stringing.",
      },
      {
        phase: "Energisation & performance testing",
        period: "Q2 2024 – Q3 2024",
        description:
          "Grid energisation, capacity testing and handover three months ahead of programme.",
      },
    ],
    gallery: gallery("desert-solar", "Desert Solar & Transmission Link"),
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getRelatedProjects(slug: string, limit = 3) {
  const current = getProject(slug);
  if (!current) return projects.slice(0, limit);

  const sameSector = projects.filter(
    (p) => p.slug !== slug && p.sector === current.sector,
  );
  const others = projects.filter(
    (p) => p.slug !== slug && p.sector !== current.sector,
  );

  return [...sameSector, ...others].slice(0, limit);
}
