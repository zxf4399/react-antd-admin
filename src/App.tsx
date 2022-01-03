import { Layout, Menu, MenuProps, Spin } from "antd";
import { lazy, Suspense, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useMemoizedFn } from "ahooks";

import "./App.css";

const { Content, Sider } = Layout;
const Home = lazy(() => import("./views/Home"));
const About = lazy(() => import("./views/About"));

function App() {
  const location = useLocation();

  const [collapsed, setCollapsed] = useState(false);
  const [selectedKeys, setSelectedKeys] = useState<string[]>(() => [
    location.pathname,
  ]);

  let navigate = useNavigate();

  const onCollapse = (collapsed: boolean) => {
    setCollapsed(collapsed);
  };

  const handleClick = useMemoizedFn<NonNullable<MenuProps["onClick"]>>(
    ({ key }) => {
      setSelectedKeys([key]);
      navigate(key);
    }
  );

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsed={collapsed} collapsible onCollapse={onCollapse}>
        <Menu
          mode="inline"
          onClick={handleClick}
          selectedKeys={selectedKeys}
          theme="dark"
        >
          <Menu.Item key="/">Home</Menu.Item>
          <Menu.Item key="/about">About</Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Content>
          <Suspense fallback={<Spin size="large" />}>
            <Routes>
              <Route element={<Home />} path="/" />
              <Route element={<About />} path="/about" />
            </Routes>
          </Suspense>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
