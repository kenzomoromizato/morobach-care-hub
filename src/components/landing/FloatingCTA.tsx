import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FloatingCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 520);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="https://wa.me/5561996703427?text=Olá,%20gostaria%20de%20mais%20informações%20a%20respeito%20da%20conversa%20inicial%20proposta%20pela%20Morobach."
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: 18, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 18, scale: 0.96 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
          className="fixed bottom-6 right-6 z-50 inline-flex items-center rounded-full border border-[#c8a96a]/40 bg-[#f7f2ea]/92 px-5 py-3 text-sm tracking-[0.08em] text-[#3e3128] shadow-[0_10px_30px_rgba(43,31,23,0.10)] backdrop-blur-md transition-all duration-300 hover:border-[#c8a96a]/70 hover:bg-[#efe4d3] hover:shadow-[0_14px_36px_rgba(43,31,23,0.14)]"
          aria-label="Agendar conversa inicial com a Morobach"
        >
          Agendar
        </motion.a>
      )}
    </AnimatePresence>
  );
};

export default FloatingCTA;
