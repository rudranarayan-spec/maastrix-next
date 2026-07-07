"use client";

import React, { useMemo } from "react";
import JobDetailHero from "@/components/careers/JobDetailHero";
import JobDetailsPage from "@/components/careers/JobDetailsPage";
import { openPositions } from "@/data/careers";

interface ClientProps {
  initialJob: typeof openPositions[0];
}

export default function JobDetailPageClient({ initialJob }: ClientProps) {
  // Graceful fallback to initial data, still reactive if needed on client side
  const activeJob = useMemo(() => {
    return initialJob || openPositions[0];
  }, [initialJob]);

  return (
    <main className="w-full bg-slate-50 min-h-screen">
      {/* Semantic structural markup signaling a distinct job posting card to crawlers */}
      <article itemScope itemType="https://schema.org/JobPosting">
        
        {/* Pass the retrieved dynamic job data directly into your hero component */}
        <JobDetailHero job={activeJob} />
        
        {/* Pass it down or let JobDetailsPage handle the split layout matrix */}
        <JobDetailsPage />
        
      </article>
    </main>
  );
}