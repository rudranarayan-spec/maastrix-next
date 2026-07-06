"use client";

import React from "react";
import { Scale, ShieldAlert, FileText, ArrowLeft, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export default function TermsAndConditions() {
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
              <Scale className="h-5 w-5" />
            </div>
            <span className="text-xs font-black uppercase tracking-widest text-blue-600">
              Legal Framework Documentation
            </span>
          </div>
          
          <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-950 mb-4">
            Terms and Conditions
          </h1>
          
          <p className="text-sm text-slate-500 leading-relaxed max-w-2xl font-medium">
            Please read these terms and conditions carefully. By accessing, viewing, or using the material and functionality on this service, you indicate that you understand and agree to be legally bound to them.
          </p>
        </div>

        {/* CORE CONTENT GRID */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-[0_10px_30px_rgba(0,0,0,0.02)] space-y-10">
          
          {/* INTRODUCTION */}
          <div className="prose prose-slate max-w-none">
            <p className="text-sm leading-relaxed text-slate-600 font-medium">
              The following &ldquo;Terms and Conditions&rdquo; govern the use of the web service,{" "}
              <span className="font-bold text-slate-950">maasinfotech24x7.com</span> or any other web service or site 
              owned and/or operated by <span className="font-bold text-slate-950">Maastrix Solutions Pvt. Ltd.</span>, 
              (the Service) and by accessing , viewing, or using the material and functionality on the service, you 
              indicate that you understand and intend these Terms and Conditions to be the legal equivalent of a signed, 
              written contract, and equally binding, and that you accept such Terms and Conditions and agree to be 
              legally bound to them. If you do not agree to these Terms and Conditions, you are not granted to use the 
              Service, and should exit immediately.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* SECTIONS */}
          <div className="space-y-8">
            
            {/* 1. Proprietary Law */}
            <section className="space-y-3">
              <h2 className="text-sm font-black uppercase tracking-widest text-slate-950 flex items-center gap-2">
                <span className="w-1.5 h-3.5 bg-blue-500 rounded-full" />
                Proprietary Law
              </h2>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-600 font-medium pl-3">
                All material contained in this Service is protected by law, including , but not limited to Indian 
                Copyright Act. Except as indicated, the entire content of Maastrix Solutions Pvt. Ltd. and its family 
                of services is (c) 2015 Maastrixsolutions | All Rights Reserved. Removing or altering the copyright 
                notice on any material on the service is prohibited. All trademarks used at this website that are not 
                intellectual property of Maastrix Solutuons are property of their respective holders.
              </p>
            </section>

            {/* 2. Communications With Our Web Services */}
            <section className="space-y-3">
              <h2 className="text-sm font-black uppercase tracking-widest text-slate-950 flex items-center gap-2">
                <span className="w-1.5 h-3.5 bg-blue-500 rounded-full" />
                Communications With Our Web Services
              </h2>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-600 font-medium pl-3">
                Maastrix Solutions Pvt. Ltd. welcomes your feedback and suggestions about how to improve our Services. 
                By transmitting any suggestion, information material or other content to Maastrix Solutions Pvt. Ltd., 
                you automatically grant Maastrix Solutions Pvt. Ltd. the royalty-free, perpetual, irrevocable, 
                non-exclusive rights and license to use, reproduce, modify, adapt, publish, translate, create 
                derivative work from, distribute, redistribute, transmit, perform and display such content(as a whole 
                or part) worldwide.
              </p>
            </section>

            {/* 3. Privacy Statement */}
            <section className="space-y-3">
              <h2 className="text-sm font-black uppercase tracking-widest text-slate-950 flex items-center gap-2">
                <span className="w-1.5 h-3.5 bg-blue-500 rounded-full" />
                Privacy Statement
              </h2>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-600 font-medium pl-3">
                Maastrix Solutions Pvt. Ltd. has a privacy policies disclosing what information we collect about 
                visitors, how we use such information, and steps we take to secure such information.
              </p>
            </section>

            {/* 4. Disclaimer of Warranty and Liability */}
            <section className="space-y-3">
              <h2 className="text-sm font-black uppercase tracking-widest text-slate-950 flex items-center gap-2">
                <span className="w-1.5 h-3.5 bg-blue-500 rounded-full" />
                Disclaimer of Warranty and Liability
              </h2>
              <div className="p-4 bg-amber-50/50 border border-amber-100 rounded-2xl space-y-2 ml-3">
                <p className="text-xs sm:text-sm leading-relaxed text-slate-600 font-medium">
                  Use of this service is entirely at your own risk. Neither Maastrix Solutions Pvt. Ltd. nor its 
                  affiliates is responsible for the consequences of reliance on any information contained in or 
                  submitted to the service, and the risk of injury from the foregoing rests entirely with you. 
                  These materials are provided &ldquo;as is&rdquo; without warranty of any kind, either express 
                  or implied.
                </p>
                <p className="text-xs sm:text-sm leading-relaxed text-slate-600 font-medium">
                  Maastrix Solutions Pvt. Ltd. shall not be liable for any direct, special, indirect, incidental, 
                  consequential, or punitive damages, including without limitation, lost revenues or lost profits, 
                  which may result from the use of, access to, or inability to use these materials. Under no 
                  circumstances will the total liability of Maastrix Solutions Pvt. Ltd. to you exceed the price 
                  paid for use of the service.
                </p>
              </div>
            </section>

            {/* 5. Corrections and Changes */}
            <section className="space-y-3">
              <h2 className="text-sm font-black uppercase tracking-widest text-slate-950 flex items-center gap-2">
                <span className="w-1.5 h-3.5 bg-blue-500 rounded-full" />
                Corrections and Changes
              </h2>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-600 font-medium pl-3">
                Maastrix Solutions Pvt. Ltd. futher does not warrent the accuracy or completeness of the information , 
                text, graphics, links or other items contained within this materials. Maastrix Solutions Pvt. Ltd. 
                may make change to these materials, or to the products and services described herein, at any time 
                without any notice, and makes no commitment to update the information contained herein.Maastrix 
                Solutions Pvt. Ltd. reserves the right to terminate the access to the website in the event that 
                you violate the, Terms and Conditions, for, whatever, reasons it maybe.
              </p>
            </section>

            {/* 6. Indemnification */}
            <section className="space-y-3">
              <h2 className="text-sm font-black uppercase tracking-widest text-slate-950 flex items-center gap-2">
                <span className="w-1.5 h-3.5 bg-blue-500 rounded-full" />
                Indemnification
              </h2>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-600 font-medium pl-3">
                You agree to defend, indemnify, and hold harmless Maastrix Solutions Pvt. Ltd., its affiliates and 
                subsidiaries, and all of their respective directors, officers, employees, representatives, proprietors, 
                partners, shareholders, servants, principals, agents, predecessors, successors, assigns, and 
                attorneys from and against any and all claims, proceedings, damages, injuries, liabilities, losses, 
                costs, and expenses (including attorney&rsquo;s fees and litigation expenses) relating to or arising 
                from your use of the Service and any breach by you of these Terms and Conditions.
              </p>
            </section>

            {/* 7. Links to Other Web Services */}
            <section className="space-y-3">
              <h2 className="text-sm font-black uppercase tracking-widest text-slate-950 flex items-center gap-2">
                <span className="w-1.5 h-3.5 bg-blue-500 rounded-full" />
                Links to Other Web Services
              </h2>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-600 font-medium pl-3">
                This Service may, from time to time, contain links to other Internet web services for the convenience 
                of users in locating one of our clients&rsquo; services, information, or services that may be of 
                interest. These services are maintained by organizations over which Maastrix Solutions Pvt. Ltd. 
                exercises no control, and Maastrix Solutions Pvt. Ltd. expressly disclaims any responsibility for the 
                content, the accuracy of the information and/or quality of products or services provided by or 
                advertised on these third-party services. Maastrix Solutions Pvt. Ltd. does not control, endorse, 
                promote, or have any affiliation with any other web service unless expressly stated herein.
              </p>
            </section>

            {/* 8. Governing Law and Jurisdiction */}
            <section className="space-y-3">
              <h2 className="text-sm font-black uppercase tracking-widest text-slate-950 flex items-center gap-2">
                <span className="w-1.5 h-3.5 bg-blue-500 rounded-full" />
                Governing Law and Jurisdiction
              </h2>
              <div className="space-y-3 pl-3 text-xs sm:text-sm leading-relaxed text-slate-600 font-medium">
                <p>
                  These Terms and Conditions will be governed by and construed in accordance with the laws of the State 
                  of Odisha, India without reference to its choice of law rules. By accessing, viewing, or using the 
                  material on the Service, you consent to the jurisdiction of the High Court and Supreme Court presiding 
                  in Odisha, India, and agree to accept service of process by mail and hereby waive any and all 
                  jurisdictional and venue defenses otherwise available.
                </p>
                <p>
                  This Service is controlled and operated by Maastrix Solutions Pvt. Ltd. from its offices within India. 
                  Maastrix Solutions Pvt. Ltd. makes no representation that materials in the Service are appropriate 
                  or available for use in other locations, and access to them from territories where their contents 
                  are illegal is prohibited. Those who choose to access this Service from other locations do so of 
                  their own volition and are responsible for compliance with applicable local laws.
                </p>
                <p className="bg-slate-50 border border-slate-100 rounded-xl p-4 text-slate-700 font-semibold">
                  These Terms and Conditions constitute the entire agreement between you and Maastrix Solutions Pvt. 
                  Ltd. with respect to your use of the Service. You acknowledge that, in providing you access to and 
                  use of the Service, Maastrix Solutions Pvt. Ltd. has relied on your agreement to be legally bound 
                  by these Terms and Conditions.
                </p>
              </div>
            </section>

          </div>

          <hr className="border-slate-100" />

          {/* CONTACT FOOTNOTE CARD */}
          <section className="p-6 sm:p-8 bg-slate-50 border border-slate-100 rounded-2xl space-y-4">
            <div className="flex items-center gap-2">
              <FileText className="h-4 w-4 text-blue-600" />
              <h2 className="text-xs font-black uppercase tracking-widest text-slate-950">
                Contact Information
              </h2>
            </div>
            
            <p className="text-xs sm:text-sm leading-relaxed text-slate-600 font-medium">
              Maastrix Solutions Pvt. Ltd. welcomes your comments regarding this Terms of Use, please contact us by e-mail, or postal mail.
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