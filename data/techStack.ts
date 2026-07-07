import React from "react";

export interface TechItem {
  name: string;
  category: "Backend" | "Frontend" | "Mobile" | "CMS & Web" | "Artificial Intelligence" | "Analytics" | "Deployment";
  logoKey: 
    | "openai" | "llm" | "vision" | "whisper"
    | "nodejs" | "express" | "typescript" | "python" | "php" | "laravel"
    | "react" | "expo" | "androidstudio" |"apple" | "flutter"
    | "wordpress" | "nextjs" | "tailwind" | "bootstrap"
    | "mysql" | "postgresql" | "supabase" | "appwrite"| "firebase"
    | "google-analytics" | "docker" |"cp" | "azure" |"render" | "aws" | "cloudfare"
    ;
  
  iconSrc?: string;       // e.g., "/icons/wordpress.svg" or "/images/openai.png"
  customSvg?: React.ReactNode; // Optional: Paste direct <svg>...</svg> paths if you prefer
}

export const techStackData: TechItem[] = [
  // Artificial Intelligence
  { name: "OpenAI API", category: "Artificial Intelligence", logoKey: "openai", iconSrc: "/tech/openai.svg" },
  { name: "LLM Orchestration", category: "Artificial Intelligence", logoKey: "llm", iconSrc: "/tech/ollama_light.svg" },
  { name: "Vision Analysis", category: "Artificial Intelligence", logoKey: "vision", iconSrc: "/tech/opencv.svg" },
  { name: "Whisper Speech-to-Text", category: "Artificial Intelligence", logoKey: "whisper", iconSrc: "/tech/speech-to-text.svg" },

  // Backend & Architecture
  { name: "Node.js", category: "Backend", logoKey: "nodejs", iconSrc: "/tech/nodejs.svg" },
  { name: "Express.js", category: "Backend", logoKey: "express", iconSrc: "/tech/expressjs.svg" },
  { name: "TypeScript", category: "Backend", logoKey: "typescript", iconSrc: "/tech/typescript.svg" },
  { name: "Python", category: "Backend", logoKey: "python", iconSrc: "/tech/python.svg" },
  { name: "PHP", category: "Backend", logoKey: "php", iconSrc: "/tech/php.svg" },
  { name: "Laravel", category: "Backend", logoKey: "laravel", iconSrc: "/tech/laravel.svg" },
  
  // Mobile Systems
  { name: "React Native", category: "Mobile", logoKey: "react", iconSrc: "/tech/react_light.svg" },
  { name: "Flutter", category: "Mobile", logoKey: "flutter", iconSrc: "/tech/flutter.svg" },
  { name: "Expo SDK", category: "Mobile", logoKey: "expo", iconSrc: "/tech/expo.svg" },
  { name: "Android Studio", category: "Mobile", logoKey: "androidstudio", iconSrc: "/tech/android-icon.svg" },
  { name: "Apple Developer", category: "Mobile", logoKey: "apple", iconSrc: "/tech/apple.svg" },

  // CMS & Web Layouts
  { name: "WordPress", category: "CMS & Web", logoKey: "wordpress", iconSrc: "/tech/wordpress.svg" },
  { name: "Next.js", category: "Frontend", logoKey: "nextjs", iconSrc: "/tech/nextjs_icon_dark.svg" },
  { name: "React.js", category: "Frontend", logoKey: "react", iconSrc: "/tech/react_light.svg" },
  { name: "Tailwind CSS", category: "Frontend", logoKey: "tailwind", iconSrc: "/tech/tailwindcss.svg" },
  { name: "Bootstrap CSS", category: "Frontend", logoKey: "bootstrap", iconSrc: "/tech/bootstrap.svg" },
  
  // Data Layers
  { name: "MySQL / MariaDB", category: "Backend", logoKey: "mysql", iconSrc: "/tech/mysql-icon-light.svg" },
  { name: "PostgreSQL", category: "Backend", logoKey: "postgresql", iconSrc: "/tech/postgresql.svg" },
  { name: "Supabase", category: "Backend", logoKey: "supabase", iconSrc: "/tech/supabase.svg" },
  { name: "Appwrite", category: "Backend", logoKey: "appwrite", iconSrc: "/tech/appwrite.svg" },
  { name: "Firebase", category: "Backend", logoKey: "firebase", iconSrc: "/tech/firebase.svg" },


  { name: "Google Analytics", category: "Analytics", logoKey: "google-analytics", iconSrc: "/tech/google-analytics.svg" },
  { name: "C Pannel", category: "Deployment", logoKey: "cp", iconSrc: "/tech/cP_orange.svg" },
  { name: "AWS", category: "Deployment", logoKey: "aws", iconSrc: "/tech/aws_light.svg" },
  { name: "Cloudfare", category: "Deployment", logoKey: "cloudfare", iconSrc: "/tech/cloudflare.svg" },
  { name: "Render", category: "Deployment", logoKey: "render", iconSrc: "/tech/render_black.svg" },
];