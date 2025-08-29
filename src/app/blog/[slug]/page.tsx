// src/app/blog/[slug]/page.tsx
import { getPosts, getPostBySlug } from '@/lib/posts';
import { notFound } from 'next/navigation';
import LikeButton from '@/components/like-button';

export async function generateStaticParams() {
  const posts = await getPosts();
  
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-600 mb-6">{post.date}</p>
      <div className="prose">
        {post.content}
      </div>
      <LikeButton slug={slug} />
    </article>
  );
}