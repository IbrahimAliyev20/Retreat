import { getJoinUs } from '@/lib/join-us';
import Image from 'next/image';
import Link from 'next/link';

const Aboutsec: React.FC = async () => {
  const data = await getJoinUs();

  return (
    <section className="bg-cream ">
      <div className="container mx-auto text-center px-4">
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
          Azərbaycanın dağlarında keçiriləcək 10 günlük FitVibe proqramımıza qoşul – yoqa, detoks və təbiətlə rahatlan!          </h2>
        </div>

        {/* Kartlar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {data.map((item, index) => (
            <div key={index} className="bg-white rounded-xl p-6 text-left">
              <Image
                src={item.icon}
                alt={`${item.title} icon`}
                width={32}
                height={32}
                className="mb-4 filter hue-rotate-85"
              />
              <h3 className="text-xl font-semibold text-brown mb-2">{item.title}</h3>
              <p className="color-desc text-sm">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Düymə */}
        <Link href="#" className="bg-[#2e826a] text-white py-2 px-6 rounded-full hover:bg-opacity-90 transition">
          About us
        </Link>
      </div>
    </section>
  );
};

export default Aboutsec;