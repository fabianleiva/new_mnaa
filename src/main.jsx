import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ApiProvider from "./context/ApiContext.jsx";
import BootProvider from "./context/BootContext.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <BootProvider>
        <ApiProvider>
          <App />
        </ApiProvider>
      </BootProvider>
    </BrowserRouter>
  </React.StrictMode>
);
