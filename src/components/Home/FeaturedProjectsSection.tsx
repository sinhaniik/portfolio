import { Link } from 'react-router-dom';
import { useGitHubRepos } from "@/hooks/useGitHubRepos";
import { formatRepoName, getRepoCategory } from "@/utils/githubHelpers";

export const FeaturedProjectsSection = () => {
  const { repos, loading, error } = useGitHubRepos();
  const featuredRepos = repos.slice(0, 3);

  return (
    <section className="py-20 px-6 md:px-16 lg:px-32">
      <div className="max-w-5xl mx-auto">
        <h2 className="mb-8 text-[32px] font-medium text-text">
          Personal & learning projects
        </h2>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[0, 1, 2].map(i => (
              <div key={i} className="overflow-hidden rounded-xl border-[0.5px] border-border bg-surface">
                <div className="h-[3px] bg-border" />
                <div className="flex flex-col gap-3 p-6">
                  <div className="h-4 w-16 rounded bg-muted/40" />
                  <div className="h-5 w-2/3 rounded bg-muted/40" />
                  <div className="h-4 w-full rounded bg-muted/30" />
                  <div className="h-4 w-5/6 rounded bg-muted/30" />
                </div>
              </div>
            ))}
          </div>
        ) : error ? (
          <p className="text-base text-text-muted">Could not load repositories.</p>
        ) : featuredRepos.length === 0 ? (
          <p className="text-base text-text-muted">No public repositories yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredRepos.map((repo) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="block overflow-hidden rounded-xl border-[0.5px] border-border bg-surface no-underline transition-all duration-150 ease-in-out hover:-translate-y-[3px] hover:border-primary"
              >
                <div className="h-[3px] bg-primary" />
                <div className="flex flex-col gap-3 p-6">
                  <span className="self-start rounded-full border border-border bg-background px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-primary">
                    {getRepoCategory(repo)}
                  </span>
                  <h3 className="m-0 text-[15px] font-semibold text-text">
                    {formatRepoName(repo.name)}
                  </h3>
                  <p className="m-0 line-clamp-2 text-[13px] leading-relaxed text-text-muted">
                    {repo.description ?? "Visit GitHub for details."}
                  </p>
                  {repo.topics.length > 0 && (
                    <div className="mt-1 flex flex-wrap gap-1">
                      {repo.topics.slice(0, 3).map(topic => (
                        <span key={topic} className="rounded-full border border-border bg-background px-2 py-1 text-[12px] text-primary">
                          {topic}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </a>
            ))}
          </div>
        )}

        <div className="mt-8">
          <Link
            to="/projects"
            className="group inline-flex items-center text-sm font-medium text-primary no-underline transition-colors duration-150 ease-in-out hover:text-secondary"
          >
            All personal projects <span className="ml-1 transition-transform duration-150 ease-in-out group-hover:translate-x-1">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
};
