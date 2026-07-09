"use client";

import React from "react";
import JobDetailHero from "@/components/careers/JobDetailHero";
import JobDetailsPage from "@/components/careers/JobDetailsPage";
import { JobPosition } from "@/data/careers"; // Explicitly target your new interface
import Navbar from "@/components/layout/Navbar";

interface JobDetailClientProps {
  activeJob: JobPosition;
}

export default function JobDetailClient({ activeJob }: JobDetailClientProps) {
  return (
    <div className="w-full bg-slate-50 min-h-screen">
      {/* Both sub-components now receive perfectly structured data schema context */}
      <Navbar isTransparent={true} />
      <JobDetailHero job={activeJob} />
      <JobDetailsPage job={activeJob} />
    </div>
  );
}