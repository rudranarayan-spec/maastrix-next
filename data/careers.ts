export interface JobPosition {
  id: string;
  title: string;
  department: "Engineering" | "Design" | "Growth & Marketing" | "Operations";
  location: string;
  type: "Full-Time" | "Part-Time" | "Remote";
  experience: string;
  description: string;
  longDescription: string;
  responsibilities: string[];
  requirements: string[];
  preferredStack: string[];
}

export const openPositions: JobPosition[] = [
  {
    id: "full-stack-developer",
    title: "Full Stack Developer",
    department: "Engineering",
    location: "Acharya bihar, Bhubaneswar",
    type: "Full-Time",
    experience: "6 months",
    description: "Architect high-concurrency API gateways, harden core middleware pipelines, and manage scalable relational databases (PostgreSQL/MariaDB) integrated with AI infrastructure.",
    longDescription: "We are seeking a high-caliber Senior Backend Engineer to spearhead the architecture, security, and continuous deployment scaling of our core enterprise application platforms. In this role, you will take true ownership of building scalable real-time systems, implementing role-based access tokens, managing custom NPM libraries, and implementing deep vector database integrations for state-of-the-art LLM orchestration layers.",
    responsibilities: [
      "Architect, optimize, and maintain low-latency, high-availability Node.js/Express and Python backend engines.",
      "Design reliable, production-grade API structures utilizing deterministic endpoint security policies.",
      "Manage relational data systems (PostgreSQL, MariaDB, Supabase) along with complex query optimizations.",
      "Integrate advanced artificial intelligence pipelines, specifically focusing on vision text generation and speech-to-text workflows.",
      "Write clean, reusable, and comprehensive code modules, contributing directly to internal shared NPM registries."
    ],
    requirements: [
      "Proven 5+ years of active production engineering track record with Node.js, TypeScript, and microservice models.",
      "Strong command over SQL database design, transactional locking, and indexing optimizations.",
      "Hands-on configuration exposure using Cloud providers (Firebase Blaze layer blueprints, AWS, or similar environments).",
      "Demonstrated depth with secure authentication configurations, API key rotation, and custom middleware design.",
      "Excellent debugging profile, utilizing systemic logging systems and crash management engines like Sentry."
    ],
    preferredStack: ["Node.js", "Express", "TypeScript", "Python", "MariaDB", "Supabase", "OpenAI API", "Sentry"]
  },
  {
    id: "sr-backend-developer",
    title: "Senior Backend Engineer (Node.js / Python)",
    department: "Engineering",
    location: "Bhubaneswar, India",
    type: "Full-Time",
    experience: "5+ Years",
    description: "Architect high-concurrency API gateways, harden core middleware pipelines, and manage scalable relational databases (PostgreSQL/MariaDB) integrated with AI infrastructure.",
    longDescription: "We are seeking a high-caliber Senior Backend Engineer to spearhead the architecture, security, and continuous deployment scaling of our core enterprise application platforms. In this role, you will take true ownership of building scalable real-time systems, implementing role-based access tokens, managing custom NPM libraries, and implementing deep vector database integrations for state-of-the-art LLM orchestration layers.",
    responsibilities: [
      "Architect, optimize, and maintain low-latency, high-availability Node.js/Express and Python backend engines.",
      "Design reliable, production-grade API structures utilizing deterministic endpoint security policies.",
      "Manage relational data systems (PostgreSQL, MariaDB, Supabase) along with complex query optimizations.",
      "Integrate advanced artificial intelligence pipelines, specifically focusing on vision text generation and speech-to-text workflows.",
      "Write clean, reusable, and comprehensive code modules, contributing directly to internal shared NPM registries."
    ],
    requirements: [
      "Proven 5+ years of active production engineering track record with Node.js, TypeScript, and microservice models.",
      "Strong command over SQL database design, transactional locking, and indexing optimizations.",
      "Hands-on configuration exposure using Cloud providers (Firebase Blaze layer blueprints, AWS, or similar environments).",
      "Demonstrated depth with secure authentication configurations, API key rotation, and custom middleware design.",
      "Excellent debugging profile, utilizing systemic logging systems and crash management engines like Sentry."
    ],
    preferredStack: ["Node.js", "Express", "TypeScript", "Python", "MariaDB", "Supabase", "OpenAI API", "Sentry"]
  },
  {
    id: "sr-backend-developer",
    title: "Senior Backend Engineer (Node.js / Python)",
    department: "Engineering",
    location: "Bhubaneswar, India",
    type: "Full-Time",
    experience: "5+ Years",
    description: "Architect high-concurrency API gateways, harden core middleware pipelines, and manage scalable relational databases (PostgreSQL/MariaDB) integrated with AI infrastructure.",
    longDescription: "We are seeking a high-caliber Senior Backend Engineer to spearhead the architecture, security, and continuous deployment scaling of our core enterprise application platforms. In this role, you will take true ownership of building scalable real-time systems, implementing role-based access tokens, managing custom NPM libraries, and implementing deep vector database integrations for state-of-the-art LLM orchestration layers.",
    responsibilities: [
      "Architect, optimize, and maintain low-latency, high-availability Node.js/Express and Python backend engines.",
      "Design reliable, production-grade API structures utilizing deterministic endpoint security policies.",
      "Manage relational data systems (PostgreSQL, MariaDB, Supabase) along with complex query optimizations.",
      "Integrate advanced artificial intelligence pipelines, specifically focusing on vision text generation and speech-to-text workflows.",
      "Write clean, reusable, and comprehensive code modules, contributing directly to internal shared NPM registries."
    ],
    requirements: [
      "Proven 5+ years of active production engineering track record with Node.js, TypeScript, and microservice models.",
      "Strong command over SQL database design, transactional locking, and indexing optimizations.",
      "Hands-on configuration exposure using Cloud providers (Firebase Blaze layer blueprints, AWS, or similar environments).",
      "Demonstrated depth with secure authentication configurations, API key rotation, and custom middleware design.",
      "Excellent debugging profile, utilizing systemic logging systems and crash management engines like Sentry."
    ],
    preferredStack: ["Node.js", "Express", "TypeScript", "Python", "MariaDB", "Supabase", "OpenAI API", "Sentry"]
  }
  // Add other jobs here matching the JobPosition interface structure...
];