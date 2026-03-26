import { GitHubRepo } from "@/hooks/useGitHubRepos";

// Maps a GitHub repo's language or topics to a project category
export function getRepoCategory(repo: GitHubRepo): "Dev" | "DevOps" | "Personal" {
  const devopsKeywords = ["docker", "linux", "bash", "ci-cd", "kubernetes", 
                          "terraform", "ansible", "nginx", "devops", "infrastructure",
                          "deployment", "rhel", "shell"];
  const topics = repo.topics.map((t: string) => t.toLowerCase());
  const lang = repo.language?.toLowerCase() ?? "";
  
  if (topics.some((t: string) => devopsKeywords.includes(t))) return "DevOps";
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

// Converts repo name from kebab-case to Title Case
// "linux-lab" → "Linux Lab"
// "my-portfolio" → "My Portfolio"
export function formatRepoName(name: string): string {
  return name.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
}
