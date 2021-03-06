import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import { Link } from "react-router-dom";

import {
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  Button,
  createStyles,
  Theme,
  Grid,
  Popover,
  Slider,
  makeStyles,
} from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { Search, FilterList, LibraryAdd } from "@material-ui/icons";

import ProblemTable from "./ProblemTable/ProblemTable";

import { API } from "aws-amplify";
import { listProblems } from "../../../../graphql/queries";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    searchAndFilters: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
    },
    filterPopup: {
      padding: theme.spacing(2),
      width: "350px",
    },
    reset: {
      alignContent: "",
    },
  })
);

const Problems = (props: any) => {
  const classes = useStyles();

  // State for problems from API
  const [problems, setProblems] = useState([]);

  // Gets problems
  async function fetchProblems() {
    try {
      const problemData: any = await API.graphql({
        query: listProblems,
        // @ts-ignore
        authMode: "API_KEY",
      });
      const problems = problemData.data.listProblems.items;
      setProblems(problems);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchProblems();
  }, []);

  // State for search input
  const [search, setSearch] = useState("");

  const handleSearchChange = (event: any): void => {
    setSearch(event.target.value);
  };

  // State for filter dropdown
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleFilterClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleFilterClose = () => {
    setAnchorEl(null);
  };

  const filterOpen = Boolean(anchorEl);

  // State for difficulty slider
  const [difficulty, setDifficulty] = useState<number[]>([1, 10]);

  const handleDifficultyChange = (event: any, newValue: number | number[]) => {
    setDifficulty(newValue as number[]);
  };

  // State for website
  const [websites, setWebsites] = useState<String[]>([]);

  const handleWebsitesChange = (event: any, newValues: String | String[]) => {
    setWebsites(newValues as String[]);
  };

  // State for problem types
  const [types, setTypes] = useState<String[]>([]);

  const handleTypesChange = (event: any, newValues: String | String[]) => {
    const values = newValues as String[];
    setTypes(values.map((value: any) => value.replace(" ", "_")));
  };

  // Filter by website, difficulty, category
  const websitesList = ["Leetcode", "Kattis", "HackerRank"];

  const typesList = [
    "String",
    "Tree",
    "Dynamic_Programming",
    "Array",
    "Recursion",
    "Greedy",
    "Search",
    "Graph",
    "Stack",
    "Hash_Table",
    "Linked_List",
    "Sliding_Window",
    "Trie",
    "Two_Pointers",
    "Queue",
    "Backtracking",
    "Sort",
    "Heap",
  ];

  // Reset filters
  const resetFilters = () => {
    setDifficulty([1, 10]);
    setWebsites([]);
    setTypes([]);
  };

  return (
    <div>
      <Helmet>
        <title>UNCC ACM - Problems</title>
      </Helmet>

      <Typography variant="h3" component="h3" align="left" gutterBottom>
        Problems
      </Typography>
      <Typography variant="body1" align="left" gutterBottom paragraph>
        We work on different problems every week. This page is a collection of
        problems we have previously worked on and solutions we have come up
        with. You can search for different kinds of problems below. Signed in
        users can upload their solutions.
      </Typography>
      <Typography variant="body1" align="left" gutterBottom paragraph>
        Click the problem name below to see the page for that problem.{" "}
      </Typography>

      <div className={classes.searchAndFilters}>
        <TextField
          placeholder="Search"
          value={search}
          onChange={handleSearchChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <IconButton disabled>
                  <Search />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <IconButton
          onClick={handleFilterClick}
          color={filterOpen ? "primary" : "default"}
        >
          <FilterList />
        </IconButton>
        <Popover
          open={filterOpen}
          anchorEl={anchorEl}
          onClose={handleFilterClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <div className={classes.filterPopup}>
            <Grid container alignItems="center">
              <Grid item xs={10}>
                <Typography variant="h6">Filters</Typography>
              </Grid>
              <Grid item xs={2}>
                <Button color="primary" onClick={resetFilters}>
                  Reset
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1" style={{ paddingTop: "30px" }}>
                  Website
                </Typography>
              </Grid>
              <Grid item xs={12} style={{ paddingBottom: "20px" }}>
                <Autocomplete
                  multiple
                  filterSelectedOptions
                  id="Website"
                  options={websitesList}
                  value={websites}
                  onChange={handleWebsitesChange}
                  renderInput={(params) => (
                    <TextField {...params} variant="standard" />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1">Difficulty</Typography>
              </Grid>
              <Grid item xs={12} style={{ paddingBottom: "10px" }}>
                <Slider
                  value={difficulty}
                  onChange={handleDifficultyChange}
                  step={1}
                  min={1}
                  max={10}
                  marks={[
                    { value: 1, label: "1" },
                    { value: 10, label: "10" },
                  ]}
                  valueLabelDisplay="auto"
                  aria-labelledby="range-slider"
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1">Type</Typography>
              </Grid>
              <Grid item xs={12}>
                <Autocomplete
                  multiple
                  filterSelectedOptions
                  id="Type"
                  value={types}
                  onChange={handleTypesChange}
                  options={typesList.map((type) => type.replace("_", " "))}
                  renderInput={(params) => (
                    <TextField {...params} variant="standard" />
                  )}
                />
              </Grid>
            </Grid>
          </div>
        </Popover>
      </div>
      <ProblemTable
        problems={problems}
        difficulty={difficulty}
        types={types}
        websites={websites}
        search={search}
      />
      {props.user &&
      props.user.signInUserSession.idToken.payload["cognito:groups"].includes(
        "unccacm_admin"
      ) ? (
        <Link
          to={"/problems/new"}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Button
            variant="contained"
            color="primary"
            startIcon={<LibraryAdd />}
          >
            Add Problem
          </Button>
        </Link>
      ) : null}
    </div>
  );
};

export default Problems;
