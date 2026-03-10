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
  return (
    <section className="py-24 bg-brown-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">
            Um acompanhamento médico contínuo, com clareza e proximidade
          </h2>

          <p className="text-lg text-white/80 leading-relaxed">
            Se você busca um cuidado mais próximo, organizado e orientado para
            prevenção, a Morobach pode ser o início de uma nova forma de
            acompanhar a saúde da sua família.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-14">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="border border-white/15 rounded-2xl p-6 bg-white/5"
            >
              <h3 className="font-serif text-xl mb-3">{item.question}</h3>
              <p className="text-white/80 leading-relaxed">{item.answer}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://wa.me/SEUNUMEROAQUI"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-white text-brown-900 px-8 py-4 text-sm font-medium transition hover:opacity-90"
          >
            Agendar conversa inicial
          </a>
        </div>
      </div>
    </section>
  );
}
