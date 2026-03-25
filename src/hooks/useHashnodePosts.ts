import { useState, useEffect } from 'react';

export interface HashnodePost {
  id: string;
  title: string;
  brief: string;
  slug: string;
  publishedAt: string;
  readTimeInMinutes: number;
  tags: { name: string; slug: string }[];
  coverImage: { url: string } | null;
  url: string;
}

export interface UseHashnodePostsReturn {
  posts: HashnodePost[];
  loading: boolean;
  error: string | null;
}

const QUERY = `
query GetPosts($host: String!) {
  publication(host: $host) {
    posts(first: 20) {
      edges {
        node {
          id
          title
          brief
          slug
          publishedAt
          readTimeInMinutes
          tags {
            name
            slug
          }
          coverImage {
            url
          }
          url
        }
      }
    }
  }
}
`;

export function useHashnodePosts(): UseHashnodePostsReturn {
  const [posts, setPosts] = useState<HashnodePost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchPosts() {
      try {
        setLoading(true);
        const response = await fetch("https://gql.hashnode.com", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            query: QUERY,
            variables: { host: "sinhaniik.hashnode.dev" },
          }),
        });

        if (!response.ok) {
          throw new Error("Network error");
        }

        const data = await response.json();
        
        if (data.errors) {
          throw new Error(data.errors[0]?.message || "GraphQL Error");
        }

        const fetchedPosts = data.data?.publication?.posts?.edges?.map((e: any) => e.node) || [];
        
        if (isMounted) {
          setPosts(fetchedPosts);
          setLoading(false);
          // Failsafe in case of empty
          if (fetchedPosts.length === 0) {
            setError("Could not load posts. Visit the blog directly on Hashnode.");
          }
        }
      } catch (err) {
        if (isMounted) {
          setError("Could not load posts. Visit the blog directly on Hashnode.");
          setLoading(false);
        }
      }
    }

    fetchPosts();

    return () => { isMounted = false; };
  }, []);

  return { posts, loading, error };
}
