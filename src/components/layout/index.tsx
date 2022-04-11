import routes, { getMenuList, MenuList } from "@/routes";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { css } from "@emotion/react";
import { useMemoizedFn, useSetState } from "ahooks";
import { Layout as AntdLayout, Menu } from "antd";
import { memo } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Breadcrumb from "./breadcrumb";

const { Content, Header, Sider } = AntdLayout;

const Layout = () => {
  const location = useLocation();

  const [state, setState] = useSetState({
    collapsed: false,
  });

  const toggleCollapsed = useMemoizedFn(() => {
    setState((prevState) => ({ collapsed: !prevState.collapsed }));
  });
  const renderMenuList = useMemoizedFn((menuList: MenuList) => {
    return menuList.map((menuItem) => {
      if (menuItem.children) {
        return (
          <Menu.SubMenu key={menuItem.path} title={menuItem.name}>
            {renderMenuList(menuItem.children)}
          </Menu.SubMenu>
        );
      } else {
        return (
          <Menu.Item key={menuItem.path}>
            <Link to={menuItem.path}>{menuItem.name}</Link>
          </Menu.Item>
        );
      }
    });
  });

  return (
    <AntdLayout
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
          {renderMenuList(getMenuList(routes))}
        </Menu>
      </Sider>
      <AntdLayout>
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
          <Breadcrumb
            css={css`
              margin-bottom: 10px;
            `}
          />
          <Outlet />
        </Content>
      </AntdLayout>
    </AntdLayout>
  );
};

export default memo(Layout);
