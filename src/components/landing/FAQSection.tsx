import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Instagram, Mail, Phone } from "lucide-react";

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
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative bg-[#F6F0E8] py-32 md:py-36">
      {/* Separação visual do bloco anterior */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D7C2A3]/70 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/55 to-transparent" />

      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-16 md:mb-20 text-center">
          <h2 className="mb-6 font-serif text-3xl text-brown-900 md:text-4xl">
            Um acompanhamento médico contínuo,
            <br />
            com clareza e proximidade
          </h2>

          <div className="mx-auto mt-6 h-[2px] w-16 bg-[#D7B273]/60"></div>

          <p className="mx-auto max-w-2xl text-[1.02rem] leading-8 text-brown-600 md:text-[1.08rem]">
            Se você busca um cuidado mais próximo, organizado e orientado para
            prevenção, a Morobach pode ser o início de uma nova forma de
            acompanhar a saúde da sua família.
          </p>
        </div>

        {/* FAQ */}
        <div className="border-t border-[#DDCFBD]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={faq.question} className="border-b border-[#DDCFBD]">
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left md:py-7"
                >
                  <span className="font-serif text-[1.18rem] leading-snug text-brown-900 md:text-[1.28rem]">
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-[#B08A4E] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-3xl pb-6 pr-10 text-[0.98rem] leading-7 text-brown-600 md:pb-7 md:text-[1rem]">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-14 md:mt-16 text-center">
          <a
            href="https://wa.me/5561986218705"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-none border border-[#D7B273] bg-[#D7B273] px-10 py-4 text-sm font-medium uppercase tracking-[0.2em] text-brown-950 transition-all duration-300 hover:-translate-y-[1px] hover:bg-[#e0bf8c]"
          >
            Agendar conversa inicial
          </a>
        </div>

        {/* Contato e redes sociais */}
        <div className="mt-20 border-t border-[#DDCFBD] pt-10 text-center">
          <div className="flex justify-center gap-8 text-brown-700">
            <a
              href="https://instagram.com/morobach"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-opacity hover:opacity-70"
            >
              <Instagram size={18} />
              <span className="text-sm">Instagram</span>
            </a>

            <a
              href="https://wa.me/5561986218705"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-opacity hover:opacity-70"
            >
              <Phone size={18} />
              <span className="text-sm">WhatsApp</span>
            </a>

            <a
              href="mailto:contato@morobach.com.br"
              className="flex items-center gap-2 transition-opacity hover:opacity-70"
            >
              <Mail size={18} />
              <span className="text-sm">Email</span>
            </a>
          </div>

          <p className="mt-6 text-xs text-brown-500">
            © {new Date().getFullYear()} Morobach. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </section>
  );
}
