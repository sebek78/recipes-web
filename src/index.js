import React from "react";
import { render } from "react-dom";
import "./style.scss";
import { BrowserRouter } from "react-router-dom";
import App from "./containers/App";

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
