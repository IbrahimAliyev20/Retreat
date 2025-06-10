'use client'; 

import { useState } from 'react';
import BlogPostCard from '@/components/(Blog)/BlogPostCard';
import { BlogsType } from '@/types/type';

const POSTS_PER_PAGE = 6; 

export default function BlogList({ allPosts }: { allPosts: BlogsType[] }) {
  const [visiblePostsCount, setVisiblePostsCount] = useState(POSTS_PER_PAGE);

  const visiblePosts = allPosts.slice(0, visiblePostsCount);

  const handleLoadMore = () => {
    setVisiblePostsCount((prevCount) => prevCount + POSTS_PER_PAGE);
  };

  return (
    <>
      <div className="md:w-[100%] w-[80%] mx-auto md:mx-0 grid grid-cols-1 md:grid-cols-3 gap-8">
        {visiblePosts.map((post) => (
          <BlogPostCard
            key={post.slug}
            title={post.title}
            imageSrc={post.image}
            slug={post.slug}
            description={post.description}
          />
        ))}
      </div>

      {visiblePostsCount < allPosts.length && (
        <div className="text-center mt-12">
          <button
            onClick={handleLoadMore}
            className="border border-[#2e826a] cursor-pointer text-[#2e826a] px-6 py-2 rounded-full hover:bg-[#2e826a] hover:text-white transition"
          >
          Daha çox bax

          </button>
        </div>
      )}
    </>
  );
}