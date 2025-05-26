import Reveal from '@/components/Reveal';
import ServicePageSingle from '@/sections/(Service)/ServicePageSingle';
import { getServiceDetail, } from '@/lib/servicedetail';
import ServiceScheduleSection from '@/sections/ServiceScheduleSection';
import ServiceSingleTeam from '@/sections/(Service)/ServiceSingleTeam';

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export default async function ServiceSlugPage({ params }: ServicePageProps) {
  const { slug } = await params;


  const service = await getServiceDetail(slug);



  return (
    <div>
      <Reveal>
        <ServicePageSingle service={service} />
      </Reveal>

    <div className="container mx-auto">

      <Reveal>
        <ServiceSingleTeam  service={service}/>
      </Reveal>

      <Reveal>
        <div className="py-8">
          <p className="text-6xl font-semibold">Other services</p>
        </div>
      </Reveal>

      <Reveal>
        <ServiceScheduleSection  />
      </Reveal>

    </div>
    </div>
  );
}

// // Statik slug'lar için
// export async function generateStaticParams() {
//   const services = await getAllServiceSlugs(); // getAllServiceSlugs fonksiyonu slug'ları döndürmeli
//   return services.map((service) => ({
//     slug: service.slug,
//   }));
// }