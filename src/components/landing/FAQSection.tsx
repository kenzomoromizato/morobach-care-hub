import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Instagram, Mail, Phone } from "lucide-react";

const faqs = [
  {
    question: "A Morobach atende urgências ou funciona como pronto atendimento?",
    answer:
      "Não. A Morobach não é um serviço de urgência nem pronto atendimento. O acompanhamento é contínuo e planejado, com foco em prevenção, promoção de saúde, seguimento clínico e coordenação do cuidado da família ao longo do tempo.",
  },
  {
    question: "A Morobach é home care?",
    answer:
      "Não. A Morobach é um modelo de atenção primária domiciliar, baseado na medicina de família. O objetivo não é prestar assistência domiciliar de alta complexidade, internação em casa ou cuidados paliativos, mas oferecer acompanhamento médico longitudinal, mais próximo, organizado e centrado na saúde da família.",
  },
  {
    question: "Quem pode participar da assinatura?",
    answer:
      "A assinatura inclui os membros da família que vivem na mesma casa. A proposta é permitir um acompanhamento integrado, com mais contexto sobre a rotina, os antecedentes e as necessidades de saúde de cada pessoa do núcleo familiar.",
  },
  {
    question: "Como funciona o acompanhamento da Morobach?",
    answer:
      "O cuidado começa com uma conversa inicial, seguida pela organização do acompanhamento da família. A proposta inclui consulta domiciliar periódica, avaliação individualizada, acompanhamento ao longo do tempo e apoio na coordenação do cuidado sempre que necessário.",
  },
  {
    question: "Posso continuar com meus especialistas e meu plano de saúde?",
    answer:
      "Sim. A Morobach não substitui necessariamente outros profissionais que já acompanham você. O papel do médico de família também é integrar informações, ajudar na tomada de decisões e coordenar o cuidado de forma mais clara e contínua.",
  },
  {
    question: "É possível solicitar visitas adicionais?",
    answer:
      "Sim. Além da consulta domiciliar prevista no acompanhamento, podem ser organizadas visitas adicionais conforme a necessidade clínica e a disponibilidade do serviço.",
  },
  {
    question: "Como começar?",
    answer:
      "O primeiro passo é agendar uma conversa inicial. Nela, a Morobach compreende o perfil da família, esclarece dúvidas sobre o modelo de cuidado e orienta o início do acompanhamento.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative bg-[#F6F0E8] py-36 md:py-40">
      {/* Separação visual do bloco anterior */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D7C2A3]/70 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/55 to-transparent" />

      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-16 text-center md:mb-20">
          <h2 className="font-serif text-3xl text-brown-900 md:text-4xl">
            Um acompanhamento médico contínuo,
            <br />
            com clareza e proximidade
          </h2>

          {/* linha editorial */}
          <div className="mx-auto mt-6 h-[2px] w-16 bg-[#D7B273]/60"></div>

          <p className="mx-auto mt-8 max-w-2xl text-[1.05rem] leading-8 text-brown-600 md:text-[1.1rem]">
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
                      <p className="max-w-3xl pb-6 pr-10 text-[0.99rem] leading-7 text-brown-600 md:pb-7 md:text-[1rem]">
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
        <div className="mt-14 text-center md:mt-16">
          <a
            href="https://wa.me/5561996703427?text=Olá,%20gostaria%20de%20mais%20informações%20a%20respeito%20da%20conversa%20inicial%20proposta%20pela%20Morobach."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-none border border-[#D7B273] bg-[#D7B273] px-10 py-4 text-sm font-medium uppercase tracking-[0.2em] text-brown-950 transition-all duration-300 ease-out hover:-translate-y-[1px] hover:bg-[#e0bf8c]"
          >
            Agendar conversa inicial
          </a>
        </div>

        {/* Contato e copyright */}
        <div className="mt-20 border-t border-[#DDCFBD] pt-10 text-center">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-brown-700">
            <a
              href="https://instagram.com/morobach"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm transition-all duration-300 hover:-translate-y-[1px] hover:opacity-75"
            >
              <Instagram size={18} />
              <span>Instagram</span>
            </a>

            <a
              href="https://wa.me/5561986218705"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm transition-all duration-300 hover:-translate-y-[1px] hover:opacity-75"
            >
              <Phone size={18} />
              <span>WhatsApp</span>
            </a>

            <a
              href="mailto:contato@morobach.com.br"
              className="inline-flex items-center gap-2 text-sm transition-all duration-300 hover:-translate-y-[1px] hover:opacity-75"
            >
              <Mail size={18} />
              <span>Email</span>
            </a>
          </div>

          <p className="mt-6 text-xs tracking-[0.08em] text-brown-500">
            © {new Date().getFullYear()} Morobach. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </section>
  );
}
