import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import emotionalImage from "@/assets/emotional-section.jpg";

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-32 md:py-40 bg-background">
      <div ref={ref} className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full"
        >
          <img
            src={emotionalImage}
            alt="Médico conversando com paciente em ambiente domiciliar"
            className="rounded-sm shadow-lg w-full object-cover aspect-[4/5]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-10 leading-snug">
            Cuidar também é acompanhar a vida
          </h2>

          <div className="space-y-7 text-lg text-muted-foreground leading-relaxed">
            <p>
              Em saúde, confiança não se constrói apenas nos momentos de doença.
              Ela nasce com o tempo, na continuidade do cuidado e na relação
              entre médico e paciente.
            </p>

            <p>
              A Morobach parte da convicção de que a medicina pode ser mais
              próxima, mais atenta e mais humana. Um cuidado que conhece a
              história de cada família, acompanha suas mudanças e ajuda a tomar
              decisões com tranquilidade ao longo da vida.
            </p>

            <p>
              Acreditamos que cuidar não significa apenas tratar problemas
              quando eles surgem, mas também estar presente para prevenir,
              orientar e preservar a saúde com constância e responsabilidade.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
