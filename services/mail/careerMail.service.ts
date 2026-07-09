import { sendMail } from "@/lib/mail";

export async function sendCareerMail(data: {
  name: string;
  email: string;
  phone?: string;
  message?: string;
  position?: string;
  experience?: string;
  portfolio?: string;
}) {
  return sendMail({
    to: process.env.CAREER_EMAIL_TO!,
    replyTo: data.email,
    subject: `[Career Application] ${data.name}`,
    html: `
      <h2>Career Application</h2>
      <p><b>Name:</b> ${data.name}</p>
      <p><b>Email:</b> ${data.email}</p>
      <p><b>Phone:</b> ${data.phone || "Not provided"}</p>
      <hr />
      <h3>Career Details</h3>
      <p><b>Position:</b> ${data.position || "Not provided"}</p>
      <p><b>Experience:</b> ${data.experience || "Not provided"}</p>
      <p><b>Portfolio/CV:</b> ${data.portfolio || "Not provided"}</p>
      <hr />
      <p><b>Message:</b></p>
      <p>${data.message || "No message provided"}</p>
    `,
  });
}