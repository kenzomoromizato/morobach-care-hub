import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logoIcon from "@/assets/Logo_760x732.svg";

const navLinks = [
  { href: "#modelo", label: "Modelo de cuidado" },
  { href: "#medico", label: "Médico" },
  { href: "#sobre", label: "Sobre" },
  { href: "#faq", label: "FAQ" },
];

interface NavbarProps {
  topOffset?: number;
}

const Navbar = ({ topOffset = 0 }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkColor = scrolled
    ? "text-[#4b3c33] hover:text-[#8c6a3d]"
    : "text-theme-dominant hover:text-theme-dominant/80";

  const iconColor = scrolled ? "text-theme-accent" : "text-theme-dominant";
  const wordmarkColor = scrolled ? "text-[#4b3c33]" : "text-theme-dominant";

  const ctaColor = scrolled
    ? "border-[#c8a96a] text-[#3e3128]"
    : "border-theme-dominant text-theme-dominant";

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{ top: topOffset }}
      className={`fixed inset-x-0 z-50 border-b transition-all duration-500 ${
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
          <span
            aria-hidden="true"
            className={`block h-9 w-9 shrink-0 bg-current transition-colors duration-500 ${iconColor}`}
            style={{
              WebkitMaskImage: `url(${logoIcon})`,
              maskImage: `url(${logoIcon})`,
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskSize: "contain",
              maskSize: "contain",
              WebkitMaskPosition: "center",
              maskPosition: "center",
            }}
          />
          <span
            className={`font-serif text-[1.2rem] leading-none tracking-wide transition-colors duration-500 ${wordmarkColor}`}
          >
            Morobach
          </span>
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-[0.95rem] tracking-[0.1em] transition-colors duration-300 ${linkColor}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="https://wa.me/556135323082?text=Olá,%20gostaria%20de%20mais%20informações%20a%20respeito%20da%20conversa%20inicial%20proposta%20pela%20Morobach."
          className={`hidden rounded-full border px-5 py-2 text-sm tracking-[0.06em] transition-all duration-300 hover:border-theme-detail-heavy hover:bg-theme-detail-heavy hover:text-white md:inline-flex ${ctaColor}`}
        >
          Contato
        </a>

        <button
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={mobileOpen}
          className={`inline-flex items-center justify-center rounded-full p-2 transition-colors duration-300 md:hidden ${iconColor}`}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-[#c8a96a]/20 bg-[#f7f2ea] md:hidden"
          >
            <nav className="flex flex-col items-center gap-6 px-6 py-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-[0.95rem] tracking-[0.1em] text-[#4b3c33] transition-colors duration-300 hover:text-[#8c6a3d]"
                >
                  {link.label}
                </a>
              ))}

              <a
                href="https://wa.me/556135323082?text=Olá,%20gostaria%20de%20mais%20informações%20a%20respeito%20da%20conversa%20inicial%20proposta%20pela%20Morobach."
                onClick={() => setMobileOpen(false)}
                className="mt-2 w-full max-w-xs rounded-full border border-[#c8a96a] px-5 py-3 text-center text-sm tracking-[0.06em] text-[#3e3128] transition-all duration-300 hover:border-theme-detail-heavy hover:bg-theme-detail-heavy hover:text-white"
              >
                Contato
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
