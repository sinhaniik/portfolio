import { Link } from 'react-router-dom';
import { useGitHubRepos } from "@/hooks/useGitHubRepos";
import { getRepoCoverColor, formatRepoName, getRepoCategory } from "@/utils/githubHelpers";

export const FeaturedProjectsSection = () => {
  const { repos, loading } = useGitHubRepos();
  const featuredRepos = repos.slice(0, 3);

  return (
    <section className="py-20 px-6 md:px-16 lg:px-32">
      <div className="max-w-5xl mx-auto">
        <h2 style={{ fontSize: "32px", fontWeight: 500, color: "var(--color-text)", marginBottom: "32px" }}>
          Selected Work
        </h2>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[0, 1, 2].map(i => (
              <div key={i} style={{ background: "var(--color-surface)", borderRadius: "12px", overflow: "hidden", border: "0.5px solid var(--color-border)" }}>
                <div style={{ height: "80px", background: "var(--color-muted)", opacity: 0.4 }} />
                <div style={{ padding: "16px", display: "flex", flexDirection: "column", gap: "8px" }}>
                  <div style={{ height: "16px", background: "var(--color-muted)", borderRadius: "4px", opacity: 0.4, width: "60%" }} />
                  <div style={{ height: "12px", background: "var(--color-muted)", borderRadius: "4px", opacity: 0.3, width: "90%" }} />
                  <div style={{ height: "12px", background: "var(--color-muted)", borderRadius: "4px", opacity: 0.3, width: "75%" }} />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredRepos.map((repo, index) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: "var(--color-surface)",
                  borderRadius: "12px",
                  overflow: "hidden",
                  border: "0.5px solid var(--color-border)",
                  textDecoration: "none",
                  display: "block",
                  transition: "transform 150ms ease, border-color 150ms ease",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--color-primary)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--color-border)";
                }}
              >
                {/* Cover color band */}
                <div style={{ height: "80px", background: getRepoCoverColor(index) }} />

                {/* Card content */}
                <div style={{ padding: "16px", display: "flex", flexDirection: "column", gap: "8px" }}>
                  {/* Category badge */}
                  <span style={{
                    fontSize: "10px", fontWeight: 500, padding: "2px 8px",
                    borderRadius: "999px", background: "var(--color-background)",
                    color: "var(--color-primary)", border: "0.5px solid var(--color-border)",
                    alignSelf: "flex-start", textTransform: "uppercase", letterSpacing: "0.05em"
                  }}>
                    {getRepoCategory(repo)}
                  </span>

                  {/* Title */}
                  <h3 style={{ fontSize: "15px", fontWeight: 600, color: "var(--color-text)", margin: 0 }}>
                    {formatRepoName(repo.name)}
                  </h3>

                  {/* Description */}
                  <p style={{
                    fontSize: "13px", color: "var(--color-text-muted)", margin: 0,
                    lineHeight: 1.6,
                    display: "-webkit-box", WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical", overflow: "hidden"
                  }}>
                    {repo.description ?? "Visit GitHub for details."}
                  </p>

                  {/* Tags */}
                  {repo.topics.length > 0 && (
                    <div style={{ display: "flex", gap: "4px", flexWrap: "wrap", marginTop: "4px" }}>
                      {repo.topics.slice(0, 3).map(topic => (
                        <span key={topic} style={{
                          fontSize: "10px", padding: "1px 6px", borderRadius: "999px",
                          background: "var(--color-background)", color: "var(--color-primary)",
                          border: "0.5px solid var(--color-border)"
                        }}>
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

        {/* See All Projects link */}
        <div style={{ marginTop: "32px" }}>
          <Link
            to="/projects"
            style={{ fontSize: "14px", fontWeight: 500, color: "var(--color-primary)", textDecoration: "none" }}
            className="group inline-flex items-center hover:text-[--color-secondary] transition-colors duration-150 ease-in-out"
          >
            See All Projects <span className="ml-1 transition-transform duration-150 ease-in-out group-hover:translate-x-1">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
};
