import Image from "next/image";

const features = [
  {
    tag: "Organiser",
    title: "Votre pipeline en un coup d'œil",
    desc: "Kanban 5 statuts — Nouveau, Contacté, Qualifié, Converti, Perdu. Glissez, déposez, avancez. Chaque prospect a son historique, ses tags et ses données personnalisées.",
    bullets: ["Filtres par statut, tag, source", "Champs personnalisés par prospect", "Import CSV en un clic"],
    screenshot: "/screenshots/04-prospects.png",
    url: "prospecto.local:3000/prospects",
    flip: false,
  },
  {
    tag: "Personnaliser",
    title: "Le bon message, au bon prospect",
    desc: "Rédigez un modèle avec des variables dynamiques — {nom}, {site}, {catégorie}. Prospecto remplace automatiquement pour chaque prospect avant l'envoi.",
    bullets: ["Détection des variables manquantes avant envoi", "Prévisualisation message par message", "Variables personnalisées illimitées"],
    screenshot: "/screenshots/06-campaign-new.png",
    url: "prospecto.local:3000/campaigns/new",
    flip: true,
  },
  {
    tag: "Envoyer",
    title: "Campagnes WhatsApp depuis votre numéro",
    desc: "Connectez votre WhatsApp en scannant un QR code. Envoyez des centaines de messages personnalisés sans bot externe ni API payante.",
    bullets: ["Délai aléatoire entre messages (anti-ban)", "Suivi en temps réel : envoyé, livré, lu", "Compatible WhatsApp et WhatsApp Business"],
    screenshot: "/screenshots/05-campaigns.png",
    url: "prospecto.local:3000/campaigns",
    flip: false,
  },
  {
    tag: "Trouver",
    title: "Prospects GoAfrica en 1 clic",
    desc: "Le scraper intégré extrait automatiquement les coordonnées des annuaires GoAfrica Online — nom, téléphone, secteur, ville — et les importe directement dans votre pipeline.",
    bullets: ["Filtrage par catégorie et ville", "Import direct dans les prospects", "Deduplication automatique"],
    screenshot: "/screenshots/03-scraper.png",
    url: "prospecto.local:3000/scrape",
    flip: true,
  },
];

export default function SolutionSection() {
  return (
    <section id="features" className="bg-black border-b border-white/8 py-24 px-6">
      <div className="max-w-6xl mx-auto flex flex-col gap-28">
        {features.map((f) => (
          <div key={f.tag} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`flex flex-col gap-5 fade-up ${f.flip ? "lg:order-2" : ""}`}>
              <span className="inline-flex w-fit px-3 py-1 bg-[#191918] border border-white/8 rounded-full text-[11px] font-semibold uppercase tracking-widest text-[#71717a]">
                {f.tag}
              </span>
              <h2 className="text-3xl font-bold" style={{ letterSpacing: "-0.02em" }}>{f.title}</h2>
              <p className="text-[15px] text-[#71717a] leading-[1.65]">{f.desc}</p>
              <ul className="flex flex-col gap-2">
                {f.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm text-[#71717a]">
                    <svg className="w-4 h-4 shrink-0" style={{ color: "#455dd3" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className={`browser-frame fade-up fade-up-d1 ${f.flip ? "lg:order-1" : ""}`}>
              <div className="browser-bar">
                <div className="browser-dots">
                  <div className="browser-dot" /><div className="browser-dot" /><div className="browser-dot" />
                </div>
                <div className="browser-url">{f.url}</div>
              </div>
              <Image src={f.screenshot} alt={f.title} width={1440} height={900} className="w-full object-cover object-top" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
