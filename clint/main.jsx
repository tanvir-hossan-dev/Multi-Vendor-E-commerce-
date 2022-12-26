import React from "react";
import ReactDOM from "react-dom/client";
import App from "./src/App/App";
import "./index.css";
import { Provider } from "react-redux";
import Store from "./src/Redux/App/Store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={Store}>
    <App />
  </Provider>
);
