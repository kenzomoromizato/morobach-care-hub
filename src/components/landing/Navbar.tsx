import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container max-w-6xl mx-auto px-6 flex items-center justify-between">
      <a href="#" className="flex items-center">
  <img
    src="/morobach-logo-horizontal.png"
    alt="Morobach"
    className="h-24 md:h-28 w-auto object-contain"
  />
</a>

        <a
          href="#contato"
          className={`font-sans text-xs tracking-[0.15em] uppercase px-6 py-2.5 border transition-all duration-300 ${
            scrolled
              ? "border-primary text-foreground hover:bg-primary hover:text-primary-foreground"
              : "border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10"
          }`}
        >
          Agendar
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
