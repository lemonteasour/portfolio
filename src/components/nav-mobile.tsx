"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { LuMenu, LuX } from "react-icons/lu";

import type { Route } from "@/constants/routes";

type Props = {
  routes: Route[];
};

export default function NavMobile(props: Props) {
  const { routes } = props;
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="flex">
      <button onClick={toggleMenu}>
        {isOpen ? <LuX size={28} /> : <LuMenu size={28} />}
      </button>

      {isOpen && (
        <>
          <div
            className="fixed w-screen h-screen z-30 top-0 left-0 bg-black/50"
            onClick={toggleMenu}
          >
            {/* Background shade */}
          </div>
          <div className="fixed w-2/3 h-full z-40 top-0 left-0 flex flex-col gap-8 p-12 bg-white dark:bg-gray-800">
            {routes.map((link, index) => {
              return (
                <div key={index}>
                  <Link
                    onClick={toggleMenu}
                    href={link.path}
                    className={`${
                      pathname === link.path &&
                      "text-accent border-b-2 border-accent"
                    } font-medium hover:text-accent transition-all`}
                  >
                    {link.name}
                  </Link>
                </div>
              );
            })}
          </div>
        </>
      )}
    </nav>
  );
}
