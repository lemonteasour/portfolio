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
  //   {
  //     name: "projects",
  //     path: "/projects",
  //   },
  //   {
  //     name: "blog",
  //     path: "/blog",
  //   },
  {
    name: "contact",
    path: "/contact",
  },
];
