"use client";

import React from "react";
import { MoveRight } from "lucide-react";

export default function AboutProcess() {
  const steps = [
    {
      stepNumber: "Step 1",
      title: "Discover",
      description:
        "We dive deep into your goals, architecture, and core 'must-haves' to craft a bulletproof development battle plan tailored to your enterprise needs.",
    },
    {
      stepNumber: "Step 2",
      title: "Design & Build",
      description:
        "You'll see real engineering momentum fast—backed by iterative sprints, continuous testing, and transparent checkpoints to refine every micro-detail.",
    },
    {
      stepNumber: "Step 3",
      title: "Launch & Grow",
      description:
        "We don't just deliver code—we optimize for long-term scalability, cloud resilience, and market performance to ensure your digital ecosystem excels.",
    },
  ];

  return (
    <section className="relative bg-white text-slate-900 font-sans py-20 lg:py-32 overflow-hidden border-t border-slate-100">
      
      {/* Decorative Subtle Background Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none z-0 opacity-40">
        <div className="absolute top-12 left-10 w-72 h-72 bg-blue-50 rounded-full blur-3xl" />
        <div className="absolute bottom-12 right-10 w-96 h-96 bg-cyan-50 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 z-10">
        
        {/* SECTION HEADER BLOCK */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-600">Execution Strategy</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950 leading-tight">
            How We Work: Painless, Proven, Pixel-Perfect
          </h2>
          <p className="text-sm sm:text-base text-slate-500 max-w-xl mx-auto font-medium">
            Our systematic approach ensures enterprise quality while maintaining rapid engineering velocity.
          </p>
        </div>

        {/* 3-COLUMN PREMIUM INTERACTIVE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative bg-white border border-slate-200/80 rounded-[2.5rem] p-8 lg:p-10 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:shadow-xl hover:shadow-slate-100 hover:border-slate-300 flex flex-col items-center text-center"
            >
              
              {/* Custom Designed Geometric Star/Asterisk Badge Icon */}
              <div className="relative h-14 w-14 rounded-full bg-slate-950 flex items-center justify-center text-[#bef34c] transition-transform duration-500 group-hover:rotate-90 shadow-md">
                <svg viewBox="0 0 100 100" fill="currentColor" className="h-6 w-6">
                  <path d="M50 0 L58 35 L93 15 L70 45 L100 58 L65 65 L80 95 L50 73 L20 95 L35 65 L0 58 L30 45 L7 15 L42 35 Z" />
                </svg>
                {/* Ambient dynamic accent glow ring inside card */}
                <div className="absolute inset-0 rounded-full border border-[#bef34c]/20 scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500" />
              </div>

              {/* Step Title Descriptor */}
              <h3 className="text-xl lg:text-2xl font-black tracking-tight text-slate-950 mt-8 mb-4">
                {step.title}
              </h3>

              {/* Narrative Content Body */}
              <p className="text-sm lg:text-sm text-slate-500 leading-relaxed font-medium flex-grow max-w-xs">
                {step.description}
              </p>

              {/* Step Pill Button Badge Container */}
              <div className="mt-8">
                <span className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-slate-950 text-white text-[11px] font-bold uppercase tracking-wider transition-all duration-300 group-hover:bg-blue-600">
                  {step.stepNumber}
                  <MoveRight className="h-3 w-3 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                </span>
              </div>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}