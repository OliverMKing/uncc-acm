import React from "react";

import {
  Typography,
  Link,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TablePagination,
} from "@material-ui/core";

const ProblemTable = (props: any) => {
  // Pagination state
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

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
            {props.problems
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((problem: any) => (
                <TableRow key={problem.id}>
                  <TableCell component="th" scope="row">
                    <Typography variant="body2">{problem.name}</Typography>
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
                    <Typography noWrap variant="body2">
                      {problem.tags.join(", ")}
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
        count={props.problems.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default ProblemTable;
