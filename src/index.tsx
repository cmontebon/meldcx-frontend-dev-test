import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components";
import { AuthContextProvider } from "./contexts/auth.context";

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