"use client";

import React, { useState, useMemo } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  ArrowLeft,
  MapPin,
  Clock,
  Award,
  CheckCircle2,
  Send,
  Paperclip,
  Terminal
} from "lucide-react";
import { openPositions } from "@/data/careers";

export default function JobDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    portfolioUrl: "",
    coverLetter: ""
  });

  // Resolve matching job target dynamically based on the URL parameter route
  const job = useMemo(() => {
    return openPositions.find((p) => p.id === params.id) || openPositions[0];
  }, [params.id]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Insert submission handler / API layer logic here
    setFormSubmitted(true);
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen text-slate-900 font-sans antialiased">

      {/* Top Navigation Strip Context Header */}


      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* =========================================================================
              LEFT COLUMN: EXPANDED SYSTEM REQUIREMENTS & DESCRIPTION
              ========================================================================= */}
          <div className="lg:col-span-7 space-y-8 bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-sm">

            {/* Header Identity Capsule */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100">
                <Terminal className="h-3.5 w-3.5 text-blue-600" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600">
                  {job.department} Team vacancy
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-950">
                {job.title}
              </h1>

              {/* Pill Tags Row */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <span className="inline-flex items-center gap-1 text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-lg">
                  <MapPin className="h-3.5 w-3.5 text-slate-400" /> {job.location}
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-lg">
                  <Clock className="h-3.5 w-3.5 text-slate-400" /> {job.type}
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-lg">
                  <Award className="h-3.5 w-3.5 text-slate-400" /> {job.experience}
                </span>
              </div>
            </div>

            <hr className="border-slate-100" />

            {/* Paragraph Breakdown */}
            <div className="space-y-3">
              <h3 className="text-sm font-black text-slate-950 uppercase tracking-wider">Role Blueprint</h3>
              <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                {job.longDescription}
              </p>
            </div>

            {/* Core Responsibilities Layout */}
            <div className="space-y-4">
              <h3 className="text-sm font-black text-slate-950 uppercase tracking-wider">Key Execution Directives</h3>
              <ul className="space-y-3">
                {job.responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Detailed Requirements Matrix */}
            <div className="space-y-4">
              <h3 className="text-sm font-black text-slate-950 uppercase tracking-wider">Required Technical Frameworks</h3>
              <ul className="space-y-3">
                {job.requirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                    <div className="h-1.5 w-1.5 rounded-full bg-slate-400 shrink-0 mt-2" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Pills List */}
            <div className="space-y-3">
              <h3 className="text-sm font-black text-slate-950 uppercase tracking-wider">Targeted Component Stack</h3>
              <div className="flex flex-wrap gap-2">
                {job.preferredStack.map((tech) => (
                  <span key={tech} className="text-xs font-bold text-slate-800 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* =========================================================================
              RIGHT COLUMN: INTEGRATED SECURE SUBMISSION FORM SIDEBAR
              ========================================================================= */}
          <div className="lg:col-span-5 bg-white border border-slate-200/80 rounded-3xl p-6 shadow-sm sticky top-24">
            {!formSubmitted ? (
              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div className="space-y-1">
                  <h2 className="text-lg font-black tracking-tight text-slate-950">
                    Apply For This Position
                  </h2>
                  <p className="text-xs text-slate-500 font-medium">
                    Submit your details below to interface directly with our engineering division.
                  </p>
                </div>

                {/* Input Fields */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-black uppercase tracking-wider text-slate-700">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Rudranarayan Sahu"
                    className="w-full text-xs sm:text-sm px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-black uppercase tracking-wider text-slate-700">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="you@maastrixsolutions.com"
                    className="w-full text-xs sm:text-sm px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-black uppercase tracking-wider text-slate-700">GitHub / Portfolio URL</label>
                  <input
                    type="url"
                    name="portfolioUrl"
                    required
                    value={formData.portfolioUrl}
                    onChange={handleInputChange}
                    placeholder="https://github.com/yourprofile"
                    className="w-full text-xs sm:text-sm px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-black uppercase tracking-wider text-slate-700">Cover Note & System Experience</label>
                  <textarea
                    name="coverLetter"
                    rows={4}
                    required
                    value={formData.coverLetter}
                    onChange={handleInputChange}
                    placeholder="Briefly detail your architectural strength with production middleware systems..."
                    className="w-full text-xs sm:text-sm px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all resize-none"
                  />
                </div>

                {/* Mock Document File Attach Hook */}
                <div className="border-2 border-dashed border-slate-200 bg-slate-50 rounded-xl p-4 text-center cursor-pointer hover:bg-slate-100/50 hover:border-blue-500/40 transition-colors group">
                  <div className="flex flex-col items-center gap-1">
                    <Paperclip className="h-4 w-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                    <span className="text-xs font-bold text-slate-700">Attach Resume / CV</span>
                    <span className="text-[10px] text-slate-400 font-medium">PDF, DOCX up to 5MB</span>
                  </div>
                </div>

                {/* Corporate Theme Gradient Action Submit Button */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-black text-xs uppercase tracking-wider rounded-xl shadow-md transition-all duration-200 hover:scale-[1.01]"
                >
                  Transmit Application
                  <Send className="h-3.5 w-3.5" />
                </button>
              </form>
            ) : (
              /* Success Callback State Confirmation Display Card */
              <div className="text-center py-8 space-y-4">
                <div className="mx-auto h-12 w-12 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-base font-black text-slate-950">Transmission Successful</h3>
                  <p className="text-xs text-slate-500 font-medium max-w-xs mx-auto leading-relaxed">
                    Thank you for applying, {formData.fullName}. Our systems architecture team has logged your profile parameters and will reach out shortly.
                  </p>
                </div>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="text-xs font-bold text-blue-600 hover:underline"
                >
                  Submit another file
                </button>
              </div>
            )}
          </div>

        </div>
      </div>

    </div>
  );
}