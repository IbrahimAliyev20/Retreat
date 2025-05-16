"use client";
import Image from 'next/image';

const JoinUsSection: React.FC = () => {

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="p-10 custom-color-bg rounded-2xl flex flex-col md:flex-row items-center overflow-hidden">
        <div className="p-8 md:p-15 flex-1">
          <h2
            className="text-4xl font-serif text-[#F5E8C7] mb-4 "
          >
            Join us today!
          </h2>
          <p
            className="text-lg text-[#F5E8C7] opacity-80 mb-6 "
          >
            Let&apos;s disconnect and enjoy the power of nature improving your health.
          </p>
          <button
            className="bg-[#F5E8C7] text-[#3A2E1F] font-medium py-2 px-6 rounded-full hover:bg-opacity-90 transition mb-6 "
          >
            See schedule
          </button>
          <div
            className="flex items-center "
          >
            <div className="flex -space-x-2 mr-3">
              <div className="w-8 h-8 rounded-full">
                <Image
                  src="/images/teamintro1.jpg"
                  alt="Person meditating in nature"
                  width={450}
                  height={400}
                  className="rounded-full m-auto"
                />
              </div>
              <div className="w-8 h-8 rounded-full">
                <Image
                  src="/images/teamintro2.jpg"
                  alt="Person meditating in nature"
                  width={450}
                  height={400}
                  className="rounded-full m-auto"
                />
              </div>
              <div className="w-8 h-8 rounded-full">
                <Image
                  src="/images/teamintro3.jpg"
                  alt="Person meditating in nature"
                  width={450}
                  height={400}
                  className="rounded-full m-auto"
                />
              </div>
            </div>
            <p className="text-[#F5E8C7] text-sm">We healed 1000+ students</p>
          </div>
        </div>
        <div
          className="flex w-full md:w-1/2 h-64 md:h-96 relative "
        >
          <Image
            src="/images/JoinUsSection.jpg"
            alt="Person meditating in nature"
            width={450}
            height={400}
            className="rounded-xl m-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default JoinUsSection;