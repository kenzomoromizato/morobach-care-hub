import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import doctorImage from "@/assets/doctor-section.png";

const DoctorSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section className="bg-[#fbf8f3] py-28 md:py-36">
      <div ref={ref} className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.35em] text-foreground/55">
            Responsabilidade clínica
          </p>

          <h2 className="font-serif text-3xl leading-tight text-foreground md:text-5xl">
            O médico por trás da Morobach
          </h2>

          <div className="gold-line mt-6 mb-0" />
        </motion.div>

        <div className="grid items-center gap-14 md:grid-cols-[1.02fr_1fr] md:gap-16">
          {/* Imagem */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="overflow-hidden rounded-sm"
          >
            <img
              src={doctorImage}
              alt="Médico da Morobach em ambiente residencial sofisticado"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </motion.div>

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-foreground"
          >
            <div className="border-b border-primary/20 pb-8">
              <h3 className="font-serif text-3xl leading-tight md:text-4xl">
                Kenzo Moromizato
              </h3>

            <div className="mt-4 h-[1px] w-16 bg-primary/40"></div>

            <p className="mt-4 text-[11px] uppercase tracking-[0.35em] text-foreground/60">
              Médico
            </p>
              
              <div className="mt-6 space-y-2 text-[15px] leading-relaxed text-foreground/72">
                <p>CRM-DF 35581</p>
                <p>Formado pela Escola Superior de Ciências da Saúde (ESCS)</p>
              </div>
            </div>

            <div className="space-y-6 pt-8 text-lg leading-relaxed text-foreground/78">
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

            <div className="mt-10 border-l border-primary/30 pl-6">
              <p className="font-serif text-xl italic leading-relaxed text-foreground md:text-2xl">
                Boa medicina depende de conhecer as pessoas ao longo do tempo.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DoctorSection;
