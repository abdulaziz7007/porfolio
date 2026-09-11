import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, CheckCircle2 } from "lucide-react";

export default function ProjectModal({ selectedProject, setSelectedProject, t }) {
  return (
    <AnimatePresence>
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-3 sm:p-4 backdrop-blur-sm overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-2xl rounded-xl border border-[#D7DEEC] bg-white p-5 sm:p-8 shadow-2xl my-auto max-h-[90vh] overflow-y-auto"
          >
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute right-3 top-3 sm:right-4 sm:top-4 rounded-md p-1.5 text-neutral-400 hover:bg-neutral-100 hover:text-neutral-900 transition-colors"
            >
              <X size={20} />
            </button>

            <div className="flex items-center gap-2 font-mono-c text-xs text-[#3B5BDB] mb-2">
              <span>{selectedProject.year}</span>
              <span>•</span>
              <span className="truncate max-w-50 sm:max-w-none">{selectedProject.tags.join(", ")}</span>
            </div>

            <h3 className="font-display text-xl sm:text-2xl font-bold text-[#10151F] mb-3">
              {selectedProject.title}
            </h3>

            <p className="text-neutral-600 leading-relaxed mb-5 text-sm sm:text-base">
              {selectedProject.details}
            </p>

            <div className="mb-6 rounded-lg bg-[#F7F8FB] p-4 border border-[#D7DEEC]">
              <p className="font-mono-c text-xs font-semibold text-[#10151F] mb-1">{t.modal.role}</p>
              <p className="text-sm text-neutral-600">{selectedProject.role}</p>
            </div>

            <div className="mb-8">
              <p className="font-mono-c text-xs font-semibold text-[#10151F] mb-3">{t.modal.features}</p>
              <ul className="space-y-2">
                {selectedProject.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start sm:items-center gap-2.5 text-sm text-neutral-700">
                    <CheckCircle2 size={16} className="text-[#3B5BDB] mt-0.5 sm:mt-0 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-end gap-3 border-t border-[#D7DEEC] pt-4">
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="rounded-md border border-[#D7DEEC] px-5 py-2.5 text-sm font-medium text-neutral-700 hover:bg-neutral-100 transition-colors text-center"
              >
                {t.modal.close}
              </button>
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-md bg-[#3B5BDB] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#324cb8]"
              >
                {t.modal.demo}
                <ExternalLink size={15} />
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}