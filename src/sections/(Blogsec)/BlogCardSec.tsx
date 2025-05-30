// src/sections/(Blogsec)/BlogCardSec.tsx
import { getBlogs } from '@/lib/blog';
import BlogPostCard from '@/components/BlogPostCard';
import { BlogsType } from '@/types/type';

export default async function BlogCardSec() {
  const blogposts: BlogsType[] = await getBlogs();

  return (
    <section className="py-16">
      <div className="container mx-auto px-0 sm:px-6 ">
        <div className="md:w-[100%] w-[80%]  mx-auto md:mx-0 grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {blogposts.map((post, index) => (
            <BlogPostCard
              key={index}
              title={post.title}
              imageSrc={post.image} 
              slug={post.slug}
              description={post.description} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}