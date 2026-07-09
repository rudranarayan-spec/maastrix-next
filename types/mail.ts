export interface ContactMailPayload {
  name: string;
  email: string;
  phone?: string;
  address?: string;
  message?: string;
  preferredContact?: "email" | "phone";
}

export interface QuoteMailPayload {
  name: string;
  email: string;
  phone?: string;
  country?: string;
  address?: string;
  message?: string;
  preferredContact?: "email" | "phone";
  serviceRequired?: string;
  budget?: string;
  timeline?: string;
}

export interface CareerMailPayload {
  name: string;
  email: string;
  phone?: string;
  address?: string;
  position?: string;
  experience?: string;
  portfolio?: string;
  linkedIn?: string;
  message?: string;
}
