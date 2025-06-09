import Reveal from "@/components/Reveal";
import { getAbout } from "@/lib/about";
import Image from "next/image";

const Experience: React.FC = async () => {
  const data = await getAbout();
  const about = data[0];

  return (
    <section>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12 px-4">
        <div className="md:w-1/2 text-center md:text-left">
          <Reveal duration={0.5} yOffset={40}>
            <h2 className="text-4xl md:text-5xl font-serif text-brown mb-6 leading-snug">
              {about.title}
            </h2>
          </Reveal>

          <Reveal duration={0.7} yOffset={50}>
            <p
              className="color-desc mb-8 max-w-md"
              dangerouslySetInnerHTML={{ __html: about.description }}
            ></p>
          </Reveal>

          <Reveal duration={1.5} yOffset={90}>
            <div className="flex flex-col sm:flex-row gap-6 text-brown font-semibold text-xl">
              <div>
                <p className="text-5xl mb-1">1000+</p>
                <p className="color-desc text-base font-normal">
                  Sağalan insanlar
                </p>
              </div>
              <div>
                <p className="text-5xl mb-1">8</p>
                <p className=" color-desc text-base font-normal">
                  İllərlə təcrübə
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="md:w-2/5">
          <Image
            src={about.image}
            alt="Experience FitVibe Image"
            width={600}
            height={700}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Experience;
