import { IMAGES } from "../images";

export const projectsData = [
  {
    id: "residence-dha-lahore",
    category: "Residential",
    location: "DHA Phase 6, Lahore",
    title: "15 kW Hybrid Net-Metered Residence",
    description:
      "Equipped with Tier-1 bifacial panels, 15 kW smart three-phase hybrid inverter, and 10 kWh lithium storage bank. Achieved 82% direct power self-sufficiency with bi-directional surplus feed back to LESCO.",
    image: IMAGES.residence,
    imageAlt:
      "Luxury residence 15 kW hybrid solar system installed in DHA Lahore",
    metrics: [
      { label: "System Size", value: "15.4 kWp" },
      { label: "Annual Output", value: "21,800 kWh" },
      { label: "Bill Reduction", value: "84% Off Grid", isHighlighted: true },
    ],
    href: "#contact",
  },
  {
    id: "commercial-logistics-sheikhupura",
    category: "Commercial",
    location: "Sheikhupura Industrial Road",
    title: "250 kW Commercial Logistics Distribution Hub",
    description:
      "Engineered rooftop grid-synchronized array covering 28,000 sq ft of standing-seam industrial metal roof without structural penetration. Synchronized with internal backup generator controls for instantaneous load transition.",
    image: IMAGES.commercialWarehouse,
    imageAlt:
      "Massive commercial warehouse rooftop solar setup 250 kW on Sheikhupura Road",
    metrics: [
      { label: "System Size", value: "250 kWp" },
      { label: "Annual Yield", value: "345,000 kWh" },
      { label: "Payback ROI", value: "3.4 Years", isHighlighted: true },
    ],
    href: "#contact",
  },
  {
    id: "agri-tubewell-faisalabad",
    category: "Agricultural",
    location: "Faisalabad Agricultural Belt",
    title: "20 HP Solar Irrigation Tube-Well",
    description:
      "Replaced two polluting diesel pump sets for a 65-acre citrus and wheat orchard. High-efficiency VFD inverter and auto water-level telemetry deliver continuous high-flow water from morning until dusk at zero operational fuel cost.",
    image: IMAGES.agricultural,
    imageAlt:
      "Solar powered agricultural tube well system operating in Faisalabad wheat farm",
    metrics: [
      { label: "Pump Drive", value: "20 HP VFD" },
      { label: "Diesel Saved", value: "100% Free" },
      { label: "Water Discharge", value: "1.8 Cusec", isHighlighted: true },
    ],
    href: "#contact",
  },
  {
    id: "industrial-sundar-lahore",
    category: "Industrial EPC",
    location: "Sundar Industrial Estate, Lahore",
    title: "500 kW Grid-Tied Manufacturing Facility",
    description:
      "Industrial-scale solar installation synchronized with high-voltage 11kV substation. Features advanced anti-islanding relays, multi-string inverter arrays, and zero-export telemetry limits for continuous textile production line stability.",
    image: IMAGES.commercialWarehouse,
    imageAlt:
      "Industrial facility 500 kW grid tied turnkey solution in Sundar Industrial Estate",
    metrics: [
      { label: "Total Capacity", value: "500 kWp" },
      { label: "CO2 Offset", value: "380 Tons/Yr" },
      {
        label: "Grid Peak Shave",
        value: "48% Tariff Drop",
        isHighlighted: true,
      },
    ],
    href: "#contact",
  },
];
