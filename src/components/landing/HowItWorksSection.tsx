import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, ClipboardList, Target, RefreshCw } from "lucide-react";

const steps = [
  { icon: Calendar, title: "Agendamento", number: "01" },
  { icon: ClipboardList, title: "Avaliação domiciliar completa", number: "02" },
  { icon: Target, title: "Plano preventivo individualizado", number: "03" },
  { icon: RefreshCw, title: "Acompanhamento contínuo", number: "04" },
];

const HowItWorksSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-28 md:py-36 bg-background">
      <div ref={ref} className="container max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
            Como Funciona
          </h2>
          <div className="gold-line" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="text-center"
            >
              <span className="font-serif text-3xl text-primary/40 mb-4 block">{step.number}</span>
              <step.icon className="w-7 h-7 text-primary mx-auto mb-5" strokeWidth={1} />
              <p className="font-sans text-foreground text-sm tracking-wide leading-relaxed">{step.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
