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

  // Parallax visível
  const backgroundY = useTransform(scrollY, [0, 1000], [0, 160]);
  const contentY = useTransform(scrollY, [0, 1000], [0, -30]);

  return (
    <section className="relative h-screen min-h-[760px] overflow-hidden bg-brown-950">
      {/* Camada da imagem com parallax perceptível */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 scale-[1.18]"
        aria-hidden="true"
      >
        <img
          src={heroImage}
          alt="Médico de família em atendimento domiciliar com uma família em ambiente elegante"
          className="h-full w-full object-cover object-center"
        />
      </motion.div>

      {/* Overlay principal visível */}
      <div className="absolute inset-0 bg-brown-950/62" aria-hidden="true" />

      {/* Tom quente da marca */}
      <div
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(53,29,16,0.24)_0%,rgba(53,29,16,0.18)_35%,rgba(32,18,10,0.42)_100%)]"
        aria-hidden="true"
      />

      {/* Vinheta para profundidade */}
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(24,13,7,0.28)_100%)]"
        aria-hidden="true"
      />

      <motion.div
        style={{ y: contentY }}
        className="relative z-10 mx-auto flex h-full max-w-7xl items-center justify-center px-6 py-28"
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
            className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-white/85 md:text-[1.35rem]"
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
