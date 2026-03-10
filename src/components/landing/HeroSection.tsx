import { motion } from "framer-motion";
import heroImage from "@/assets/hero-morobach.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      <div className="absolute inset-0 bg-foreground/55" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto py-32">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-primary-foreground/70 font-sans text-xs tracking-[0.35em] uppercase mb-10"
        >
          Morobach
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="font-serif text-5xl md:text-7xl text-primary-foreground font-medium leading-tight mb-10"
        >
          Um médico de família para cuidar da saúde da sua casa.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-primary-foreground/75 font-sans text-lg md:text-xl font-light max-w-2xl mx-auto mb-14 leading-relaxed"
        >
          A Morobach oferece acompanhamento médico domiciliar contínuo para toda a família, com prevenção, promoção de saúde e coordenação do cuidado ao longo do tempo — no conforto da sua casa.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-5 justify-center"
        >
          <a
            href="#contato"
            className="inline-block bg-primary text-primary-foreground px-10 py-4 text-sm tracking-[0.15em] uppercase font-sans hover:bg-soft-gold/90 transition-all duration-300"
          >
            Agendar Avaliação Inicial
          </a>
          <a
            href="#modelo"
            className="inline-block border border-primary-foreground/30 text-primary-foreground px-10 py-4 text-sm tracking-[0.15em] uppercase font-sans hover:bg-primary-foreground/10 transition-all duration-300"
          >
            Conheça o Modelo Morobach
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
