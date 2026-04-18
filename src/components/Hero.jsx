import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background — boat image */}
      <img
        src="/images/header.JPG"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/40 to-cream" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-4xl flex-col justify-center px-6 pb-28 pt-20 text-center md:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <p className="text-gold tracking-[0.35em] uppercase text-xs md:text-sm font-semibold mb-6">
            17. mai 2026 &bull; Oslofjorden
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] mb-6"
        >
          17. mai på sjøen
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-16 md:mt-20"
        >
          <a
            href="#tickets"
            className="inline-flex items-center justify-center rounded-full border-2 border-white/70 px-12 py-4 text-base font-semibold text-white shadow-[0_18px_50px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:text-gold md:text-lg"
          >
            Sikre deg plass
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 md:bottom-8"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2 px-5 py-3"
          >
            <span className="text-white/75 text-xs tracking-[0.3em] uppercase">Scroll</span>
            <svg className="h-5 w-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
