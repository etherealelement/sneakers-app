import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { App } from "./App";
import "./helpers/reset.scss";
import "macro-css"


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="wrapper">
      <div className="container">
        <App />
      </div>
    </div>
  </React.StrictMode>
);
