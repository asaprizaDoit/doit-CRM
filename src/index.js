import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/App";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./redux/configureStore";
import initialState from "./redux/reducers/initialState";

const store = configureStore(initialState);

render(
  <ReduxProvider store={store}>
    <Router>
      <App />
    </Router>
  </ReduxProvider>,
  document.getElementById("app")
);
