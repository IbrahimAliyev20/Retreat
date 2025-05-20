import BlogPostCard from '@/components/BlogPostCard';
import { getBlogs } from '@/lib/blog';
import React from 'react';

const BlogCardSec: React.FC  = async () => {
  const blogpost = await getBlogs()
  
  return (
    <section className="py-16">
      <div className="container mx-auto ">
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          {blogpost.map((post, index) => (
            <BlogPostCard
              key={index}
              title={post.title}
              imageSrc={post.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogCardSec;