import {
  Boxes,
  Drill,
  Flame,
  Gauge,
  Layers,
  Scissors,
  SprayCan,
  Truck,
  Wrench,
  Zap,
} from "lucide-react";

/** Our own fabrication workshop's machinery — from the company profile's
 * "Our Factory Setup" page. */
export const factoryEquipment = [
  {
    name: "Auto Welding Machine",
    description: "H-beam workstation for assembly welding and straightening.",
    icon: Flame,
  },
  {
    name: "CNC Cutting Machine",
    description:
      "Multi-head cutting machine — 9 strip-flame torches plus 2 CNC flame cutting torches.",
    icon: Scissors,
  },
  {
    name: "H-Beam Flange Straightening Machine",
    description: "Corrects flange alignment on built-up H-beam sections before assembly.",
    icon: Wrench,
  },
  {
    name: "ARC Welding Machine",
    description: "Manual arc welding for structural connections and repairs.",
    icon: Zap,
  },
  {
    name: "Assembling Machine",
    description: "Positions and tacks built-up sections ahead of full welding.",
    icon: Boxes,
  },
  {
    name: "Shear Cutting Machine",
    description: "Straight-line shearing of steel plate and sheet to size.",
    icon: Scissors,
  },
  {
    name: "Sheet Profile Machine",
    description: "Roll-forms profiled roof and wall cladding sheets.",
    icon: Layers,
  },
  {
    name: "Magnet Drill Machine",
    description: "Portable magnetic-base drilling for site and workshop steel.",
    icon: Drill,
  },
  {
    name: "MIG Welding Machine",
    description: "Gas metal arc welding for faster, cleaner structural joints.",
    icon: Flame,
  },
  {
    name: "Sand Blasting Machine",
    description: "Surface preparation before priming and coating.",
    icon: SprayCan,
  },
  {
    name: "Paint Spray Machine",
    description: "Even, controlled application of primer and finish coats.",
    icon: SprayCan,
  },
  {
    name: "Stand Drill Machine",
    description: "Bench-mounted precision drilling for plates and connections.",
    icon: Drill,
  },
  {
    name: "Radial Drilling Machine",
    description: "Drills large or heavy sections that can't be moved to a bench drill.",
    icon: Drill,
  },
  {
    name: "Ironworker Machine",
    description: "Combined punching, shearing and notching of structural steel.",
    icon: Wrench,
  },
  {
    name: "Generator",
    description: "Independent power supply keeping fabrication running without interruption.",
    icon: Gauge,
  },
  {
    name: "Saw Welding Machine",
    description: "Submerged-arc welding for long, consistent structural seams.",
    icon: Truck,
  },
];
