export interface TechItem {
  name: string;
  category: "Backend" | "Frontend" | "Mobile" | "CMS & Web" | "Artificial Intelligence";
  iconType: "terminal" | "cpu" | "database" | "smartphone" | "globe" | "sparkles" | "code";
}

export const techStackData: TechItem[] = [
  // Artificial Intelligence
  { name: "OpenAI API", category: "Artificial Intelligence", iconType: "sparkles" },
  { name: "LLM Orchestration", category: "Artificial Intelligence", iconType: "sparkles" },
  { name: "Vision Analysis", category: "Artificial Intelligence", iconType: "sparkles" },
  { name: "Whisper Speech-to-Text", category: "Artificial Intelligence", iconType: "sparkles" },

  // Backend & Architecture
  { name: "Node.js", category: "Backend", iconType: "terminal" },
  { name: "Express.js", category: "Backend", iconType: "code" },
  { name: "TypeScript", category: "Backend", iconType: "code" },
  { name: "Python", category: "Backend", iconType: "terminal" },
  { name: "PHP", category: "Backend", iconType: "code" },
  
  // Mobile Systems
  { name: "React Native", category: "Mobile", iconType: "smartphone" },
  { name: "Expo SDK", category: "Mobile", iconType: "smartphone" },
  { name: "Android Studio", category: "Mobile", iconType: "cpu" },

  // CMS & Web Layouts
  { name: "WordPress", category: "CMS & Web", iconType: "globe" },
  { name: "Next.js", category: "Frontend", iconType: "globe" },
  { name: "React.js", category: "Frontend", iconType: "code" },
  { name: "Tailwind CSS", category: "Frontend", iconType: "code" },
  
  // Data Layers
  { name: "MySQL / MariaDB", category: "Backend", iconType: "database" },
  { name: "PostgreSQL", category: "Backend", iconType: "database" },
  { name: "Supabase", category: "Backend", iconType: "database" }
];