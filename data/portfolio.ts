export interface Project {
  id: string;
  title: string;
  description: string;
  category: "Web" | "Mobile App" | "Enterprise Software" | "Developer Tools";
  techStack: string[];
  clientName: string;
  clientCountry: string;
  deepLink: string;
  isFeatured?: boolean;
}

export const mockProjects: Project[] = [
  {
    id: "adjuster-assist",
    title: "AdjusterAssist Platform",
    description: "An insurance-only conversational claim workspace integrating multi-tier unified input models, dynamic timeline logs, and automated AI output classification.",
    category: "Enterprise Software",
    techStack: ["Node.js", "Express", "React", "OpenAI API", "Supabase"],
    clientName: "AdjusterAssist LLC",
    clientCountry: "USA",
    deepLink: "https://adjusterassist.com"
  },
  {
    id: "carpooling-api",
    title: "Carpooling Mobility Hub",
    description: "A secure backend infrastructure engineered for automated ride sharing, route optimization middleware, and scalable role-based user management access pipelines.",
    category: "Mobile App",
    techStack: ["React Native", "Expo", "Node.js", "MariaDB", "Sentry"],
    clientName: "Maastrix Labs Internal",
    clientCountry: "Global",
    deepLink: "https://github.com/maastrix-solutions"
  },
  {
    id: "fetch-armor",
    title: "fetch-armor npm Package",
    description: "A lightweight, production-grade security wrapper and performance enhancement tool built to secure HTTP requests and maximize network velocity.",
    category: "Developer Tools",
    techStack: ["TypeScript", "Node.js", "npm Registry"],
    clientName: "Open Source Community",
    clientCountry: "Global",
    deepLink: "https://www.npmjs.com/package/fetch-armor"
  },
  {
    id: "csc-backend",
    title: "CSC Core Management Suite",
    description: "A centralized content administration panel featuring pricing API protection layers, metadata scrapers, and unified dynamic asset management.",
    category: "Web",
    techStack: ["Node.js", "Express", "MySQL", "Tailwind CSS"],
    clientName: "CSC Enterprises",
    clientCountry: "Australia",
    deepLink: "https://maastrixsolutions.com"
  },
  {
    id: "vanguard-settlement",
    title: "Vanguard Ledger Gateway",
    description: "High-concurrency fintech transactional engine built with robust error handling to satisfy banking compliance criteria and real-time ledger settlement.",
    category: "Enterprise Software",
    techStack: ["Node.js", "Express", "PostgreSQL", "Redis"],
    clientName: "Vanguard FinTech",
    clientCountry: "UK",
    deepLink: "https://maastrixsolutions.com"
  }
];