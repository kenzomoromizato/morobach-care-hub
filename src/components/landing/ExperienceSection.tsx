const differentials = [
  {
    title: "Continuidade",
    description:
      "O cuidado não se limita a consultas isoladas. Acompanhamos a saúde da família ao longo do tempo, com conhecimento progressivo da sua história, contexto e necessidades.",
  },
  {
    title: "Prevenção com profundidade",
    description:
      "Mais do que responder a sintomas imediatos, buscamos identificar riscos, orientar hábitos, revisar exames e apoiar decisões que ajudam a preservar a saúde no longo prazo.",
  },
  {
    title: "Coordenação com critério",
    description:
      "Quando necessário, auxiliamos na organização do cuidado, na interpretação de exames e no acompanhamento com especialistas, evitando decisões fragmentadas.",
  },
];

export default function ExperienceSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-brown-900 mb-4">
            Um cuidado diferente do atendimento episódico
          </h2>

          <p className="text-lg text-brown-700 max-w-3xl mx-auto">
            A Morobach foi construída para oferecer um acompanhamento mais
            profundo, contínuo e criterioso, centrado na saúde da família ao
            longo do tempo.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {differentials.map((item, index) => (
            <div key={index} className="text-center">
              <h3 className="font-serif text-xl text-brown-900 mb-3">
                {item.title}
              </h3>

              <p className="text-brown-700 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
