import React from "react";

import { Backdrop } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: "#fff",
    },
    image: {
      width: "80%",
      [theme.breakpoints.up("md")]: {
        width: "65%",
      },
    },
  })
);

const FocusedPicture = (props: any) => {
  const classes = useStyles();

  return (
    <Backdrop
      className={classes.backdrop}
      open={props.focus}
      onClick={props.close}
    >
      <div
        style={{
          height: "90%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={props.picture} className={classes.image} alt="Focused" />
      </div>
    </Backdrop>
  );
};

export default FocusedPicture;
