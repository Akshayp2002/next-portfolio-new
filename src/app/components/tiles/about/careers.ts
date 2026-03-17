export type CareerProject = {
  name: string;
  image: string;
  link?: string;
};

export type CareerSkill = {
  name: string;
  icon: string;
};

export type CareerEntry = {
  id: string;
  role: string;
  company: string;
  period: string;
  badge: string;
  logo: string;
  overview: string;
  myRole: string;
  projects: CareerProject[];
  skills: CareerSkill[];
};

export const careersData: CareerEntry[] = [
  {
    id: "itrend",
    role: "Software Engineer",
    company: "iTrend Solution Pvt. Ltd.",
    period: "May 2025 - Present",
    badge: "Current",
    logo: "/company/itrend.png",
    overview:
      "iTrend Solution is a forward-thinking technology company streamlining e-commerce operations through advanced automation and data-driven systems.",
    myRole:
      "I lead development for API-driven workflows that connect Amazon Ads, SP-API, and warehouse APIs for real-time inventory synchronization and order processing. I also build AI-powered analytics dashboards and manage AWS EC2 services to keep systems scalable, secure, and highly available.",
    projects: [
      {
        name: "iTrend Commerce",
        image: "/projects/itrend-sp.webp",
      },
    ],
    skills: [
      { name: "Laravel", icon: "/tech/laravel.svg" },
      { name: "PHP", icon: "/tech/php.svg" },
      { name: "MySQL", icon: "/tech/mysql.svg" },
      { name: "HTML", icon: "/tech/html5.svg" },
      { name: "CSS", icon: "/tech/css3.svg" },
      { name: "JavaScript", icon: "/tech/js.svg" },
      { name: "jQuery", icon: "/tech/jquery.svg" },
      { name: "AWS", icon: "/tech/aws.svg" },
      { name: "Ubuntu", icon: "/tech/ubuntu.svg" },
      { name: "Redis", icon: "/tech/redis.svg" },
      { name: "GitHub", icon: "/tech/github.svg" },
      { name: "Ollama", icon: "/tech/ollama.svg" },
    ],
  },
  {
    id: "cloudrevel",
    role: "Software Engineer",
    company: "Cloudrevel Innovations Pvt. Ltd.",
    period: "Mar 2023 - Apr 2025",
    badge: "Core Team",
    logo: "/company/cloudrevel.jpg",
    overview:
      "Cloudrevel builds modern SaaS products and internal platforms for fast-moving startups and growing businesses.",
    myRole:
      "I built and maintained full-stack modules, developed reusable UI patterns, and delivered integrations for third-party services. I worked closely with product and design teams to ship reliable features quickly while keeping the codebase maintainable.",
    projects: [
      {
        name: "MyHinez",
        image: "/projects/hinez.webp",
      },
      {
        name: "Swiftrevel",
        image: "/projects/swiftrevel.webp",
      },
      {
        name: "Rugr Fintech",
        image: "/projects/rugr.webp",
      },
    ],
    skills: [
      { name: "Laravel", icon: "/tech/laravel.svg" },
      { name: "PHP", icon: "/tech/php.svg" },
      { name: "Tailwind", icon: "/tech/tailwindcss.svg" },
      { name: "Node.js", icon: "/tech/nodejs.svg" },
      { name: "TypeScript", icon: "/tech/typescript.svg" },
      { name: "MongoDB", icon: "/tech/mongodb.svg" },
      { name: "Postman", icon: "/tech/postman.svg" },
      { name: "Docker", icon: "/tech/docker.svg" },
      { name: "VS Code", icon: "/tech/vscode.svg" },
      { name: "Figma", icon: "/tech/figma.svg" },
    ],
  },
  {
    id: "aof",
    role: "Jr. Software Developer",
    company: "AOF Engineering Systems LLC",
    period: "Sep 2022 - Mar 2023",
    badge: "Early Career",
    logo: "/company/aof.jpg",
    overview:
      "AOF Engineering Systems LLC supports industrial and business systems with practical digital tools and technical services.",
    myRole:
      "I worked on core web features, bug fixes, data validation flows, and production support. This role strengthened my fundamentals in backend architecture, debugging, and clean implementation of client requirements.",
    projects: [
      {
        name: "Farmers Copper",
        image: "/projects/farmers-copper.webp",
      },
      {
        name: "4M HUB",
        image: "/projects/4mhub.png",
      },
    ],
    skills: [
      { name: "PHP", icon: "/tech/php.svg" },
      { name: "MySQL", icon: "/tech/mysql.svg" },
      { name: "HTML", icon: "/tech/html5.svg" },
      { name: "CSS", icon: "/tech/css3.svg" },
      { name: "JavaScript", icon: "/tech/js.svg" },
      { name: "Bootstrap", icon: "/tech/bootstrap.svg" },
      { name: "GitHub", icon: "/tech/github.svg" },
      { name: "Linux", icon: "/tech/linux.svg" },
    ],
  },
];
