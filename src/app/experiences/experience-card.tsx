import { useTranslations } from "next-intl";

type Props = {
  expKey: string;
  description: string[];
  type: string;
};

export default function ExperienceCard(props: Props) {
  const { type, expKey, description } = props;
  const t = useTranslations(`experiences.${type}.${expKey}`);

  return (
    <div className="rounded-lg my-6 p-6 md:p-8 bg-white dark:bg-gray-800">
      <div className="flex flex-col md:flex-row justify-between mb-4">
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold">{t("company")}</h3>
          <p>{t("title")}</p>
        </div>
        <div className="flex flex-col md:items-end text-sm text-gray-500">
          <span>{t("period")}</span>
          <p>{t("location")}</p>
        </div>
      </div>
      <ul className="list-outside list-disc mx-2 md:mx-4">
        {description.map((key) => (
          <li className="text-sm my-1" key={`${key}`}>
            {t(`description.${key}`)}
          </li>
        ))}
      </ul>
    </div>
  );
}
