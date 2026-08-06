import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const QuoteSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section ref={ref} className="bg-paper py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        <div className="mx-auto h-px w-full max-w-5xl bg-gradient-to-r from-transparent via-[#c8a96a]/40 to-transparent" />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          style={{
            textShadow: "0px 1px 2px rgba(70,70,70,0.8), 0 0 0 black",
          }}
          className="mx-auto mt-20 max-w-3xl text-center font-serif italic text-2xl leading-relaxed text-cream md:text-3xl"
        >
          Boa medicina depende de conhecer as pessoas ao longo do tempo.
        </motion.p>

        <div className="mx-auto mt-20 h-px w-full max-w-5xl bg-gradient-to-r from-transparent via-[#c8a96a]/40 to-transparent" />
      </div>
    </section>
  );
};

export default QuoteSection;
