import Image from 'next/image';
import Link from 'next/link';

interface BlogCardProps {
  title: string;
  imageSrc: string;
}
const BlogPostCard: React.FC<BlogCardProps> = ({ title,  imageSrc,  }) => {

  return (
    <Link href="#"
      className="bg-color-yellow rounded-lg shadow-md overflow-hidden  max-w-sm"
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
      </div>
    </Link>
  );
};

export default BlogPostCard;