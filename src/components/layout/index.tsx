import { css } from "@emotion/react";
import { useMemoizedFn } from "ahooks";
import { Layout as AntdLayout, Menu, MenuProps, Row } from "antd";
import { memo, useMemo } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

import routes, { getMenuList, MenuList } from "@/routes";

import DarkReader from "../common/darkreader";
import Breadcrumb from "./breadcrumb";

const { Content, Header, Sider } = AntdLayout;

const Layout = () => {
  const location = useLocation();

  const defaultOpenKeys = useMemo(
    () =>
      location.pathname
        .split("/")
        .filter(Boolean)
        .filter((_, i) => i === 0)
        .map((item) => `/${item}`),
    []
  );

  const renderMenuList = useMemoizedFn(
    (menuList: MenuList): MenuProps["items"] => {
      return menuList.map((menuItem) => {
        if (menuItem.children) {
          return {
            label: <Link to={menuItem.path}>{menuItem.name}</Link>,
            key: menuItem.path,
            children: renderMenuList(menuItem.children),
          };
        } else {
          return {
            label: <Link to={menuItem.path}>{menuItem.name}</Link>,
            key: menuItem.path,
          };
        }
      });
    }
  );

  return (
    <AntdLayout
      css={css`
        height: 100%;
      `}
    >
      <Sider collapsible theme="light" trigger={null}>
        <div
          css={css`
            height: 32px;
            line-height: 32px;
            margin: 16px 24px;
          `}
        >
          技术栈
        </div>
        <Menu
          defaultOpenKeys={defaultOpenKeys}
          defaultSelectedKeys={[location.pathname]}
          items={renderMenuList(getMenuList(routes))}
          mode="inline"
        />
      </Sider>
      <AntdLayout>
        <Header
          css={css`
            background-color: #fff;
            box-shadow: 0 8px 24px -2px rgb(0 0 0 / 5%);
          `}
        >
          <Row
            align="middle"
            css={css`
              height: 100%;
            `}
            justify="end"
          >
            <DarkReader />
          </Row>
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
