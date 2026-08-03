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
    slug: "meghna-estuary-crossing",
    title: "Meghna Estuary Crossing",
    client: "Bangladesh Bridge Authority",
    sector: "Bridges & Viaducts",
    status: "Completed",
    location: "Bhola — Barishal",
    country: "Bangladesh",
    coordinates: [22.6845, 90.6503],
    year: "2024",
    durationMonths: 56,
    contractValueCrore: 12400,
    summary:
      "A 4.8-kilometre cable-stayed crossing linking Bhola to the mainland, founded on 122-metre piles through delta silt in a river that moves its own bed each monsoon.",
    overview: [
      "Bhola is the only district in Bangladesh with no road connection to the mainland. Two million people depended on a ferry service that stopped whenever the Meghna ran high. The crossing ends that isolation.",
      "The main span is a 650-metre cable-stayed structure flanked by precast segmental approach viaducts, carrying four lanes and a separated motorcycle and non-motorised vehicle corridor. Two 178-metre pylons were slipformed continuously through the dry season.",
      "Because the Meghna is one of the most morphologically active rivers on earth, the scheme also included 7.2 kilometres of river training works — guide bunds, geotextile mattress revetment and CC block armour — designed to hold the channel where the bridge assumes it will be in eighty years.",
    ],
    heroImage: "/images/projects/meghna-estuary-hero.svg",
    thumbnail: "/images/projects/meghna-estuary-thumb.svg",
    stats: [
      { label: "Main span", value: "650 m" },
      { label: "Total length", value: "4,800 m" },
      { label: "Pile depth", value: "122 m" },
      { label: "River training", value: "7.2 km" },
    ],
    technologies: [
      "Cable-stayed superstructure",
      "Deep driven steel tubular piles",
      "Precast segmental approach viaducts",
      "River training & guide bunds",
      "Geotextile mattress revetment",
      "Hydro-morphological modelling",
      "Federated BIM (ISO 19650)",
      "Structural health monitoring",
    ],
    challenges: [
      {
        title: "A riverbed that moves every monsoon",
        body: "The Meghna scours and shifts its thalweg by hundreds of metres between seasons. Bathymetric survey from one year could not be relied on to describe the ground the following year, and conventional pier foundation depths carried an unacceptable scour risk.",
      },
      {
        title: "No competent stratum within 100 metres",
        body: "Ground investigation found soft to medium alluvial silt and fine sand continuing well beyond 90 metres, with no rock and no reliably dense layer at any depth a conventional bored pile could economically reach.",
      },
      {
        title: "A five-month working season",
        body: "From June to October the river rises by more than six metres and carries a discharge that makes marine work impossible. Every in-river operation had to be completed, or made safe, inside the dry-season window.",
      },
    ],
    solutions: [
      {
        title: "Foundations designed for the worst scour, not the surveyed one",
        body: "Piles were taken to 122 metres — well past the design bearing requirement — so that the predicted 100-year scour depth still leaves full capacity. Annual bathymetric survey since opening shows scour tracking at 71% of the design envelope.",
      },
      {
        title: "Driven steel tubulars instead of bored piles",
        body: "Large-diameter driven steel tubular piles with internal concrete plugs replaced bored piles, removing the borehole stability problem in silt entirely and cutting the per-pile cycle from eleven days to four.",
      },
      {
        title: "Monsoon designed into the programme, not around it",
        body: "Marine activity was compressed into the dry season and the wet months were spent on segment casting, pylon work above flood level and land-side approaches. The scheme used all five available seasons without a single monsoon-related standdown.",
      },
    ],
    phases: [
      {
        phase: "Survey, land acquisition & mobilisation",
        period: "Q1 2020 – Q4 2020",
        description:
          "Hydro-morphological survey, resettlement action plan delivery, casting yard construction and marine spread mobilisation.",
      },
      {
        phase: "River training works",
        period: "Q4 2020 – Q1 2022",
        description:
          "7.2km of guide bunds, geotextile mattress placement and CC block revetment on both banks.",
      },
      {
        phase: "Foundations & substructure",
        period: "Q1 2021 – Q2 2022",
        description:
          "128 driven steel tubular piles to 122m, pile caps within cofferdams and pier shafts to deck level.",
      },
      {
        phase: "Pylon construction",
        period: "Q3 2022 – Q2 2023",
        description:
          "Continuous slipforming of both 178m pylons, cross-beams and stay anchorage installation.",
      },
      {
        phase: "Deck erection & stay stressing",
        period: "Q4 2022 – Q3 2024",
        description:
          "Segmental approach viaduct erection and symmetrical cable-stayed deck advance to midspan closure.",
      },
      {
        phase: "Approach roads, testing & opening",
        period: "Q2 2024 – Q4 2024",
        description:
          "9.4km of approach highway, toll plaza, load testing and opening to traffic.",
      },
    ],
    gallery: gallery("meghna-estuary", "Meghna Estuary Crossing"),
    beforeAfter: {
      before: "/images/projects/meghna-estuary-before.svg",
      after: "/images/projects/meghna-estuary-after.svg",
      label: "The Bhola ferry ghat, replaced by a fixed link in Q4 2024",
    },
    featured: true,
    awards: [
      "IEB National Engineering Award 2025 — Infrastructure",
      "SAARC Infrastructure Project of the Year 2025",
    ],
  },
  {
    slug: "dhaka-metro-line-4",
    title: "Dhaka Metro Line 4",
    client: "Dhaka Mass Transit Company Limited",
    sector: "Tunnelling",
    status: "In Progress",
    location: "Motijheel — Narayanganj",
    country: "Bangladesh",
    coordinates: [23.7104, 90.4074],
    year: "2028",
    durationMonths: 76,
    contractValueCrore: 21800,
    summary:
      "Twin 11.6-kilometre bored tunnels and seven deep station boxes beneath the densest city on earth, driven through saturated Dhaka clay with a 15-millimetre settlement limit.",
    overview: [
      "Line 4 extends the metro network south from Motijheel to Narayanganj, serving a corridor carrying more than a million daily trips on roads that have effectively reached gridlock.",
      "Meghna is delivering the twin running tunnels, seven station boxes, fourteen cross-passages and all associated ground treatment. The alignment passes beneath 610 buildings at depths between 16 and 34 metres.",
      "Two 9.6-metre EPB machines were launched from the Narayanganj portal. Dhaka's high water table sits within two metres of the surface for most of the year, so the drives are effectively permanently below groundwater.",
    ],
    heroImage: "/images/projects/dhaka-metro-hero.svg",
    thumbnail: "/images/projects/dhaka-metro-thumb.svg",
    stats: [
      { label: "Twin tunnel", value: "11.6 km" },
      { label: "TBM diameter", value: "9.6 m" },
      { label: "Station boxes", value: "7" },
      { label: "Settlement limit", value: "15 mm" },
    ],
    technologies: [
      "EPB tunnel boring machines",
      "Diaphragm wall station boxes",
      "Compensation grouting arrays",
      "Automated total station monitoring",
      "Deep well dewatering",
      "Precast segmental lining",
      "Sprayed concrete cross-passages",
      "Real-time settlement dashboard",
    ],
    challenges: [
      {
        title: "610 buildings, many without drawings",
        body: "The alignment passes under dense unplanned development where a large share of structures have no as-built records, shallow footings and, in places, unauthorised vertical extensions. Damage assessment could not start from paperwork.",
      },
      {
        title: "Groundwater within two metres of the surface",
        body: "Dhaka's water table leaves the entire drive below groundwater. Station excavations to 34 metres risked base heave and drawdown that could itself cause settlement across a far wider area than the tunnelling.",
      },
      {
        title: "Seismic zone II with liquefiable layers",
        body: "The alignment crosses loose saturated sand lenses in a moderate seismic zone, where a design earthquake could liquefy layers surrounding the permanent lining.",
      },
    ],
    solutions: [
      {
        title: "Every structure surveyed before it was undermined",
        body: "A door-to-door condition survey recorded 610 buildings by laser scan and intrusive inspection, producing a structural model where records did not exist. 84 were strengthened pre-emptively before the drive reached them.",
      },
      {
        title: "Cut-off walls instead of large-scale dewatering",
        body: "Station boxes are retained by diaphragm walls toed into the underlying clay to form a cut-off, so pumping is confined inside the box. External drawdown has stayed below 0.4 metres against a 1.5-metre limit.",
      },
      {
        title: "Ground improved where liquefaction was credible",
        body: "Liquefiable lenses within the influence zone were treated by jet grouting before the TBM arrived, and the permanent lining was designed for post-liquefaction ground loading rather than static conditions alone.",
      },
    ],
    phases: [
      {
        phase: "Utility diversion & enabling works",
        period: "Q2 2022 – Q3 2023",
        description:
          "Diversion of 41km of buried services, building condition survey and compound establishment.",
      },
      {
        phase: "Station box construction",
        period: "Q1 2023 – Q4 2026",
        description:
          "Diaphragm walling and top-down excavation for seven deep station boxes.",
      },
      {
        phase: "Ground treatment",
        period: "Q3 2023 – Q3 2024",
        description:
          "Jet grouting of liquefiable lenses, compensation grouting arrays and cross-passage treatment.",
      },
      {
        phase: "TBM drives",
        period: "Q1 2024 – Q3 2027",
        description:
          "Staggered launch and advance of two 9.6m EPB machines with continuous settlement monitoring.",
      },
      {
        phase: "Cross-passages & secondary lining",
        period: "Q2 2026 – Q1 2028",
        description:
          "Fourteen SCL cross-passages, secondary lining and tunnel drainage installation.",
      },
      {
        phase: "Systems, fit-out & trial running",
        period: "Q2 2027 – Q4 2028",
        description:
          "Track, traction power, signalling, ventilation, station fit-out and trial operation.",
      },
    ],
    gallery: gallery("dhaka-metro", "Dhaka Metro Line 4"),
    featured: true,
    awards: ["IEB Safety Initiative of the Year 2025"],
  },
  {
    slug: "matarbari-deep-sea-terminal",
    title: "Matarbari Deep Sea Terminal",
    client: "Chittagong Port Authority",
    sector: "Marine & Ports",
    status: "Completed",
    location: "Maheshkhali, Cox's Bazar",
    country: "Bangladesh",
    coordinates: [21.7902, 91.8623],
    year: "2023",
    durationMonths: 44,
    contractValueCrore: 9800,
    summary:
      "Bangladesh's first deep-water container berth — 1,850 metres of quay dredged to minus 16 metres, built on a cyclone-exposed coast with a 460-hectare reclamation behind it.",
    overview: [
      "Until Matarbari, no Bangladeshi port could receive a vessel drawing more than 9.5 metres. Every deep-draught container had to be transhipped through Colombo or Singapore, adding cost and a week of transit to the country's export supply chain.",
      "Meghna delivered 1,850 metres of combi-wall quay at minus 16 metres chart datum, a 14.3-kilometre approach channel, and 460 hectares of reclamation for the terminal yard and back-up area.",
      "The site sits on a coastline that has taken direct cyclone landfall repeatedly. Every permanent structure was designed against a 1-in-200-year storm surge combined with the design wave climate.",
    ],
    heroImage: "/images/projects/matarbari-hero.svg",
    thumbnail: "/images/projects/matarbari-thumb.svg",
    stats: [
      { label: "Quay length", value: "1,850 m" },
      { label: "Design depth", value: "-16 m CD" },
      { label: "Reclamation", value: "460 ha" },
      { label: "Annual capacity", value: "2.8M TEU" },
    ],
    technologies: [
      "Combi-wall quay construction",
      "Capital dredging & channel deepening",
      "Hydraulic fill reclamation",
      "Prefabricated vertical drains",
      "Storm surge & wave modelling",
      "Cathodic protection systems",
      "Settlement instrumentation",
      "Crane rail precision survey",
    ],
    challenges: [
      {
        title: "Cyclone landfall during construction",
        body: "The coast takes severe cyclonic storms with surge heights above six metres. A partially built quay, a floating marine spread and 2,400 workers were all exposed to an event that could arrive with 72 hours of notice.",
      },
      {
        title: "Thirty metres of compressible marine clay",
        body: "The reclamation sits on soft marine clay up to 31 metres thick. Untreated, predicted long-term settlement exceeded 1.4 metres — enough to destroy pavements, crane rails and buried services within a decade.",
      },
      {
        title: "Siltation of the approach channel",
        body: "The Bay of Bengal carries an enormous sediment load. Modelling showed the newly dredged channel could lose a third of its depth to siltation within two years without a maintenance strategy designed in from the start.",
      },
    ],
    solutions: [
      {
        title: "A cyclone protocol with a 72-hour trigger",
        body: "A storm response plan tied to Bangladesh Meteorological Department warning stages governed vessel demobilisation, crane securing and full workforce evacuation. Two cyclones passed during construction with zero injuries and no plant loss.",
      },
      {
        title: "Consolidation forced ahead of construction",
        body: "Prefabricated vertical drains on a 1.5-metre triangular grid with surcharge preloading brought 85% of primary consolidation forward into the construction period. Residual settlement was measured below 90mm before pavement was released.",
      },
      {
        title: "A channel shaped to keep itself clear",
        body: "Channel alignment and side slopes were optimised against a sediment transport model, and training works were added at the mouth. Measured maintenance dredging is running at 61% of the volume originally forecast.",
      },
    ],
    phases: [
      {
        phase: "Capital dredging",
        period: "Q1 2020 – Q2 2021",
        description:
          "14.3km approach channel and berth pocket dredged to -16m CD with sediment modelling verification.",
      },
      {
        phase: "Reclamation & ground improvement",
        period: "Q3 2020 – Q4 2021",
        description:
          "460 hectares of hydraulic fill, vertical drain installation and surcharge preloading.",
      },
      {
        phase: "Quay wall construction",
        period: "Q2 2021 – Q3 2022",
        description:
          "Combi-wall driving, anchor walls, capping beam and fender system installation.",
      },
      {
        phase: "Terminal infrastructure",
        period: "Q1 2022 – Q2 2023",
        description:
          "Pavement, drainage, utilities, reefer racks, gate complex and terminal buildings.",
      },
      {
        phase: "Crane rail & equipment interface",
        period: "Q3 2022 – Q3 2023",
        description:
          "Crane rail installation to ±3mm straightness and equipment commissioning support.",
      },
      {
        phase: "Berth trials & handover",
        period: "Q3 2023 – Q4 2023",
        description:
          "Berth trials, first deep-draught vessel call and phased operational handover.",
      },
    ],
    gallery: gallery("matarbari", "Matarbari Deep Sea Terminal"),
    beforeAfter: {
      before: "/images/projects/matarbari-before.svg",
      after: "/images/projects/matarbari-after.svg",
      label: "Open coastline to operational deep-sea terminal, 2020–2023",
    },
    featured: true,
    awards: ["Bangladesh Ports & Logistics Project of the Year 2024"],
  },
  {
    slug: "dhaka-chattogram-expressway",
    title: "Dhaka–Chattogram Expressway Upgrade",
    client: "Roads & Highways Department",
    sector: "Highways & Rail",
    status: "Completed",
    location: "Cumilla — Feni corridor",
    country: "Bangladesh",
    coordinates: [23.4607, 91.1809],
    year: "2023",
    durationMonths: 42,
    contractValueCrore: 6400,
    summary:
      "94 kilometres of the country's busiest freight corridor widened to six lanes with service roads, delivered without ever closing the route that carries a third of national trade.",
    overview: [
      "The Dhaka–Chattogram corridor carries the freight link between the capital and the country's main port. Closing it is not an option at any point, for any duration.",
      "Meghna widened 94 kilometres to six lanes with continuous parallel service roads, replaced 28 structures, and built eleven flyovers at the market intersections where mixed traffic was causing most of the corridor's fatalities.",
      "The scheme separated slow-moving and non-motorised traffic onto the service roads for the full length — the single change that did most to bring the accident rate down.",
    ],
    heroImage: "/images/projects/dhaka-ctg-hero.svg",
    thumbnail: "/images/projects/dhaka-ctg-thumb.svg",
    stats: [
      { label: "Corridor length", value: "94 km" },
      { label: "Structures replaced", value: "28" },
      { label: "Flyovers built", value: "11" },
      { label: "Accident reduction", value: "-58%" },
    ],
    technologies: [
      "Live-carriageway staged construction",
      "Service road separation",
      "Full-depth pavement recycling",
      "Precast flyover girders",
      "Embankment on soft soil",
      "Prefabricated vertical drains",
      "Intelligent transport systems",
      "Automated axle load monitoring",
    ],
    challenges: [
      {
        title: "A corridor with no diversion route",
        body: "The route carries roughly 33% of national trade by value. There is no parallel road capable of taking that freight, so any full closure would have had measurable macroeconomic cost.",
      },
      {
        title: "Widening onto soft compressible ground",
        body: "New embankment widening sat on soft clay beside a decades-old settled embankment. Differential settlement between old and new would have cracked the pavement along the joint within a couple of seasons.",
      },
      {
        title: "Mixed traffic in continuous roadside markets",
        body: "Rickshaws, CNG auto-rickshaws, pedestrians and heavy trucks shared the same carriageway through dozens of roadside bazaars, producing both the congestion and the fatality pattern the scheme existed to fix.",
      },
    ],
    solutions: [
      {
        title: "Build the service road first, then work behind it",
        body: "Service roads were constructed ahead of main carriageway work and used as the diversion. Traffic moved onto permanent works rather than temporary ones, and corridor availability held at 98.1% across 42 months.",
      },
      {
        title: "Settle the new embankment before joining it",
        body: "Widened sections were surcharged with vertical drains and monitored to 90% primary consolidation before the pavement was tied into the existing carriageway. Measured differential settlement at the joint is below 12mm after three years.",
      },
      {
        title: "Grade separation at every market",
        body: "Eleven flyovers took through traffic over the bazaar intersections while local movement stayed at grade on the service road. Recorded accidents on the corridor have fallen 58% against the three-year pre-construction baseline.",
      },
    ],
    phases: [
      {
        phase: "Survey, land acquisition & utilities",
        period: "Q2 2019 – Q2 2020",
        description:
          "Corridor survey, land acquisition, resettlement delivery and utility diversion.",
      },
      {
        phase: "Service road construction",
        period: "Q1 2020 – Q3 2021",
        description:
          "Continuous parallel service roads built first to act as the permanent diversion.",
      },
      {
        phase: "Embankment widening & consolidation",
        period: "Q4 2020 – Q4 2022",
        description:
          "Widening embankment, vertical drains and surcharge with settlement monitoring to release.",
      },
      {
        phase: "Structures & flyovers",
        period: "Q2 2021 – Q1 2023",
        description:
          "28 structure replacements and eleven precast girder flyovers at market intersections.",
      },
      {
        phase: "Main carriageway & pavement",
        period: "Q3 2021 – Q2 2023",
        description:
          "Six-lane carriageway construction with full-depth recycling of existing pavement.",
      },
      {
        phase: "ITS, safety audit & handover",
        period: "Q1 2023 – Q3 2023",
        description:
          "Intelligent transport systems, axle load stations, road safety audit and handover.",
      },
    ],
    gallery: gallery("dhaka-ctg", "Dhaka–Chattogram Expressway Upgrade"),
    featured: true,
  },
  {
    slug: "sayedabad-water-treatment",
    title: "Sayedabad Water Treatment Expansion",
    client: "Dhaka WASA",
    sector: "Water & Energy",
    status: "Completed",
    location: "Sayedabad, Dhaka",
    country: "Bangladesh",
    coordinates: [23.7104, 90.431],
    year: "2024",
    durationMonths: 38,
    contractValueCrore: 4100,
    summary:
      "A 450 million litre per day treatment expansion built on a live works, reducing Dhaka's dependence on an aquifer that has been dropping by three metres a year.",
    overview: [
      "Dhaka draws most of its water from groundwater, and the aquifer beneath the city has been falling by roughly three metres annually for two decades. Surface water treatment is the only viable path away from that trajectory.",
      "Meghna delivered new intake works on the Meghna river, a 22-kilometre transmission main, and a 450 MLD treatment plant with pre-sedimentation, conventional treatment and disinfection — all on a site that continued supplying the city throughout.",
      "The raw water source carries very high seasonal turbidity and periodic saline intrusion, so the process design had to handle a far wider input range than a typical surface water works.",
    ],
    heroImage: "/images/projects/sayedabad-hero.svg",
    thumbnail: "/images/projects/sayedabad-thumb.svg",
    stats: [
      { label: "Treatment capacity", value: "450 MLD" },
      { label: "Population served", value: "5.4M" },
      { label: "Transmission main", value: "22 km" },
      { label: "Peak raw turbidity", value: "2,400 NTU" },
    ],
    technologies: [
      "Pre-sedimentation & clarification",
      "Rapid gravity filtration",
      "Chlorination & disinfection",
      "Large diameter transmission mains",
      "Pipe jacking under live roads",
      "SCADA & telemetry integration",
      "Temporary process bypass systems",
      "Sludge treatment & dewatering",
    ],
    challenges: [
      {
        title: "The works could never stop supplying",
        body: "Sayedabad supplies a large share of Dhaka's piped water. Any interruption during tie-in would have left millions without supply in a city where the alternative is unsafe.",
      },
      {
        title: "Raw water turbidity above 2,000 NTU",
        body: "During monsoon the Meghna carries sediment loads far beyond what conventional clarification handles. A plant designed for average conditions would have failed its output standard for months each year.",
      },
      {
        title: "A 22-kilometre main through dense Dhaka",
        body: "The transmission route crosses some of the most congested roads in the city, with buried services that are poorly recorded and traffic that cannot absorb long open-cut closures.",
      },
    ],
    solutions: [
      {
        title: "Proven bypass before every tie-in",
        body: "All 31 connections into the live stream were made under a purpose-designed temporary bypass, commissioned and proven before the permanent line was broken. Supply was maintained for the full 38 months.",
      },
      {
        title: "Pre-sedimentation sized for the monsoon peak",
        body: "A dedicated pre-sedimentation stage ahead of clarification was sized against the recorded turbidity maximum rather than the annual average. The plant has held its output standard through three monsoons including a record flood year.",
      },
      {
        title: "Jacked, not dug, where the city could not take it",
        body: "9.4 kilometres of the main was installed by pipe jacking beneath major roads instead of open-cut. Road occupation was reduced by an estimated 71%, and the utility strike count across the whole route was four.",
      },
    ],
    phases: [
      {
        phase: "Intake & raw water works",
        period: "Q1 2021 – Q2 2022",
        description:
          "River intake structure, raw water pumping station and screening facility construction.",
      },
      {
        phase: "Transmission main",
        period: "Q3 2021 – Q4 2022",
        description:
          "22km of large diameter main including 9.4km of pipe jacking beneath live roads.",
      },
      {
        phase: "Pre-sedimentation & clarification",
        period: "Q2 2022 – Q2 2023",
        description:
          "Pre-sedimentation basins, clarifiers and chemical dosing facility construction.",
      },
      {
        phase: "Filtration & disinfection",
        period: "Q4 2022 – Q1 2024",
        description:
          "Rapid gravity filter house, clear water reservoir and disinfection plant.",
      },
      {
        phase: "Sludge treatment & residuals",
        period: "Q2 2023 – Q2 2024",
        description:
          "Sludge thickening, dewatering and residuals handling facility.",
      },
      {
        phase: "Commissioning & performance testing",
        period: "Q1 2024 – Q3 2024",
        description:
          "Process commissioning, water quality verification and twelve-month performance monitoring.",
      },
    ],
    gallery: gallery("sayedabad", "Sayedabad Water Treatment Expansion"),
    awards: ["Bangladesh Water Sector Achievement Award 2025"],
  },
  {
    slug: "mirsarai-industrial-campus",
    title: "Mirsarai Industrial Campus",
    client: "Bangladesh Economic Zones Authority",
    sector: "Industrial & Buildings",
    status: "Completed",
    location: "Mirsarai, Chattogram",
    country: "Bangladesh",
    coordinates: [22.7802, 91.5601],
    year: "2024",
    durationMonths: 26,
    contractValueCrore: 2850,
    summary:
      "A 186,000 m² export manufacturing campus with superflat floors and full solar canopy, delivered six weeks early on reclaimed coastal land.",
    overview: [
      "The campus provides ready-built export manufacturing space inside the country's largest economic zone, aimed at readymade garment and light engineering tenants who need to be producing within months of signing.",
      "Meghna delivered four production buildings, a shared utilities block and 186,000 square metres of covered floor area, together with the internal roads, drainage and substation infrastructure.",
      "The roof carries a 14 MW solar array. With grid supply in the zone still developing, on-site generation was not an environmental gesture — it was what made the tenants' production schedules credible.",
    ],
    heroImage: "/images/projects/mirsarai-hero.svg",
    thumbnail: "/images/projects/mirsarai-thumb.svg",
    stats: [
      { label: "Floor area", value: "186,000 m²" },
      { label: "Solar capacity", value: "14 MW" },
      { label: "Buildings", value: "4" },
      { label: "Delivered", value: "6 wks early" },
    ],
    technologies: [
      "Laser-screeded superflat floors",
      "Prefabricated structural steel",
      "Vibro-replacement ground improvement",
      "Roof-mounted photovoltaic array",
      "Rainwater harvesting",
      "Effluent treatment plant",
      "Federated BIM coordination",
      "LEED-aligned building services",
    ],
    challenges: [
      {
        title: "Reclaimed coastal land with high salinity",
        body: "The site is reclaimed from tidal flats. Groundwater salinity and chloride content were high enough to threaten reinforcement durability well inside the design life if standard concrete cover and mix were used.",
      },
      {
        title: "No established grid supply",
        body: "Zone grid infrastructure was still being built. Tenants were signing leases against production dates that assumed reliable power that did not yet exist.",
      },
      {
        title: "A monsoon in the middle of the earthworks",
        body: "The programme's earthworks and foundation phase fell across a full monsoon season on flat reclaimed ground with no natural drainage fall.",
      },
    ],
    solutions: [
      {
        title: "Durability designed for the chloride environment",
        body: "Concrete used higher cement replacement with increased cover to substructure, and all buried steelwork was specified with enhanced protection. Chloride ingress testing at handover projected service life beyond the 50-year requirement.",
      },
      {
        title: "Solar plus storage sized to carry production",
        body: "The 14 MW array was paired with battery storage and standby generation configured to carry critical production load independently of the grid. Tenants began production on schedule with zero supply-related downtime.",
      },
      {
        title: "Drainage built before the earthworks",
        body: "The permanent site drainage network and retention ponds were constructed first and used to drain the works through the monsoon. Weather-related lost days totalled nine against a 45-day allowance.",
      },
    ],
    phases: [
      {
        phase: "Ground improvement & drainage",
        period: "Q1 2022 – Q3 2022",
        description:
          "Permanent drainage network, vibro-replacement across the footprint and pad foundations.",
      },
      {
        phase: "Structural steel erection",
        period: "Q2 2022 – Q4 2022",
        description:
          "Erection of four production building frames and the shared utilities block.",
      },
      {
        phase: "Envelope & solar array",
        period: "Q3 2022 – Q2 2023",
        description:
          "Cladding, roof build-up and 14 MW photovoltaic array installation.",
      },
      {
        phase: "Superflat floor construction",
        period: "Q4 2022 – Q3 2023",
        description:
          "Laser-screeded pours to FM2 tolerance with same-day survey verification.",
      },
      {
        phase: "Services, ETP & substation",
        period: "Q1 2023 – Q1 2024",
        description:
          "MEP installation, effluent treatment plant, substation and battery storage.",
      },
      {
        phase: "Commissioning & early handover",
        period: "Q1 2024 – Q2 2024",
        description:
          "Integrated systems testing and handover six weeks ahead of programme.",
      },
    ],
    gallery: gallery("mirsarai", "Mirsarai Industrial Campus"),
  },
  {
    slug: "chattogram-circular-rail",
    title: "Chattogram Circular Rail",
    client: "Bangladesh Railway",
    sector: "Highways & Rail",
    status: "In Progress",
    location: "Chattogram Metropolitan Area",
    country: "Bangladesh",
    coordinates: [22.3569, 91.7832],
    year: "2027",
    durationMonths: 48,
    contractValueCrore: 7200,
    summary:
      "38 kilometres of dual-gauge commuter rail with sixteen stations and a 420-metre Karnaphuli crossing, threaded through a hillside city on reclaimed and flood-prone ground.",
    overview: [
      "Chattogram's population has outgrown a road network constrained by hills on one side and the river on the other. The circular line connects the port, the industrial belt and the residential districts on a single orbital alignment.",
      "The scheme includes 38 kilometres of dual-gauge track, sixteen stations, a maintenance depot and a 420-metre crossing of the Karnaphuli designed to clear port navigation.",
      "Roughly 40% of the alignment runs across land that floods during monsoon high tide, so the formation level was set by drainage and surge rather than by gradient.",
    ],
    heroImage: "/images/projects/ctg-rail-hero.svg",
    thumbnail: "/images/projects/ctg-rail-thumb.svg",
    stats: [
      { label: "Route length", value: "38 km" },
      { label: "Stations", value: "16" },
      { label: "River crossing", value: "420 m" },
      { label: "Elevated section", value: "14 km" },
    ],
    technologies: [
      "Dual-gauge track construction",
      "Precast segmental viaduct",
      "Hillside slope stabilisation",
      "Tidal flood formation design",
      "Karnaphuli navigation span",
      "Level crossing elimination",
      "Signalling & telecommunications",
      "Depot & stabling facilities",
    ],
    challenges: [
      {
        title: "Monsoon tidal flooding across the alignment",
        body: "Around 40% of the route crosses land that goes under water when heavy monsoon rain coincides with high tide — a combination that occurs several times each season and shuts the city's roads.",
      },
      {
        title: "Hillside cuttings in weathered sandstone",
        body: "Sections of the alignment cut into hill slopes of weathered sandstone and residual soil with a documented landslide history during intense rainfall.",
      },
      {
        title: "Crossing a working port river",
        body: "The Karnaphuli carries continuous vessel movement to the country's main port. Navigation could not be restricted, and the crossing had to clear the design vessel air draught.",
      },
    ],
    solutions: [
      {
        title: "Formation set by surge, not by gradient",
        body: "Track formation was raised above the modelled 1-in-50-year combined rainfall and tide level for the full flood-prone length, with the alignment carried on viaduct where embankment would have blocked drainage.",
      },
      {
        title: "Slopes drained, anchored and monitored",
        body: "Cuttings were designed with benched profiles, deep horizontal drains and soil nailing, with rainfall-triggered instrumentation reporting to a control centre. No slope movement above threshold has been recorded to date.",
      },
      {
        title: "Balanced cantilever over the navigation channel",
        body: "The main navigation span is built by balanced cantilever from both banks, so no falsework enters the channel and vessel movement continues unrestricted throughout construction.",
      },
    ],
    phases: [
      {
        phase: "Land acquisition & enabling works",
        period: "Q1 2024 – Q1 2025",
        description:
          "Land acquisition, resettlement delivery, utility diversion and site establishment.",
      },
      {
        phase: "Karnaphuli crossing",
        period: "Q3 2024 – Q2 2027",
        description:
          "Marine piling, pier construction and balanced cantilever deck erection.",
      },
      {
        phase: "Viaduct & elevated sections",
        period: "Q2 2025 – Q3 2026",
        description:
          "14km of precast segmental viaduct across the flood-prone alignment.",
      },
      {
        phase: "At-grade formation & slope works",
        period: "Q1 2025 – Q4 2026",
        description:
          "Embankment, hillside cuttings, slope stabilisation and drainage.",
      },
      {
        phase: "Track, stations & depot",
        period: "Q4 2025 – Q2 2027",
        description:
          "Dual-gauge trackwork, sixteen stations and maintenance depot construction.",
      },
      {
        phase: "Signalling, testing & trial running",
        period: "Q2 2027 – Q4 2027",
        description:
          "Signalling, telecommunications, dynamic testing and trial operation.",
      },
    ],
    gallery: gallery("ctg-rail", "Chattogram Circular Rail"),
  },
  {
    slug: "kaptai-pumped-storage",
    title: "Kaptai Pumped Storage Scheme",
    client: "Bangladesh Power Development Board",
    sector: "Water & Energy",
    status: "In Progress",
    location: "Rangamati Hill District",
    country: "Bangladesh",
    coordinates: [22.4954, 92.22],
    year: "2029",
    durationMonths: 70,
    contractValueCrore: 16400,
    summary:
      "Bangladesh's first pumped storage facility — 640 MW with an underground machine hall and 4.6 kilometres of waterway tunnel through hill tract geology.",
    overview: [
      "As solar capacity grows, Bangladesh's grid increasingly needs storage that can absorb midday generation and release it into the evening peak. Kaptai provides 640 MW of dispatchable capacity and 8.4 GWh of storage.",
      "Meghna is delivering the upper reservoir, headrace and tailrace tunnels, the underground machine hall cavern, and the surface substation and grid connection civils.",
      "The machine hall is a 118-metre by 22-metre cavern excavated 310 metres below ground in variably weathered sedimentary rock — a very different proposition from the alluvial ground most Bangladeshi civil works sit in.",
    ],
    heroImage: "/images/projects/kaptai-hero.svg",
    thumbnail: "/images/projects/kaptai-thumb.svg",
    stats: [
      { label: "Generating capacity", value: "640 MW" },
      { label: "Storage", value: "8.4 GWh" },
      { label: "Waterway tunnel", value: "4.6 km" },
      { label: "Cavern depth", value: "310 m" },
    ],
    technologies: [
      "Underground cavern excavation",
      "Drill-and-blast tunnelling",
      "Pattern rock bolting",
      "Fibre-reinforced sprayed concrete",
      "Steel-lined pressure shaft",
      "Rock mass monitoring",
      "Hill road access construction",
      "Grid connection civils",
    ],
    challenges: [
      {
        title: "Variably weathered rock with no local precedent",
        body: "Bangladesh has almost no deep hard-rock tunnelling history. The hill tract sedimentary sequence is variably weathered and interbedded, and there was no comparable local project to calibrate support design against.",
      },
      {
        title: "A remote site with no access road",
        body: "The nearest sealed road ended fourteen kilometres from the cavern portal, across hill terrain with no grid power, no water supply and no accommodation within daily travelling distance.",
      },
      {
        title: "Working in a protected hill environment",
        body: "The scheme sits in an ecologically sensitive hill tract with protected forest, indigenous community land and steep slopes where uncontrolled spoil disposal would cause serious erosion downstream.",
      },
    ],
    solutions: [
      {
        title: "Support confirmed by observation, not assumption",
        body: "Excavation follows an observational method with instrumented rock bolts and convergence monitoring confirming stability before each bench is released. Measured crown convergence is tracking at 68% of predicted.",
      },
      {
        title: "A self-sufficient site built first",
        body: "Meghna built the fourteen-kilometre access road, a 280-bed accommodation camp, an on-site batching plant and a temporary 11 kV supply before main works commenced.",
      },
      {
        title: "Spoil placed, drained and replanted",
        body: "All excavated spoil goes to engineered, drained and progressively replanted disposal areas agreed with the Forest Department and local community leaders. Downstream turbidity monitoring has stayed inside consent throughout.",
      },
    ],
    phases: [
      {
        phase: "Access & site infrastructure",
        period: "Q3 2024 – Q3 2025",
        description:
          "Fourteen-kilometre access road, accommodation camp, batching plant and temporary power.",
      },
      {
        phase: "Tunnel drives",
        period: "Q1 2025 – Q4 2027",
        description:
          "Drill-and-blast excavation of 4.6km of headrace and tailrace waterway tunnels.",
      },
      {
        phase: "Machine hall cavern",
        period: "Q3 2025 – Q1 2028",
        description:
          "Benched cavern excavation with pattern bolting, sprayed concrete and convergence monitoring.",
      },
      {
        phase: "Upper reservoir",
        period: "Q2 2026 – Q3 2028",
        description:
          "Upper reservoir embankment, lining, spillway and intake works.",
      },
      {
        phase: "Mechanical & electrical installation",
        period: "Q1 2028 – Q2 2029",
        description:
          "Pump-turbine installation, steel pressure shaft lining and substation construction.",
      },
      {
        phase: "Filling, testing & commissioning",
        period: "Q2 2029 – Q4 2029",
        description:
          "First filling, dam safety verification, wet commissioning and grid energisation.",
      },
    ],
    gallery: gallery("kaptai", "Kaptai Pumped Storage Scheme"),
  },
  {
    slug: "buriganga-southern-viaduct",
    title: "Buriganga Southern Viaduct",
    client: "Roads & Highways Department",
    sector: "Bridges & Viaducts",
    status: "Completed",
    location: "Keraniganj, Dhaka",
    country: "Bangladesh",
    coordinates: [23.7, 90.4],
    year: "2022",
    durationMonths: 32,
    contractValueCrore: 3800,
    summary:
      "A 3.4-kilometre precast segmental viaduct erected over the Buriganga and dense Keraniganj settlement using overhead launching gantries — with almost no ground taken.",
    overview: [
      "The viaduct completes Dhaka's southern bypass, crossing the Buriganga river and the dense workshop and housing district of Keraniganj within a 3.4-kilometre alignment.",
      "1,860 precast segments were cast in a purpose-built yard and erected span-by-span using two overhead launching gantries, which meant the alignment could pass over an area where acquiring a construction corridor at ground level would have displaced thousands of households.",
      "Total land take was reduced to the pier footprints alone — a fraction of what a conventional embankment or ground-supported scheme would have required.",
    ],
    heroImage: "/images/projects/buriganga-hero.svg",
    thumbnail: "/images/projects/buriganga-thumb.svg",
    stats: [
      { label: "Viaduct length", value: "3,400 m" },
      { label: "Precast segments", value: "1,860" },
      { label: "Typical span", value: "45 m" },
      { label: "Households displaced", value: "0" },
    ],
    technologies: [
      "Precast segmental construction",
      "Overhead launching gantries",
      "Match-cast segment production",
      "External post-tensioning",
      "Micropile foundations",
      "Geometry control software",
      "River navigation management",
      "Elastomeric bearings",
    ],
    challenges: [
      {
        title: "Dense settlement directly beneath the alignment",
        body: "Keraniganj is one of the most densely occupied areas of greater Dhaka. Any scheme requiring a ground-level construction corridor would have displaced thousands of households and small workshops.",
      },
      {
        title: "A polluted, actively navigated river",
        body: "The Buriganga carries continuous small vessel traffic and is heavily polluted, making conventional in-river falsework both an obstruction and a health exposure for the workforce.",
      },
      {
        title: "Cumulative geometry error over 3.4 kilometres",
        body: "Match-cast segmental construction compounds every casting deviation along a span. Without active correction, closure at the far end of a 3.4-kilometre viaduct would have fallen well outside tolerance.",
      },
    ],
    solutions: [
      {
        title: "Everything built from deck level",
        body: "Two overhead launching gantries erected all 1,860 segments working from the completed deck, with piers founded on individually accessed micropile groups. No household was displaced by the works.",
      },
      {
        title: "No falsework in the river",
        body: "River spans were erected by the same gantries with no in-water temporary works. Navigation was maintained throughout, and workforce contact with the river was limited to the pier construction phase under strict controls.",
      },
      {
        title: "Geometry corrected span by span",
        body: "Every segment was surveyed on the casting bed and its measured geometry fed into the erection model, distributing correction across subsequent segments. Final closure error was 9mm.",
      },
    ],
    phases: [
      {
        phase: "Casting yard establishment",
        period: "Q1 2020 – Q3 2020",
        description:
          "Precast facility, casting beds and segment storage area construction.",
      },
      {
        phase: "Foundations & piers",
        period: "Q2 2020 – Q3 2021",
        description:
          "Micropile groups, pile caps and pier construction within constrained footprints.",
      },
      {
        phase: "Segment production",
        period: "Q3 2020 – Q3 2021",
        description:
          "Match-cast production of 1,860 segments with individual geometry survey.",
      },
      {
        phase: "Gantry erection",
        period: "Q1 2021 – Q1 2022",
        description:
          "Span-by-span erection using two overhead launching gantries with active geometry control.",
      },
      {
        phase: "River spans",
        period: "Q3 2021 – Q4 2021",
        description:
          "Buriganga crossing spans erected from deck level with navigation maintained.",
      },
      {
        phase: "Surfacing, testing & opening",
        period: "Q1 2022 – Q2 2022",
        description:
          "Waterproofing, surfacing, parapets, load testing and opening to traffic.",
      },
    ],
    gallery: gallery("buriganga", "Buriganga Southern Viaduct"),
    awards: ["IEB Award for Structural Engineering 2023"],
  },
  {
    slug: "payra-offshore-wind",
    title: "Payra Offshore Wind Foundations",
    client: "Bangladesh Power Development Board",
    sector: "Marine & Ports",
    status: "Handover",
    location: "Patuakhali coast",
    country: "Bangladesh",
    coordinates: [21.85, 90.3],
    year: "2025",
    durationMonths: 34,
    contractValueCrore: 8900,
    summary:
      "68 monopile foundations installed in the Bay of Bengal for the country's first offshore wind farm, designed against cyclone loading and installed inside a narrow weather window.",
    overview: [
      "Bangladesh has limited land available for utility-scale renewables, which makes the shallow Bay of Bengal shelf strategically important. Payra is the country's first offshore wind development.",
      "Meghna delivered the foundation package: 68 monopiles up to 8.5 metres in diameter and one offshore substation platform jacket, installed in water depths to 26 metres.",
      "Cyclone loading, not normal operating wind, governed the foundation design. The structures are sized for a storm the farm may see once in its life rather than for the conditions it works in daily.",
    ],
    heroImage: "/images/projects/payra-wind-hero.svg",
    thumbnail: "/images/projects/payra-wind-thumb.svg",
    stats: [
      { label: "Monopiles installed", value: "68" },
      { label: "Maximum diameter", value: "8.5 m" },
      { label: "Water depth", value: "26 m" },
      { label: "Farm capacity", value: "520 MW" },
    ],
    technologies: [
      "Monopile installation",
      "Jacket foundation installation",
      "Cyclone-governed structural design",
      "Bubble curtain noise abatement",
      "Scour protection placement",
      "Jack-up installation vessel",
      "Metocean forecasting",
      "Marine mammal observation",
    ],
    challenges: [
      {
        title: "Cyclone loading governs the design",
        body: "Bay of Bengal cyclones impose loads far beyond normal operating conditions. Foundations sized for typical offshore wind criteria would have been structurally inadequate for a design-level storm.",
      },
      {
        title: "A narrow installation window",
        body: "Pre-monsoon and post-monsoon conditions left roughly seven workable months a year, split across two separate windows rather than one continuous season.",
      },
      {
        title: "Deep soft delta sediment",
        body: "The seabed carries thick soft delta sediment with no dense layer at practical pile penetration, giving low lateral resistance exactly where cyclone loading demands the most.",
      },
    ],
    solutions: [
      {
        title: "Designed against the storm, verified by testing",
        body: "Foundations were designed to cyclone return-period loading with lateral response verified by full-scale pile testing on the first installed monopile rather than by correlation alone.",
      },
      {
        title: "Two seasons planned as one campaign",
        body: "A rolling metocean forecast drove a single continuous installation plan spanning both windows, with the vessel demobilised and re-mobilised on plan. Weather downtime was held to 21% against a 34% tender allowance.",
      },
      {
        title: "Larger diameter, greater penetration",
        body: "Monopile diameter was increased and penetration extended to develop the lateral capacity the soft sediment could not otherwise provide. All 68 piles reached design penetration with no refusal.",
      },
    ],
    phases: [
      {
        phase: "Geophysical & geotechnical survey",
        period: "Q2 2022 – Q1 2023",
        description:
          "Full array survey, seabed characterisation and site-specific pile design verification.",
      },
      {
        phase: "Fabrication & load-out",
        period: "Q4 2022 – Q2 2024",
        description:
          "Monopile and jacket fabrication, coating and marshalling at the load-out port.",
      },
      {
        phase: "Season one installation",
        period: "Q4 2023 – Q1 2024",
        description:
          "Installation of 34 monopiles with noise abatement and full-scale lateral pile testing.",
      },
      {
        phase: "Season two installation",
        period: "Q4 2024 – Q1 2025",
        description:
          "Remaining 34 monopiles plus the offshore substation jacket foundation.",
      },
      {
        phase: "Scour protection & cable interface",
        period: "Q1 2024 – Q2 2025",
        description:
          "Rock placement scour protection and cable protection system installation.",
      },
      {
        phase: "Survey, verification & handover",
        period: "Q2 2025 – Q3 2025",
        description:
          "As-built survey, verticality verification and phased handover to the turbine installer.",
      },
    ],
    gallery: gallery("payra-wind", "Payra Offshore Wind Foundations"),
  },
  {
    slug: "kamalapur-station-redevelopment",
    title: "Kamalapur Station Redevelopment",
    client: "Bangladesh Railway",
    sector: "Industrial & Buildings",
    status: "In Progress",
    location: "Kamalapur, Dhaka",
    country: "Bangladesh",
    coordinates: [23.732, 90.4265],
    year: "2027",
    durationMonths: 54,
    contractValueCrore: 7600,
    summary:
      "Complete redevelopment of the country's principal railway terminus — handling 60,000 passengers a day and a heritage 1960s shell — without closing a single platform.",
    overview: [
      "Kamalapur is the main railway gateway to Dhaka and a recognised piece of 1960s modernist architecture. The redevelopment triples concourse capacity, integrates the station with the metro network and completely renews the platform environment.",
      "The station handled around 60,000 passengers daily throughout construction, rising several times over during Eid travel. No platform closed for more than 36 consecutive hours.",
      "The distinctive parabolic shell roof is a protected element, conserved and structurally strengthened rather than replaced.",
    ],
    heroImage: "/images/projects/kamalapur-hero.svg",
    thumbnail: "/images/projects/kamalapur-thumb.svg",
    stats: [
      { label: "Daily passengers", value: "60,000" },
      { label: "Concourse area", value: "34,000 m²" },
      { label: "Platforms renewed", value: "12" },
      { label: "Metro interchange", value: "Integrated" },
    ],
    technologies: [
      "Heritage shell conservation",
      "Top-down basement construction",
      "Structural strengthening",
      "Laser scanning & HBIM",
      "Temporary passenger routing",
      "Phased possession management",
      "Metro interchange integration",
      "Modular platform components",
    ],
    challenges: [
      {
        title: "Eid passenger surges during construction",
        body: "Kamalapur's normal 60,000 daily passengers rise several-fold during Eid, when the whole country travels at once. Temporary arrangements adequate for a normal week would fail dangerously in that window.",
      },
      {
        title: "A protected shell roof with unknown capacity",
        body: "The 1960s parabolic shell is architecturally protected but had been repaired repeatedly without records. Its residual capacity and load paths were unknown before intrusive investigation.",
      },
      {
        title: "Excavating beneath a live concourse for the metro link",
        body: "The metro interchange required 16 metres of excavation directly beneath the operational concourse, with movement tolerances set by the heritage structure above.",
      },
    ],
    solutions: [
      {
        title: "Temporary works sized for Eid, not for Tuesday",
        body: "Every temporary passenger arrangement was designed and crowd-modelled against peak Eid flow rather than average demand, and all high-impact works were suspended for the ten days around each festival.",
      },
      {
        title: "The shell measured before it was touched",
        body: "Full laser scanning and material testing produced an HBIM model of the existing shell, replacing assumption with measurement and identifying six strengthening interventions before design was fixed.",
      },
      {
        title: "Top-down excavation with live monitoring",
        body: "The interchange box is built top-down with the concourse slab acting as permanent propping. Real-time monitoring reports movement of the shell against a 6mm trigger, currently tracking below 2.5mm.",
      },
    ],
    phases: [
      {
        phase: "Survey & heritage recording",
        period: "Q2 2023 – Q1 2024",
        description:
          "Laser scanning, material testing, HBIM model creation and heritage impact assessment.",
      },
      {
        phase: "Enabling & temporary works",
        period: "Q4 2023 – Q3 2024",
        description:
          "Temporary passenger routes, hoarding, service diversions and structural propping.",
      },
      {
        phase: "Shell strengthening",
        period: "Q2 2024 – Q4 2025",
        description:
          "Six strengthening interventions to the parabolic shell and concrete repair.",
      },
      {
        phase: "Metro interchange box",
        period: "Q3 2024 – Q2 2026",
        description:
          "Top-down excavation to 16m beneath the live concourse with continuous monitoring.",
      },
      {
        phase: "Platform & concourse renewal",
        period: "Q1 2025 – Q2 2027",
        description:
          "Phased renewal of twelve platforms and concourse fit-out under rolling possessions.",
      },
      {
        phase: "Conservation & completion",
        period: "Q3 2026 – Q4 2027",
        description:
          "Shell conservation, final fit-out and phased operational handover.",
      },
    ],
    gallery: gallery("kamalapur", "Kamalapur Station Redevelopment"),
  },
  {
    slug: "teesta-solar-transmission",
    title: "Teesta Solar & Transmission Link",
    client: "Power Grid Company of Bangladesh",
    sector: "Water & Energy",
    status: "Completed",
    location: "Nilphamari — Rangpur",
    country: "Bangladesh",
    coordinates: [25.85, 89.1],
    year: "2024",
    durationMonths: 28,
    contractValueCrore: 5200,
    summary:
      "480 MW of solar generation on flood-prone Teesta char land with 165 kilometres of 400 kV transmission, delivered two months early.",
    overview: [
      "Land scarcity is the binding constraint on solar in Bangladesh. The Teesta scheme uses char and flood-plain land that cannot support reliable agriculture, converting a liability into generating capacity.",
      "Meghna delivered all balance of plant — piling, tracker installation, collection systems and substations — plus 165 kilometres of 400 kV transmission and two switchyards.",
      "Because the site floods, the entire array is elevated above the modelled 1-in-50-year flood level and the layout is designed to let flood water pass through rather than pond behind it.",
    ],
    heroImage: "/images/projects/teesta-solar-hero.svg",
    thumbnail: "/images/projects/teesta-solar-thumb.svg",
    stats: [
      { label: "Generation capacity", value: "480 MW" },
      { label: "Transmission line", value: "165 km" },
      { label: "Tracker piles", value: "94,000" },
      { label: "Delivered", value: "2 mo early" },
    ],
    technologies: [
      "Elevated single-axis trackers",
      "Flood-resilient array layout",
      "Screw and driven pile foundations",
      "400 kV transmission construction",
      "GIS substation installation",
      "River erosion protection",
      "SCADA & grid integration",
      "Robotic panel cleaning",
    ],
    challenges: [
      {
        title: "An array on land that floods every year",
        body: "The site inundates during monsoon. Conventional ground-mounted solar would be submerged annually, and any layout that blocked flood flow would worsen upstream inundation for surrounding villages.",
      },
      {
        title: "Char land with no bearing capacity",
        body: "Teesta char is recently deposited loose sand and silt with very low bearing capacity and a history of erosion, offering nothing that a standard driven pile could develop capacity in.",
      },
      {
        title: "River channel migration",
        body: "The Teesta migrates laterally, and the western boundary of the site sat within the historical envelope of channel movement over the asset's design life.",
      },
    ],
    solutions: [
      {
        title: "Elevated and permeable by design",
        body: "Trackers are mounted above the modelled 1-in-50-year flood level, with row orientation and spacing set to let flood flow pass through. The array came through two monsoon floods with no generation loss.",
      },
      {
        title: "Screw piles proven by on-site testing",
        body: "Helical screw piles were selected over driven piles and verified by a 220-pile test programme before bulk installation. Pile rework across 94,000 foundations was held to 0.6%.",
      },
      {
        title: "Bank protection built before the array",
        body: "Geotextile and CC block revetment along the western boundary was constructed first, ahead of any generating asset being installed behind it. Surveyed bank line has held since completion.",
      },
    ],
    phases: [
      {
        phase: "Land preparation & bank protection",
        period: "Q3 2021 – Q2 2022",
        description:
          "Site clearance, flood modelling verification and western boundary revetment.",
      },
      {
        phase: "Pile testing & foundations",
        period: "Q1 2022 – Q3 2022",
        description:
          "220-pile test programme and installation of 94,000 helical screw pile foundations.",
      },
      {
        phase: "Tracker & module installation",
        period: "Q2 2022 – Q3 2023",
        description:
          "Elevated single-axis tracker assembly and module installation across the array.",
      },
      {
        phase: "Collection & substations",
        period: "Q4 2022 – Q1 2024",
        description:
          "Medium-voltage collection network, inverter stations and two switchyards.",
      },
      {
        phase: "Transmission line construction",
        period: "Q1 2023 – Q2 2024",
        description:
          "165km of 400 kV line including tower foundations, erection and stringing.",
      },
      {
        phase: "Energisation & performance testing",
        period: "Q2 2024 – Q3 2024",
        description:
          "Grid energisation, capacity testing and handover two months ahead of programme.",
      },
    ],
    gallery: gallery("teesta-solar", "Teesta Solar & Transmission Link"),
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
