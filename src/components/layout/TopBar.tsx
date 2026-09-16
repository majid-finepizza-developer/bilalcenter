import React from "react";
import { companyInfo, socialLinks } from "../../data/index";
import { FaPhone, FaEnvelope, FaClock } from "../../data/icons";

export const TopBar: React.FC = () => {
  const { ContactNo, Email, Timing } = companyInfo;

  // Clean phone number for tel: link (removes spaces)
  const phoneClean = ContactNo.replace(/\s+/g, "");

  return (
    <div className="sticky top-16 z-40 w-full border-b border-[var(--color-outline-variant)]/60 bg-[var(--color-surface-container-low)]/95 backdrop-blur-md text-[var(--color-on-surface-variant)] text-xs select-none transition-colors duration-200 shadow-xs">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-1.5 sm:px-6">
        {/* Left Side: Direct Contact Details (Phone, Email, Hours) */}
        <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
          {/* Phone Number */}
          <a
            href={`tel:${phoneClean}`}
            className="group inline-flex items-center gap-2 font-medium text-[var(--color-on-surface)] hover:text-[var(--color-secondary-container)] transition-colors duration-200"
            title="Call Bilal Center"
          >
            <FaPhone className="text-[var(--color-secondary-container)] shrink-0 text-[11px] transition-transform duration-200 group-hover:scale-110" />
            <span>{ContactNo}</span>
          </a>

          {/* Email Address */}
          <a
            href={`mailto:${Email}`}
            className="group hidden sm:inline-flex items-center gap-2 font-medium text-[var(--color-on-surface-variant)] hover:text-[var(--color-secondary-container)] transition-colors duration-200"
            title="Email Bilal Center"
          >
            <FaEnvelope className="text-[var(--color-secondary-container)] shrink-0 text-[11px] transition-transform duration-200 group-hover:scale-110" />
            <span>{Email}</span>
          </a>

          {/* Working Hours */}
          <div className="group hidden md:inline-flex items-center gap-2 text-[var(--color-on-surface-variant)] hover:text-[var(--color-secondary-container)] transition-colors duration-200 cursor-default">
            <FaClock className="text-[var(--color-secondary-container)] shrink-0 text-[11px] transition-transform duration-200 group-hover:scale-110" />
            <span>{Timing}</span>
          </div>
        </div>

        {/* Right Side: Social Media Icons */}
        <div className="flex items-center gap-2 ml-auto">
          <span className="hidden lg:inline text-[11px] text-[var(--color-on-surface-variant)] font-medium mr-1 opacity-80">
            Follow Us:
          </span>
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                title={social.label}
                className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-[var(--color-surface-container-high)] text-[var(--color-on-surface)] border border-[var(--color-outline-variant)] shadow-xs transition-all duration-200 hover:bg-[var(--color-secondary-container)] hover:text-[var(--color-on-secondary-container)] hover:border-[var(--color-secondary-container)] hover:scale-105 active:scale-95"
              >
                <Icon size={12} />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
