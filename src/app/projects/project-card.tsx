import { useTranslations } from "next-intl";
import Link from "next/link";
// import ExperiencesLabels from "./labels";

type Props = {
  project: string;
};

export default function ProjectCard(props: Props) {
  const { project } = props;
  const t = useTranslations(`projects.${project}`);

  const href = project === "portfolio" ? "/" : `/projects/${project}`;

  return (
    <Link href={href}>
      <div className="flex flex-col gap-4 my-6 p-6 md:p-8 rounded-lg bg-card hover:scale-102 active:scale-100 transition-all">
        <div className="flex flex-col md:flex-row justify-between gap-2">
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold">{t("title")}</h3>
            <p className="text-sm text-muted-foreground">{t("subtitle")}</p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex flex-col md:flex-row justify-between gap-2 text-sm"></div>
        </div>
      </div>
    </Link>
  );
}
