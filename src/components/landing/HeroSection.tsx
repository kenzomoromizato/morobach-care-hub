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

  const backgroundY = useTransform(scrollY, [0, 1000], [0, 160]);
  const contentY = useTransform(scrollY, [0, 1000], [0, -30]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
          y: backgroundY,
          scale: 1.08,
        }}
      />

      <div className="absolute inset-0 bg-foreground/52" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.18)_100%)]" />

      <motion.div
        style={{ y: contentY }}
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
      >
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="text-primary-foreground/80 font-sans text-sm tracking-[0.3em] uppercase mb-8"
        >
          Morobach · Brasília
        </motion.p>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.15}
          className="font-serif text-5xl md:text-7xl text-primary-foreground font-medium leading-[1.08] mb-8"
        >
          Médico de família domiciliar
          <br className="hidden md:block" /> para o cuidado contínuo da sua
          família.
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.3}
          className="text-primary-foreground/85 font-sans text-lg md:text-xl font-light max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          A Morobach oferece acompanhamento médico domiciliar contínuo em
          Brasília, com foco em prevenção, promoção de saúde, coordenação do
          cuidado e vínculo ao longo do tempo — no conforto da sua casa.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.45}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contato"
            className="inline-block bg-primary text-primary-foreground px-10 py-4 text-sm tracking-[0.15em] uppercase font-sans hover:bg-soft-gold/90 transition-colors duration-300"
          >
            Agendar avaliação inicial
          </a>

          <a
            href="#modelo"
            className="inline-block border border-primary-foreground/40 text-primary-foreground px-10 py-4 text-sm tracking-[0.15em] uppercase font-sans hover:bg-primary-foreground/10 transition-colors duration-300"
          >
            Conheça o modelo Morobach
          </a>
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.6}
          className="mt-8 text-primary-foreground/72 font-sans text-sm md:text-[15px] tracking-[0.04em]"
        >
          Assinatura mensal · 1 consulta domiciliar por mês · cuidado para toda
          a família que vive na mesma casa
        </motion.p>
      </motion.div>
    </section>
  );
};

export default HeroSection;
