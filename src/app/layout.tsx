import './globals.css'
import Link from 'next/link'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <nav className="p-4 border-b">
          {/* Prefetched automáticamente */}
          <Link href="/blog">Blog</Link>

          {/* Sin prefetch (ejemplo de navegación tradicional) */}
          <a href="/contact" className="ml-4">Contact</a>
        </nav>

        <main className="p-4">{children}</main>
      </body>
    </html>
  )
}
