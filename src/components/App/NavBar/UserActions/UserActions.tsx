import React, { useState } from "react";

import {
  Button,
  Popper,
  MenuList,
  MenuItem,
  Grow,
  Paper,
  ClickAwayListener,
} from "@material-ui/core";
import { ArrowDropDown } from "@material-ui/icons";

const UserActions = (props: any) => {
  const anchorRef = React.useRef<HTMLButtonElement>(null);
  const [logoutOpen, setLogoutOpen] = useState(false);

  // Changes Logout dropdown
  const handleLogoutToggle = () => {
    setLogoutOpen((prevLogoutOpen) => !prevLogoutOpen);
  };

  // Closes Logout dropdown
  const handleLogoutClose = (event: React.MouseEvent<EventTarget>) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setLogoutOpen(false);
  };

  // Handles keydown in Logout dropdown
  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setLogoutOpen(false);
    }
  }

  // Logout dropdown menu
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

  // If a user is logged in
  if (props.user && props.user.attributes) {
    return (
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
    );
  }

  // Render login button is user isn't logged in
  return (
    <Button color="inherit" onClick={props.auth}>
      Login
    </Button>
  );
};

export default UserActions;
