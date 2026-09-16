import { IMAGES } from "../images";

export const solutionsData = [
  {
    id: "residential",
    badge: "5 kW – 30 kW",
    capacity: "5 kW – 30 kW",
    category: "Residential",
    categoryIcon: "home",
    title: "Residential Solar",
    description:
      "Designed for luxury homes, farmhouses, and urban residences. Maximize self-generation, power heavy inverter ACs with ease, and export surplus kilowatt-hours to the local distribution company through seamless net metering.",
    image: IMAGES.residence,
    imageAlt: "Residential Solar rooftop panels on a modern luxury home",
    href: "#contact",
  },
  {
    id: "commercial",
    badge: "30 kW – 250 kW",
    capacity: "30 kW – 250 kW",
    category: "Commercial",
    categoryIcon: "corporate_fare",
    title: "Commercial Solar",
    description:
      "Tailored for schools, private hospitals, corporate centers, and retail markets. Drastically reduce day-shift peak consumption and showcase corporate climate leadership with zero interruption during operating hours.",
    image: IMAGES.commercialWarehouse,
    imageAlt:
      "Commercial solar panel layout on hospital and corporate building",
    href: "#contact",
  },
  {
    id: "industrial",
    badge: "250 kW – Multi-MW",
    capacity: "250 kW – Multi-MW",
    category: "Industrial",
    categoryIcon: "factory",
    title: "Industrial Turnkey EPC",
    description:
      "Engineered for manufacturing mills, logistics warehouses, cold storage, and chemical processors. Features smart diesel-generator synchronizers, heavy HT-line transformers, and high-voltage grid export compliance.",
    image: IMAGES.commercialWarehouse,
    imageAlt: "Massive logistics hub rooftop industrial solar panel array",
    href: "#contact",
  },
  {
    id: "agricultural",
    badge: "7.5 HP – 50 HP",
    capacity: "7.5 HP – 50 HP",
    category: "Agriculture",
    categoryIcon: "agriculture",
    title: "Agricultural Solar Tube-Wells",
    description:
      "Ditch expensive, unreliable diesel generators forever. Our high-torque Variable Frequency Drive (VFD) solar pump systems deliver uninterrupted ground-water pumping throughout daylight hours, even in deep water-table zones.",
    image: IMAGES.agricultural,
    imageAlt:
      "Agricultural solar water pump and tube well system in lush green crop field",
    href: "#contact",
  },
  {
    id: "storage",
    badge: "10 kWh – 200 kWh+",
    capacity: "10 kWh – 200 kWh+",
    category: "Storage",
    categoryIcon: "battery_charging_full",
    title: "Battery Energy Storage (BESS)",
    description:
      "Equip your facility with ultra-safe Lithium Iron Phosphate (LiFePO4) storage banks. With over 6,000 cycles and integrated smart BMS telemetry, enjoy uninterrupted nocturnal clean power and peak-shaving benefits.",
    image: IMAGES.storageBattery,
    imageAlt:
      "Lithium Iron Phosphate high density battery storage rack mounted modules",
    href: "#contact",
  },
  {
    id: "infrastructure",
    badge: "Smart Municipal",
    capacity: "Smart Municipal",
    category: "Infrastructure",
    categoryIcon: "wb_twilight",
    title: "Solar Street & Perimeter Lighting",
    description:
      "Autonomous all-in-one smart LED solar luminaires with integrated radar motion sensors, anti-theft battery enclosures, and automatic dusk-to-dawn switching for gated communities, highway segments, and factory perimeters.",
    image: IMAGES.streetLighting,
    imageAlt:
      "Sleek modern solar street lights installed on a clean suburban wide boulevard",
    href: "#contact",
  },
];
