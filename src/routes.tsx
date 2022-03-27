import { Spin } from "antd";
import React, { Suspense } from "react";

const Index = React.lazy(() => import("@/pages/index"));
const Counter = React.lazy(() => import("@/pages/counter"));
const CssAspectRatio = React.lazy(() => import("@/pages/css/aspect-ratio"));

const routes = [
  {
    element: (
      <Suspense fallback={<Spin />}>
        <Index />
      </Suspense>
    ),
    name: "首页",
    path: "/",
  },
  {
    element: (
      <Suspense fallback={<Spin />}>
        <Counter />
      </Suspense>
    ),
    name: "计数器",
    path: "/counter",
  },
  {
    element: (
      <Suspense fallback={<Spin />}>
        <CssAspectRatio />
      </Suspense>
    ),
    name: "长宽比",
    path: "/css/aspect-ratio",
  },
];

export default routes;
