export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  initials: string;
}

export const mockTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "MallikCalifornia",
    role: "",
    company: "USA",
    content: "Very satisfied with the quality of work. Professional and always willing to make the requested changes without asking for additional money.",
    initials: "M"
  },
  {
    id: 2,
    name: "Rottimi",
    role: "Nigeria",
    company: "Torj Technology",
    content: "Enjoyed working with Maastrix. A professional and reliable company",
    initials: "R"
  },
  {
    id: 3,
    name: "Elena Rostova",
    role: "Head of Infrastructure",
    company: "Vanguard FinTech",
    content: "Maas Infotech did a good job and I think we both learned a lot of this project .",
    initials: "ER"
  },
  {
    id: 4,
    name: "David Chen",
    role: "Director of Engineering",
    company: "Aether Cloud Solutions",
    content: "Their developers integrated seamlessly with our pipeline. The structural shift away from generic frameworks to custom-tailored API layouts accelerated our release velocity twofold.",
    initials: "DC"
  },
  {
    id: 5,
    name: "Alana Vance",
    role: "Founder",
    company: "Streamline Global",
    content: "Pixel-perfect frontend execution combined with complex data processing on the backend. They don't just build layout templates; they build highly resilient digital infrastructure.",
    initials: "AV"
  }
];