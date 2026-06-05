"use client";

import { useState } from "react";

const freelanceFeatures = [
  "300 prospects",
  "5 campagnes actives",
  "200 messages / mois",
  "3 champs personnalisés",
  "10 tags",
  "Auto-hébergé · données locales",
];

const enterpriseFeatures = [
  "Limites sur mesure (contrat)",
  "Licence renouvelable par période",
  "Support prioritaire",
  "Onboarding et formation inclus",
  "Déploiement assisté",
  "SLA selon contrat",
];

function CheckIcon({ color = "#22c55e" }: { color?: string }) {
  return (
    <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{ color }}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function PricingSection() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("https://prospecto-license.vercel.app/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, first_name: firstName, last_name: lastName }),
      });
      const data = await res.json();
      if (data.checkout_url) {
        window.location.href = data.checkout_url;
      } else {
        setError("Erreur lors de la création du paiement. Réessayez.");
      }
    } catch {
      setError("Connexion impossible. Réessayez.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="acheter" className="bg-black border-b border-white/8 py-24 px-6 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-up">
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#455dd3] mb-3">Tarifs</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ letterSpacing: "-0.02em" }}>
            Simple. Transparent. Pas de surprise.
          </h2>
          <p className="text-[15px] text-[#71717a]">
            Pas d&apos;abonnement par siège. Pas de frais cachés. Paiement via MTN MoMo, Wave ou Orange Money.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Freelance */}
          <div className="bg-[#191918] border border-white/8 rounded-2xl overflow-hidden flex flex-col fade-up fade-up-d1">
            <div className="h-1 bg-gradient-to-r from-[#455dd3] to-[#3a4fb8]" />
            <div className="p-8 flex flex-col flex-1">
              <p className="text-sm text-[#71717a] font-medium mb-1">Freelance</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">5 000 FCFA</span>
                <span className="text-[15px] text-[#71717a]"> / mois</span>
              </div>
              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {freelanceFeatures.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-[#71717a]">
                    <CheckIcon />
                    {f}
                  </li>
                ))}
              </ul>
              <form onSubmit={handleCheckout} className="space-y-3">
                <input
                  type="text"
                  placeholder="Prénom"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  className="w-full px-4 py-2.5 bg-black border border-white/8 rounded-lg text-sm focus:outline-none focus:border-[#455dd3] transition text-white placeholder:text-[#71717a]"
                />
                <input
                  type="text"
                  placeholder="Nom"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  className="w-full px-4 py-2.5 bg-black border border-white/8 rounded-lg text-sm focus:outline-none focus:border-[#455dd3] transition text-white placeholder:text-[#71717a]"
                />
                <input
                  type="email"
                  placeholder="Email (recevrez la clé ici)"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-2.5 bg-black border border-white/8 rounded-lg text-sm focus:outline-none focus:border-[#455dd3] transition text-white placeholder:text-[#71717a]"
                />
                {error && <p className="text-xs text-red-400">{error}</p>}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full px-6 py-3 bg-[#455dd3] hover:bg-[#3a4fb8] disabled:opacity-50 rounded-lg font-medium transition text-white text-sm"
                >
                  {loading ? "Traitement..." : "Aller au paiement"}
                </button>
                <p className="text-xs text-[#71717a] text-center">
                  Paiement sécurisé MTN MoMo, Wave, Orange Money via Moneroo
                </p>
              </form>
            </div>
          </div>

          {/* Entreprise */}
          <div
            className="bg-[#191918] rounded-2xl p-8 flex flex-col relative fade-up fade-up-d2"
            style={{ boxShadow: "0 0 40px rgba(69,93,211,0.1), 0 0 0 1px #455dd3" }}
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#455dd3] text-white px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide whitespace-nowrap">
              ENTREPRISES &amp; AGENCES
            </div>
            <p className="text-sm text-[#71717a] font-medium mb-1">Entreprise</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-white">Sur devis</span>
            </div>
            <ul className="flex flex-col gap-3 mb-8 flex-1">
              {enterpriseFeatures.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm text-[#71717a]">
                  <CheckIcon color="#455dd3" />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href={`https://wa.me/2290167266360?text=${encodeURIComponent("Bonjour, je souhaite en savoir plus sur le plan Entreprise de Prospecto.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center bg-[#455dd3] text-white px-4 py-3 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity block"
            >
              Contacter l&apos;équipe
            </a>
            <div className="mt-6 pt-6 border-t border-white/8">
              <ul className="flex flex-col gap-2">
                <li className="text-xs text-[#71717a]">✓ Licence activée dans les 24h</li>
                <li className="text-xs text-[#71717a]">✓ Setup guidé par WhatsApp</li>
                <li className="text-xs text-[#71717a]">✓ Tes données restent sur ton serveur</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
