import React from "react";

import { Container, Typography } from "@material-ui/core";

const Home: React.FC = (): JSX.Element => {
  return (
    <Container maxWidth="md">
      <Typography variant="h3" component="h3" align="left">
        Association for Computing Machinery
      </Typography>
      <Typography variant="h4" component="h4" align="left" gutterBottom>
        Student Chapter at the University of North Carolina at Charlotte
      </Typography>
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
