import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import emotionalImage from "@/assets/emotional-section.jpg";

const containerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="sobre" className="relative bg-paper py-36 md:py-40">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="mx-auto grid max-w-5xl items-center gap-16 px-6 md:grid-cols-2 md:gap-20"
      >
        {/* TEXTO */}
        <motion.div variants={itemVariants} className="order-2 md:order-1">
          <div className="max-w-lg">
            <h2 className="font-serif italic text-3xl text-foreground md:text-4xl">
              Cuidar também é acompanhar a vida
            </h2>

            {/* linha editorial */}
            <div className="mt-6 h-[2px] w-16 bg-primary/60"></div>

            <div className="mt-10 space-y-6 text-[1.05rem] leading-8 text-muted-foreground md:text-[1.1rem]">
              <p>
                Quando a saúde é acompanhada com continuidade, o cuidado deixa
                de ser apenas uma resposta aos momentos de doença e passa a
                fazer parte da vida com mais presença, clareza e tranquilidade.
              </p>

              <p>
                Talvez você já tenha sentido como é difícil tomar decisões sobre
                a própria saúde ou sobre a saúde de quem você ama sem alguém que
                realmente conheça a sua história. Muitas vezes, o que falta não
                é apenas atendimento — é vínculo, contexto e continuidade.
              </p>

              <p>
                A Morobach nasce dessa convicção: a de que a medicina pode ser
                mais próxima, mais atenta e mais humana. Um cuidado que conhece
                a trajetória de cada família, acompanha suas mudanças e ajuda a
                preservar a saúde com responsabilidade ao longo do tempo.
              </p>
            </div>
          </div>
        </motion.div>

        {/* IMAGEM */}
        <motion.div variants={itemVariants} className="order-1 md:order-2">
          <div className="overflow-hidden rounded-[28px] border-2 border-theme-gold">
            <img
              src={emotionalImage}
              alt="Médico em atendimento domiciliar acolhedor com paciente em ambiente residencial"
              className="h-[540px] w-full object-cover md:h-[640px]"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
