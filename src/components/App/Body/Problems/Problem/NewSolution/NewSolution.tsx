import React from "react";

import {
  Typography,
  FormControl,
  Button,
  InputLabel,
  Select,
  MenuItem,
  TextField,
} from "@material-ui/core";

const NewSolution = (props: any) => {
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
        <FormControl variant="outlined" fullWidth>
          <InputLabel>Programming Language</InputLabel>
          <Select style={{ textAlign: "left" }} label="Programming Language">
            <MenuItem value={"C#"}>C#</MenuItem>
            <MenuItem value={"C"}>C</MenuItem>
            <MenuItem value={"C++"}>C++</MenuItem>
            <MenuItem value={"Java"}>Java</MenuItem>
            <MenuItem value={"JavaScript"}>JavaScript</MenuItem>
            <MenuItem value={"Go"}>Go</MenuItem>
            <MenuItem value={"Kotlin"}>Kotlin</MenuItem>
            <MenuItem value={"Ruby"}>Ruby</MenuItem>
            <MenuItem value={"Haskell"}>Haskell</MenuItem>
            <MenuItem value={"Rust"}>Rust</MenuItem>
            <MenuItem value={"Swift"}>Swift</MenuItem>
            <MenuItem value={"Scala"}>Scala</MenuItem>
            <MenuItem value={"PHP"}>PHP</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="Code"
          required
          variant="outlined"
          fullWidth
          margin="normal"
          rows={10}
          multiline
        />
        <Button
          style={{ marginTop: "15px" }}
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
