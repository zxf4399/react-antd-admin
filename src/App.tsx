import { BasicLayout } from "@/components/layout";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./routes";
import { store } from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <BasicLayout>
          <Routes>
            {routes.map((route) => (
              <Route
                element={route.element}
                key={route.path}
                path={route.path}
              />
            ))}
          </Routes>
        </BasicLayout>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
