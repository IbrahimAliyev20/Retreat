import { getAbout } from "@/lib/about";
import Image from "next/image";
import Reveal from "@/components/Reveal";

const YogaEscapeSection: React.FC = async () => {
  const data = await getAbout();
  const about = data[1];

  return (
    <section>
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 px-4">
        {/* Image */}
        <div className="w-full md:w-1/2">
          <Reveal duration={0.8} yOffset={60}>
            <div className="overflow-hidden">
              <Image
                src={about.image}
                alt="FitVibe Yoga"
                width={600}
                height={400}
                className="mx-auto w-[85%] h-auto object-cover"
              />
            </div>
          </Reveal>
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <Reveal duration={0.5} yOffset={40}>
            <h2 className="text-3xl md:text-4xl font-semibold text-brown-800 mb-6">
              {about.title}
            </h2>
          </Reveal>
          <Reveal duration={0.7} yOffset={50}>
            <p
              className="color-desc mb-8"
              dangerouslySetInnerHTML={{ __html: about.description }}
            ></p>
          </Reveal>
          <Reveal duration={1.0} yOffset={70}>
            <div className="w-full h-[0.5px] bg-black my-10"></div>
          
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default YogaEscapeSection;
