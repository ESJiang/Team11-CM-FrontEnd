import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createBrowserHistory } from 'history';
export const browserHistory = createBrowserHistory();
ReactDOM.render(<App />, document.querySelector("#root"));
