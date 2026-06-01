import { problems } from "@/assets/data/landing-content";

function ProblemSection() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-24">
      <div className="mb-16">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#455dd3] mb-5">
          Le problème
        </p>
        <h2
          className="text-4xl md:text-5xl font-bold leading-tight max-w-lg"
          style={{ letterSpacing: "-0.03em" }}
        >
          Tu prospectes.<br />Mais pas vraiment.
        </h2>
        <p className="text-[#615d59] mt-4 max-w-sm leading-[1.7] text-sm">
          Tu fais les mêmes trois choses depuis des mois. Et ça ne scale pas.
        </p>
      </div>

      <div className="divide-y divide-white/[0.05]">
        {problems.map((item, i) => (
          <div key={item.title} className="grid grid-cols-[3rem_1fr] gap-8 py-10">
            <span
              className="font-bold tabular-nums leading-none select-none pt-0.5"
              style={{ fontSize: "2.5rem", color: "rgba(255,255,255,0.05)", letterSpacing: "-0.03em" }}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="font-semibold text-[#f6f5f4] mb-2.5">{item.title}</h3>
              <p className="text-sm text-[#615d59] leading-[1.75]">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProblemSection;
