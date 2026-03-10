import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const faqs = [
  {
    question: "A Morobach atende urgências?",
    answer:
      "Não. A Morobach oferece acompanhamento médico domiciliar contínuo, com foco em prevenção, cuidado longitudinal e coordenação da saúde da família.",
  },
  {
    question: "Quem pode participar da assinatura?",
    answer:
      "A assinatura inclui os membros da família que vivem na mesma casa, com acompanhamento organizado dentro da proposta do serviço.",
  },
  {
    question: "Como começar?",
    answer:
      "O primeiro passo é uma conversa inicial para entender o perfil da família, esclarecer dúvidas e organizar a primeira etapa do acompanhamento.",
  },
];

export default function FAQSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-32 md:py-40 bg-foreground">
      <div ref={ref} className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-primary-foreground mb-6 leading-snug">
            Um acompanhamento médico contínuo, com clareza e proximidade
          </h2>
          <div className="h-px w-24 mx-auto mb-8" style={{ background: "linear-gradient(90deg, transparent, hsl(var(--soft-gold) / 0.5), transparent)" }} />
          <p className="text-lg text-primary-foreground/65 leading-relaxed">
            Se você busca um cuidado mais próximo, organizado e orientado para
            prevenção, a Morobach pode ser o início de uma nova forma de
            acompanhar a saúde da sua família.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {faqs.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 * index, ease: "easeOut" }}
              className="border border-primary-foreground/10 rounded-sm p-8 bg-primary-foreground/[0.03]"
            >
              <h3 className="font-serif text-xl text-primary-foreground mb-4">
                {item.question}
              </h3>
              <p className="text-primary-foreground/60 leading-relaxed">
                {item.answer}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          className="text-center"
        >
          <a
            href="https://wa.me/SEUNUMEROAQUI"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-primary text-primary-foreground px-10 py-4 text-sm tracking-[0.15em] uppercase font-sans hover:bg-soft-gold/90 transition-all duration-300"
          >
            Agendar conversa inicial
          </a>
        </motion.div>
      </div>
    </section>
  );
}
