import BlogCardSec from '@/sections/(Blogsec)/BlogCardSec';
import BlogSingle from '@/sections/(Blogsec)/Blogsinglepage';

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

export default async function Blogpage({ params }: BlogPageProps) {
  const { slug } = await params; // params'ı çöz

  return (
    <div className="container mx-auto">
      <BlogSingle params={{ slug }} /> {/* params={{ slug }} olarak geçir */}
      <div className="py-8">
        <p className="text-6xl font-semibold">Other blog posts</p>
      </div>
      <BlogCardSec />
    </div>
  );
}

// export async function generateStaticParams() {
//   const blogs = await getBlogs();
//   return blogs.map((blog) => ({
//     slug: blog.slug,
//   }));
// }