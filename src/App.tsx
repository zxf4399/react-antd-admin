import PageCounter from "@/pages/counter";
import PageIndex from "@/pages/index";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { store } from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageIndex />} />
          <Route path="counter" element={<PageCounter />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
