import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import NavBar from "../NavBar/NavBar";
import Body from "../Body/Body";
import Routes, { IRoute } from "../../Routes";

function App(): JSX.Element {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Switch>
        {Routes.map((route: IRoute) => (
          <Route exact path={route.path} key={route.path}>
            <Body>
              <route.component />
            </Body>
          </Route>
        ))}
      </Switch>
    </div>
  );
}

export default App;
