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
  makeStyles,
} from "@material-ui/core";

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
            <Grid alignItems="center" container spacing={5}>
              <Grid item xs={4}>
                <Typography variant="h6">Filters</Typography>
              </Grid>
              <Grid item xs={8}>
                <Button color="primary">Reset</Button>
              </Grid>
            </Grid>
          </div>
        </Popover>
      </div>
    </div>
  );
};

export default Problems;
