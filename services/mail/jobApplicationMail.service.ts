import { sendMail } from "@/lib/mail";

export type JobApplicationMailPayload = {
  fullName: string;
  email: string;
  portfolioUrl?: string;
  resumeUrl?: string;
  coverLetter?: string;

  position: string;
  department: string;
  location: string;
  experience: string;
  employmentType: string;
};

export async function sendJobApplicationMail(
  data: JobApplicationMailPayload
) {
  return sendMail({
    to: process.env.CAREER_EMAIL_TO!,
    replyTo: data.email,
    subject: `[Job Application] ${data.fullName} - ${data.position}`,
    html: `
      <div style="font-family: Arial, sans-serif; color: #0f172a; line-height: 1.6;">
        <h2>New Job Application</h2>

        <h3>Candidate Information</h3>
        <p><strong>Name:</strong> ${data.fullName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Portfolio / GitHub:</strong> ${data.portfolioUrl || "Not provided"}</p>
        <p><strong>Resume URL:</strong> ${data.resumeUrl || "Not provided"}</p>
        <h3>Cover Note</h3>
        <p>${data.coverLetter || "No cover note provided."}</p>

        <hr />

        <h3>Applied Position</h3>
        <p><strong>Position:</strong> ${data.position}</p>
        <p><strong>Department:</strong> ${data.department}</p>
        <p><strong>Location:</strong> ${data.location}</p>
        <p><strong>Experience:</strong> ${data.experience}</p>
        <p><strong>Employment Type:</strong> ${data.employmentType}</p>

        <hr />
      </div>
    `,
  });
}