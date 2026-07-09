"use server";

import { sendQuoteMail } from "@/services/mail/quoteMail.service";
import { QuoteMailPayload } from "@/types/mail";

export async function sendQuoteMailAction(data: QuoteMailPayload) {
  try {
    if (!data.name.trim() || !data.email.trim()) {
      return {
        success: false,
        message: "Name and email are required.",
      };
    }

    await sendQuoteMail(data);

    return {
      success: true,
      message: "Quote request sent successfully.",
    };
  } catch (error) {
    console.error("Quote mail action error:", error);

    return {
      success: false,
      message: "Unable to send quote request.",
    };
  }
}
