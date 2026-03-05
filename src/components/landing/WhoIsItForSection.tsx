import { motion } from "framer-motion";

const items = [
  {
    title: "Pessoas saudáveis que querem prevenir doença cardiovascular",
    desc: "Avaliação de risco cardiovascular, organização de exames e estratégias baseadas em evidência para reduzir risco ao longo do tempo.",
  },
  {
    title: "Pessoas com histórico familiar de doença cardíaca",
    desc: "Planejamento preventivo mais cuidadoso para quem tem maior predisposição genética.",
  },
  {
    title: "Pacientes com múltiplos exames e orientações desencontradas",
    desc: "Organização das informações médicas em um plano claro e coerente.",
  },
  {
    title: "Quem valoriza tempo e profundidade na consulta médica",
    desc: "Consulta domiciliar com atenção, sem pressa e focada em prevenção de longo prazo.",
  },
];

export default function WhoIsItForSection() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-5">
            Para quem é o cuidado Morobach
          </h2>

          <div className="gold-line mb-8" />

          <p className="font-sans text-muted-foreground text-lg max-w-2xl mx-auto">
            Um modelo de cuidado pensado para prevenção real e acompanhamento contínuo.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl border border-border bg-background shadow-sm"
            >
              <h3 className="font-serif text-xl text-foreground mb-3">
                {item.title}
              </h3>

              <p className="font-sans text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
