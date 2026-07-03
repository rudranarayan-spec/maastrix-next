const features = [
  "Enterprise AI Solutions",
  "Agentic AI Development",
  "SaaS Platforms",
  "Cloud Engineering",
  "Web & Mobile Apps",
  "Workflow Automation",
];

export default function AboutFeatures() {
  return (
    <div className="mt-8 flex flex-wrap gap-3">
      {features.map((feature) => (
        <span
          key={feature}
          className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-slate-200 transition duration-300 hover:border-cyan-400/60 hover:bg-cyan-400/10 hover:text-cyan-200"
        >
          {feature}
        </span>
      ))}
    </div>
  );
}