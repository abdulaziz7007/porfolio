import { useState } from "react";
import { Mail, Send, ArrowUpRight, X, ExternalLink, CheckCircle2 } from "lucide-react";
import { FaGithub, FaInstagram, FaMicrophone, FaPhone, FaPhoneAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const content = {
  uz: {
    nav: { about: "Men haqimda", projects: "Loyihalar", contact: "Aloqa" },
    kicker: "Frontend dasturchi",
    heroTitle: "Interfeyslar va zamonaviy veb-ilovalar yarataman.",
    heroText:
      "Foydalanuvchilar uchun qulay, tez ishlaydigan va jozibali veb-ilovalar yasashga ixtisoslashganman. Kod sifati va dizayn uyg'unligiga doimo e'tibor beraman.",
    ctaPrimary: "Loyihalarni ko'rish",
    ctaGhost: "Bog'lanish",
    aboutTitle: "Men haqimda",
    aboutP1:
      "Toshkentda joylashgan frontend dasturchiman. Murakkab dizaynlarni mukammal ishlaydigan va moslashuvchan veb-sahifalarga aylantirishni yoqtiraman.",
    aboutP2:
      "React, Next.js va TypeScript texnologiyalari yordamida yuqori unumdorlikka ega raqamli mahsulotlar yaratish ustida ishlayman.",
    projectsTitle: "Loyihalar",
    contactTitle: "Loyihangiz bormi? Yozing.",
    contactText:
      "Yangi loyihalar va hamkorlik takliflariga doimo ochiqman. Quyidagi kanallardan birortasi orqali bemalol bog'lanishingiz mumkin.",
    viewProject: "Ko'rish",
    modal: {
      features: "Asosiy imkoniyatlar:",
      role: "Mening vazifam:",
      demo: "Jonli ko'rish",
      close: "Yopish",
    },
    projects: [
      {
        year: "2025",
        title: "Airo X Travel Platformasi",
        desc: "Onlayn sayohat va bron qilish xizmati uchun zamonaviy hamda tez ishlaydigan interfeys. Savatcha va qulay qidiruv filtrlari integratsiya qilingan.",
        details:
          "Airo X Travel — foydalanuvchilarga dunyo bo'ylab safarlarni tezkor rejalashtirish, mehmonxonalar va aviachiptalarni bron qilish imkonini beruvchi platforma. Loyiha davomida Responsive dizayn, murakkab filtratsiya tizimi hamda Redux Toolkit orqali holatni boshqarish (State Management) amalga oshirildi.",
        role: "Frontend Dasturchi (UI/UX integratsiyasi, komponentlar arxitekturasi)",
        features: [
          "Tezkor qidiruv va filtrlash tizimi",
          "Savatcha va bron qilish jarayoni",
          "Mobil qurilmalarga to'liq moslashgan (Responsive)",
          "Optimizatsiya qilingan qulay interfeys",
        ],
        tags: ["React", "Tailwind CSS", "Redux"],
        link: "https://aairox.vercel.app/",
      },
    ],
  },
  ru: {
    nav: { about: "Обо мне", projects: "Проекты", contact: "Контакты" },
    kicker: "Frontend разработчик",
    heroTitle: "Создаю интерфейсы и современные веб-приложения.",
    heroText:
      "Специализируюсь на разработке удобных, быстрых и адаптивных веб-приложений. Уделяю особое внимание чистоте кода и пользовательскому опыту.",
    ctaPrimary: "Смотреть проекты",
    ctaGhost: "Связаться",
    aboutTitle: "Обо мне",
    aboutP1:
      "Фронтенд-разработчик из Ташкента. Люблю превращать сложные идеи в простые, интуитивно понятные и быстрые пользовательские интерфейсы.",
    aboutP2:
      "В работе активно использую современные технологии, такие как React, Next.js, TypeScript и Tailwind CSS.",
    projectsTitle: "Проекты",
    contactTitle: "Есть проект? Напишите.",
    contactText:
      "Открыт к новым проектам и предложениям о сотрудничестве. Вы можете связаться со мной через любой из удобных каналов ниже.",
    viewProject: "Открыть",
    modal: {
      features: "Основные возможности:",
      role: "Моя роль:",
      demo: "Живой просмотр",
      close: "Закрыть",
    },
    projects: [
      {
        year: "2025",
        title: "Платформа Airo X Travel",
        desc: "Современный и быстрый фронтенд-интерфейс для онлайн-сервиса путешествий с удобной корзиной и фильтрами для поиска.",
        details:
          "Airo X Travel — платформа, позволяющая пользователям планировать поездки, бронировать отели и авиабилеты. В рамках проекта реализованы адаптивный интерфейс, сложная система фильтрации и управление состояниями через Redux Toolkit.",
        role: "Frontend Разработчик (интеграция UI/UX, архитектура компонентов)",
        features: [
          "Быстрый поиск и система фильтрации",
          "Корзина и процесс бронирования",
          "Полная адаптивность под мобильные устройства",
          "Оптимизированный и интуитивный интерфейс",
        ],
        tags: ["React", "Tailwind CSS", "Redux"],
        link: "https://aairox.vercel.app/",
      },
    ],
  },
};

const stack = ["React / Next.js", "TypeScript", "JavaScript (ES6+)", "HTML / CSS", "Tailwind CSS", "Git & GitHub", "REST API"];

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

export default function Portfolio() {
  const [lang, setLang] = useState("uz");
  const [selectedProject, setSelectedProject] = useState(null);
  const t = content[lang];

  return (
    <div className="min-h-screen bg-[#F7F8FB] text-[#10151F] antialiased selection:bg-[#3B5BDB] selection:text-white overflow-x-hidden">
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
        {/* Header */}
        <motion.header
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="sticky top-0 z-50 border-b border-[#D7DEEC] bg-[#F7F8FB]/90 backdrop-blur-md"
        >
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-8 py-4 sm:py-5">
            <a href="#top" className="font-display text-sm sm:text-lg font-bold tracking-tight hover:text-[#3B5BDB] transition-colors truncate max-w-[160px] sm:max-w-none">
              Hatamov Abdulaziz
            </a>
            <nav className="flex items-center gap-3 sm:gap-7">
              <a href="#about" className="font-mono-c text-[11px] sm:text-xs text-[#5C6474] hover:text-[#10151F] transition-colors hidden sm:inline-block">
                {t.nav.about}
              </a>
              <a href="#projects" className="font-mono-c text-[11px] sm:text-xs text-[#5C6474] hover:text-[#10151F] transition-colors">
                {t.nav.projects}
              </a>
              <a href="#contact" className="font-mono-c text-[11px] sm:text-xs text-[#5C6474] hover:text-[#10151F] transition-colors">
                {t.nav.contact}
              </a>
              <div className="flex items-center rounded-md border border-[#D7DEEC] bg-white p-0.5 sm:p-1 font-mono-c text-xs shadow-[2px_2px_0_0_#D7DEEC]">
                <button
                  type="button"
                  onClick={() => setLang("uz")}
                  className={`rounded px-2 sm:px-3 py-1 cursor-pointer transition-all text-[11px] sm:text-xs ${lang === "uz" ? "bg-black text-white" : "text-[#5C6474] hover:text-[#10151F]"
                    }`}
                >
                  UZ
                </button>
                <button
                  type="button"
                  onClick={() => setLang("ru")}
                  className={`rounded px-2 sm:px-3 py-1 cursor-pointer transition-all text-[11px] sm:text-xs ${lang === "ru" ? "bg-black text-white" : "text-[#5C6474] hover:text-[#10151F]"
                    }`}
                >
                  RU
                </button>
              </div>
            </nav>
          </div>
        </motion.header>

        {/* Hero */}
        <section id="top" className="border-b border-[#D7DEEC]">
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
                  className="rounded-md bg-[#10151F] px-6 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-[#3B5BDB]"
                >
                  {t.ctaPrimary}
                </a>
                <a
                  href="#contact"
                  className="rounded-md border-2 border-[#10151F] px-6 py-3 text-center text-sm font-medium transition-colors hover:border-blue-500 hover:text-blue-500"
                >
                  {t.ctaGhost}
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About */}
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

        {/* Projects */}
        <section id="projects" className="border-b border-[#D7DEEC]">
          <div className="mx-auto max-w-6xl px-4 sm:px-8 py-16 sm:py-20">
            <div className="mb-8 sm:mb-11 flex items-baseline gap-3">
              <span className="font-mono-c text-sm text-[#3B5BDB]">{"//"}</span>
              <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight">{t.projectsTitle}</h2>
            </div>
            <div className="space-y-8">
              {t.projects.map((p) => (
                <motion.div
                  key={p.title}
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

        {/* Contact */}
        <section id="contact">
          <div className="mx-auto max-w-6xl px-4 sm:px-8 py-16 sm:py-20">
            <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] items-start">
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <span className="font-mono-c text-sm text-[#3B5BDB]">{"//"}</span>
                </div>
                <h2 className="font-display mb-4 max-w-[12ch] text-2xl sm:text-3xl font-bold tracking-tight">
                  {t.contactTitle}
                </h2>
                <p className="max-w-[40ch] text-sm sm:text-base text-[#5C6474] leading-relaxed">{t.contactText}</p>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="overflow-hidden rounded-lg border border-[#D7DEEC] bg-[#10151F] shadow-[4px_4px_0_0_#D7DEEC]"
              >
                <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-2.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FF6B4A]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#F4C05E]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#4FBF77]" />
                  <span className="font-mono-c ml-3 text-[11px] text-white/40">contact.A</span>
                </div>
                <ul className="font-mono-c p-4 sm:p-5 text-xs sm:text-sm">
                  <li>
                    <a
                      href="mailto:uybfre@gmail.com"
                      className="group flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2.5 py-2.5 text-white/70 hover:text-white transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <Mail size={14} className="text-white/40 group-hover:text-[#3B5BDB]" />
                        <span>Email</span>
                      </div>
                      <span className="sm:ml-auto text-white/40 group-hover:text-white/70 text-[11px] sm:text-xs truncate">uybfre@gmail.com</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://t.me/uzb_codes"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between py-2.5 text-white/70 hover:text-white transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <Send size={14} className="text-white/40 group-hover:text-[#3B5BDB]" />
                        <span>Telegram</span>
                      </div>
                      <span className="text-white/40 group-hover:text-white/70 text-xs">@uzb_codes</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/abdulaziz7007"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between py-2.5 text-white/70 hover:text-white transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <FaGithub size={14} className="text-white/40 group-hover:text-[#3B5BDB]" />
                        <span>Github</span>
                      </div>
                      <span className="text-white/40 group-hover:text-white/70 text-xs">abdulaziz7007</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://instagram.com/abo.coder"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between py-2.5 text-white/70 hover:text-white transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <FaInstagram size={14} className="text-white/40 group-hover:text-[#3B5BDB]" />
                        <span>Instagram</span>
                      </div>
                      <span className="text-white/40 group-hover:text-white/70 text-xs">abo.coder</span>
                    </a>
                  </li>
               <li>
                 
                    <a href="tel:+998932135544"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between py-2.5 text-white/70 hover:text-white transition-colors">
                      <div className="flex items-center gap-2.5">
                        <FaPhoneAlt size={14} className="text-white/40 group-hover:text-[#3B5BDB]" />
                        <span>Tel: +998 93 213 55 44</span>
                      </div>
                   
                    </a>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-[#D7DEEC]">
          <div className="mx-auto max-w-6xl px-4 sm:px-8 py-8 sm:py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-mono-c text-xs text-[#9099AC]">© 2026 Hatamov Abdulaziz.</p>
            <a href="#top" className="font-mono-c text-xs text-[#9099AC] hover:text-[#10151F] transition-colors">
              back-to-top()
            </a>
          </div>
        </footer>

        {/* Project Detail Modal */}
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
      </div>
    </div>
  );
}