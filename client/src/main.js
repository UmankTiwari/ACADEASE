import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import { XPProvider } from "./xpContext.jsx";
import "./index.css";

ReactDOM.render(
  React.createElement(React.StrictMode, null,
    React.createElement(XPProvider, null,
      React.createElement(App, null)
    )
  ),
  document.getElementById("root")
);
