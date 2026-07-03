import Image from "next/image";
import { CheckCircle2, Quote } from "lucide-react";
import { morals } from "./constants";
import SectionHeading from "./SectionHeading";

const images = [
  "/assets/images/about/about-1.jpg",
  "/assets/images/about/about-2.jpg",
  "/assets/images/about/about-3.jpg",
  "/assets/images/about/about-4.jpg",
];

export default function CorporateMorals() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="About Maastrix"
            title="Built on principles that outlast technology trends"
            description="Our identity changed from Maas InfoTech to Maastrix Solutions, but our loyalty, assurance and commitment to client success remained constant."
          />

          <div className="mt-8 border-l-4 border-blue-500 bg-white/[0.04] p-6 backdrop-blur-md">
            <Quote className="mb-4 h-7 w-7 text-blue-400" />
            <p className="text-lg font-black uppercase leading-8 tracking-wide text-white">
              “TO IMPROVE IS TO CHANGE AND TO BE PERFECT IS TO STRUGGLE”
            </p>
          </div>

          <p className="mt-7 text-base leading-8 text-slate-400">
            We have grown from a professional web development company into a
            modern digital transformation partner. Our work remains grounded in
            practical business value, quality delivery, service ownership,
            loyalty toward clients, continuous support and cost-effective
            execution.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {morals.map((item) => (
              <div
                key={item}
                className="group flex items-center gap-3 border border-white/10 bg-black/25 px-4 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/60 hover:bg-blue-600/10"
              >
                <CheckCircle2 className="h-5 w-5 text-blue-500 transition group-hover:scale-110" />
                <span className="text-sm font-black tracking-[0.18em] text-slate-200">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5">
          {images.map((src, index) => (
            <div
              key={src}
              className={`group relative h-56 overflow-hidden border border-white/10 bg-black/30 shadow-xl ${
                index === 1 ? "translate-y-8" : ""
              } ${index === 2 ? "-translate-y-4" : ""}`}
            >
              <Image
                src={src}
                alt={`Maastrix corporate visual ${index + 1}`}
                fill
                className="object-cover grayscale transition duration-700 group-hover:scale-110 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}