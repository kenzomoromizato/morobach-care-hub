import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import forWhomImage from "@/assets/for-whom-section.jpg";

const items = [
  "Adultos 40+ que desejam prevenção estruturada",
  "Idosos independentes que desejam segurança em sua saúde",
  "Famílias que querem organizar o cuidado dos pais",
  "Pessoas que valorizam medicina baseada em ciência",
];

const ForWhomSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-28 md:py-36 bg-warm-beige">
      <div ref={ref} className="container max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8 leading-snug">
              Para quem a Morobach foi criada?
            </h2>
            <div className="gold-line !mx-0 mb-10" />
            <ul className="space-y-5">
              {items.map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="text-primary mt-1 text-lg">✦</span>
                  <span className="font-sans text-foreground text-lg leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src={forWhomImage}
              alt="Família reunida em ambiente sofisticado"
              className="w-full h-[450px] object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ForWhomSection;
