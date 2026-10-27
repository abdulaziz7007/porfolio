import { motion } from "framer-motion";
import { stack } from "../data/profileData";

export default function About({ t }) {
  return (
    <section id="about" className="border-b border-black/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-8 py-16 sm:py-24">
        <h2 className="font-display mb-10 sm:mb-14 text-3xl sm:text-5xl font-black leading-none">{t.aboutTitle}</h2>
        <div className="grid gap-8 sm:gap-12 md:grid-cols-2 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="mb-4 text-base sm:text-lg text-black/80 leading-relaxed">{t.aboutP1}</p>
            <p className="text-sm sm:text-base text-black/60 leading-relaxed">{t.aboutP2}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-mono-c mb-4 text-xs uppercase tracking-widest text-black/50">Stack</p>
            <ul className="flex flex-wrap gap-2">
              {stack.map((s, idx) => (
                <motion.li
                  key={s}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="font-mono-c rounded-full border border-black px-4 py-2 text-xs text-black transition-colors hover:bg-[#FFE600]"
                >
                  {s}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
