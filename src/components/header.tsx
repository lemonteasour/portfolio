import { useTranslations } from 'next-intl';
import Link from 'next/link';

import NavDesktop from '@/components/nav-desktop';
import NavMobile from '@/components/nav-mobile';
import { Route, routes } from '@/constants/routes';

export default function Header() {
  const t = useTranslations("navigation");

  const translatedRoutes: Route[] = routes.map((route) => {
    return { ...route, name: t(route.name) };
  });

  return (
    <header>
      <div className="w-full fixed md:static flex justify-between items-center px-6 md:px-12 py-6 md:py-8 z-20 bg-gray-100 dark:bg-gray-900">
        <div className="flex flex-row gap-8">
          {/* mobile nav */}
          <div className="md:hidden my-auto">
            <NavMobile routes={translatedRoutes} />
          </div>
          {/* Logo */}
          <Link href="/">
            <h1 className="text-4xl font-semibold">jayhuich</h1>
          </Link>
        </div>

        {/* desktop nav */}
        <div className="hidden md:flex">
          <NavDesktop routes={translatedRoutes} />
        </div>
      </div>
      <div className="md:hidden h-20"></div>
    </header>
  );
}
