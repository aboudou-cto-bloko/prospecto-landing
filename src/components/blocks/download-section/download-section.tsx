"use client";

import { useState, useEffect } from "react";

type OS = "mac-arm" | "mac-x64" | "windows" | "unknown";

const RELEASE_BASE = "https://github.com/aboudou-cto-bloko/prospecto-releases/releases/latest/download";
const VERSION_URL = "https://aboudouzinsou.com/prospecto-version.txt";

function detectOS(): OS {
  if (typeof navigator === "undefined") return "unknown";
  const ua = navigator.userAgent;
  const platform = (navigator as { userAgentData?: { platform?: string } }).userAgentData?.platform ?? navigator.platform ?? "";
  if (/Win/.test(platform) || /Win/.test(ua)) return "windows";
  if (/Mac/.test(platform) || /Mac/.test(ua)) {
    // Apple Silicon detection via canvas trick not reliable — default arm, user can switch
    return "mac-arm";
  }
  return "unknown";
}

function getDownloadUrl(os: OS, version: string): string {
  const v = version.replace(/^v/, "");
  if (os === "mac-arm") return `${RELEASE_BASE}/Prospecto_${v}_aarch64.dmg`;
  if (os === "mac-x64") return `${RELEASE_BASE}/Prospecto_${v}_x64.dmg`;
  if (os === "windows") return `${RELEASE_BASE}/Prospecto_${v}_x64-setup.exe`;
  return "https://github.com/aboudou-cto-bloko/prospecto/releases/latest";
}

const OS_OPTIONS: { key: OS; label: string; sub: string; icon: React.ReactNode }[] = [
  {
    key: "mac-arm",
    label: "Mac Apple Silicon",
    sub: "M1 · M2 · M3 · M4",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 1.5c4.687 0 8.5 3.813 8.5 8.5s-3.813 8.5-8.5 8.5S3.5 16.687 3.5 12 7.313 3.5 12 3.5zm-.75 2v5.25H6v1.5h5.25V17.5h1.5v-5.25H18v-1.5h-5.25V5.5h-1.5z"/>
      </svg>
    ),
  },
  {
    key: "mac-x64",
    label: "Mac Intel",
    sub: "Core i5 · i7 · i9",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 1.5c4.687 0 8.5 3.813 8.5 8.5s-3.813 8.5-8.5 8.5S3.5 16.687 3.5 12 7.313 3.5 12 3.5zm-.75 2v5.25H6v1.5h5.25V17.5h1.5v-5.25H18v-1.5h-5.25V5.5h-1.5z"/>
      </svg>
    ),
  },
  {
    key: "windows",
    label: "Windows",
    sub: "Windows 10 · 11 · x64",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.551H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/>
      </svg>
    ),
  },
];

const TROUBLESHOOTING = [
  {
    q: "Mac : « Prospecto ne peut pas être ouvert car il provient d'un développeur non identifié »",
    a: `Fais un clic droit sur l'app → Ouvrir → Ouvrir quand même. Ou va dans Préférences Système → Sécurité et confidentialité → cliquer « Ouvrir quand même ». C'est un avertissement Apple standard pour les apps sans signature App Store.`,
  },
  {
    q: "Mac : l'app s'ouvre mais reste blanche / ne charge pas",
    a: `L'app démarre un serveur Node.js en arrière-plan. Attends 10-15 secondes. Si ça reste blanc, ferme et relance. Si le problème persiste, vérifie qu'aucun autre programme n'utilise le port 3847 (Activity Monitor → Network).`,
  },
  {
    q: "Windows : « Windows a protégé votre PC » (SmartScreen)",
    a: `Clique sur « Informations complémentaires » puis « Exécuter quand même ». C'est normal pour les nouveaux exécutables non encore reconnus par Microsoft. L'app est safe.`,
  },
  {
    q: "Windows : l'installation demande des droits administrateur",
    a: `L'installer a besoin de droits admin pour s'installer dans Program Files. Si tu n'as pas les droits, tu peux demander à l'administrateur de ton PC d'installer, ou choisir un dossier utilisateur lors de l'installation.`,
  },
  {
    q: "L'app démarre mais j'arrive sur une page d'erreur de base de données",
    a: `La base de données SQLite se crée automatiquement au premier lancement. Si tu vois une erreur, ferme l'app, supprime le fichier de base de données (Mac : ~/Library/Application Support/Prospecto/ · Windows : %APPDATA%\\Prospecto\\) et relance.`,
  },
  {
    q: "Comment mettre à jour Prospecto ?",
    a: `Les mises à jour sont automatiques — l'app te notifie quand une nouvelle version est disponible. Tu peux aussi télécharger manuellement la dernière version depuis cette page et l'installer par-dessus l'ancienne.`,
  },
];

