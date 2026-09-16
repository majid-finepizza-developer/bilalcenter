import React from "react";
import { FaCheck, FaArrowRight, FaAward } from "../../data/icons";
import { aboutData } from "../../data/index";

export const About: React.FC = () => {
  const {
    eyebrow,
    title,
    paragraphs,
    features,
    ctaText,
    ctaHref,
    image,
    imageAlt,
    statBadgeTitle,
    statBadgeSubtitle,
  } = aboutData;

  return (
    <section className="w-full bg-[var(--color-surface-container-low)] py-[var(--section-py)] md:py-[var(--section-py-md)] lg:py-[var(--section-py-lg)]" id="about">
      <div className="section-container">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Left Column */}
          <div className="flex flex-col gap-6 lg:col-span-6">
            <div className="flex flex-col gap-2">
              <span className="typo-eyebrow text-[var(--color-secondary)]">
                {eyebrow}
              </span>
              <h2 className="typo-section-title text-[var(--color-on-surface)]">
                {title}
              </h2>
            </div>

            <div className="flex flex-col gap-4 typo-section-desc text-[var(--color-on-surface-variant)]">
              {paragraphs.map((paragraph, index) => (
                <p key={index} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-4 pt-2 sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature.id} className="flex items-start gap-3">
                  <FaCheck className="mt-1 flex-shrink-0 text-[18px] text-[var(--color-secondary)]" />
                  <div>
                    <h3 className="typo-card-title text-[var(--color-on-surface)]">
                      {feature.title}
                    </h3>
                    <p className="typo-card-body text-[var(--color-on-surface-variant)]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <a
                href={ctaHref}
                className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg bg-[var(--color-primary)] px-6 py-3 typo-label text-[var(--color-on-primary)] transition-all hover:bg-[var(--color-surface-tint)] sm:w-auto"
              >
                <span>{ctaText}</span>
                <FaArrowRight className="text-[16px]" />
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative lg:col-span-6">
            <div className="relative overflow-hidden rounded-xl shadow-xl">
              <img
                src={image}
                alt={imageAlt}
                className="h-[350px] w-full object-cover sm:h-[450px] lg:h-[550px]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary-container)]/85 via-transparent to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-lg bg-[var(--color-surface-container-lowest)]/95 p-4 shadow-lg backdrop-blur-md sm:bottom-6 sm:left-6 sm:right-6">
                <div>
                  <div className="typo-card-title text-[var(--color-on-surface)]">
                    {statBadgeTitle}
                  </div>
                  <p className="typo-card-body text-[var(--color-on-surface-variant)]">
                    {statBadgeSubtitle}
                  </p>
                </div>
                <FaAward className="text-[32px] text-[var(--color-secondary)] sm:text-[36px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
