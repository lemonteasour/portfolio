import { useTranslations } from "next-intl";

type Props = {
  expKey: string;
  description?: string[];
  type: string;
};

const rakutenDescriptions = {
  ios: ["tbu"],
  ui: ["inbound", "ds", "rtl", "release", "olt"],
};

export default function ExperienceCard(props: Props) {
  const { type, expKey, description } = props;
  const t = useTranslations(`experiences.${type}.${expKey}`);

  const ExperienceCardSection = ({
    section,
    description,
  }: {
    section?: string;
    description: string[];
  }) => {
    return (
      <div className="text-sm">
        {section && <h4 className="font-semibold">{t(`${section}.title`)}</h4>}
        <ul className="list-outside list-disc mx-2 md:mx-4">
          {description.map((key) => (
            <li className="my-1" key={`${section}${key}`}>
              {t(`${section ? section + "." : ""}description.${key}`)}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-4 my-6 p-6 md:p-8 rounded-lg bg-white dark:bg-gray-800">
      <div className="flex flex-col md:flex-row justify-between gap-2">
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold">{t("company")}</h3>
          <p>{t("title")}</p>
        </div>
        <div className="flex flex-col md:items-end text-sm text-gray-500">
          <span>{t("period")}</span>
          <p>{t("location")}</p>
        </div>
      </div>

      {expKey === "rakuten" ? (
        <>
          <ExperienceCardSection
            section="ios"
            description={rakutenDescriptions.ios}
          />
          <ExperienceCardSection
            section="ui"
            description={rakutenDescriptions.ui}
          />
        </>
      ) : (
        <ExperienceCardSection description={description || []} />
      )}
    </div>
  );
}
