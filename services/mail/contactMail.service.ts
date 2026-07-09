import { sendMail } from "@/lib/mail";

export async function sendContactMail(data: {
  name: string;
  email: string;
  phone?: string;
  address?: string;
  message?: string;
  preferredContact?: string;
}) {
  return sendMail({
    to: process.env.CONTACT_EMAIL_TO!,
    replyTo: data.email,
    subject: `[Contact Inquiry] ${data.name}`,
    html: `
      <h2>Contact Inquiry</h2>
      <p><b>Name:</b> ${data.name}</p>
      <p><b>Email:</b> ${data.email}</p>
      <p><b>Phone:</b> ${data.phone || "Not provided"}</p>
      <p><b>Address:</b> ${data.address || "Not provided"}</p>
      <p><b>Preferred Contact:</b> ${data.preferredContact || "email"}</p>
      <hr />
      <p><b>Message:</b></p>
      <p>${data.message || "No message provided"}</p>
    `,
  });
}