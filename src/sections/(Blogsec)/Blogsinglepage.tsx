import { getBlogBySlug } from '@/lib/blogslug';
import Image from 'next/image';

interface BlogSingleProps {
  params: { slug: string };
}

export default async function BlogSingle({ params }: BlogSingleProps) {
  const blog = await getBlogBySlug(params.slug);

  return (
    <div className="container mx-auto px-3 sm:px-6 md:px-8 py-6 md:py-16 space-y-12 md:space-y-20">
      <div className="py-8 md:py-16">
        <div className="text-center mb-8">
          <p className="text-base md:text-2xl uppercase text-accent mb-6 md:mb-10">July 8, 2023</p>
          <h1 className="text-3xl md:text-6xl font-bold text-accent leading-tight md:leading-[1.1]">{blog.title}</h1>
        </div>

        <div className="mb-8">
          <div className="relative w-full h-[220px] sm:h-[350px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-lg md:rounded-3xl mx-auto">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg md:rounded-3xl"
            />
          </div>
        </div>

        <article className="space-y-6 md:space-y-8 w-full sm:w-[90%] md:w-[70%] lg:w-[60%] mx-auto">
          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: blog.description }}
          />
        </article>
      </div>
    </div>
  );
}