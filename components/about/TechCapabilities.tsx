import Image from "next/image";
import { capabilities, checkpoints } from "./constants";
import SectionHeading from "./SectionHeading";

const images = [
  "/assets/images/about/capability-1.jpg",
  "/assets/images/about/capability-2.jpg",
  "/assets/images/about/capability-3.jpg",
  "/assets/images/about/capability-4.jpg",
];

export default function TechCapabilities() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <div className="order-2 grid grid-cols-2 gap-5 lg:order-1">
          {images.map((src, index) => (
            <div
              key={src}
              className={`group relative h-56 overflow-hidden border border-white/10 bg-black/30 shadow-xl ${
                index === 0 || index === 3 ? "translate-y-6" : ""
              }`}
            >
              <Image
                src={src}
                alt={`Maastrix technology capability ${index + 1}`}
                fill
                className="object-cover grayscale transition duration-700 group-hover:scale-110 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-blue-950/10 transition group-hover:bg-transparent" />
            </div>
          ))}
        </div>

        <div className="order-1 lg:order-2">
          <SectionHeading
            eyebrow="Technology Capabilities"
            title="From classic web platforms to intelligent enterprise systems"
            description="We have delivered database-driven applications, CMS platforms, e-commerce ecosystems, E2E portals and modern software systems across multiple industries."
          />

          <p className="mt-7 text-base leading-8 text-slate-400">
            Our capabilities include WordPress, E-commerce, OSCommerce, Joomla,
            X-Cart, Zen Cart and E2E web portals across travel, real estate,
            shopping cart systems and ASP.NET-based business applications.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {capabilities.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group border border-white/10 bg-black/25 p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/60 hover:bg-blue-600/10"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center border border-blue-500/40 text-blue-500 transition duration-300 group-hover:bg-blue-600 group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-sm font-black text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-9 space-y-4">
            {checkpoints.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group flex gap-4 border border-white/10 bg-white/[0.035] p-5 transition-all duration-300 hover:translate-x-2 hover:border-blue-500/60 hover:bg-blue-600/10"
                >
                  <div className="mt-1 text-blue-500">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-white">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}