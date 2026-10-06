export interface SkillGroup {
  label: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: "Cloud & Infrastructure",
    skills: [
      "AWS (EC2, VPC, IAM, S3, Route 53, Load Balancers)",
      "Oracle Cloud Infrastructure (OCI Compute)",
      "Linux/RHEL",
      "Nginx",
    ],
  },
  {
    label: "Containers & Release",
    skills: [
      "Docker",
      "Docker Compose",
      "Private Docker Registry",
      "Git",
      "GitHub Actions",
      "CI/CD",
    ],
  },
  {
    label: "Security & Automation",
    skills: [
      "Trivy",
      "Vulnerability Remediation",
      "Patch Management",
      "Bash",
      "Python",
      "Cron",
    ],
  },
  {
    label: "Development",
    skills: [
      "Node.js",
      "React",
      "JavaScript",
      "TypeScript",
      "REST APIs",
      "MongoDB",
    ],
  },
  {
    label: "Learning (self-directed labs)",
    skills: ["Kubernetes", "Terraform", "Golang", "System programming"],
  },
];
