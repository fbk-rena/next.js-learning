// src/components/like-button.tsx
'use client';

import { useState } from 'react';

interface LikeButtonProps {
  initialLikes?: number;
  slug: string;
}

export default function LikeButton({ initialLikes = 0, slug }: LikeButtonProps) {
  const [likes, setLikes] = useState(initialLikes);
  const [hasLiked, setHasLiked] = useState(false);

  const handleLike = () => {
    if (hasLiked) {
      setLikes(prev => prev - 1);
    } else {
      setLikes(prev => prev + 1);
    }
    setHasLiked(!hasLiked);
    
    console.log(`I love this post: ${slug}`);
  };

  return (
    <div>
      <button onClick={handleLike} type="button">
        {hasLiked ? '❤️' : '🤍'} {likes} likes
      </button>
    </div>
  );
}