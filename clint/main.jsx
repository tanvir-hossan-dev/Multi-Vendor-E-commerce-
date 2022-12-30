import React from "react";
import ReactDOM from "react-dom/client";
import App from "./src/App/App";
import "./index.css";
import { Provider } from "react-redux";
import Store from "./src/Redux/App/Store";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={Store}>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </Provider>
);
