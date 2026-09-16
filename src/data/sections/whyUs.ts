import { IMAGES } from "../images";

export const whyUsData = {
  badge: "Why Go Solar With Us",
  heading: "Turn Escalating Grid Tariffs Into Guaranteed Capital Returns.",
  description:
    "With hyper-inflationary utility tariffs, peak fuel adjustments, and frequent load curtailment, independent photovoltaic power is no longer merely an environmental gesture—it is Pakistan's most bankable capital investment. Bilal Center delivers precision-engineered rooftop and ground-mount arrays that lock in your power costs for 25+ years.",
  image: {
    src: IMAGES.commercialWarehouse,
    alt: "Massive commercial warehouse rooftop solar setup by Bilal Center",
  },
  imageOverlay: {
    icon: "energy_savings_leaf",
    category: "Industrial Grade",
    headline: "99.2% Uptime Target",
    badgeText: "ISO 9001:2015",
  },
  valueProps: [
    {
      id: "lower-costs",
      icon: "trending_down",
      iconColorClass: "text-on-tertiary-container",
      title: "Lower Unit Costs",
      description:
        "Eliminate tier-slab rate hikes by generating self-consumed kilowatt-hours right on your premises.",
    },
    {
      id: "zero-downtime",
      icon: "electric_bolt",
      iconColorClass: "text-secondary",
      title: "Zero Downtime",
      description:
        "Intelligent micro-second hybrid transition powers critical continuous equipment during sudden feeder faults.",
    },
    {
      id: "lifepo4-storage",
      icon: "battery_charging_full",
      iconColorClass: "text-on-tertiary-container",
      title: "LiFePO4 Storage",
      description:
        "Modular 5.12 kWh rack-mount battery storage for complete nocturnal autonomy and peak tariff shaving.",
    },
    {
      id: "net-zero",
      icon: "eco",
      iconColorClass: "text-secondary",
      title: "Net Zero Carbon",
      description:
        "Achieve mandatory ESG sustainability compliance and drastically minimize commercial carbon emissions.",
    },
  ],
  cta: {
    text: "Find the Right Solution For Your Facility",
    href: "#solutions-suite",
    icon: "arrow_forward",
  },
};
