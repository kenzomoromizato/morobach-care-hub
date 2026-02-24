import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const badges = [
  "Base Científica",
  "Cuidado Personalizado",
  "Longitudinalidade",
  "Segurança",
];

const DifferentialSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-28 md:py-36 bg-cream">
      <div className="gold-line-wide mb-28" />
      <div ref={ref} className="container max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8">
            Prevenção real. Sem excessos.
          </h2>
          <div className="gold-line mb-10" />
          <p className="font-serif text-xl md:text-2xl text-foreground/80 leading-relaxed italic mb-4">
            Nem todo exame é necessário.
          </p>
          <p className="font-serif text-xl md:text-2xl text-foreground/80 leading-relaxed italic mb-4">
            Nem toda intervenção melhora a vida.
          </p>
          <p className="font-sans text-muted-foreground text-lg leading-relaxed mt-8 mb-14">
            Prevenção eficaz é aquela baseada em evidência e risco individual.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {badges.map((badge, i) => (
              <motion.span
                key={badge}
                initial={{ opacity: 0, y: 15 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                className="border border-primary/40 text-foreground px-6 py-3 text-xs tracking-[0.2em] uppercase font-sans"
              >
                {badge}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DifferentialSection;
