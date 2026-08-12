import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, studio } from "../data/content";
import useActiveSection from "../hooks/useActiveSection";
import { scrollToSection } from "../utils/scroll";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useActiveSection(navLinks.map((l) => l.href.slice(1)));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e, href) => {
    if (e) e.preventDefault();
    setMenuOpen(false);
    scrollToSection(href, 80);
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled || menuOpen
            ? "bg-ivory/95 backdrop-blur-md shadow-card py-3 border-b border-ink/5"
            : "bg-transparent py-5 md:py-6"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-10">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="font-display text-lg sm:text-xl tracking-wide text-ink focus-visible:outline-gold rounded"
          >
            {studio.shortName}
            <span className="text-gold">.</span>
          </a>

          <ul className="hidden items-center gap-8 lg:gap-9 md:flex">
            {navLinks.map((link) => {
              const isActive = activeId === link.href.slice(1);
              return (
                <li key={link.href} className="relative">
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`text-[13px] font-semibold tracking-wide transition-colors focus-visible:outline-gold rounded py-1 ${
                      isActive ? "text-ink" : "text-graphite hover:text-ink"
                    }`}
                  >
                    {link.label}
                  </a>
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-gold"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                </li>
              );
            })}
          </ul>

          <div className="hidden md:block">
            <a
              href="#reserve"
              onClick={(e) => handleNavClick(e, "#reserve")}
              className="btn-primary !py-2.5 !px-5 text-xs shadow-sm"
            >
              Reserve a Visit
            </a>
          </div>

          <button
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="rounded-full border border-ink/10 p-2.5 text-ink md:hidden hover:bg-ink/5 transition-colors focus-visible:outline-gold"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {/* Mobile dropdown menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="overflow-hidden border-t border-ink/5 bg-ivory md:hidden shadow-card max-h-[calc(100vh-64px)] overflow-y-auto"
            >
              <ul className="flex flex-col gap-1 px-5 pt-3 pb-6">
                {navLinks.map((link) => {
                  const isActive = activeId === link.href.slice(1);
                  return (
                    <li key={link.href} className="border-b border-ink/5 last:border-none">
                      <a
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className={`flex items-center justify-between py-3.5 px-2 text-base font-display rounded-lg transition-colors ${
                          isActive ? "text-ink font-semibold bg-ink/5" : "text-ink/80 hover:text-ink"
                        }`}
                      >
                        <span>{link.label}</span>
                        {isActive && (
                          <span className="w-2 h-2 rounded-full bg-gold" />
                        )}
                      </a>
                    </li>
                  );
                })}
                <li className="pt-4">
                  <a
                    href="#reserve"
                    onClick={(e) => handleNavClick(e, "#reserve")}
                    className="btn-primary w-full text-sm py-3.5 shadow-card"
                  >
                    Reserve a Visit
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Mobile backdrop overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 top-[64px] bg-ink/40 backdrop-blur-sm md:hidden z-40"
          />
        )}
      </AnimatePresence>
    </>
  );
}
