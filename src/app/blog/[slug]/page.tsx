export default async function Page(props: PageProps<'/blog/[slug]'>) {
    const { slug } = await props.params
    return <h1>Blog post: {slug}</h1>
  }