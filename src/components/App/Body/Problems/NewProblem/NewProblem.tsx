import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";

import validUrl from "valid-url";

import {
  Typography,
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormHelperText,
} from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";

import { API, graphqlOperation } from "aws-amplify";
import { createProblem } from "../../../../../graphql/mutations";

const NewProblem = () => {
  const history = useHistory();

  // Form state
  const [name, setName] = useState<string>("");
  const [link, setLink] = useState<string>("");
  const [website, setWebsite] = useState<string>("");
  const [types, setTypes] = useState<string[]>([]);
  const [difficulty, setDifficulty] = useState<string>("");

  // Checks if form has been submitted for errors
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleNameChange = (event: any): void => {
    setName(event.target.value);
  };

  const handleLinkChange = (event: any): void => {
    setLink(event.target.value);
  };

  const handleWebsiteChange = (event: any): void => {
    setWebsite(event.target.value as string);
  };

  const handleTypesChange = (
    event: any,
    newValues: String | String[]
  ): void => {
    setTypes(newValues as string[]);
  };

  const handleDifficultyChange = (event: any): void => {
    setDifficulty(event.target.value);
  };

  const typesList = ["Dynamic Programming", "String", "Array", "Recursion"];

  // Upload to server
  async function uploadProblem(event: any) {
    event.preventDefault();

    // Make sure there are no null values
    if (
      name === "" ||
      link === "" ||
      website === "" ||
      types.length === 0 ||
      difficulty === "" ||
      !validUrl.isWebUri(link)
    ) {
      setSubmitted(true);
      return;
    }

    try {
      const request = {
        name: name,
        link: link,
        tags: types,
        website: website,
        difficulty: Number(difficulty),
      };
      await API.graphql(graphqlOperation(createProblem, { input: request }));
      history.push("/problems");
    } catch (err) {
      history.push("/problems");
      console.log("Error creating Problem: ", err);
    }
  }

  return (
    <div>
      <Helmet>
        <title>UNCC ACM - New Problem</title>
      </Helmet>

      <Typography variant="h3" component="h3" align="left" gutterBottom>
        New Problem
      </Typography>
      <form>
        <TextField
          label="Problem name"
          error={submitted && name === ""}
          required
          value={name}
          onChange={handleNameChange}
          variant="outlined"
          fullWidth
          margin="normal"
          helperText={submitted && name === "" ? "Required" : ""}
        />
        <TextField
          label="Problem link"
          required
          error={submitted && (link === "" || !validUrl.isWebUri(link))}
          value={link}
          onChange={handleLinkChange}
          variant="outlined"
          fullWidth
          margin="normal"
          helperText={
            submitted && link === ""
              ? "Required"
              : submitted && !validUrl.isWebUri(link)
              ? "Must be URI (include http or https)"
              : ""
          }
        />
        <FormControl
          variant="outlined"
          required
          fullWidth
          margin="normal"
          error={submitted && website === ""}
        >
          <InputLabel>Website</InputLabel>
          <Select
            style={{ textAlign: "left" }}
            value={website}
            onChange={handleWebsiteChange}
            label="Website"
          >
            <MenuItem value={"Leetcode"}>Leetcode</MenuItem>
            <MenuItem value={"Kattis"}>Kattis</MenuItem>
            <MenuItem value={"HackerRank"}>HackerRank</MenuItem>
          </Select>
          <FormHelperText>
            {submitted && difficulty === "" ? "Required" : ""}
          </FormHelperText>
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
              required
              error={submitted && types.length === 0}
              value={types}
              margin="normal"
              label="Problem types"
              variant="outlined"
              helperText={submitted && types.length === 0 ? "Required" : ""}
            />
          )}
        />
        <FormControl
          variant="outlined"
          required
          fullWidth
          margin="normal"
          error={submitted && difficulty === ""}
        >
          <InputLabel>Problem difficulty</InputLabel>
          <Select
            value={difficulty}
            style={{ textAlign: "left" }}
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
          <FormHelperText>
            {submitted && difficulty === "" ? "Required" : ""}
          </FormHelperText>
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
