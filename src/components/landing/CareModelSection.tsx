import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    title: "Conversa inicial",
    description:
      "Antes da primeira visita, realizamos uma conversa por telemedicina para compreender a história de saúde da família e organizar o acompanhamento.",
  },
  {
    title: "Consulta domiciliar mensal",
    description:
      "Uma consulta médica mensal em sua casa, com tempo adequado para avaliação clínica completa, revisão de exames e planejamento de saúde.",
  },
  {
    title: "Acesso direto ao médico",
    description:
      "Entre as consultas, a família pode entrar em contato para esclarecer dúvidas e orientar decisões relacionadas à saúde.",
  },
  {
    title: "Coordenação do cuidado",
    description:
      "Auxílio na organização de exames, encaminhamentos e acompanhamento com especialistas quando necessário.",
  },
];

export default function CareModelSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-32 md:py-40 bg-background">
      <div ref={ref} className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-5">
            O modelo de cuidado Morobach
          </h2>
          <div className="gold-line mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Acompanhamento médico domiciliar contínuo para famílias, baseado nos
            princípios da medicina de família e da atenção primária à saúde.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 * index, ease: "easeOut" }}
              className="text-center"
            >
              <div className="text-primary/70 text-sm font-sans tracking-widest uppercase mb-4">
                {String(index + 1).padStart(2, "0")}
              </div>

              <h3 className="font-serif text-xl text-foreground mb-3">
                {step.title}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
