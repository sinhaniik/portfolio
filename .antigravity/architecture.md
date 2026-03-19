# Project Architecture

## Folder Structure
```
portfolio/
  .antigravity/         ← AI context files (this folder)
  public/               ← static files served as-is
  src/
    assets/             ← resume.pdf, profile photo, SVGs
    components/         ← shared UI components
      Home/
        Home.tsx
        style.css
      Navbar/
        Navbar.tsx
      Footer/
        Footer.tsx
      ProjectCard/
        ProjectCard.tsx
      BlogCard/
        BlogCard.tsx
      SEO/
        SEO.tsx
    pages/              ← one file per route
      Home.tsx          ← already exists (keep)
      About.tsx
      Projects.tsx
      Blog.tsx
      BlogPost.tsx
      Contact.tsx
      NotFoundPage.tsx  ← already exists (keep)
    posts/              ← MDX blog files
      linux-ssh-setup.mdx
      linux-file-permissions.mdx
      ... (one per DevOps roadmap topic)
    data/               ← static typed data
      projects.ts       ← project list with descriptions
      skills.ts         ← tools and tech grouped by category
    hooks/              ← custom hooks
      usePosts.ts       ← aggregates MDX posts via import.meta.glob
    store/              ← already exists
      slices/
        themeSlice.ts   ← light/dark mode toggle
        index.ts
      index.ts
    App.tsx
    main.tsx
    index.css           ← Tailwind directives + CSS variables
    vite-env.d.ts
```

## Routing (React Router DOM v7)
```
/              → pages/Home.tsx
/about         → pages/About.tsx
/projects      → pages/Projects.tsx
/blog          → pages/Blog.tsx
/blog/:slug    → pages/BlogPost.tsx
/contact       → pages/Contact.tsx
*              → pages/NotFoundPage.tsx
```

## Dark Mode Strategy
- Controlled via Redux: `themeSlice` stores `"light" | "dark"`
- On toggle, apply/remove `dark` class on `<html>` element
- Tailwind reads this class for all `dark:` variants
- Persist preference to localStorage via themeSlice middleware

## Blog / MDX Setup (to be added)
- Install: `@mdx-js/rollup` and `remark-frontmatter` + `remark-mdx-frontmatter`
- Each .mdx file has frontmatter: title, date, description, tags, slug
- `usePosts.ts` uses `import.meta.glob('../posts/*.mdx')` to collect all posts
- `BlogPost.tsx` dynamically imports the matching MDX file by slug param