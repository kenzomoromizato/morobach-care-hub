import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import experienceImage from "@/assets/experience-section.jpg";

const highlights = [
  {
    title: "Tempo e profundidade",
    desc: "Consulta domiciliar sem pressa, com foco em história clínica, exame e prioridades reais.",
  },
  {
    title: "Prevenção baseada em evidências",
    desc: "Decisões orientadas por risco, metas e acompanhamento — não por “achismos”.",
  },
  {
    title: "Coordenação do cuidado",
    desc: "Organização de exames e condutas em um plano único e coerente.",
  },
  {
    title: "Acompanhamento contínuo",
    desc: "Revisões periódicas para ajustar o plano conforme sua rotina e resultados.",
  },
];

export default function ExperienceSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experiencia" className="py-24 md:py-32 bg-warm-beige">
      <div ref={ref} className="container max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center"
        >
          <div>
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground mb-5">
              Experiência Morobach
            </p>

            <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-snug">
              Mais do que uma consulta.
              <br />
              Um sistema de cuidado.
            </h2>

            <div className="gold-line my-10" />

            <p className="font-sans text-muted-foreground text-lg leading-relaxed">
              O objetivo não é “resolver tudo em um dia”. É construir uma linha de cuidado que funcione
              na vida real — na sua casa, na sua rotina, com decisões bem orientadas e acompanhamento consistente.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, y: 12 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.55, delay: 0.15 + i * 0.08 }}
                  className="rounded-2xl border border-border bg-background/60 p-6 shadow-sm"
                >
                  <h3 className="font-serif text-lg text-foreground">{h.title}</h3>
                  <p className="font-sans text-muted-foreground mt-3 leading-relaxed">{h.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="relative rounded-3xl overflow-hidden shadow-lg"
          >
            <img
              src={experienceImage}
              alt="Experiência Morobach"
              className="w-full h-[520px] object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-foreground/20" />

            <div className="absolute left-6 right-6 bottom-6 rounded-2xl bg-background/85 backdrop-blur-md border border-border p-6">
              <p className="font-sans text-sm tracking-[0.15em] uppercase text-muted-foreground">
                Promessa de cuidado
              </p>
              <p className="font-serif text-xl md:text-2xl text-foreground mt-2 leading-snug">
                Clareza, continuidade e tranquilidade — com prevenção no centro.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
