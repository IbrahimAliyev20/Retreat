import { getAbout } from '@/lib/about';
import Image from 'next/image';
import { RiCheckDoubleFill } from "react-icons/ri";





const YogaEscapeSection: React.FC = async () => {
    const data = await getAbout();

      const about = data[1];

  
  return (
    <section>
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Image */}
        <div
          className="w-full md:w-1/2 "
        >
          <div className="overflow-hidden">
            <Image
              src={about.image}
              alt="Retreat Yoga"
              width={600}
              height={400}
              className="mx-auto w-[70%] h-auto object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2
            className="text-3xl md:text-4xl font-semibold text-brown-800 mb-6 "
          >
            {about.title}
          </h2>
          <p
            className="color-desc"
          >
            {about.description}
          </p>
          <div className="w-full h-[0.5px] bg-black my-10"></div>
          <p
            className="font-semibold "
          >
            JOIN THE RETREAT IF:
          </p>
          <ul
            className="ml-5 md:ml-0 text-brown-600 space-y-2 mt-3   "
          >
            <li className="flex items-center">
              <RiCheckDoubleFill className="mr-1" />
              you need to disconnect
            </li>
            <li className="flex items-center">
              <RiCheckDoubleFill className="mr-1" />
              you want to focus on your body
            </li>
            <li className="flex items-center">
              <RiCheckDoubleFill className="mr-1" />
              improve your yoga
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default YogaEscapeSection;