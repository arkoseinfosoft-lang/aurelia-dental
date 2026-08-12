import { motion } from "framer-motion";
import { galleryItems } from "../data/content";
import Media from "./Media";
import Reveal from "./Reveal";

export default function Gallery() {
  return (
    <section id="transformations" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <Reveal>
            <p className="eyebrow">Transformations</p>
            <h2 className="section-heading text-balance mt-4 max-w-lg">
              Real charts. Real smiles.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-xs text-sm leading-relaxed text-graphite">
              A small selection from our case archive, each annotated the
              way we chart it in studio.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item, i) => (
            <Reveal delay={(i % 3) * 0.08} key={item.caption}>
              <motion.div
                whileHover="hover"
                initial="rest"
                animate="rest"
                className="group relative overflow-hidden rounded-2xl"
              >
                <motion.div
                  variants={{ rest: { scale: 1 }, hover: { scale: 1.06 } }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Media
                    src={item.image}
                    alt={item.caption}
                    className="aspect-[4/5] w-full object-cover"
                  />
                </motion.div>

                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/0 to-ink/0" />

                <motion.div
                  variants={{
                    rest: { opacity: 0.9, y: 0 },
                    hover: { opacity: 1, y: -4 },
                  }}
                  className="absolute inset-x-0 bottom-0 p-5"
                >
                  <p className="font-mono text-[10px] tracking-widest2 text-gold-light uppercase">
                    {item.detail}
                  </p>
                  <p className="mt-1.5 font-display text-lg text-white">
                    {item.caption}
                  </p>
                </motion.div>

                <motion.div
                  variants={{
                    rest: { opacity: 0 },
                    hover: { opacity: 1 },
                  }}
                  className="pointer-events-none absolute inset-0 border-2 border-gold/70"
                />
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
