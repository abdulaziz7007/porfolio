import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Hero({ t, handleScrollTo, ready = true }) {
  return (
    <section id="top" className="relative overflow-hidden bg-black text-white pt-24 sm:pt-28">
      <div className="pointer-events-none absolute -right-32 top-10 h-[60vmin] w-[60vmin] rounded-full bg-[radial-gradient(circle,rgba(124,92,255,0.35),rgba(0,0,0,0)_70%)]" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-8 py-14 sm:py-24 md:grid-cols-[1.2fr_1fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="font-mono-c mb-6 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white/60"
          >
            <span className="h-2 w-2 rounded-full bg-[#FFE600]" />
            {t.kicker}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display mb-8 text-4xl sm:text-6xl lg:text-7xl font-black leading-[1.02]"
          >
            {t.heroTitle}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-9 max-w-[52ch] text-base sm:text-lg text-white/60 leading-relaxed"
          >
            {t.heroText}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <a
              href="#projects"
              onClick={(e) => handleScrollTo(e, "projects")}
              className="inline-flex items-center justify-center gap-1.5 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-black transition-colors hover:bg-[#FFE600]"
            >
              {t.ctaPrimary}
              <ArrowUpRight size={15} />
            </a>
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, "contact")}
              className="rounded-full border border-white/30 px-7 py-3.5 text-center text-sm font-medium transition-colors hover:bg-white hover:text-black"
            >
              {t.ctaGhost}
            </a>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={ready ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative mx-auto w-full max-w-sm overflow-hidden rounded-3xl border border-white/15 bg-white/5 aspect-[4/5]"
        >
          <img
            src="/profile.jpg"
            alt="Hatamov Abdulaziz"
            className="h-full w-full object-cover"
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
        </motion.div>
      </div>
    </section>
  );
}
