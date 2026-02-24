import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import experienceImage from "@/assets/experience-section.jpg";

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-28 md:py-36 bg-cream">
      <div className="gold-line-wide mb-28" />
      <div ref={ref} className="container max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-snug mb-2">
              Cuidar não é apenas tratar.
            </h2>
            <h2 className="font-serif text-3xl md:text-4xl text-primary leading-snug mb-8">
              É acompanhar.
            </h2>
            <div className="gold-line !mx-0 mb-8" />
            <p className="font-sans text-muted-foreground text-lg leading-relaxed">
              A Morobach foi criada para devolver à medicina aquilo que se perdeu: tempo, vínculo e responsabilidade compartilhada.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src={experienceImage}
              alt="Médico e paciente apertando as mãos"
              className="w-full h-[450px] object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
