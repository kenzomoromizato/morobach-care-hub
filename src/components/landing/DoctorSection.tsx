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

        <div className="space-y-24 md:space-y-28">
          {/* Kenzo */}
          <motion.article
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16"
          >
            <div className="relative overflow-hidden rounded-[30px] bg-[#efe7db] shadow-[0_24px_70px_rgba(60,40,20,0.08)]">
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
                   A ideia da Morobach começou a se formar ainda durante a graduação em medicina. Ao longo da formação clínica, ficou cada vez mais evidente como a medicina caminhava em direção a uma especialização crescente, com muitos profissionais extremamente preparados em áreas específicas, mas com menos espaço para o acompanhamento contínuo das pessoas ao longo do tempo.
                </p>

                <p>
                   Nesse contexto, o cuidado mais próximo — aquele que acompanha a rotina, o contexto familiar e a evolução da saúde de cada paciente — muitas vezes acaba ficando em segundo plano. Ainda assim, é justamente esse acompanhamento longitudinal que frequentemente permite compreender melhor os problemas e organizar o cuidado de forma mais clara e responsável.
                </p>

                <p>
                   A Morobach nasce desse olhar. A proposta é resgatar um modelo de cuidado mais próximo, estruturado e atento, no qual o médico acompanha a família ao longo do tempo, entende seu contexto e ajuda a organizar decisões em saúde com mais serenidade e continuidade.
                </p>
              </div>
            </div>
          </motion.article>

          <div className="mx-auto h-px w-full max-w-5xl bg-gradient-to-r from-transparent via-[#c8a96a]/40 to-transparent" />

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

              <p className="mt-2 text-sm text-[#6a5648]">CRM-DF 33665</p>

              <p className="mt-2 text-sm text-[#6a5648]">
                Formado pela Escola Superior de Ciências da Saúde (ESCS)
              </p>

              <div className="mt-8 space-y-5 text-[1.02rem] leading-8 text-[#4d3f36]">
                <p>
                  André Breitenbach compartilha da mesma convicção que deu origem à Morobach: a de que um bom cuidado médico começa pela compreensão real da pessoa, e não apenas pela condução pontual de um problema de saúde. A medicina ganha mais sentido quando existe continuidade, quando o médico acompanha a trajetória do paciente e consegue enxergar sua saúde dentro de um contexto mais amplo.
                </p>

                <p>
                  Em sua prática clínica, André valoriza consultas cuidadosas, escuta atenta e orientações claras. Para ele, atender bem significa dedicar tempo para compreender cada situação com profundidade e oferecer ao paciente segurança nas decisões relacionadas à sua saúde.
                </p>

                <p>
                  Ele tem também especial apreço pelo cuidado com pacientes mais velhos. Nesse acompanhamento, a medicina exige ainda mais sensibilidade e atenção aos detalhes, considerando não apenas doenças específicas, mas também autonomia, funcionalidade, história de vida e dinâmica familiar. Esse olhar reforça o compromisso da Morobach com um cuidado próximo, humano e duradouro.
                </p>
              </div>
            </div>

            <div className="order-1 relative overflow-hidden rounded-[30px] bg-[#efe7db] shadow-[0_24px_70px_rgba(60,40,20,0.08)] lg:order-2">
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
