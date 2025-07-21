import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Home() {
  const t = useTranslations("home");

  const map = [
    "hi",
    "ios",
    "web",
    "loves",
    "language",
    "travel",
    "music",
    "now",
  ].map((key, i) => (
    <p className="text-base my-6" key={i}>
      {t(`introduction.${key}`)}
    </p>
  ));

  return (
    <div className="w-full max-w-screen-lg mx-auto py-6">
      <div className="absolute mx-auto w-[120px] inset-x-0 z-0">
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
        <h1 className="text-3xl font-bold mt-12 mb-4 text-center">
          {t("title")}
        </h1>
        {map}
      </div>
    </div>
  );
}
