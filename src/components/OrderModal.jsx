import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PRICES = {
  'Standard billett': 1500,
  'Bordbooking': 16000,
};

export default function OrderModal({ ticket, onClose }) {
  const [quantity, setQuantity] = useState(1);
  const [form, setForm] = useState({ name: '', email: '', phone: '' });
  const [submitted, setSubmitted] = useState(false);

  const isTable = ticket.name === 'Bordbooking';
  const total = isTable
    ? PRICES['Bordbooking']
    : PRICES['Standard billett'] * quantity;

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />

        {/* Modal */}
        <motion.div
          className="relative bg-[#0d1b2a] border border-white/10 rounded-2xl w-full max-w-md p-8 shadow-2xl"
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.97 }}
          transition={{ duration: 0.3 }}
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
            aria-label="Lukk"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {submitted ? (
            <div className="text-center py-8">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="font-serif text-2xl font-bold text-white mb-2">Bestilling mottatt!</h3>
              <p className="text-white/60 text-sm">
                Vi sender deg en bekreftelse på e-post snart. Takk for din bestilling!
              </p>
              <button
                onClick={onClose}
                className="mt-8 bg-gold text-white font-semibold px-8 py-3 rounded-full text-sm uppercase tracking-wide hover:bg-gold/80 transition-colors"
              >
                Lukk
              </button>
            </div>
          ) : (
            <>
              <p className="text-gold tracking-widest uppercase text-xs font-semibold mb-1">Bestill</p>
              <h3 className="font-serif text-2xl font-bold text-white mb-6">{ticket.name}</h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Quantity — only for standard tickets */}
                {!isTable && (
                  <div>
                    <label className="block text-white/60 text-xs uppercase tracking-widest mb-2">
                      Antall billetter
                    </label>
                    <div className="flex items-center gap-4">
                      <button
                        type="button"
                        onClick={() => setQuantity(q => Math.max(1, q - 1))}
                        className="w-10 h-10 rounded-full border border-white/20 text-white hover:border-gold hover:text-gold transition-colors text-xl leading-none"
                      >
                        −
                      </button>
                      <span className="font-serif text-3xl font-bold text-white w-8 text-center">{quantity}</span>
                      <button
                        type="button"
                        onClick={() => setQuantity(q => Math.min(10, q + 1))}
                        className="w-10 h-10 rounded-full border border-white/20 text-white hover:border-gold hover:text-gold transition-colors text-xl leading-none"
                      >
                        +
                      </button>
                      <span className="text-white/40 text-sm ml-2">maks 10</span>
                    </div>
                  </div>
                )}

                {/* Name */}
                <div>
                  <label className="block text-white/60 text-xs uppercase tracking-widest mb-2">
                    Navn
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    placeholder="Ditt navn"
                    className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-gold/60 transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-white/60 text-xs uppercase tracking-widest mb-2">
                    E-post
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    placeholder="din@epost.no"
                    className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-gold/60 transition-colors"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-white/60 text-xs uppercase tracking-widest mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                    placeholder="+47 000 00 000"
                    className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-gold/60 transition-colors"
                  />
                </div>

                {/* Total */}
                <div className="border-t border-white/10 pt-5 flex items-baseline justify-between">
                  <span className="text-white/50 text-sm">Totalt</span>
                  <span className="font-serif text-2xl font-bold text-gold">
                    {total.toLocaleString('nb-NO')},-
                  </span>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gold text-white font-semibold px-8 py-4 rounded-full text-sm uppercase tracking-wide hover:bg-gold/80 hover:shadow-lg hover:shadow-gold/25 transition-all hover:-translate-y-0.5"
                >
                  Bekreft bestilling
                </button>
              </form>
            </>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
