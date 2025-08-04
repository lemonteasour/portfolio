"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { LuMenu } from "react-icons/lu";

import type { Route } from "@/constants/routes";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

type Props = {
  routes: Route[];
};

export default function NavMobile(props: Props) {
  const { routes } = props;
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <LuMenu size={28} />
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col">
        <VisuallyHidden>
          <SheetTitle>Navigation</SheetTitle>
        </VisuallyHidden>
        <nav className="flex flex-col justify-center items-center gap-8 p-20">
          {routes.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={index}
                className={`${
                  pathname === link.path &&
                  "font-bold border-b-2 border-foreground"
                } hover:text-accent transition-all`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
