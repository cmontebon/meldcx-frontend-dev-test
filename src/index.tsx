import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components";
import { AuthContextProvider } from "./contexts/auth.context";

import { ToastContainer } from "react-toastify";

import "./index.css";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
      />
    </AuthContextProvider>
  </React.StrictMode>
);
