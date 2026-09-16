import React, { useState, useEffect, useCallback, useRef } from "react";
import { heroData } from "../../data/index";
import {
  FaCircleCheck,
  FaChevronLeft,
  FaChevronRight,
  FaArrowRight,
  FaBolt,
  FaShieldHalved,
  FaSolarPanel,
} from "../../data/icons";

export const Hero: React.FC = () => {
  const { slides, primaryCta, secondaryCta, trustFeatures } = heroData;

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  // Auto-play timer (6 seconds per slide)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) {
      touchStartX.current = null;
      touchEndX.current = null;
      return;
    }
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      // Swiped Left -> Next slide
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      // Swiped Right -> Prev slide
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const handleTouchCancel = () => {
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const activeSlide = slides[currentSlide];

  return (
    <section
      id="home"
      aria-label="Solar Energy Hero Slider"
      className="relative w-full overflow-hidden bg-primary-container text-on-primary select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchCancel}
    >
      {/* Background Image Slides with Smooth Crossfade & Zoom */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                }`}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className={`w-full h-full object-cover object-center brightness-[0.70] transform transition-transform duration-[7000ms] ease-out ${isActive ? "scale-105" : "scale-100"
                  }`}
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>
          );
        })}

        {/* Multi-tier Gradient Overlays for High Legibility on Mobile & Desktop */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-primary-container via-primary-container/70 to-primary-container/40 md:bg-gradient-to-r md:from-primary-container/95 md:via-primary-container/80 md:to-primary-container/30" />
        <div className="absolute inset-0 z-10 bg-black/25 pointer-events-none" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-20 w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 min-h-[580px] sm:min-h-[640px] md:min-h-[700px] lg:min-h-[760px] flex flex-col justify-between">

        {/* Top Info Bar / Current Slide Category Indicator */}
        <div className="flex items-center justify-between pb-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-lowest/20 backdrop-blur-md border border-white/10 text-secondary-container shadow-sm">
            <span className="w-2 h-2 rounded-full bg-secondary-container animate-ping" />
            <span className="font-label-technical text-xs sm:text-sm uppercase tracking-wider font-semibold text-on-primary">
              {activeSlide.badge}
            </span>
          </div>

          {/* Quick Counter / Slide Status */}
          <div className="hidden sm:flex items-center gap-2 bg-black/30 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono tracking-widest text-slate-300 border border-white/10">
            <span className="text-secondary-container font-bold">0{currentSlide + 1}</span>
            <span>/</span>
            <span>0{slides.length}</span>
          </div>
        </div>

        {/* Left-Aligned Information & Big CTA Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto py-6">
          <div className="flex flex-col items-start gap-4 sm:gap-6 lg:col-span-8 max-w-3xl">

            {/* Dynamic Headline with Key Highlight */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-on-primary leading-[1.15] drop-shadow-sm">
              {activeSlide.titlePrefix}
              <span className="text-secondary-container underline decoration-secondary-container/40 decoration-wavy underline-offset-4 sm:underline-offset-8">
                {activeSlide.titleHighlight}
              </span>
              {activeSlide.titleSuffix}
            </h1>

            {/* Description Text */}
            <p className="text-base sm:text-lg md:text-xl text-slate-100 max-w-2xl leading-relaxed drop-shadow-sm font-normal">
              {activeSlide.description}
            </p>

            {/* Action Buttons: One BIG CTA Button + Secondary Action */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 pt-2 w-full sm:w-auto">
              {/* One BIG Primary CTA Button */}
              <a
                href={primaryCta.href}
                className="group relative inline-flex items-center justify-center gap-3 bg-secondary-container hover:bg-secondary text-on-primary font-bold text-base sm:text-lg px-8 py-4 sm:px-10 sm:py-5 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 text-center ring-4 ring-secondary-container/25"
              >
                <span className="tracking-wide">{primaryCta.text}</span>
                <FaArrowRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1.5"
                />
              </a>

              {/* Secondary CTA Button */}
              <a
                href={secondaryCta.href}
                className="inline-flex items-center justify-center gap-2.5 bg-surface-container-lowest/20 hover:bg-surface-container-lowest/35 backdrop-blur-md border border-white/20 text-on-primary font-semibold text-sm sm:text-base px-6 py-4 rounded-xl transition-all duration-300 text-center"
              >
                <FaSolarPanel size={18} className="text-secondary-container" />
                <span>{secondaryCta.text}</span>
              </a>
            </div>

            {/* Highlighted Trust & Credibility Badges on Left Side */}
            <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs sm:text-sm font-medium text-slate-200">
              <div className="flex items-center gap-2">
                <FaCircleCheck className="text-secondary-container shrink-0" size={16} />
                <span>Tier-1 Verified Hardware</span>
              </div>
              <div className="flex items-center gap-2">
                <FaShieldHalved className="text-secondary-container shrink-0" size={16} />
                <span>25-Yr Performance Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <FaBolt className="text-secondary-container shrink-0" size={16} />
                <span>Turnkey Net Metering</span>
              </div>
            </div>
          </div>

          {/* Right Floating Slide Card (Desktop / Tablet) */}
          <div className="hidden lg:flex flex-col justify-center lg:col-span-4">
            <div className="bg-slate-900/80 backdrop-blur-xl border border-white/15 rounded-2xl p-6 text-on-primary shadow-2xl transition-all duration-500 hover:border-secondary-container/50">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-secondary-container bg-secondary-container/20 px-3 py-1 rounded-full border border-secondary-container/30">
                  <FaBolt size={12} />
                  {activeSlide.tag}
                </span>
                <span className="text-xs font-medium text-slate-300">
                  Slide {currentSlide + 1} of {slides.length}
                </span>
              </div>

              <div className="py-5">
                <div className="text-4xl font-black tracking-tight text-white flex items-baseline gap-2">
                  <span>{activeSlide.stat}</span>
                  <span className="text-xs uppercase tracking-wider text-secondary-container font-semibold">
                    Target Impact
                  </span>
                </div>
                <p className="text-lg font-semibold text-slate-100 mt-1">
                  {activeSlide.statLabel}
                </p>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  Precision engineered installations delivering maximum yield and high return on investment across Pakistan.
                </p>
              </div>

              {/* Slider Progress Bar */}
              <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-secondary-container h-full transition-all duration-500 ease-out"
                  style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Slide Indicators & Navigation Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/15">
          {/* Trust Features Text for quick reference */}
          <p className="hidden md:block text-xs font-medium text-slate-300 tracking-wide">
            {trustFeatures}
          </p>

          {/* Interactive Slide Controls */}
          <div className="flex items-center justify-between w-full sm:w-auto gap-4">
            {/* Slide Indicators / Thumbnails with accessible touch padding */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              {slides.map((slide, idx) => (
                <button
                  key={slide.id}
                  onClick={() => setCurrentSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}: ${slide.tag}`}
                  className="p-2 -m-1 inline-flex items-center justify-center focus:outline-none"
                >
                  <span
                    className={`block h-2.5 sm:h-3 rounded-full transition-all duration-300 ${idx === currentSlide
                        ? "w-8 sm:w-10 bg-secondary-container"
                        : "w-2.5 sm:w-3 bg-white/30 hover:bg-white/60"
                      }`}
                  />
                </button>
              ))}
            </div>

            {/* Prev / Next Arrow Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                aria-label="Previous Slide"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 active:bg-white/30 border border-white/20 text-white backdrop-blur-md transition-all duration-200 hover:scale-105"
              >
                <FaChevronLeft size={14} />
              </button>
              <button
                onClick={nextSlide}
                aria-label="Next Slide"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 active:bg-white/30 border border-white/20 text-white backdrop-blur-md transition-all duration-200 hover:scale-105"
              >
                <FaChevronRight size={14} />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;

