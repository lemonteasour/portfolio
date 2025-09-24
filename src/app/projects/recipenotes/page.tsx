import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Projects() {
  const t = useTranslations("projects.recipenotes");

  return (
    <div className="w-full max-w-screen-lg mx-auto py-6">
      <div className="rounded-lg mt-20 p-6 md:p-8 bg-card">
        <h1 className="text-3xl font-bold my-4 text-center text-accent-foreground">
          {t("title")}
        </h1>
        <p className="text-center">{t("subtitle")}</p>
        <p className="text-center text-sm text-accent-foreground mt-2">
          <Link href={`/projects/recipenotes/privacy`}>
            {t("privacy.title")}
          </Link>
        </p>
      </div>
    </div>
  );
}
