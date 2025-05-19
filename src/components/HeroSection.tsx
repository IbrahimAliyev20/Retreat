"use client"
import Image from 'next/image';

const HeroSection: React.FC = () => {

  return (
    <div className=" min-h-screen flex items-center justify-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between ">
        <div className="w-full md:w-1/2 text-center md:text-left pr-4">
          <h1
            className="text-5xl md:text-8xl font-serif text-brown leading-tight mb-6 "
          >
            Yoga and
            <br />
            detox retreat
          </h1>
          <p
            className="text-lg text-brown mb-8 "
          >
            Retreat You offers a holistic retreat in Thailand to
            <br />
            disconnect from the hustle of everyday world.
          </p>
          <button
            className="bg-[#2e826a] text-white py-3 px-6 rounded-full hover:bg-opacity-90 transition "
          >
            See schedule
          </button>
        </div>

        <div className="w-full md:w-1/2 relative mt-10 md:mt-0 pl-0 md:pl-34">
          <div className="relative w-full max-w-lg " >
            <Image
              src="/images/hero2sec.png"
              alt="Yoga Retreat 1"
              width={700}
              height={730}
              className="rounded-2xl w-full h-auto "
            />
            <div className="absolute -bottom-12 -left-12 w-70 " >
              <Image
                src="/images/herosec.png"
                alt="Yoga Retreat 2"
                width={320}
                height={400}
                className="rounded-2xl w-full h-auto "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;