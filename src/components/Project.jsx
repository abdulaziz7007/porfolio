import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Projects({ t, setSelectedProject }) {
  return (
    <section id="projects" className="bg-[#0A0A0A] text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-8 py-16 sm:py-24">
        <h2 className="font-display mb-10 sm:mb-14 text-3xl sm:text-5xl font-black leading-none">{t.projectsTitle}</h2>
        <div className="border-t border-white/20">
          {t.projects.map((p, i) => (
            <motion.div
              key={p.id}
              id={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid gap-5 border-b border-white/20 py-8 sm:py-10 md:grid-cols-[auto_1fr_auto] md:items-start md:gap-10"
            >
              <span className="font-mono-c text-xs text-white/40">
                {String(i + 1).padStart(2, "0")} / {p.year}
              </span>
              <div>
                <h3 className="font-display mb-3 text-xl sm:text-3xl font-extrabold leading-tight">{p.title}</h3>
                <p className="mb-5 max-w-[60ch] text-sm sm:text-base text-white/60 leading-relaxed">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono-c rounded-full border border-white/25 px-3 py-1 text-xs text-white/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProject(p)}
                className="flex h-fit w-full sm:w-auto justify-center items-center gap-1.5 whitespace-nowrap rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-[#FFE600] cursor-pointer"
              >
                {t.viewProject}
                <ArrowUpRight size={15} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
