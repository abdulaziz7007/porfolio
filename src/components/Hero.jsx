import { motion } from "framer-motion";

function Corners() {
  const base = "absolute h-3 w-3 sm:h-4 sm:w-4 border-[#10151F]";
  return (
    <>
      <span className={`${base} -left-px -top-px border-l-2 border-t-2`} />
      <span className={`${base} -right-px -top-px border-r-2 border-t-2`} />
      <span className={`${base} -left-px -bottom-px border-l-2 border-b-2`} />
      <span className={`${base} -right-px -bottom-px border-r-2 border-b-2`} />
    </>
  );
}

export default function Hero({ t, handleScrollTo }) {
  return (
    <section id="top" className="border-b border-[#D7DEEC] pt-24 sm:pt-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-8 py-16 sm:py-28">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative border border-[#D7DEEC] bg-white/70 px-6 py-10 sm:px-12 sm:py-14"
        >
          <Corners />
          <p className="font-mono-c mb-4 inline-block rounded bg-[#3B5BDB]/10 px-2.5 py-1 text-xs font-medium text-[#3B5BDB]">
            {"<"}{t.kicker}{" />"}
          </p>
          <h1 className="font-display mb-6 max-w-[18ch] text-3xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
            {t.heroTitle}
          </h1>
          <p className="mb-9 max-w-[48ch] text-base sm:text-lg text-[#5C6474] leading-relaxed">{t.heroText}</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#projects"
              onClick={(e) => handleScrollTo(e, "projects")}
              className="rounded-md bg-[#10151F] px-6 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-[#3B5BDB]"
            >
              {t.ctaPrimary}
            </a>
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, "contact")}
              className="rounded-md border-2 border-[#10151F] px-6 py-3 text-center text-sm font-medium transition-colors hover:border-blue-500 hover:text-blue-500"
            >
              {t.ctaGhost}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}