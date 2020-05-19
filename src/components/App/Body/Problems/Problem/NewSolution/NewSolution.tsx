import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import {
  Typography,
  FormControl,
  Button,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  FormHelperText,
} from "@material-ui/core";

import { API, graphqlOperation } from "aws-amplify";
import { createSolution } from "../../../../../../graphql/mutations";

const NewSolution = (props: any) => {
  const history = useHistory();

  // Form state
  const [language, setLanguage] = useState<String>("");
  const [code, setCode] = useState<String>("");

  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleLanguageChange = (event: any): void => {
    setLanguage(event.target.value);
  };

  const handleCodeChange = (event: any): void => {
    setCode(event.target.value);
  };

  // Upload to server
  async function uploadSolution(event: any) {
    event.preventDefault();

    // Make sure there are no null values
    if (language === "" || code === "") {
      setSubmitted(true);
      return;
    }

    try {
      const request = {
        language: language,
        code: code,
        problemID: props.id,
        owner: props.user.attributes.email,
      };
      await API.graphql(graphqlOperation(createSolution, { input: request }));
      history.go(0);
    } catch (err) {
      console.log("Error creating Solution: ", err);
    }
  }

  return (
    <div>
      <Typography variant="h4" component="h4" align="left" gutterBottom>
        New Solution
      </Typography>
      <Typography variant="body1" align="left" paragraph gutterBottom>
        Please make sure your solution works before submitting. Copy and paste a
        solution that worked from the testing website.
      </Typography>
      <form>
        <FormControl
          variant="outlined"
          fullWidth
          required
          error={submitted && language === ""}
        >
          <InputLabel>Programming Language</InputLabel>
          <Select
            style={{ textAlign: "left" }}
            label="Programming Language"
            value={language}
            onChange={handleLanguageChange}
            required
          >
            <MenuItem value={"C#"}>C#</MenuItem>
            <MenuItem value={"C"}>C</MenuItem>
            <MenuItem value={"C++"}>C++</MenuItem>
            <MenuItem value={"Java"}>Java</MenuItem>
            <MenuItem value={"JavaScript"}>JavaScript</MenuItem>
            <MenuItem value={"Go"}>Go</MenuItem>
            <MenuItem value={"Kotlin"}>Kotlin</MenuItem>
            <MenuItem value={"Ruby"}>Ruby</MenuItem>
            <MenuItem value={"Python"}>Python</MenuItem>
            <MenuItem value={"Haskell"}>Haskell</MenuItem>
            <MenuItem value={"Rust"}>Rust</MenuItem>
            <MenuItem value={"Swift"}>Swift</MenuItem>
            <MenuItem value={"Scala"}>Scala</MenuItem>
            <MenuItem value={"PHP"}>PHP</MenuItem>
          </Select>
          <FormHelperText>
            {submitted && language === "" ? "Required" : ""}
          </FormHelperText>
        </FormControl>
        <TextField
          value={code}
          onChange={handleCodeChange}
          label="Code"
          required
          error={submitted && code === ""}
          helperText={submitted && code === "" ? "Required" : ""}
          variant="outlined"
          fullWidth
          margin="normal"
          rows={Math.max(5, code.split(/\r\n|\r|\n/).length)}
          multiline
        />
        <Button
          style={{ marginTop: "15px" }}
          onClick={uploadSolution}
          size="large"
          fullWidth
          variant="contained"
          type="submit"
          color="primary"
        >
          Add Solution
        </Button>
      </form>
    </div>
  );
};

export default NewSolution;
