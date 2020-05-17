import React, { useState } from "react";

import {
  Typography,
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";

import { API, graphqlOperation } from "aws-amplify";
import { createProblem } from "../../../../../graphql/mutations";

const NewProblem = () => {
  const [name, setName] = useState<String>("");
  const [link, setLink] = useState<String>("");
  const [website, setWebsite] = useState<String>("");
  const [types, setTypes] = useState<String[]>([]);
  const [difficulty, setDifficulty] = useState<String>("");

  const handleNameChange = (event: any): void => {
    setName(event.target.value);
  };

  const handleLinkChange = (event: any): void => {
    setLink(event.target.value);
  };

  const handleWebsiteChange = (event: any): void => {
    setWebsite(event.target.value as String);
  };

  const handleTypesChange = (
    event: any,
    newValues: String | String[]
  ): void => {
    setTypes(newValues as String[]);
  };

  const handleDifficultyChange = (event: any): void => {
    setDifficulty(event.target.value);
  };

  const typesList = ["Dynamic Programming", "String", "Array", "Recursion"];

  // Upload to server
  async function uploadProblem(event: any) {
    event.preventDefault();
    try {
      const request = {
        name: name,
        link: link,
        tags: types,
        website: website,
        difficulty: Number(difficulty),
      };
      console.log(request);
      await API.graphql(graphqlOperation(createProblem, { input: request }));
      console.log("Created problem");
    } catch (err) {
      console.log("error creating Problem:", err);
    }
  }

  return (
    <div>
      <Typography variant="h3" component="h3" align="left" gutterBottom>
        New Problem
      </Typography>
      <form>
        <TextField
          label="Problem name"
          required
          value={name}
          onChange={handleNameChange}
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Problem link"
          required
          value={link}
          onChange={handleLinkChange}
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <FormControl variant="outlined" required fullWidth margin="normal">
          <InputLabel>Website</InputLabel>
          <Select
            value={website}
            onChange={handleWebsiteChange}
            label="Website"
          >
            <MenuItem value={"Leetcode"}>Leetcode</MenuItem>
            <MenuItem value={"Kattis"}>Kattis</MenuItem>
            <MenuItem value={"HackerRank"}>HackerRank</MenuItem>
          </Select>
        </FormControl>
        <Autocomplete
          multiple
          filterSelectedOptions
          onChange={handleTypesChange}
          options={typesList}
          renderInput={(params) => (
            <TextField
              {...params}
              fullWidth
              value={types}
              margin="normal"
              label="Problem types"
              variant="outlined"
            />
          )}
        />
        <FormControl variant="outlined" required fullWidth margin="normal">
          <InputLabel>Problem difficulty</InputLabel>
          <Select
            value={difficulty}
            onChange={handleDifficultyChange}
            label="Problem difficulty"
          >
            <MenuItem value={1}>1 (Easiest)</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={6}>6</MenuItem>
            <MenuItem value={7}>7</MenuItem>
            <MenuItem value={8}>8</MenuItem>
            <MenuItem value={9}>9</MenuItem>
            <MenuItem value={10}>10 (Hardest)</MenuItem>
          </Select>
        </FormControl>
        <Button
          style={{ marginTop: "15px" }}
          size="large"
          fullWidth
          variant="contained"
          type="submit"
          color="primary"
          onClick={uploadProblem}
        >
          Create Problem
        </Button>
      </form>
    </div>
  );
};

export default NewProblem;
