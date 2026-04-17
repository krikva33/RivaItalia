import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const images = [
  {
    src: '/images/IMG_3176.JPG',
    alt: 'Sunset boat party',
    ratio: 'aspect-[4/3]',
  },
  {
    src: '/images/IMG_3177.JPG',
    alt: 'DJ playing at sunset party',
    ratio: 'aspect-[3/4]',
  },
  {
    src: '/images/IMG_3179.JPG',
    alt: 'Ocean views',
    ratio: 'aspect-[4/3]',
  },
  {
    src: '/images/rivaitalia.webp',
    alt: 'Luxury yacht interior',
    ratio: 'aspect-[16/10]',
  },
  {
    src: '/images/IMG_3180.JPG',
    alt: 'Champagne celebration',
    ratio: 'aspect-[3/4]',
  },
];

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="vibe" className="bg-navy px-6 py-20 md:px-12 md:py-28 lg:px-20 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-gold tracking-[0.3em] uppercase text-xs font-semibold mb-4">Stemningen</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Få en forsmak
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mt-6" />
        </motion.div>

        {/* Grid gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {images.map((img, i) => (
            <motion.div
              key={img.alt}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className={`${img.ratio} relative group overflow-hidden rounded-xl cursor-pointer`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/30 rounded-xl transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
