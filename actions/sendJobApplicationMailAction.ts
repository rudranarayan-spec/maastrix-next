"use server";

import {
  sendJobApplicationMail,
  JobApplicationMailPayload,
} from "@/services/mail/jobApplicationMail.service";

export async function sendJobApplicationMailAction(
  data: JobApplicationMailPayload
) {
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