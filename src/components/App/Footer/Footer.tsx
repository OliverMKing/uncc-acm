import React from "react";
import {
  Grid,
  Typography,
  Link,
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
      [theme.breakpoints.down("xs")]: {
        display: "none",
      },
    },
    right: {
      textAlign: "right",
      [theme.breakpoints.down("xs")]: {
        textAlign: "center",
      },
    },
  })
);

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <Grid container justify="space-between">
        <Grid item xs={false} sm={6}>
          <Typography variant="subtitle1" className={classes.left} gutterBottom>
            Important Links
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography
            variant="subtitle1"
            className={classes.right}
            gutterBottom
          >
            Parent Organizations
          </Typography>
        </Grid>
        <Grid item xs={false} sm={4}>
          <Typography variant="body2" className={classes.left}>
            <Link
              href="https://discord.com/invite/JqrPUEn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Discord
            </Link>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Typography variant="body2" className={classes.right}>
            <Link
              href="https://www.uncc.edu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              University of North Carolina at Charlotte
            </Link>
          </Typography>
        </Grid>
        <Grid item xs={false} sm={4}>
          <Typography variant="body2" className={classes.left}>
            <Link
              href="https://ninerengage.uncc.edu/organization/acm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Niner Engage
            </Link>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Typography variant="body2" className={classes.right}>
            <Link
              href="https://cci.uncc.edu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              College of Computing and Informatics
            </Link>
          </Typography>
        </Grid>
        <Grid item xs={false} sm={4}>
          <Typography variant="body2" className={classes.left}>
            <Link
              href="mailto:acm-uncc@uncc.edu"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email
            </Link>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Typography variant="body2" className={classes.right}>
            <Link
              href="https://www.acm.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Association for Computing Machinery
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
