import { useTranslations } from "next-intl";
import ExperienceCard from "./experience-card";

const fulltimeKeys = [
  {
    name: "rakuten",
  },
  {
    name: "tomlee",
    description: ["website", "server", "adhoc"],
  },
];

export default function Experiences() {
  const t = useTranslations("experiences");

  return (
    <div className="w-full max-w-screen-lg mx-auto py-6">
      <h1 className="text-3xl font-bold my-4 text-center">{t("title")}</h1>
      <h2 className="text-lg font-bold mt-8">{t("fulltime.title")}</h2>
      {fulltimeKeys.map((key) => (
        <ExperienceCard
          expKey={key.name}
          description={key.description}
          type={"fulltime"}
          key={key.name}
        />
      ))}
    </div>
  );
}
