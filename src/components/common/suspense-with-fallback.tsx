import { Spin } from "antd";
import type { ReactNode } from "react";
import { Suspense } from "react";

interface SuspenseWithFallbackProps {
  children: ReactNode;
}

const SuspenseWithFallback = ({ children }: SuspenseWithFallbackProps) => (
  <Suspense fallback={<Spin delay={200} />}>{children}</Suspense>
);

export default SuspenseWithFallback;
