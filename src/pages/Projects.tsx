import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO/SEO';
import { projects, Project } from '@/data/projects';

const ProjectCard = ({ project, isFeatured, isLarge }: { project: Project, isFeatured: boolean, isLarge: boolean }) => {
  const coverHeight = isLarge ? 'h-[120px]' : isFeatured ? 'h-[80px]' : 'h-[60px]';

  return (
    <div className={`group flex flex-col bg-[--color-surface] border-[0.5px] border-[--color-border] rounded-xl overflow-hidden transition-all duration-150 ease-in-out hover:-translate-y-[3px] hover:border-[--color-primary] ${isLarge ? 'md:col-span-2 md:row-span-2' : ''}`}>
      {/* Cover Image Band */}
      <div
        className={`w-full ${coverHeight} relative shrink-0`}
        style={{ backgroundColor: project.coverColor }}
      >
        {/* Replace with actual cover image when available */}
        {project.type === 'professional' && (
          <span className="absolute top-4 right-4 bg-[--color-surface] text-[--color-primary] px-2 py-0.5 rounded-full text-[11px] font-medium tracking-wide border border-[--color-border]">
            Client Work
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col">
        <h3 className="text-xl font-semibold text-[--color-primary] mb-2">
          {project.title}
        </h3>
        <p className={`text-[14px] text-[--color-text-muted] mb-6 leading-relaxed ${!isFeatured ? 'line-clamp-2' : ''}`}>
          {isFeatured ? project.longDescription : project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.slice(0, isFeatured ? undefined : 3).map(tag => (
            <span key={tag} className="bg-[--color-surface] text-[--color-primary] text-[11px] font-medium rounded-full px-2 py-0.5 border border-[--color-border]">
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        {(project.githubUrl || project.liveUrl) && (
          <div className="flex items-center gap-4 pt-4 border-t border-[--color-border]">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[13px] font-medium text-[--color-text-muted] hover:text-[--color-primary] transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                GitHub
              </a>
            )}
            {project.liveUrl && (
              project.liveUrl.startsWith('/') ? (
                <Link to={project.liveUrl} className="flex items-center gap-2 text-[13px] font-medium text-[--color-text-muted] hover:text-[--color-primary] transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                  {project.liveUrl.startsWith('/blog') ? 'Read Posts' : 'View Live'}
                </Link>
              ) : (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[13px] font-medium text-[--color-text-muted] hover:text-[--color-primary] transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                  View Live
                </a>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default function Projects() {
  const [activeTab, setActiveTab] = useState('All');

  const featuredProjects = projects.filter(p => p.featured);
  const filteredProjects = activeTab === 'All'
    ? projects
    : projects.filter(p => p.category === activeTab);

  const tabs = ['All', 'Dev', 'DevOps', 'Personal'];

  return (
    <div className="w-full">
      <SEO title="Projects" description="A mix of professional work and personal projects — from full-stack products to DevOps lab work." />

      {/* Hero */}
      <section className="w-full pt-20 pb-12 px-6 md:px-16 lg:px-32 max-w-5xl mx-auto">
        <span className="text-[12px] uppercase tracking-wide text-[--color-text-muted] font-medium block mb-2">
          Projects
        </span>
        <h1 className="text-4xl md:text-5xl font-semibold text-[--color-primary] mb-6">
          Things I've built.
        </h1>
        <p className="text-base text-[--color-text-muted] leading-relaxed max-w-2xl">
          A mix of professional work and personal projects — from full-stack products to DevOps lab work.
        </p>
      </section>

      {/* Featured Projects */}
      <section className="w-full pb-20 pt-8 px-6 md:px-16 lg:px-32 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 items-start">
          {featuredProjects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              isFeatured={true}
              isLarge={idx === 0}
            />
          ))}
        </div>
      </section>

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {filteredProjects.map(project => (
            <ProjectCard
              key={project.id}
              project={project}
              isFeatured={false}
              isLarge={false}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
