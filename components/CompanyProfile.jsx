import React from "react";
import Image from "next/image";
import { CheckCheck } from "lucide-react";

export default function CompanyProfile() {
  return (
    <section
      id="about"
      className="py-20 md:py-28 bg-white text-slate-900 font-sans"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Core Content Grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
          {/* Left Column: Copywriting & Value Propositions */}
          <div className="flex flex-col justify-center">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
              Company Profile
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Who We Are
            </h2>

            {/* Italicized Introduction paragraph matching image_e873b0.jpg styling */}
            <p className="mt-4 text-base sm:text-lg italic text-slate-600 leading-relaxed">
              Maastrix Solutions is an Enterprise AI and Digital Transformation
              company specializing in Artificial Intelligence, Intelligent
              Automation, Enterprise Software Development, SaaS Platforms, Cloud
              Engineering, and Digital Experience Solutions.
            </p>

            {/* Structured Value Checkmarks */}
            <ul className="mt-8 space-y-4 text-sm sm:text-base text-slate-700">
              <li className="flex items-start gap-3">
                <span className="mt-1 flex-shrink-0 text-blue-500">
                  <CheckCheck className="w-5 h-5" />
                </span>
                <span>
                  We help startups, SMEs, enterprises, and government
                  organizations modernize their operations through intelligent
                  technologies that improve productivity, automate business
                  processes, and accelerate digital innovation.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-1 flex-shrink-0 text-blue-500">
                  <CheckCheck className="w-5 h-5" />
                </span>
                <span>
                  Our multidisciplinary team combines expertise in AI
                  engineering, enterprise architecture, cloud technologies,
                  UX/UI design, and full-stack development to build secure,
                  scalable, and future-ready digital products.
                </span>
              </li>
            </ul>

            {/* Concluding Paragraph Block */}
            <p className="mt-8 text-sm sm:text-base text-slate-700 leading-relaxed">
              From AI-powered workflow automation and enterprise SaaS
              applications to modern websites and mobile apps, we deliver
              technology solutions that create measurable business value.
            </p>
          </div>

          {/* Right Column: High-Fidelity Office Space Image Showcase */}
          {/* Notice the height and explicit responsive sizing on this parent wrapper element */}
          <div className="relative overflow-hidden rounded-lg shadow-xl lg:mt-4 h-[300px] sm:h-[400px] lg:h-[480px] w-full">
            <Image
              src="/assets/images/about.jpg"
              alt="About Maastrix Solutions"
              width={600} // or whatever your width is
              height={400} // or whatever your height is
              priority // <--- Add this property right here
              className="object-contain" // your existing styles
            />
          </div>
        </div>
      </div>
    </section>
  );
}
