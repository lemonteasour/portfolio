import { useTranslations } from "next-intl";
import ExperienceCard from "./experience-card";
import ExperiencesLabels from "./labels";

export default function Experiences() {
  const t = useTranslations("experiences");

  return (
    <div className="w-full max-w-screen-lg mx-auto py-6">
      <h1 className="text-3xl font-bold my-4 text-center">{t("title")}</h1>
      <h2 className="text-xl font-bold mt-8">{t("fulltime.title")}</h2>

      <ExperienceCard
        expKey={ExperiencesLabels.fulltime.rakuten.name}
        type={"fulltime"}
      />

      <ExperienceCard
        expKey={ExperiencesLabels.fulltime.tomlee.name}
        description={ExperiencesLabels.fulltime.tomlee.description}
        skills={ExperiencesLabels.fulltime.tomlee.skills}
        type={"fulltime"}
      />
    </div>
  );
}
