'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ContactData {
  name?: string;
  email: string;
  phone: string;
  address: string;
  image: string;
}

interface Props {
  contactData: ContactData;
}

const ContactForm: React.FC<Props> = ({ contactData }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    note: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data:', formData);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-serif custom-color mb-4">Gəlin danışaq!</h2>
      <p className="text-lg color-desc mb-8">
        FirVibe ilə bağlı hər hansı sualınız varsa, bizə bildirin — sizə məmnuniyyətlə kömək edərik.
      </p>
      <div className="flex flex-col md:flex-row gap-20 md:gap-50">
        {/* Form Section */}
        <div className="bg-white rounded-xl p-6 md:w-1/2 h-fit">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
                placeholder="Ad Soyad"
                className="w-full border-b border-[#3A2E1F] border-opacity-20 bg-transparent text-[#3A2E1F] placeholder-[#3A2E1F] placeholder-opacity-50 focus:outline-none py-2"
              />
            </div>
            <div>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder="Email"
                className="w-full border-b border-[#3A2E1F] border-opacity-20 bg-transparent text-[#3A2E1F] placeholder-[#3A2E1F] placeholder-opacity-50 focus:outline-none py-2"
              />
            </div>
            <div>
              <input
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                type="text"
                placeholder="Sosyal Medya Linki"
                className="w-full border-b border-[#3A2E1F] border-opacity-20 bg-transparent text-[#3A2E1F] placeholder-[#3A2E1F] placeholder-opacity-50 focus:outline-none py-2"
              />
            </div>
            <div>
              <textarea
                name="note"
                value={formData.note}
                onChange={handleChange}
                placeholder="Nümunə Mətn"
                className="w-full border-b border-[#3A2E1F] border-opacity-20 bg-transparent text-[#3A2E1F] placeholder-[#3A2E1F] placeholder-opacity-50 focus:outline-none py-2 resize-none"
                rows={3}
              />
            </div>
            <button
              type="submit"
              className="w-full border border-[#2e826a] cursor-pointer text-[#2e826a] px-6 py-2 rounded-full hover:bg-[#2e826a] hover:text-white transition"
            >
              Göndər
            </button>
          </form>
        </div>

        {/* Contact Info Section */}
        <div className="md:w-1/2 flex flex-col justify-between">
          <div className=" h-90 relative rounded-xl overflow-hidden">
            <Image
              src={contactData.image}
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
                className='filter hue-rotate-85'
              />
              <p>{contactData.email}</p>
            </div>
            <div className="flex text-xl items-center text-[#3A2E1F] gap-3">
              <Image
                src="/icons/locationicon.png"
                alt="Location icon"
                width={40}
                height={40}
                className='filter hue-rotate-85'
              />
              <p>{contactData.address}</p>
            </div>
            <div className="flex text-xl items-center text-[#3A2E1F] gap-3">
              <Image
                src="/icons/messageicon.png"
                alt="Message icon"
                width={40}
                height={40}
                className='filter hue-rotate-85'
              />
              <p>{contactData.phone}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
