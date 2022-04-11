import { menuMap } from "@/routes";
import { Breadcrumb as AntdBreadcrumb } from "antd";
import { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";

interface BreadcrumbProps {
  className?: string;
}

const Breadcrumb = ({ className }: BreadcrumbProps) => {
  const location = useLocation();

  const indexName = useMemo(() => menuMap["/"]?.name, []);
  const currentName = useMemo(
    () => menuMap[location.pathname]?.name,
    [location.pathname]
  );
  const currentIsNotIndex = useMemo(
    () => location.pathname !== "/",
    [location.pathname]
  );

  return (
    <AntdBreadcrumb className={className}>
      <AntdBreadcrumb.Item key="/">
        <Link to="/">{indexName}</Link>
      </AntdBreadcrumb.Item>
      {currentIsNotIndex && (
        <AntdBreadcrumb.Item key={location.pathname}>
          {currentName}
        </AntdBreadcrumb.Item>
      )}
    </AntdBreadcrumb>
  );
};

export default Breadcrumb;
