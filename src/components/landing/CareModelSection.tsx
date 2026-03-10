const steps = [
  {
    title: "Conversa inicial",
    description:
      "Antes da primeira visita, realizamos uma conversa por telemedicina para compreender a história de saúde da família e organizar o acompanhamento.",
  },
  {
    title: "Consulta domiciliar mensal",
    description:
      "Uma consulta médica mensal em sua casa, com tempo adequado para avaliação clínica completa, revisão de exames e planejamento de saúde.",
  },
  {
    title: "Acesso direto ao médico",
    description:
      "Entre as consultas, a família pode entrar em contato para esclarecer dúvidas e orientar decisões relacionadas à saúde.",
  },
  {
    title: "Coordenação do cuidado",
    description:
      "Auxílio na organização de exames, encaminhamentos e acompanhamento com especialistas quando necessário.",
  },
];

export default function CareModelSection() {
  return (
    <section className="py-24 bg-beige-50">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-brown-900 mb-4">
            O modelo de cuidado Morobach
          </h2>

          <p className="text-lg text-brown-700 max-w-2xl mx-auto">
            Acompanhamento médico domiciliar contínuo para famílias, baseado nos
            princípios da medicina de família e da atenção primária à saúde.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-10">

          {steps.map((step, index) => (
            <div key={index} className="text-center">

              <div className="text-gold-600 text-xl font-semibold mb-3">
                {index + 1}
              </div>

              <h3 className="font-serif text-xl text-brown-900 mb-2">
                {step.title}
              </h3>

              <p className="text-brown-700 text-sm leading-relaxed">
                {step.description}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
