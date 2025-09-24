import { useTranslations } from "next-intl";
import ProjectCard from "./project-card";

export default function Projects() {
  const t = useTranslations("projects");

  return (
    <div className="w-full max-w-screen-lg mx-auto py-6">
      <h1 className="text-3xl font-bold my-4 text-center text-accent-foreground">
        {t("title")}
      </h1>
      <h2 className="mt-8 text-center">{t("subtitle")}</h2>
      <ProjectCard project={"recipenotes"} />
      <ProjectCard project={"portfolio"} />
    </div>
  );
}
