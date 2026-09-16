import { useState } from "react";
import { navLinks } from "../../data/index";
import { setTheme, getTheme, type Theme } from "../../utils/theme";
import { FaSun, FaMoon, FaBars, FaXmark } from "../../data/icons";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Use a lazy initializer function to read the theme directly on initial render
  const [currentTheme, setCurrentTheme] = useState<Theme>(() => getTheme());

  const toggleTheme = () => {
    const nextTheme = currentTheme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    setCurrentTheme(nextTheme);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-[var(--color-outline-variant)] bg-[var(--color-surface-container-lowest)] transition-colors duration-200">
      <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6">
        <div className="flex items-center justify-between">
          {/* Logo Brand Touch Area */}
          <div className="flex items-center gap-2">
            <span className="h-4 w-4 rounded-full bg-[var(--color-secondary-container)]" />
            <a
              href="#home"
              className="flex min-h-[44px] items-center text-[var(--font-size-headline-sm)] font-bold tracking-tight text-[var(--color-on-surface)] focus:outline-none"
            >
              Bilal Center
            </a>
          </div>

          {/* Desktop Navigation (Visible from md breakpoint and up) */}
          <div className="hidden md:flex md:items-center md:gap-8">
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

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="flex h-9 w-9 items-center justify-center rounded-[var(--rounded-default)] border border-[var(--color-outline-variant)] bg-[var(--color-surface)] p-2 transition-all hover:bg-[var(--color-surface-container)]"
            >
              {currentTheme === "light" ? (
                <FaMoon className="text-[var(--color-on-surface-variant)]" />
              ) : (
                <FaSun className="text-amber-400" />
              )}
            </button>

            {/* CTA Button */}
            <a
              href="#contact"
              className="rounded-[var(--rounded-default)] bg-[var(--color-secondary-container)] px-5 py-2 text-[var(--font-size-label-lg)] font-bold text-[var(--color-on-secondary-container)] shadow-[var(--shadow-level-1)] transition-all hover:opacity-90"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile Actions: Touch targets configured to 44px x 44px min */}
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
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="border-t border-[var(--color-outline-variant)] bg-[var(--color-surface-container-lowest)] md:hidden">
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
        </div>
      )}
    </nav>
  );
}
