import { getServices } from '@/lib/service';
import Image from 'next/image';
import Link from 'next/link';


const RetreatScheduleSection: React.FC = async () => {

  const data = await getServices() 
 
  const services = data.data
  return (
    <section>
      <div className="container mx-auto flex flex-col md:flex-row md:gap-72">
        <div className="ml-3  md:w-1/3 md:sticky md:top-26 md:self-start">
          <h2
            className="text-3xl md:text-4xl font-semibold text-[#2e826a] mb-6 animate-on-scroll transition-all duration-500 ease-in-out"
          >
            FitVibe – Tezliklə
          </h2>
          <p
            className="color-desc mb-8 animate-on-scroll transition-all duration-500 ease-in-out"
          >
            Cədvəlimizə və boş yerlərə bax, tarix seç və əylənməyə başlayaq!
          </p>
          <Link
            href="/service"
            className="bg-[#2e826a] text-white py-2 px-6 rounded-full hover:bg-opacity-90 transition"
          >
           Daha çox bax
          </Link>
        </div>

        <div className="md:w-2/5 space-y-12 mt-8 md:mt-0">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-12 shadow-md animate-on-scroll transition-all duration-500 ease-in-out"
            >
              <h3 className="text-xl font-semibold text-[#2e826a] mb-2">{service.title}</h3>
              <p className="text-xl font-light color-desc mb-8">{service.date_range}</p>
              <div className="relative w-full h-48 mb-4">
                <Image
                  src={service.image || '/placeholder.svg'}
                  alt={service.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-2xl"
                />
              </div>
              <p className="color-desc mb-4">{service.description}</p>
              <button className="border border-[#2e826a] cursor-pointer text-[#2e826a] px-6 py-2 rounded-full hover:bg-[#2e826a] hover:text-white transition">
                İndi sifariş et
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RetreatScheduleSection;