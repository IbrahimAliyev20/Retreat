import Reveal from '@/components/Reveal';
import BlogCardSec from '@/sections/(Blogsec)/BlogCardSec';
import BlogSingle from '@/sections/(Blogsec)/Blogsinglepage';

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

export default async function Blogpage({ params }: BlogPageProps) {
  const { slug } = await params; 

  return (
     

    <div className="container mx-auto">
     <Reveal>
      <BlogSingle params={{ slug }} />
      </Reveal>
      <Reveal>

      <div className="py-8">
        <p className="text-6xl font-semibold">Other blog posts</p>
      </div>
      </Reveal>
      <Reveal>

      <BlogCardSec />
      </Reveal>
    </div>
  );
}

// export async function generateStaticParams() {
//   const blogs = await getBlogs();
//   return blogs.map((blog) => ({
//     slug: blog.slug,
//   }));
// }