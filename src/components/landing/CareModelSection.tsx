import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Activity, Shield } from "lucide-react";

const pillars = [
  {
    icon: Heart,
    title: "Avaliação Preventiva Baseada em Evidência",
    items: [
      "Avaliação de risco cardiovascular absoluto",
      "Revisão de medicações",
      "Avaliação funcional",
      "Plano preventivo personalizado",
    ],
  },
  {
    icon: Activity,
    title: "Acompanhamento Longitudinal",
    items: [
      "Consulta domiciliar programada",
      "Telemonitoramento",
      "Revisão periódica de metas",
      "Coordenação com especialistas",
    ],
  },
  {
    icon: Shield,
    title: "Prevenção de Internações",
    items: [
      "Controle de doenças crônicas",
      "Redução de polifarmácia",
      "Estratégias práticas para manter autonomia",
    ],
  },
];

const CareModelSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-28 md:py-36 bg-background">
      <div ref={ref} className="container max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
            Nosso Modelo de Cuidado
          </h2>
          <div className="gold-line" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.15 }}
              className="text-center"
            >
              <pillar.icon className="w-8 h-8 text-primary mx-auto mb-6" strokeWidth={1} />
              <h3 className="font-serif text-xl text-foreground mb-6">{pillar.title}</h3>
              <ul className="space-y-3">
                {pillar.items.map((item) => (
                  <li key={item} className="font-sans text-muted-foreground text-sm leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareModelSection;
