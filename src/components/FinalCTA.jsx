import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="relative bg-navy px-6 py-24 md:py-32 lg:py-40 overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(201,168,76,0.1)_0%,_transparent_60%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="max-w-4xl mx-auto text-center relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <p className="text-gold tracking-[0.3em] uppercase text-xs font-semibold mb-6">
            17. mai 2026
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-10">
            Dette vil du ikke<br />gå glipp av
          </h2>
          <a href="#tickets" className="btn-primary text-base md:text-lg !px-12 !py-5">
            Sikre deg plass
          </a>
        </motion.div>
      </div>
    </section>
  );
}
