import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { makeStyles } from "@mui/styles";

import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import NavigationBar from "./navBar";
import DrawerPage from "./drawer";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import EventIcon from "@mui/icons-material/Event";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import IconButton from "@mui/material/IconButton";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import DatePicker from "./datePicker";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import MenuDrawer from "./menuDrawer";

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
    // <Container max-width="xl">
    <Box sx={{ flexGrow: 1 }}>
      {/* <Button className={classes.root}>Hook</Button> */}
      <Grid container spacing={1}>
        <Grid item xs={1} lg={1}>
          xs=2
        </Grid>
        <Grid item xs={11} lg={11}>
          <Grid container spacing={0.5} className={classes.root}>
            <Grid item xs={12} lg={12}>
              <Grid
                container
                spacing={0.5}
                style={{ border: "50px solid" }}
              ></Grid>
            </Grid>
            {/* <Grid item xs={12} lg={12}>
               xs=12
            </Grid> */}
          </Grid>
        </Grid>
      </Grid>
    </Box>
    // </Container>
  );
}
