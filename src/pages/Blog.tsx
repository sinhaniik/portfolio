import { SEO } from '@/components/SEO/SEO';

export default function Blog() {
  return (
    <div className="py-20 px-6 md:px-16 lg:px-32 max-w-5xl mx-auto">
      <SEO title="Blog" description="Read articles about technical deep dives, DevOps workflows, and Full-Stack tutorials." />
      <h1 className="text-4xl font-semibold text-primary mb-4">Blog</h1>
    </div>
  );
}
