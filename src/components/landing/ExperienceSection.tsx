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
    <section className="bg-white py-36">
      <motion.div
        className="mx-auto grid max-w-6xl items-center gap-16 px-6 md:grid-cols-2 md:gap-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        {/* Imagem institucional */}
        <motion.div variants={itemVariants}>
          <div className="overflow-hidden rounded-[28px]">
            <img
              src={institutionalImage}
              alt="Médico de família em conversa tranquila com paciente em ambiente domiciliar"
              className="h-[520px] w-full object-cover md:h-[620px]"
            />
          </div>
        </motion.div>

        {/* Conteúdo */}
        <motion.div variants={itemVariants}>
          <div className="max-w-xl">
            <h2 className="mb-6 font-serif text-3xl text-brown-900 md:text-4xl">
              Um cuidado diferente do atendimento episódico
            </h2>

            <div className="mx-auto mt-6 h-[2px] w-16 bg-[#D7B273]/60"></div>

            <p className="mb-12 text-[1.05rem] leading-8 text-brown-600 md:text-[1.1rem]">
              A Morobach foi construída para oferecer um acompanhamento mais
              profundo, contínuo e criterioso, centrado na saúde da família ao
              longo do tempo.
            </p>

            {/* Cards */}
            <div className="space-y-6">
              {differentials.map((item) => (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  className="rounded-2xl border border-brown-200/50 bg-[#F9F5EF] p-8 transition-all duration-300 hover:-translate-y-[2px] hover:shadow-md"
                >
                  <h3 className="mb-2 font-serif text-xl text-brown-900">
                    {item.title}
                  </h3>

                  <p className="text-[0.98rem] leading-7 text-brown-600">
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
