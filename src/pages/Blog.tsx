import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO/SEO';
import { blogPosts, blogYear, type BlogPostCategory } from '@/utils/localBlogPosts';
import './Blog.css';

const FONT_URL = 'https://fonts.googleapis.com/css2?family=Newsreader:opsz,wght@6..72,400;6..72,500;6..72,600&display=swap';

interface PostListProps {
  category: BlogPostCategory;
  emptyMessage: string;
}

const PostList = ({ category, emptyMessage }: PostListProps) => {
  const posts = blogPosts.filter((post) => post.frontmatter.category === category);

  if (posts.length === 0) {
    return <p className="text-lg text-text-muted italic">{emptyMessage}</p>;
  }

  return (
    <ul className="blog-post-list">
      {posts.map((post) => (
        <li key={post.slug} className="text-xl leading-snug text-text">
          <Link
            to={`/blog/${post.slug}`}
            className="underline decoration-border decoration-1 underline-offset-4 transition-colors duration-150 hover:text-primary hover:decoration-primary"
          >
            {post.frontmatter.title}
          </Link>
          <span className="ml-2 text-base text-text-muted">
            ({blogYear(post.frontmatter.date)})
          </span>
        </li>
      ))}
    </ul>
  );
};

export default function Blog() {
  return (
    <div className="blog-editorial w-full px-6 pb-32 pt-16 md:px-10 md:pt-20">
      <SEO
        title="Writing"
        description="Essays and notes about software engineering, infrastructure, and learning systems by Nikhil Sinha."
      />
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href={FONT_URL} rel="stylesheet" />
      </Helmet>

      <article className="mx-auto max-w-2xl">
        <header className="mb-16 border-b border-border pb-10">
          <p className="mb-3 text-base text-text-muted">Nikhil Sinha</p>
          <h1 className="mb-8 text-5xl font-semibold leading-none text-primary md:text-6xl">
            Writing
          </h1>
          <p className="max-w-xl text-xl leading-relaxed text-text md:text-2xl md:leading-relaxed">
            Notes on Linux, containers, delivery pipelines, and cloud infrastructure.
          </p>
        </header>

        <section className="mb-14" aria-labelledby="essays-heading">
          <h2 id="essays-heading" className="mb-5 text-2xl font-semibold text-primary">
            Essays
          </h2>
          <PostList
            category="Essay"
            emptyMessage="Long-form essays will appear here."
          />
        </section>

        <section aria-labelledby="notes-heading">
          <h2 id="notes-heading" className="mb-5 text-2xl font-semibold text-primary">
            Notes
          </h2>
          <PostList
            category="Note"
            emptyMessage="Shorter technical notes will appear here."
          />
        </section>
      </article>
    </div>
  );
}
