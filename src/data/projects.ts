export type ProjectCategory = "Dev" | "DevOps" | "Personal";
export type ProjectType = "professional" | "personal";

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  category: ProjectCategory;
  type: ProjectType;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  coverColor: string;
}

export const projects: Project[] = [
  {
    id: "portfolio",
    title: "Personal Portfolio",
    description: "This portfolio — built with React 19, TypeScript, Tailwind CSS v4, and MDX for the blog.",
    longDescription: "Designed and developed from scratch with a focus on clean minimal aesthetics, dark mode, and a Coffee color palette. Features a multi-page layout, MDX-powered blog, and Redux-based theme persistence.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Redux", "MDX", "Vite"],
    category: "Personal",
    type: "personal",
    githubUrl: "https://github.com/nikhilsinha/portfolio",
    liveUrl: "",
    featured: true,
    coverColor: "#561C24",
  },
  {
    id: "linux-lab",
    title: "Linux DevOps Lab",
    description: "A hands-on Linux environment built with Multipass VMs for practising real DevOps workflows.",
    longDescription: "Set up a local multi-VM lab using Multipass to practice SSH key-based authentication, file permissions, user management, sudo privilege escalation, and Bash scripting. Documented every experiment as a blog post.",
    tags: ["Linux", "Bash", "SSH", "Multipass", "RHEL", "DevOps"],
    category: "DevOps",
    type: "personal",
    githubUrl: "https://github.com/nikhilsinha/linux-lab",
    liveUrl: "",
    featured: true,
    coverColor: "#6D2932",
  },
  {
    id: "devops-blog",
    title: "DevOps Learning Blog",
    description: "A structured blog series documenting my 12-week DevOps roadmap — written for developers making the same transition.",
    longDescription: "Writing in-depth posts on Linux, Docker, CI/CD, AWS, and Kubernetes as I learn them hands-on. Each post is anchored in real lab work rather than theory. Published directly on this portfolio.",
    tags: ["Technical Writing", "Linux", "Docker", "DevOps", "MDX"],
    category: "DevOps",
    type: "personal",
    githubUrl: "",
    liveUrl: "/blog",
    featured: true,
    coverColor: "#9B4D54",
  },
  {
    id: "hmis-docker",
    title: "HMIS Containerisation",
    description: "Containerised a Hospital Management Information System end-to-end using Docker — from image builds to production deployment on RHEL Linux servers.",
    longDescription: "Owned the full containerisation lifecycle: wrote Dockerfiles, configured environments, built images, and pushed to production RHEL servers. Managed deployment for multiple applications simultaneously. This wasn't a local or staging exercise — these containers ran in production serving real hospital operations.",
    tags: ["Docker", "Linux", "RHEL", "DevOps", "Deployment"],
    category: "DevOps",
    type: "professional",
    githubUrl: "",
    liveUrl: "",
    featured: false,
    coverColor: "#C7B7A3",
  },
  {
    id: "uw-care",
    title: "UW Care — Full Stack Product",
    description: "Built and shipped full-stack features for UW Care, an internal insurance product, successfully demonstrated to the client.",
    longDescription: "Worked across frontend (React.js, Next.js) and backend to deliver production features. Refactored and optimised the codebase for performance and long-term maintainability.",
    tags: ["React", "Next.js", "Node.js", "TypeScript", "Express"],
    category: "Dev",
    type: "professional",
    githubUrl: "",
    liveUrl: "",
    featured: false,
    coverColor: "#E8D8C4",
  },
  {
    id: "rpa-automation",
    title: "RPA Automation — Auto Adjudication",
    description: "Built Python-based RPA automation solutions to work around API limitations in an auto adjudication workflow.",
    longDescription: "Designed and implemented custom RPA commands in Python for auto adjudication. Also implemented server restart protocols for RPA systems to ensure minimal downtime during maintenance windows.",
    tags: ["Python", "RPA", "Automation", "Backend"],
    category: "Dev",
    type: "professional",
    githubUrl: "",
    liveUrl: "",
    featured: false,
    coverColor: "#888780",
  },
  {
    id: "ilri-infra",
    title: "ILRI Infrastructure & Client Ops",
    description: "Secondary technical owner for ILRI — managing production Linux deployments, system vulnerabilities, client requirements, and BAU operations across release cycles.",
    longDescription: "Handled application deployments on Linux servers, identified and addressed system vulnerabilities to maintain production stability, coordinated client deliverables, and translated business requirements into technical specs. Acting as the technical interface between the client and the engineering team.",
    tags: ["Linux", "Deployment", "Infrastructure", "Client Management"],
    category: "DevOps",
    type: "professional",
    githubUrl: "",
    liveUrl: "",
    featured: false,
    coverColor: "#561C24",
  },
];
