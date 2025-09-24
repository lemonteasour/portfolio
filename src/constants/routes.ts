export type Route = {
  name: string;
  path: string;
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

export const isActiveRoute = (route: Route, pathname: string) => {
  if (route.path === "/") {
    return pathname === route.path;
  } else {
    return pathname.startsWith(route.path);
  }
};
