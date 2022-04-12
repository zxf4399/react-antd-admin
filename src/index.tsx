import "@/styles/base.css";

import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";

import { isProd } from "@/utils/const";

import App from "./App";

if (isProd && "serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/tech-stack/service-worker.js");
  });
}

const root = createRoot(document.getElementById("root") as HTMLDivElement);

root.render(
  <HashRouter>
    <App />
  </HashRouter>
);
