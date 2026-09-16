import { FaArrowRight, FaSolarPanel, FaBolt, FaCircleCheck } from "../icons";
import { IMAGES } from "../images";

export const heroData = {
  bgImage: {
    src: IMAGES.residence,
    alt: "Luxury residence with integrated modern solar panel rooftop system",
  },
  slides: [
    {
      id: 1,
      image: IMAGES.residence,
      alt: "Luxury residential rooftop solar panel installation",
      badge: "Residential & Smart Home Solar",
      titlePrefix: "Power Your Home With ",
      titleHighlight: "Smarter Solar",
      titleSuffix: " Energy.",
      description:
        "Engineered for luxury homes and residences. Slash peak utility tariffs by up to 80% with automated net metering, tier-1 panels, and seamless battery storage.",
      tag: "Residential Solar",
      stat: "80%",
      statLabel: "Bill Savings",
    },
    {
      id: 2,
      image: IMAGES.commercialWarehouse,
      alt: "Commercial & industrial warehouse solar array",
      badge: "Commercial & Industrial Turnkey EPC",
      titlePrefix: "Eliminate Grid Tariffs With ",
      titleHighlight: "Industrial Grade",
      titleSuffix: " Solar.",
      description:
        "Bespoke multi-kilowatt & megawatt rooftop engineering for factories, warehouses, and corporate facilities with 99.2% targeted operational uptime.",
      tag: "Commercial EPC",
      stat: "250kW+",
      statLabel: "Capacity Scales",
    },
    {
      id: 3,
      image: IMAGES.agricultural,
      alt: "Agricultural solar water pump and tube well system in fields",
      badge: "Agricultural Solar Tube-Wells & Farms",
      titlePrefix: "Zero Fuel Costs With ",
      titleHighlight: "High-Torque VFD",
      titleSuffix: " Irrigation.",
      description:
        "Replace expensive diesel tube-wells forever with precision variable frequency drive solar pump systems designed for continuous daytime water output.",
      tag: "Agri Solar",
      stat: "100%",
      statLabel: "Diesel Free",
    },
  ],
  badge: "Tier-1 Certified Clean Energy EPC",
  title: {
    prefix: "Power Your Future With ",
    highlight: "Smarter Solar",
    suffix: " Energy.",
  },
  description:
    "Reliable solar solutions for homes, businesses, industries, and agriculture — precision-engineered to eliminate volatile utility bills, ensure grid resilience, and give you complete sovereignty over your power.",
  primaryCta: {
    text: "Get a Free Solar Consultation",
    href: "#contact",
    icon: FaArrowRight,
  },
  secondaryCta: {
    text: "Explore Our Solutions",
    href: "#solutions",
    icon: FaSolarPanel,
  },
  trustFeatures:
    "Complete Solar Solutions • Tier-1 Quality Products • 25-Year Equipment Warranties",
  savingsCard: {
    tag: "Solar Savings Index",
    tagIcon: FaBolt,
    subTag: "NEPRA Tier-1",
    stat: "Up to 80%",
    statLabel: "Bill Reduction Verified",
    statDescription:
      "Offset surging peak-hour utility tariffs with automated bi-directional net metering and on-demand lithium backup.",
    feature: {
      title: "DISCO Net-Metering",
      badge: "100% Turnkey",
      icon: FaCircleCheck,
    },
    paybackLabel: "Avg. System Payback:",
    paybackValue: "3.2 - 4.5 Years",
  },
};
