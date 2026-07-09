"use server";

import { sendContactMail } from "@/services/mail/contactMail.service";
import { ContactMailPayload } from "@/types/mail";

export async function sendContactMailAction(data: ContactMailPayload) {
  try {
    if (!data.name.trim() || !data.email.trim()) {
      return {
        success: false,
        message: "Name and email are required.",
      };
    }

    await sendContactMail(data);

    return {
      success: true,
      message: "Contact request sent successfully.",
    };
  } catch (error) {
    console.error("Contact mail action error:", error);

    return {
      success: false,
      message: "Unable to send contact request.",
    };
  }
}
