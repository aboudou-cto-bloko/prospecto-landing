import { solutions } from "@/assets/data/landing-content";

function SolutionSection() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-24">
      <div className="mb-16">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#455dd3] mb-5">
          La solution
        </p>
        <h2
          className="text-4xl md:text-5xl font-bold leading-tight"
          style={{ letterSpacing: "-0.03em" }}
        >
          Automatise de A à Z.
        </h2>
        <p className="text-[#615d59] mt-4 text-sm leading-[1.7] max-w-sm">
          Trois modules interconnectés. Zéro configuration.
        </p>
      </div>

      <div className="space-y-5">
        {solutions.map((item, i) => (
          <div
            key={item.title}
            className="border border-white/8 bg-[#0d0d0c] overflow-hidden"
          >
            {/* Window chrome */}
            <div className="border-b border-white/8 px-4 py-2.5 flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/35" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/35" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/35" />
              </div>
              <span className="text-xs text-[#615d59] font-mono ml-1">
                <span className="text-[#455dd3]">{String(i + 1).padStart(2, "0")}</span>
                {" / "}
                {item.title}
              </span>
            </div>

            {/* Full screenshot — pas de crop */}
            <img src={item.src} alt={item.title} className="w-full block" loading="lazy" />

            {/* Caption */}
            <div className="px-6 py-5 border-t border-white/[0.05]">
              <h3 className="font-semibold text-[#f6f5f4] mb-1.5 text-sm">{item.title}</h3>
              <p className="text-sm text-[#615d59] leading-[1.7]">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SolutionSection;
