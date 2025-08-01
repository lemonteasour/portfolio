import { useTranslations } from "next-intl";
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
      <div className="rounded-lg mt-20 p-6 md:p-8 bg-white dark:bg-gray-800">
        <h1 className="text-3xl font-bold my-4 text-center">{t("title")}</h1>
        <p className="text-center">{t("subtitle")}</p>
        <div className="flex flex-row mt-6 justify-center gap-4">
          <a
            href="mailto:jayhuich@gmail.com"
            className="flex items-center justify-center hover:scale-120 active:scale-100 transition-all"
          >
            <LuMail size={30} />
          </a>

          <a
            href="https://linkedin.com/in/jayhuich"
            target="_blank"
            className="flex items-center justify-center hover:scale-120 active:scale-100 transition-all"
          >
            <LuLinkedin size={30} />
          </a>

          <a
            href="https://github.com/jayhuich"
            target="_blank"
            className="flex items-center justify-center hover:scale-120 active:scale-100 transition-all"
          >
            <LuGithub size={30} />
          </a>

          <a
            href="https://discordapp.com/users/jayhuich"
            target="_blank"
            className="flex items-center justify-center hover:scale-120 active:scale-100 transition-all"
          >
            <RiDiscordLine size={30} />
          </a>

          <a
            href="https://instagram.com/jayhuich"
            target="_blank"
            className="flex items-center justify-center hover:scale-120 active:scale-100 transition-all"
          >
            <LuInstagram size={30} />
          </a>

          <a
            href="https://www.youtube.com/@jayhuich"
            target="_blank"
            className="flex items-center justify-center hover:scale-120 active:scale-100 transition-all"
          >
            <LuYoutube size={30} />
          </a>
        </div>
      </div>
    </div>
  );
}
