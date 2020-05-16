import React from "react";

import { Typography, Button, TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";

const NewProblem = () => {
  const websitesList = ["Leetcode", "Kattis", "HackerRank"];
  const typesList = ["Dynamic Programming", "String", "Array", "Recursion"];
  const difficultiesList = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

  return (
    <div>
      <Typography variant="h3" component="h3" align="left" gutterBottom>
        New Problem
      </Typography>
      <form>
        <TextField
          label="Problem Name"
          required
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Problem Link"
          required
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <Autocomplete
          options={websitesList}
          renderInput={(params) => (
            <TextField
              {...params}
              fullWidth
              required
              margin="normal"
              label="Website"
              variant="outlined"
            />
          )}
        />
        <Autocomplete
          multiple
          filterSelectedOptions
          options={typesList}
          renderInput={(params) => (
            <TextField
              {...params}
              required
              fullWidth
              margin="normal"
              label="Problem type"
              variant="outlined"
            />
          )}
        />
        <Autocomplete
          filterSelectedOptions
          options={difficultiesList}
          renderInput={(params) => (
            <TextField
              {...params}
              required
              fullWidth
              margin="normal"
              label="Problem difficulty"
              variant="outlined"
            />
          )}
        />
        <Button
          style={{ marginTop: "15px" }}
          size="large"
          fullWidth
          variant="contained"
          type="submit"
          color="primary"
        >
          Create Problem
        </Button>
      </form>
    </div>
  );
};

export default NewProblem;
