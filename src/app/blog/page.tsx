// src/app/blog/page.tsx
import { getPosts } from '@/lib/posts';
import Link from 'next/link';
import SearchBar from '@/components/search-bar';

interface BlogPageProps {
  searchParams?: {
    query?: string;
  };
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const query = searchParams?.query?.toLowerCase() || '';
  const allPosts = await getPosts();
  
  const filteredPosts = query 
    ? allPosts.filter(post => post.title.toLowerCase().includes(query))
    : allPosts;

  return (
    <div>
      <h1>Blog</h1>
      
      <SearchBar />
      
      {query && (
        <p>
          {filteredPosts.length} blog(s) found for "{query}"
        </p>
      )}
      
      {filteredPosts.length > 0 ? (
        <ul>
          {filteredPosts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`}>
                {post.title}
              </Link>
              <p>{post.date}</p>
              <p>
                {post.content.substring(0, 150)}...
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <div>
          <p>
            {query ? 'No post found' : 'No posts with that title'}
          </p>
        </div>
      )}
    </div>
  );
}