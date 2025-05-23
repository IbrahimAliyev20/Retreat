import Image from 'next/image';
import Link from 'next/link';

const JoinUsSection =() => {

 

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-0">
      <div className="p-4 bg-[#2e826a]    rounded-2xl flex flex-col md:flex-row items-center overflow-hidden">
        <div className="p-8 md:p-15 flex-1">
          <h2
            className="text-4xl font-serif text-white mb-4 "
          >
            Bu gün bizə qoşulun!
          </h2>
          <p
            className="text-lg text-white opacity-80 mb-6 "
          >
            Gəlin gündəlik qayğılardan uzaqlaşaq və təbiətin gücü ilə sağlamlığımızı gücləndirək.
          </p>
          <Link href="/team"
            className="bg-[#ddeee1] text-black font-medium py-2 px-6 rounded-full hover:bg-opacity-90 transition mb-6"
          >
            Daha Çox
          </Link>
          <div
            className="flex items-center mt-5"
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
            <p className="text-white text-sm">1000-dən artıq tələbəmiz sağlamlığına qovuşdu.</p>
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