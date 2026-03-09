import { motion } from "framer-motion";

const items = [
  {
    title: "Pré-consulta por telemedicina",
    desc: "Antes da primeira visita domiciliar, é realizada uma conversa por vídeo para compreender melhor a família, identificar demandas específicas e orientar eventuais exames prévios.",
  },
  {
    title: "Acompanhamento médico familiar",
    desc: "A Morobach oferece acompanhamento médico contínuo para todos os membros da família que residem na mesma casa.",
  },
  {
    title: "Uma consulta domiciliar por mês",
    desc: "A cada ciclo mensal é realizada uma visita domiciliar para avaliação clínica, acompanhamento e planejamento de saúde.",
  },
  {
    title: "Acesso direto ao médico",
    desc: "Durante o período de acompanhamento, a família pode entrar em contato diretamente com o médico para dúvidas, orientações e apoio em decisões de saúde.",
  },
  {
    title: "Visitas adicionais quando necessário",
    desc: "Caso a família precise de uma nova avaliação presencial, é possível solicitar visitas adicionais.",
  },
];

export default function HowMembershipWorksSection() {
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
            Como funciona o acompanhamento
          </h2>

          <div className="gold-line mb-8" />

          <p className="font-sans text-muted-foreground text-lg max-w-2xl mx-auto">
            Um modelo simples de acompanhamento médico contínuo para toda a família.
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
