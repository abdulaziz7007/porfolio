import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Projects({ t, setSelectedProject }) {
  return (
    <section id="projects" className="border-b border-[#D7DEEC]">
      <div className="mx-auto max-w-6xl px-4 sm:px-8 py-16 sm:py-20">
        <div className="mb-8 sm:mb-11 flex items-baseline gap-3">
          <span className="font-mono-c text-sm text-[#3B5BDB]">{"//"}</span>
          <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight">{t.projectsTitle}</h2>
        </div>
        <div className="space-y-8">
          {t.projects.map((p) => (
            <motion.div
              key={p.id}
              id={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden rounded-lg border border-[#D7DEEC] bg-white shadow-[4px_4px_0_0_#D7DEEC]"
            >
              <div className="flex items-center gap-1.5 border-b border-[#D7DEEC] bg-[#F1F3F9] px-4 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#FF6B4A]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#F4C05E]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#4FBF77]" />
                <span className="font-mono-c ml-3 text-[11px] text-[#9099AC]">{p.year}</span>
              </div>
              <div className="grid gap-6 p-5 sm:p-8 md:grid-cols-[1fr_auto] md:items-start">
                <div>
                  <h3 className="font-display mb-2 text-lg sm:text-xl font-bold text-[#10151F]">{p.title}</h3>
                  <p className="mb-4 max-w-[56ch] text-sm sm:text-base text-[#5C6474] leading-relaxed">{p.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono-c rounded bg-[#3B5BDB]/10 px-2.5 py-1 text-xs font-medium text-[#3B5BDB]"
                      >
                        .{tag.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
                      </span>
                    ))}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedProject(p)}
                  className="flex h-fit w-full sm:w-auto justify-center items-center gap-1.5 whitespace-nowrap rounded-md border-2 border-[#10151F] px-4 py-2.5 text-sm font-medium transition-colors hover:border-[#3B5BDB] hover:text-[#3B5BDB] cursor-pointer"
                >
                  {t.viewProject}
                  <ArrowUpRight size={15} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}