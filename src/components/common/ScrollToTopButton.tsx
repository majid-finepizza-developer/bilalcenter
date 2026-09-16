import React, { useState, useEffect } from "react";
import { FaArrowUp } from "../../data/icons";

export const ScrollToTopButton: React.FC = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!showTopBtn) return null;

  return (
    <div className="fixed bottom-24 right-6 z-50">
      <div className="relative group inline-block">
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-surface-container-lowest)] text-[var(--color-on-surface)] shadow-lg border border-[var(--color-outline-variant)]/40 transition-all duration-300 hover:bg-[var(--color-surface-container)] hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] active:scale-95"
        >
          <FaArrowUp className="text-[18px] text-[var(--color-primary)]" />
        </button>

        {/* Tooltip Content */}
        <span className="pointer-events-none absolute right-full top-1/2 -translate-y-1/2 mr-3 whitespace-nowrap rounded-md bg-zinc-900/90 px-3 py-1.5 text-xs font-semibold text-white shadow-md opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          Back to top
        </span>
      </div>
    </div>
  );
};

export default ScrollToTopButton;
