import React from "react";
import { processSteps } from "../../data/index";

export const Process: React.FC = () => {
  return (
    <section
      className="w-full bg-[var(--color-surface)] py-[var(--section-py)] md:py-[var(--section-py-md)] lg:py-[var(--section-py-lg)]"
      id="process"
    >
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header section-header--center">
          <span className="typo-eyebrow text-[var(--color-secondary)]">
            Structured EPC Workflow
          </span>
          <h2 className="typo-section-title text-[var(--color-on-surface)]">
            From Sunlight to Savings
          </h2>
          <p className="typo-section-desc text-[var(--color-on-surface-variant)]">
            Our 4-stage engineering approach ensures zero guesswork, optimal
            tilt geometry, and frictionless DISCO green-meter authorization.
          </p>
        </div>

        {/* Workflow Timeline Grid: 1 col on mobile -> 2 cols on tablet -> 4 cols on desktop */}
        <div className="relative grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {processSteps.map((step) => (
            <div
              key={step.id}
              className="relative flex flex-col gap-4 rounded-xl bg-[var(--color-surface-container-lowest)] p-5 shadow-sm transition-shadow hover:shadow-md sm:p-6 border border-[var(--color-outline-variant)]/30"
            >
              {/* Step Number Badge */}
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--color-surface-container)] font-bold text-2xl text-[var(--color-secondary)]">
                {step.stepNumber}
              </div>

              {/* Title & Description */}
              <div className="flex flex-col gap-2">
                <h3 className="typo-card-title text-[var(--color-on-surface)]">
                  {step.title}
                </h3>
                <p className="typo-card-body leading-relaxed text-[var(--color-on-surface-variant)]">
                  {step.description}
                </p>
              </div>

              {/* Timeline Stage Badge */}
              <div className="mt-auto pt-2 typo-technical text-[var(--color-secondary)] font-bold uppercase">
                {step.timelineBadge}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
