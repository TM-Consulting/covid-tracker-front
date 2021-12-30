import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./containers/App";
import ourStore from "./store";
ReactDOM.render(
  <Provider store={ourStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
