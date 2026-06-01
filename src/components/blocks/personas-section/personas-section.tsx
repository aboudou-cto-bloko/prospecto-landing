import { personas } from "@/assets/data/landing-content";

function PersonasSection() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-24">
      <div className="mb-16">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#455dd3] mb-5">
          Qui utilise Prospecto
        </p>
        <h2
          className="text-4xl md:text-5xl font-bold leading-tight"
          style={{ letterSpacing: "-0.03em" }}
        >
          Avant. Après.
        </h2>
        <p className="text-[#615d59] mt-4 text-sm leading-[1.7] max-w-sm">
          Ce n'est pas une question de secteur. C'est une question de méthode.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {personas.map((item) => (
          <div
            key={item.title}
            className="border-l border-[#455dd3]/25 pl-6"
          >
            <h3 className="font-semibold text-[#f6f5f4] mb-5 text-sm">{item.title}</h3>
            <div className="space-y-4">
              {item.story.split("\n\n").map((para, i) => (
                <p
                  key={i}
                  className="text-sm leading-[1.8]"
                  style={{ color: i === 0 ? "#615d59" : "#8a8680" }}
                >
                  {para}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PersonasSection;
