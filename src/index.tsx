import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components";
import { AuthContextProvider } from "./contexts/auth.context";

import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);
