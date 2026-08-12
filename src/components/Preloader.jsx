import { motion, AnimatePresence } from "framer-motion";

export default function Preloader({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ivory"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
        >
          <motion.span
            className="font-display text-3xl tracking-wide text-ink"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Aurelia<span className="text-gold">.</span>
          </motion.span>

          <motion.div
            className="mt-6 h-px w-40 origin-left bg-gold-light"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.1, ease: [0.65, 0, 0.35, 1], delay: 0.2 }}
          />

          <motion.span
            className="chip mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Dentistry, composed like art
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
