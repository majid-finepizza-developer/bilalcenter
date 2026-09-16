import React from "react";
import { solutionsData } from "../../data/index";
import { FaChevronRight, FaArrowRight, FaSolarPanel } from "../../data/icons";

export const Solutions: React.FC = () => {
  return (
    <section
      className="w-full bg-[var(--color-surface-container-low)] py-[var(--section-py)] md:py-[var(--section-py-md)] lg:py-[var(--section-py-lg)]"
      id="solutions"
    >
      <div className="section-container">
        {/* Section Header: Mobile vertical stack -> Desktop row */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="flex max-w-2xl flex-col gap-2">
            <span className="typo-eyebrow text-[var(--color-secondary)]">
              Turnkey Solar Offerings
            </span>
            <h2 className="typo-section-title text-[var(--color-on-surface)] leading-snug">
              Solar Solutions Built Around Your Operational Needs
            </h2>
            <p className="typo-section-desc text-[var(--color-on-surface-variant)]">
              From single-family residential properties to gigawatt-hour
              agricultural farms and sprawling textile mills, our systems
              deliver predictable generation.
            </p>
          </div>

          {/* Full width button on small devices -> auto width on desktop */}
          <a
            className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg bg-[var(--color-surface-container-lowest)] px-5 py-3 typo-label text-[var(--color-on-surface)] shadow-sm transition-all hover:bg-[var(--color-surface-container)] sm:w-auto md:shrink-0"
            href="#contact-inquiry"
          >
            <span>Compare All Packages</span>
            <FaChevronRight className="text-[14px]" />
          </a>
        </div>

        {/* Responsive Grid Layout: 1 col on mobile, 2 cols on tablet, 3 cols on desktop */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {solutionsData.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col justify-between overflow-hidden rounded-xl bg-[var(--color-surface-container-lowest)] shadow-sm transition-all duration-300 hover:shadow-xl border border-[var(--color-outline-variant)]/30"
            >
              <div>
                {/* Image Container with Capacity Badge */}
                <div className="relative h-48 w-full overflow-hidden sm:h-56">
                  <img
                    alt={item.imageAlt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    src={item.image}
                    loading="lazy"
                  />
                  <div className="absolute left-3 top-3 rounded bg-[var(--color-primary-container)]/85 px-2.5 py-1 typo-technical uppercase tracking-wider text-[var(--color-on-primary)] backdrop-blur-md sm:left-4 sm:top-4">
                    {item.badge}
                  </div>
                </div>

                {/* Card Content Area */}
                <div className="flex flex-col gap-2 p-5 sm:p-6">
                  <div className="flex items-center gap-2 text-[var(--color-secondary)]">
                    <FaSolarPanel className="text-[18px]" />
                    <span className="typo-eyebrow text-[var(--color-secondary)]">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="typo-card-title text-[var(--color-on-surface)] transition-colors group-hover:text-[var(--color-secondary)]">
                    {item.title}
                  </h3>

                  <p className="typo-card-body leading-relaxed text-[var(--color-on-surface-variant)]">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Action Link Footer */}
              <div className="px-5 pb-5 pt-0 sm:px-6 sm:pb-6">
                <a
                  className="inline-flex min-h-[44px] items-center gap-2 typo-label text-[var(--color-secondary)] transition-all group-hover:gap-3"
                  href={item.href}
                >
                  <span>Explore Solution</span>
                  <FaArrowRight className="text-[14px]" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
