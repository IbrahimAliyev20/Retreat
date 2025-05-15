"use client";
import Image from 'next/image';

interface BlogCardProps {
  title: string;
  description: string;
  imageSrc: string;
  delay: number;
}
const BlogPostCard: React.FC<BlogCardProps> = ({ title, description, imageSrc,  }) => {

  return (
    <div
      className="bg-[#f3e8ce] rounded-lg shadow-md overflow-hidden  max-w-sm"
    >
      <div className="relative w-full h-78">
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
      <div className="p-6 text-center">
        <h3 className="text-3xl font-serif text-[#564418] mb-2">{title}</h3>
        <p className="text-[#564418] opacity-80">{description}</p>
      </div>
    </div>
  );
};

export default BlogPostCard;