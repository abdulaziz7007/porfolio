import { useState } from "react";
import { content } from "./data/profileData";
import Header from "./components/header/Header";
import Hero from "./components/Hero";
import About from "./components/Aboute";
import Projects from "./components/Project";
import Contact from "./components/Contact";
import ProjectModal from "./components/ProjectModal";

export default function Portfolio() {
  const [lang, setLang] = useState("uz");
  const [selectedProject, setSelectedProject] = useState(null);
  const t = content[lang];

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F8FB] text-[#10151F] antialiased selection:bg-[#3B5BDB] selection:text-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@500;600;700;800&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600&display=swap');
        .font-display { font-family: 'Sora', sans-serif; }
        .font-mono-c { font-family: 'JetBrains Mono', monospace; }
        .font-body { font-family: 'Inter', sans-serif; }
        .dot-grid {
          background-image: radial-gradient(#C7D2E8 1px, transparent 1px);
          background-size: 22px 22px;
        }
      `}</style>

      <div className="font-body dot-grid">
        <Header t={t} lang={lang} setLang={setLang} handleScrollTo={handleScrollTo} />
        <Hero t={t} handleScrollTo={handleScrollTo} />
        <About t={t} />
        <Projects t={t} setSelectedProject={setSelectedProject} />
        <Contact t={t} />

        <footer className="border-t border-[#D7DEEC]">
          <div className="mx-auto max-w-6xl px-4 sm:px-8 py-8 sm:py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-mono-c text-xs text-[#9099AC]">© 2026 Hatamov Abdulaziz.</p>
            <a href="#top" onClick={(e) => handleScrollTo(e, "top")} className="font-mono-c text-xs text-[#9099AC] hover:text-[#10151F] transition-colors">
              back-to-top()
            </a>
          </div>
        </footer>

        <ProjectModal selectedProject={selectedProject} setSelectedProject={setSelectedProject} t={t} />
      </div>
    </div>
  );
}