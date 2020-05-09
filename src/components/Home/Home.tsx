import React from "react";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Container, Typography } from "@material-ui/core";

import logo from "../../images/acm-color.png";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    logo: {
      float: "right",
      [theme.breakpoints.down("md")]: {
        display: "none",
      },
    },
    content: {
      flexGrow: 1,
      paddingTop: theme.spacing(6),
      [theme.breakpoints.down("md")]: {
        paddingLeft: theme.spacing(9) + 1,
      },
    },
  })
);

const Home: React.FC = (): JSX.Element => {
  const classes = useStyles();

  return (
    <Container maxWidth="md" className={classes.content}>
      <Typography variant="h3" component="h3" align="left">
        Association for Computing Machinery
      </Typography>
      <Typography variant="h5" component="h5" align="left" gutterBottom>
        Student Chapter at the University of North Carolina at Charlotte
      </Typography>
      <img src={logo} className={classes.logo} alt="ACM Logo" />
      <Typography variant="body1" align="left" gutterBottom paragraph>
        The local student chapter of a worldwide organization for computing
        professionals, delivering resources that advance computing as a science
        and a profession, enable professional development, and promote policies
        and research that benefit society.
      </Typography>
      <Typography variant="body1" align="left" gutterBottom paragraph>
        Our main focuses is on the logical methods used to solve interesting
        computer science problems. The strategies we study are useful in
        technical interviews and competitive programming.
      </Typography>
      <Typography variant="body1" align="left" gutterBottom paragraph>
        We also hold additional workshops on development methodologies and
        programming languages which you typically don't encounter in the
        classroom.
      </Typography>
    </Container>
  );
};

export default Home;
