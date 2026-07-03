export default function FloatingBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/assets/images/about/parallax-bg.jpg')] bg-cover bg-center bg-fixed opacity-[0.06]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(37,99,235,0.20),transparent_28%),radial-gradient(circle_at_85%_40%,rgba(14,165,233,0.16),transparent_30%),radial-gradient(circle_at_50%_90%,rgba(59,130,246,0.12),transparent_26%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:96px_96px] opacity-10" />

      <div className="absolute left-[-120px] top-32 h-80 w-80 animate-float-slow rounded-full bg-blue-600/20 blur-3xl" />
      <div className="absolute right-[-140px] top-[35%] h-96 w-96 animate-float-medium rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute bottom-20 left-[35%] h-72 w-72 animate-spin-slow rounded-full bg-blue-400/10 blur-3xl" />
    </div>
  );
}