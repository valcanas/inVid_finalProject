import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Router from "./components";

import store from "./store";

const app = (
  <React.Fragment>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.Fragment>
);

ReactDOM.render(app, document.getElementById("root"));
