import { Link } from 'react-router-dom';
import { projects } from '../../data/projects';

export const FeaturedProjectsSection = () => {
  return (
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
                    className="group inline-flex items-center text-sm font-medium text-primary hover:text-secondary transition-colors duration-150 ease-in-out"
                  >
                    GitHub <span className="ml-1 transition-transform duration-150 ease-in-out group-hover:translate-x-1">&rarr;</span>
                  </a>
                )}
                {project.liveUrl !== undefined && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center text-sm font-medium text-primary hover:text-secondary transition-colors duration-150 ease-in-out"
                  >
                    Live Demo <span className="ml-1 transition-transform duration-150 ease-in-out group-hover:translate-x-1">&rarr;</span>
                  </a>
                )}
              </div>
            </div>
          ))}
      </div>

      <div>
        <Link
          to="/projects"
          className="group inline-flex items-center text-base font-medium text-primary hover:text-secondary transition-colors duration-150 ease-in-out"
        >
          See All Projects <span className="ml-1 transition-transform duration-150 ease-in-out group-hover:translate-x-1">&rarr;</span>
        </Link>
      </div>
    </section>
  );
};
