"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { LuMenu } from "react-icons/lu";

import { isActiveRoute, type Route } from "@/constants/routes";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { cn } from "@/lib/utils";

import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

type Props = {
  routes: Route[];
};

export default function NavMobile(props: Props) {
  const { routes } = props;
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger>
        <LuMenu size={28} />
      </SheetTrigger>
      <SheetContent side="left" className="flex items-center">
        <VisuallyHidden>
          <SheetTitle>Navigation</SheetTitle>
        </VisuallyHidden>
        <NavigationMenu
          orientation="vertical"
          viewport={false}
          className="items-start mt-20"
        >
          <NavigationMenuList className="flex-col gap-6">
            {routes.map((route, i) => {
              return (
                <NavigationMenuItem key={i}>
                  <NavigationMenuLink
                    asChild
                    className={cn(
                      navigationMenuTriggerStyle(),
                      `text-base text-muted-foreground ${
                        isActiveRoute(route, pathname) &&
                        "text-accent-foreground"
                      }`
                    )}
                  >
                    <SheetClose asChild>
                      <Link href={route.path}>{route.name}</Link>
                    </SheetClose>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>
      </SheetContent>
    </Sheet>
  );
}
