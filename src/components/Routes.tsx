import React from "react";

import { Home, Event, ViewList, Folder } from "@material-ui/icons";

import HomeComponent from "./App/Body/Home/Home";
import Resources from "./App/Body/Resources/Resources";
import Problems from "./App/Body/Problems/Problems";

const Schedule: React.FC = (): JSX.Element => {
  return <h1>Schedule</h1>;
};

// Define and export route interface
export interface IRoute {
  path: string;
  name: string;
  component: React.ComponentType;
  icon: React.ComponentType;
}

// Define routes
const Routes: IRoute[] = [
  {
    path: "/",
    name: "Home",
    component: HomeComponent,
    icon: Home,
  },
  {
    path: "/schedule",
    name: "Schedule",
    component: Schedule,
    icon: Event,
  },
  {
    path: "/problems",
    name: "Problems",
    component: Problems,
    icon: ViewList,
  },
  {
    path: "/resources",
    name: "Resources",
    component: Resources,
    icon: Folder,
  },
];

export default Routes;
