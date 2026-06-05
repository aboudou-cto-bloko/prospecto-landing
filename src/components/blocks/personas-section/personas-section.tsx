import Image from "next/image";

const steps = [
  {
    num: "01",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    title: "Installez",
    desc: "Une commande curl. Docker lance tout automatiquement.",
    active: false,
  },
  {
    num: "02",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75z" />
      </svg>
    ),
    title: "Connectez WhatsApp",
    desc: "Scannez le QR code depuis votre téléphone. Connexion en 30 secondes.",
    active: false,
  },
  {
    num: "03",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
      </svg>
    ),
    title: "Lancez votre campagne",
    desc: "Sélectionnez vos prospects, rédigez votre message, envoyez.",
    active: true,
  },
];

export default function PersonasSection() {
  return (
    <section className="bg-[#191918] border-b border-white/8 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-up">
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#455dd3] mb-3">Démarrage</p>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ letterSpacing: "-0.02em" }}>
            Opérationnel en 5 minutes
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto mb-20">
          {steps.map((s, i) => (
            <div key={s.num} className={`flex flex-col items-center text-center gap-4 fade-up fade-up-d${i + 1}`}>
              <div className={`w-14 h-14 rounded-full border flex items-center justify-center ${s.active ? "bg-[#455dd3] border-[#455dd3] text-white" : "bg-black border-white/8 text-[#455dd3]"}`}>
                {s.icon}
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-widest text-[#71717a] mb-1">Étape {s.num}</p>
                <h3 className="text-[18px] font-medium text-white mb-2">{s.title}</h3>
                <p className="text-[15px] text-[#71717a] leading-[1.65]">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto fade-up">
          <div className="browser-frame">
            <div className="browser-bar">
              <div className="browser-dots">
                <div className="browser-dot" /><div className="browser-dot" /><div className="browser-dot" />
              </div>
              <div className="browser-url">prospecto.local:3000/settings/whatsapp</div>
            </div>
            <Image
              src="/screenshots/07-whatsapp.png"
              alt="Connexion WhatsApp Prospecto"
              width={1440}
              height={900}
              className="w-full object-cover object-top"
              style={{ maxHeight: 360 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
