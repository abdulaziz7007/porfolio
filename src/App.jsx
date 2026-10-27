import { useState } from "react";
import { content } from "./data/profileData";
import Header from "./components/header/Header";
import Hero from "./components/Hero";
import About from "./components/Aboute";
import Projects from "./components/Project";
import Contact from "./components/Contact";
import Intro from "./components/Intro";
import ProjectModal from "./components/ProjectModal";

export default function Portfolio() {
  const [lang, setLang] = useState("uz");
  const [ready, setReady] = useState(false);
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
    <div className="min-h-screen bg-white text-[#0A0A0A] antialiased selection:bg-[#FFE600] selection:text-black">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Archivo:wght@600;700;800;900&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600&display=swap');
        .font-display { font-family: 'Archivo', sans-serif; text-transform: uppercase; letter-spacing: -0.02em; }
        .font-mono-c { font-family: 'JetBrains Mono', monospace; }
        .font-body { font-family: 'Inter', sans-serif; }
      `}</style>

      <Intro onDone={() => setReady(true)} />
      <div className="font-body">
        <Header t={t} lang={lang} setLang={setLang} handleScrollTo={handleScrollTo} />
        <Hero t={t} handleScrollTo={handleScrollTo} ready={ready} />
        <About t={t} />
        <Projects t={t} setSelectedProject={setSelectedProject} />
        <Contact t={t} />

        <footer className="border-t border-black/10">
          <div className="mx-auto max-w-6xl px-4 sm:px-8 py-8 sm:py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-mono-c text-xs text-black/50">© 2026 Hatamov Abdulaziz.</p>
            <a href="#top" onClick={(e) => handleScrollTo(e, "top")} className="font-mono-c text-xs text-black/50 hover:text-black transition-colors">
              back-to-top()
            </a>
          </div>
        </footer>

        <ProjectModal selectedProject={selectedProject} setSelectedProject={setSelectedProject} t={t} />
      </div>
    </div>
  );
}