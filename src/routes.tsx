import Layout from "@/components/layout";
import React from "react";
import type { RouteObject } from "react-router-dom";
import SuspenseWithFallback from "./components/common/suspense-with-fallback";

const Index = React.lazy(() => import("@/pages/index"));
const Counter = React.lazy(() => import("@/pages/counter"));
const CssAspectRatio = React.lazy(() => import("@/pages/css/aspect-ratio"));
const AwesomeMacOS = React.lazy(() => import("@/pages/awesome/macOS"));

interface MenuItem {
  children?: MenuItem[];
  name: string;
  path: string;
}

export type MenuList = MenuItem[];

const routes: RouteObject[] = [
  {
    children: [
      {
        element: (
          <SuspenseWithFallback>
            <Index />
          </SuspenseWithFallback>
        ),
        index: true,
      },
      {
        element: (
          <SuspenseWithFallback>
            <Counter />
          </SuspenseWithFallback>
        ),
        path: "/counter",
      },
      {
        children: [
          {
            element: (
              <SuspenseWithFallback>
                <CssAspectRatio />
              </SuspenseWithFallback>
            ),
            path: "/css/aspect-ratio",
          },
        ],
        path: "/css",
      },
      {
        children: [
          {
            element: (
              <SuspenseWithFallback>
                <AwesomeMacOS />
              </SuspenseWithFallback>
            ),
            path: "/awesome/macOS",
          },
        ],
        path: "/awesome",
      },
    ],
    element: <Layout />,
    path: "/",
  },
];

export const menuMap: Record<
  string,
  {
    name: string;
  }
> = {
  "/": {
    name: "首页",
  },
  "/awesome": {
    name: "Awesome",
  },
  "/awesome/macOS": {
    name: "macOS",
  },
  "/counter": {
    name: "计数器",
  },
  "/css": {
    name: "CSS",
  },
  "/css/aspect-ratio": {
    name: "长宽比",
  },
};

export const getMenuList = (routes: RouteObject[]) => {
  const menuList: MenuItem[] = [];

  function dfs(list?: RouteObject[]) {
    if (list?.length) {
      for (let i = 0; i < list.length; i++) {
        const route = list[i];

        if (route.children) {
          if (route.path) {
            menuList.push({
              children: getMenuList(route.children),
              name: menuMap[route.path].name,
              path: route.path,
            });
          }
        } else {
          if (route.path) {
            menuList.push({
              name: menuMap[route.path].name,
              path: route.path,
            });
          }
        }
      }
    }
  }

  const routeFirstChild = routes[0];

  if (routes.length === 1 && routeFirstChild.path === "/") {
    menuList.push({
      name: menuMap[routeFirstChild.path].name,
      path: routeFirstChild.path,
    });

    dfs(routeFirstChild.children);
  } else {
    dfs(routes);
  }

  return menuList;
};

export default routes;
