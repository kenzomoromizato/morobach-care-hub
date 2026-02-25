import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import emotionalImage from "@/assets/emotional-section.jpg";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="modelo" className="py-28 md:py-36 bg-cream">
      
      <div ref={ref} className="container max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1">

            <img
              src={emotionalImage}
              alt="Filha segurando as mãos da mãe idosa com carinho"
              className="w-full h-[520px] object-cover"
              loading="lazy" />

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 md:order-2">

            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8 leading-snug">
              Cuidar é também preservar histórias.
            </h2>
            <div className="gold-line !mx-0 mb-8" />

            <p className="font-sans text-muted-foreground text-lg leading-relaxed mb-6">
              Existe um momento da vida em que começamos a olhar para os nossos pais com outros olhos.
            </p>

            <p className="font-sans text-foreground text-base leading-relaxed mb-6">
              Pequenos esquecimentos.<br />
              Exames acumulados.<br />
              Consultas desencontradas.
            </p>

            <p className="font-sans text-primary text-lg leading-relaxed italic mb-6">
              E surge uma pergunta silenciosa:<br />
              <span className="font-medium">Estamos organizando a saúde da forma certa?</span>
            </p>

            <p className="font-sans text-muted-foreground text-base leading-relaxed mb-6">
              Para quem tem mais de 40 anos, a sensação é semelhante.<br />
              A vida está estável.<br />
              Mas a saúde começa a exigir planejamento.
            </p>

            <p className="font-sans text-foreground text-base leading-relaxed mb-6">
              Cuidar não é apenas tratar doenças.<br />
              É proteger autonomia.<br />
              É manter independência.<br />
              É evitar decisões apressadas.
            </p>

            <p className="font-sans text-foreground text-lg leading-relaxed font-light italic">
              Prevenção é responsabilidade com o futuro.
            </p>
          </motion.div>
        </div>
      </div>
    </section>);

};

export default AboutSection;