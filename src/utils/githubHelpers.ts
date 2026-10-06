import { GitHubRepo } from "@/hooks/useGitHubRepos";

const devopsKeywords = [
  "docker",
  "docker-compose",
  "dockerfile",
  "linux",
  "bash",
  "ci-cd",
  "cicd",
  "github-actions",
  "kubernetes",
  "terraform",
  "ansible",
  "nginx",
  "devops",
  "infrastructure",
  "deployment",
  "rhel",
  "shell",
];

const personalTopics = ["personal", "personal-website", "portfolio", "side-project"];

// Maps a GitHub repo's name, topics, or language to a project category.
export function getRepoCategory(repo: GitHubRepo): "Dev" | "DevOps" | "Personal" {
  const topics = repo.topics.map((topic) => topic.toLowerCase());
  const name = repo.name.toLowerCase();
  const lang = repo.language?.toLowerCase() ?? "";

  const isPersonal =
    topics.some(
      (topic) => personalTopics.includes(topic) || topic.includes("personal"),
    ) ||
    name.includes("portfolio") ||
    name.includes("personal");

  if (isPersonal) return "Personal";
  if (topics.some((topic) => devopsKeywords.includes(topic))) return "DevOps";
  if (lang === "shell" || lang === "dockerfile") return "DevOps";
  return "Dev";
}

// Assigns a cover color cycling through Coffee palette by index
export function getRepoCoverColor(index: number): string {
  const colors = ["#561C24", "#6D2932", "#9B4D54", "#C7B7A3", "#E8D8C4", "#6D2932", "#561C24"];
  return colors[index % colors.length];
}

// Formats "2024-03-15T10:00:00Z" → "Mar 2024"
export function formatRepoDate(isoString: string): string {
  return new Date(isoString).toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

// Converts repo name from kebab-case or snake_case to Title Case.
// "linux-lab" → "Linux Lab"
// "personal_portfolio" → "Personal Portfolio"
export function formatRepoName(name: string): string {
  return name
    .split(/[-_]/)
    .filter((word) => word.length > 0)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
