"use client";
import Image from 'next/image';

const Aboutsec: React.FC = () => {
  
  return (
    <section className="bg-cream py-20">
      <div className="container mx-auto text-center px-4">
        {/* Ulduzlar və başlıq */}
        <div className="mb-12">
          <div className="flex justify-center gap-2 mb-4 " >
            <Image
              src="/icons/sec1icon.png"
              alt="Daily yoga icon"
              width={72}
              height={42}
              className="mb-4"
            />
          </div>
          <h2
            className="text-3xl md:text-4xl font-serif text-brown max-w-2xl mx-auto "
          >
            Join us on 10 day retreat in Thailand mountain-side where we will train yoga, detox and enjoy the nature.
          </h2>
        </div>

        {/* Kartlar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* Kart 1 */}
          <div
            className="bg-[#f5ecd7] rounded-xl p-6 text-left "
          >
            <Image
              src="/icons/aboutstaricon.png"
              alt="Daily yoga icon"
              width={32}
              height={32}
              className="mb-4"
            />
            <h3 className="text-xl font-semibold text-brown mb-2">Daily yoga</h3>
            <p className="text-brown text-sm">
              Suspendisse eu ligula. Nullam tincidunt adipiscing enim. Nunc nonummy metus. Vestibulum ullamcorper mauris at ligula.
            </p>
          </div>

          {/* Kart 2 */}
          <div
            className="bg-[#f5ecd7] rounded-xl p-6 text-left "
          >
            <Image
              src="/icons/aboutleaficon.png"
              alt="Detox diet icon"
              width={32}
              height={32}
              className="mb-4"
            />
            <h3 className="text-xl font-semibold text-brown mb-2">Detox diet</h3>
            <p className="text-brown text-sm">
              Suspendisse eu ligula. Nullam tincidunt adipiscing enim. Nunc nonummy metus. Vestibulum ullamcorper mauris at ligula.
            </p>
          </div>

          {/* Kart 3 */}
          <div
            className="bg-[#f5ecd7] rounded-xl p-6 text-left "
          >
            <Image
              src="/icons/aboutusericon.png"
              alt="Certified team icon"
              width={32}
              height={32}
              className="mb-4"
            />
            <h3 className="text-xl font-semibold text-brown mb-2">Certified team</h3>
            <p className="text-brown text-sm">
              Suspendisse eu ligula. Nullam tincidunt adipiscing enim. Nunc nonummy metus. Vestibulum ullamcorper mauris at ligula.
            </p>
          </div>
        </div>

        {/* Düymə */}
        <button
          className="bg-[#493913] text-white py-2 px-6 rounded-full hover:bg-opacity-90 transition "
        >
          About us
        </button>
      </div>
    </section>
  );
};

export default Aboutsec;