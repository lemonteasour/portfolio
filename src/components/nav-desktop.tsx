"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Route } from '@/constants/routes';

type Props = {
  routes: Route[];
};

export default function NavDesktop(props: Props) {
  const { routes } = props;
  const pathname = usePathname();

  return (
    <nav className="container flex gap-8">
      {routes.map((route, i) => {
        return (
          <Link
            href={route.path}
            key={i}
            className={`${
              pathname === route.path && "text-accent border-b-2 border-accent"
            } font-medium hover:text-accent transition-all`}
          >
            {route.name}
          </Link>
        );
      })}
    </nav>
  );
}
