import React, { useState, useEffect } from "react";

import {
  Typography,
  Link,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  CircularProgress,
  TableCell,
  TablePagination,
} from "@material-ui/core";

const ProblemTable = (props: any) => {
  // Pagination state
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Filter problems
  const [currentProblems, setCurrentProblems] = useState([[]]);

  useEffect(() => {
    setPage(0);

    let problems = props.problems;
    const min = Math.min(props.difficulty[0], props.difficulty[1]);
    const max = Math.max(props.difficulty[0], props.difficulty[1]);

    problems = problems.filter(
      (problem: any) => problem.difficulty >= min && problem.difficulty <= max
    );

    problems = problems.filter((problem: any) =>
      props.types.every((t: any) => problem.tags.includes(t))
    );

    problems =
      props.websites.length > 0
        ? problems.filter((problem: any) =>
            props.websites.includes(problem.website)
          )
        : problems;

    problems =
      props.search.length > 0
        ? problems.filter((problem: any) =>
            problem.name.toLowerCase().includes(props.search.toLowerCase())
          )
        : problems;

    setCurrentProblems(problems);
  }, [
    props.problems,
    props.difficulty,
    props.types,
    props.websites,
    props.search,
  ]);

  if (props.problems.length === 0)
    return (
      <div style={{ margin: "40px 0px 50px 0px" }}>
        <CircularProgress />
      </div>
    );

  return (
    <div>
      <TableContainer style={{ marginBottom: "15px", overflowX: "hidden" }}>
        <Table aria-label="Problem table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Website</TableCell>
              <TableCell align="right">Types</TableCell>
              <TableCell align="right">Difficulty</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentProblems
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((problem: any) => (
                <TableRow key={problem.id}>
                  <TableCell component="th" scope="row">
                    <Link href={`/problems/${problem.id}`}>
                      <Typography variant="body2">{problem.name}</Typography>
                    </Link>
                  </TableCell>
                  <TableCell align="right">
                    <Link
                      href={problem.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Typography variant="body2" noWrap>
                        {problem.website}
                      </Typography>
                    </Link>
                  </TableCell>
                  <TableCell align="right">
                    <Typography variant="body2">
                      {problem.tags
                        ? problem.tags
                            .map((tag: any) => tag.replace("_", " "))
                            .join(", ")
                        : ""}
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography variant="body2">
                      {problem.difficulty}
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={currentProblems.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default ProblemTable;
