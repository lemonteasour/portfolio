import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Home() {
  const t = useTranslations("home");

  const messages = [
    "hi",
    "ios",
    "web",
    "love",
    "language",
    "travel",
    "music",
    "current",
    "focus",
    "closing",
  ];

  const focusMessages = ["cert", "japanese", "piano", "ios", "web"];

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
        <h1 className="text-3xl font-bold mt-16 mb-4 text-center">
          {t("title")}
        </h1>

        {messages.map((message, i) => {
          if (message === "focus") {
            return (
              <ul
                className="list-outside list-disc mx-2 md:mx-4"
                key={`${message}${i}`}
              >
                {focusMessages.map((focus, j) => (
                  <li className="my-2" key={`${message}${j}`}>
                    {t(`introduction.focus.${focus}`)}
                  </li>
                ))}
              </ul>
            );
          } else
            return (
              <p className="my-6" key={`${message}${i}`}>
                {t(`introduction.${message}`)}
              </p>
            );
        })}
      </div>
    </div>
  );
}
