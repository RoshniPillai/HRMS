import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@mui/material/Box";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import SearchIcon from "@mui/icons-material/Search";
import EmpTable from "./empTable";
import PrimarySearchAppBar from "./appBar";
import NavItems from "./NavItems";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import GetAppIcon from "@material-ui/icons/GetApp";

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
            <Box
              m={2}
              display="flex"
              flexDirection="row"
              alignItems="end"
              justifyContent="end"
            >
              <FormControl sx={{ m: 0 }} variant="outlined">
                <InputLabel
                  htmlFor="outlined-adornment-password"
                  //style={{ fontSize: 14 }}
                >
                  Search
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={"text"}
                  placeholder={""}
                  value={""}
                  //style={{ fontSize: 10 }}
                  // onChange={}
                  endAdornment={
                    <InputAdornment position="start">
                      <IconButton aria-label="" edge="end">
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
              <Typography variant="body1" component="" style={{ padding: 10 }}>
                Show
              </Typography>
              <FormControl>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={10}
                  // onChange={handleChange}
                >
                  <MenuItem value={10}>10</MenuItem>
                  <MenuItem value={20}>20</MenuItem>
                  <MenuItem value={30}>30</MenuItem>
                </Select>
              </FormControl>
              <Typography variant="body1" component="" style={{ padding: 10 }}>
                entries
              </Typography>
              <IconButton aria-label="delete">
                <GetAppIcon fontSize="medium" />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box
              sx={{
                flexGrow: 1,
                paddingTop: "74px",
                backgroundColor: "#F2F3F5"
              }}
            >
              <EmpTable />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
export default withStyles(styles)(EmployeeManagementPage);
