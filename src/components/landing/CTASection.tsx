import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function CTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contato" className="py-24 md:py-32 bg-background">
      <div ref={ref} className="container max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="rounded-3xl border border-border bg-cream p-10 md:p-14 text-center shadow-sm"
        >
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground mb-5">
            Próximo passo
          </p>

          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6 leading-snug">
            Quer organizar sua saúde com um plano claro?
          </h2>

          <div className="gold-line mb-10" />

          <p className="font-sans text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
            A Morobach foi desenhada para prevenção e acompanhamento contínuo — com decisões baseadas em evidências
            e um plano que cabe na rotina.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="mailto:contato@morobach.com.br?subject=Contato%20-%20Morobach"
              className="inline-block bg-primary text-primary-foreground px-10 py-4 text-sm tracking-[0.15em] uppercase font-sans hover:bg-soft-gold/90 transition-colors duration-300"
            >
              Solicitar contato por e-mail
            </a>

            <a
              href="#modelo"
              className="inline-block border border-primary text-foreground px-10 py-4 text-sm tracking-[0.15em] uppercase font-sans hover:bg-primary/10 transition-colors duration-300"
            >
              Ver o modelo de cuidado
            </a>
          </motion.div>

          <p className="font-sans text-muted-foreground text-sm mt-6 italic">
            Amanhã: adicionamos WhatsApp com mensagem automática (1 clique).
          </p>
        </motion.div>
      </div>
    </section>
  );
}
