import { SEO } from '@/components/SEO/SEO';

export default function About() {
  return (
    <div className="py-20 px-6 md:px-16 lg:px-32 max-w-5xl mx-auto">
      <SEO title="About" description="Learn more about Nikhil, a Full-Stack Developer transitioning into DevOps." />
      <h1 className="text-4xl font-semibold text-primary mb-4">About Me</h1>
    </div>
  );
}
