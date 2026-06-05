"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Mes données restent où ?",
    a: "Sur votre machine, uniquement. Prospecto tourne en local via Docker. Aucune donnée n'est envoyée sur un serveur externe — ni vos prospects, ni vos messages, ni votre session WhatsApp.",
  },
  {
    q: "Compatible WhatsApp Business ?",
    a: "Oui. Prospecto fonctionne avec WhatsApp personnel et WhatsApp Business. La connexion se fait par scan de QR code, exactement comme WhatsApp Web.",
  },
  {
    q: "Ça marche sans connexion internet ?",
    a: "L'interface et la base de données fonctionnent hors ligne. L'envoi de messages WhatsApp nécessite une connexion internet active, comme WhatsApp Web.",
  },
  {
    q: "Comment renouveler ma licence ?",
    a: "La licence est mensuelle. Un lien de renouvellement vous est envoyé avant expiration. Le renouvellement génère une nouvelle clé à coller dans les réglages de l'application en 30 secondes.",
  },
  {
    q: "Que se passe-t-il si j'atteins mes limites ?",
    a: "L'application vous prévient à 80% de chaque limite. Quand vous atteignez le plafond, les nouvelles créations sont bloquées mais vos données existantes restent intactes. Pas de surprises, pas de suppression.",
  },
  {
    q: "Comment mettre à jour l'application ?",
    a: "Depuis les réglages, Prospecto vérifie automatiquement les nouvelles versions. La mise à jour se fait en une commande : docker compose pull && docker compose up -d",
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-[#191918] border-b border-white/8 py-24 px-6 scroll-mt-20">
      <div className="max-w-2xl mx-auto">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 fade-up"
          style={{ letterSpacing: "-0.02em" }}
        >
          Questions fréquentes
        </h2>
        <div className="border-t border-white/8 fade-up">
          {faqs.map((faq, i) => (
            <div key={faq.q} className="border-b border-white/8">
              <button
                className="w-full py-5 flex items-center justify-between gap-4 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="text-[18px] font-medium text-white">{faq.q}</span>
                <svg
                  className="w-5 h-5 text-[#71717a] shrink-0 transition-transform duration-300"
                  style={{ transform: open === i ? "rotate(180deg)" : "rotate(0deg)" }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
              <div
                className="overflow-hidden transition-all duration-350 ease-in-out"
                style={{ maxHeight: open === i ? "200px" : "0px" }}
              >
                <p className="text-[15px] text-[#71717a] leading-[1.65] pb-5">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
