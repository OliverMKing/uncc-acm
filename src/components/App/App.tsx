import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import NavBar from "./NavBar/NavBar";
import Body from "./Body/Body";
import NewProblem from "./Body/Problems/NewProblem/NewProblem";
import Problem from "./Body/Problems/Problem/Problem";
import theme from "../Theme";
import Routes, { IRoute } from "../Routes";
import { ThemeProvider } from "@material-ui/core";

import Amplify, { Auth, Hub } from "aws-amplify";
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth/lib/types";
import awsExports from "../../aws-exports";

Amplify.configure(awsExports);

function App(): JSX.Element {
  const [user, setUser] = useState(null);

  // Checks if the user signs in or signs out and sets user state accordingly
  useEffect(() => {
    Hub.listen("auth", ({ payload: { event, data } }) => {
      switch (event) {
        case "signIn":
          setUser(data);
          break;
        case "signOut":
          setUser(null);
          break;
      }
    });

    Auth.currentAuthenticatedUser()
      .then((user) => {
        setUser(user);
      })
      .catch(() => console.log("Not signed in"));
  });

  // Lets people log in with Google
  const googleLogin = () =>
    Auth.federatedSignIn({
      provider: CognitoHostedUIIdentityProvider.Google,
    });

  // Logsout user
  const logOut = () => Auth.signOut();

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar auth={googleLogin} user={user} logout={logOut}></NavBar>
        <Body>
          <Switch>
            <Route exact path={"/problems/new"} key={"/problems/new"}>
              <NewProblem />
            </Route>{" "}
            <Route
              exact
              path={"/problems/:id"}
              key={"/problems/:id"}
              component={Problem}
            />
            {Routes.map((route: IRoute) => (
              <Route exact path={route.path} key={route.path}>
                <route.component />
              </Route>
            ))}
          </Switch>{" "}
        </Body>
      </ThemeProvider>
    </div>
  );
}

export default App;
