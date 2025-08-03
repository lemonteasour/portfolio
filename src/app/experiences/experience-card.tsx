import { useTranslations } from "next-intl";
import ExperiencesLabels from "./labels";

type Props = {
  expKey: string;
  description?: string[];
  skills?: string[];
  type: string;
};

export default function ExperienceCard(props: Props) {
  const { type, expKey, description, skills } = props;
  const t = useTranslations(`experiences.${type}.${expKey}`);

  const ExperienceCardSection = ({
    section,
    description,
    skills,
  }: {
    section?: string;
    description: string[];
    skills: string[];
  }) => {
    return (
      <div className="flex flex-col gap-2">
        {section && <h4 className="font-semibold">{t(`${section}.title`)}</h4>}
        <div className="flex flex-col md:flex-row justify-between gap-2 text-sm">
          <ul className="flex flex-col md:w-5/6 xl:w-11/12 list-outside list-disc mx-2 md:mx-4">
            {description.map((key) => (
              <li className="my-0.5" key={`${section}${key}`}>
                {t(`${section ? section + "." : ""}description.${key}`)}
              </li>
            ))}
          </ul>
          <ul className="flex flex-row md:flex-col md:w-1/6 xl:w-1/12 list-outside md:list-disc mx-auto md:mx-4 divide-x md:divide-x-0 text-gray-500 dark:text-gray-400">
            {skills.map((key) => (
              <li className="text-xs px-2 md:px-0 my-0.5" key={`${key}`}>
                {key}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-4 my-6 p-6 md:p-8 rounded-lg bg-white dark:bg-gray-800">
      <div className="flex flex-col md:flex-row justify-between gap-2">
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold">{t("name")}</h3>
          {type !== "intern" && <p>{t("title")}</p>}
        </div>
        <div className="flex flex-col md:items-end md:text-right text-sm text-gray-500 dark:text-gray-400">
          <span>{t("period")}</span>
          <p>{t("location")}</p>
        </div>
      </div>

      {expKey === "rakuten" ? (
        <>
          <ExperienceCardSection
            section="ios"
            description={ExperiencesLabels.fulltime.rakuten.ios.description}
            skills={ExperiencesLabels.fulltime.rakuten.ios.skills}
          />
          <ExperienceCardSection
            section="ui"
            description={ExperiencesLabels.fulltime.rakuten.ui.description}
            skills={ExperiencesLabels.fulltime.rakuten.ui.skills}
          />
        </>
      ) : (
        <ExperienceCardSection
          description={description || []}
          skills={skills || []}
        />
      )}
    </div>
  );
}
