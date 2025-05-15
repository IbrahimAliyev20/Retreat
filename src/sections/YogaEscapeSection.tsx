"use client";
import Image from 'next/image';
import { RiCheckDoubleFill } from "react-icons/ri";

const YogaEscapeSection: React.FC = () => {
  return (
    <section>
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Image */}
        <div
          className="w-full md:w-1/2 "
        >
          <div className="overflow-hidden">
            <Image
              src="/images/YogaEscapeSection.webp"
              alt="Retreat Yoga"
              width={600}
              height={400}
              className="w-[70%] h-auto object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2
            className="text-3xl md:text-4xl font-semibold text-brown-800 mb-6 "
          >
            This retreat is for you if you want to disconnect
          </h2>
          <p
            className="text-gray-600 "
          >
            Suspendisse eu ligula. Nullam incidunt adipiscing enim. Nunc nonummy
            metus. Vestibulum ullamcorper, mauris at ligula.
          </p>
          <div className="w-full h-[0.5px] bg-black my-10"></div>
          <p
            className="font-semibold "
          >
            JOIN THE RETREAT IF:
          </p>
          <ul
            className="text-brown-600 space-y-2 mt-3 "
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