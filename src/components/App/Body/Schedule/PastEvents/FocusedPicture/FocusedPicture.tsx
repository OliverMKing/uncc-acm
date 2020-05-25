import React from "react";

import { Backdrop, IconButton, Grid } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Close } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: "#fff",
      backgroundColor: "rgba(0, 0, 0, 0.8)",
    },
    image: { width: "100%" },
    grid: {
      margin: "40px 0px 20px 0px",
      width: "80%",
      [theme.breakpoints.up("md")]: {
        margin: "0px",
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
      <div className={classes.grid}>
        <Grid alignItems="center" container>
          <Grid item xs={12} style={{ textAlign: "end" }}>
            <IconButton aria-label="close" onClick={props.close}>
              <Close style={{ color: "white" }} />
            </IconButton>
          </Grid>
          <Grid item xs={12}>
            <img src={props.picture} className={classes.image} alt="Focused" />
          </Grid>
        </Grid>
      </div>
    </Backdrop>
  );
};

export default FocusedPicture;
