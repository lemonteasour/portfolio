"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import type { Route } from "@/constants/routes";

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
              pathname === route.path &&
              "font-bold border-b-2 border-foreground"
            } transition-all`}
          >
            {route.name}
          </Link>
        );
      })}
    </nav>
  );
}
