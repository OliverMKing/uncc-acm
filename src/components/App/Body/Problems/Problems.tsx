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
      width: "500px",
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

  // Filter by website, difficulty, category
  const websites = [
    { name: "Leetcode" },
    { name: "Kattis" },
    { name: "Hackerrank" },
  ];

  const types = [
    { name: "Dynamic Programming" },
    { name: "String" },
    { name: "Array" },
    { name: "Recursion" },
  ];

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
              <Grid item xs={6}>
                <Typography variant="h6">Filters</Typography>
              </Grid>
              <Grid item xs={6}>
                <Button color="primary">Reset</Button>
              </Grid>
              <Grid item xs={3}>
                <Typography
                  variant="body1"
                  style={{ paddingBottom: "20px", paddingTop: "30px" }}
                >
                  Website
                </Typography>
              </Grid>
              <Grid item xs={9}>
                <Autocomplete
                  id="Website"
                  options={websites}
                  getOptionLabel={(option) => option.name}
                  style={{ width: 250 }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Grid>
              <Grid item xs={3}>
                <Typography variant="body1" style={{ paddingBottom: "20px" }}>
                  Difficulty
                </Typography>
              </Grid>
              <Grid item xs={9}>
                <Slider
                  value={[1, 10]}
                  onChange={() => {}}
                  step={1}
                  marks
                  min={1}
                  max={10}
                  valueLabelDisplay="auto"
                  aria-labelledby="range-slider"
                />
              </Grid>
              <Grid item xs={3}>
                <Typography variant="body1">Type</Typography>
              </Grid>
              <Grid item xs={9}>
                <Autocomplete
                  multiple
                  filterSelectedOptions
                  id="Type"
                  options={types}
                  getOptionLabel={(option) => option.name}
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
