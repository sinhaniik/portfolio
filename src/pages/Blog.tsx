import React, { useState, useEffect } from 'react';
import { SEO } from '@/components/SEO/SEO';
import { useHashnodePosts, HashnodePost } from '@/hooks/useHashnodePosts';
import { formatDate, getCoverColor } from '@/utils/blogHelpers';
import { useAppSelector } from '@/store/hooks';

export default function Blog() {
  const { posts, loading, error } = useHashnodePosts();
  const [previewPost, setPreviewPost] = useState<HashnodePost | null>(null);
  const theme = useAppSelector((state) => state.theme.mode);

  // Close modal on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { 
      if (e.key === "Escape") setPreviewPost(null); 
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setPreviewPost(null);
    }
  };

  return (
    <div className="w-full">
      <SEO title="Blog" description="Documenting my journey through Linux, Docker, CI/CD, and cloud infrastructure." />
      <style>{`
        @keyframes pulse-skeleton {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        .animate-pulse-skeleton {
          animation: pulse-skeleton 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
      
      {/* Section 1 — Hero */}
      <section className="w-full pt-20 pb-12 px-6 md:px-16 lg:px-32 max-w-5xl mx-auto">
        <span className="text-[12px] uppercase tracking-wide text-[--color-text-muted] font-medium block mb-2">
          Blog
        </span>
        <h1 className="text-4xl md:text-5xl font-semibold text-[--color-primary] mb-6">
          Writing about DevOps.
        </h1>
        <p className="text-base text-[--color-text-muted] leading-relaxed max-w-2xl mb-4">
          Documenting my journey through Linux, Docker, CI/CD, and cloud infrastructure — written for developers making the same transition.
        </p>
        <a href="https://sinhaniik.hashnode.dev/" target="_blank" rel="noopener noreferrer" className="inline-block text-[14px] font-medium text-[--color-primary] hover:underline transition-all">
          All posts also available on Hashnode &rarr;
        </a>
      </section>

      {/* Main Content Area */}
      <section className="w-full pb-32 px-6 md:px-16 lg:px-32 max-w-5xl mx-auto">
        {/* Error State */}
        {error && (
          <div className="w-full bg-[--color-surface] border-[0.5px] border-[--color-border] rounded-xl p-8 text-center flex flex-col items-center gap-6">
            <p className="text-base text-[--color-text-muted]">{error}</p>
            <a href="https://sinhaniik.hashnode.dev/" target="_blank" rel="noopener noreferrer" className="inline-flex justify-center items-center px-6 py-3 bg-[--color-primary] text-[--color-surface] dark:text-[--color-background] rounded-lg font-medium transition duration-150 ease-in-out hover:bg-[--color-secondary]">
              Visit Hashnode Blog
            </a>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="flex flex-col gap-12">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex flex-col md:flex-row gap-6 w-full animate-pulse-skeleton">
                <div className="w-full md:w-[300px] h-[200px] bg-[--color-surface] border-[0.5px] border-[--color-border] rounded-xl"></div>
                <div className="flex-1 flex flex-col justify-center space-y-4">
                  <div className="h-6 bg-[--color-surface] rounded w-3/4"></div>
                  <div className="h-4 bg-[--color-surface] rounded w-full"></div>
                  <div className="h-4 bg-[--color-surface] rounded w-2/3"></div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Loaded State */}
        {!loading && !error && posts.length > 0 && (
          <div className="flex flex-col gap-12">
            {/* Section 3 — Featured Post */}
            <article className="w-full group flex flex-col md:flex-row bg-[--color-surface] border-[0.5px] border-[--color-border] rounded-xl overflow-hidden transition-all duration-150 hover:-translate-y-[2px] hover:border-[--color-primary] relative">
              {/* Left Side (Cover) */}
              <div className="w-full md:w-2/5 shrink-0 overflow-hidden relative flex flex-col border-b md:border-b-0 md:border-r border-[--color-border]">
                {posts[0].coverImage?.url ? (
                  <img src={posts[0].coverImage.url} alt={posts[0].title} className="w-full h-[160px] md:h-full object-cover transition-transform duration-500 group-hover:scale-105 flex-1" />
                ) : (
                  <div className="w-full h-[160px] md:h-[280px] md:flex-1" style={{ backgroundColor: getCoverColor(0) }}>
                    {/* Hashnode cover image fallback to color band */}
                  </div>
                )}
              </div>
              
              {/* Right Side (Content) */}
              <div className="p-8 md:p-10 flex flex-col justify-center flex-1">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {posts[0].tags.slice(0, 3).map(tag => (
                    <span key={tag.slug} className="bg-[--color-surface] text-[--color-primary] text-[11px] font-medium rounded-full px-3 py-1 border border-[--color-border]">
                      {tag.name}
                    </span>
                  ))}
                </div>

                <h2 className="text-2xl md:text-3xl font-semibold text-[--color-text] group-hover:text-[--color-primary] transition-colors mb-4 line-clamp-2">
                  <a href={posts[0].url} target="_blank" rel="noopener noreferrer">{posts[0].title}</a>
                </h2>
                
                <p className="text-base text-[--color-text-muted] leading-relaxed line-clamp-3 mb-6">
                  {posts[0].brief}
                </p>
                
                <div className="text-[13px] text-[--color-text-muted] font-medium mb-4">
                  {formatDate(posts[0].publishedAt)} <span className="mx-2">&middot;</span> {posts[0].readTimeInMinutes} min read
                </div>
                
                <div className="flex flex-wrap gap-[10px] mt-4">
                  <a href={posts[0].url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 bg-[--color-primary] text-[--color-surface] dark:text-[--color-background] rounded-lg text-[13px] font-medium whitespace-nowrap hover:bg-[--color-secondary] transition-colors">
                    Read on Hashnode
                  </a>
                  <button onClick={() => setPreviewPost(posts[0])} className="inline-flex items-center px-4 py-2 bg-transparent border border-[--color-primary] text-[--color-primary] rounded-lg text-[13px] font-medium whitespace-nowrap cursor-pointer hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                    Quick Preview
                  </button>
                </div>
              </div>
            </article>

            {/* Section 4 — Post List */}
            {posts.length > 1 && (
              <div className="flex flex-col gap-8">
                {posts.slice(1).map((post, idx) => (
                  <article key={post.id} className="w-full group relative flex flex-col md:flex-row bg-[--color-surface] border-[0.5px] border-[--color-border] rounded-xl overflow-hidden transition-all duration-150 hover:-translate-y-[2px] hover:border-[--color-primary]">
                    {/* Left Side (Cover Band) */}
                    <div className="w-full md:w-[220px] h-[160px] shrink-0 relative flex flex-col border-b md:border-b-0 md:border-r border-[--color-border]">
                      {post.coverImage?.url ? (
                        <img src={post.coverImage.url} alt={post.title} className="w-full h-full object-cover flex-1" />
                      ) : (
                        <div className="w-full h-full flex-1" style={{ backgroundColor: getCoverColor(idx + 1) }}></div>
                      )}
                    </div>
                    
                    {/* Right Side (Content) */}
                    <div className="p-6 md:p-8 flex flex-col justify-center flex-1">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {post.tags.slice(0, 3).map(tag => (
                          <span key={tag.slug} className="bg-[--color-surface] text-[--color-primary] text-[11px] font-medium rounded-full px-3 py-1 border border-[--color-border]">
                            {tag.name}
                          </span>
                        ))}
                      </div>
                      
                      <h3 className="text-xl md:text-2xl font-semibold text-[--color-text] group-hover:text-[--color-primary] transition-colors mb-2 line-clamp-2">
                        <a href={post.url} target="_blank" rel="noopener noreferrer">{post.title}</a>
                      </h3>
                      
                      <p className="text-[14px] text-[--color-text-muted] line-clamp-2 leading-relaxed mb-4">
                        {post.brief}
                      </p>
                      
                      <div className="text-[13px] text-[--color-text-muted] font-medium mb-4">
                        {formatDate(post.publishedAt)} <span className="mx-2">&middot;</span> {post.readTimeInMinutes} min read
                      </div>
                      
                      <div className="flex flex-wrap gap-[10px] mt-2">
                        <a href={post.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 bg-[--color-primary] text-[--color-surface] dark:text-[--color-background] rounded-lg text-[13px] font-medium whitespace-nowrap hover:bg-[--color-secondary] transition-colors">
                          Read on Hashnode
                        </a>
                        <button onClick={() => setPreviewPost(post)} className="inline-flex items-center px-4 py-2 bg-transparent border border-[--color-primary] text-[--color-primary] rounded-lg text-[13px] font-medium whitespace-nowrap cursor-pointer hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                          Quick Preview
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
            </div>
            )}
          </div>
        )}
      </section>

      {/* Step 4 — Preview Modal */}
      {previewPost && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6" style={{ backgroundColor: 'rgba(17, 10, 12, 0.85)' }} onClick={handleBackdropClick}>
          <div 
            className="relative w-full max-w-lg rounded-2xl p-8 max-h-[90vh] overflow-y-auto" 
            onClick={e => e.stopPropagation()}
            style={{
              backgroundColor: theme === "dark" ? "#1e0f13" : "#F5EDE0",
              border: "0.5px solid",
              borderColor: theme === "dark" ? "#2e1820" : "#C7B7A3",
              boxShadow: theme === "dark" ? "0 8px 32px rgba(0,0,0,0.6)" : "0 8px 32px rgba(86,28,36,0.15)"
            }}
          >
            <button 
              onClick={() => setPreviewPost(null)}
              className="absolute top-6 right-6 text-[--color-text-muted] hover:text-[--color-text] transition-colors flex items-center justify-center w-8 h-8 rounded-full bg-[--color-surface] hover:bg-[--color-border] border-[0.5px] border-[--color-border]/50"
              aria-label="Close modal"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            
            <div className="flex flex-wrap gap-2 mb-4 pr-8">
              {previewPost.tags.slice(0, 3).map(tag => (
                <span key={tag.slug} className="bg-[--color-surface] text-[--color-primary] text-[11px] font-medium rounded-full px-3 py-1 border border-[--color-border]">
                  {tag.name}
                </span>
              ))}
            </div>
            
            <h3 className="text-2xl font-semibold text-[--color-primary] mb-3 pr-4">
              {previewPost.title}
            </h3>
            
            <div className="text-[13px] text-[--color-text-muted] font-medium mb-6">
              {formatDate(previewPost.publishedAt)} <span className="mx-2">&middot;</span> {previewPost.readTimeInMinutes} min read
            </div>
            
            <div className="text-[15px] text-[--color-text-muted] leading-[1.8] mb-8">
              {previewPost.brief}
            </div>
            
            <div className="w-full h-[1px] bg-[--color-border] mb-8"></div>
            
            <a href={previewPost.url} target="_blank" rel="noopener noreferrer" className="flex justify-center items-center w-full px-6 py-3.5 bg-[--color-primary] text-[--color-surface] dark:text-[--color-background] rounded-lg font-medium transition duration-150 ease-in-out hover:bg-[--color-secondary]">
              Read full post on Hashnode &rarr;
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
