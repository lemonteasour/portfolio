import { useTranslations } from "next-intl";
import Image from "next/image";

import HomeLabels from "./labels";

export default function Home() {
  const t = useTranslations("home");

  return (
    <div className="w-full max-w-screen-lg mx-auto py-6">
      <div className="absolute size-[130px] mx-auto flex justify-center items-center inset-x-0 z-0 rounded-full bg-gray-200 dark:bg-gray-700">
        <Image
          className="rounded-full"
          src="/portrait.jpg"
          alt="Portrait photo"
          width={120}
          height={120}
          priority
        />
      </div>

      <div className="rounded-lg mt-20 p-6 md:p-8 bg-white dark:bg-gray-800">
        <h1 className="text-3xl font-bold mt-8 mb-4 text-center">
          {t("title")}
        </h1>

        {HomeLabels.introduction.map((intro) => {
          if (intro === "focus") {
            return (
              <ul
                className="list-outside list-disc mx-2 md:mx-4"
                key={`${intro}`}
              >
                {HomeLabels.focus.map((focus) => (
                  <li className="my-2" key={`${intro}${focus}`}>
                    {t(`introduction.focus.${focus}`)}
                  </li>
                ))}
              </ul>
            );
          } else
            return (
              <p className="my-6" key={`${intro}`}>
                {t(`introduction.${intro}`)}
              </p>
            );
        })}
      </div>
    </div>
  );
}
