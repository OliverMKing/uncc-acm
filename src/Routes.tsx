import React from "react";

// Define components in path (this is a placeholder)
const Home: React.FC = (): JSX.Element => {
  return <h1>Home</h1>;
};

const Schedule: React.FC = (): JSX.Element => {
  return <h1>Schedule</h1>;
};

const Problems: React.FC = (): JSX.Element => {
  return <h1>Problems</h1>;
};

const Resources: React.FC = (): JSX.Element => {
  return <h1>Resources</h1>;
};

// Define and export route interface
export interface IRoute {
  path: string;
  name: string;
  component: React.ComponentType;
}

// Define routes
const Routes: IRoute[] = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/schedule",
    name: "Schedule",
    component: Schedule,
  },
  {
    path: "/problems",
    name: "Problems",
    component: Problems,
  },
  {
    path: "/resources",
    name: "Resources",
    component: Resources,
  },
];

export default Routes;
