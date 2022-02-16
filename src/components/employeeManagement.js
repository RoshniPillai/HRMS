import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@mui/material/Box";
import Drawer from "@material-ui/core/Drawer";
import Paper from "@mui/material/Paper";
import Button from "@material-ui/core/Button";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import { Select, MenuItem } from "@material-ui/core";
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
import InputLabel from "@mui/material/InputLabel";
import DatePicker from "./datePicker";
import Fab from "@mui/material/Fab";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import empTable from "./component/empTable";
import PrimarySearchAppBar from "./appBar";
import NavItems from "./NavItems";

const styles = (theme) => ({
  // The main flex container for the app's layout. Its min-height
  // is set to `100vh` so it always fill the height of the screen.
  root: {
    display: "flex",
    minHeight: "100vh",
    zIndex: 1,
    position: "relative",
    overflow: "hidden",
    backgroundColor: theme.palette.background.default
  },
  appBar: {
    // For full-height drawer
    //  maxWidth: `calc(100% - ${theme.layout.drawerWidth}px)`
    maxWidth: `calc(100% - 100px)`
  },
  toolbarActions: {
    marginLeft: "auto"
  },
  drawer: {
    // width: theme.layout.drawerWidth
    width: 100
  },
  drawerPaper: {
    width: "inherit"
  }
});

function EmployeeManagementPage(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <PrimarySearchAppBar />
      <Drawer
        variant="permanent"
        className={classes.drawer}
        classes={{ paper: classes.drawerPaper }}
      >
        <NavItems />
        {/* <main className={classes.appContent}>drawer content</main> */}
      </Drawer>
      <Box
        p={3}
        sx={{
          flexGrow: 1,
          paddingTop: "74px",
          backgroundColor: "#F2F3F5"
        }}
        classes={classes.main}
      >
        <div
          role="presentation"
          //onClick={}
        >
          <Breadcrumbs aria-label="breadcrumb">
            <Typography variant="body2">
              {" "}
              <Link underline="hover" color="inherit" href="/">
                Employee
              </Link>
            </Typography>

            <Typography variant="body2">EmployeeManagement</Typography>
          </Breadcrumbs>
        </div>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={9}>
                <Typography variant="h6" component="h6">
                  Employee Management
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Box display="flex" justifyContent="flex-end">
                  <Button variant="outlined" color="primary" size="small">
                    Add New Employee
                  </Button>
                  {/* </Box>
              </Grid> */}
                  {/* <Grid item xs={1}>
                <Box display="flex" justifyContent="flex-end"> */}
                  <Button
                    variant="outlined"
                    color="primary"
                    size="small"
                    style={{ marginLeft: 10, padding: 0 }}
                  >
                    ...
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            show filters
          </Grid>
          <Grid item xs={12}>
            <Box display="flex" justifyContent="flex-end">
              search box
            </Box>
          </Grid>
          <Grid item xs={12}>
            <empTable />
          </Grid>
          {/* <Grid item xs={4}>
            <Grid container>
              <Grid item xs={9}>
                <Typography variant="body1" component="h6">
                  Who's Off
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="body1" component="h6" align="right">
                  0 employees
                </Typography>
              </Grid>
            </Grid>
            <Box mt={2}></Box>
            <Paper sx={{ padding: "30px 0" }}>
              <Typography align="center">No one's Off!</Typography>
            </Paper>
          </Grid> */}
        </Grid>
      </Box>
    </div>
  );
}
export default withStyles(styles)(EmployeeManagementPage);
