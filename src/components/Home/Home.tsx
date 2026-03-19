import React from 'react';
import { Link } from 'react-router-dom';
import { skills } from '../../data/skills';
import { projects } from '../../data/projects';

// Group skills
const devSkills = skills.filter((s) => s.category === 'Dev');
const devopsSkills = skills.filter((s) => s.category === 'DevOps');
const toolsSkills = skills.filter((s) => s.category === 'Tools');

const Home: React.FC = () => {
  return (
    <div className="w-full">
      {/* Section 1 — Hero */}
      <section className="min-h-screen flex flex-col justify-center py-20 px-6 md:px-16 lg:px-32 max-w-5xl mx-auto">
        <p className="text-sm font-medium text-text-muted mb-2">Hey, I'm</p>
        <h1 className="text-5xl md:text-6xl font-semibold text-primary mb-4 leading-tight">
          Nikhil
        </h1>
        <h2 className="text-xl md:text-2xl font-medium text-text-muted mb-6">
          Full-Stack Developer &rarr; DevOps Engineer
        </h2>
        <p className="text-base font-normal text-text-muted max-w-2xl mb-10 leading-relaxed">
          I build web applications and I am actively transitioning into DevOps. Currently deep in Linux, Docker, and cloud infrastructure.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <Link
            to="/projects"
            className="inline-flex justify-center items-center px-6 py-3 bg-primary text-surface rounded-lg font-medium transition duration-150 ease-in-out hover:bg-secondary"
          >
            View My Work
          </Link>
          <Link
            to="/blog"
            className="inline-flex justify-center items-center px-6 py-3 border-2 border-primary text-primary rounded-lg font-medium transition duration-150 ease-in-out hover:bg-primary hover:text-surface"
          >
            Read My Blog
          </Link>
        </div>
        
        <p className="text-sm font-normal text-text-muted">
          Open to DevOps roles in USA &middot; Canada &middot; Australia &middot; Europe
        </p>
      </section>

      {/* Section 2 — Skills Snapshot */}
      <section className="py-20 px-6 md:px-16 lg:px-32 max-w-5xl mx-auto">
        <h2 className="text-3xl font-medium text-text mb-10">What I Work With</h2>
        
        <div className="space-y-8">
          {/* DevOps Skills (Visually distinct - warmer background) */}
          <div>
            <h3 className="text-sm font-medium text-text-muted mb-4 uppercase tracking-wider">DevOps</h3>
            <div className="flex flex-wrap gap-3">
              {devopsSkills.map((skill) => (
                <span
                  key={skill.name}
                  className="px-4 py-2 bg-muted text-text rounded-full text-sm font-medium transition duration-150 ease-in-out hover:bg-secondary hover:text-surface"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          {/* Dev Skills */}
          <div>
            <h3 className="text-sm font-medium text-text-muted mb-4 uppercase tracking-wider">Development</h3>
            <div className="flex flex-wrap gap-3">
              {devSkills.map((skill) => (
                <span
                  key={skill.name}
                  className="px-4 py-2 bg-surface text-text rounded-full text-sm font-medium transition duration-150 ease-in-out hover:bg-muted"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-sm font-medium text-text-muted mb-4 uppercase tracking-wider">Tools</h3>
            <div className="flex flex-wrap gap-3">
              {toolsSkills.map((skill) => (
                <span
                  key={skill.name}
                  className="px-4 py-2 bg-surface text-text rounded-full text-sm font-medium transition duration-150 ease-in-out hover:bg-muted"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Featured Projects */}
      <section className="py-20 px-6 md:px-16 lg:px-32 max-w-5xl mx-auto">
        <h2 className="text-3xl font-medium text-text mb-10">Selected Work</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {projects
            .filter((p) => p.featured)
            .slice(0, 3)
            .map((project) => (
              <div
                key={project.title}
                className="bg-surface rounded-xl p-6 shadow-[0_2px_12px_rgba(86,28,36,0.08)] dark:shadow-[0_2px_12px_rgba(0,0,0,0.3)] flex flex-col h-full"
              >
                <h3 className="text-xl font-medium text-text mb-3">{project.title}</h3>
                <p className="text-base text-text-muted mb-6 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-background text-text-muted rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.githubUrl !== undefined && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-primary hover:text-secondary transition duration-150 ease-in-out"
                    >
                      GitHub &rarr;
                    </a>
                  )}
                  {project.liveUrl !== undefined && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-primary hover:text-secondary transition duration-150 ease-in-out"
                    >
                      Live Demo &rarr;
                    </a>
                  )}
                </div>
              </div>
            ))}
        </div>
        
        <div>
          <Link
            to="/projects"
            className="text-base font-medium text-primary hover:text-secondary transition duration-150 ease-in-out inline-flex items-center"
          >
            See All Projects &rarr;
          </Link>
        </div>
      </section>

      {/* Section 4 — Resume CTA */}
      <section className="py-20 px-6 md:px-16 lg:px-32 max-w-5xl mx-auto text-center border-t border-muted mt-10">
        <h2 className="text-3xl font-medium text-text mb-4">Want the full picture?</h2>
        <p className="text-base text-text-muted mb-8">
          Download my resume or reach out directly.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/assets/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center items-center px-6 py-3 bg-primary text-surface rounded-lg font-medium transition duration-150 ease-in-out hover:bg-secondary"
          >
            Download Resume
          </a>
          <Link
            to="/contact"
            className="inline-flex justify-center items-center px-6 py-3 border-2 border-primary text-primary rounded-lg font-medium transition duration-150 ease-in-out hover:bg-primary hover:text-surface"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;