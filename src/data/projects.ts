export interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    title: "Portfolio Website",
    description: "This portfolio — built with React, TypeScript, Tailwind, and MDX for the blog.",
    tags: ["React", "TypeScript", "Tailwind", "MDX"],
    githubUrl: "",
    featured: true,
  },
  {
    title: "Linux Lab (Multipass)",
    description: "Hands-on Linux environment for practising SSH, file permissions, user management, and system administration.",
    tags: ["Linux", "Bash", "SSH", "Multipass"],
    githubUrl: "",
    featured: true,
  },
];
