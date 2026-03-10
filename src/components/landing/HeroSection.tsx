import { motion, useScroll, useTransform } from "framer-motion";
import heroImage from "@/assets/hero-morobach.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const HeroSection = () => {
  const { scrollY } = useScroll();

  // Parallax mais perceptível
  const imageY = useTransform(scrollY, [0, 800], [0, -90]);
  const contentY = useTransform(scrollY, [0, 800], [0, -24]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-brown-950">
      {/* Imagem com parallax */}
      <motion.div
        style={{ y: imageY, scale: 1.08 }}
        className="absolute inset-0"
        aria-hidden="true"
      >
        <img
          src={heroImage}
          alt="Médico de família em atendimento domiciliar com uma família em ambiente elegante"
          className="h-full w-full object-cover"
        />
      </motion.div>

      {/* Overlay principal mais visível */}
      <div className="absolute inset-0 bg-brown-950/60" aria-hidden="true" />

      {/* Camada quente para preservar a identidade visual */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-brown-900/35 via-transparent to-brown-950/35"
        aria-hidden="true"
      />

      {/* Vinheta suave para dar profundidade */}
      <div
        className="absolute inset-0 shadow-[inset_0_0_180px_rgba(40,20,10,0.35)]"
        aria-hidden="true"
      />

      {/* Conteúdo */}
      <motion.div
        style={{ y: contentY }}
        className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center justify-center px-6 py-28"
      >
        <div className="text-center text-white">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.05}
            className="mb-6 text-xs font-medium uppercase tracking-[0.45em] text-white/80"
          >
            Morobach
          </motion.p>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.15}
            className="mx-auto max-w-4xl text-5xl font-serif leading-[0.95] tracking-[-0.03em] text-white md:text-7xl"
          >
            Um médico de família para cuidar da saúde da sua casa.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.28}
            className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-white/82 md:text-[1.35rem]"
          >
            A Morobach oferece acompanhamento médico domiciliar contínuo para
            toda a família, com prevenção, promoção de saúde e coordenação do
            cuidado ao longo do tempo — no conforto da sua casa.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.4}
            className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <a
              href="https://wa.me/5561986218705"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-w-[290px] items-center justify-center rounded-none border border-[#D7B273] bg-[#D7B273] px-8 py-4 text-sm font-medium uppercase tracking-[0.18em] text-brown-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#debc85]"
            >
              Agendar avaliação inicial
            </a>

            <a
              href="#modelo-de-cuidado"
              className="inline-flex min-w-[290px] items-center justify-center rounded-none border border-white/25 bg-transparent px-8 py-4 text-sm font-medium uppercase tracking-[0.18em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/5"
            >
              Conheça o modelo Morobach
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
