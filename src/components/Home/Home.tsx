import React from "react";
import { NavLink } from "react-router-dom";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import { Email, LinkedIn } from "@material-ui/icons";

import logo from "../../images/acm-color.png";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    logo: {
      float: "right",
      [theme.breakpoints.down("md")]: {
        display: "none",
      },
    },
    grid: {
      textAlign: "left",
    },
  })
);

const Home: React.FC = (): JSX.Element => {
  const classes = useStyles();

  return (
    <div>
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
        computer science problems. The strategies we study are especially useful
        in technical interviews and competitive programming. We also hold
        additional workshops on development methodologies and programming
        languages which you typically don't encounter in the classroom.
      </Typography>
      <Typography variant="h5" component="h5" align="left" gutterBottom>
        New to ACM?
      </Typography>
      <Typography variant="body1" align="left" gutterBottom paragraph>
        All students are welcome at our meetings. We cater to both experienced
        programmers and complete beginners. Normal meetings are held twice a
        week and cover a wide range of topics. Major events are held about every
        other month. Every fall, we send teams of three to the{" "}
        <a
          href="https://icpc.baylor.edu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          International Collegiate Programming Contest (ICPC)
        </a>
        . Check the <NavLink to="/schedule">schedule</NavLink> to learn more.
      </Typography>
      <Typography variant="body1" align="left" gutterBottom paragraph>
        New or prospective members should join us on{" "}
        <a
          href="https://discord.com/invite/JqrPUEn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Discord
        </a>{" "}
        and{" "}
        <a
          href="https://ninerengage.uncc.edu/organization/acm"
          target="_blank"
          rel="noopener noreferrer"
        >
          Niner Engage
        </a>{" "}
        to receive periodic updates.
      </Typography>
      <Typography variant="h5" component="h5" align="left" gutterBottom>
        Current Officers
      </Typography>
      <Grid container justify="flex-start" className={classes.grid}>
        <Grid item xs={9} md={4}>
          <Typography>President — Oliver King</Typography>
        </Grid>
        <Grid item xs={3} md={8}>
          <a
            href="https://www.linkedin.com/in/oliver-merkley-king/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn color="primary" />
          </a>{" "}
          <a
            href="mailto:oking3@uncc.edu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Email color="primary" />
          </a>
        </Grid>
        <Grid item xs={9} md={4}>
          <Typography>Vice President — Ed Nava</Typography>
        </Grid>
        <Grid item xs={3} md={8}>
          <a
            href="https://www.linkedin.com/in/ed-nava/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn color="primary" />
          </a>{" "}
          <a
            href="mailto:enava@uncc.edu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Email color="primary" />
          </a>
        </Grid>
        <Grid item xs={9} md={4}>
          <Typography>Secretary — Jacob Raymond</Typography>
        </Grid>
        <Grid item xs={3} md={8}>
          <a
            href="https://www.linkedin.com/in/jacob-raymond-3a3a45126/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn color="primary" />
          </a>{" "}
          <a
            href="mailto:jraymon9@uncc.edu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Email color="primary" />
          </a>
        </Grid>
        <Grid item xs={9} md={4}>
          <Typography>Treasurer — Mat Rizvanolli</Typography>
        </Grid>
        <Grid item xs={3} md={8}>
          <a
            href="https://www.linkedin.com/in/mat-rizvanolli-790920152/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn color="primary" />
          </a>{" "}
          <a
            href="mailto:mrizvano@uncc.edu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Email color="primary" />
          </a>
        </Grid>
      </Grid>
      <Typography variant="h5" component="h5" align="left" gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="body1" align="left" gutterBottom paragraph>
        You can email us at{" "}
        <a
          href="mailto:acm-uncc@uncc.edu"
          target="_blank"
          rel="noopener noreferrer"
        >
          acm-uncc@uncc.edu
        </a>
        . Any suggestions or topic requests are appreciated. We are open to
        hosting employer events and forming corporate partnerships.
      </Typography>
    </div>
  );
};

export default Home;
