// src/components/search-bar.tsx
'use client';

import { useRouter, useSearchParams } from 'next/navigation';

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSearch = (term: string) => {
    const params = new URLSearchParams(searchParams);
    
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    
    router.replace(`/blog?${params.toString()}`);
  };

  return (
    <div>
      <label htmlFor="search">
        Search posts
      </label>
      <input
        type="text"
        id="search"
        placeholder="Post title..."
        defaultValue={searchParams.get('query')?.toString()}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
}