import Image from 'next/image';
import Link from 'next/link';

interface TeamPageProps {
  params: {
    slug: string;
  };
}

export default function TeamSinglePage({ params }: TeamPageProps) {
  return (
    
      <div className="container mx-auto p-6">
        <div className="text-center mb-8">
          <div className="relative w-92 h-92 mx-auto mb-4">
            <Image
              src="/images/teamintro1.jpg" 
              alt="Lisa Mango"
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-full"
            />
          </div>
          <p className="text-sm uppercase text-textColor">Nutrition Expert</p>
          <h1 className="text-4xl font-bold text-accent">Lisa Mango</h1>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="text-textColor">
              Instagram
            </a>
            <a href="#" className="text-textColor">
              Twitter
            </a>
          </div>
        </div>

        {/* Teacher Content */}
        <article className="space-y-8 w-[60%] mx-auto">
          <h2 className="text-2xl font-semibold text-accent">About the Teacher</h2>
          <p>
            Namaste and welcome! I’m Lisa Mango, a Certified Yoga Teacher and Registered Dietitian with over 10 years of experience in yoga, nutrition, and a deep understanding of the ancient art of yoga. I’m here to guide you on a transformative journey, helping you find balance in mind, body, and spirit.
          </p>

          <h3 className="text-xl font-semibold text-accent">Yoga Stiles Curated to Meet Your Needs</h3>
          <p>
            During my retreats, I will introduce you to a variety of yoga styles, carefully curated to meet your needs. From the gentle flows of Hatha to the invigorating Vinyasa flows, each session aims to nourish your body and mind. Whether you’re a beginner or an experienced yogi, I’ll tailor the practice to suit your needs and goals.
          </p>

          <h3 className="text-xl font-semibold text-accent">Nourishing the Body</h3>
          <p>
            At RetreatYou™, we believe that nourishing the body is just as important as nurturing the mind. That’s why I’ve created a holistic experience that combines yoga, nutrition, and mindfulness. During our retreats, you’ll learn how to fuel your body with wholesome foods that support your yoga practice and overall well-being.
          </p>

          <h3 className="text-xl font-semibold text-accent">Share What You’ll Learn About the Benefits of Detoxing and a Wholesome Diet</h3>
          <p>
            Through guided sessions, you’ll learn how to make informed choices about the foods you consume, creating habits that fuel your body’s natural needs. I’ll share practical tips to implement a clean, wholesome diet into your daily routine. Together, we’ll explore the benefits of detoxing and how it can enhance your yoga practice and overall well-being.
          </p>

          <h3 className="text-xl font-semibold text-accent">Integration of Yoga and Nutrition</h3>
          <p>
            Together, we’ll explore the integration of yoga and nutrition, ensuring that you leave feeling energized and balanced. Join me, Lisa Mango, on this transformative journey at RetreatYou™, where we’ll dive into the practices of yoga and nutrition to support a healthier, more balanced you.
          </p>
        </article>
      </div>
  );
}