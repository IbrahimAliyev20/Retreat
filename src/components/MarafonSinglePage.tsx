import React from 'react';
import { MapPin, Calendar, Users, Clock, Utensils, Bed, Shield, Award } from 'lucide-react';

export function MaratonSinglePage() {
  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Əsas məzmun */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Sol sütun - Əsas məzmun */}
          <div className="lg:col-span-2 space-y-12">
            {/* Haqqında bölməsi */}
            <section>
              <h2 className="text-3xl md:text-4xl font-semibold custom-color mb-6">
                Bu FitVibe haqqında
              </h2>
              <div className="prose prose-stone max-w-none">
                <p className="text-stone-600 leading-relaxed mb-6">
                  FitVibe "Huzur Marafonu"na xoş gəlmisiniz! Bu 14 günlük marafon sizi Taylandın
                  sakit atmosferində, qədim yoga bilikləri və müasir rifah yanaşmaları ilə 
                  həyatınızı dəyişməyə dəvət edir. Gündəlik Vinyasa Yoga, Pranayama və meditasiya
                  seansları ilə bədəninizi və ruhunuzu dinləndirin.
                </p>

                <h3 className="text-xl font-semibold custom-color mb-4">
                  Dəyişdirici bir təcrübəyə qərq olun
                </h3>
                <p className="text-stone-600 leading-relaxed mb-6">
                  Taylandın möhtəşəm təbiətində daxili sakitliyinizi kəşf edin. Təcrübəli təlimçilərimiz 
                  sizi yoga, meditasiya və fərqindəlik məşqləri ilə yönləndirəcək. Yerli məhsullardan 
                  hazırlanan sağlam qidalarla qidalanacaq, və ruhunuzu yenidən balanslayacaqsınız.
                </p>

                <p className="text-stone-600 leading-relaxed mb-6">
                  Yoga ilə yanaşı, müxtəlif rifah fəaliyyətlərinə qatılaraq marafonunuzu daha da zənginləşdirə bilərsiniz.
                  Ənənəvi sağalma texnikaları və enerji balanslaşdırma məşqləri ilə ruhunuzu dincəldin.
                </p>

                <div className="bg-amber-50 border-l-4 custom-color-bg p-6 my-8">
                  <h4 className="text-lg font-medium text-white mb-2">
                    Təcrübəli mütəxəssislərdən öyrənin
                  </h4>
                  <p className="text-white">
                    Mütəxəssis dietoloqumuzun rəhbərliyi ilə sağlam və balanslı qidalanma barədə 
                    praktik biliklər əldə edəcəksiniz.
                  </p>
                </div>

                <h3 className="text-xl font-semibold custom-color mb-4">
                  Sizin üçün önəmli olanlara fokuslanın
                </h3>
                <p className="text-stone-600 leading-relaxed mb-6">
                  İstər tam 14 günlük marafonu, istərsə də 7 günlük qısa proqramı seçin — FitVibe 
                  sizə yoga təcrübəsindən daha artığını təklif edir. Bu səfərdə məqsədiniz 
                  daxili sakitlik, sağlam həyat tərzi və mental rahatlıqdır.
                </p>

                <p className="text-stone-600 leading-relaxed">
                  Gəlin və FitVibe ilə həyatınızı dəyişin. Bu marafon, ruhunuzu oyatmaq, bədəninizi 
                  gücləndirmək və yeni bir daxili harmoniya yaratmaq üçün ideal fürsətdir.
                </p>
              </div>
            </section>
          </div>

          {/* Sağ sütun - Rezervasiya kartı */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-8 sticky top-8">
              {/* Qiymət */}
              <div className="mb-6">
                <div className="text-2xl font-bold custom-color mb-1">₼ 2,500 AZN</div>
                <div className="text-stone-600">14 günlük yoga marafonu</div>
              </div>

              {/* Təfərrüatlar */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-stone-500" />
                  <div>
                    <div className="text-sm text-stone-500">Başlama tarixi</div>
                    <div className="font-medium">10 İyul 2023</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-stone-500" />
                  <div>
                    <div className="text-sm text-stone-500">Müddət</div>
                    <div className="font-medium">14 gün</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-stone-500" />
                  <div>
                    <div className="text-sm text-stone-500">Maksimum iştirakçı sayı</div>
                    <div className="font-medium">15 nəfər</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-stone-500" />
                  <div>
                    <div className="text-sm text-stone-500">Məkan</div>
                    <div className="font-medium">Gəncə</div>
                  </div>
                </div>
              </div>

              {/* İmkanlar */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-sm text-stone-600">
                  <Bed className="w-4 h-4" />
                  <span>Şəxsi otaq</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-stone-600">
                  <Utensils className="w-4 h-4" />
                  <span>Gündəlik yoga dərsləri</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-stone-600">
                  <Shield className="w-4 h-4" />
                  <span>Detoks pəhriz proqramı</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-stone-600">
                  <Award className="w-4 h-4" />
                  <span>Sertifikatlı yoga təlimçisi</span>
                </div>
              </div>

              {/* Səbətə əlavə et düyməsi */}
              <button className="border border-[#2e826a] cursor-pointer text-[#2e826a] px-6 py-2 rounded-full hover:bg-[#2e826a] hover:text-white transition">
                Səbətə əlavə et
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
