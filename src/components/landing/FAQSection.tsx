import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

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
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl border border-border bg-background/80 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(i)}
                  className="w-full flex items-center justify-between gap-4 text-left px-6 py-5"
                >
                  <h3 className="font-serif text-lg md:text-xl text-foreground">
                    {faq.question}
                  </h3>

                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6">
                    <p className="font-sans text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
