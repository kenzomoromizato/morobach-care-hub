import { motion } from "framer-motion";
import heroImage from "@/assets/hero-morobach.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-foreground/50" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-primary-foreground/80 font-sans text-sm tracking-[0.3em] uppercase mb-8"
        >
          Morobach
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-5xl md:text-7xl text-primary-foreground font-medium leading-tight mb-8"
        >
          Medicina onde a vida acontece.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-primary-foreground/80 font-sans text-lg md:text-xl font-light max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Cuidado médico domiciliar focado em prevenção, segurança e longevidade com base científica.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contato"
            className="inline-block bg-primary text-primary-foreground px-10 py-4 text-sm tracking-[0.15em] uppercase font-sans hover:bg-soft-gold/90 transition-colors duration-300"
          >
            Agendar Avaliação Inicial
          </a>
          <a
            href="#modelo"
            className="inline-block border border-primary-foreground/40 text-primary-foreground px-10 py-4 text-sm tracking-[0.15em] uppercase font-sans hover:bg-primary-foreground/10 transition-colors duration-300"
          >
            Conheça o Modelo Morobach
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
