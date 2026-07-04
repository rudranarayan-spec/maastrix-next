"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight, Calendar, User, Sparkles } from "lucide-react";
import { featuredWork, ProjectCard } from "@/data/caseStudies";

export default function CaseStudyJournal() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      // Compute raw numeric metrics directly to avoid triggering React component state renders
      const currentScroll = window.scrollY;
      containerRef.current.style.setProperty("--scroll-y", `${currentScroll}`);
    };

    // Initialize tracking cleanly
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative w-full bg-[#f8fafc] text-slate-900 py-24 overflow-hidden border-t border-slate-200/60"
      style={{
        // Set fallback variables for SSR matching seamlessly
        "--scroll-y": "0"
      } as React.CSSProperties}
    >
      
      {/* =========================================================================
          HIGH-PERFORMANCE INLINE CSS PARALLAX FIELDS (Zero Hydration Mismatch Risk)
          ========================================================================= */}
      <div 
        className="absolute top-[15%] right-[-5%] w-[450px] h-[450px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none will-change-transform"
        style={{ transform: "translate3d(0, calc(var(--scroll-y) * 0.08px), 0)" }}
      />
      <div 
        className="absolute bottom-[10%] left-[-8%] w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[130px] pointer-events-none will-change-transform"
        style={{ transform: "translate3d(0, calc(var(--scroll-y) * -0.05px), 0)" }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 w-full z-10">
        
        {/* Section Heading matching structure of image_81068e.jpg */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-blue-600" />
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-600">
              Deterministic Engineering Impact
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950">
            The Studio Journal
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">
            A production briefing tracker showcasing how our specialized cross-platform solutions accelerate growth profiles and secure business processes for international users.
          </p>
        </div>

        {/* Card Presentation Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {featuredWork.map((project: ProjectCard, idx: number) => (
            <ParallaxCard key={`${project.id}-${idx}`} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}

// Sub-Component: 3D Mouse Parallax Hover Projection Element (From image_81068e.jpg)
function ParallaxCard({ project }: { project: ProjectCard }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left - box.width / 2;
    const y = e.clientY - box.top - box.height / 2;
    
    const rotateX = -(y / (box.height / 2)) * 6; 
    const rotateY = (x / (box.width / 2)) * 6;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`;
    card.style.transition = "transform 0.08s ease-out";
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
    card.style.transition = "transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)";
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group bg-white border border-slate-200/80 rounded-2xl overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 will-change-transform"
    >
      <div className="space-y-5">
        <div className="relative aspect-[16/10] w-full bg-slate-100 overflow-hidden border-b border-slate-100 shrink-0">
          <Image
            src={project.imgSrc}
            alt={project.title}
            fill
            sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <div className="px-6 space-y-3">
          <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[10px] font-bold tracking-wider uppercase">
            {project.category}
          </div>
          
          <h3 className="text-base font-black tracking-tight text-slate-950 group-hover:text-blue-600 transition-colors duration-200 leading-snug">
            {project.title}
          </h3>
          
          <p className="text-xs text-slate-500 font-medium leading-relaxed line-clamp-3">
            {project.impact}
          </p>
        </div>
      </div>

      <div className="mt-6 px-6 pb-6 pt-4 border-t border-slate-100 flex items-center justify-between">
        <div className="flex items-center gap-4 text-[11px] font-bold text-slate-400">
          <div className="flex items-center gap-1">
            <User className="h-3.5 w-3.5 text-slate-300" />
            <span>{project.author}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5 text-slate-300" />
            <span>{project.date}</span>
          </div>
        </div>

        <div className="h-7 w-7 rounded-lg bg-slate-50 text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600 flex items-center justify-center border border-slate-100 group-hover:border-blue-100 transition-all duration-300">
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </div>
      </div>
    </div>
  );
}