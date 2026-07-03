import FloatingBackground from "./FloatingBackground";
import HeroWhoWeAre from "./HeroWhoWeAre";
import CorporateMorals from "./CorporateMorals";
import TechCapabilities from "./TechCapabilities";
import HowWeWork from "./HowWeWork";

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden bg-slate-950 text-white">
      <FloatingBackground />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <HeroWhoWeAre />
        <CorporateMorals />
        <TechCapabilities />
        <HowWeWork />
      </div>
    </main>
  );
}