import { Link } from 'react-router-dom';

export const CtaSection = () => {
  return (
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
  );
};
