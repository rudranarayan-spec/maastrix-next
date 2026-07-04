"use client";

import React from "react";
import Image from "next/image";
import { Terminal, Lightbulb, Workflow, Network } from "lucide-react";

export default function PortfolioHero() {
    return (
        <section className="relative bg-[#0d0f12] text-white font-sans pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden border-b border-white/5">

            {/* Premium ambient micro-glow backing assets */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute -bottom-20 right-10 w-96 h-96 bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">

                {/* TEXT CORE HERO CONTENT CONTAINER */}
                <div className="text-center max-w-3xl mx-auto space-y-6 mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
                        <Terminal className="h-3.5 w-3.5 text-blue-400" />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400">
                            Case Studies & Deployments
                        </span>
                    </div>

                    <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-[1.1]">
                        Crafted Works, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Bold Results.</span>
                    </h1>

                    <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto leading-relaxed font-medium">
                        Discover how we isolate complex system bottlenecks, decouple legacy codebases, and engineer performant, custom-tailored digital architecture that drives measurable velocity.
                    </p>
                </div>

                {/* IMAGE & PROCESS METRIC SECTION GRID (Inspired by image_6811a0.jpg Layout) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

                    {/* LEFT SIDE: MULTI-IMAGE & METHODOLOGY BLOCK (Spans 8 Columns) */}
                    <div className="lg:col-span-8 relative rounded-3xl overflow-hidden bg-white/[0.02] border border-white/5 min-h-[320px] sm:min-h-[440px] flex flex-col justify-end p-6 sm:p-10 group">

                        {/* Main Action/Collaborative Image Layer */}
                        <Image
                            src="/assets/images/portfolio/hero.jpg"
                            alt="Maastrix Solutions core engineering and systems brainstorming workspace"
                            fill
                            sizes="(max-w-1024px) 100vw, 66vw"
                            className="object-cover object-center transition-transform duration-700 opacity-60 group-hover:scale-102"
                            priority
                        />

                        {/* Premium Gradient Scrim for Content Readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f12] via-[#0d0f12]/40 to-transparent z-10" />

                        {/* Content overlaying the image base */}
                        <div className="relative z-20 max-w-xl space-y-3">
                            <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white flex items-center gap-2">
                                <Workflow className="h-5 w-5 text-blue-400" />
                                How We Solve Complex Diagnostics
                            </h3>
                            <p className="text-xs sm:text-sm text-gray-300 font-medium leading-relaxed">
                                Every project begins with a deep structural discovery loop. We map endpoint latency, normalize relational schema layout, and systematically containerize data states to guarantee high scalability under persistent, heavy load metrics.
                            </p>
                        </div>
                    </div>

                    {/* RIGHT SIDE: CORE PERFORMANCE METRIC CARDS (Spans 4 Columns) */}
                    <div className="lg:col-span-4 flex flex-col gap-4 justify-between">

                        {/* Metric Box 1 */}
                        <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 flex flex-col justify-between flex-1 transition-all duration-300 hover:border-blue-500/20 hover:bg-white/[0.03]">
                            <div className="text-blue-400 bg-blue-500/10 p-2.5 rounded-xl self-start mb-4">
                                <Lightbulb className="h-5 w-5" />
                            </div>
                            <div>
                                <h4 className="text-base font-bold text-white tracking-tight mb-1">
                                    Strategy First
                                </h4>
                                <p className="text-xs text-gray-400 font-medium leading-relaxed">
                                    We match project infrastructure blueprints explicitly to business objectives, eliminating architectural dead-weight before the first line of code is committed.
                                </p>
                            </div>
                        </div>

                        {/* Metric Box 2 */}
                        <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 flex flex-col justify-between flex-1 transition-all duration-300 hover:border-blue-500/20 hover:bg-white/[0.03]">
                            <div className="text-indigo-400 bg-indigo-500/10 p-2.5 rounded-xl self-start mb-4">
                                <Network className="h-5 w-5" />
                            </div>
                            <div>
                                <h4 className="text-base font-bold text-white tracking-tight mb-1">
                                    Global Scalability
                                </h4>
                                <p className="text-xs text-gray-400 font-medium leading-relaxed">
                                    Engineering optimized setups that consistently perform natively across multiple continents, clouds, data nodes, and varying bandwidth parameters.
                                </p>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}