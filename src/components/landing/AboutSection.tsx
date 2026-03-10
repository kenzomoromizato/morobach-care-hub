export default function AboutSection() {
  return (
    <section className="py-24 bg-beige-50">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* Imagem */}
        <div className="w-full">
          <img
            src="/emotional-section-_F0CClGw.jpg"
            alt="Médico conversando com paciente em ambiente domiciliar"
            className="rounded-xl shadow-md w-full object-cover"
          />
        </div>

        {/* Texto */}
        <div>

          <h2 className="text-3xl md:text-4xl font-serif text-brown-900 mb-8">
            Cuidar também é acompanhar a vida
          </h2>

          <div className="space-y-6 text-lg text-brown-700 leading-relaxed">

            <p>
              Em saúde, confiança não se constrói apenas nos momentos de doença.
              Ela nasce com o tempo, na continuidade do cuidado e na relação
              entre médico e paciente.
            </p>

            <p>
              A Morobach parte da convicção de que a medicina pode ser mais
              próxima, mais atenta e mais humana. Um cuidado que conhece a
              história de cada família, acompanha suas mudanças e ajuda a tomar
              decisões com tranquilidade ao longo da vida.
            </p>

            <p>
              Acreditamos que cuidar não significa apenas tratar problemas
              quando eles surgem, mas também estar presente para prevenir,
              orientar e preservar a saúde com constância e responsabilidade.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}
