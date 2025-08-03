import { useTranslations } from "next-intl";
import Link from "next/link";

import NavDesktop from "@/components/nav-desktop";
import NavMobile from "@/components/nav-mobile";
import { type Route, routes } from "@/constants/routes";
import LocaleSwitcher from "@/components/locale-switcher";
import ThemeSwitcher from "@/components/theme-switcher";
import Image from "next/image";

export default function Header() {
  const t = useTranslations("navigation");

  const translatedRoutes: Route[] = routes.map((route) => {
    return { ...route, name: t(route.name) };
  });

  return (
    <header>
      <div className="w-full fixed flex justify-between items-center px-6 md:px-12 py-6 z-20 border-b-2 bg-popover">
        <div className="flex gap-8">
          {/* Mobile nav */}
          <div className="md:hidden my-auto">
            <NavMobile routes={translatedRoutes} />
          </div>
          {/* Logo */}
          <Link
            href="/"
            className="hover:scale-120 active:scale-100 transition-all"
          >
            <div className="relative size-[45px] mx-auto flex justify-center items-center inset-x-0 z-0 rounded-full bg-border">
              <Image
                className="rounded-full"
                src="/logo.png"
                alt="Logo"
                width={40}
                height={40}
                priority
              />
            </div>
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
      <div className="h-24"></div>
    </header>
  );
}
