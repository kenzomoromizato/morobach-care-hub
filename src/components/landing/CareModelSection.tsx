import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ClipboardCheck, ListChecks, Users, ShieldCheck } from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    title: "Avaliação médica domiciliar completa",
    description:
      "História clínica detalhada, revisão de exames, medicamentos e análise individual de riscos.",
  },
  {
    icon: ListChecks,
    title: "Plano estruturado de cuidado",
    description: "Definição clara de prioridades:",
    items: [
      "O que fazer agora",
      "O que pode aguardar",
      "O que não é necessário",
    ],
  },
  {
    icon: Users,
    title: "Coordenação do cuidado",
    description:
      "Integração com especialistas, organização de exames e acompanhamento contínuo.",
  },
  {
    icon: ShieldCheck,
    title: "Foco em prevenção baseada em evidências",
    items: [
      "Rastreamentos indicados para cada faixa etária",
      "Redução de riscos cardiovasculares",
      "Vacinação adequada",
      "Planejamento do envelhecimento saudável",
    ],
  },
];

const CareModelSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="modelo" className="py-28 md:py-36 bg-background">
      <div ref={ref} className="container max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
            Como funciona
          </h2>
          <div className="gold-line" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-14">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.15 }}
              className="flex gap-5"
            >
              <step.icon
                className="w-7 h-7 text-primary mt-1 shrink-0"
                strokeWidth={1.2}
              />
              <div>
                <h3 className="font-serif text-xl text-foreground mb-3">
                  {step.title}
                </h3>
                {step.description && (
                  <p className="font-sans text-muted-foreground text-base leading-relaxed mb-3">
                    {step.description}
                  </p>
                )}
                {step.items && (
                  <ul className="space-y-2">
                    {step.items.map((item) => (
                      <li
                        key={item}
                        className="font-sans text-foreground/80 text-sm leading-relaxed pl-4 border-l border-primary/30"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center font-sans text-foreground text-lg mt-20 font-light italic"
        >
          Sem excessos.<br />
          Sem negligência.
        </motion.p>
      </div>
    </section>
  );
};

export default CareModelSection;
