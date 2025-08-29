// src/components/ui/post.tsx
import Link from 'next/link';
import { getPosts } from '@/lib/posts';

export default async function PostList() {
  const posts = await getPosts();

  return (
    <ul className="space-y-3">
      {posts.map((post) => (
        <li key={post.slug} className="border-b pb-3">
          <Link 
            href={`/blog/${post.slug}`}
            className="text-lg font-medium text-blue-600 hover:text-blue-800 hover:underline"
          >
            {post.title}
          </Link>
          <p className="text-sm text-gray-600 mt-1">{post.date}</p>
        </li>
      ))}
    </ul>
  );
}