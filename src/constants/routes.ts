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
    name: "resume",
    path: "/resume",
  },
  //   {
  //     name: "Projects",
  //     path: "/projects",
  //   },
  //   {
  //     name: "Blog",
  //     path: "/blog",
  //   },
  {
    name: "contact",
    path: "/contact",
  },
];
