"use client";

import Link from "next/link";

import type { Route } from "@/constants/routes";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { cn } from "@/lib/utils";

type Props = {
  routes: Route[];
};

export default function NavDesktop(props: Props) {
  const { routes } = props;

  return (
    <nav className="container flex gap-8">
      <NavigationMenu viewport={false}>
        <NavigationMenuList>
          {routes.map((route, i) => {
            return (
              <NavigationMenuItem key={i}>
                <NavigationMenuLink
                  asChild
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "text-base bg-popover"
                  )}
                >
                  <Link href={route.path}>{route.name}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}
