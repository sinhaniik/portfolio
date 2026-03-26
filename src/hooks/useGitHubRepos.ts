import { useState, useEffect } from 'react';

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  topics: string[];
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  pushed_at: string;
  fork: boolean;
}

export interface UseGitHubReposReturn {
  repos: GitHubRepo[];
  loading: boolean;
  error: string | null;
}

export function useGitHubRepos(): UseGitHubReposReturn {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchRepos() {
      try {
        setLoading(true);
        const response = await fetch(
          "https://api.github.com/users/sinhaniik/repos?sort=updated&direction=desc&per_page=30&type=public",
          {
            headers: {
              Accept: "application/vnd.github.mercy-preview+json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status}`);
        }

        const data: GitHubRepo[] = await response.json();

        if (isMounted) {
          // Filter out forks and repos with no description
          const filtered = data.filter(r => !r.fork && r.description !== null && r.description.trim() !== "");
          setRepos(filtered);
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          setError("Could not load repositories. Visit GitHub directly.");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchRepos();

    return () => {
      isMounted = false;
    };
  }, []);

  return { repos, loading, error };
}
