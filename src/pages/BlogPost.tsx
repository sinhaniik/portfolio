import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import { SEO } from '@/components/SEO/SEO';
import { getBlogPost } from '@/utils/localBlogPosts';
import './Blog.css';

const FONT_URL = 'https://fonts.googleapis.com/css2?family=Newsreader:opsz,wght@6..72,400;6..72,500;6..72,600&display=swap';

export default function BlogPost() {
  const { slug } = useParams();
  const post = getBlogPost(slug);

  if (!post) {
    return (
      <div className="blog-editorial mx-auto w-full max-w-2xl px-6 py-20 md:px-10">
        <Helmet>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href={FONT_URL} rel="stylesheet" />
        </Helmet>
        <h1 className="mb-4 text-4xl font-semibold text-primary">Post not found.</h1>
        <p className="mb-8 text-lg text-text-muted">
          This post may have moved or is not published yet.
        </p>
        <Link to="/blog" className="text-lg text-primary underline underline-offset-4">
          Back to writing
        </Link>
      </div>
    );
  }

  const { Content, frontmatter } = post;
  const publishedDate = new Date(frontmatter.date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div className="blog-editorial w-full px-6 pb-32 pt-16 md:px-10 md:pt-20">
      <SEO title={frontmatter.title} description={frontmatter.description} type="article" />
      <Helmet>
        <title>{frontmatter.title} | Nikhil</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href={FONT_URL} rel="stylesheet" />
      </Helmet>

      <article className="mx-auto max-w-2xl">
        <Link
          to="/blog"
          className="mb-12 inline-block text-base text-text-muted underline decoration-border underline-offset-4 transition-colors duration-150 hover:text-primary"
        >
          &larr; All writing
        </Link>

        <header className="mb-12 border-b border-border pb-10">
          <p className="mb-4 text-base text-text-muted">
            {publishedDate} <span className="mx-2">&middot;</span> {frontmatter.readTime}
          </p>
          <h1 className="mb-6 text-4xl font-semibold leading-tight text-primary md:text-6xl">
            {frontmatter.title}
          </h1>
          <p className="text-xl leading-relaxed text-text-muted md:text-2xl md:leading-relaxed">
            {frontmatter.description}
          </p>
        </header>

        <div className="blog-prose">
          <Content />
        </div>
      </article>
    </div>
  );
}
