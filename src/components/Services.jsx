import { motion } from "framer-motion";
import {
  LayoutGrid,
  Gem,
  Scan,
  Sun,
  Anchor,
  Activity,
  ArrowUpRight,
} from "lucide-react";
import { services } from "../data/content";
import Reveal from "./Reveal";
import { scrollToSection } from "../utils/scroll";

const icons = { LayoutGrid, Gem, Scan, Sun, Anchor, Activity };

export default function Services() {
  const scrollToReserve = (e) => {
    e.preventDefault();
    scrollToSection("#reserve", 80);
  };

  return (
    <section id="treatments" className="bg-ivory py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <Reveal className="mx-auto max-w-xl text-center">
          <p className="eyebrow justify-center">The Treatment Chart</p>
          <h2 className="section-heading text-balance mt-3 sm:mt-4 text-3xl sm:text-4xl md:text-5xl">
            Six ways to a considered smile.
          </h2>
          <p className="mt-4 sm:mt-5 text-sm sm:text-[15px] leading-relaxed text-graphite">
            Every treatment begins with the same chart-first approach —
            diagnosed, simulated and priced before you commit to a plan.
          </p>
        </Reveal>

        <div className="mt-10 sm:mt-16 divide-y divide-ink/[0.07] border-y border-ink/[0.07]">
          {services.map((service, i) => {
            const Icon = icons[service.icon];
            return (
              <Reveal delay={i * 0.05} key={service.code}>
                <motion.a
                  href="#reserve"
                  onClick={scrollToReserve}
                  whileHover="hover"
                  className="group grid grid-cols-1 items-center gap-3.5 sm:gap-8 py-5 sm:py-7 sm:grid-cols-[auto_1fr_auto_auto]"
                >
                  <span className="font-mono text-xs tracking-widest2 text-gold-dark">
                    {service.code}
                  </span>

                  <div className="flex items-center gap-3.5 sm:gap-4">
                    <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-full bg-white text-ink shadow-card transition-colors group-hover:bg-ink group-hover:text-white">
                      <Icon size={18} strokeWidth={1.75} />
                    </div>
                    <div>
                      <p className="font-display text-base sm:text-lg md:text-xl text-ink">
                        {service.name}
                      </p>
                      <p className="mt-0.5 sm:mt-1 max-w-md text-xs sm:text-[13px] leading-relaxed text-graphite">
                        {service.desc}
                      </p>
                    </div>
                  </div>

                  <span className="font-display text-sm sm:text-base text-ink sm:text-right">
                    from {service.price}
                  </span>

                  <motion.span
                    variants={{ hover: { x: 4, y: -4 } }}
                    className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center justify-self-start rounded-full border border-ink/10 text-ink transition-colors group-hover:border-gold group-hover:text-gold-dark sm:justify-self-end"
                  >
                    <ArrowUpRight size={15} />
                  </motion.span>
                </motion.a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
