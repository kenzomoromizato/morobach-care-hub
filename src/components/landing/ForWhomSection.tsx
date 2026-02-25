import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AlertTriangle, TrendingDown } from "lucide-react";
import forWhomBg from "@/assets/for-whom-bg.jpg";
const problems = [
  "Idas desnecessárias ao pronto atendimento",
  "Exames repetidos",
  "Medicamentos em excesso",
  "Falta de coordenação entre profissionais",
];

const benefits = ["Clareza", "Planejamento", "Continuidade", "Segurança nas decisões"];

const ForWhomSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="py-28 md:py-36 relative bg-warm-beige"
      style={{
        backgroundImage: `url(${forWhomBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-warm-beige/85 backdrop-blur-sm" />
      <div ref={ref} className="container max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
            Por que esse modelo faz sentido
          </h2>
          <div className="gold-line mb-10" />
          <p className="font-sans text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
            A maioria das pessoas só procura atendimento quando algo já saiu do controle.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Problems */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <AlertTriangle className="w-6 h-6 text-primary" strokeWidth={1.2} />
              <h3 className="font-serif text-xl text-foreground">Isso gera:</h3>
            </div>
            <ul className="space-y-4">
              {problems.map((item) => (
                <li
                  key={item}
                  className="font-sans text-foreground/80 text-base leading-relaxed pl-5 border-l-2 border-destructive/30"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <TrendingDown className="w-6 h-6 text-primary" strokeWidth={1.2} />
              <h3 className="font-serif text-xl text-foreground">
                Mais do que consultas, o paciente passa a ter:
              </h3>
            </div>
            <ul className="space-y-4">
              {benefits.map((item) => (
                <li
                  key={item}
                  className="font-sans text-foreground text-base leading-relaxed pl-5 border-l-2 border-primary/40"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-20"
        >
          <p className="font-sans text-muted-foreground text-lg leading-relaxed mb-8">
            O acompanhamento estruturado reduz desperdícios, evita decisões precipitadas e aumenta a previsibilidade do cuidado.
          </p>
          <p className="font-serif text-xl text-foreground italic">
            Prevenir não é gastar mais.<br />
            É gastar melhor.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ForWhomSection;
