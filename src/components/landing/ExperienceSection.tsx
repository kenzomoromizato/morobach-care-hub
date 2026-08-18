import { motion } from "framer-motion";
import institutionalImage from "@/assets/institutional-care.png";

const differentials = [
  {
    title: "Continuidade",
    description:
      "O cuidado não se limita a consultas isoladas. Acompanhamos a saúde da família ao longo do tempo, com conhecimento progressivo da sua história, contexto e necessidades.",
  },
  {
    title: "Prevenção com profundidade",
    description:
      "Mais do que responder a sintomas imediatos, buscamos identificar riscos, orientar hábitos, revisar exames e apoiar decisões que ajudam a preservar a saúde no longo prazo.",
  },
  {
    title: "Coordenação com critério",
    description:
      "Quando necessário, auxiliamos na organização do cuidado, na interpretação de exames e no acompanhamento com especialistas, evitando decisões fragmentadas.",
  },
];

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
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function ExperienceSection() {
  return (
    <section className="relative bg-paper py-36 md:py-40">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <motion.div
        className="mx-auto grid max-w-5xl items-center gap-16 px-6 md:grid-cols-2 md:gap-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        {/* Imagem */}
        <motion.div variants={itemVariants}>
          <div className="overflow-hidden rounded-[28px] border-2 border-theme-gold">
            <img
              src={institutionalImage}
              alt="Médico de família em conversa tranquila com paciente em ambiente domiciliar"
              className="h-[540px] w-full object-cover md:h-[640px]"
            />
          </div>
        </motion.div>

        {/* Conteúdo */}
        <motion.div variants={itemVariants}>
          <div className="max-w-lg">
            <h2 className="font-serif italic text-2xl text-foreground md:text-3xl">
              Um cuidado diferente do atendimento episódico
            </h2>

            {/* linha editorial */}
            <div className="mt-4 h-[2px] w-16 bg-primary/60"></div>

            <p className="mt-4 mb-6 text-[0.95rem] leading-6 text-muted-foreground">
              A Morobach foi construída para oferecer um acompanhamento mais
              profundo, contínuo e criterioso, centrado na saúde da família ao
              longo do tempo.
            </p>

            <div className="space-y-3">
              {differentials.map((item) => (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  className="rounded-[18px] border border-theme-detail-light/30 bg-theme-detail-heavy p-5 transition-all duration-300 ease-out hover:-translate-y-[1px] hover:shadow-md"
                >
                  <h3 className="mb-1.5 font-serif text-[1.1rem] leading-tight text-theme-dominant">
                    {item.title}
                  </h3>

                  <p className="text-[0.85rem] leading-6 text-theme-dominant/75">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
