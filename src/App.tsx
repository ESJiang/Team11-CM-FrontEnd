// npm isntall --save axios
import React from "react";
import {HashRouter, Switch, Route} from "react-router-dom";
import DrawerRouterContainer from "./layout/DrawerRouterContainer";
import Dashboard from "./Dashboard";
import Home from "./Home";
import "./App.scss";

export default function App() {
  return (
    <HashRouter>
      <DrawerRouterContainer>
        <div className="page-container">
          <Switch>
            <Route exact path="/Dashboard">
              <Dashboard />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </DrawerRouterContainer>
    </HashRouter>
  );
};
