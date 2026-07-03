"use client";

import React from "react";
import { ShieldCheck, Cpu, Users, Layers, Zap, ArrowRight } from "lucide-react";

interface FeatureCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function WhyChooseUs() {
  const features: FeatureCard[] = [
    {
      icon: <Cpu className="h-5 w-5" />,
      title: "Advanced Tech Infrastructure",
      description: "We build custom, high-concurrency backend architectures and optimized mobile ecosystems configured for maximum uptime and traffic resilience."
    },
    {
      icon: <ShieldCheck className="h-5 w-5" />,
      title: "Enterprise-Grade Security",
      description: "Strict custom middleware implementation, role-based access controls, and hardened API gateways safeguard your operations and proprietary data."
    },
    {
      icon: <Zap className="h-5 w-5" />,
      title: "High-Velocity Execution",
      description: "Our agile development workflows and modular components guarantee rapid product shipping without compromising code quality or stability."
    },
    {
      icon: <Layers className="h-5 w-5" />,
      title: "End-to-End Delivery",
      description: "From database normalization to fluid user interface layers, we manage the full software life cycle under one integrated engineering framework."
    }
  ];

  return (
    <section className="bg-slate-50/50 text-slate-900 font-sans py-16 lg:py-20 border-y border-slate-200/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* SECTION SPLIT GRID LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT PANEL: HEADING & CORPORATE INTENT (Spans 5 Columns) */}
          <div className="lg:col-span-5 space-y-5 lg:sticky lg:top-24">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600">
                Why Maastrix
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-950 leading-tight">
              Engineered to Drive Global Software Velocity.
            </h2>
            
            <p className="text-sm text-slate-600 leading-relaxed font-medium">
              We provide global enterprises with dedicated software squads capable of translating complex requirements into hyper-performant architectures. We eliminate the layers of generic agency overhead to focus entirely on code reliability and system scalability.
            </p>

            <div className="pt-2">
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-sm transition-all duration-200"
              >
                Partner With Us
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* RIGHT PANEL: CORE VALUE MATRIX (Spans 7 Columns) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {features.map((item, index) => (
              <div 
                key={index}
                className="p-5 bg-white border border-slate-200/70 rounded-2xl shadow-sm transition-all duration-300 hover:border-blue-500/30 hover:shadow-md group"
              >
                {/* Micro Icon Framing */}
                <div className="mb-4 inline-flex p-2.5 rounded-xl bg-blue-50 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                  {item.icon}
                </div>
                
                {/* Structural Content */}
                <h3 className="text-base font-bold tracking-tight text-slate-950 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}