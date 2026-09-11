import { motion } from "framer-motion";

export default function Header({ t, lang, setLang, handleScrollTo }) {
  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-[#D7DEEC] bg-[#F7F8FB]/90 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-8 py-4 sm:py-5">
        <a href="#top" onClick={(e) => handleScrollTo(e, "top")} className="font-display text-sm sm:text-lg font-bold tracking-tight hover:text-[#3B5BDB] transition-colors truncate max-w-40 sm:max-w-none">
          Hatamov Abdulaziz
        </a>
        <nav className="flex items-center gap-3 sm:gap-7">
          <a href="#about" onClick={(e) => handleScrollTo(e, "about")} className="font-mono-c text-[11px] sm:text-xs text-[#5C6474] hover:text-[#10151F] transition-colors hidden sm:inline-block">
            {t.nav.about}
          </a>
          <a href="#projects" onClick={(e) => handleScrollTo(e, "projects")} className="font-mono-c text-[11px] sm:text-xs text-[#5C6474] hover:text-[#10151F] transition-colors">
            {t.nav.projects}
          </a>
          <a href="#contact" onClick={(e) => handleScrollTo(e, "contact")} className="font-mono-c text-[11px] sm:text-xs text-[#5C6474] hover:text-[#10151F] transition-colors">
            {t.nav.contact}
          </a>
          <div className="flex items-center rounded-md border border-[#D7DEEC] bg-white p-0.5 sm:p-1 font-mono-c text-xs shadow-[2px_2px_0_0_#D7DEEC]">
            <button
              type="button"
              onClick={() => setLang("uz")}
              className={`rounded px-2 sm:px-3 py-1 cursor-pointer transition-all text-[11px] sm:text-xs ${lang === "uz" ? "bg-black text-white" : "text-[#5C6474] hover:text-[#10151F]"}`}
            >
              UZ
            </button>
            <button
              type="button"
              onClick={() => setLang("ru")}
              className={`rounded px-2 sm:px-3 py-1 cursor-pointer transition-all text-[11px] sm:text-xs ${lang === "ru" ? "bg-black text-white" : "text-[#5C6474] hover:text-[#10151F]"}`}
            >
              RU
            </button>
          </div>
        </nav>
      </div>
    </motion.header>
  );
}