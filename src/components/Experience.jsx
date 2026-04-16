import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

function FadeInWhenVisible({ children, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="bg-cream px-6 py-20 md:px-12 md:py-28 lg:px-20 lg:py-32">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <FadeInWhenVisible>
          <div className="text-center mb-16 md:mb-20">
            <p className="text-gold tracking-[0.3em] uppercase text-xs font-semibold mb-4">Opplevelsen</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-navy leading-tight">
              Slik har du aldri feiret 17. mai
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mt-6" />
          </div>
        </FadeInWhenVisible>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image / Video column */}
          <FadeInWhenVisible delay={0.1}>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-br from-gold/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-navy/10">
                <img
                  src="/images/rivaitalia.webp"
                  alt="Luxury boat experience on the Oslo fjord"
                  className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent" />
              </div>
            </div>
          </FadeInWhenVisible>

          {/* Text column */}
          <FadeInWhenVisible delay={0.3}>
            <div className="space-y-8">
              <p className="text-navy/80 text-lg md:text-xl leading-relaxed">
                Feir nasjonaldagen på sjøen med DJ, live saxofon og god stemning.
                Nyt 5 timer med musikk, sol og utsikt over Oslofjorden.
              </p>
              <p className="text-navy/70 text-base md:text-lg leading-relaxed">
                En eksklusiv opplevelse du sent vil glemme — der byen møter havet,
                og feiringen når nye høyder. Tenk Ibiza-vibber møter skandinavisk
                eleganse, med Oslofjorden som kulisse.
              </p>

              {/* Feature icons */}
              <div className="grid grid-cols-3 gap-6 pt-4">
                {[
                  { icon: '🎵', label: 'DJ & Live Sax' },
                  { icon: '☀️', label: '5 timer på sjøen' },
                  { icon: '🥂', label: 'Velkomstdrink' },
                ].map((item) => (
                  <div key={item.label} className="text-center">
                    <div className="text-3xl mb-2">{item.icon}</div>
                    <p className="text-navy/70 text-xs md:text-sm font-medium tracking-wide">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>

              <a href="#tickets" className="btn-primary inline-block">
                Se billetter
              </a>
            </div>
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
  );
}
