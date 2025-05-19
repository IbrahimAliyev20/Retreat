import Image from 'next/image';

interface BlogPageProps {
  params: {
    slug: string;
  };
}

export default function BlogSingle({ params }: BlogPageProps) {
  return (
    <div className="container mx-auto py-0 md:py-25">
      <div className="text-center mb-8">
        <p className="text-2xl uppercase text-accent mb-10">July 8, 2023</p>
        <h1 className="text-6xl font-bold text-accent">Nutrition Tips for Yogis</h1>
        <p className="text-2xl text-textColor mt-10">
          Dive into expert advice from our dietitian on how to nourish your body...
        </p>
      </div>

      <div className="mb-8">
        <div className="relative w-full h-[600px] overflow-hidden rounded-lg">
          <Image
            src="/images/aboutscroll2.jpg"
            alt="Yogi preparing food"
            fill
            style={{ objectFit: 'cover' }} 
            className="rounded-lg"
          />
        </div>
      </div>

      <article className="space-y-8 w-[60%] mx-auto">
        <p className="italic">
          Welcome to RetreatYou™, where we believe in the power of a holistic approach to wellness. In this blog, we explore nutrition tips tailored specifically for yogis, helping you find the balance your body craves.
        </p>

        <h2 className="text-2xl font-semibold text-accent">Balance is Everything</h2>
        <p>
          To achieve optimal health, it’s crucial to find the balance between your yoga practice and diet. Discover how incorporating the right daily macros can enhance your body’s functions to support your yoga journey.
        </p>

        <h2 className="text-2xl font-semibold text-accent">What You Put Into Your Body Directly Affects Your Yoga Practice</h2>
        <p>
          The right foods, chosen with valuable nutrition in mind, can specifically help yogis by giving them the energy they need to flow through poses. Did you know that certain poses can stimulate digestion and help with gut health? Learn how to fuel your body with the right foods to enhance your overall well-being. Eating a balanced diet with a variety of yoga poses can be the key to feeling refreshed and energized.
        </p>

        <h2 className="text-2xl font-semibold text-accent">Mindful Eating and Its Effects</h2>
        <p>
          Explore the practice of mindful eating and its transformative effects on your relationship with food. Discover how incorporating mindfulness into your daily eating habits can deepen your connection to yoga, promote emotional eating awareness, and lead to a healthier relationship with food and your healing.
        </p>

        <p className="italic">
          At RetreatYou™, we believe that true wellness encompasses the integration of yoga, diet, and mindfulness. By incorporating these nutrition tips into your daily routine, you can achieve a state of optimal health and holistic well-being.
        </p>
      </article>
    </div>
  );
}