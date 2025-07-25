import { useTranslations } from "next-intl";
import Link from "next/link";

import NavDesktop from "@/components/nav-desktop";
import NavMobile from "@/components/nav-mobile";
import { type Route, routes } from "@/constants/routes";
import LocaleSwitcher from "@/components/locale-switcher";
import ThemeSwitcher from "@/components/theme-switcher";

export default function Header() {
  const t = useTranslations("navigation");

  const translatedRoutes: Route[] = routes.map((route) => {
    return { ...route, name: t(route.name) };
  });

  return (
    <header>
      <div className="w-full fixed md:static flex justify-between items-center px-6 md:px-12 py-6 md:py-8 z-20 bg-white dark:bg-gray-800">
        <div className="flex gap-8">
          {/* Mobile nav */}
          <div className="md:hidden my-auto">
            <NavMobile routes={translatedRoutes} />
          </div>
          {/* Logo */}
          <Link href="/">
            <h1 className="text-3xl font-semibold">/</h1>
          </Link>
        </div>

        <div className="flex gap-6">
          {/* Desktop nav */}
          <div className="hidden md:flex">
            <NavDesktop routes={translatedRoutes} />
            <div className="ml-6 border-r"></div>
          </div>

          {/* Locale + theme */}
          <div className="flex gap-6">
            <ThemeSwitcher />
            <LocaleSwitcher />
          </div>
        </div>
      </div>
      <div className="md:hidden h-20"></div>
    </header>
  );
}
