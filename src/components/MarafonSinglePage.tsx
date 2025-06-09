import React from 'react';
import { MapPin, Calendar, Users, Clock, CheckCircle } from 'lucide-react'; 
import { getMaraphon } from '@/lib/marafon';
import { MaraphonType } from '@/types/maraphon'; 

export async function MaratonSinglePage() {
  const data: MaraphonType[] = await getMaraphon();
  
  if (!data || data.length === 0) {
    return <div className="text-center py-20">Marafon tapılmadı.</div>;
  }

  const item = data[0];

  return (
    <div className="bg-stone-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <section>
            
              <div
                className="prose prose-stone max-w-none"
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-8 sticky top-8">
              <div className="mb-6">
                {/* <div className="text-2xl font-bold custom-color mb-1">₼ 2,500 AZN</div> */}
                <div className="text-stone-600">{item.name}</div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-stone-500" />
                  <div>
                    <div className="text-sm text-stone-500">Başlama tarixi</div>
                    <div className="font-medium">{item.start_date}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-stone-500" />
                  <div>
                    <div className="text-sm text-stone-500">Müddət</div>
                    <div className="font-medium">{item.end_date}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-stone-500" />
                  <div>
                    <div className="text-sm text-stone-500">Maksimum iştirakçı sayı</div>
                    <div className="font-medium">{item.participant}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-stone-500" />
                  <div>
                    <div className="text-sm text-stone-500">Məkan</div>
                    <div className="font-medium">{item.address}</div>
                  </div>
                </div>
              </div>

              <div className="border-t border-stone-200 pt-6 space-y-3 mb-8">
                <h4 className="font-semibold text-stone-800 mb-3">Nələr daxildir?</h4>
                {item.attributes.map((attr, index) => (
                  <div key={index} className="flex items-center gap-3 text-sm text-stone-600">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>{attr.value}</span>
                  </div>
                ))}
              </div>

              <button className="w-full bg-[#2e826a] text-white font-bold py-3 rounded-lg hover:bg-[#2a7560] transition">
                Müraciət et
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}