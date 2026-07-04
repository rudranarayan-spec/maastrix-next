"use client";

import React, { useMemo } from "react";
import { useParams } from "next/navigation";
import JobDetailHero from "@/components/careers/JobDetailHero";
import JobDetailsPage from "@/components/JobDetailsPage";
import { openPositions } from "@/data/careers";

export default function JobDetailPageWrapper() {
  const params = useParams();

  // Dynamically extract the targeted job data based on the URL parameter ID
  const activeJob = useMemo(() => {
    return openPositions.find((p) => p.id === params.id) || openPositions[0];
  }, [params.id]);

  return (
    <div className="w-full bg-slate-50 min-h-screen">
      {/* Pass the retrieved dynamic job data directly into your hero component */}
      <JobDetailHero job={activeJob} />
      
      {/* Pass it down or let JobDetailsPage handle the split layout matrix */}
      <JobDetailsPage />
    </div>
  );
}