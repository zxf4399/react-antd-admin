import { BasicLayout } from "@/components/layout";
import { Spin } from "antd";
import { Suspense, useMemo } from "react";
import { Provider } from "react-redux";
import { HashRouter, Route, Routes } from "react-router-dom";
import routes, { getFlattenRoutes } from "./routes";
import { store } from "./store";

const App = () => {
  const memoizedRoutes = useMemo(() => getFlattenRoutes(routes), []);

  return (
    <Provider store={store}>
      <HashRouter>
        <BasicLayout>
          <Routes>
            {memoizedRoutes.map((route) => (
              <Route
                element={
                  <Suspense fallback={<Spin />}>{route.element}</Suspense>
                }
                key={route.path}
                path={route.path}
              />
            ))}
          </Routes>
        </BasicLayout>
      </HashRouter>
    </Provider>
  );
};

export default App;
