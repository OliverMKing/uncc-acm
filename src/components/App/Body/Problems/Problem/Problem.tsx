import React, { useState, useEffect } from "react";

import { CircularProgress } from "@material-ui/core";

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
      <h1>{problem.name}</h1>
    </div>
  );
};

export default Problem;
