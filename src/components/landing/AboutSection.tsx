import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import emotionalImage from "@/assets/emotional-section.jpg";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-28 md:py-36 bg-background">
      <div ref={ref} className="container max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6 leading-snug">
            Cuidar é também preservar histórias.
          </h2>
          <div className="gold-line mb-10" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-sm overflow-hidden shadow-[0_20px_60px_-15px_hsl(var(--deep-brown)/0.15)]"
          >
            <img
              src={emotionalImage}
              alt="Filha segurando as mãos da mãe em momento de cuidado"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-sans text-foreground/80 text-lg leading-relaxed space-y-6"
          >
            <p>
              Existe um momento da vida em que começamos a olhar para os nossos pais com outros olhos.
            </p>

            <div className="space-y-1 pl-5 border-l-2 border-primary/30">
              <p>Pequenos esquecimentos.</p>
              <p>Exames acumulados.</p>
              <p>Consultas desencontradas.</p>
            </div>

            <p className="font-serif text-foreground italic text-xl">
              Estamos organizando a saúde da forma certa?
            </p>

            <p>
              Para quem tem mais de 40 anos, a sensação é semelhante.
            </p>

            <div className="space-y-1 pl-5 border-l-2 border-primary/30">
              <p>A vida está estável.</p>
              <p>Mas a saúde começa a exigir planejamento.</p>
            </div>

            <div className="space-y-1">
              <p>Cuidar não é apenas tratar doenças.</p>
              <p>É proteger autonomia.</p>
              <p>É manter independência.</p>
              <p>É evitar decisões apressadas.</p>
            </div>
          </motion.div>
        </div>

        {/* Closing phrase */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-20"
        >
          <p className="font-serif text-xl md:text-2xl text-foreground italic">
            Prevenção é responsabilidade com o futuro.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
