import { sendMail } from "@/lib/mail";

export async function sendQuoteMail(data: {
  name: string;
  email: string;
  phone?: string;
  address?: string;
  country?: string;
  message?: string;
  preferredContact?: string;
  serviceRequired?: string;
  budget?: string;
  timeline?: string;
}) {
  return sendMail({
    to: process.env.QUOTE_EMAIL_TO!,
    replyTo: data.email,
    subject: `[Project Quote] ${data.name}`,
    html: `
      <h2>Project / Quote Inquiry</h2>
      <p><b>Name:</b> ${data.name}</p>
      <p><b>Email:</b> ${data.email}</p>
      <p><b>Phone:</b> ${data.phone || "Not provided"}</p>
      <p><b>Country / Region:</b> ${data.country || "Not provided"}</p>
      <p><b>Preferred Contact:</b> ${data.preferredContact || "email"}</p>
      <hr />
      <h3>Project Details</h3>
      <p><b>Service Required:</b> ${data.serviceRequired || "Not provided"}</p>
      <p><b>Budget:</b> ${data.budget || "Not provided"}</p>
      <p><b>Timeline:</b> ${data.timeline || "Not provided"}</p>
      <hr />
      <p><b>Message:</b></p>
      <p>${data.message || "No message provided"}</p>
    `,
  });
}