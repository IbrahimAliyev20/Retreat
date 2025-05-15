"use client";
import { useRef } from 'react';
import Image from 'next/image';
import useScrollAnimation from '../hook/useScrollAnimation'; // Doğru yol

const ContactForm: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useScrollAnimation(titleRef, 0);    
  useScrollAnimation(textRef, 0.2);  
  useScrollAnimation(formRef, 0.4);   
  useScrollAnimation(contactRef, 0.6); 

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2
        className="text-4xl font-serif text-[#3A2E1F] mb-4 opacity-0"
        ref={titleRef}
      >
        Let&apos;s talk
      </h2>
      <p
        className="text-lg text-[#3A2E1F] opacity-80 mb-8 opacity-0"
        ref={textRef}
      >
        If you have any questions about retreat just let us know and we will be happy to help you.
      </p>
      <div className="flex flex-col md:flex-row gap-50">
        {/* Form Section */}
        <div
          className="bg-[#f5ecd7] rounded-xl p-6 md:w-1/2 opacity-0"
          ref={formRef}
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
              className="w-full bg-[#3A2E1F] text-[#F5E8C7] font-medium py-3 rounded-full hover:bg-opacity-90 transition"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Image and Contact Info Section */}
        <div
          className="md:w-1/2 flex flex-col justify-between opacity-0"
          ref={contactRef}
        >
          <div className="w-120 h-90 relative rounded-xl overflow-hidden">
            <Image
              src="/images/teamintro1.jpg"
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
              <p>templates@wavesdesign.io</p>
            </div>
            <div className="flex text-xl items-center text-[#3A2E1F] gap-3">
              <Image
                src="/icons/locationicon.png"
                alt="Location icon"
                width={40}
                height={40}
              />
              <p>Bangkok, Thailand</p>
            </div>
            <div className="flex text-xl items-center text-[#3A2E1F] gap-3">
              <Image
                src="/icons/messageicon.png"
                alt="Message icon"
                width={40}
                height={40}
              />
              <p>@retreat_you</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;