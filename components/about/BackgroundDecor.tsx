export default function BackgroundDecor() {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.14),transparent_28%),radial-gradient(circle_at_80%_30%,rgba(37,99,235,0.16),transparent_30%),radial-gradient(circle_at_50%_90%,rgba(14,165,233,0.1),transparent_25%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />

      <div className="absolute left-10 top-28 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl animate-pulse-slow" />
    </>
  );
}