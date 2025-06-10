"use client";
import Image from 'next/image';
import Link from 'next/link';

interface BlogCardProps {
  title: string;
  imageSrc: string;
  slug: string;
  description: string; 
}

const truncateHTML = (html: string, maxLength: number) => {
  const temp = document.createElement('div');
  temp.innerHTML = html;
  const text = temp.textContent || temp.innerText || '';
  return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
};

const BlogPostCard: React.FC<BlogCardProps> = ({ title, imageSrc, slug, description }) => {
  const shortDescription = truncateHTML(description, 80);

  return (
    <Link
      href={`/blog/${slug}`}
      className="bg-white rounded-lg shadow-md overflow-hidden w-full mx-auto md:max-w-sm min-h-md" 
    >
      <div className="relative md:w-full h-38">
        <Image
          src={imageSrc}
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
          className="rounded-t-lg"
        />
      </div>
      <div className="py-6 px-4 text-center flex flex-col justify-between">
        <h3 className="text-[24px] font-serif custom-color mb-2">{title}</h3>
        <div
          className="text-base color-desc"
          dangerouslySetInnerHTML={{ __html: shortDescription }}
        />
      </div>
    </Link>
  );
};

export default BlogPostCard;