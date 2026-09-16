import React from "react";
import { whyUsData } from "../../data/index";
import {
  FaAward,
  FaShieldHalved,
  FaBolt,
  FaUsers,
  FaArrowRight,
} from "../../data/icons";
import { type IconType } from "react-icons";

type ValuePropCard = {
  id: string;
  icon: string;
  iconColorClass: string;
  title: string;
  description: string;
};

// Map string icon names to React Icon components
const iconMap: Record<string, IconType> = {
  award: FaAward,
  workspace_premium: FaAward,
  verified_user: FaShieldHalved,
  bolt: FaBolt,
  group: FaUsers,
  arrow_forward: FaArrowRight,
};

export const WhyUs: React.FC = () => {
  const { badge, heading, description, image, imageOverlay, valueProps, cta } =
    whyUsData;

  const OverlayIcon = iconMap[imageOverlay.icon] || FaAward;
  const CtaIcon = iconMap[cta.icon] || FaArrowRight;

  return (
    <section className="w-full bg-[var(--color-surface)] py-[var(--section-py)] md:py-[var(--section-py-md)] lg:py-[var(--section-py-lg)]" id="why-solar">
      <div className="section-container">
        {/* Mobile-First Grid: 1 column on mobile/tablet -> 12-column grid on desktop */}
        <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-12 lg:gap-12">
          {/* Visual / Image Block (Top on mobile, Left on desktop) */}
          <div className="relative lg:col-span-6">
            <div className="relative rounded-xl overflow-hidden shadow-xl bg-[var(--color-surface-container-highest)]">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-[420px] object-cover lg:h-[500px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary-container)]/80 via-transparent to-transparent" />

              {/* Floating Image Badge Card */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-[var(--color-surface-container-lowest)]/90 backdrop-blur-md rounded-lg shadow-md flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-secondary-container)]/20 flex items-center justify-center text-[var(--color-secondary)]">
                    <OverlayIcon className="text-[20px]" />
                  </div>
                  <div>
                    <span className="typo-eyebrow text-[var(--color-secondary)]">
                      {imageOverlay.category}
                    </span>
                    <div className="typo-card-title text-[var(--color-on-surface)]">
                      {imageOverlay.headline}
                    </div>
                  </div>
                </div>
                <span className="typo-technical px-2.5 py-1 bg-[var(--color-surface-container-high)] rounded text-[var(--color-on-surface)] font-semibold">
                  {imageOverlay.badgeText}
                </span>
              </div>
            </div>
          </div>

          {/* Content & Value Proposition Grid (Bottom on mobile, Right on desktop) */}
          <div className="flex flex-col gap-6 lg:col-span-6">
            <div className="flex flex-col gap-2">
              <span className="typo-eyebrow text-[var(--color-secondary)]">
                {badge}
              </span>
              <h2 className="typo-section-title text-[var(--color-on-surface)]">
                {heading}
              </h2>
            </div>

            <p className="typo-section-desc text-[var(--color-on-surface-variant)] leading-relaxed">
              {description}
            </p>

            {/* Value Cards Mobile-First Grid: 1 col (base mobile) -> 2 cols (sm & up) */}
            <div className="grid grid-cols-1 gap-4 pt-2 sm:grid-cols-2">
              {valueProps.map((card: ValuePropCard) => {
                const CardIcon = iconMap[card.icon] || FaAward;

                return (
                  <div
                    key={card.id}
                    className="p-5 rounded-xl bg-[var(--color-surface-container-lowest)] shadow-sm flex flex-col gap-2 border border-[var(--color-outline-variant)]/40"
                  >
                    <div
                      className={`flex items-center gap-2.5 ${card.iconColorClass}`}
                    >
                      <CardIcon className="text-[20px] text-[var(--color-secondary)]" />
                      <span className="typo-card-title text-[var(--color-on-surface)]">
                        {card.title}
                      </span>
                    </div>
                    <p className="typo-card-body text-[var(--color-on-surface-variant)] leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Action Link */}
            <div className="pt-2">
              <a
                href={cta.href}
                className="inline-flex items-center gap-2 typo-label text-[var(--color-secondary)] hover:text-[var(--color-secondary-container)] transition-colors group"
              >
                <span>{cta.text}</span>
                <CtaIcon className="text-[18px] group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
