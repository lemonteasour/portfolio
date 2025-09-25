export type Route = {
  name: string;
  path: string;
  children?: Route[];
};

export const routes: Route[] = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "experiences",
    path: "/experiences",
  },
  {
    name: "projects",
    path: "/projects",
    children: [
      {
        name: "recipenotes",
        path: "/projects/recipenotes",
        children: [
          {
            name: "privacy",
            path: "/projects/recipenotes/privacy",
          },
        ],
      },
    ],
  },
  //   {
  //     name: "blog",
  //     path: "/blog",
  //   },
  {
    name: "contact",
    path: "/contact",
  },
];

export const isActiveRoute = (route: Route, pathname: string): boolean => {
  if (route.path === "/") {
    return pathname === "/";
  }
  if (pathname === route.path || pathname.startsWith(route.path + "/")) {
    return true;
  }
  if (route.children) {
    return route.children.some((child) => isActiveRoute(child, pathname));
  }
  return false;
};
