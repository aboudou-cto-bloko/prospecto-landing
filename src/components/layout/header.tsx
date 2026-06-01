function Header() {
  return (
    <nav className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between border-b border-white/8">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#455dd3] to-[#3a4fb8] flex items-center justify-center">
          <span className="font-bold text-sm">P</span>
        </div>
        <span className="font-semibold text-white">Prospecto</span>
      </div>
      <a href="#acheter" className="text-[#615d59] hover:text-white transition text-sm">
        5 000 XOF / mois →
      </a>
    </nav>
  );
}

export default Header;
