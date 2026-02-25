import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle } from "lucide-react";

const offerings = [
  "Atendimento domiciliar em Brasília",
  "Prevenção baseada em evidências",
  "Coordenação médica contínua",
  "Cuidado humanizado e estruturado",
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
            Saúde organizada é tranquilidade construída.
          </h2>
          <div className="gold-line mb-10" />

          <p className="font-sans text-muted-foreground text-lg leading-relaxed mb-10">
            A Morobach oferece:
          </p>

          <ul className="space-y-4 mb-14 max-w-md mx-auto">
            {offerings.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: 15 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                className="flex items-start gap-4"
              >
                <span className="text-primary mt-1 text-lg">✦</span>
                <span className="font-sans text-foreground text-lg leading-relaxed text-left">
                  {item}
                </span>
              </motion.li>
            ))}
          </ul>

          <p className="font-sans text-foreground/80 text-lg leading-relaxed mb-14 max-w-2xl mx-auto">
            Se você deseja menos improviso e mais clareza nas decisões de saúde, este modelo foi feito para você.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a
              href="https://wa.me/5561999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-4 text-sm tracking-[0.15em] uppercase font-sans hover:bg-primary/90 transition-colors"
            >
              <MessageCircle className="w-5 h-5" strokeWidth={1.5} />
              Conversar diretamente pelo WhatsApp
            </a>
            <p className="font-sans text-muted-foreground text-sm mt-4 italic">
              Primeiro contato sem compromisso.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default DifferentialSection;
