"use server";

import {
  sendJobApplicationMail,
  JobApplicationMailPayload,
} from "@/services/mail/jobApplicationMail.service";
import { headers } from "next/headers";

export async function sendJobApplicationMailAction(
  data: JobApplicationMailPayload,
  token: string
) {
  const ip = (await headers()).get("x-forwarded-for") || "unknown";

  const verifyRes = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      body: `secret=${process.env.TURNSTILE_SECRET_KEY}&response=${token}&remoteip=${ip}`,
      headers: { "content-type": "application/x-www-form-urlencoded" },
    }
  );

  const verifyData = await verifyRes.json();

  if (!verifyData.success) {
    return {
      success: false,
      message: "Verification failed. Please try again.",
    };
  }

  // 2. Proceed with business logic
  try {
    if (!data.fullName.trim() || !data.email.trim()) {
      return {
        success: false,
        message: "Name and email are required.",
      };
    }

    await sendJobApplicationMail(data);

    return {
      success: true,
      message: "Application submitted successfully.",
    };
  } catch (error) {
    console.error("Job application mail action error:", error);

    return {
      success: false,
      message: "Unable to submit application.",
    };
  }
}