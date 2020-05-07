import React from "react";

const Home: React.FC = () => {
  return <h1>Home</h1>;
};

const Schedule: React.FC = () => {
  return <h1>Schedule</h1>;
};

const Problems: React.FC = () => {
  return <h1>Problems</h1>;
};

const Resources: React.FC = () => {
  return <h1>Resources</h1>;
};

const Routes = [
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
