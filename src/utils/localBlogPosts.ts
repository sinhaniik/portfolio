import type { ComponentType } from 'react';
import type { MDXProps } from 'mdx/types';

export type BlogPostCategory = 'Essay' | 'Note';

export interface BlogPostFrontmatter {
  title: string;
  description: string;
  date: string;
  category: BlogPostCategory;
  readTime: string;
  draft?: boolean;
}

interface BlogPostModule {
  default: ComponentType<MDXProps>;
  frontmatter: unknown;
}

export interface LocalBlogPost {
  slug: string;
  frontmatter: BlogPostFrontmatter;
  Content: ComponentType<MDXProps>;
}

const postModules = import.meta.glob<BlogPostModule>('../posts/*.mdx', {
  eager: true,
});

function isBlogPostFrontmatter(value: unknown): value is BlogPostFrontmatter {
  if (!value || typeof value !== 'object') return false;

  const frontmatter = value as Record<string, unknown>;
  return (
    typeof frontmatter.title === 'string' &&
    typeof frontmatter.description === 'string' &&
    typeof frontmatter.date === 'string' &&
    (frontmatter.category === 'Essay' || frontmatter.category === 'Note') &&
    typeof frontmatter.readTime === 'string' &&
    (frontmatter.draft === undefined || typeof frontmatter.draft === 'boolean')
  );
}

function getSlug(filePath: string): string {
  return filePath.split('/').pop()?.replace(/\.mdx$/, '') ?? '';
}

export const blogPosts: LocalBlogPost[] = Object.entries(postModules)
  .flatMap(([filePath, postModule]) => {
    if (!isBlogPostFrontmatter(postModule.frontmatter)) return [];
    if (postModule.frontmatter.draft) return [];

    return [{
      slug: getSlug(filePath),
      frontmatter: postModule.frontmatter,
      Content: postModule.default,
    }];
  })
  .sort(
    (firstPost, secondPost) =>
      new Date(secondPost.frontmatter.date).getTime() -
      new Date(firstPost.frontmatter.date).getTime(),
  );

export function getBlogPost(slug: string | undefined): LocalBlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
