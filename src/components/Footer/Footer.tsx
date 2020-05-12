import React from "react";
import {
  Grid,
  Typography,
  createStyles,
  makeStyles,
  Theme,
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footer: {
      borderTop: `1px solid ${theme.palette.divider}`,
      marginTop: theme.spacing(5),
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
    },
    left: {
      textAlign: "left",
    },
    right: {
      textAlign: "right",
    },
  })
);

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <Grid container justify="space-between">
        <Grid item xs={6}>
          <Typography variant="subtitle1" className={classes.left} gutterBottom>
            Important Links
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography
            variant="subtitle1"
            className={classes.right}
            gutterBottom
          >
            Parent Organizations
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="body2" className={classes.left}>
            <a
              href="https://discord.com/invite/JqrPUEn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Discord
            </a>
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography variant="body2" className={classes.right}>
            <a
              href="https://www.uncc.edu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              University of North Carolina at Charlotte
            </a>
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="body2" className={classes.left}>
            <a
              href="https://ninerengage.uncc.edu/organization/acm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Niner Engage
            </a>
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography variant="body2" className={classes.right}>
            <a
              href="https://cci.uncc.edu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              College of Computing and Informatics
            </a>
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="body2" className={classes.left}>
            <a
              href="mailto:acm-uncc@uncc.edu"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email
            </a>
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography variant="body2" className={classes.right}>
            <a
              href="https://www.acm.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Association for Computing Machinery
            </a>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
