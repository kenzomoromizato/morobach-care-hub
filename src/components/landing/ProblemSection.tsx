import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import problemImage from "@/assets/problem-section.jpg";

const ProblemSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-28 md:py-36 bg-background">
      <div ref={ref} className="container max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8 leading-snug">
              A saúde se tornou fragmentada.
            </h2>
            <div className="gold-line !mx-0 mb-8" />
            <p className="font-sans text-muted-foreground text-lg leading-relaxed mb-6">
              Hoje, consultas rápidas, excesso de exames e múltiplos especialistas geram insegurança, medicalização desnecessária e falta de coordenação.
            </p>
            <p className="font-sans text-foreground text-lg leading-relaxed font-light italic">
              A maioria das pessoas não precisa de mais exames.
              <br />
              Precisa de direção, organização e prevenção baseada em evidência.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <img
              src={problemImage}
              alt="Papéis médicos e prescrições espalhadas sobre uma mesa"
              className="w-full h-[400px] object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
