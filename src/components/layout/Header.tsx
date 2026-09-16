import { useState } from "react";
import { navLinks } from "../../data/index";
import { IMAGES } from "../../data/images";
import { FaSun, FaMoon, FaBars, FaXmark } from "../../data/icons";
import { setTheme, getTheme, type Theme } from "../../utils/theme";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<Theme>(() => getTheme());

  const toggleTheme = () => {
    const nextTheme = currentTheme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    setCurrentTheme(nextTheme);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-outline-variant)] bg-[var(--color-surface-container-lowest)] transition-colors duration-200">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 sm:px-6">
        {/* Brand Logo: Scaled for smaller mobile screens */}
        <a href="/" className="flex items-center gap-2 focus:outline-none">
          <img
            src={IMAGES.logo}
            alt="Bilal Center Solar Solutions"
            className="h-12 w-auto object-contain"
          />
        </a>

        {/* RIGHT SIDE: Navigation Links & CTA Button (Desktop) */}
        <div className="hidden items-center gap-8 md:flex">
          <nav>
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[var(--font-size-body-sm)] font-medium text-[var(--color-on-surface-variant)] transition-colors hover:text-[var(--color-on-surface)]"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="flex h-9 w-9 items-center justify-center rounded-[var(--rounded-default)] border border-[var(--color-outline-variant)] bg-[var(--color-surface)] text-sm transition-all hover:bg-[var(--color-surface-container)]"
            >
              {currentTheme === "light" ? (
                <FaMoon className="text-[var(--color-on-surface-variant)]" />
              ) : (
                <FaSun className="text-amber-400" />
              )}
            </button>

            {/* Right-Side CTA Button */}
            <a
              href="#contact"
              className="rounded-[var(--rounded-default)] bg-[var(--color-secondary-container)] px-5 py-2 text-[var(--font-size-label-lg)] font-bold text-[var(--color-on-secondary-container)] shadow-[var(--shadow-level-1)] transition-all hover:opacity-90"
            >
              Get a Quote
            </a>
          </div>
        </div>

        {/* MOBILE ACTIONS: 44px Minimum Touch Target Size */}
        <div className="flex items-center gap-1 md:hidden">
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="flex h-11 w-11 items-center justify-center rounded-[var(--rounded-default)] text-[var(--color-on-surface-variant)] active:bg-[var(--color-surface-container)]"
          >
            {currentTheme === "light" ? (
              <FaMoon size={18} />
            ) : (
              <FaSun size={18} className="text-amber-400" />
            )}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            className="flex h-11 w-11 items-center justify-center rounded-[var(--rounded-default)] text-[var(--color-on-surface)] focus:outline-none active:bg-[var(--color-surface-container)]"
          >
            {isOpen ? <FaXmark size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <nav className="border-t border-[var(--color-outline-variant)] bg-[var(--color-surface-container-lowest)] md:hidden">
          <ul className="flex flex-col space-y-1 px-4 py-3 sm:px-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex min-h-[44px] items-center rounded-[var(--rounded-default)] px-3 text-[var(--font-size-body-lg)] font-medium text-[var(--color-on-surface-variant)] transition-colors hover:bg-[var(--color-surface-container)] hover:text-[var(--color-on-surface)]"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="flex min-h-[44px] w-full items-center justify-center rounded-[var(--rounded-default)] bg-[var(--color-secondary-container)] px-5 text-center text-[var(--font-size-label-lg)] font-bold text-[var(--color-on-secondary-container)] shadow-[var(--shadow-level-1)] active:opacity-90"
              >
                Get a Quote
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
