import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import modelImage from "@/assets/morobach-model.jpg";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="modelo" className="py-28 md:py-36 bg-cream">
      <div className="gold-line-wide mb-28" />
      <div ref={ref} className="container max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1">

            <img
              src={modelImage}
              alt="Médico revisando prontuário digital em tablet"
              className="w-full h-[450px] object-cover"
              loading="lazy" />

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 md:order-2">

            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8 leading-snug">
              A evolução da medicina domiciliar.
            </h2>
            <div className="gold-line !mx-0 mb-8" />
            <p className="font-sans text-muted-foreground text-lg leading-relaxed mb-6">
              A Morobach resgata o cuidado médico próximo, contínuo e personalizado — com rigor científico moderno.
            </p>
            <p className="font-sans text-foreground text-lg leading-relaxed font-light italic">Não oferecemos check-ups genéricos.
Oferecemos organização e promoção da saúde, redução de riscos e acompanhamento estruturado.
              <br />
              Oferecemos organização da saúde, redução de riscos e acompanhamento estruturado.
            </p>
          </motion.div>
        </div>
      </div>
    </section>);

};

export default AboutSection;