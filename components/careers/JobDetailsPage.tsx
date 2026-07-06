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
  Link2,
  Terminal,
  AlertCircle,
  User,
  Mail,
  FileText
} from "lucide-react";
import { openPositions } from "@/data/careers";

export default function JobDetailsPage() {
  const params = useParams();
  const router = useRouter();

  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    portfolioUrl: "",
    coverLetter: "",
    resumeUrl: ""
  });

  // Resolve matching job target dynamically based on the URL parameter route
  const job = useMemo(() => {
    return openPositions.find((p) => p.id === params.id) || openPositions[0];
  }, [params.id]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");

    // Formulate a clean JSON payload for reliable execution over Web3Forms API
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "";
    
    const payload = {
      access_key: accessKey,
      subject: `[CAREERS] - New Application for ${job.title}`,
      "Target Role": job.title,
      "Engineering Division": job.department,
      "Full Name": formData.fullName,
      "Email Address": formData.email,
      "Portfolio / GitHub": formData.portfolioUrl,
      "Resume URL Link": formData.resumeUrl,
      "Cover Note / Details": formData.coverLetter
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (data.success) {
        setFormStatus("success");
      } else {
        setFormStatus("error");
      }
    } catch (err) {
      console.error("Submission pipeline exception caught:", err);
      setFormStatus("error");
    }
  };

  const resetFormState = () => {
    setFormData({ fullName: "", email: "", portfolioUrl: "", coverLetter: "", resumeUrl: "" });
    setFormStatus("idle");
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen text-slate-900 font-sans antialiased">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* =========================================================================
              LEFT COLUMN: SYSTEM REQUIREMENTS & EXPANDED DESCRIPTION
              ========================================================================= */}
          <div className="lg:col-span-7 space-y-8 bg-white border border-slate-200/60 rounded-3xl p-6 sm:p-8 shadow-sm">

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
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 bg-slate-100/80 px-3 py-1.5 rounded-xl border border-slate-200/40">
                  <MapPin className="h-3.5 w-3.5 text-slate-400" /> {job.location}
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 bg-slate-100/80 px-3 py-1.5 rounded-xl border border-slate-200/40">
                  <Clock className="h-3.5 w-3.5 text-slate-400" /> {job.type}
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 bg-slate-100/80 px-3 py-1.5 rounded-xl border border-slate-200/40">
                  <Award className="h-3.5 w-3.5 text-slate-400" /> {job.experience}
                </span>
              </div>
            </div>

            <hr className="border-slate-100" />

            {/* Paragraph Breakdown */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Role Blueprint</h3>
              <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                {job.longDescription}
              </p>
            </div>

            {/* Core Responsibilities Layout */}
            <div className="space-y-4">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Key Execution Directives</h3>
              <ul className="space-y-3">
                {job.responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Detailed Requirements Matrix */}
            <div className="space-y-4">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Required Technical Frameworks</h3>
              <ul className="space-y-3">
                {job.requirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0 mt-2.5" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Pills List */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Targeted Component Stack</h3>
              <div className="flex flex-wrap gap-2">
                {job.preferredStack.map((tech) => (
                  <span key={tech} className="text-xs font-bold text-slate-700 bg-slate-50 border border-slate-200/80 px-3 py-1.5 rounded-xl">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* =========================================================================
              RIGHT COLUMN: HIGH-CONVERSION URL INPUT SUBMISSION SIDEBAR
              ========================================================================= */}
          <div className="lg:col-span-5 bg-white border border-slate-200/60 rounded-3xl p-6 shadow-sm lg:sticky lg:top-24">
            {formStatus !== "success" ? (
              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div className="space-y-1">
                  <h2 className="text-lg font-black tracking-tight text-slate-950">
                    Apply For This Position
                  </h2>
                  <p className="text-xs text-slate-500 font-medium">
                    Provide your professional links to interface directly with our engineering division.
                  </p>
                </div>

                {/* Input Fields */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                    <User className="h-3 w-3" /> Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Rudranarayan Sahu"
                    className="w-full text-xs sm:text-sm px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all font-medium"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                    <Mail className="h-3 w-3" /> Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="you@example.com"
                    className="w-full text-xs sm:text-sm px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all font-medium"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                    <Link2 className="h-3 w-3" /> GitHub / Portfolio URL
                  </label>
                  <input
                    type="url"
                    name="portfolioUrl"
                    required
                    value={formData.portfolioUrl}
                    onChange={handleInputChange}
                    placeholder="https://github.com/yourprofile"
                    className="w-full text-xs sm:text-sm px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all font-medium"
                  />
                </div>

                {/* Secure URL Input Field replaces traditional complex local uploads */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                    <FileText className="h-3 w-3" /> Hosted Resume URL
                  </label>
                  <input
                    type="url"
                    name="resumeUrl"
                    required
                    value={formData.resumeUrl}
                    onChange={handleInputChange}
                    placeholder="https://drive.google.com/file/d/... or Dropbox link"
                    className="w-full text-xs sm:text-sm px-4 py-2.5 rounded-xl border border-blue-200 bg-blue-50/10 focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all font-medium placeholder:text-slate-400"
                  />
                  <span className="text-[10px] text-slate-400 font-medium block leading-normal px-0.5">
                    Ensure privacy permission parameters allow public discovery (e.g., &quot;Anyone with the link can view&quot;).
                  </span>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Cover Note & System Experience</label>
                  <textarea
                    name="coverLetter"
                    rows={4}
                    required
                    value={formData.coverLetter}
                    onChange={handleInputChange}
                    placeholder="Briefly detail your core system expertise and background..."
                    className="w-full text-xs sm:text-sm px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all resize-none font-medium"
                  />
                </div>

                {/* Friendly Client-Side Fallback Warning */}
                {formStatus === "error" && (
                  <div className="p-3 bg-amber-50 border border-amber-100 rounded-2xl flex items-start gap-2.5 text-amber-800 text-xs font-medium leading-relaxed shadow-sm">
                    <AlertCircle className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>We are experiencing network bottlenecks saving details to our primary pipe. Please re-verify fields or forward your portfolio endpoints directly via email.</span>
                  </div>
                )}

                {/* Corporate Theme Gradient Action Submit Button */}
                <button
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 disabled:from-slate-400 disabled:to-slate-400 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md shadow-blue-500/10 transition-all duration-200 disabled:cursor-not-allowed transform active:scale-[0.99]"
                >
                  {formStatus === "submitting" ? (
                    <span className="flex items-center gap-2">
                      <span className="h-3 w-3 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Transmitting Profile...
                    </span>
                  ) : (
                    <>
                      Submit Application
                      <Send className="h-3.5 w-3.5" />
                    </>
                  )}
                </button>
              </form>
            ) : (
              /* Success Callback State Confirmation Display Card */
              <div className="text-center py-8 px-4 space-y-5">
                <div className="mx-auto h-14 w-14 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center shadow-sm">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-black tracking-tight text-slate-950">Application Logged</h3>
                  <p className="text-xs text-slate-500 font-medium max-w-xs mx-auto leading-relaxed">
                    Thank you for reaching out, <span className="text-slate-800 font-bold">{formData.fullName}</span>. Our engineering review team has tracked your parameters for the <span className="text-slate-800 font-bold">{job.title}</span> architecture opening and will initialize connection parameters shortly.
                  </p>
                </div>
                <button
                  onClick={resetFormState}
                  className="text-xs font-bold text-blue-600 hover:text-blue-700 hover:underline transition-colors bg-blue-50/50 px-4 py-2 rounded-xl"
                >
                  Submit another response
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}