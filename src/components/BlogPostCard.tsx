// src/components/BlogPostCard.tsx
import Image from 'next/image';
import Link from 'next/link';

interface BlogCardProps {
  title: string;
  imageSrc: string;
  slug: string;
}

const BlogPostCard: React.FC<BlogCardProps> = ({ title, imageSrc, slug }) => {
  return (
    <Link
      href={`/blog/${slug}`}
      className="bg-white rounded-lg shadow-md overflow-hidden w-[80%] mx-auto  md:max-w-sm min-h-[470px]"
    >
      <div className="relative md:w-full h-78">
        <Image
          src={imageSrc}
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
          className="rounded-t-lg"
        />
      </div>
      <div className="p-6 text-center">
        <h3 className="text-3xl font-serif custom-color mb-2">{title}</h3>
      </div>
    </Link>
  );
};

export default BlogPostCard;