import "@/styles/base.css";

import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";

import App from "./App";

const root = createRoot(document.getElementById("root") as HTMLDivElement);

root.render(
  <HashRouter>
    <App />
  </HashRouter>
);
