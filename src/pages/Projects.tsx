import { useState } from 'react';
import { SEO } from '@/components/SEO/SEO';
import { useGitHubRepos, GitHubRepo } from '@/hooks/useGitHubRepos';
import { getRepoCategory, getRepoCoverColor, formatRepoDate, formatRepoName } from '@/utils/githubHelpers';

const ProjectCard = ({ project, isFeatured, isLarge, index }: { project: GitHubRepo, isFeatured: boolean, isLarge: boolean, index: number }) => {
  const coverHeight = isLarge ? 'h-[120px]' : isFeatured ? 'h-[80px]' : 'h-[60px]';
  const coverColor = getRepoCoverColor(index);
  
  const title = formatRepoName(project.name);
  const description = project.description || "A project by Nikhil — visit GitHub for details.";
  const tags = project.topics.length > 0 
    ? project.topics.slice(0, 4) 
    : [(project.language || "Repository")];

  return (
    <div className={`group h-full flex flex-col bg-[--color-surface] border-[0.5px] border-[--color-border] rounded-xl overflow-hidden transition-all duration-150 ease-in-out hover:-translate-y-[3px] hover:border-[--color-primary] ${isLarge ? 'md:col-span-2 md:row-span-2' : ''}`}>
      {/* Cover Image Band */}
      <div
        className={`w-full ${coverHeight} relative shrink-0`}
        style={{ backgroundColor: coverColor }}
      ></div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-[--color-primary] mb-2">
          {title}
        </h3>
        <p className={`text-[14px] text-[--color-text-muted] mb-6 leading-relaxed flex-grow ${!isFeatured ? 'line-clamp-3' : ''}`}>
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6 mt-auto">
          {tags.map(tag => (
            <span key={tag} className="bg-[--color-background] text-[--color-primary] text-[11px] font-medium rounded-full px-2 py-0.5 border border-[--color-border]">
              {tag}
            </span>
          ))}
        </div>
        
        {/* Meta Row */}
        <div className="text-[12px] text-[--color-text-muted] mb-4 font-medium tracking-wide">
          {project.stargazers_count > 0 && <span>★ {project.stargazers_count} &nbsp;&middot;&nbsp; </span>}
          <span>{project.language || "—"}</span> &nbsp;&middot;&nbsp; <span>Updated {formatRepoDate(project.pushed_at)}</span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 pt-4 border-t border-[--color-border]">
          <a href={project.html_url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[13px] font-medium text-[--color-text-muted] hover:text-[--color-primary] transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            GitHub
          </a>
          {project.homepage && project.homepage.trim() !== "" && (
            <a href={project.homepage} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[13px] font-medium text-[--color-text-muted] hover:text-[--color-primary] transition-colors">
               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
              View Live
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const SkeletonCard = () => (
  <div className="flex flex-col bg-[--color-surface] border-[0.5px] border-[--color-border] rounded-xl overflow-hidden animate-pulse">
    <div className="w-full h-[60px] bg-[--color-border] opacity-50 relative shrink-0"></div>
    <div className="p-6 flex flex-col gap-4">
      <div className="h-6 bg-[--color-border] opacity-50 rounded w-2/3"></div>
      <div className="space-y-2">
        <div className="h-4 bg-[--color-border] opacity-30 rounded w-full"></div>
        <div className="h-4 bg-[--color-border] opacity-30 rounded w-5/6"></div>
      </div>
      <div className="flex gap-2 mt-2">
        <div className="h-5 w-12 bg-[--color-border] opacity-50 rounded-full"></div>
        <div className="h-5 w-16 bg-[--color-border] opacity-50 rounded-full"></div>
      </div>
    </div>
  </div>
);

export default function Projects() {
  const [activeTab, setActiveTab] = useState('All');
  const { repos, loading, error } = useGitHubRepos();

  const tabs = ['All', 'Dev', 'DevOps', 'Personal'];

  // Calculate lists when loaded
  let featuredRepos: GitHubRepo[] = [];
  let finalFilteredProjects: GitHubRepo[] = [];

  if (!loading && repos.length > 0) {
    const featuredWithHomepage = repos.filter(r => r.homepage && r.homepage.trim() !== "");
    featuredRepos = featuredWithHomepage.length >= 3 
      ? featuredWithHomepage.slice(0, 3) 
      : repos.slice(0, 3);
      
    const featuredIds = new Set(featuredRepos.map(r => r.id));
    const remainingRepos = repos.filter(repo => !featuredIds.has(repo.id));

    const initialFiltered = remainingRepos.filter(repo => {
      if (activeTab === 'All') return true;
      const cat = getRepoCategory(repo);
      if (activeTab === 'Personal') {
        return cat === 'Dev' && !repo.language;
      }
      return cat === activeTab;
    });

    finalFilteredProjects = activeTab === 'Personal' && initialFiltered.length === 0
      ? remainingRepos.filter(repo => getRepoCategory(repo) === 'Dev')
      : initialFiltered;
  }

  return (
    <div className="w-full flex-grow flex flex-col">
      <SEO title="Projects" description="A mix of professional work and personal projects — from full-stack products to DevOps lab work." />

      {/* Hero */}
      <section className="w-full pt-20 pb-12 px-6 md:px-16 lg:px-32 max-w-5xl mx-auto shrink-0">
        <span className="text-[12px] uppercase tracking-wide text-[--color-text-muted] font-medium block mb-2">
          Projects
        </span>
        <h1 className="text-4xl md:text-5xl font-semibold text-[--color-primary] mb-6">
          Things I've built.
        </h1>
        <p className="text-base text-[--color-text-muted] leading-relaxed max-w-2xl">
          A mix of professional work and personal projects — fetched dynamically via the GitHub REST API.
        </p>
      </section>

      {/* Error State */}
      {error && (
        <div className="w-full py-20 px-6 max-w-5xl mx-auto text-center flex flex-col items-center flex-grow">
          <div className="bg-[--color-surface] border border-[--color-border] rounded-xl p-8 max-w-md w-full">
            <h2 className="text-xl font-medium text-[--color-primary] mb-4">Error loading projects</h2>
            <p className="text-[--color-text-muted] mb-6">{error}</p>
            <a href="https://github.com/sinhaniik" target="_blank" rel="noopener noreferrer" className="inline-flex justify-center items-center px-6 py-3 bg-[--color-primary] text-[--color-surface] rounded-lg font-medium transition duration-150 ease-in-out hover:bg-[--color-secondary]">
              View on GitHub
            </a>
          </div>
        </div>
      )}

      {/* Loading State */}
      {loading && !error && (
        <section className="w-full pb-32 pt-8 px-6 md:px-16 lg:px-32 max-w-5xl mx-auto flex-grow">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {[...Array(6)].map((_, i) => <SkeletonCard key={i} />)}
          </div>
        </section>
      )}

      {/* Content State */}
      {!loading && !error && repos.length > 0 && (
        <>
          {/* Featured Projects */}
          {featuredRepos.length > 0 && (
            <section className="w-full pb-20 pt-8 px-6 md:px-16 lg:px-32 max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:grid-rows-2 gap-6 items-stretch">
                {featuredRepos.map((project, idx) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    isFeatured={true}
                    isLarge={idx === 0}
                    index={idx}
                  />
                ))}
              </div>
            </section>
          )}

          {/* All Projects Filter Grid */}
          <section className="w-full pb-32 px-6 md:px-16 lg:px-32 max-w-5xl mx-auto">
            <div className="flex flex-wrap items-center gap-2 mb-10 pb-6 border-b border-[--color-border]">
              {tabs.map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-1 rounded-full text-[14px] font-medium transition-colors ${activeTab === tab
                    ? 'bg-[--color-primary] text-[--color-surface]'
                    : 'bg-transparent text-[--color-text-muted] hover:text-[--color-text]'
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
              {finalFilteredProjects.map((project, idx) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  isFeatured={false}
                  isLarge={false}
                  index={featuredRepos.length + idx}
                />
              ))}
              {finalFilteredProjects.length === 0 && (
                <div className="col-span-full py-12 text-center text-[--color-text-muted]">
                  No repositories found for this category.
                </div>
              )}
            </div>
          </section>
        </>
      )}
    </div>
  );
}