export default function DownloadSection() {
  const [os, setOs] = useState<OS>("mac-arm");
  const [version, setVersion] = useState("v1.4.0");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    setOs(detectOS());
    fetch(VERSION_URL)
      .then((r) => r.text())
      .then((v) => setVersion(v.trim()))
      .catch(() => {});
  }, []);

  const current = OS_OPTIONS.find((o) => o.key === os) ?? OS_OPTIONS[0];
  const downloadUrl = getDownloadUrl(os, version);

  return (
    <section id="telecharger" className="bg-black py-32 px-6">
      <div className="max-w-3xl mx-auto flex flex-col items-center fade-up">

        {/* Titre */}
        <h2
          className="text-[40px] md:text-[52px] font-bold leading-[1.05] text-white text-center mb-4"
          style={{ letterSpacing: "-0.02em" }}
        >
          Télécharger Prospecto
        </h2>
        <p className="text-[15px] text-[#71717a] text-center mb-10 max-w-md">
          Application desktop native. Aucune dépendance, aucune configuration.
          Double-clic et c'est prêt.
        </p>

        {/* Sélecteur OS */}
        <div className="flex gap-1 bg-[#111110] border border-white/8 rounded-lg p-1 mb-6">
          {OS_OPTIONS.map((opt) => (
            <button
              key={opt.key}
              onClick={() => setOs(opt.key)}
              className="flex items-center gap-2 px-4 py-2 rounded-md text-xs font-medium transition-all"
              style={{
                background: os === opt.key ? "#1e1e1d" : "transparent",
                color: os === opt.key ? "#ffffff" : "#71717a",
                border: os === opt.key ? "1px solid rgba(255,255,255,0.08)" : "1px solid transparent",
              }}
            >
              {opt.icon}
              {opt.label}
            </button>
          ))}
        </div>

        {/* Bouton télécharger */}
        <a
          href={downloadUrl}
          className="inline-flex items-center gap-3 bg-[#455dd3] hover:opacity-90 transition-opacity text-white px-8 py-4 rounded-lg text-base font-medium mb-3"
          download
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Télécharger pour {current.label}
        </a>

        <p className="text-[11px] text-[#71717a]/50 mb-16">
          {version} · {current.sub} · Gratuit pendant 7 jours, puis license requise
        </p>

        {/* Guide troubleshooting */}
        <div className="w-full">
          <h3
            className="text-[22px] font-bold text-white mb-6 text-center"
            style={{ letterSpacing: "-0.01em" }}
          >
            Problèmes courants
          </h3>

          <div className="flex flex-col gap-2">
            {TROUBLESHOOTING.map((item, i) => (
              <div
                key={i}
                className="border border-white/8 rounded-lg overflow-hidden"
                style={{ background: "#111110" }}
              >
                <button
                  className="w-full flex items-start justify-between gap-4 px-5 py-4 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="text-[13px] font-medium text-[#f6f5f4] leading-snug">{item.q}</span>
                  <svg
                    className="w-4 h-4 text-[#71717a] shrink-0 mt-0.5 transition-transform"
                    style={{ transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)" }}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4 text-[13px] text-[#71717a] leading-relaxed border-t border-white/6">
                    <p className="pt-3">{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <p className="text-center text-[12px] text-[#71717a]/40 mt-8">
            Autre problème ?{" "}
            <a href="https://wa.me/22967000000" className="underline hover:text-[#71717a]">
              Contacte le support WhatsApp
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}
