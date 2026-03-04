import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const CTASection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contato" className="py-28 md:py-36 bg-background">
      <div ref={ref} className="container max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
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
            Quando você estiver pronto para abrir ao público, colocamos o WhatsApp aqui em 2 minutos.
            Por enquanto, você pode manter o contato por e-mail.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="mailto:contato@morobach.com.br?subject=Morobach%20-%20Contato%20pelo%20site"
              className="inline-block bg-primary text-primary-foreground px-10 py-4 text-sm tracking-[0.15em] uppercase font-sans hover:bg-soft-gold/90 transition-colors duration-300"
            >
              Falar por e-mail
            </a>

            <a
              href="#"
              className="inline-block border border-primary text-foreground px-10 py-4 text-sm tracking-[0.15em] uppercase font-sans hover:bg-primary/10 transition-colors duration-300"
            >
              Voltar ao topo
            </a>
          </motion.div>

          <p className="font-sans text-muted-foreground text-sm mt-6 italic">
            (Quando tiver o número, substituímos o botão principal por WhatsApp.)
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
