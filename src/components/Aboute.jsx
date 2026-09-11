import { motion } from "framer-motion";
import { stack } from "../data/profileData";

export default function About({ t }) {
  return (
    <section id="about" className="border-b border-[#D7DEEC]">
      <div className="mx-auto max-w-6xl px-4 sm:px-8 py-16 sm:py-20">
        <div className="mb-8 sm:mb-11 flex items-baseline gap-3">
          <span className="font-mono-c text-sm text-[#3B5BDB]">{"//"}</span>
          <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight">{t.aboutTitle}</h2>
        </div>
        <div className="grid gap-8 sm:gap-12 md:grid-cols-2 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="mb-4 text-sm sm:text-base text-[#5C6474] leading-relaxed">{t.aboutP1}</p>
            <p className="text-sm sm:text-base text-[#5C6474] leading-relaxed">{t.aboutP2}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-mono-c mb-4 text-xs text-[#9099AC]">{"<Stack />"}</p>
            <ul className="flex flex-wrap gap-2">
              {stack.map((s, idx) => (
                <motion.li
                  key={s}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="font-mono-c rounded-md border border-[#D7DEEC] bg-white px-3 py-2 text-xs text-[#10151F] shadow-[2px_2px_0_0_#D7DEEC]"
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