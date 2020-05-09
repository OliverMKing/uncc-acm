import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import NavBar from "../NavBar/NavBar";
import Body from "../Body/Body";
import theme from "../../Theme";
import Routes, { IRoute } from "../../Routes";
import { ThemeProvider } from "@material-ui/core";

function App(): JSX.Element {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    </div>
  );
}

export default App;
