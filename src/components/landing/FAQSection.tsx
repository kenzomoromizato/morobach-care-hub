import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "A Morobach atende urgências?",
    answer:
      "Não. A Morobach oferece acompanhamento médico domiciliar contínuo, com foco em prevenção, cuidado longitudinal e coordenação da saúde da família.",
  },
  {
    question: "Quem pode participar da assinatura?",
    answer:
      "A assinatura inclui os membros da família que vivem na mesma casa, permitindo um acompanhamento integrado e organizado para todos.",
  },
  {
    question: "Como começar?",
    answer:
      "O primeiro passo é uma conversa inicial para compreender o perfil da família, esclarecer dúvidas e organizar o início do acompanhamento.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#3A2316] py-36 text-white">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-6 font-serif text-3xl md:text-4xl">
            Um acompanhamento médico contínuo,
            <br />
            com clareza e proximidade
          </h2>

          <p className="mx-auto max-w-2xl text-[1.05rem] leading-8 text-white/80">
            Se você busca um cuidado mais próximo, organizado e orientado para
            prevenção, a Morobach pode ser o início de uma nova forma de
            acompanhar a saúde da sua família.
          </p>
        </div>

        <div className="space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="border-b border-white/20 pb-5"
              >
                <button
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between text-left"
                >
                  <span className="font-serif text-lg">
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`h-5 w-5 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35 }}
                    className="mt-4 max-w-2xl text-[0.98rem] leading-7 text-white/80"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://wa.me/5561986218705"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-none border border-[#D7B273] bg-[#D7B273] px-10 py-4 text-sm font-medium uppercase tracking-[0.2em] text-brown-950 transition-all duration-300 hover:-translate-y-[1px] hover:bg-[#e0bf8c]"
          >
            Agendar conversa inicial
          </a>
        </div>
      </div>
    </section>
  );
}
