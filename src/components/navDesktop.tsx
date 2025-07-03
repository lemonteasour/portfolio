"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "about",
    path: "/about",
  },
  //   {
  //     name: "projects",
  //     path: "/projects",
  //   },
  //   {
  //     name: "resume",
  //     path: "/resume",
  //   },
  //   {
  //     name: "contact",
  //     path: "/contact",
  //   },
];

const NavDesktop = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              pathname === link.path && "text-accent border-b-2 border-accent"
            } font-medium hover:text-accent transition-all`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default NavDesktop;
