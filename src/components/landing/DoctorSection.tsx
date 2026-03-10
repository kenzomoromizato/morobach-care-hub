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

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-foreground"
          >
            <div className="border-b border-primary/20 pb-8">
              <h3 className="font-serif text-3xl leading-tight md:text-4xl">
                Dr. Kenzo Moromizato
              </h3>

              <p className="mt-3 text-sm uppercase tracking-[0.22em] text-foreground/60">
                Médico de Família e Comunidade
              </p>

              <div className="mt-6 space-y-2 text-[15px] leading-relaxed text-foreground/72">
                <p>CRM-DF [INSERIR CRM]</p>
                <p>[Inserir formação principal ou vínculo profissional]</p>
                <p>[Inserir credencial complementar, se desejar]</p>
              </div>
            </div>

            <div className="space-y-6 pt-8 text-lg leading-relaxed text-foreground/78">
              <p>
                A Morobach nasce da ideia de que boas decisões em saúde
                dependem de contexto, continuidade e presença médica real ao
                longo do tempo.
              </p>

              <p>
                Na medicina de família, acompanhar uma pessoa não significa
                apenas atender episódios isolados, mas compreender sua história,
                seus fatores de risco, sua rotina e o momento de vida em que
                cada decisão clínica acontece.
              </p>

              <p>
                O cuidado domiciliar proposto pela Morobach parte dessa lógica:
                oferecer uma presença médica mais próxima, centrada na pessoa e
                na família, com foco em prevenção, clareza nas condutas e
                coordenação do cuidado.
              </p>
            </div>

            <div className="mt-10 grid gap-4 border-t border-primary/20 pt-8 sm:grid-cols-3">
              <div>
                <p className="text-[11px] uppercase tracking-[0.22em] text-foreground/50">
                  Princípio 1
                </p>
                <p className="mt-2 font-serif text-xl text-foreground">
                  Atenção primária
                </p>
              </div>

              <div>
                <p className="text-[11px] uppercase tracking-[0.22em] text-foreground/50">
                  Princípio 2
                </p>
                <p className="mt-2 font-serif text-xl text-foreground">
                  Longitudinalidade
                </p>
              </div>

              <div>
                <p className="text-[11px] uppercase tracking-[0.22em] text-foreground/50">
                  Princípio 3
                </p>
                <p className="mt-2 font-serif text-xl text-foreground">
                  Coordenação do cuidado
                </p>
              </div>
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
