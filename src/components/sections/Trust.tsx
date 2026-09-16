import React from "react";
import { trustData } from "../../data/index";
import {
  FaShieldHalved,
  FaHandshake,
  FaAward,
  FaHeadset,
} from "../../data/icons";
import { type IconType } from "react-icons";

type TrustItem = {
  id: string;
  icon: string;
  title: string;
  description: string;
};

// Map string icon names to React Icon components
const iconMap: Record<string, IconType> = {
  verified_user: FaShieldHalved,
  handshake: FaHandshake,
  workspace_premium: FaAward,
  headset_mic: FaHeadset,
};

export const Trust: React.FC = () => {
  return (
    <section className="relative z-20 w-full bg-[var(--color-surface-container-lowest)] shadow-sm py-[var(--section-py)] md:py-[var(--section-py-md)] lg:py-[var(--section-py-lg)]">
      <div className="section-container">
        {/* Mobile-First Grid: 1 col (base mobile) -> 2 cols (sm) -> 4 cols (lg) */}
        <div className="grid grid-cols-1 gap-[var(--spacing-gutter)] sm:grid-cols-2 lg:grid-cols-4">
          {trustData.map((item: TrustItem) => {
            const IconComponent = iconMap[item.icon] || FaShieldHalved;

            return (
              <div
                key={item.id}
                className="flex items-start gap-[var(--space-md)] p-[var(--space-sm)] rounded-[var(--rounded-default)] transition-colors hover:bg-[var(--color-surface-container-low)]/50"
              >
                {/* Icon Container */}
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-[var(--rounded-default)] bg-[var(--color-surface-container)] text-[var(--color-secondary-container)]">
                  <IconComponent className="text-[20px]" />
                </div>

                {/* Content Block */}
                <div className="flex flex-col">
                  <h4 className="typo-card-title text-[var(--color-on-surface)]">
                    {item.title}
                  </h4>
                  <p className="typo-card-body text-[var(--color-on-surface-variant)] mt-1 leading-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Trust;
