import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/Reveal';

const JoinUsSection = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-0">
      <div className="p-4 bg-[#2e826a] rounded-2xl flex flex-col md:flex-row items-center overflow-hidden">
        <div className="px-4 md:px-15 flex-1">
          <Reveal duration={0.5} yOffset={40}>
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-4 mt-4 md:mt-0">
              Bu gün bizə qoşulun!
            </h2>
          </Reveal>
          <Reveal duration={0.7} yOffset={50}>
            <p className="text-base md:text-lg text-white opacity-80 mb-5 md:mb-6">
              Gəlin gündəlik qayğılardan uzaqlaşaq və təbiətin gücü ilə sağlamlığımızı gücləndirək.
            </p>
          </Reveal>
          <Reveal duration={0.9} yOffset={60}>
            <Link
              href="/team"
              className="bg-[#ddeee1] text-black font-medium py-2 px-6 rounded-full hover:bg-opacity-90 transition mb-6"
              >
            
              Daha Çox
            </Link>
          </Reveal>
          <Reveal duration={1.0} yOffset={70}>
            <div className="flex items-center mt-10 mb-6 md:mb-0">
              <div className="flex -space-x-2 mr-3">
                <div className="w-8 h-8 rounded-full">
                  <Image
                    src="/images/teamintro1.jpg"
                    alt="Person meditating in nature"
                    width={32}
                    height={32}
                    className="rounded-full m-auto"
                  />
                </div>
                <div className="w-8 h-8 rounded-full">
                  <Image
                    src="/images/teamintro2.jpg"
                    alt="Person meditating in nature"
                    width={32}
                    height={32}
                    className="rounded-full m-auto"
                  />
                </div>
                <div className="w-8 h-8 rounded-full">
                  <Image
                    src="/images/teamintro3.jpg"
                    alt="Person meditating in nature"
                    width={32}
                    height={32}
                    className="rounded-full m-auto"
                  />
                </div>
              </div>
              <p className="text-white text-sm">1000-dən artıq tələbəmiz sağlamlığına qovuşdu.</p>
            </div>
          </Reveal>
        </div>
          <div className="flex w-full md:w-1/2 h-64 md:h-96 relative mb-10 md:mb-0">
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