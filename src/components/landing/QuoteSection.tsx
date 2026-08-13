import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import quoteImage from "@/assets/Quote.png";

const QuoteSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section ref={ref} className="bg-paper py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        <div className="mx-auto h-px w-full max-w-5xl bg-gradient-to-r from-transparent via-[#c8a96a]/40 to-transparent" />

        <motion.img
          src={quoteImage}
          alt="Boa medicina depende de conhecer as pessoas ao longo do tempo."
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="mx-auto mt-20 w-full max-w-3xl"
        />

        <div className="mx-auto mt-20 h-px w-full max-w-5xl bg-gradient-to-r from-transparent via-[#c8a96a]/40 to-transparent" />
      </div>
    </section>
  );
};

export default QuoteSection;
