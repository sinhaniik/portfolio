export interface Skill {
  name: string;
  category: "Dev" | "DevOps" | "Tools";
}

export const skills: Skill[] = [
  { name: "React", category: "Dev" },
  { name: "TypeScript", category: "Dev" },
  { name: "Node.js", category: "Dev" },
  { name: "Express", category: "Dev" },
  { name: "MongoDB", category: "Dev" },
  { name: "Linux", category: "DevOps" },
  { name: "Docker", category: "DevOps" },
  { name: "Git & GitHub", category: "DevOps" },
  { name: "CI/CD", category: "DevOps" },
  { name: "AWS (learning)", category: "DevOps" },
  { name: "Bash", category: "DevOps" },
  { name: "Vite", category: "Tools" },
  { name: "Tailwind CSS", category: "Tools" },
  { name: "Postman", category: "Tools" },
];
