import { useState } from 'react';

const footerContent = {
  kontakt: {
    title: 'Kontakt',
    sections: [
      'Har du spørsmål om billetter, bordbooking eller arrangementet, kan du kontakte arrangøren direkte.',
      'E-post: booking@rivaitalia.no',
      'Telefon: +47 41685000',
      'Instagram: @rivaitalia135',
    ],
  },
  vilkar: {
    title: 'Vilkår',
    sections: [
      'Kjøpte billetter og bordbooking er bindende og refunderes som hovedregel ikke.',
      'Ved avlysning vil kjøper få informasjon om refusjon eller ombooking så snart som mulig.',
      'Arrangøren forbeholder seg retten til mindre endringer i program, tidspunkt og innhold dersom dette er nødvendig.',
      'Bordbooking gjelder for opptil 10 personer og er kun gyldig når bestillingen er bekreftet av arrangør.',
    ],
  },
  personvern: {
    title: 'Personvern',
    sections: [
      'Vi samler inn navn, e-post og telefonnummer når du sender inn en bestilling.',
      'Opplysningene brukes kun til å håndtere bestillingen din og nødvendig kommunikasjon rundt arrangementet.',
      'Personopplysninger deles ikke med uvedkommende og lagres ikke lenger enn nødvendig for gjennomføring og oppfølging.',
      'Dersom du ønsker innsyn, retting eller sletting av opplysninger, kan du kontakte oss på booking@rivaitalia.no.',
    ],
  },
};

export default function Footer() {
  const [activeModal, setActiveModal] = useState(null);
  const activeContent = activeModal ? footerContent[activeModal] : null;

  return (
    <footer className="bg-navy border-t border-white/5 px-6 py-12 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-gold font-serif text-lg font-bold tracking-wide">RIVA ITALIA</p>
            <p className="text-white/30 text-sm mt-1">17. mai på sjøen — Oslo 2026</p>
          </div>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => setActiveModal('kontakt')}
              className="text-white/40 hover:text-gold transition-colors text-sm"
            >
              Kontakt
            </button>
            <button
              type="button"
              onClick={() => setActiveModal('vilkar')}
              className="text-white/40 hover:text-gold transition-colors text-sm"
            >
              Vilkår
            </button>
            <button
              type="button"
              onClick={() => setActiveModal('personvern')}
              className="text-white/40 hover:text-gold transition-colors text-sm"
            >
              Personvern
            </button>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="text-white/20 text-xs tracking-wide">
            &copy; 2026 Riva Italia 135. Alle rettigheter reservert.
          </p>
        </div>
      </div>

      {activeContent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-6" role="dialog" aria-modal="true" aria-labelledby="footer-modal-title">
          <button
            type="button"
            className="absolute inset-0 bg-navy/80 backdrop-blur-sm"
            aria-label="Lukk modal"
            onClick={() => setActiveModal(null)}
          />

          <div className="relative z-10 w-full max-w-2xl rounded-3xl border border-white/10 bg-navy p-8 shadow-2xl md:p-10">
            <button
              type="button"
              onClick={() => setActiveModal(null)}
              className="absolute right-5 top-5 text-white/40 transition-colors hover:text-gold"
              aria-label="Lukk"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">Informasjon</p>
            <h3 id="footer-modal-title" className="font-serif text-3xl font-bold text-white">
              {activeContent.title}
            </h3>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-white/70 md:text-base">
              {activeContent.sections.map((section) => (
                <p key={section}>{section}</p>
              ))}
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
