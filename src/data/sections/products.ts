import { IMAGES } from "../images";

export const filterCategories = [
  { id: "all", label: "All Components" },
  { id: "panels", label: "Panels" },
  { id: "inverters", label: "Inverters" },
  { id: "batteries", label: "Batteries" },
  { id: "structures", label: "Structures" },
];

export const productsData = [
  {
    id: "topcon-module",
    badge: "Tier-1 PV Module",
    warranty: "25-Yr Yield Warranty",
    warrantyColorClass: "text-on-tertiary-container",
    category: "panels",
    title: "N-Type TOPCon Bifacial Monocrystalline",
    description:
      "Dual-glass architecture with superior low-light coefficient and reduced PID degradation.",
    image: IMAGES.products.topconModule,
    imageAlt:
      "High tech Tier-1 monocrystalline N-type solar panel product shot",
    specs: [
      { label: "Output", value: "585W - 610W" },
      { label: "Efficiency", value: "22.8%" },
      { label: "Bifaciality", value: "Up to 80%" },
      { label: "Glass", value: "2.0mm Dual Glass" },
    ],
    href: "#contact",
  },
  {
    id: "hybrid-inverter",
    badge: "Smart Inverter",
    warranty: "IP65 Rated",
    warrantyColorClass: "text-secondary",
    category: "inverters",
    title: "Hybrid Three-Phase Smart Inverter",
    description:
      "Dual MPPT tracker with unbalance phase support, generator auto-start, and mobile app sync.",
    image: IMAGES.products.hybridInverter,
    imageAlt:
      "Hybrid Three-Phase Smart Inverter sleek wall mounted industrial solar inverter",
    specs: [
      { label: "Capacity", value: "10 kW - 20 kW" },
      { label: "Max Efficiency", value: "98.4%" },
      { label: "Switchover", value: "< 4ms UPS Level" },
      { label: "Connectivity", value: "Wi-Fi / 4G Cloud" },
    ],
    href: "#contact",
  },
  {
    id: "lifepo4-battery",
    badge: "Energy Storage",
    warranty: "6,000+ Cycles",
    warrantyColorClass: "text-on-tertiary-container",
    category: "batteries",
    title: "LiFePO4 Rack-Mount Battery System",
    description:
      "High-density lithium chemistry with intelligent BMS protection against over-voltage and thermal stress.",
    image: IMAGES.products.lifepo4Battery,
    imageAlt: "Sleek server rack mounted LiFePO4 solar lithium battery module",
    specs: [
      { label: "Module Spec", value: "51.2V 100Ah" },
      { label: "Storage Yield", value: "5.12 kWh / unit" },
      { label: "Scalability", value: "Up to 15 Parallel" },
      { label: "Warranty", value: "10-Year Limited" },
    ],
    href: "#contact",
  },
  {
    id: "commercial-inverter",
    badge: "Commercial String",
    warranty: "Multi-MPPT High Yield",
    warrantyColorClass: "text-on-tertiary-container",
    category: "inverters",
    title: "Commercial On-Grid String Inverter",
    description:
      "Multi-string telemetry, integrated anti-PID function, and smart I-V curve scanning.",
    image: IMAGES.products.commercialInverter,
    imageAlt:
      "Commercial grid tied solar string inverter high power industrial equipment",
    specs: [
      { label: "Capacity", value: "25 kW - 100 kW" },
      { label: "Euro Efficiency", value: "98.7%" },
      { label: "MPPT Inputs", value: "Up to 9 Trackers" },
      { label: "Cooling", value: "Smart Forced Air" },
    ],
    href: "#contact",
  },
  {
    id: "agri-vfd",
    badge: "Agri-Controller",
    warranty: "Dry-Run Protection",
    warrantyColorClass: "text-secondary",
    category: "inverters",
    title: "Solar VFD Agricultural Controller",
    description:
      "Automatic high-torque tracking for submersible & centrifugal pumps with sensorless vector control.",
    image: IMAGES.products.agriVfd,
    imageAlt: "Solar Variable Frequency Drive VFD agricultural pump controller",
    specs: [
      { label: "Motor Drive", value: "7.5 HP - 40 HP" },
      { label: "MPPT Efficiency", value: "99.1%" },
      { label: "Input Voltage", value: "350V - 750V DC" },
      { label: "Features", value: "Water-Level Sensors" },
    ],
    href: "#contact",
  },
  {
    id: "mounting-structure",
    badge: "Mounting & Safety",
    warranty: "140 km/h Wind Load",
    warrantyColorClass: "text-on-tertiary-container",
    category: "structures",
    title: "Anodized Structural Mounting Kits",
    description:
      "High-tensile AL6005-T5 aluminum framing with SUS304 stainless fast-connect clamps and SPD Type II arrestors.",
    image: IMAGES.products.mountingStructure,
    imageAlt:
      "Anodized structural aluminum solar mounting rails and stainless steel clamps",
    specs: [
      { label: "Alloy", value: "AL6005-T5 Anodized" },
      { label: "Surge Rating", value: "Class II / 40kA" },
      { label: "Tilt Angle", value: "15° - 35° Custom" },
      { label: "Corrosion", value: "C5 Anti-Rust" },
    ],
    href: "#contact",
  },
];
