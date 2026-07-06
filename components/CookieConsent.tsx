"use client";

import React, { useState, useEffect } from "react";
import { ShieldCheck, Settings, Check } from "lucide-react";

interface CookieSettingItem {
  key: "analytics" | "performance" | "functional" | "marketing";
  title: string;
  description: string;
  required?: boolean;
}

export default function CookieConsent() {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: true,
    performance: true,
    functional: true,
    marketing: false,
  });

  useEffect(() => {
    const storedConsent = localStorage.getItem("corporate_cookie_consent");
    if (!storedConsent) {
      // 1. Mount to DOM after 2 seconds
      const mountTimer = setTimeout(() => {
        setMounted(true);
      }, 2000);
      
      return () => clearTimeout(mountTimer);
    }
  }, []);

  // 2. Watch for mounting, then trigger the slide animation on the next browser frame
  useEffect(() => {
    if (mounted) {
      const animationFrame = requestAnimationFrame(() => {
        setIsVisible(true);
      });
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [mounted]);

  const handleAcceptAll = () => {
    const allAccepted = { necessary: true, analytics: true, performance: true, functional: true, marketing: true };
    localStorage.setItem("corporate_cookie_consent", JSON.stringify(allAccepted));
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    const allRejected = { necessary: true, analytics: false, performance: false, functional: false, marketing: false };
    localStorage.setItem("corporate_cookie_consent", JSON.stringify(allRejected));
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem("corporate_cookie_consent", JSON.stringify(preferences));
    setIsVisible(false);
  };

  if (!mounted) return null;

  const cookieMatrix: CookieSettingItem[] = [
    { key: "analytics", title: "Analytics & Telemetry", description: "Anonymized system performance auditing and traffic diagnostics metrics mapping." },
    { key: "performance", title: "Performance Trackers", description: "Monitors processing response latency to optimize overall UX compute parameters." },
    { key: "functional", title: "Functional Memory", description: "Preserves user-defined persistent layouts, interface choices, and application state metrics." },
    { key: "marketing", title: "Enterprise Marketing", description: "Coordinates contextual communications sync pipelines with verified downstream campaign nodes." },
  ];

  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 z-50 w-full bg-white border-t border-slate-200 shadow-[0_-10px_40px_rgba(0,0,0,0.06)] font-sans transform transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-auto ${
        isVisible 
          ? "translate-y-0 opacity-100" 
          : "translate-y-full opacity-0"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-6 sm:py-8 space-y-6">
        
        {/* =========================================================================
            TOP LAYER: CORE META & TOP-LEVEL CTA ACTIONS
            ========================================================================= */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 lg:gap-12">
          
          {/* Header & Main Core Description Context */}
          <div className="space-y-3 max-w-3xl">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-blue-50 text-blue-600 rounded-md border border-blue-100/50">
                <ShieldCheck className="h-4 w-4" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                Privacy Architecture Statement
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-black tracking-tight text-slate-950">
              We Value Your Data Sovereignty & System Transparency
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
              Our infrastructure processes telemetry cookies to secure session integrity frameworks, measure execution performance matrices, and deliver optimized backend integrations. You can review and adjust your explicit preference schemas below at any time.
            </p>
          </div>

          {/* Primary Operations Management Buttons Panel */}
          <div className="flex flex-col sm:flex-row items-center gap-2.5 shrink-0 w-full lg:w-auto pt-2 lg:pt-0">
            <button
              onClick={() => setShowSettings(!showSettings)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-950 text-[11px] font-black uppercase tracking-widest rounded-xl transition-all duration-200"
            >
              <Settings className={`h-3.5 w-3.5 ${showSettings ? "rotate-45" : ""} transition-transform duration-300`} />
              {showSettings ? "Hide Settings" : "Cookie Settings"}
            </button>
            
            <button
              onClick={handleRejectAll}
              className="w-full sm:w-auto px-5 py-3 border border-transparent bg-slate-100 hover:bg-slate-200 text-slate-900 text-[11px] font-black uppercase tracking-widest rounded-xl transition-all duration-200"
            >
              Reject All
            </button>
            
            <button
              onClick={handleAcceptAll}
              className="w-full sm:w-auto px-6 py-3 bg-slate-950 hover:bg-blue-600 text-white text-[11px] font-black uppercase tracking-widest rounded-xl shadow-md transition-all duration-200 active:scale-[0.99]"
            >
              Accept All
            </button>
          </div>
        </div>

        {/* =========================================================================
            EXPANDABLE DRAWER: GRANULAR COMPLIANCE PREFERENCES MATRIX
            ========================================================================= */}
        {showSettings && (
          <div className="pt-6 border-t border-slate-200/60 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 animate-in fade-in slide-in-from-top-4 duration-300">
            
            {/* Core Required Baseline Box */}
            <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl flex flex-col justify-between gap-3">
              <div className="space-y-1">
                <span className="text-xs font-black text-slate-950 block uppercase tracking-tight">Essential Base</span>
                <p className="text-[11px] text-slate-400 font-medium leading-normal">
                  Guarantees system operational routing security and baseline user state persistence matrices.
                </p>
              </div>
              <div className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-1 rounded-md self-start border border-blue-100/50">
                <Check className="h-3 w-3" /> Mandatory
              </div>
            </div>

            {/* Dynamic Iterated Preferences Columns */}
            {cookieMatrix.map((item) => (
              <label 
                key={item.key}
                className={`p-4 border rounded-2xl flex flex-col justify-between gap-3 cursor-pointer transition-all duration-200 select-none ${
                  preferences[item.key] 
                    ? "bg-white border-blue-500 shadow-sm shadow-blue-500/5" 
                    : "bg-slate-50/50 border-slate-200/80 opacity-75 hover:opacity-100 hover:border-slate-300"
                }`}
              >
                <div className="space-y-1">
                  <span className="text-xs font-black text-slate-950 block uppercase tracking-tight">{item.title}</span>
                  <p className="text-[11px] text-slate-400 font-medium leading-normal">{item.description}</p>
                </div>
                
                <div className="flex items-center justify-between pt-1">
                  <span className={`text-[10px] font-black uppercase tracking-wider transition-colors duration-200 ${preferences[item.key] ? "text-blue-600" : "text-slate-400"}`}>
                    {preferences[item.key] ? "Authorized" : "Deactivated"}
                  </span>
                  <input 
                    type="checkbox"
                    checked={preferences[item.key]}
                    onChange={(e) => setPreferences({ ...preferences, [item.key]: e.target.checked })}
                    className="h-4 w-4 rounded text-blue-600 focus:ring-blue-500 border-slate-300 accent-blue-600 cursor-pointer"
                  />
                </div>
              </label>
            ))}

            {/* Save Action Node Box */}
            <div className="md:col-span-2 lg:col-span-5 flex justify-end pt-2">
              <button
                onClick={handleSavePreferences}
                className="w-full sm:w-auto px-5 py-2.5 bg-slate-950 hover:bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest rounded-xl transition-all duration-200 shadow-sm"
              >
                Save My Preferences
              </button>
            </div>
            
          </div>
        )}

      </div>
    </div>
  );
}