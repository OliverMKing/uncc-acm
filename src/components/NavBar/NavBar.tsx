import React, { useState } from "react";

import { NavLink, withRouter, RouteComponentProps } from "react-router-dom";
import Routes, { IRoute } from "../../Routes";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {
  AppBar,
  Button,
  Drawer,
  Toolbar,
  Typography,
  IconButton,
  MenuList,
  MenuItem,
  ListItemText,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import logo from "../../images/acm-white.png";

// Define styles of components
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(4),
    },
    logo: {
      maxHeight: 50,
      marginRight: theme.spacing(2),
    },
    title: {
      display: "flex",
      alignItems: "center",
      flexGrow: 1,
    },
    drawer: {
      width: 300,
    },
    fullList: {
      width: "auto",
    },
  })
);

// NavBar component
const NavBar: React.FC<RouteComponentProps> = ({
  history,
  location,
  match,
}: RouteComponentProps) => {
  const classes = useStyles();

  // State hook that toggles drawer
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setIsOpen(open);
  };

  // Check if a route is currently active
  const activeRoute = (routeName: String): boolean => {
    return location.pathname === routeName;
  };

  return (
    <div>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <NavLink
              className={classes.title}
              style={{ textDecoration: "none", color: "white" }}
              to="/"
            >
              <img src={logo} className={classes.logo} alt="ACM Logo" />
              <Typography variant="h6">UNCC ACM</Typography>
            </NavLink>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
      <Drawer
        classes={{ paper: classes.drawer }}
        open={isOpen}
        onClose={toggleDrawer(false)}
      >
        <div
          className={classes.fullList}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <MenuList>
            {Routes.map((prop: IRoute, key) => {
              return (
                <NavLink
                  to={prop.path}
                  style={{ textDecoration: "none" }}
                  key={key}
                >
                  <MenuItem selected={activeRoute(prop.path)}>
                    <ListItemText primary={prop.name} />
                  </MenuItem>
                </NavLink>
              );
            })}
          </MenuList>
        </div>
      </Drawer>
    </div>
  );
};

export default withRouter(NavBar);
