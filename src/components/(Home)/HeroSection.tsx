import Image from "next/image";
import Link from "next/link";
import Reveal from "../Reveal";
import { getSlider } from "@/lib/slider";

const HeroSection: React.FC = async () => {

  const data = await getSlider();
  const hero = data;
  return (
    <div className="flex items-center justify-center relative">
      <Image
        width={96}
        height={96}
        src="/icons/star.png"
        alt="star decorative"
        className="hidden md:block absolute left-200 top-10 w-24 h-24 opacity-80 z-0 filter hue-rotate-[95deg]"
      />
      <Image
        width={60}
        height={60}
        src="/icons/star.png"
        alt="star decorative"
        className="hidden md:block absolute right-40 bottom-2 w-15 h-15 opacity-70 z-0 filter hue-rotate-[95deg]"
      />
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 relative z-10 ">
        <div className="w-full md:w-1/2 text-center md:text-left ">
          <Reveal duration={0.4} yOffset={30}>
            <h1 className="text-5xl md:text-7xl font-serif mb-6">
             {hero.title}
            </h1>
          </Reveal>

          <Reveal duration={0.7} yOffset={50}>
            <p className="text-lg color-desc mb-8 ">
             {hero.description}
            </p>
          </Reveal>

          <Reveal duration={1} yOffset={70}>
            <Link
              className="border border-[#2e826a] cursor-pointer text-[#2e826a] px-6 py-2 rounded-full hover:bg-[#2e826a] hover:text-white transition"
              href={hero.button_link}
            >
             {hero.button_text}
            </Link>
          </Reveal>
        </div>

        <div className="w-full md:w-1/2 relative mt-10 md:mt-0 pl-0 md:pl-34">
          <Reveal duration={1.3} yOffset={100}>
            <div className="relative w-full max-w-lg ">
              <Image
                src={hero.image_2}
                alt="Yoga  1"
                width={700}
                height={730}
                className="rounded-2xl w-[80%] md:w-[90%] mx-auto h-auto"
              />
              <div className="absolute -bottom-12 left-0 md:-left-12 w-70">
                <Image
                  src={hero.image}
                  alt="Yoga  2"
                  width={320}
                  height={400}
                  className="rounded-2xl w-[80%] md:w-full mx-auto h-auto"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
