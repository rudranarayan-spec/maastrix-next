export interface ProjectCard {
  id: string;
  category: string;
  title: string;
  impact: string;
  author: string;
  date: string;
  imgSrc: string;
}

export const featuredWork: ProjectCard[] = [
  {
    id: "adjuster-assist",
    category: "AI & Claims Infrastructure",
    title: "How We Automated Insurance Claims Operations with AdjusterAssist Conversational Platform",
    impact: "Boosted claim drafting velocity using contextual LLM pipelines and unified input parsing matrices.",
    author: "Core Team",
    date: "May 14, 2026",
    imgSrc: "/assets/images/portfolio/claims-automation.jpg"
  },
  {
    id: "carpool-ecosystem",
    category: "Mobile Application",
    title: "Architecting a Real-Time High-Scale Mobile Carpooling Application Framework",
    impact: "Engineered high-performance React Native layouts and bulletproof database syncing rules via Supabase endpoints.",
    author: "Mobile Squad",
    date: "April 28, 2026",
    imgSrc: "/assets/images/portfolio/mobile-platform.jpg"
  },
  {
    id: "pricing-protection",
    category: "Backend Architecture",
    title: "Securing Mission-Critical API Pricing Matrices and Dynamic Metadata Fetching Networks",
    impact: "Implemented dynamic cache layers and secure intermediate middleware to shield complex pricing engines from heavy loads.",
    author: "Backend Architecture Group",
    date: "March 19, 2026",
    imgSrc: "/assets/images/portfolio/backend-security.jpg"
  }
];