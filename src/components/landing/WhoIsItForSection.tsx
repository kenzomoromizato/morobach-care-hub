import { motion } from "framer-motion";

const profiles = [
  {
    title: "Adultos que valorizam prevenção",
    description:
      "Adultos saudáveis que desejam acompanhar sua saúde de forma organizada, com orientação médica contínua e foco em prevenção ao longo da vida.",
  },
  {
    title: "Pessoas com condições crônicas",
    description:
      "Pessoas com condições como hipertensão, diabetes ou colesterol elevado que se beneficiam de acompanhamento médico próximo e contínuo.",
  },
  {
    title: "Famílias multigeracionais",
    description:
      "Famílias com diferentes gerações vivendo na mesma casa e que preferem um cuidado médico integrado para todos os membros.",
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

export default function WhoIsItForSection() {
  return (
    <section className="relative bg-white py-36">
      {/* Separação visual em relação ao bloco anterior */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D8C2A0]/70 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#F6EFE6]/65 to-transparent" />

      <motion.div
        className="mx-auto max-w-6xl px-6"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          variants={itemVariants}
          className="mx-auto mb-28 max-w-3xl text-center"
        >
          <h2 className="mb-7 font-serif text-3xl text-brown-900 md:text-4xl">
            Para quem esse cuidado faz sentido
          </h2>

          <div className="mx-auto mt-6 h-[2px] w-16 bg-[#D7B273]/60"></div>

          <p className="mx-auto max-w-2xl text-[1.02rem] leading-8 text-brown-600 md:text-[1.08rem]">
            A Morobach foi pensada para famílias e indivíduos que desejam um
            acompanhamento médico próximo, contínuo e orientado para prevenção.
          </p>
        </motion.div>

        <div className="grid gap-y-14 md:grid-cols-3 md:gap-x-12 lg:gap-x-16">
          {profiles.map((profile, index) => (
            <motion.div
              key={profile.title}
              variants={itemVariants}
              className="relative px-2 text-center md:px-6"
            >
              {index !== 0 && (
                <div className="absolute left-0 top-1/2 hidden h-24 -translate-y-1/2 border-l border-[#E9DED0] md:block" />
              )}

              <h3 className="mx-auto mb-4 max-w-[16ch] font-serif text-[1.45rem] leading-tight text-brown-900">
                {profile.title}
              </h3>

              <p className="mx-auto max-w-[28ch] text-[0.98rem] leading-7 text-brown-600">
                {profile.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
