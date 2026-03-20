import { Link } from 'react-router-dom';

export const HeroSection = () => {
  return (
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
  );
};
