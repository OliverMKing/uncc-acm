import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

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
import { API } from "aws-amplify";
import { getProblem } from "../../../../../graphql/queries";

import NewSolution from "./NewSolution/NewSolution";
import SyntaxHighlighter from "react-syntax-highlighter";
import { xcode } from "react-syntax-highlighter/dist/esm/styles/hljs";

// Lets the code highlighter highlight correctly
var highlighterLangDict = new Map<string, string>();
highlighterLangDict.set("Csharp", "csp");
highlighterLangDict.set("C", "cs");
highlighterLangDict.set("Cpp", "cpp");
highlighterLangDict.set("Java", "java");
highlighterLangDict.set("Python", "python");
highlighterLangDict.set("JavaScript", "javascript");
highlighterLangDict.set("Go", "go");
highlighterLangDict.set("Kotlin", "kotlin");
highlighterLangDict.set("Ruby", "ruby");
highlighterLangDict.set("Haskell", "haskell");
highlighterLangDict.set("Rust", "rust");
highlighterLangDict.set("Swift", "swift");
highlighterLangDict.set("Scala", "scala");
highlighterLangDict.set("PHP", "php");

// Displays name of code with special characters
var displayLangDict = new Map<string, string>();
displayLangDict.set("Csharp", "C#");
displayLangDict.set("Cpp", "C++");

const Problem = (props: any) => {
  const [problem, setProblem] = useState<any>(null);
  const [showNewSolution, setNewSolution] = useState<boolean>(false);
  const [solution, setSolution] = useState<String>("");
  const [code, setCode] = useState<String>("");

  async function fetchProblem() {
    try {
      const problemData: any = await API.graphql({
        query: getProblem,
        variables: { id: props.match.params.id },
        // @ts-ignore
        authMode: "API_KEY",
      });
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

  // Checks if user has already submitted a solution
  const hasSolution = (): boolean => {
    return (
      problem.solutions.items.filter(
        (solution: any) => solution.owner === props.user.attributes.email
      ).length > 0
    );
  };

  return (
    <div>
      <Helmet>
        <title>UNCC ACM - {problem.name}</title>
      </Helmet>

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
              label={tag.replace("_", " ")}
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
      <FormControl
        variant={problem.solutions.items.length === 0 ? "standard" : "outlined"}
        fullWidth
      >
        <InputLabel>
          {problem.solutions.items.length === 0
            ? "No Solutions Yet"
            : "View Solution"}
        </InputLabel>
        <Select
          style={{ textAlign: "left" }}
          label="View Solution"
          disabled={problem.solutions.items.length === 0}
          value={solution}
          onChange={handleSolutionChange}
        >
          {problem.solutions.items.map((solution: any) => {
            return (
              <MenuItem value={solution.id}>{`${
                displayLangDict.has(solution.language)
                  ? displayLangDict.get(solution.language)
                  : solution.language
              } solution by ${solution.owner}`}</MenuItem>
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
              padding: "5px 0px 5px 0px",
            }}
          >
            <SyntaxHighlighter
              showLineNumbers
              language={highlighterLangDict.get(
                problem.solutions.items.find((item: any) => {
                  return item.id === solution;
                }).language
              )}
              style={xcode}
            >
              {code}
            </SyntaxHighlighter>
          </div>
        </Paper>
      )}
      <div style={{ marginTop: "15px" }}>
        {showNewSolution ? (
          <NewSolution
            id={props.match.params.id}
            user={props.user}
            language={
              hasSolution()
                ? problem.solutions.items.filter(
                    (solution: any) =>
                      solution.owner === props.user.attributes.email
                  )[0].language
                : ""
            }
            code={
              hasSolution()
                ? problem.solutions.items.filter(
                    (solution: any) =>
                      solution.owner === props.user.attributes.email
                  )[0].code
                : ""
            }
            solutionId={
              hasSolution()
                ? problem.solutions.items.filter(
                    (solution: any) =>
                      solution.owner === props.user.attributes.email
                  )[0].id
                : ""
            }
            add={hasSolution() ? false : true}
          />
        ) : props.user ? (
          <Button
            variant="contained"
            color="primary"
            startIcon={<LibraryAdd />}
            onClick={addSolutionClick}
          >
            {hasSolution() ? "Edit Your Solution" : "Add Your Solution"}
          </Button>
        ) : null}
      </div>
    </div>
  );
};

export default Problem;
