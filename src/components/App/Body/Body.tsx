import React from "react";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";

import Footer from "../Footer/Footer";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      flexGrow: 1,
      paddingTop: theme.spacing(6),
    },
  })
);

// Higher order component that formats the body of the page
const Body: React.FC = ({ children }): JSX.Element => {
  const classes = useStyles();

  return (
    <Container maxWidth="md" className={classes.content}>
      {children}
      <Footer />
    </Container>
  );
};

export default Body;
