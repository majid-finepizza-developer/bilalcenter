import React from "react";
import { testimonialsData } from "../../data/index";
import { FaStar } from "../../data/icons";

export const Testimonials: React.FC = () => {
  const { eyebrow, title, description, items } = testimonialsData;

  return (
    <section
      className="w-full bg-[var(--color-surface)] py-[var(--section-py)] md:py-[var(--section-py-md)] lg:py-[var(--section-py-lg)]"
      id="testimonials"
    >
      <div className="section-container">
        {/* Header Block */}
        <div className="section-header section-header--center">
          <span className="typo-eyebrow text-[var(--color-secondary)]">
            {eyebrow}
          </span>
          <h2 className="typo-section-title text-[var(--color-on-surface)]">
            {title}
          </h2>
          <p className="typo-section-desc text-[var(--color-on-surface-variant)]">
            {description}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-between gap-6 rounded-xl bg-[var(--color-surface-container-lowest)] p-5 shadow-sm transition-shadow hover:shadow-md sm:p-6 border border-[var(--color-outline-variant)]/30"
            >
              <div className="flex flex-col gap-3">
                {/* Star Ratings */}
                <div className="flex items-center gap-1 text-[var(--color-secondary-container)]">
                  {Array.from({ length: item.rating }).map((_, idx) => (
                    <FaStar key={idx} className="text-[18px] text-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="typo-card-body italic leading-relaxed text-[var(--color-on-surface)]">
                  "{item.quote}"
                </p>
              </div>

              {/* Author & Profile Footer */}
              <div className="flex items-center gap-3 border-t border-[var(--color-outline-variant)]/30 pt-4">
                <div
                  className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full font-bold ${item.avatarBgClass} ${item.avatarTextClass}`}
                >
                  {item.initials}
                </div>
                <div>
                  <h3 className="typo-card-title text-[var(--color-on-surface)]">
                    {item.author}
                  </h3>
                  <p className="typo-card-body text-[var(--color-on-surface-variant)]">
                    {item.role}, {item.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
