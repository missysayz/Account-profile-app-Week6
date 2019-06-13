import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import AccountProvider from "./Providers/AccountProvider";
import { BrowserRouter } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";

ReactDOM.render(
  <AccountProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AccountProvider>,
  document.getElementById("root")
);
