import React from "react";

const Index = React.lazy(() => import("@/pages/index"));
const Counter = React.lazy(() => import("@/pages/counter"));
const CssAspectRatio = React.lazy(() => import("@/pages/css/aspect-ratio"));
const AwesomeMacOS = React.lazy(() => import("@/pages/awesome/macOS"));

interface Route {
  children?: Route[];
  element?: React.ReactNode;
  name: string;
  path: string;
}

export type Routes = Route[];

const routes: Routes = [
  {
    element: <Index />,
    name: "首页",
    path: "/",
  },
  {
    element: <Counter />,
    name: "计数器",
    path: "/counter",
  },
  {
    children: [
      {
        element: <CssAspectRatio />,
        name: "长宽比",
        path: "/aspect-ratio",
      },
    ],
    name: "CSS",
    path: "/css",
  },
  {
    children: [
      {
        element: <AwesomeMacOS />,
        name: "macOS",
        path: "/macOS",
      },
    ],
    name: "Awesome",
    path: "/awesome",
  },
];

export const getFlattenRoutes = (routes: Routes, parentPath = "") => {
  let flattenRoutes: Routes = [];

  for (let i = 0; i < routes.length; i++) {
    const currentPath = `${parentPath}${routes[i].path}`;

    if (routes[i].children) {
      flattenRoutes = flattenRoutes.concat(
        getFlattenRoutes(routes[i].children as Routes, currentPath)
      );
    } else {
      flattenRoutes.push({ ...routes[i], path: currentPath });
    }
  }

  return flattenRoutes;
};

export default routes;
