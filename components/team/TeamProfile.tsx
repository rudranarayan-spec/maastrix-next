"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Shield, Layers, Terminal, ArrowUpRight, Cpu } from "lucide-react";
import { EXECUTIVE_LEADERS } from "@/data/ourteam";



export default function TeamProfiles() {
  const [activeProfile, setActiveProfile] = useState(EXECUTIVE_LEADERS[0].id);
  const selectedLeader = EXECUTIVE_LEADERS.find((l) => l.id === activeProfile) || EXECUTIVE_LEADERS[0];

  return (
    <section className="bg-[#f8fafc] text-slate-900 py-24 relative overflow-hidden border-t border-slate-200">
      {/* Light Technical Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a03_1px,transparent_1px),linear-gradient(to_bottom,#0f172a03_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        
        {/* Section Heading Label */}
        <div className="mb-12 space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-200/60 text-slate-800 text-[9px] font-black tracking-widest uppercase border border-slate-300/40">
            <Layers className="h-3 w-3 text-slate-600" /> Executive Cluster
          </div>
          <h2 className="text-3xl font-black text-slate-950 tracking-tight">
            The Systems Core Operators
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
            Directing global operational engineering tracks across multi-platform delivery targets.
          </p>
        </div>

        {/* Master Interactive Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Stacked Cards List (7 Columns Wide) */}
          <div className="lg:col-span-7 space-y-4">
            {EXECUTIVE_LEADERS.map((leader) => {
              const isActive = leader.id === activeProfile;
              return (
                <div
                  key={leader.id}
                  onClick={() => setActiveProfile(leader.id)}
                  className={`p-6 rounded-2xl border text-left cursor-pointer transition-all duration-300 relative overflow-hidden flex flex-col sm:flex-row gap-6 items-center select-none ${
                    isActive
                      ? "bg-white border-blue-500 shadow-md translate-x-2"
                      : "bg-white/60 border-slate-200/80 hover:border-slate-300 hover:bg-white shadow-sm"
                  }`}
                >
                  {/* Avatar wrapper frame with specific size rules */}
                  <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-slate-100 border border-slate-200 shadow-inner">
                    <Image
                      src={leader.imgSrc}
                      alt={`${leader.name} Portfolio Manifest`}
                      fill
                      sizes="80px"
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>

                  {/* Profile Key Technical Metadata */}
                  <div className="space-y-1 text-center sm:text-left flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h3 className="text-base font-black text-slate-950 truncate">
                        {leader.name}
                      </h3>
                      <span className={`text-[9px] font-black tracking-wider uppercase px-2 py-0.5 rounded self-center sm:self-auto shrink-0 ${
                        isActive ? "bg-blue-50 text-blue-600 border border-blue-100" : "bg-slate-100 text-slate-500"
                      }`}>
                        {leader.focusMetric}
                      </span>
                    </div>
                    <p className="text-xs text-blue-600 font-bold tracking-tight">
                      {leader.role}
                    </p>
                    <p className="text-[11px] text-slate-400 font-medium truncate">
                      {leader.specialization}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Deep Architecture Specification Board (5 Columns Wide) */}
          <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm min-h-[420px] flex flex-col justify-between sticky top-6">
            
            <div className="space-y-6">
              {/* Header Telemetry Label */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-2 font-mono text-[10px] text-slate-400 font-bold">
                  <Terminal className="h-3.5 w-3.5 text-slate-500" />
                  <span>NODE_SPEC_MANIFEST // {selectedLeader.id.toUpperCase()}</span>
                </div>
                <ArrowUpRight className="h-4 w-4 text-slate-300" />
              </div>

              {/* Big Player Primary Portrait Detail */}
              <div className="space-y-2">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block">
                  Assigned Operational Command
                </span>
                <div className="text-xl font-black text-slate-950 tracking-tight">
                  {selectedLeader.name}
                </div>
                <div className="text-xs text-slate-500 font-bold">
                  {selectedLeader.credentials}
                </div>
              </div>

              {/* Architectural Narrative Scope */}
              <div className="space-y-3 pt-2">
                <div>
                  <span className="text-[9px] font-black uppercase tracking-widest text-blue-500 block mb-1">
                    System Core Directives
                  </span>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                    {selectedLeader.bio}
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Hardware Telemetry Validation Stamp */}
            <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono font-bold text-slate-400">
              <div className="flex items-center gap-1.5">
                <Cpu className="h-3.5 w-3.5 text-emerald-500" />
                <span className="text-slate-900">Status: Runtime Verified</span>
              </div>
              <span>2026_CLUSTER_REV</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}