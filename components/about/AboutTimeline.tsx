const timeline = [
  {
    year: "2004",
    title: "Foundation",
    text: "Started with a vision to deliver reliable digital and web solutions.",
  },
  {
    year: "2015",
    title: "Enterprise Delivery",
    text: "Expanded into business applications, portals and scalable software systems.",
  },
  {
    year: "2020",
    title: "Cloud-Native Growth",
    text: "Strengthened delivery across cloud, DevOps, integrations and modern platforms.",
  },
  {
    year: "2026",
    title: "Enterprise AI Partner",
    text: "Focused on AI automation, SaaS products and intelligent digital transformation.",
  },
];

export default function AboutTimeline() {
  return (
    <div className="mt-24">
      <div className="mb-12 max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-300">
          Our Evolution
        </p>
        <h3 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
          From web solutions to enterprise AI transformation.
        </h3>
      </div>

      <div className="relative grid gap-6 lg:grid-cols-4">
        <div className="absolute left-0 top-10 hidden h-px w-full bg-gradient-to-r from-cyan-400/0 via-cyan-400/50 to-cyan-400/0 lg:block" />

        {timeline.map((item) => (
          <div
            key={item.year}
            className="relative rounded-3xl border border-white/10 bg-slate-900/70 p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-400/50 hover:shadow-[0_0_50px_rgba(34,211,238,0.12)]"
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-400/10 text-sm font-black text-cyan-300 shadow-[0_0_30px_rgba(34,211,238,0.2)]">
              {item.year}
            </div>

            <h4 className="text-xl font-black text-white">{item.title}</h4>
            <p className="mt-4 text-sm leading-7 text-slate-400">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}