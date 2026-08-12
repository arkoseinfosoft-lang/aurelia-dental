import { Instagram, Facebook, Mail, Phone, MapPin, Clock } from "lucide-react";
import { navLinks, studio } from "../data/content";
import { scrollToSection } from "../utils/scroll";

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (e, href) => {
    e.preventDefault();
    scrollToSection(href, 80);
  };

  return (
    <footer className="bg-ink pt-16 sm:pt-20 text-white/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-10 sm:gap-12 border-b border-white/10 pb-12 sm:pb-14 md:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
          <div>
            <a href="#home" onClick={(e) => scrollTo(e, "#home")} className="font-display text-2xl text-white">
              {studio.shortName}
              <span className="text-gold">.</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              {studio.tagline} A private cosmetic and restorative dentistry
              studio built around a chart-first, unhurried approach to care.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-gold hover:text-gold"
              >
                <Instagram size={15} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-gold hover:text-gold"
              >
                <Facebook size={15} />
              </a>
            </div>
          </div>

          <div>
            <p className="chip !text-white/40">Navigate</p>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollTo(e, link.href)}
                    className="text-sm transition-colors hover:text-gold-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="chip !text-white/40">Studio</p>
            <ul className="mt-4 space-y-3.5 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="mt-0.5 shrink-0 text-gold-light" />
                <span>{studio.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={15} className="shrink-0 text-gold-light" />
                <a href={`tel:${studio.phone.replace(/\s/g, "")}`} className="hover:text-gold-light">
                  {studio.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={15} className="shrink-0 text-gold-light" />
                <a href={`mailto:${studio.email}`} className="hover:text-gold-light">
                  {studio.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock size={15} className="shrink-0 text-gold-light" />
                <span>{studio.hours}</span>
              </li>
            </ul>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/10">
            <iframe
              title="Aurelia Dental Studio location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=72.825%2C18.935%2C72.845%2C18.955&layer=mapnik&marker=18.945%2C72.835"
              className="h-48 w-full grayscale invert"
              loading="lazy"
            />
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 py-6 sm:py-7 text-xs text-white/40 sm:flex-row text-center sm:text-left">
          <p>© {year} {studio.name}. All rights reserved.</p>
          <p>Crafted with care for every smile that walks in.</p>
        </div>
      </div>
    </footer>
  );
}
