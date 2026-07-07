"use client";

import React from "react";
import Image from "next/image";
import { Layers, HelpCircle } from "lucide-react";
import { techStackData, TechItem } from "@/data/techStack";

export default function TechStackSlider() {
  const rollingTechList = [...techStackData, ...techStackData, ...techStackData];

  const getCategoryStyles = (category: TechItem["category"]) => {
    switch (category) {
      case "Artificial Intelligence": return "text-amber-600 bg-amber-50/60 border-amber-200/60 shadow-sm shadow-amber-500/5";
      case "Backend": return "text-blue-600 bg-blue-50/60 border-blue-200/60";
      case "Mobile": return "text-purple-600 bg-purple-50/60 border-purple-200/60";
      case "CMS & Web": return "text-emerald-600 bg-emerald-50/60 border-emerald-200/60";
      default: return "text-slate-600 bg-slate-50 border-slate-200/60";
    }
  };

  return (
    <section className="relative bg-white py-20 overflow-hidden border-b border-slate-100">
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes techMarqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.3333%); }
        }
        .premium-tech-track {
          display: flex;
          width: max-content;
          animation: techMarqueeScroll 38s linear infinite;
        }
        .premium-tech-track:hover {
          animation-play-state: paused;
        }
      `}} />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center mb-16 relative z-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-4 animate-pulse">
          <Layers className="h-3.5 w-3.5 text-blue-600" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600">
            Enterprise Stack
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-950">
          Technologies & Systems We Command
        </h2>
      </div>

      <div className="relative w-full overflow-hidden py-4 flex items-center">
        <div className="absolute inset-y-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-white via-white/70 to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 sm:w-48 bg-gradient-to-l from-white via-white/70 to-transparent z-20 pointer-events-none" />

        <div className="premium-tech-track gap-4">
          {rollingTechList.map((tech: TechItem, idx: number) => (
            <div
              key={`${tech.name}-${idx}`}
              className="group flex items-center gap-4 bg-white border border-slate-200/70 hover:border-blue-500/30 rounded-2xl py-3.5 px-6 shadow-sm hover:shadow-md transition-all duration-300 cursor-default"
            >
              {/* IMAGE/SVG HANDLER CONTAINER */}
              <div className="w-10 h-10 rounded-xl bg-slate-50 group-hover:bg-slate-100 transition-colors duration-300 flex items-center justify-center shrink-0 p-1.5 relative overflow-hidden">
                {tech.customSvg ? (
                  <div className="w-full h-full text-slate-950 transition-transform duration-300 group-hover:scale-110 flex items-center justify-center">
                    {tech.customSvg}
                  </div>
                ) : tech.iconSrc ? (
                  <div className="relative w-full h-full transition-transform duration-300 group-hover:scale-110">
                    <Image 
                      src={tech.iconSrc} 
                      alt={`${tech.name} logo asset`}
                      fill
                      className="object-contain"
                      unoptimized // Useful if you use raw .svg files inside your public directory
                    />
                  </div>
                ) : (
                  <HelpCircle className="h-5 w-5 text-slate-300" />
                )}
              </div>

              <div className="flex flex-col text-left">
                <span className="text-sm font-black tracking-tight text-slate-950 transition-colors duration-200 group-hover:text-blue-600">
                  {tech.name}
                </span>
                <span className={`text-[9px] font-extrabold uppercase tracking-widest px-2 py-0.5 rounded-md border mt-1 self-start transition-all duration-300 ${getCategoryStyles(tech.category)}`}>
                  {tech.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}