import React from "react";
import { footerData, companyInfo, socialLinks } from "../../data/index";
import {
  FaLocationDot,
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaClock,
} from "../../data/icons";

import { WhatsAppButton } from "../../components/common/WhatsAppButton";

export const Footer: React.FC = () => {
  const { solutions, products, legalLinks, copyrightText } = footerData;

  // Format phone numbers for link attributes by removing spaces and non-numeric chars except '+'
  const formatTel = (phone?: string) => phone?.replace(/[^\d+]/g, "") || "";

  return (
    <footer className="w-full bg-primary-container text-inverse-on-surface">
      <div className="mx-auto w-full max-w-[1440px] px-4 py-8 sm:px-6 md:px-margin-md md:py-space-xl lg:px-margin-lg">
        {/* Mobile First Grid: Single column on small screens, expands at md and lg breakpoints */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-gutter-lg">
          {/* Company Brand Column */}
          <div className="flex flex-col gap-space-md">
            <div className="flex items-center gap-space-sm">
              <div className="inline-flex items-center justify-center rounded-lg bg-surface-container-lowest p-space-xs">
                <img
                  alt={`${companyInfo.name} Logo`}
                  className="h-25 w-auto object-contain"
                  src={companyInfo.logoUrl}
                />
              </div>
            </div>

            <p className="mt-10 font-body-sm text-body-sm leading-relaxed text-on-primary-container">
              {companyInfo.description}
            </p>

            {/* Social Links: Touch-optimized targets (44px min height/width) */}
            <div className="flex flex-wrap items-center gap-2 pt-space-xs">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    aria-label={social.label}
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-inverse-surface text-inverse-on-surface transition-colors hover:bg-secondary-container hover:text-on-primary active:bg-secondary-container"
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Core Solutions Column */}
          <div className="flex flex-col gap-space-md">
            <h2 className="font-headline-sm text-headline-sm font-bold text-on-primary">
              Core Solutions
            </h2>
            <ul className="flex flex-col font-body-sm text-body-sm text-on-primary-container">
              {solutions.map((item) => (
                <li key={item.label}>
                  <a
                    className="flex min-h-[44px] items-center py-1 transition-colors hover:text-on-primary"
                    data-path={item.path}
                    href={item.href}
                    onClick={(e) => {
                      if (!item.href) {
                        e.preventDefault();
                      }
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Categories Column */}
          <div className="flex flex-col gap-space-md">
            <h2 className="font-headline-sm text-headline-sm font-bold text-on-primary">
              Product Categories
            </h2>
            <ul className="flex flex-col font-body-sm text-body-sm text-on-primary-container">
              {products.map((item) => (
                <li key={item.label}>
                  <a
                    className="flex min-h-[44px] items-center py-1 transition-colors hover:text-on-primary"
                    data-path={item.path}
                    href={item.href}
                    onClick={(e) => {
                      if (!item.href) {
                        e.preventDefault();
                      }
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Inquiry & Office Column */}
          <div className="flex flex-col gap-2">
            <h2 className="font-headline-sm text-headline-sm font-bold text-on-primary">
              Direct Inquiry & Office
            </h2>
            <div className="flex flex-col gap-1 font-body-sm text-body-sm text-on-primary-container">
              <address className="not-italic flex min-h-[44px] items-start gap-space-xs py-1">
                <FaLocationDot
                  size={20}
                  className="mr-2 shrink-0 text-secondary-container"
                />
                <span className="hover:text-on-primary transition-colors">
                  {companyInfo.Address}
                </span>
              </address>
              <div className="flex min-h-[44px] items-center gap-space-xs py-1">
                <FaPhone
                  size={18}
                  className="mr-2 shrink-0 text-secondary-container"
                />
                <a
                  href={`tel:${formatTel(companyInfo.ContactNo)}`}
                  className="hover:text-on-primary transition-colors"
                >
                  {companyInfo.ContactNo}
                </a>
              </div>
              <div className="flex min-h-[44px] items-center gap-space-xs py-1">
                {/* Shared WhatsApp Button */}
                <FaWhatsapp
                  size={18}
                  className="mr-2 shrink-0 text-secondary-container"
                />
                <WhatsAppButton
                  label={companyInfo.WhatsAppNo}
                  className={"hover:text-on-primary transition-colors"}
                />
              </div>
              <div className="flex min-h-[44px] items-center gap-space-xs py-1">
                <FaEnvelope
                  size={18}
                  className="mr-2 shrink-0 text-secondary-container"
                />
                <a
                  href={`mailto:${companyInfo.Email}`}
                  className="hover:text-on-primary transition-colors"
                >
                  {companyInfo.Email}
                </a>
              </div>
              <div className="flex min-h-[44px] items-start gap-space-xs py-1">
                <FaClock
                  size={18}
                  className="mr-2 shrink-0 text-secondary-container"
                />
                <span className="hover:text-on-primary transition-colors">
                  {companyInfo.Timing}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Stacked on mobile, row on tablet/desktop */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-[var(--color-outline-variant)]/20 pt-6 font-body-sm text-body-sm text-on-primary-container sm:flex-row sm:gap-space-md">
          <p className="text-center sm:text-left">{copyrightText}</p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <a
                key={link.label}
                className="flex min-h-[44px] items-center transition-colors hover:text-on-primary"
                data-path={link.path}
                href={link.href}
                onClick={(e) => {
                  if (!link.href) {
                    e.preventDefault();
                  }
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
