export default function Footer() {
  return (
    <footer className="bg-navy border-t border-white/5 px-6 py-12 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-gold font-serif text-lg font-bold tracking-wide">RIVA ITALIA</p>
            <p className="text-white/30 text-sm mt-1">17. mai på sjøen — Oslo 2026</p>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="text-white/40 hover:text-gold transition-colors text-sm">
              Kontakt
            </a>
            <a href="#" className="text-white/40 hover:text-gold transition-colors text-sm">
              Vilkår
            </a>
            <a href="#" className="text-white/40 hover:text-gold transition-colors text-sm">
              Personvern
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="text-white/20 text-xs tracking-wide">
            &copy; 2026 Riva Italia Events. Alle rettigheter reservert.
          </p>
        </div>
      </div>
    </footer>
  );
}
