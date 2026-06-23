// src/data/portfolio.ts

export interface Project {
  id: string;
  title: string;
  description: string;
  type: 'Web App' | 'Android App' | 'Cybersecurity Tool' | 'Desktop App';
  image: string; // Path to your screenshots
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  isUpcoming: boolean;
}

export const USER_PROFILE = {
  name: "Anania Belay",
  age: 21,
  location: "Addis Ababa, Ethiopia",
  education: "Lazarist Catholic School , currently pursuing University Degree",
  bio: "A self-taught software engineer dedicated to building high-performance web applications, robust system tools, and modern digital experiences from the ground up with 6 years skill.",
  avatar: "/pro.webp", // Replace with your actual filename
};

export const SKILLS = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Supabase",
  "React",
  "Node.js",
  "Linux",
  "Network Security"
];

export const PROJECTS: Project[] = [
  {
    id: "geez-dict",
    title: "Ge'ez Digital Dictionary",
    description: "A fast, interactive dictionary application dedicated to the ancient Ge'ez language, featuring modern search matching, structural formatting, and dynamic definition layouts.",
    type: "Web App",
    image: "/projects/geez.png", // Replace with your image path
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/ananiabelay", // Update with exact link if preferred
    liveUrl: "https://geez-sepia.vercel.app/",
    isUpcoming: false,
  },
  {
    id: "event-platform",
    title: "Event Management Platform",
    description: "An advanced orchestration system supporting real-time user registrations, administrative analytical dashboards, and unique QR-code ticket generation for flawless check-ins.",
    type: "Web App",
      image: "/projects/pro.webp", 
    tags: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    githubUrl: "https://github.com/ananiabelay",
    isUpcoming: true,
  },
  {
    id: "HSCAN",
    title: "Network Switch Analyzer",
    description: "A specialized security tool utilized to parse automated Nmap scans, audit legacy switch firmwares, and identify community credential weaknesses across enterprise network components.",
    type: "Cybersecurity Tool",
  image: "/projects/HSCAN.png", 
      tags: ["Linux", "Network Security", "python"],
    githubUrl: "https://github.com/ananiabelay/hscan",
    isUpcoming: false,
  },
  {
    id: "mobile-hub",
    title: "Next-Gen Mobile Platform",
    description: "An ultra-optimized mobile utility designed to bridge high-performance tasks with zero interface friction. Launching soon to production environments.",
    type: "Android App",
      image: "/projects/pro.webp", 
    tags: ["React Native", "Supabase"],
    isUpcoming: true,
  }
  ,
  {
    id: "Desktop App",
    title: "Next-Gen Desktop App",
    description: "A simple math chart generator app using python and matplotlib.",
    type: "Android App",
      image: "/projects/des.png", 
    tags: ["python", "Supabase"],
    isUpcoming: false,
    githubUrl: "https://github.com/ananiabelay/chart_generator",

  }
  ,
  {
    id: "SSVP CHARITY",
    title: "Charity Website",
    description: "A website developed by python using django that have admin page.",
    type: "Web App",
      image: "/projects/des.png", 
    tags: ["python", "Django"],
    isUpcoming: false,
    githubUrl: "https://github.com/ananiabelay/ssvp",

  },
   {
    id: "Todo",
    title: "Ananias Todo",
    description: "A todo app built with full working backend and frontend .",
    type: "Web App",
      image: "/projects/todo.png", 
    tags: ["python", "Django","Nextjs"],
    isUpcoming: false,
    githubUrl: "https://github.com/ananiabelay/Ananistodo",

  }
];