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

      <div >
        <p className="text-5xl font-semibold px-4">Digər bloq yazıları</p>
      </div>
      </Reveal>
      <Reveal>
      <BlogCardSec />
      </Reveal>
    </div>
  );
}

