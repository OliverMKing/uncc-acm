import React, { useState } from "react";
import clsx from "clsx";

import { NavLink, withRouter } from "react-router-dom";
import Routes, { IRoute } from "../../Routes";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {
  AppBar,
  Button,
  ButtonBase,
  Container,
  Drawer,
  Toolbar,
  Typography,
  IconButton,
  Popper,
  MenuList,
  MenuItem,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Grow,
  Paper,
  ClickAwayListener,
} from "@material-ui/core";
import { Menu, ArrowDropDown } from "@material-ui/icons";

import logo from "../../../images/acm-white.png";

const drawerWidth: number = 170;

// Define styles of components
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingBottom: theme.spacing(3),
    },
    toolbar: {
      padding: 0,
    },
    menuButton: {
      marginRight: 36,
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    logo: {
      maxHeight: 40,
      marginRight: theme.spacing(2),
    },
    title: {
      display: "flex",
      alignItems: "center",
      flexGrow: 1,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: "nowrap",
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      overflowX: "hidden",
    },
    drawerClose: {
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: "hidden",
      width: theme.spacing(7) + 1,
    },
    drawerList: {
      paddingTop: theme.spacing(8) + 1,
    },
  })
);

// NavBar component
const NavBar = (props: any) => {
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
    return props.location.pathname === routeName;
  };

  // Logout dropdown
  const anchorRef = React.useRef<HTMLButtonElement>(null);
  const [logoutOpen, setLogoutOpen] = useState(false);

  const handleLogoutToggle = () => {
    setLogoutOpen((prevLogoutOpen) => !prevLogoutOpen);
  };

  const handleLogoutClose = (event: React.MouseEvent<EventTarget>) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setLogoutOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setLogoutOpen(false);
    }
  }

  const logoutMenu = (
    <Popper
      open={logoutOpen}
      anchorEl={anchorRef.current}
      role={undefined}
      transition
      disablePortal
      placement="bottom-end"
    >
      {({ TransitionProps, placement }) => (
        <Grow
          {...TransitionProps}
          style={{
            transformOrigin:
              placement === "bottom" ? "right top" : "right bottom",
          }}
        >
          <Paper>
            <ClickAwayListener onClickAway={handleLogoutClose}>
              <MenuList
                autoFocusItem={logoutOpen}
                id="menu-list-grow"
                onKeyDown={handleListKeyDown}
              >
                <MenuItem onClick={handleLogoutClose}>Profile</MenuItem>
                <MenuItem onClick={props.logout}>Logout</MenuItem>
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Grow>
      )}
    </Popper>
  );

  // Determine if user is logged in
  const userButton =
    props.user && props.user.attributes ? (
      <div>
        <Button
          color="inherit"
          ref={anchorRef}
          aria-controls={logoutOpen ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          onClick={handleLogoutToggle}
        >
          {props.user.attributes.email} <ArrowDropDown />
        </Button>
        {logoutMenu}
      </div>
    ) : (
      <Button color="inherit" onClick={props.auth}>
        Login
      </Button>
    );

  return (
    <div>
      <div className={classes.root}>
        <AppBar position="fixed" className={classes.appBar}>
          <Container maxWidth="md">
            <Toolbar className={classes.toolbar}>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(!isOpen)}
              >
                <Menu />
              </IconButton>
              <NavLink
                className={classes.title}
                style={{ textDecoration: "none", color: "white" }}
                to="/"
              >
                <ButtonBase focusRipple>
                  <img src={logo} className={classes.logo} alt="ACM Logo" />
                  <Typography variant="h6">UNCC ACM</Typography>
                </ButtonBase>
              </NavLink>
              {userButton}
            </Toolbar>
          </Container>
        </AppBar>
      </div>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: isOpen,
          [classes.drawerClose]: !isOpen,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: isOpen,
            [classes.drawerClose]: !isOpen,
          }),
        }}
        open={isOpen}
        onClose={toggleDrawer(false)}
      >
        <List className={classes.drawerList}>
          {Routes.map((prop: IRoute, key) => {
            return (
              <NavLink
                to={prop.path}
                style={{ textDecoration: "none", color: "inherit" }}
                onClick={toggleDrawer(false)}
              >
                <ListItem button key={key} selected={activeRoute(prop.path)}>
                  <ListItemIcon>{<prop.icon />}</ListItemIcon>
                  <ListItemText primary={prop.name} />
                </ListItem>
              </NavLink>
            );
          })}
        </List>
      </Drawer>
    </div>
  );
};

export default withRouter(NavBar);
