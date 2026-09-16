import React from "react";
import { projectsData } from "../../data/index";
import { FaArrowRight, FaLocationDot } from "../../data/icons";

export const Projects: React.FC = () => {
  return (
    <section
      className="w-full bg-[var(--color-surface)] py-[var(--section-py)] md:py-[var(--section-py-md)] lg:py-[var(--section-py-lg)]"
      id="projects"
    >
      <div className="section-container">
        {/* Section Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="flex max-w-2xl flex-col gap-2">
            <span className="typo-eyebrow text-[var(--color-secondary)]">
              Verified Portfolio
            </span>
            <h2 className="typo-section-title text-[var(--color-on-surface)]">
              Solar Projects That Make a Difference
            </h2>
            <p className="typo-section-desc text-[var(--color-on-surface-variant)]">
              Explore our commissioned clean-energy installations delivering
              proven operational and financial benchmarks across Pakistan.
            </p>
          </div>

          <a
            href="#contact-inquiry"
            className="inline-flex min-h-[44px] items-center gap-1.5 typo-label text-[var(--color-secondary)] transition-all hover:gap-2"
          >
            <span>View All Projects</span>
            <FaArrowRight className="text-[16px]" />
          </a>
        </div>

        {/* Responsive Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="flex flex-col overflow-hidden rounded-xl bg-[var(--color-surface-container-lowest)] shadow-sm transition-all hover:shadow-lg border border-[var(--color-outline-variant)]/30"
            >
              {/* Image & Overlay Badges */}
              <div className="relative h-60 w-full overflow-hidden sm:h-72">
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />

                {/* Category Badge */}
                <div className="absolute right-3 top-3 rounded bg-[var(--color-primary-container)]/90 px-3 py-1 typo-technical uppercase text-[var(--color-on-primary)] backdrop-blur-md">
                  {project.category}
                </div>

                {/* Location Tag */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded bg-[var(--color-surface-container-lowest)]/90 px-3 py-1 typo-label text-[var(--color-on-surface)] backdrop-blur-md">
                  <FaLocationDot className="text-[14px] text-[var(--color-secondary)]" />
                  <span>{project.location}</span>
                </div>
              </div>

              {/* Card Details */}
              <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
                <div className="flex flex-col gap-2">
                  <h3 className="typo-card-title text-[var(--color-on-surface)]">
                    {project.title}
                  </h3>
                  <p className="typo-card-body leading-relaxed text-[var(--color-on-surface-variant)]">
                    {project.description}
                  </p>
                </div>

                {/* Project Key Metrics Grid */}
                <div className="mt-4 grid grid-cols-3 gap-2 border-t border-[var(--color-outline-variant)]/30 pt-3 text-center typo-technical">
                  {project.metrics.map((metric, index) => (
                    <div
                      key={index}
                      className="rounded-lg bg-[var(--color-surface-container-low)] p-2"
                    >
                      <span className="block text-[10px] text-[var(--color-on-surface-variant)] sm:text-xs">
                        {metric.label}
                      </span>
                      <strong
                        className={`font-bold text-xs sm:text-sm ${metric.isHighlighted
                          ? "text-[var(--color-secondary)]"
                          : "text-[var(--color-on-surface)]"
                          }`}
                      >
                        {metric.value}
                      </strong>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
