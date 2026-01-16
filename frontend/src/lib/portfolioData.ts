// Portfolio data configuration - Edit this file to update content
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
}

export interface Skill {
  name: string;
  level: number;
  category: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    title: string;
    tagline: string;
    email: string;
    phone: string;
    location: string;
    bio: string;
    avatar: string;
    resumeUrl: string;
  };
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    dribbble?: string;
  };
  projects: Project[];
  skills: Skill[];
  experience: {
    title: string;
    company: string;
    period: string;
    description: string;
  }[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Alex Rivera",
    title: "Full-Stack Developer & UI Designer",
    tagline: "Crafting digital experiences that inspire and perform",
    email: "hello@alexrivera.dev",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    bio: "I'm a passionate developer with 8+ years of experience building scalable web applications and beautiful user interfaces. I specialize in React, TypeScript, and Node.js, with a keen eye for design and user experience.",
    avatar: "/avatar.png",
    resumeUrl: "/resume.pdf",
  },
  social: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    dribbble: "https://dribbble.com",
  },
  projects: [
    {
      id: "1",
      title: "FinFlow Dashboard",
      description: "A comprehensive financial analytics dashboard with real-time data visualization and AI-powered insights.",
      tags: ["React", "TypeScript", "D3.js", "Node.js"],
      image: "/projects/finflow.png",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      id: "2",
      title: "EcoTrack Mobile",
      description: "Sustainability tracking app that helps users reduce their carbon footprint with gamified challenges.",
      tags: ["React Native", "Firebase", "Redux"],
      image: "/projects/ecotrack.png",
      liveUrl: "https://example.com",
    },
    {
      id: "3",
      title: "Artisan Marketplace",
      description: "E-commerce platform connecting local artisans with global customers, featuring AR product previews.",
      tags: ["Next.js", "Stripe", "PostgreSQL", "AR.js"],
      image: "/projects/artisan.png",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      id: "4",
      title: "HealthSync API",
      description: "RESTful API service for health data aggregation from multiple wearable devices and platforms.",
      tags: ["Node.js", "GraphQL", "MongoDB", "Docker"],
      image: "/projects/healthsync.png",
      githubUrl: "https://github.com",
    },
  ],
  skills: [
    { name: "React / Next.js", level: 95, category: "Frontend" },
    { name: "TypeScript", level: 90, category: "Frontend" },
    { name: "Node.js", level: 88, category: "Backend" },
    { name: "PostgreSQL", level: 85, category: "Backend" },
    { name: "Tailwind CSS", level: 92, category: "Frontend" },
    { name: "GraphQL", level: 82, category: "Backend" },
    { name: "Docker", level: 78, category: "DevOps" },
    { name: "AWS", level: 75, category: "DevOps" },
  ],
  experience: [
    {
      title: "Senior Full-Stack Developer",
      company: "TechVentures Inc.",
      period: "2021 - Present",
      description: "Leading development of enterprise SaaS products serving 50K+ users.",
    },
    {
      title: "Frontend Developer",
      company: "DesignLab Studio",
      period: "2018 - 2021",
      description: "Built responsive web applications and design systems for Fortune 500 clients.",
    },
    {
      title: "Junior Developer",
      company: "StartupHub",
      period: "2016 - 2018",
      description: "Developed MVP products for early-stage startups in the fintech space.",
    },
  ],
};
