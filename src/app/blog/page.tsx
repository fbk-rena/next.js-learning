// src/app/blog/page.tsx
import { getPosts } from '@/lib/posts';
import Link from 'next/link';

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Blog</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link 
              href={`/blog/${post.slug}`}
              className="text-blue-600 hover:text-blue-800 hover:underline"
            >
              {post.title}
            </Link>
            <p className="text-sm text-gray-600">{post.date}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}