import routes from "@/routes";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { css } from "@emotion/react";
import { useMemoizedFn, useSetState } from "ahooks";
import { Layout, Menu } from "antd";
import React, { memo } from "react";
import { Link, useLocation } from "react-router-dom";

const { Content, Header, Sider } = Layout;

const BasicLayout: React.FC = ({ children }) => {
  const location = useLocation();

  const [state, setState] = useSetState({
    collapsed: false,
  });

  const toggleCollapsed = useMemoizedFn(() => {
    setState((prevState) => ({ collapsed: !prevState.collapsed }));
  });

  return (
    <Layout
      css={css`
        height: 100%;
      `}
    >
      <Sider collapsed={state.collapsed} collapsible trigger={null}>
        <Menu defaultSelectedKeys={[location.pathname]} theme="dark">
          {routes.map((route) => (
            <Menu.Item key={route.path}>
              <Link to={route.path}>{route.name}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout>
        <Header>
          {state.collapsed ? (
            <MenuUnfoldOutlined onClick={toggleCollapsed} />
          ) : (
            <MenuFoldOutlined onClick={toggleCollapsed} />
          )}
        </Header>
        <Content style={{ padding: 24 }}>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default memo<React.FC>(BasicLayout);
