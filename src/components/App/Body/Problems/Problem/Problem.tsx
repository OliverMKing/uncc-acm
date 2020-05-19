import React, { useState, useEffect } from "react";

import {
  CircularProgress,
  Typography,
  Chip,
  Select,
  MenuItem,
  Button,
  Link,
  FormControl,
  Paper,
  InputLabel,
} from "@material-ui/core";
import { LibraryAdd } from "@material-ui/icons";
import { API, graphqlOperation } from "aws-amplify";
import { getProblem } from "../../../../../graphql/queries";

import NewSolution from "./NewSolution/NewSolution";

const Problem = (props: any) => {
  const [problem, setProblem] = useState<any>(null);
  const [showNewSolution, setNewSolution] = useState<boolean>(false);
  const [solution, setSolution] = useState<String>("");
  const [code, setCode] = useState<String>("");

  async function fetchProblem() {
    try {
      const problemData: any = await API.graphql(
        graphqlOperation(getProblem, { id: props.match.params.id })
      );
      setProblem(problemData.data.getProblem);
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

  const addSolutionClick = () => {
    setNewSolution(true);
  };

  const handleSolutionChange = (event: any): void => {
    setSolution(event.target.value);

    const match = problem.solutions.items.find((item: any) => {
      return item.id === event.target.value;
    }).code;

    setCode(match);
  };

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
      <Typography variant="h4" component="h4" align="left" gutterBottom>
        Solutions
      </Typography>
      <Typography variant="body1" align="left" paragraph>
        Don't just view other people's solutions as soon as you get stuck. These
        problems are hard and you should spend a lot of time on them yourself
        first. Looking at the solution as soon as you struggle is not an
        effective strategy for learning how to solve problems.
      </Typography>
      <FormControl variant="outlined" fullWidth>
        <InputLabel>View Solution</InputLabel>
        <Select
          style={{ textAlign: "left" }}
          label="View Solution"
          value={solution}
          onChange={handleSolutionChange}
        >
          {problem.solutions.items.map((solution: any) => {
            return (
              <MenuItem
                value={solution.id}
              >{`${solution.language} solution by ${solution.owner}`}</MenuItem>
            );
          })}
        </Select>
      </FormControl>
      {code === "" ? null : (
        <Paper style={{ marginTop: "15px" }}>
          <div
            style={{
              whiteSpace: "pre-wrap",
              textAlign: "left",
              margin: "0px 20px 0px 20px",
              padding: "20px 0px 20px 0px",
            }}
          >
            {code}
          </div>
        </Paper>
      )}
      <div style={{ marginTop: "15px" }}>
        {showNewSolution ? (
          <NewSolution id={props.match.params.id} user={props.user} />
        ) : (
          <Button
            variant="contained"
            color="primary"
            startIcon={<LibraryAdd />}
            onClick={addSolutionClick}
          >
            Add Solution
          </Button>
        )}
      </div>
    </div>
  );
};

export default Problem;
