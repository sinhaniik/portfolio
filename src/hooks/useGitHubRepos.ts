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
    const controller = new AbortController();

    async function fetchRepos() {
      try {
        setLoading(true);
        const collected: GitHubRepo[] = [];

        for (let page = 1; page <= 10; page += 1) {
          const response = await fetch(
            `https://api.github.com/users/sinhaniik/repos?sort=updated&direction=desc&per_page=100&page=${page}&type=owner`,
            {
              headers: {
                Accept: "application/vnd.github+json",
              },
              signal: controller.signal,
            },
          );

          if (!response.ok) {
            throw new Error(`GitHub API error: ${response.status}`);
          }

          const data: unknown = await response.json();
          if (!Array.isArray(data)) {
            throw new Error("GitHub API error: unexpected response");
          }

          collected.push(...(data as GitHubRepo[]));
          if (data.length < 100) break;
        }

        const filtered = collected.filter(
          (repo) => !repo.fork && repo.description !== null && repo.description.trim() !== "",
        );
        setRepos(filtered);
        setError(null);
      } catch (err) {
        if (err instanceof Error && err.name === "AbortError") return;
        setError("Could not load repositories. Visit GitHub directly.");
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchRepos();

    return () => {
      controller.abort();
    };
  }, []);

  return { repos, loading, error };
}
