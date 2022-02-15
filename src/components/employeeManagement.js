import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { makeStyles } from "@mui/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "pink",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary
}));
const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    height: "100vh"
    // border: 0,
    // borderRadius: 3,
    // boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    // color: "white",
    // height: 48,
    // padding: "0 30px"
  }
});

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       position: "fixed",
//       height: "100vh",
//       top: 0,
//       right: 0,
//       overflowY: "auto",
//       width: `calc(100vw - ${theme.spacing(30)}px)`, // - Navigation drawer
//       [theme.breakpoints.down("md")]: {
//         width: "100vw"
//       },
//       backgroundColor: theme.palette.background.default,
//       display: "flex",
//       alignItems: "center",
//       flexDirection: "column",
//       zIndex: 1150,
//       border: "4px solid red"
//     }
//   })
// );

export default function EmployeeManagementPage() {
  const classes = useStyles();
  return (
    // <Button className={classes.root}>Hook</Button>
    <Container max-width="xl">
      <Box sx={{ flexGrow: 1 }}>
        {/* <Button className={classes.root}>Hook</Button> */}
        <Grid container spacing={1}>
          <Grid item xs={1} lg={1}>
            <Item>xs=2</Item>
          </Grid>
          <Grid item xs={11} lg={11}>
            <Grid container spacing={0.5} className={classes.root}>
              <Grid item xs={12}>
                <Item>xs=12</Item>
              </Grid>
              <Grid item xs={12}>
                <Item>xs=12</Item>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
