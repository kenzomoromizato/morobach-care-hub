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
    <section className="bg-[#F7F1E8] py-32 md:py-36">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="mx-auto grid max-w-6xl items-center gap-14 px-6 md:grid-cols-2 md:gap-20"
      >
        <motion.div variants={itemVariants} className="order-2 md:order-1">
          <div className="max-w-xl">
            <h2 className="mb-8 font-serif text-3xl text-brown-900 md:text-4xl">
              Cuidar também é acompanhar a vida
            </h2>

            <div className="mx-auto mt-6 h-[2px] w-16 bg-[#D7B273]/60"></div>

            <div className="space-y-6 text-[1.03rem] leading-8 text-brown-700 md:text-[1.08rem]">
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

        <motion.div variants={itemVariants} className="order-1 md:order-2">
          <div className="overflow-hidden rounded-[28px]">
            <img
              src={emotionalImage}
              alt="Médico em atendimento domiciliar acolhedor com paciente em ambiente residencial"
              className="h-[520px] w-full object-cover md:h-[620px]"
            />
          </div>

          <div className="mt-5 h-px w-24 bg-[#CDAE74]/70" />
        </motion.div>
      </motion.div>
    </section>
  );
}
