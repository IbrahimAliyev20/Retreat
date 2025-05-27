import { getBlogBySlug } from '@/lib/blogslug';
import Image from 'next/image';

interface BlogSingleProps {
  params: { slug: string };
}

export default async function BlogSingle({ params }: BlogSingleProps) {
  const blog = await getBlogBySlug(params.slug);

  return (
    <div className="container mx-auto py-0 md:py-25 space-y-20">
      <div className='py-26'>
        <div className="text-center mb-8">
          <p className="text-2xl uppercase text-accent mb-10">July 8, 2023</p>
          <h1 className="text-6xl font-bold text-accent">{blog.title}</h1>
          <p className="text-2xl color-desc mt-10">
            Bədənini necə qidalandırmaq barədə dietoloqumuzun peşəkar tövsiyələrinə nəzər sal...
          </p>
        </div>

        <div className="mb-8">
          <div className="relative w-full h-[600px] overflow-hidden rounded-0 md:rounded-lg">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-0 md:rounded-3xl"
            />
          </div>
        </div>

        <article className="space-y-8 w-[90%] md:w-[60%] mx-auto">
          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: blog.description }}
          />
        </article>
      </div>
    </div>
  );
}