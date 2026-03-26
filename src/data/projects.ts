export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  coverColor: string;
  featured: boolean;
  category: 'Dev' | 'DevOps' | 'Personal';
  type: 'professional' | 'personal';
}

// Deprecated: Projects data is now fetched live from the GitHub API using `useGitHubRepos`.
// Preserved as an empty shell to prevent compilation errors in legacy components.
export const projects: Project[] = [];
