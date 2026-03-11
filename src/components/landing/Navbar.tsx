import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${
        scrolled
           ? "border-[#c8a96a]/20 bg-[#f7f2ea]/85 backdrop-blur-xl shadow-[0_8px_30px_rgba(43,31,23,0.06)]"
           : "border-transparent bg-transparent shadow-none"
      }`}
    >
      <div className="mx-auto flex h-[76px] w-full max-w-7xl items-center justify-between px-6 md:px-8 lg:px-12">
        <a
          href="#topo"
          className="flex items-center gap-3 transition-opacity hover:opacity-90"
          aria-label="Morobach"
        >
          <img
            src="/morobach-logo-horizontal.png"
            alt="Logo Morobach"
            className="h-10 w-auto object-contain"
          />
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          <a
            href="#modelo"
            className="text-[0.95rem] tracking-[0.1em] text-[#4b3c33] transition-colors duration-300 hover:text-[#8c6a3d]"
          >
            Modelo de cuidado
          </a>

          <a
            href="#medico"
            className="text-[0.95rem] tracking-[0.1em] text-[#4b3c33] transition-colors duration-300 hover:text-[#8c6a3d]"
          >
            Médico
          </a>

          <a
            href="#sobre"
            className="text-[0.95rem] tracking-[0.1em] text-[#4b3c33] transition-colors duration-300 hover:text-[#8c6a3d]"
          >
            Sobre
          </a>

          <a
            href="#faq"
            className="text-[0.95rem] tracking-[0.1em] text-[#4b3c33] transition-colors duration-300 hover:text-[#8c6a3d]"
          >
            FAQ
          </a>
        </nav>

        <a
          href="#contato"
          className="hidden rounded-full border border-[#c8a96a] px-5 py-2 text-sm tracking-[0.06em] text-[#3e3128] transition-all duration-300 hover:bg-[#c8a96a] hover:text-white md:inline-flex"
        >
          Agendar
        </a>
      </div>
    </motion.header>
  );
};

export default Navbar;
