type StatsBadgeProps = {
  value: string;
  label: string;
};

export default function StatsBadge({ value, label }: StatsBadgeProps) {
  return (
    <div className="group border border-white/10 bg-black/30 p-6 text-center backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/60 hover:bg-blue-600/10">
      <h3 className="text-3xl font-black text-blue-500 transition group-hover:text-blue-400 sm:text-4xl">
        {value}
      </h3>
      <p className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
        {label}
      </p>
    </div>
  );
}