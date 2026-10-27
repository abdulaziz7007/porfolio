import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WORDS = ["Frontend", "React", "Creative", "Developer"];

export default function Intro({ onDone }) {
  const [show, setShow] = useState(true);
  const [i, setI] = useState(0);

  useEffect(() => {
    document.body.style.overflow = show ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [show]);

  useEffect(() => {
    const w = setInterval(() => setI((n) => Math.min(n + 1, WORDS.length - 1)), 600);
    const d = setTimeout(() => setShow(false), 3400);
    return () => {
      clearInterval(w);
      clearTimeout(d);
    };
  }, []);

  return (
    <AnimatePresence onExitComplete={onDone}>
      {show && (
        <motion.div
          key="intro"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-black text-white"
        >
          <motion.div
            initial={{ scale: 0.2, opacity: 0 }}
            animate={{ scale: 1.4, opacity: 1 }}
            transition={{ duration: 2.4, ease: "easeOut" }}
            className="absolute h-[60vmin] w-[60vmin] rounded-full bg-[radial-gradient(circle,rgba(124,92,255,0.45),rgba(0,0,0,0)_70%)]"
          />
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-mono-c relative mb-4 text-xs tracking-[0.3em] text-white/50"
          >
            {"<portfolio />"}
          </motion.p>
          <div className="relative h-[1.2em] overflow-hidden text-5xl sm:text-7xl font-display font-black">
            <AnimatePresence mode="wait">
              <motion.span
                key={WORDS[i]}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="block"
              >
                {WORDS[i]}
              </motion.span>
            </AnimatePresence>
          </div>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 3, ease: "linear" }}
            className="absolute bottom-0 left-0 h-0.5 w-full origin-left bg-[#FFE600]"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
