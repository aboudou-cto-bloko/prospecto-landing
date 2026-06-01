const TAGS = ["#CRM", "#WhatsApp", "#GoAfricaOnline", "#Bénin", "#Prospection", "#PME"];

function Footer() {
  return (
    <footer className="border-t border-white/8 bg-[#0a0a09] py-16 mt-8">
      <div className="max-w-5xl mx-auto px-6 text-center">

        {/* Logo + Nom */}
        <div className="flex items-center justify-center gap-3 mb-3">
          <svg viewBox="0 0 100 60" className="w-8 h-5 fill-white/80" aria-hidden>
            <g transform="translate(10, 5)">
              <path d="M 0 45 L 18 0 L 30 0 L 30 12 L 16 45 Z" />
              <path d="M 35 0 L 80 0 L 80 8 L 50 22 L 80 37 L 80 45 L 35 45 L 35 37 L 65 23 L 35 8 Z" />
            </g>
          </svg>
          <span className="font-bold text-xl text-white" style={{ letterSpacing: "0.12em" }}>
            PROSPECTO
          </span>
        </div>

        <p className="text-[#615d59] text-sm mb-8">
          GoAfricaOnline · WhatsApp · Bénin & Afrique francophone
        </p>

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {TAGS.map((tag) => (
            <span key={tag} className="border border-white/8 rounded-full px-3 py-1 text-xs text-[#615d59]">
              {tag}
            </span>
          ))}
        </div>

        <p className="text-[#615d59]/35 text-xs mb-8">© 2026 Prospecto. Tous droits réservés.</p>

        {/* Crédit développeur */}
        <div className="pt-6 border-t border-white/8 flex items-center justify-center gap-3">
          <span className="text-[#615d59]/40 text-xs">Une réalisation de</span>
          <a
            href="https://aboudouzinsou.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 group"
            aria-label="Portfolio d'Aboudou Zinsou"
          >
            <svg
              viewBox="0 0 100 60"
              className="w-7 h-4 fill-[#615d59]/35 group-hover:fill-[#455dd3] transition-colors duration-200"
              aria-hidden
            >
              <g transform="translate(10, 5)">
                <path d="M 0 45 L 18 0 L 30 0 L 30 12 L 16 45 Z" />
                <path d="M 35 0 L 80 0 L 80 8 L 50 22 L 80 37 L 80 45 L 35 45 L 35 37 L 65 23 L 35 8 Z" />
              </g>
            </svg>
            <span className="text-xs text-[#615d59]/40 group-hover:text-[#455dd3] transition-colors duration-200 font-medium">
              aboudouzinsou.com
            </span>
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
