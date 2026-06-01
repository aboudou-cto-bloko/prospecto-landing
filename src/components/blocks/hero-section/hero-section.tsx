"use client";

import { useState } from "react";
import { Copy, ChevronDown } from "lucide-react";
import { ScrambleText } from "@/components/ui/scramble-text";
import { LiquidButton } from "@/components/ui/liquid-button";

const INSTALL_CMD = "curl -fsSL https://raw.githubusercontent.com/aboudou-cto-bloko/prospecto/main/install.sh | bash";

export default function HeroSection() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(INSTALL_CMD);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="home" className="max-w-5xl mx-auto px-6 pt-28 pb-20">

      {/* Label */}
      <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#455dd3] mb-8">
        GoAfricaOnline · WhatsApp · Bénin & Afrique francophone
      </p>

      {/* Headline — scramble staggeré par ligne */}
      <h1
        className="text-6xl md:text-7xl font-bold leading-[1.02] mb-6 max-w-3xl"
        style={{ letterSpacing: "-0.04em" }}
      >
        <ScrambleText text="Tu prospectes" delay={0}   duration={700} /><br />
        <ScrambleText text="à la main."   delay={220} duration={700} /><br />
        <span className="text-[#455dd3]">
          <ScrambleText text="Arrête."    delay={440} duration={550} />
        </span>
      </h1>

      {/* Subtext */}
      <p className="text-base text-[#615d59] max-w-lg leading-[1.75] mb-3">
        Prospecto collecte tes leads sur GoAfricaOnline, les organise dans un CRM
        et envoie tes messages WhatsApp personnalisés automatiquement.
      </p>
      <p className="text-sm text-[#455dd3]/80 mb-10">
        5 000 FCFA / mois — moins que le coût d'un client perdu.
      </p>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-3 mb-14">
        <LiquidButton href="#acheter">Obtenir une license</LiquidButton>
        <a
          href="#docker"
          className="px-5 py-2.5 border border-white/10 hover:bg-white/[0.04] text-sm font-medium transition-colors text-[#a0a09a] flex items-center gap-1.5"
        >
          Comment ça marche <ChevronDown className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Terminal */}
      <div className="bg-[#0a0a09] border border-white/8 max-w-2xl mb-14">
        <div className="px-5 py-4 font-mono text-xs flex items-center justify-between gap-4">
          <div className="min-w-0">
            <span className="text-[#455dd3]/50">$ </span>
            <span className="text-[#f6f5f4]/70 break-all">{INSTALL_CMD}</span>
          </div>
          <button
            onClick={copyToClipboard}
            className="flex-shrink-0 flex items-center gap-1.5 px-2.5 py-1 text-xs border border-[#455dd3]/20 hover:bg-[#455dd3]/10 transition-colors text-[#455dd3]"
          >
            <Copy className="w-3 h-3" />
            {copied ? "Copié !" : "Copier"}
          </button>
        </div>
      </div>

      {/* Dashboard screenshot */}
      <div className="border border-white/8 bg-[#0a0a09] overflow-hidden">
        <div className="border-b border-white/8 px-4 py-2.5 flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
          <span className="text-xs text-[#615d59] ml-2 font-mono">localhost:3000 — Dashboard</span>
        </div>
        <img
          src="/screenshots/02-dashboard.png"
          alt="Dashboard Prospecto"
          className="w-full block"
          loading="lazy"
        />
      </div>
    </section>
  );
}
