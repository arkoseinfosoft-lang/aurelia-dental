import { motion } from "framer-motion";
import {
  Microscope,
  ShieldCheck,
  Sparkles,
  Infinity as InfinityIcon,
} from "lucide-react";
import { doctor, principles } from "../data/content";
import Media from "./Media";
import Reveal from "./Reveal";

const icons = {
  Microscope,
  ShieldCheck,
  Sparkles,
  Infinity: InfinityIcon,
};

export default function About() {
  return (
    <section id="philosophy" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <Reveal className="relative order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-[2rem]">
              <Media
                src={doctor.image}
                alt={doctor.name}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-8 left-6 right-6 rounded-xl border border-ink/[0.06] bg-white p-5 shadow-lift sm:left-10 sm:right-auto sm:w-72"
            >
              <p className="font-display text-lg text-ink">{doctor.name}</p>
              <p className="chip mt-1">{doctor.role}</p>
            </motion.div>
          </Reveal>

          {/* Copy */}
          <div className="order-1 lg:order-2">
            <Reveal>
              <p className="eyebrow">Our Philosophy</p>
              <h2 className="section-heading text-balance mt-4">
                A studio, not a surgery.
              </h2>
              <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-graphite">
                {doctor.bio}
              </p>
            </Reveal>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {principles.map((item, i) => {
                const Icon = icons[item.icon];
                return (
                  <Reveal delay={i * 0.08} key={item.title}>
                    <div className="flex gap-3.5">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-light text-teal-dark">
                        <Icon size={18} strokeWidth={1.75} />
                      </div>
                      <div>
                        <p className="font-display text-[15px] text-ink">
                          {item.title}
                        </p>
                        <p className="mt-1 text-[13px] leading-relaxed text-graphite">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
