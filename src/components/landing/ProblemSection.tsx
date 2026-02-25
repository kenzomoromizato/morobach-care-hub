import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Play } from "lucide-react";

const ProblemSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const points = [
    "Como funciona o acompanhamento contínuo",
    "O que significa coordenação do cuidado",
    "Para quem esse modelo é indicado",
    "Como organizamos a saúde de forma estruturada",
  ];

  return (
    <section className="py-28 md:py-36 bg-background">
      <div ref={ref} className="container max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6 leading-snug">
            Conheça a proposta da Morobach
          </h2>
          <div className="gold-line mb-8" />
          <p className="font-sans text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
            Neste vídeo, explico como a medicina domiciliar preventiva é diferente do modelo tradicional de consultas rápidas e check-ups genéricos.
          </p>
        </motion.div>

        {/* Video Embed Area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full aspect-video rounded-sm overflow-hidden mb-16 shadow-[0_20px_60px_-15px_hsl(var(--deep-brown)/0.2)]"
          style={{
            background: "linear-gradient(135deg, hsl(var(--deep-brown)), hsl(var(--deep-brown) / 0.85))",
          }}
        >
          {/* Placeholder — replace the div below with an iframe to embed the video */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
            <div className="w-20 h-20 rounded-full border-2 border-primary/60 flex items-center justify-center bg-primary/10 backdrop-blur-sm">
              <Play className="w-8 h-8 text-primary ml-1" />
            </div>
            <span className="text-primary-foreground/70 font-sans text-sm tracking-wide uppercase">
              Vídeo em breve
            </span>
          </div>
        </motion.div>

        {/* Points */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <p className="font-sans text-foreground text-lg leading-relaxed font-light italic">
            A saúde pode ser planejada.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
