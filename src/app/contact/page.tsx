import { useTranslations } from "next-intl";
import Link from "next/link";
import {
  LuGithub,
  LuInstagram,
  LuLinkedin,
  LuMail,
  LuYoutube,
} from "react-icons/lu";
import { RiDiscordLine } from "react-icons/ri";

export default function Contact() {
  const t = useTranslations("contact");

  return (
    <div className="w-full max-w-screen-lg mx-auto py-6">
      <div className="rounded-lg mt-20 p-6 md:p-8 bg-card">
        <h1 className="text-3xl font-bold my-4 text-center text-accent-foreground">
          {t("title")}
        </h1>
        <p className="text-center">{t("subtitle")}</p>
        <div className="flex flex-row mt-6 justify-center gap-4">
          <Link
            href="mailto:jayhuich@gmail.com"
            className="flex items-center justify-center hover:scale-110 active:scale-100 transition-all"
          >
            <LuMail size={30} />
          </Link>

          <Link
            href="https://linkedin.com/in/lemonteasour"
            target="_blank"
            className="flex items-center justify-center hover:scale-110 active:scale-100 transition-all"
          >
            <LuLinkedin size={30} />
          </Link>

          <Link
            href="https://github.com/lemonteasour"
            target="_blank"
            className="flex items-center justify-center hover:scale-110 active:scale-100 transition-all"
          >
            <LuGithub size={30} />
          </Link>

          <Link
            href="https://discordapp.com/users/lemonteasour"
            target="_blank"
            className="flex items-center justify-center hover:scale-110 active:scale-100 transition-all"
          >
            <RiDiscordLine size={30} />
          </Link>

          <Link
            href="https://instagram.com/lemonteasour"
            target="_blank"
            className="flex items-center justify-center hover:scale-110 active:scale-100 transition-all"
          >
            <LuInstagram size={30} />
          </Link>

          <Link
            href="https://www.youtube.com/@lemonteasour"
            target="_blank"
            className="flex items-center justify-center hover:scale-110 active:scale-100 transition-all"
          >
            <LuYoutube size={30} />
          </Link>
        </div>
      </div>
    </div>
  );
}
