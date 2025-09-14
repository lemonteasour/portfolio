"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { isActiveRoute, type Route } from "@/constants/routes";
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
  const pathname = usePathname();

  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        {routes.map((route, i) => {
          return (
            <NavigationMenuItem key={i}>
              <NavigationMenuLink
                asChild
                className={cn(
                  navigationMenuTriggerStyle(),
                  `mx-1 p-2 bg-popover text-muted-foreground hover:scale-110 active:scale-100 transition-all ${
                    isActiveRoute(route, pathname) && "text-accent-foreground"
                  }`
                )}
              >
                <Link href={route.path}>{route.name}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
