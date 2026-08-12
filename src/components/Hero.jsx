import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import { heroImage, heroStats, studio } from "../data/content";
import Media from "./Media";
import useCountUp from "../hooks/useCountUp";

function Stat({ stat, index }) {
  const [ref, value] = useCountUp(stat.value, {
    duration: 1600 + index * 250,
    decimals: stat.decimals || 0,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.1 + index * 0.12, duration: 0.6 }}
      className="border-l border-ink/10 pl-4"
    >
      <div className="font-display text-2xl text-ink md:text-3xl">
        {value.toLocaleString(undefined, {
          minimumFractionDigits: stat.decimals || 0,
          maximumFractionDigits: stat.decimals || 0,
        })}
        <span className="text-gold">{stat.suffix}</span>
      </div>
      <div className="mt-1 text-xs text-graphite">{stat.label}</div>
    </motion.div>
  );
}

export default function Hero() {
  const scrollTo = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden pb-20 pt-32 md:pb-28 md:pt-44"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-gold-light/25 blur-3xl" />
        <div className="absolute bottom-[-15%] left-[-10%] h-[420px] w-[420px] rounded-full bg-teal-light/60 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:gap-12 lg:px-10">
        {/* Copy column */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow"
          >
            {studio.name} · Est. 2012
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.15 }}
            className="text-balance mt-5 font-display text-[2.6rem] leading-[1.06] text-ink sm:text-6xl lg:text-[3.6rem]"
          >
            Dentistry, composed{" "}
            <span className="italic text-gold-dark">like art.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 max-w-md text-[15px] leading-relaxed text-graphite"
          >
            A private studio for porcelain veneers, invisible orthodontics
            and restorative artistry — where every smile is charted,
            designed and hand-finished by a single dedicated team.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#reserve"
              onClick={(e) => scrollTo(e, "#reserve")}
              className="btn-primary"
            >
              Reserve a Consultation
              <ArrowRight size={16} />
            </a>
            <a
              href="#transformations"
              onClick={(e) => scrollTo(e, "#transformations")}
              className="btn-secondary"
            >
              <PlayCircle size={16} />
              View Transformations
            </a>
          </motion.div>

          <div className="mt-14 grid max-w-md grid-cols-3 gap-6">
            {heroStats.map((stat, i) => (
              <Stat stat={stat} index={i} key={stat.label} />
            ))}
          </div>
        </div>

        {/* Image column with signature "smile chart" annotation motif */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-[2rem] shadow-lift"
          >
            <Media
              src={heroImage}
              alt="Patient with a designed, radiant smile at Aurelia Dental Studio"
              className="aspect-[4/5] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent" />
          </motion.div>

          {/* Floating chart annotation — top */}
          <motion.div
            initial={{ opacity: 0, x: 20, y: -10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
            className="animate-float absolute -right-4 top-8 hidden w-48 rounded-xl border border-ink/[0.06] bg-white/95 p-3.5 shadow-soft backdrop-blur sm:block"
          >
            <p className="chip">Upper Arch</p>
            <p className="mt-1 font-display text-sm text-ink">
              Porcelain Veneers
            </p>
            <p className="mt-0.5 font-mono text-[10px] text-graphite">
              Shade · BL1
            </p>
          </motion.div>

          {/* Floating chart annotation — bottom, ties to booking */}
          <motion.div
            initial={{ opacity: 0, x: -20, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.7, delay: 1.2 }}
            className="animate-floatSlow absolute -left-6 bottom-10 w-52 rounded-xl border border-ink/[0.06] bg-white/95 p-4 shadow-soft backdrop-blur"
          >
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-pulseDot absolute inline-flex h-full w-full rounded-full bg-teal" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-teal" />
              </span>
              <p className="chip !text-teal-dark">Bookings Open</p>
            </div>
            <p className="mt-2 font-display text-sm text-ink">
              Consultation · ₹999
            </p>
            <p className="mt-0.5 text-[11px] text-graphite">
              Fully refundable against treatment
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
