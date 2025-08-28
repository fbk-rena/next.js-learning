// src/lib/posts.ts
export type Post = {
  slug: string
  title: string
  date: string
  content: string
}

// Ejemplo con datos fake
export async function getPosts(): Promise<Post[]> {
  return [
    {
      slug: 'post-1',
      title: 'Mi primer post',
      date: '2025-08-20',
      content: 'Contenido de prueba del primer post.',
    },
    {
      slug: 'post-2',
      title: 'Mi segundo post',
      date: '2025-08-25',
      content: 'Contenido de prueba del segundo post.',
    },
  ]
}
