// src/lib/posts.ts
export type Post = {
  slug: string
  title: string
  date: string
  content: string
}

export async function getPosts(): Promise<Post[]> {
  return [
    {
      slug: 'post-1',
      title: 'First post',
      date: '2025-08-20',
      content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
    },
    {
      slug: 'post-2',
      title: 'Second post',
      date: '2025-08-25',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ]
}
export async function getPostBySlug(slug: string): Promise<Post | null> {
  const posts = await getPosts();
  return posts.find(post => post.slug === slug) || null;
}