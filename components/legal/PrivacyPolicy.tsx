"use client";

import React from "react";
import { ShieldCheck, Eye, Lock, ArrowLeft, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans antialiased text-slate-700 pt-32 pb-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        
        {/* BACK TO HOME NAV */}
        <div className="mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-blue-600 transition-colors duration-200"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to Home
          </Link>
        </div>

        {/* PAGE HEADER */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-[0_10px_30px_rgba(0,0,0,0.02)] mb-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl border border-blue-100/50">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <span className="text-xs font-black uppercase tracking-widest text-blue-600">
              Data Protection & Privacy
            </span>
          </div>
          
          <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-950 mb-4">
            Privacy Policy
          </h1>
          
          <p className="text-sm text-slate-500 leading-relaxed max-w-2xl font-medium">
            This privacy policy discloses what information Maastrix Solutions Pvt. Ltd. collects about visitors across maasinfotech24x7.com and its family of services, how we use such information, and the steps we take to secure it.
          </p>
        </div>

        {/* CORE CONTENT GRID */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-[0_10px_30px_rgba(0,0,0,0.02)] space-y-10">
          
          {/* INTRODUCTION */}
          <div className="prose prose-slate max-w-none">
            <p className="text-sm leading-relaxed text-slate-600 font-medium">
              By accessing, viewing, or using the web service, <span className="font-bold text-slate-950">maasinfotech24x7.com</span> or any other web service or site owned and/or operated by <span className="font-bold text-slate-950">Maastrix Solutions Pvt. Ltd.</span> (the Service), you acknowledge that you have read and understood this Privacy Policy. This policy complements our Terms and Conditions and details our commitment to managing your personal data responsibly. If you do not agree with the data practices described herein, you should exit the Service immediately.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* SECTIONS */}
          <div className="space-y-8">
            
            {/* 1. Information We Collect */}
            <section className="space-y-3">
              <h2 className="text-sm font-black uppercase tracking-widest text-slate-950 flex items-center gap-2">
                <span className="w-1.5 h-3.5 bg-blue-500 rounded-full" />
                1. Information We Collect
              </h2>
              <div className="text-xs sm:text-sm leading-relaxed text-slate-600 font-medium pl-3 space-y-3">
                <p>
                  To provide an effective ecosystem, we collect information that helps us optimize user interaction. This falls into two distinct categories:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-2 text-slate-600">
                  <li><span className="font-bold text-slate-950">Voluntary Information:</span> Information you actively transmit when submitting feedback, suggestions, newsletter subscriptions, or direct inquiries through our contact endpoints.</li>
                  <li><span className="font-bold text-slate-950">Automated Web Data:</span> Standard device, connection, and browser behavioral metrics collected automatically when navigating our web services.</li>
                </ul>
              </div>
            </section>

            {/* 2. How We Use Your Information */}
            <section className="space-y-3">
              <h2 className="text-sm font-black uppercase tracking-widest text-slate-950 flex items-center gap-2">
                <span className="w-1.5 h-3.5 bg-blue-500 rounded-full" />
                2. How We Use Your Information
              </h2>
              <div className="text-xs sm:text-sm leading-relaxed text-slate-600 font-medium pl-3 space-y-3">
                <p>
                  The data collected through our service infrastructure is utilized to maintain operations, evaluate metrics, and scale system capacity. Specific deployments include:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-2 text-slate-600">
                  <li>Processing, refining, and acting upon corporate user feedback or engineering suggestions.</li>
                  <li>Distributing voluntary operational updates or requested newsletter information.</li>
                  <li>Ensuring system protection and taking measures to secure infrastructure logs against malicious usage vectors or policy violations.</li>
                </ul>
              </div>
            </section>

            {/* 3. Feedback and Content Submissions */}
            <section className="space-y-3">
              <h2 className="text-sm font-black uppercase tracking-widest text-slate-950 flex items-center gap-2">
                <span className="w-1.5 h-3.5 bg-blue-500 rounded-full" />
                3. Feedback and Content Submissions
              </h2>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-600 font-medium pl-3">
                As established in our Terms and Conditions, any feedback, suggestion, informational material, or other content transmitted to Maastrix Solutions Pvt. Ltd. is granted under a royalty-free, perpetual, irrevocable, non-exclusive worldwide license. Please note that such submissions are handled as non-confidential data and may be utilized, adapted, or displayed publicly to improve our services.
              </p>
            </section>

            {/* 4. Infrastructure Security Measures */}
            <section className="space-y-3">
              <h2 className="text-sm font-black uppercase tracking-widest text-slate-950 flex items-center gap-2">
                <span className="w-1.5 h-3.5 bg-blue-500 rounded-full" />
                4. Infrastructure Security Measures
              </h2>
              <div className="p-4 bg-blue-50/30 border border-blue-100 rounded-2xl space-y-2 ml-3">
                <p className="text-xs sm:text-sm leading-relaxed text-slate-700 font-medium">
                  Maastrix Solutions Pvt. Ltd. implements strict security strategies designed to protect your personal information from unauthorized access, loss, alternation, or disclosure. 
                </p>
                <p className="text-xs sm:text-sm leading-relaxed text-slate-600 font-medium">
                  However, please be advised that while we take rigorous steps to secure our digital workspace, no internet data transmission or storage architecture can be guaranteed as entirely immune to risk. Use of our services remains at your own risk.
                </p>
              </div>
            </section>

            {/* 5. Outbound Links to Client & Third-Party Sites */}
            <section className="space-y-3">
              <h2 className="text-sm font-black uppercase tracking-widest text-slate-950 flex items-center gap-2">
                <span className="w-1.5 h-3.5 bg-blue-500 rounded-full" />
                5. Outbound Links to Third-Party Services
              </h2>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-600 font-medium pl-3">
                Our web services contain links to other internet platforms to make it convenient to locate our clients&rsquo; services or related professional items. These external platforms are maintained by third-party organizations over which Maastrix Solutions Pvt. Ltd. exercises no authority. We disclaim any responsibility for their individual data processing operations, privacy configurations, or content delivery methods. We encourage you to evaluate the privacy statements of those specific web services when exiting ours.
              </p>
            </section>

            {/* 6. Jurisdiction & Legal Framework */}
            <section className="space-y-3">
              <h2 className="text-sm font-black uppercase tracking-widest text-slate-950 flex items-center gap-2">
                <span className="w-1.5 h-3.5 bg-blue-500 rounded-full" />
                6. Jurisdiction and Legal Framework
              </h2>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-600 font-medium pl-3">
                This Privacy Policy is governed by and construed in accordance with the laws of the State of Odisha, India, aligning directly with the legal frameworks regulating our overall operations. Any disputes concerning data privacy or information security operations are subject exclusively to the jurisdiction of the High Court and Supreme Court presiding in Odisha, India.
              </p>
            </section>

            {/* 7. Changes to This Privacy Statement */}
            <section className="space-y-3">
              <h2 className="text-sm font-black uppercase tracking-widest text-slate-950 flex items-center gap-2">
                <span className="w-1.5 h-3.5 bg-blue-500 rounded-full" />
                7. Changes to This Privacy Statement
              </h2>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-600 font-medium pl-3">
                Maastrix Solutions Pvt. Ltd. reserves the right to make changes, corrections, or updates to this Privacy Policy at any time without prior notice to reflect operational adjustments or legal updates. Your continued use of the Service following modifications indicates an acceptance of the revised privacy terms.
              </p>
            </section>

          </div>

          <hr className="border-slate-100" />

          {/* CONTACT FOOTNOTE CARD */}
          <section className="p-6 sm:p-8 bg-slate-50 border border-slate-100 rounded-2xl space-y-4">
            <div className="flex items-center gap-2">
              <Lock className="h-4 w-4 text-blue-600" />
              <h2 className="text-xs font-black uppercase tracking-widest text-slate-950">
                Privacy Contact Information
              </h2>
            </div>
            
            <p className="text-xs sm:text-sm leading-relaxed text-slate-600 font-medium">
              If you have any questions, concerns, or requests regarding this Privacy Policy or your data, please contact our team via e-mail or postal mail.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="flex gap-3 items-start">
                <MapPin className="h-4 w-4 text-slate-400 shrink-0 mt-0.5" />
                <p className="text-xs font-semibold text-slate-700 leading-normal">
                  Maastrix Solutions Pvt. Ltd. <br />
                  Plot no: L3/60, Third Floor, <br />
                  MBM Silver Building, Acharya Vihar, <br />
                  Bhubaneswar - 751013, Odisha, India.
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <Mail className="h-4 w-4 text-slate-400 shrink-0" />
                <a 
                  href="mailto:info@maastrixsolutions.com" 
                  className="text-xs font-bold text-blue-600 hover:underline"
                >
                  info@maastrixsolutions.com
                </a>
              </div>
            </div>
          </section>

        </div>

      </div>
    </div>
  );
}