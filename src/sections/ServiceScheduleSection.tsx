import { getServices } from '@/lib/service';
import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/Reveal';

const ServiceScheduleSection: React.FC = async () => {
  const data = await getServices();
  const services = data.data;

  return (
    <section>
      <div className="container mx-auto flex flex-col md:flex-row md:gap-72 px-4">
        <div className="ml-3 md:w-1/3 md:sticky md:top-26 md:self-start">
          <Reveal duration={0.5} yOffset={40}>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#2e826a] mb-6">
              FitVibe – Tezliklə
            </h2>
          </Reveal>
          <Reveal duration={0.7} yOffset={50}>
            <p className="color-desc mb-8">
              Cədvəlimizə və boş yerlərə bax, tarix seç və əylənməyə başlayaq!
            </p>
          </Reveal>
          <Reveal duration={0.9} yOffset={60}>
            <Link
              href="/service"
              className="border border-[#2e826a] cursor-pointer text-[#2e826a] px-6 py-2 rounded-full hover:bg-[#2e826a] hover:text-white transition"
            >
              Daha çox bax
            </Link>
          </Reveal>
        </div>

        <div className="md:w-3/5 space-y-12 mt-8 md:mt-0">
          {/* DƏYİŞİKLİK: Yalnız ilk 3 elementi göstərmək üçün .slice(0, 3) əlavə edildi */}
          {services.slice(0, 3).map((service, index) => (
            <Reveal key={index} duration={0.7 + index * 0.2} yOffset={50 + index * 10}>
              <div className="bg-white rounded-lg p-6 md:p-16 shadow-md">
                <h3 className="text-xl font-semibold text-[#2e826a] mb-2">{service.title}</h3>
                <p className="text-xl font-light color-desc mb-8">{service.date_range}</p>
                <div className="relative w-full h-52 mb-4">
                  <Image
                    src={service.image || '/placeholder.svg'}
                    alt={service.title}
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>
                <p className="color-desc mb-8">{service.short_description}</p>
                <Link
                  href={`/service/${service.slug}`}
                  className="border border-[#2e826a] cursor-pointer text-[#2e826a] px-6 py-2 rounded-full hover:bg-[#2e826a] hover:text-white transition"
                >
                  İndi sifariş et
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceScheduleSection;