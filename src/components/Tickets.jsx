import { motion, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

const CHECKIN_BOOKING_URL = 'https://event.checkin.no/222479/17-mai-pa-sjoen';

const tickets = [
  {
    name: 'Standard billett',
    price: '1 800,-',
    features: [
      'Velkomstdrink',
      'DJ',
      '4 timer på Oslofjorden',
      'Antipasti',
    ],
    cta: 'Kjøp billett',
    highlight: false,
  },
];

export default function Tickets() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  useEffect(() => {
    const existingScript = document.querySelector('script[src="https://registration.checkin.no/registration.loader.js"]');
    if (existingScript) return;

    const script = document.createElement('script');
    script.src = 'https://registration.checkin.no/registration.loader.js';
    script.async = true;
    script.setAttribute('data-event-id', '222479');
    document.body.appendChild(script);
  }, []);

  function handleGoToRegistration() {
    const registrationElement = document.getElementById('checkin_registration');
    const embedLoaded = registrationElement && registrationElement.childElementCount > 0;

    if (embedLoaded) {
      registrationElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }

    window.location.href = CHECKIN_BOOKING_URL;
  }

  return (
    <section id="tickets" className="bg-navy px-6 py-20 md:px-12 md:py-28 lg:px-20 lg:py-32 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(201,168,76,0.06)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,_rgba(201,168,76,0.04)_0%,_transparent_50%)]" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-gold tracking-[0.3em] uppercase text-xs font-semibold mb-4">Billetter</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Sikre deg plass
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mt-6 mb-6" />
          <p className="text-white/60 text-base md:text-lg max-w-xl mx-auto">
            Begrenset kapasitet – dette blir utsolgt
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {tickets.map((ticket, i) => (
            <motion.div
              key={ticket.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className={`relative rounded-2xl p-8 md:p-10 transition-all duration-500 hover:-translate-y-1 ${
                ticket.highlight
                  ? 'bg-gradient-to-b from-gold/20 to-gold/5 border-2 border-gold/40 hover:border-gold/70'
                  : 'bg-white/5 border border-white/10 hover:border-white/20'
              }`}
            >
              {ticket.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-white text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full">
                  Premium
                </div>
              )}

              <h3 className="font-serif text-2xl font-bold text-white mb-2">{ticket.name}</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="font-serif text-4xl md:text-5xl font-bold text-gold">{ticket.price}</span>
              </div>

              <ul className="space-y-4 mb-10">
                {ticket.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-white/70 text-sm md:text-base">
                    <svg className="w-5 h-5 text-gold shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={handleGoToRegistration}
                className={`block w-full text-center font-semibold px-8 py-4 rounded-full tracking-wide uppercase text-sm transition-all duration-300 hover:-translate-y-0.5 ${
                  ticket.highlight
                    ? 'bg-gold text-white hover:bg-gold-light hover:shadow-lg hover:shadow-gold/25'
                    : 'border-2 border-gold text-gold hover:bg-gold hover:text-white hover:shadow-lg hover:shadow-gold/25'
                }`}
              >
                {ticket.cta}
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.45, duration: 0.7 }}
          className="mt-14 md:mt-16 max-w-4xl mx-auto rounded-2xl border border-white/10 bg-white p-4 md:p-6"
        >
          <div id="checkin_registration" />
          <div className="mt-4 pt-3 border-t border-navy/10 text-center text-[11px] md:text-xs text-navy/45">
            <span>Problemer med skjemaet?</span>{' '}
            <a
              href={CHECKIN_BOOKING_URL}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-navy/70 hover:text-gold transition-colors"
            >
              Åpne bestilling direkte i Checkin
            </a>
          </div>
        </motion.div>

        {/* Urgency note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center text-white/40 text-sm mt-10 tracking-wide"
        >
          ⚡ Begrenset antall plasser. Billetter kan ikke refunderes. 20 års aldersgrense.
        </motion.p>
      </div>
    </section>
  );
}
