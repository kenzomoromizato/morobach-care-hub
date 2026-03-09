import { motion } from "framer-motion";

const faqs = [
  {
  question: "O atendimento inclui toda a família?",
  answer:
    "Sim. O acompanhamento inclui todos os membros da família que residem na mesma casa, com um único pagamento mensal para o cuidado de toda a família.",
 },
  {
    question: "Quantas consultas estão incluídas no acompanhamento?",
    answer:
      "O acompanhamento inclui uma visita domiciliar por mês para a família. Caso seja necessário, é possível solicitar visitas adicionais.",
  },
  {
    question: "Posso entrar em contato com o médico entre as consultas?",
    answer:
      "Sim. Durante o período de acompanhamento a família tem acesso direto ao médico para dúvidas e orientações relacionadas à saúde.",
  },
  {
    question: "O serviço substitui outros médicos especialistas?",
    answer:
      "Não. O médico de família atua na coordenação do cuidado. Quando necessário, orienta e acompanha encaminhamentos para especialistas.",
  },
];

export default function FAQSection() {
  return (
    <section className="py-24 md:py-32 bg-warm-beige">
      <div className="container max-w-4xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-5">
            Perguntas frequentes
          </h2>

          <div className="gold-line mb-8" />
        </motion.div>

        <div className="space-y-8">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border-b border-border pb-6"
            >
              <h3 className="font-serif text-xl text-foreground mb-3">
                {faq.question}
              </h3>

              <p className="font-sans text-muted-foreground leading-relaxed">
                {faq.answer}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
