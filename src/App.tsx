import TopBar from "./components/layout/TopBar";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import Hero from "./components/sections/Hero";
import Trust from "./components/sections/Trust";
import WhyUs from "./components/sections/WhyUs";
import Solutions from "./components/sections/Solutions";
import Process from "./components/sections/Process";
import Products from "./components/sections/Products";
import Projects from "./components/sections/Projects";
import Energies from "./components/sections/Energies";
import About from "./components/sections/About";
import Testimonials from "./components/sections/Testimonials";
import FAQ from "./components/sections/FAQ";
import Contact from "./components/sections/Contact";
import ScrollToTopButton from "./components/common/ScrollToTopButton";
import WhatsAppButton from "./components/common/WhatsAppButton";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-background)] text-[var(--color-on-background)] transition-colors duration-200">
      {/* Header with Navigation & Theme Toggle */}
      <Header />

      {/* Top Bar with Contact Info & Social Icons */}
      <TopBar />

      {/* Main Page Content */}
      <main className="flex-1 w-full">
        <Hero />
        <Trust />
        <WhyUs />
        <Solutions />
        <Process />
        <Products />
        <Projects />
        <Energies />
        <About />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>

      {/* Footer Section */}
      <Footer />

      {/* Floating Action Controls */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-none">
        <div className="pointer-events-auto">
          <ScrollToTopButton />
        </div>
        <div className="pointer-events-auto">
          <WhatsAppButton />
        </div>
      </div>
    </div>
  );
}
