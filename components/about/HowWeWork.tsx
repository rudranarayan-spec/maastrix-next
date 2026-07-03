import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { howWeWorkPoints } from "./constants";
import SectionHeading from "./SectionHeading";

export default function HowWeWork() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <div className="relative">
          <div className="absolute -left-8 top-8 h-56 w-56 animate-float-slow rounded-full bg-blue-600/20 blur-3xl" />
          <div className="absolute -right-8 bottom-8 h-64 w-64 animate-float-medium rounded-full bg-cyan-400/20 blur-3xl" />

          <div className="relative overflow-hidden border border-white/10 bg-black/30 p-6 backdrop-blur-md">
            <Image
              src="/assets/images/about/how-we-work.png"
              alt="Digital transformation workflow matrix"
              width={760}
              height={620}
              className="mx-auto transition duration-700 hover:scale-105"
            />
          </div>
        </div>

        <div>
          <SectionHeading
            eyebrow="How We Work"
            title="Disciplined execution powered by people, process and technology"
            description="Our project managers, engineers and designers craft well-defined solutions focused on client challenges, business pain points and long-term digital outcomes."
          />

          <p className="mt-7 text-base leading-8 text-slate-400">
            We follow a disciplined yet flexible delivery model. Whether we are
            designing a simple website or developing a complex enterprise
            platform, our teams align technical execution with business
            objectives, timelines, user experience and measurable market impact.
          </p>

          <p className="mt-5 text-base leading-8 text-slate-400">
            Our Offshore Development Centre and Global Delivery Center model
            allows us to serve international clients with structured
            communication, scalable engineering capacity and dependable delivery.
            We also invest in specialized training initiatives to strengthen our
            teams and prepare human capital for future technology demands.
          </p>

          <div className="mt-8 grid gap-4">
            {howWeWorkPoints.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group flex gap-4 border border-white/10 bg-black/25 p-5 transition-all duration-300 hover:translate-x-2 hover:border-blue-500/60 hover:bg-blue-600/10"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-blue-500/40 text-blue-500 transition group-hover:bg-blue-600 group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="text-sm font-black text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <a
            href="#contact"
            className="mt-9 inline-flex items-center gap-3 border border-blue-500 px-7 py-4 text-sm font-black text-white transition-all duration-300 hover:bg-blue-600 hover:shadow-[0_0_40px_rgba(37,99,235,0.32)]"
          >
            Start Your Digital Transformation
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}