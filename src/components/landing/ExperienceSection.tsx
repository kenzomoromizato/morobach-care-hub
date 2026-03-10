import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import experienceImage from "@/assets/experience-institutional.jpg";

const differentials = [
  {
    title: "Continuidade",
    description:
      "O cuidado não se limita a consultas isoladas. Acompanhamos a saúde da família ao longo do tempo, com conhecimento progressivo da sua história, contexto e necessidades.",
  },
  {
    title: "Prevenção com profundidade",
    description:
      "Mais do que responder a sintomas imediatos, buscamos identificar riscos, orientar hábitos, revisar exames e apoiar decisões que ajudam a preservar a saúde no longo prazo.",
  },
  {
    title: "Coordenação com critério",
    description:
      "Quando necessário, auxiliamos na organização do cuidado, na interpretação de exames e no acompanhamento com especialistas, evitando decisões fragmentadas.",
  },
];

export default function ExperienceSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-32 md:py-40 bg-card">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-5">
            Um cuidado diferente do atendimento episódico
          </h2>
          <div className="gold-line mb-8" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A Morobach foi construída para oferecer um acompanhamento mais
            profundo, contínuo e criterioso, centrado na saúde da família ao
            longo do tempo.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          >
            <img
              src={experienceImage}
              alt="Médico em atendimento domiciliar em ambiente sofisticado"
              className="rounded-sm shadow-lg w-full object-cover aspect-[3/4]"
            />
          </motion.div>

          {/* Cards */}
          <div className="flex flex-col gap-6">
            {differentials.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.15 + 0.1 * index, ease: "easeOut" }}
                className="border border-border/60 rounded-sm p-7 bg-background shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="font-serif text-xl text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-[15px]">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
