"use client";

import React, { useState, useMemo } from "react";
import { ArrowUpRight, Folder, Globe, Layers } from "lucide-react";
import { mockProjects, Project } from "@/data/portfolio";

type FilterCategory = "All" | "Web" | "Mobile App" | "Enterprise Software" | "Developer Tools";

export default function PortfolioShowcase() {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("All");

  const categories: FilterCategory[] = ["All", "Web", "Mobile App", "Enterprise Software", "Developer Tools"];

  // Optimized Filter Computation Matrix
  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return mockProjects;
    return mockProjects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="portfolio" className="bg-white text-slate-900 font-sans py-16 lg:py-24 border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* STRUCTURAL HEADER SECTION */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-4 max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600">
                Our Work
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-950 leading-tight">
              Proven Deployments. Global Infrastructure.
            </h2>
            <p className="text-sm text-slate-500 font-medium">
              Explore our selection of highly scalable backend ecosystems, mobile architectures, and developer resources shipped across the globe.
            </p>
          </div>

          {/* DYNAMIC COMPACT CONTROLLER FILTER BAR */}
          <div className="flex flex-wrap gap-1.5 bg-slate-50 border border-slate-200/60 p-1.5 rounded-xl self-start md:self-end">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold tracking-tight transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-950 hover:bg-slate-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* PROJECTS GRID MATRIX */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project: Project) => (
            <div
              key={project.id}
              className="group flex flex-col justify-between p-6 bg-white border border-slate-200/80 rounded-2xl shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300"
            >
              <div>
                {/* Meta Row: Project Type Tag & Client Geo-Location */}
                <div className="flex items-center justify-between gap-4 mb-5 pb-4 border-b border-slate-100">
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-blue-600 bg-blue-50/50 px-2.5 py-1 rounded-md">
                    <Folder className="h-3 w-3" />
                    {project.category}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-400">
                    <Globe className="h-3 w-3 text-slate-300" />
                    {project.clientCountry}
                  </span>
                </div>

                {/* Main Identity Title & Narrative */}
                <div className="space-y-2 mb-6">
                  <h3 className="text-lg font-black tracking-tight text-slate-950 group-hover:text-blue-600 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Lower Section: Tech Stack Pill Trays & Deep Link */}
              <div className="space-y-5 pt-2">
                <div className="flex flex-wrap gap-1">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-[11px] font-bold">
                  <div>
                    <span className="text-slate-400 block font-medium text-[10px] uppercase tracking-wider">Client</span>
                    <span className="text-slate-800">{project.clientName}</span>
                  </div>
                  
                  <a
                    href={project.deepLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-2 bg-slate-50 hover:bg-blue-600 border border-slate-200/60 hover:border-blue-600 text-slate-700 hover:text-white rounded-lg transition-all duration-200 group/link"
                  >
                    Launch
                    <ArrowUpRight className="h-3.5 w-3.5 text-slate-400 group-hover/link:text-white transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Empty State Fallback */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 border border-dashed border-slate-200 rounded-2xl bg-slate-50/50">
            <Layers className="h-8 w-8 text-slate-300 mx-auto mb-2" />
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">No projects deployed under this category yet.</p>
          </div>
        )}

      </div>
    </section>
  );
}