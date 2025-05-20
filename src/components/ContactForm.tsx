import { getContact } from '@/lib/contact';
import Image from 'next/image';

const ContactForm: React.FC = async  () => {
    const data = await getContact()

    const contact = data[0]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2
        className="text-4xl font-serif text-[#3A2E1F] mb-4 "
      >
        Let&apos;s talk
      </h2>
      <p
        className="text-lg text-[#3A2E1F]  mb-8 "
      >
        If you have any questions about FirVibe just let us know and we will be happy to help you.
      </p>
      <div className="flex flex-col md:flex-row gap-50">
        {/* Form Section */}
        <div
          className="bg-color-yellow rounded-xl p-6 md:w-1/2 "
        >
          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Full name"
                className="w-full border-b border-[#3A2E1F] border-opacity-20 bg-transparent text-[#3A2E1F] placeholder-[#3A2E1F] placeholder-opacity-50 focus:outline-none py-2"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full border-b border-[#3A2E1F] border-opacity-20 bg-transparent text-[#3A2E1F] placeholder-[#3A2E1F] placeholder-opacity-50 focus:outline-none py-2"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Instagram (optional)"
                className="w-full border-b border-[#3A2E1F] border-opacity-20 bg-transparent text-[#3A2E1F] placeholder-[#3A2E1F] placeholder-opacity-50 focus:outline-none py-2"
              />
            </div>
            <div>
              <textarea
                placeholder="Example Text"
                className="w-full border-b border-[#3A2E1F] border-opacity-20 bg-transparent text-[#3A2E1F] placeholder-[#3A2E1F] placeholder-opacity-50 focus:outline-none py-2 resize-none"
                rows={3}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#3A2E1F] custom-color font-medium py-3 rounded-full hover:bg-opacity-90 transition"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Image and Contact Info Section */}
        <div
          className="md:w-1/2 flex flex-col justify-between "
        >
          <div className="w-120 h-90 relative rounded-xl overflow-hidden">
            <Image
              src={contact.image}
              alt="Person in nature"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
          <div className="mt-6 space-y-4">
            <div className="flex text-xl items-center text-[#3A2E1F] gap-3">
              <Image
                src="/icons/posticon.png"
                alt="Post icon"
                width={40}
                height={40}
              />
              <p>{contact.email}</p>
            </div>
            <div className="flex text-xl items-center text-[#3A2E1F] gap-3">
              <Image
                src="/icons/locationicon.png"
                alt="Location icon"
                width={40}
                height={40}
              />
              <p>{contact.address}</p>
            </div>
            <div className="flex text-xl items-center text-[#3A2E1F] gap-3">
              <Image
                src="/icons/messageicon.png"
                alt="Message icon"
                width={40}
                height={40}
              />
              <p>{contact.phone}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;