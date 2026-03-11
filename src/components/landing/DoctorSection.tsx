import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import doctorImage from "@/assets/doctor-section.png";
import andreImage from "@/assets/andre-section.png";

const DoctorSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section
      id="medico"
      ref={ref}
      className="relative overflow-hidden bg-[#f7f2ea] py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.22em] text-[#8c6a3d]">
            Responsabilidade clínica
          </p>

          <h2 className="font-serif text-3xl leading-tight text-[#2f241f] md:text-5xl">
            Os médicos por trás da Morobach
          </h2>

          <div className="mx-auto mt-6 h-px w-20 bg-[#c8a96a]/60" />
        </motion.div>

        <div className="space-y-20 md:space-y-24">
          {/* Kenzo */}
          <motion.article
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16"
          >
            <div className="relative overflow-hidden rounded-[28px] bg-[#efe7db] shadow-[0_20px_60px_rgba(60,40,20,0.08)]">
              <div className="aspect-[4/5] w-full">
                <img
                  src={doctorImage}
                  alt="Kenzo Moromizato"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="max-w-2xl">
              <h3 className="font-serif text-3xl leading-tight text-[#2f241f] md:text-4xl">
                Kenzo Moromizato
              </h3>

              <div className="mt-4 h-px w-16 bg-[#c8a96a]/70" />

              <p className="mt-5 text-sm uppercase tracking-[0.18em] text-[#6f5a4b]">
                Médico
              </p>

              <p className="mt-2 text-sm text-[#6a5648]">CRM-DF 35581</p>

              <p className="mt-2 text-sm text-[#6a5648]">
                Formado pela Escola Superior de Ciências da Saúde (ESCS)
              </p>

              <div className="mt-8 space-y-5 text-[1.02rem] leading-8 text-[#4d3f36]">
                <p>
                  A ideia da Morobach surgiu de algo que a prática médica mostra
                  com frequência: muitas decisões em saúde ficam mais difíceis
                  quando o cuidado acontece de forma fragmentada.
                </p>

                <p>
                  Quando o médico acompanha as pessoas ao longo do tempo, ele
                  entende melhor o contexto em que cada problema aparece — a
                  rotina da família, os fatores de risco, as preocupações e as
                  prioridades de cada momento da vida.
                </p>

                <p>
                  O acompanhamento domiciliar proposto pela Morobach parte dessa
                  lógica. Estar mais próximo permite observar com mais atenção,
                  orientar com mais clareza e organizar o cuidado de forma mais
                  responsável ao longo do tempo.
                </p>
              </div>
            </div>
          </motion.article>

          {/* André - espelhado */}
          <motion.article
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.08, ease: "easeOut" }}
            className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16"
          >
            <div className="order-2 max-w-2xl lg:order-1 lg:justify-self-start">
              <h3 className="font-serif text-3xl leading-tight text-[#2f241f] md:text-4xl">
                André Breitenbach
              </h3>

              <div className="mt-4 h-px w-16 bg-[#c8a96a]/70" />

              <p className="mt-5 text-sm uppercase tracking-[0.18em] text-[#6f5a4b]">
                Médico
              </p>

              <p className="mt-2 text-sm text-[#6a5648]">CRM-DF [preencher]</p>

              <p className="mt-2 text-sm text-[#6a5648]">
                [formação / residência / credencial principal]
              </p>

              <div className="mt-8 space-y-5 text-[1.02rem] leading-8 text-[#4d3f36]">
                <p>
                  Escreva aqui o texto institucional do André, mantendo o mesmo
                  tom da seção: humano, clínico, maduro e sem linguagem de
                  marketing.
                </p>

                <p>
                  O ideal é mostrar como ele enxerga o cuidado longitudinal, a
                  importância de compreender o contexto familiar e a forma como
                  sua atuação complementa a proposta assistencial da Morobach.
                </p>

                <p>
                  Esse bloco deve reforçar autoridade, proximidade e coerência
                  institucional, para que o André apareça como parte real da
                  construção clínica da marca — e não apenas como um nome
                  adicionado à seção.
                </p>
              </div>
            </div>

            <div className="order-1 relative overflow-hidden rounded-[28px] bg-[#efe7db] shadow-[0_20px_60px_rgba(60,40,20,0.08)] lg:order-2">
              <div className="aspect-[4/5] w-full">
                <img
                  src={andreImage}
                  alt="André Breitenbach"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </motion.article>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="mx-auto mt-20 max-w-3xl text-center font-serif text-2xl leading-relaxed text-[#3a2d26] md:text-3xl"
        >
          Boa medicina depende de conhecer as pessoas ao longo do tempo.
        </motion.p>
      </div>
    </section>
  );
};

export default DoctorSection;
