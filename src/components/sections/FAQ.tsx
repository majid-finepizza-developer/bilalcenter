import React, { useState } from "react";
import { faqData } from "../../data/index";
import { FaChevronDown } from "../../data/icons";

export const FAQ: React.FC = () => {
  const { eyebrow, title, description, items } = faqData;
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="w-full bg-[var(--color-surface-container-low)] py-[var(--section-py)] md:py-[var(--section-py-md)] lg:py-[var(--section-py-lg)]" id="faq">
      <div className="section-container max-w-[1024px]">
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

        {/* Accordion Group */}
        <div className="flex flex-col gap-3">
          {items.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className="overflow-hidden rounded-xl bg-[var(--color-surface-container-lowest)] shadow-sm transition-shadow hover:shadow-md border border-[var(--color-outline-variant)]/30"
              >
                <button
                  onClick={() => toggleFaq(item.id)}
                  aria-expanded={isOpen}
                  className="flex min-h-[56px] w-full items-center justify-between gap-4 p-4 text-left focus:outline-none sm:p-5"
                >
                  <span className="typo-card-title text-[var(--color-on-surface)]">
                    {item.question}
                  </span>
                  <FaChevronDown
                    className={`text-lg text-[var(--color-secondary)] transition-transform duration-300 shrink-0 ${isOpen ? "rotate-180" : "rotate-0"
                      }`}
                  />
                </button>

                {isOpen && (
                  <div className="border-t border-[var(--color-outline-variant)]/30 px-4 pb-4 pt-3 typo-card-body leading-relaxed text-[var(--color-on-surface-variant)] sm:px-5 sm:pb-5">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
