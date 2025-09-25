"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Route } from "@/constants/routes";

import { usePathname } from "next/navigation";
import { Fragment } from "react";

type Props = {
  routes: Route[];
};

export default function Breadcrumbs(props: Props) {
  const { routes } = props;
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {segments.length > 0 && (
          <BreadcrumbItem>
            <BreadcrumbLink href="/">{routes[0].name}</BreadcrumbLink>
          </BreadcrumbItem>
        )}

        {segments.map((_, i) => {
          const path = "/" + segments.slice(0, i + 1).join("/");

          const findRouteName = (
            routes: Route[],
            path: string
          ): string | undefined => {
            for (const route of routes) {
              if (route.path === path) {
                return route.name; // already translated in translatedRoutes
              }
              if (route.children) {
                const childName = findRouteName(route.children, path);
                if (childName) return childName;
              }
            }
            return undefined;
          };
          const name = findRouteName(routes, path);

          return (
            <Fragment key={path}>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                {i === segments.length - 1 ? (
                  <BreadcrumbPage>{name}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink href={path}>{name}</BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
