import React, { useState, useEffect } from "react";

import { CircularProgress, Typography, Link, Chip } from "@material-ui/core";

import { API, graphqlOperation } from "aws-amplify";
import { getProblem } from "../../../../../graphql/queries";

const Problem = (props: any) => {
  const [problem, setProblem] = useState<any>(null);

  async function fetchProblem() {
    try {
      const problemData: any = await API.graphql(
        graphqlOperation(getProblem, { id: props.match.params.id })
      );
      setProblem(problemData.data.getProblem);
      console.log(problemData);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchProblem();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (problem === null)
    return (
      <div style={{ margin: "200px 0px 200px 0px" }}>
        <CircularProgress />
      </div>
    );

  return (
    <div>
      <Typography variant="h3" component="h3" align="left">
        {problem.name}
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "left",
          margin: "10px 0px 10px 0px",
        }}
      >
        {problem.tags.map((tag: String) => {
          return (
            <Chip
              variant="outlined"
              color="primary"
              label={tag}
              style={{ marginRight: "10px" }}
            />
          );
        })}
      </div>
      <Link href={problem.link} target="_blank" rel="noopener noreferrer">
        <Typography variant="subtitle1" align="left" gutterBottom>
          {problem.link}
        </Typography>
      </Link>
      <Typography variant="subtitle1" align="left" gutterBottom>
        Difficulty {problem.difficulty}
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

export default Problem;
