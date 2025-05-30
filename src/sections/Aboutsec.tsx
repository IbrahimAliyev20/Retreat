import Reveal from '@/components/Reveal';
import { getJoinUs } from '@/lib/join-us';
import Image from 'next/image';
import Link from 'next/link';

const Aboutsec: React.FC = async () => {
  const data = await getJoinUs();

  return (
    <section className="bg-cream ">
      <div className="container mx-auto text-center px-4">
        <Reveal duration={0.5} yOffset={40}>
          <div className="mb-12">
            <div className="flex justify-center gap-2 mb-4">
              <Image
                src="/icons/sec1icon.png"
                alt="Daily yoga icon"
                width={72}
                height={42}
                className="mb-4 filter hue-rotate-90"
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-serif text-brown max-w-2xl mx-auto">
              Azərbaycanın dağlarında keçiriləcək 10 günlük FitVibe proqramımıza qoşul – yoqa, detoks və təbiətlə rahatlan!
            </h2>
          </div>
        </Reveal>

        {/* Kartlar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 items-stretch">
  {data.map((item, index) => (
    <Reveal key={index} duration={0.7} yOffset={60}>
      <div className="bg-white rounded-lg p-6 text-left h-full flex flex-col">
        <Image
          src={item.icon}
          alt={`${item.title} icon`}
          width={32}
          height={32}
          className="mb-4 filter hue-rotate-85"
        />
        <h3 className="text-[24px] font-semibold text-brown mb-2">{item.title}</h3>
        <p className="color-desc text-[16px]">{item.description}</p>
      </div>
    </Reveal>
  ))}
</div>

        {/* Düymə */}
        <Reveal duration={1} yOffset={50}>
          <div className="w-full justify-center flex">
            <Link href="/about" className="border border-[#2e826a] cursor-pointer text-[#2e826a] px-6 py-2 rounded-full hover:bg-[#2e826a] hover:text-white transition">
              Ətraflı
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Aboutsec;
