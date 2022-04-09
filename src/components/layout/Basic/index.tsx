import routes, { Routes } from "@/routes";
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

  const renderMenuItems = useMemoizedFn((routes: Routes, parentPath = "") => {
    return routes.map((route) => {
      const currentPath = `${parentPath}${route.path}`;

      if (route.children) {
        return (
          <Menu.SubMenu key={currentPath} title={route.name}>
            {renderMenuItems(route.children, currentPath)}
          </Menu.SubMenu>
        );
      } else {
        return (
          <Menu.Item key={currentPath}>
            <Link to={currentPath}>{route.name}</Link>
          </Menu.Item>
        );
      }
    });
  });

  return (
    <Layout
      css={css`
        height: 100%;
      `}
    >
      <Sider collapsed={state.collapsed} collapsible trigger={null}>
        <div
          css={css`
            height: 32px;
            line-height: 32px;
            margin: 16px 24px;
            color: #fff;
          `}
        >
          技术栈
        </div>
        <Menu
          defaultSelectedKeys={[location.pathname]}
          mode="inline"
          theme="dark"
        >
          {renderMenuItems(routes)}
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
        <Content
          css={css`
            padding: 24px;
          `}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default memo<React.FC>(BasicLayout);
