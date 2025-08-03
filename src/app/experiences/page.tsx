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

      <h2 className="text-xl font-bold mt-8">{t("intern.title")}</h2>

      <ExperienceCard
        expKey={ExperiencesLabels.intern.aritaone.name}
        description={ExperiencesLabels.intern.aritaone.description}
        skills={ExperiencesLabels.intern.aritaone.skills}
        type={"intern"}
      />

      <ExperienceCard
        expKey={ExperiencesLabels.intern.td.name}
        description={ExperiencesLabels.intern.td.description}
        skills={ExperiencesLabels.intern.td.skills}
        type={"intern"}
      />

      <h2 className="text-xl font-bold mt-8">{t("education.title")}</h2>

      <ExperienceCard
        expKey={ExperiencesLabels.education.hkust.name}
        description={ExperiencesLabels.education.hkust.description}
        skills={ExperiencesLabels.education.hkust.skills}
        type={"education"}
      />
    </div>
  );
}
