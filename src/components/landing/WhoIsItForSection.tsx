const profiles = [
  {
    title: "Adultos que valorizam prevenção",
    description:
      "Adultos saudáveis que desejam acompanhar sua saúde de forma organizada, com orientação médica contínua e foco em prevenção ao longo da vida.",
  },
  {
    title: "Pessoas com condições crônicas",
    description:
      "Pessoas com condições como hipertensão, diabetes ou colesterol elevado que se beneficiam de acompanhamento médico próximo e contínuo.",
  },
  {
    title: "Famílias multigeracionais",
    description:
      "Famílias com diferentes gerações vivendo na mesma casa e que preferem um cuidado médico integrado para todos os membros.",
  },
];

export default function WhoIsItForSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-brown-900 mb-4">
            Para quem esse cuidado faz sentido
          </h2>

          <p className="text-lg text-brown-700 max-w-2xl mx-auto">
            A Morobach foi pensada para famílias que desejam um acompanhamento
            médico próximo, contínuo e orientado para prevenção.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">

          {profiles.map((profile, index) => (
            <div key={index} className="text-center">

              <h3 className="font-serif text-xl text-brown-900 mb-3">
                {profile.title}
              </h3>

              <p className="text-brown-700 leading-relaxed">
                {profile.description}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
