import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Conversa inicial",
    description:
      "Antes da primeira visita, realizamos uma conversa por telemedicina para compreender a história de saúde da família e organizar o acompanhamento.",
  },
  {
    number: "02",
    title: "Consulta domiciliar mensal",
    description:
      "Uma consulta médica mensal em sua casa, com tempo adequado para avaliação clínica completa, revisão de exames e planejamento de saúde.",
  },
  {
    number: "03",
    title: "Acesso direto ao médico",
    description:
      "Entre as consultas, a família pode entrar em contato para esclarecer dúvidas e orientar decisões relacionadas à saúde.",
  },
  {
    number: "04",
    title: "Coordenação do cuidado",
    description:
      "Auxílio na organização de exames, encaminhamentos e acompanhamento com especialistas quando necessário.",
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function CareModelSection() {
  return (
    <section
      id="modelo-de-cuidado"
      className="relative bg-[#F8F3EC] py-28"
    >
      {/* separação visual em relação ao hero */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#CDAE74]/60 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#EDE3D4]/70 to-transparent" />

      <motion.div
        className="mx-auto max-w-6xl px-6"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          variants={itemVariants}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
        
          <h2 className="mb-5 font-serif text-3xl text-brown-900 md:text-4xl">
            O modelo de cuidado Morobach
          </h2>

          <p className="mx-auto max-w-2xl text-[1.08rem] leading-8 text-brown-700 md:text-[1.14rem]">
            Acompanhamento médico domiciliar contínuo para famílias, baseado nos
            princípios da medicina de família e da atenção primária à saúde.
          </p>
        </motion.div>

        <div className="grid gap-y-16 md:grid-cols-2 md:gap-x-20 lg:grid-cols-4 lg:gap-x-24">
          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={itemVariants}
              className="relative"
            >
              <div className="mb-5 text-base font-medium tracking-[0.32em] text-[#B08A4E] md:text-lg">
                {step.number}
              </div>

              <h3 className="mb-3 font-serif text-[1.38rem] leading-tight text-brown-900">
                {step.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
