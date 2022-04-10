import { Spin } from "antd";
import type { FC } from "react";
import { Suspense } from "react";

const SuspenseWithFallback: FC = ({ children }) => (
  <Suspense fallback={<Spin />}>{children}</Suspense>
);

export default SuspenseWithFallback;
