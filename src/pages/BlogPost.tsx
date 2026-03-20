import { useParams } from 'react-router-dom';
import { SEO } from '@/components/SEO/SEO';

export default function BlogPost() {
  const { slug } = useParams();

  return (
    <div className="py-20 px-6 md:px-16 lg:px-32 max-w-5xl mx-auto">
      <SEO title={`Blog Post: ${slug}`} description="Reading a detailed post about development and DevOps." />
      <h1 className="text-4xl font-semibold text-primary mb-4">Blog Post</h1>
      <p>Slug: {slug}</p>
    </div>
  );
}
