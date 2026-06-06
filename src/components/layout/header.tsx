"use client";

import Image from "next/image";
import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-white/8 bg-black/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <Image src="/logo.png" alt="Prospecto" width={120} height={30} className="h-7 w-auto" priority />
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-[#71717a] hover:text-white transition-colors">Fonctionnalités</a>
          <a href="#acheter" className="text-sm text-[#71717a] hover:text-white transition-colors">Tarifs</a>
          <a href="#faq" className="text-sm text-[#71717a] hover:text-white transition-colors">FAQ</a>
        </div>
        <a href="#telecharger" className="bg-[#455dd3] text-white text-sm font-medium px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
          Télécharger
        </a>
      </div>
    </nav>
  );
}

export default Header;
