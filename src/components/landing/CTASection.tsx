import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const CTASection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contato" className="py-28 md:py-36 bg-foreground">
      <div ref={ref} className="container max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-3xl md:text-5xl text-primary-foreground mb-10 leading-snug">
            Sua saúde merece direção.
          </h2>

          <a
            href="#contato"
            className="inline-block bg-primary text-primary-foreground px-12 py-4 text-sm tracking-[0.15em] uppercase font-sans hover:bg-soft-gold/90 transition-colors duration-300 mb-6"
          >
            Agendar avaliação inicial
          </a>

          <p className="text-primary-foreground/50 font-sans text-sm tracking-wide">
            Atendimento domiciliar sob agendamento.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
