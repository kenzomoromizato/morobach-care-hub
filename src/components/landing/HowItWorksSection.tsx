import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, ClipboardList, Target, RefreshCw } from "lucide-react";

const steps = [
  {
    icon: Calendar,
    title: "Agendamento",
    number: "01",
    description:
      "Você escolhe o melhor dia e horário. Coletamos um breve contexto para tornar a primeira consulta realmente útil.",
  },
  {
    icon: ClipboardList,
    title: "Avaliação domiciliar completa",
    number: "02",
    description:
      "Consulta com foco em história clínica, exame físico, revisão de exames e medicamentos — com tempo e calma.",
  },
  {
    icon: Target,
    title: "Plano preventivo individualizado",
    number: "03",
    description:
      "Um plano claro, com prioridades e metas: o que fazer agora, o que acompanhar e o que evitar.",
  },
  {
    icon: RefreshCw,
    title: "Acompanhamento contínuo",
    number: "04",
    description:
      "Revisões periódicas e ajustes do plano ao longo do tempo. Saúde organizada dá previsibilidade e tranquilidade.",
  },
];

const HowItWorksSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="como-funciona" className="py-28 md:py-36 bg-background">
      <div ref={ref} className="container max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
            Como funciona na prática
          </h2>
          <div className="gold-line mb-10" />
          <p className="font-sans text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
            Um processo simples, mas estruturado — para transformar cuidado médico em
            rotina sustentável, sem improviso.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 18 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.15 + i * 0.1 }}
                className="group rounded-2xl border border-border bg-background/60 p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground">
                        Etapa {step.number}
                      </p>
                      <h3 className="font-serif text-xl md:text-2xl text-foreground mt-1">
                        {step.title}
                      </h3>
                    </div>
                  </div>

                  <div className="font-serif text-3xl text-foreground/10 select-none">
                    {step.number}
                  </div>
                </div>

                <p className="font-sans text-muted-foreground text-base md:text-lg leading-relaxed mt-6">
                  {step.description}
                </p>

                <div className="mt-8 h-px w-full bg-border/60" />
                <p className="mt-5 font-sans text-sm text-foreground/70">
                  <span className="text-primary">✦</span>{" "}
                  Resultado: mais clareza, menos ansiedade, decisões melhores.
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
