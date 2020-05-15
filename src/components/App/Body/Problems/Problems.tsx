import React, { useState } from "react";

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
import { Search, FilterList } from "@material-ui/icons";

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

const Problems = () => {
  const classes = useStyles();

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
    setTypes(newValues as String[]);
  };

  // Filter by website, difficulty, category
  const websitesList = ["Leetcode", "Kattis", "Hackerrank"];

  const typesList = ["Dynamic Programming", "String", "Array", "Recursion"];

  // Reset filters
  const resetFilters = () => {
    setDifficulty([1, 10]);
    setWebsites([]);
    setTypes([]);
  };

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
                  options={typesList}
                  renderInput={(params) => (
                    <TextField {...params} variant="standard" />
                  )}
                />
              </Grid>
            </Grid>
          </div>
        </Popover>
      </div>
    </div>
  );
};

export default Problems;
