import { useTranslations } from "next-intl";

export default function Experiences() {
  const t = useTranslations("experiences");

  return (
    <div className="w-full max-w-screen-lg mx-auto py-6">
      <div className="border rounded-lg mt-20 p-6 md:p-8 border-gray-200 dark:border-gray-600">
        <h1 className="text-3xl font-bold my-4 text-center">{t("title")}</h1>
      </div>
    </div>
  );
}
