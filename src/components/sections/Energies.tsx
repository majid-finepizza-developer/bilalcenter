import React from "react";
import { energyImpactData } from "../../data/index";
import { FaBolt, FaShieldHalved, FaLeaf, FaClock } from "../../data/icons";

export const Energies: React.FC = () => {
  const { eyebrow, title, description, disclaimer, metrics } = energyImpactData;

  // Map metric IDs to relevant FontAwesome icons
  const getMetricIcon = (id: string) => {
    switch (id) {
      case "savings":
        return <FaBolt className="text-xl text-[var(--color-secondary-container)]" />;
      case "grid-dependency":
        return <FaShieldHalved className="text-xl text-[var(--color-secondary-container)]" />;
      case "clean-energy":
        return <FaLeaf className="text-xl text-[var(--color-secondary-container)]" />;
      case "payback":
        return <FaClock className="text-xl text-[var(--color-secondary-container)]" />;
      default:
        return null;
    }
  };

  return (
    <section
      className="relative w-full overflow-hidden bg-[var(--color-primary-container)] py-[var(--section-py)] text-[var(--color-on-primary)] md:py-[var(--section-py-md)] lg:py-[var(--section-py-lg)]"
      id="energies"
    >
      {/* Background Radial Pattern Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#fea619_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="section-header section-header--center">
          <span className="typo-eyebrow text-[var(--color-secondary-container)]">
            {eyebrow}
          </span>
          <h2 className="typo-section-title text-[var(--color-on-primary)]">
            {title}
          </h2>
          <p className="typo-section-desc text-[var(--color-on-primary-container)]">
            {description}
          </p>
        </div>

        {/* Responsive Metrics Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {metrics.map((metric) => (
            <div
              key={metric.id}
              className="flex flex-col gap-2 rounded-xl bg-[var(--color-surface-container-lowest)]/10 p-5 backdrop-blur-md sm:p-6 border border-white/10"
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--color-secondary-container)]">
                  {metric.value}
                </span>
                {getMetricIcon(metric.id)}
              </div>
              <h3 className="typo-card-title text-[var(--color-on-primary)]">
                {metric.title}
              </h3>
              <p className="typo-card-body leading-relaxed text-[var(--color-on-primary-container)]">
                {metric.description}
              </p>
            </div>
          ))}
        </div>

        {/* Disclaimer Footer */}
        <p className="mx-auto max-w-2xl text-center typo-technical text-[var(--color-on-primary-container)] opacity-85">
          {disclaimer}
        </p>
      </div>
    </section>
  );
};

export default Energies;
