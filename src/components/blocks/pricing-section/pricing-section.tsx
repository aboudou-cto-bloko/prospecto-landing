"use client";

import { useState } from "react";
import { pricingFeatures, pricingNote } from "@/assets/data/landing-content";

function PricingSection() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("https://prospecto-license.vercel.app/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, first_name: firstName, last_name: lastName }),
      });
      const data = await res.json();
      if (data.checkout_url) window.location.href = data.checkout_url;
    } catch (err) {
      console.error("Checkout error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="acheter" className="max-w-5xl mx-auto px-6 py-24 scroll-mt-20">
      <div className="mb-12">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#455dd3] mb-5">
          Tarif
        </p>
        <h2
          className="text-4xl md:text-5xl font-bold mb-4"
          style={{ letterSpacing: "-0.03em" }}
        >
          5&nbsp;000&nbsp;FCFA&nbsp;/&nbsp;mois.
        </h2>
        <p className="text-[#615d59] text-sm leading-[1.7] max-w-sm">
          Pas de frais cachés. Pas de contrat. Paiement via MTN MoMo, Wave ou Orange Money.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto mb-16">
        <div className="md:col-span-2 rounded-lg border border-white/8 bg-[#191918] overflow-hidden">
          <div className="h-2 bg-gradient-to-r from-[#455dd3] to-[#3a4fb8]" />
          <div className="p-8">
            <div className="mb-6">
              <p className="text-xs text-[#615d59] mb-2">MENSUEL</p>
              <div className="text-5xl font-bold">
                5<span className="text-2xl">000</span> <span className="text-lg text-[#615d59]">XOF</span>
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              {pricingFeatures.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm">
                  <span className="text-[#4ade80]">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <form onSubmit={handleCheckout} className="space-y-4">
              <input
                type="text"
                placeholder="Prénom"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                className="w-full px-4 py-2.5 bg-[#0a0a09] border border-white/8 rounded-lg text-sm focus:outline-none focus:border-[#455dd3] transition text-white"
              />
              <input
                type="text"
                placeholder="Nom"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                className="w-full px-4 py-2.5 bg-[#0a0a09] border border-white/8 rounded-lg text-sm focus:outline-none focus:border-[#455dd3] transition text-white"
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2.5 bg-[#0a0a09] border border-white/8 rounded-lg text-sm focus:outline-none focus:border-[#455dd3] transition text-white"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-3 bg-[#455dd3] hover:bg-[#3a4fb8] disabled:opacity-50 rounded-lg font-medium transition text-white"
              >
                {loading ? "Traitement..." : "Aller au paiement"}
              </button>
            </form>

            <p className="text-xs text-[#615d59] text-center mt-4">
              Paiement sécurisé MTN MoMo, Wave, Orange Money via Moneroo
            </p>
          </div>
        </div>

        <div className="rounded-lg border border-white/8 bg-[#0a0a09] p-6 h-fit">
          <h3 className="font-semibold mb-4">Ce qui se passe après</h3>
          <ul className="space-y-3 text-xs text-[#615d59]">
            {pricingNote.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
