import React, { useState } from "react";

import { Typography, Button, TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";

const NewProblem = () => {
  const [name, setName] = useState<String>("");
  const [link, setLink] = useState<String>("");
  const [website, setWebsite] = useState<String>("");
  const [types, setTypes] = useState<String[]>([]);
  const [difficulty, setDifficulty] = useState<Number>();

  const handleNameChange = (event: any): void => {
    setName(event.target.value);
  };

  const handleLinkChange = (event: any): void => {
    setLink(event.target.value);
  };

  const handleWebsiteChange = (event: any): void => {
    setWebsite(event.target.value);
  };

  const handleTypesChange = (event: any): void => {
    setTypes(event.target.value as String[]);
  };

  const handleDifficultyChange = (event: any): void => {
    setDifficulty(Number(event.target.value) as Number);
  };

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
          value={name}
          onChange={handleNameChange}
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Problem Link"
          required
          value={link}
          onChange={handleLinkChange}
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
              value={website}
              onChange={handleWebsiteChange}
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
              value={types}
              onChange={handleTypesChange}
              margin="normal"
              label="Problem types"
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
              value={difficulty}
              onChange={handleDifficultyChange}
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
