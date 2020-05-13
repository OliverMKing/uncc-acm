import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import NavBar from "../NavBar/NavBar";
import Body from "../Body/Body";
import theme from "../../Theme";
import Routes, { IRoute } from "../../Routes";
import { ThemeProvider } from "@material-ui/core";

import Amplify, { Auth, Hub } from "aws-amplify";
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth/lib/types";
import awsExports from "../../aws-exports";

Amplify.configure(awsExports);

function App(): JSX.Element {
  const [user, setUser] = useState(null);

  // Essentially component did mount
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
        console.log(user);
      })
      .catch(() => console.log("Not signed in"));
  }, []);

  // Login
  const googleLogin = () =>
    Auth.federatedSignIn({
      provider: CognitoHostedUIIdentityProvider.Google,
    });

  // Logout
  const logOut = () => Auth.signOut();

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar auth={googleLogin} user={user} logout={logOut}></NavBar>
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
