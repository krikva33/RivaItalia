import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const images = [
  {
    src: '/images/IMG_3176.JPG',
    alt: 'Sunset boat party',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/images/IMG_3177.JPG',
    alt: 'DJ playing at sunset party',
    span: 'col-span-1 row-span-2',
  },
  {
    src: '/images/IMG_3179.JPG',
    alt: 'Ocean views',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/images/rivaitalia.webp',
    alt: 'Luxury yacht interior',
    span: 'col-span-2 row-span-1',
  },
  {
    src: '/images/IMG_3180.JPG',
    alt: 'Champagne celebration',
    span: 'col-span-1 row-span-2',
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
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[250px]">
          {images.map((img, i) => (
            <motion.div
              key={img.alt}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className={`${img.span} relative group overflow-hidden rounded-xl cursor-pointer`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
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
