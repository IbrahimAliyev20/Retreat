
import BlogList from '@/components/(Blog)/BlogList';
import { getBlogs } from '@/lib/blog';
import { BlogsType } from '@/types/type';

export default async function BlogCardSec() {
  const blogposts: BlogsType[] = await getBlogs();

  return (
    <section className="py-16">
      <div className="container mx-auto px-0 sm:px-6">
        <BlogList allPosts={blogposts} />
      </div>
    </section>
  );
}