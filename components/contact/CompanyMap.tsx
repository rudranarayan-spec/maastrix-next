"use client";

import React from "react";
import { MapPin, Navigation, Phone, ExternalLink } from "lucide-react";

export default function CompanyMap() {
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.10888261588!2d85.827229!3d20.295759800000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909c288ce88b3%3A0xe55da71d4e1fc078!2sMAASTRIX%20SOLUTIONS%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1783331529262!5m2!1sen!2sin";
  const googleMapsDirectionsUrl = 
    "https://maps.app.goo.gl/wiKHPStiAbi8T9pz6"; // Direct share link for navigation devices

  return (
    <section className="w-full bg-slate-50 text-slate-900 py-16 lg:py-24 overflow-hidden border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full space-y-12">
        
        {/* Section Heading Context */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white border border-slate-200 shadow-sm">
            <MapPin className="h-3.5 w-3.5 text-blue-600" />
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">
              Corporate Headquarters
            </span>
          </div>
          <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
            Visit Our Engineering Hub
          </h2>
          <p className="text-sm text-slate-500 max-w-xl mx-auto font-medium">
            Stop by our main operations headquarters to sync face-to-face with our technical core architect squads on infrastructure design briefs.
          </p>
        </div>

        {/* Outer Interactive Container */}
        <div className="relative w-full h-[450px] lg:h-[550px] rounded-3xl overflow-hidden border border-slate-200 bg-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] group">
          
          {/* =========================================================================
              IFRAME ENGINE LAYER
              ========================================================================= */}
          <iframe
            title="Maastrix Solutions Location Map"
            src={mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            /* NOTE: If you ever want this map to appear in a stylized dark-grey matrix view 
               to match your dark components, simply add the following Tailwind class: 
               className="grayscale invert contrast-[90%] brightness-[95%]" */
            className="w-full h-full transition-all duration-500 group-hover:scale-[1.005]"
          />

          {/* =========================================================================
              FLOATING ADDRESS FLOOD CARD (Matches data from image_cef5c3.jpg)
              ========================================================================= */}
          <div className="absolute top-4 left-4 right-4 sm:right-auto sm:w-[360px] p-5 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-xl pointer-events-auto space-y-4 transition-all duration-300 hover:bg-white">
            <div className="space-y-1.5">
              <h3 className="text-sm font-black tracking-tight text-slate-950 uppercase">
                Maastrix Solutions Pvt. Ltd.
              </h3>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                3rd Floor, TRWG+7VX MBM Silver, L3- 60, Acharya Vihar,<br />
                Bhubaneswar, Odisha 751013
              </p>
            </div>

            <div className="h-[1px] w-full bg-slate-200" />

            {/* Quick Contact & Action Nodes */}
            <div className="space-y-2">
              <div className="flex items-center gap-2.5 text-[11px] font-bold text-slate-600">
                <Phone className="h-3.5 w-3.5 text-blue-600 shrink-0" />
                <span>+91 674 - Contact Operations</span>
              </div>
            </div>

            {/* Navigation Execution Bar */}
            <div className="pt-1">
              <a
                href={googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-950 hover:bg-blue-600 text-white text-[11px] font-black uppercase tracking-widest rounded-xl shadow-md transition-all duration-200 group/btn"
              >
                <Navigation className="h-3.5 w-3.5 fill-white group-hover/btn:animate-pulse" />
                Get Directions
                <ExternalLink className="h-3 w-3 opacity-60 ml-0.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}