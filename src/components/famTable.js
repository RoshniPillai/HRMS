// import { DataGrid } from "@material-ui/data-grid";

// export default function FamTable() {
//   return (
//     <div style={{ height: 300, width: "100%" }}>
//       <DataGrid
//         rows={rows}
//         columns={columns}
//         pageSize={5}
//         //checkboxSelection
//         disableSelectionOnClick
//       />
//     </div>
//   );
// }

// const columns = [
//  // { field: "id"},
//   { field: "relation", headerName: "Relation", flex: 1 },
//   { field: "name", headerName: "Name", flex: 1 },
//   { field: "actions", headerName: "Actions", flex: 1 },
//   ];

// const rows = [
//   {
//     id: 1,
//     relation: "Spouse",
//     name: "Jenny",
//     actions: "abc",

//   },
//   ];
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import Link from "@mui/material/Link";
import TablePagination from "@mui/material/TablePagination";

const useStyles = makeStyles({
  table: {
    minWidth: 640
  }
});

function createData(relation, name, actions) {
  return { relation, name, actions };
}

const rows = [createData("spouse", "Jenny", "")];

export default function FamTable() {
  const classes = useStyles();

  return (
    <Card>
      <TableContainer component={Paper}>
        <Box sx={{ p: 2 }}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell style={{}}>Relation</TableCell>
                <TableCell style={{}} align="left">
                  Name
                </TableCell>
                <TableCell style={{}} align="center">
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow style={{}} key={row.relation}>
                  <TableCell align="left" component="th" scope="row">
                    <Avatar alt="Avatar" src="" size="small">
                      J
                    </Avatar>
                    {row.relation}
                  </TableCell>
                  <TableCell align="left">{row.name}</TableCell>
                  <TableCell align="center">
                    <Link href="">Edit</Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </TableContainer>
      {/* <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={1}
        rowsPerPage={5}
        page={1}
        // onPageChange={handleChangePage}
       // onRowsPerPageChange={handleChangeRowsPerPage}
      /> */}
    </Card>
  );
}
