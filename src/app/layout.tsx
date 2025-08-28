// src/app/layout.tsx
import './globals.css';
import Link from 'next/link';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <nav className="p-4 border-b bg-white shadow-sm">
          <div className="max-w-6xl mx-auto flex items-center space-x-6">
            <Link href="/" className="text-lg font-semibold">
              Home
            </Link>
            <Link href="/blog" className="text-blue-600 hover:text-blue-800">
              Blog
            </Link>
            <a href="/contact" className="text-gray-600 hover:text-gray-800">
              Contact
            </a>
          </div>
        </nav>

        <main className="max-w-6xl mx-auto p-4">
          {children}
        </main>
      </body>
    </html>
  );
}