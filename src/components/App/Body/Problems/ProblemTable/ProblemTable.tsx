import React from "react";

import { Grid, Typography, Link } from "@material-ui/core";

const ProblemTable = (props: any) => {
  return (
    <Grid
      style={{ margin: "15px 0px 15px 0px" }}
      container
      alignItems="center"
      spacing={3}
    >
      {props.problems.map((problem: any) => {
        return (
          <Grid
            container
            xs={12}
            justify="flex-start"
            alignItems="flex-start"
            style={{ textAlign: "left" }}
          >
            <Grid item xs={5}>
              <Typography variant="body1">{problem.name}</Typography>
            </Grid>
            <Grid item xs={2}>
              <Link
                href={problem.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Typography variant="body1" noWrap>
                  {problem.website}
                </Typography>
              </Link>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body1" noWrap>
                {problem.tags.join(", ")}
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography variant="body1">{problem.difficulty}</Typography>
            </Grid>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ProblemTable;
