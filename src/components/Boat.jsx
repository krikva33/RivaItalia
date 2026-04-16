import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const items = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Velkomstdrink',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
      </svg>
    ),
    title: 'DJ',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: '3 timer på sjøen',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0A1.75 1.75 0 003 15.546M21 11.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0A1.75 1.75 0 003 11.546" />
      </svg>
    ),
    title: 'Enkel servering',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: 'Eksklusiv båt',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Mulighet for bordbooking',
  },
];

export default function Boat() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="boat">
      {/* What's included — flows from the hero's cream fade */}
      <div className="bg-cream px-6 py-20 md:px-12 md:py-28 lg:px-20 lg:py-32">
        <div className="max-w-4xl mx-auto" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <p className="text-gold tracking-[0.3em] uppercase text-xs font-semibold mb-4">Riva Italia</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-navy leading-tight">
              Hva som venter deg
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mt-6" />
          </motion.div>

          {/* Day description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mb-12 md:mb-16 max-w-2xl mx-auto text-center"
          >
            <p className="text-navy/70 text-base md:text-lg leading-relaxed">
              Kl. 12.00 går båten fra Tjuvholmen i Oslo. Ved ankomst blir du ønsket velkommen med en velkomstdrink, og DJ-en setter stemningen fra første stund. Deretter venter en tre timers cruise på Oslofjorden med musikk, sol og god atmosfære. Det serveres tapas om bord, og båten har tre barer med alle rettigheter.
            </p>
          </motion.div>

          {/* Included items */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-white rounded-2xl p-8 md:p-10 shadow-lg shadow-navy/5 border border-beige-dark/40 max-w-2xl mx-auto"
          >
            <p className="text-gold tracking-[0.25em] uppercase text-[11px] font-semibold mb-6">Dette er inkludert</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {items.map((item) => (
                <div key={item.title} className="flex items-center gap-3">
                  <span className="text-gold shrink-0">{item.icon}</span>
                  <span className="text-navy font-medium text-sm">{item.title}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-beige-dark/40 text-center">
              <a href="#tickets" className="btn-primary !text-xs">
                Sikre deg plass
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
