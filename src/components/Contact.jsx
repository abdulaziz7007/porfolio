import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { FaGithub, FaInstagram, FaPhoneAlt } from "react-icons/fa";

export default function Contact({ t }) {
  return (
    <section id="contact" className="">
      <div className="mx-auto max-w-6xl px-4 sm:px-8 py-16 sm:py-20">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] items-start">
          <div>
            <h2 className="font-display mb-6 max-w-[12ch] text-3xl sm:text-5xl font-black leading-none">
              {t.contactTitle}
            </h2>
            <p className="max-w-[40ch] text-sm sm:text-base text-black/60 leading-relaxed">{t.contactText}</p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-2xl bg-[#0A0A0A]"
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
                    <Mail size={14} className="text-white/40 group-hover:text-[#FFE600]" />
                    <span>Email</span>
                  </div>
                  <span className="sm:ml-auto text-white/40 group-hover:text-white/70 text-[11px] sm:text-xs truncate">uybfre@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/abo_coder"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-2.5 text-white/70 hover:text-white transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <Send size={14} className="text-white/40 group-hover:text-[#FFE600]" />
                    <span>Telegram</span>
                  </div>
                  <span className="text-white/40 group-hover:text-white/70 text-xs">@abo_coder</span>
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
                    <FaGithub size={14} className="text-white/40 group-hover:text-[#FFE600]" />
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
                    <FaInstagram size={14} className="text-white/40 group-hover:text-[#FFE600]" />
                    <span>Instagram</span>
                  </div>
                  <span className="text-white/40 group-hover:text-white/70 text-xs">abo.coder</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+998932135544"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-2.5 text-white/70 hover:text-white transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <FaPhoneAlt size={14} className="text-white/40 group-hover:text-[#FFE600]" />
                   <a href="tel:+998500200684">+998 50 020 06 84</a>
                  </div>
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}