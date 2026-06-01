function Footer() {
  return (
    <footer className="border-t border-white/8 bg-[#191918]/30 py-12 mt-24">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-sm text-[#615d59]">
          Fait par <strong className="text-white">François Aboudou Zinsou</strong> · Bénin · 2026
        </div>
        <div className="flex items-center gap-6 text-sm">
          <a
            href="https://github.com/aboudou-cto-bloko/prospecto"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#615d59] hover:text-white transition"
          >
            GitHub
          </a>
          <a href="mailto:support@prospecto.app" className="text-[#615d59] hover:text-white transition">
            Support
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
