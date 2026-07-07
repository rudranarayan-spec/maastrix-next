"use client";

import React from "react";
import { Terminal, Users, Cpu, Shield, Code2 } from "lucide-react";

export default function TeamHero() {
    const stats = [
        { label: "Core Engineers", value: "24+", icon: Code2 },
        { label: "Production Commits", value: "14.2k+", icon: Terminal },
        { label: "Uptime Maintained", value: "99.99%", icon: Shield },
    ];

    return (
        <section className="relative w-full bg-[#080a0d] text-white pt-32 pb-20 overflow-hidden border-b border-white/5">
            {/* Blueprint Structural Mesh Screen backing */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_80%,transparent_100%)] pointer-events-none" />

            {/* Deep Cyberpunk Ambiance Fields */}
            <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-600/[0.06] rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-indigo-600/[0.05] rounded-full blur-[120px] pointer-events-none" />

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8 z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Framework Column */}
                    <div className="lg:col-span-7 space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.03] border border-white/10 backdrop-blur-md">
                            <Users className="h-3.5 w-3.5 text-blue-400" />
                            <span className="text-[10px] font-black uppercase tracking-widest text-blue-400">
                                Cluster Manifest
                            </span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-none">
                            The Minds Building <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400">
                                Next-Gen Infrastructure.
                            </span>
                        </h1>

                        <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-xl font-medium">
                            We are an autonomous collective of backend specialists, systems architects, and machine learning engineers dedicated to solving complex scalability problems.
                        </p>

                        {/* Micro Terminal Display Card */}
                        <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06] font-mono text-[11px] text-gray-500 max-w-lg shadow-2xl relative overflow-hidden group">
                            <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/[0.05]">
                                <div className="flex gap-1.5">
                                    <div className="w-2 h-2 rounded-full bg-rose-500/60" />
                                    <div className="w-2 h-2 rounded-full bg-amber-500/60" />
                                    <div className="w-2 h-2 rounded-full bg-emerald-500/60" />
                                </div>
                                <span className="text-[9px] uppercase tracking-wider font-bold text-gray-600">maastrix_cluster_nodes</span>
                            </div>
                            <p className="text-blue-400"><span className="text-gray-600">$</span> fetch --active-contributors</p>
                            <p className="text-emerald-400 mt-1">✓ 24 active system developers synchronized in main branch.</p>
                        </div>
                    </div>

                    {/* Metrics Panel Column (Grid-Aligned to match your case studies) */}
                    <div className="lg:col-span-5 space-y-4 w-full">
                        <span className="text-[10px] font-black uppercase tracking-widest text-gray-500 block mb-2 px-1">
                            Operational Competence Matrix
                        </span>

                        <div className="grid grid-cols-1 gap-4">
                            {stats.map((stat, i) => {
                                const Icon = stat.icon;
                                return (
                                    <div
                                        key={i}
                                        className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-between group hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 isolate"
                                        style={{ transform: "translateZ(0)" }} // Keeps layout corners clean
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="p-3 rounded-xl bg-white/5 text-blue-400 group-hover:bg-blue-500/10 transition-colors shrink-0">
                                                <Icon className="h-4 w-4" />
                                            </div>
                                            <div>
                                                <div className="text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-0.5">
                                                    {stat.label}
                                                </div>
                                                <div className="text-xl font-black tracking-tight text-white leading-none">
                                                    {stat.value}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Tiny decorative telemetry signal radar */}
                                        <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse hidden sm:block shadow-lg shadow-emerald-500/50 mr-2" />
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}