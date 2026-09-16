import React, { useState } from "react";
import { companyInfo } from "../../data/index";
import {
  FaPhone,
  FaEnvelope,
  FaLocationDot,
  FaClock,
  FaArrowRight,
  FaCheck,
} from "../../data/icons";
import WhatsAppButton from "../common/WhatsAppButton";

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    systemType: "residential",
    monthlyBill: "",
    city: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      className="w-full bg-[var(--color-surface)] py-[var(--section-py)] md:py-[var(--section-py-md)] lg:py-[var(--section-py-lg)]"
      id="contact"
    >
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header section-header--center">
          <span className="typo-eyebrow text-[var(--color-secondary)]">
            Consultation & Pricing
          </span>
          <h2 className="typo-section-title text-[var(--color-on-surface)]">
            Start Your Solar Journey Today
          </h2>
          <p className="typo-section-desc text-[var(--color-on-surface-variant)]">
            Request a customized engineering assessment and financial ROI proposal tailored to your actual electricity load and roof architecture.
          </p>
        </div>

        {/* Contact Layout Grid: 1 col on mobile, 12 cols on desktop */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12 items-start">
          {/* Left Column: Direct Info & Value Markers */}
          <div className="flex flex-col gap-6 lg:col-span-5">
            <div className="rounded-xl bg-[var(--color-surface-container-lowest)] p-6 shadow-sm border border-[var(--color-outline-variant)]/30 flex flex-col gap-6">
              <h3 className="typo-card-title text-[var(--color-on-surface)]">
                Direct Contact Channels
              </h3>

              <div className="flex flex-col gap-4">
                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--color-surface-container)] text-[var(--color-secondary)]">
                    <FaLocationDot className="text-[18px]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="typo-card-body font-medium text-[var(--color-on-surface)]">
                      {companyInfo.Address}
                    </span>
                  </div>
                </div>

                {/* Phone Numbers */}
                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--color-surface-container)] text-[var(--color-secondary)]">
                    <FaPhone className="text-[18px]" />
                  </div>
                  <div className="flex flex-col">
                    <a
                      href={`tel:${companyInfo.ContactNo}`}
                      className="typo-card-body font-medium text-[var(--color-on-surface)] hover:text-[var(--color-primary)] transition-colors"
                    >
                      {companyInfo.ContactNo}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--color-surface-container)] text-[var(--color-secondary)]">
                    <FaEnvelope className="text-[18px]" />
                  </div>
                  <div className="flex flex-col">
                    <a
                      href={`mailto:${companyInfo.Email}`}
                      className="typo-card-body font-medium text-[var(--color-on-surface)] hover:text-[var(--color-primary)] transition-colors"
                    >
                      {companyInfo.Email}
                    </a>
                  </div>
                </div>

                {/* Timing */}
                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--color-surface-container)] text-[var(--color-secondary)]">
                    <FaClock className="text-[18px]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="typo-card-body font-medium text-[var(--color-on-surface)]">
                      {companyInfo.Timing}
                    </span>
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp Help Button */}
              <div className="pt-2 border-t border-[var(--color-outline-variant)]/30">
                <WhatsAppButton variant="banner" />
              </div>
            </div>

            {/* Reassurance Badge Box */}
            <div className="rounded-xl bg-[var(--color-surface-container-low)] p-6 border border-[var(--color-outline-variant)]/30 flex flex-col gap-3">
              <h4 className="typo-card-title text-[var(--color-on-surface)] text-base">
                What to Expect Next:
              </h4>
              <ul className="flex flex-col gap-2.5">
                {[
                  "Free 3D shadow analysis & solar irradiance audit",
                  "Guaranteed single-line electrical diagram (SLD)",
                  "Complete LESCO/NEPRA net-metering paperwork support",
                  "Fixed upfront quote with Tier-1 component warranty",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 typo-card-body text-[var(--color-on-surface-variant)]">
                    <FaCheck className="mt-1 shrink-0 text-[14px] text-[var(--color-secondary)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Request Form */}
          <div className="lg:col-span-7">
            <div className="rounded-xl bg-[var(--color-surface-container-lowest)] p-6 sm:p-8 shadow-sm border border-[var(--color-outline-variant)]/30">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <FaCheck className="text-[28px]" />
                  </div>
                  <h3 className="typo-section-title text-[var(--color-on-surface)] text-2xl">
                    Thank You for Reaching Out!
                  </h3>
                  <p className="typo-section-desc text-[var(--color-on-surface-variant)] max-w-md">
                    Our lead solar engineer will review your requirements and reach out within 24 business hours with a preliminary proposal.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 inline-flex min-h-[44px] items-center justify-center rounded-lg bg-[var(--color-primary)] px-6 py-2.5 typo-label text-[var(--color-on-primary)] transition-all hover:bg-[var(--color-surface-tint)]"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <h3 className="typo-card-title text-[var(--color-on-surface)]">
                    Request a Free Quote & Engineering Survey
                  </h3>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {/* Full Name */}
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="name"
                        className="typo-technical font-semibold text-[var(--color-on-surface)]"
                      >
                        Full Name *
                      </label>
                      <input
                        required
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Muhammad Bilal"
                        className="min-h-[44px] rounded-lg border border-[var(--color-outline-variant)] bg-[var(--color-surface)] px-3.5 py-2.5 text-sm text-[var(--color-on-surface)] placeholder:text-[var(--color-on-surface-variant)]/60 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                      />
                    </div>

                    {/* Phone Number */}
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="phone"
                        className="typo-technical font-semibold text-[var(--color-on-surface)]"
                      >
                        Phone / WhatsApp *
                      </label>
                      <input
                        required
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="0300-1234567"
                        className="min-h-[44px] rounded-lg border border-[var(--color-outline-variant)] bg-[var(--color-surface)] px-3.5 py-2.5 text-sm text-[var(--color-on-surface)] placeholder:text-[var(--color-on-surface-variant)]/60 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="email"
                        className="typo-technical font-semibold text-[var(--color-on-surface)]"
                      >
                        Email Address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@domain.com"
                        className="min-h-[44px] rounded-lg border border-[var(--color-outline-variant)] bg-[var(--color-surface)] px-3.5 py-2.5 text-sm text-[var(--color-on-surface)] placeholder:text-[var(--color-on-surface-variant)]/60 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                      />
                    </div>

                    {/* City / Location */}
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="city"
                        className="typo-technical font-semibold text-[var(--color-on-surface)]"
                      >
                        City / Location *
                      </label>
                      <input
                        required
                        id="city"
                        name="city"
                        type="text"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="e.g. Lahore, Faisalabad, Multan"
                        className="min-h-[44px] rounded-lg border border-[var(--color-outline-variant)] bg-[var(--color-surface)] px-3.5 py-2.5 text-sm text-[var(--color-on-surface)] placeholder:text-[var(--color-on-surface-variant)]/60 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {/* System Type */}
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="systemType"
                        className="typo-technical font-semibold text-[var(--color-on-surface)]"
                      >
                        Solution Type
                      </label>
                      <select
                        id="systemType"
                        name="systemType"
                        value={formData.systemType}
                        onChange={handleChange}
                        className="min-h-[44px] rounded-lg border border-[var(--color-outline-variant)] bg-[var(--color-surface)] px-3.5 py-2.5 text-sm text-[var(--color-on-surface)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                      >
                        <option value="residential">Residential Solar (5kW - 25kW)</option>
                        <option value="commercial">Commercial Rooftop (25kW - 250kW)</option>
                        <option value="industrial">Industrial Megawatt EPC</option>
                        <option value="agricultural">Solar Tube-Well Irrigation</option>
                        <option value="storage">Battery Storage System</option>
                      </select>
                    </div>

                    {/* Average Monthly Electricity Bill */}
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="monthlyBill"
                        className="typo-technical font-semibold text-[var(--color-on-surface)]"
                      >
                        Avg. Monthly Bill (PKR)
                      </label>
                      <input
                        id="monthlyBill"
                        name="monthlyBill"
                        type="text"
                        value={formData.monthlyBill}
                        onChange={handleChange}
                        placeholder="e.g. 75,000"
                        className="min-h-[44px] rounded-lg border border-[var(--color-outline-variant)] bg-[var(--color-surface)] px-3.5 py-2.5 text-sm text-[var(--color-on-surface)] placeholder:text-[var(--color-on-surface-variant)]/60 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                      />
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="message"
                      className="typo-technical font-semibold text-[var(--color-on-surface)]"
                    >
                      Project Notes / Roof Type / Special Requirements
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share details such as roof area, meter connection type (single/3-phase), or desired backup..."
                      className="rounded-lg border border-[var(--color-outline-variant)] bg-[var(--color-surface)] p-3.5 text-sm text-[var(--color-on-surface)] placeholder:text-[var(--color-on-surface-variant)]/60 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-lg bg-[var(--color-primary)] px-6 py-3 typo-label text-base text-[var(--color-on-primary)] transition-all hover:bg-[var(--color-surface-tint)] shadow-md"
                    >
                      <span>Submit Consultation Request</span>
                      <FaArrowRight className="text-[16px]" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
