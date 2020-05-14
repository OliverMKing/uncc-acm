import React from "react";

import { Typography } from "@material-ui/core";

const Problems = () => {
  return (
    <div>
      <Typography variant="h3" component="h3" align="left" gutterBottom>
        Problems
      </Typography>
      <Typography variant="body1" align="left" gutterBottom paragraph>
        We work on different problems every week. This page is a collection of
        problems we have previously worked on and solutions we have come up
        with. You can search for different kinds of problems below. Signed in
        users can upload their solutions.
      </Typography>
    </div>
  );
};

export default Problems;
