import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import { SEO } from "@/components/SEO/SEO";
import { formatBlogDate, getBlogPost } from "@/utils/localBlogPosts";
import "./Blog.css";

const FONT_URL =
  "https://fonts.googleapis.com/css2?family=Newsreader:opsz,wght@6..72,400;6..72,500;6..72,600&display=swap";
const CODE_FONT_URL =
  "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap";

type ContentsItem = {
  id: string;
  text: string;
};

function headingId(text: string, index: number, used: Set<string>) {
  const base =
    text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "") || `section-${index}`;
  const id = used.has(base) ? `${base}-${index}` : base;
  used.add(id);
  return id;
}

export default function BlogPost() {
  const { slug } = useParams();
  const post = getBlogPost(slug);
  const [contents, setContents] = useState<ContentsItem[]>([]);
  const [activeId, setActiveId] = useState("");
  const activeLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const root = document.querySelector(".blog-prose");
    if (!root || post?.frontmatter.category !== "Essay") {
      setContents([]);
      return;
    }

    const used = new Set<string>();
    const items = [...root.querySelectorAll("h2")].flatMap((heading, index) => {
      const text = heading.textContent?.trim() ?? "";
      if (!text) return [];
      const id = headingId(text, index, used);
      heading.id = id;
      return [{ id, text }];
    });
    setContents(items);
  }, [slug, post]);

  useEffect(() => {
    const headings = contents
      .map(({ id }) => document.getElementById(id))
      .filter((heading): heading is HTMLElement => heading instanceof HTMLElement);
    if (!headings.length) return;

    const updateActiveHeading = () => {
      const cutoff = window.innerHeight * 0.25;
      const current = headings.reduce(
        (active, heading) =>
          heading.getBoundingClientRect().top <= cutoff ? heading : active,
        headings[0],
      );
      setActiveId(current.id);
    };

    updateActiveHeading();
    window.addEventListener("scroll", updateActiveHeading, { passive: true });
    return () => window.removeEventListener("scroll", updateActiveHeading);
  }, [contents]);

  useEffect(() => {
    activeLinkRef.current?.scrollIntoView({ block: "start", behavior: "smooth" });
  }, [activeId]);

  if (!post) {
    return (
      <div className="blog-editorial mx-auto w-full max-w-2xl px-6 py-20 md:px-10">
        <SEO
          title="Post not found"
          description="This post may have moved or is not published yet."
        />
        <Helmet>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link href={FONT_URL} rel="stylesheet" />
          <link href={CODE_FONT_URL} rel="stylesheet" />
        </Helmet>
        <h1 className="mb-4 text-4xl font-semibold text-primary">
          Post not found.
        </h1>
        <p className="mb-8 text-lg text-text-muted">
          This post may have moved or is not published yet.
        </p>
        <Link
          to="/blog"
          className="text-lg text-primary underline underline-offset-4"
        >
          Back to writing
        </Link>
      </div>
    );
  }

  const { Content, frontmatter } = post;
  const publishedDate = formatBlogDate(frontmatter.date);

  return (
    <div className="blog-editorial -mt-32 w-full px-6 pb-32 pt-16 md:-mt-28 md:px-10 md:pt-20">
      <SEO
        title={frontmatter.title}
        description={frontmatter.description}
        type="article"
      />
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link href={FONT_URL} rel="stylesheet" />
        <link href={CODE_FONT_URL} rel="stylesheet" />
      </Helmet>

      <article id="top" className="relative mx-auto max-w-2xl">
        {contents.length > 0 && (
          <nav
            aria-label="Contents"
            className="blog-toc fixed left-14 top-20 z-30 hidden w-56 xl:block"
          >
            <div className="blog-toc-inner">
              <p className="blog-toc-title">Contents</p>
              <ul className="blog-toc-list">
                {contents.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      ref={activeId === item.id ? activeLinkRef : undefined}
                      aria-current={activeId === item.id ? "location" : undefined}
                      className={`blog-toc-link ${activeId === item.id ? "is-active" : ""}`}
                    >
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        )}
        <Link
          to="/blog"
          className="mb-12 inline-block text-base text-text-muted underline decoration-border underline-offset-4 transition-colors duration-150 hover:text-primary"
        >
          &larr; All writing
        </Link>

        <header className="mb-12 border-b border-border pb-10">
          <p className="mb-4 text-base text-text-muted">
            {publishedDate} <span className="mx-2">&middot;</span>{" "}
            {frontmatter.readTime}
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
        {frontmatter.category === "Essay" && (
          <a className="blog-back-to-top" href="#top">Back to top</a>
        )}
      </article>
    </div>
  );
}
