import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-32 md:py-40 bg-card">
      <div ref={ref} className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-5">
            Para quem esse cuidado faz sentido
          </h2>
          <div className="gold-line mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A Morobach foi pensada para famílias que desejam um acompanhamento
            médico próximo, contínuo e orientado para prevenção.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-14">
          {profiles.map((profile, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 * index, ease: "easeOut" }}
              className="text-center"
            >
              <h3 className="font-serif text-xl text-foreground mb-4">
                {profile.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                {profile.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
