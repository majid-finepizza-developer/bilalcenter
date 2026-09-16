import React, { useState } from "react";
import { productsData, filterCategories } from "../../data/index";
import { FaArrowRight, FaDownload } from "../../data/icons";

type ProductCategory = (typeof filterCategories)[number]["id"];

export const Products: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>("all");

  const filteredProducts =
    activeCategory === "all"
      ? productsData
      : productsData.filter((p) => p.category === activeCategory);

  return (
    <section
      className="w-full bg-[var(--color-surface-container-low)] py-[var(--section-py)] md:py-[var(--section-py-md)] lg:py-[var(--section-py-lg)]"
      id="products"
    >
      <div className="section-container">
        {/* Section Header & Interactive Filter Bar */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex max-w-2xl flex-col gap-2">
            <span className="typo-eyebrow text-[var(--color-secondary)]">
              Certified Hardware Components
            </span>
            <h2 className="typo-section-title text-[var(--color-on-surface)]">
              Quality Components. Reliable Performance.
            </h2>
            <p className="typo-section-desc text-[var(--color-on-surface-variant)]">
              We supply and commission only Tier-1 equipment sourced directly
              from BloombergNEF listed manufacturers with verified manufacturer
              warranties.
            </p>
          </div>

          {/* Mobile horizontal scrollable filter bar */}
          <div className="flex items-center gap-1.5 overflow-x-auto rounded-lg bg-[var(--color-surface-container-lowest)] p-1.5 shadow-sm no-scrollbar">
            {filterCategories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`whitespace-nowrap rounded px-4 py-2 typo-label transition-colors min-h-[44px] sm:min-h-0 sm:py-1.5 ${isActive
                    ? "bg-[var(--color-primary)] text-[var(--color-on-primary)]"
                    : "text-[var(--color-on-surface)] hover:bg-[var(--color-surface-container)]"
                    }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Cards Responsive Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="flex flex-col justify-between rounded-xl bg-[var(--color-surface-container-lowest)] p-5 shadow-sm transition-shadow hover:shadow-md sm:p-6 border border-[var(--color-outline-variant)]/30"
            >
              <div className="flex flex-col gap-4">
                {/* Badges */}
                <div className="flex items-center justify-between typo-technical font-bold">
                  <span className="rounded bg-[var(--color-surface-container-high)] px-2.5 py-0.5 uppercase text-[var(--color-on-surface)]">
                    {product.badge}
                  </span>
                  <span
                    className={product.warrantyColorClass || "text-[var(--color-secondary)]"}
                  >
                    {product.warranty}
                  </span>
                </div>

                {/* Image Display */}
                <div className="flex h-44 items-center justify-center overflow-hidden rounded-lg bg-[var(--color-surface-container-low)] p-3">
                  <img
                    src={product.image}
                    alt={product.imageAlt}
                    className="max-h-full object-contain"
                    loading="lazy"
                  />
                </div>

                {/* Text Content */}
                <div>
                  <h3 className="typo-card-title text-[var(--color-on-surface)]">
                    {product.title}
                  </h3>
                  <p className="mt-1 typo-card-body text-[var(--color-on-surface-variant)] leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Key Specifications Grid */}
                <div className="grid grid-cols-2 gap-2 rounded-lg bg-[var(--color-surface-container-low)] p-3 typo-technical text-[var(--color-on-surface)]">
                  {product.specs.map((spec, index) => (
                    <div key={index}>
                      <span className="text-[var(--color-on-surface-variant)]">
                        {spec.label}:{" "}
                      </span>
                      <strong className="font-bold">{spec.value}</strong>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specification Link */}
              <div className="pt-4">
                <a
                  href={product.href}
                  className="inline-flex min-h-[44px] items-center gap-1.5 typo-label text-[var(--color-secondary)] hover:underline"
                >
                  <span>View Product Specifications</span>
                  <FaArrowRight className="text-[14px]" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Catalog Action CTA */}
        <div className="pt-4 text-center">
          <a
            href="#contact-inquiry"
            className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg bg-[var(--color-primary)] px-6 py-3 typo-label text-[var(--color-on-primary)] transition-all hover:bg-[var(--color-surface-tint)] sm:w-auto"
          >
            <span>Request Bulk Equipment Catalog & Pricing</span>
            <FaDownload className="text-[16px]" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
