import Image from 'next/image';

export default function Home() {
  const content = [
    "Hi, I'm Jay — a software engineer from Hong Kong, based in Tokyo, Japan.",
    "I build intuitive, user-friendly iOS applications using Swift and modern Apple frameworks, with a focus on creating smooth, elegant, and thoughtful experiences.",
    "Previously, I worked as a front-end web developer using React and TypeScript — a background that continues to shape how I think about structure, responsiveness, and design systems, now in the mobile space.",
    "Beyond the screen, I'm someone who loves language, culture, and creativity.",
    "I speak four languages — Cantonese, English, Mandarin and Japanese — and I enjoy working with people from diverse cultural and linguistic backgrounds. It's part of what makes collaboration feel both meaningful and natural to me.",
    "I've also explored 13 countries and visited 33 of Japan's 47 prefectures, driven by a love for culture and curiosity.",
    "In my spare time, I turn to music. I play the piano and bass, and I occasionally transcribe or arrange songs just for fun.",
    "Right now, I'm continuing to grow as a developer, collaborate on meaningful projects, and stay curious about the world — both online and off.",
  ];

  const map = content.map((paragraph, i) => (
    <p className="text-base my-6" key={i}>
      {paragraph}
    </p>
  ));

  return (
    <div className="py-6">
      <div className="fixed mx-auto w-[120px] inset-x-0">
        <Image
          className="rounded-full"
          src="/portrait.png"
          alt="Portrait photo"
          width={120}
          height={120}
          priority
        />
      </div>
      <div className="border border-gray-200 dark:border-gray-600 rounded-lg mt-20 px-6">
        <h1 className="text-3xl font-bold mt-12 mb-4 text-center">Welcome!</h1>
        {map}
      </div>
    </div>
  );
}
