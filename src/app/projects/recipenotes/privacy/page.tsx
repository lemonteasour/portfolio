import { useTranslations } from "next-intl";

export default function RecipeNotesPrivacy() {
  const t = useTranslations("projects.recipenotes.privacy");

  return (
    <div className="w-full max-w-screen-lg mx-auto py-6">
      <div className="flex flex-col rounded-lg mt-20 p-6 md:p-8 bg-card gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-center text-3xl font-bold">{t("title")}</h1>
          <p className="text-center text-muted-foreground">{t("subtitle")}</p>
          <p>{t("content.intro")}</p>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-center text-xl font-bold">
            {t("content.data.title")}
          </h2>
          <p>{t("content.data.collection")}</p>
          <p>{t("content.data.usage")}</p>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-center text-xl font-bold">
            {t("content.advertising.title")}
          </h2>
          <p>{t("content.advertising.description")}</p>
          <p>{t("content.advertising.info")}</p>
          <p>{t("content.advertising.handling")}</p>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-center text-xl font-bold">
            {t("content.analytics.title")}
          </h2>
          <p>{t("content.analytics.description")}</p>
        </div>

        <div className="flex flex-col gap-4">
          <p>{t("content.changes")}</p>
          <p>{t("content.contact")}</p>
        </div>
      </div>
    </div>
  );
}
