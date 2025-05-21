// src/sections/(Blogsec)/BlogCardSec.tsx
import { getBlogs } from '@/lib/blog';
import BlogPostCard from '@/components/BlogPostCard';
import { BlogsType } from '@/types/type';

export default async function BlogCardSec() {
  const blogposts: BlogsType[] = await getBlogs();

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          {blogposts.map((post, index) => (
            <BlogPostCard
              key={index}
              title={post.title}
              imageSrc={post.thumb_image} 
              slug={post.slug} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}