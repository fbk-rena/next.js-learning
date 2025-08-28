export default function Page({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined }
}) {
  const filters = searchParams?.filters

  return (
    <div>
      <h1 className="text-xl font-bold">Home Page</h1>
      <p>Filters: {JSON.stringify(filters)}</p>
    </div>
  )
}
