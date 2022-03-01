import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@mui/material/Box";
import Drawer from "@material-ui/core/Drawer";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import Divider from "@mui/material/Divider";

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

function EmployeeDirectoryPage(props) {
  const { classes } = props;
  return (
    // <div className={classes.root}>
    //   <PrimarySearchAppBar />
    //   <Drawer
    //     variant="permanent"
    //     className={classes.drawer}
    //     classes={{ paper: classes.drawerPaper }}
    //   >
    //     <NavItems />
    //    </Drawer>
    // <Box
    //   p={3}
    //   sx={{
    //     flexGrow: 1,
    //     paddingTop: "74px",
    //     backgroundColor: "#F2F3F5"
    //   }}
    //   classes={classes.main}
    // >
    <>
      <Box p={1} sx={{ bgcolor: "#FFFFFF" }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography
              variant="body"
              gutterBottom
              component="div"
              align="left"
            >
              Employees Directory
            </Typography>
            <Divider />
          </Grid>
          <Grid item xs={4}>
            <Typography
              variant="body"
              component="div"
              align="right"
              style={{ paddingTop: "10px" }}
            >
              J
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography
              variant="body"
              component="div"
              style={{ paddingTop: "10px" }}
            >
              All
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <FormControl sx={{ m: 0 }} variant="outlined">
              <InputLabel
                htmlFor="outlined-adornment-password"
                style={{ fontSize: 14 }}
              >
                Search
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={"text"}
                placeholder={""}
                value={""}
                style={{ fontSize: 10, minWidth: 200 }}
                // onChange={}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton aria-label="" edge="end">
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
          </Grid>
        </Grid>
      </Box>
      <Box mt={4} ml={2}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Card sx={{ minWidth: 250, textAlign: "center" }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                ></Typography>
                <PersonIcon fontSize="large" />
                <Typography sx={{ mb: 0 }} color="text.secondary">
                  Javed Khan
                </Typography>
                <Typography variant="caption" sx={{ fontSize: 10 }}>
                  HR
                  <br />
                  {/* <MailIcon size="small"/> */}
                  Javed@i-see.io
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card sx={{ minWidth: 250, textAlign: "center" }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                ></Typography>
                <PersonIcon fontSize="large" />
                <Typography sx={{ mb: 0 }} color="text.secondary">
                  Jenny Tonby
                </Typography>
                <Typography variant="caption" sx={{ fontSize: 10 }}>
                  HR
                  <br />
                  Jenny@i-see.io
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card sx={{ minWidth: 250, textAlign: "center" }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                ></Typography>
                <PersonIcon fontSize="large" />
                <Typography sx={{ mb: 0 }} color="text.secondary">
                  Maria
                </Typography>
                <Typography variant="caption" sx={{ fontSize: 10 }}>
                  HR
                  <br />
                  {/* <MailIcon size="small"/> */}
                  Maria@i-see.io
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card sx={{ minWidth: 250, textAlign: "center" }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                ></Typography>
                <PersonIcon fontSize="large" />
                <Typography sx={{ mb: 0 }} color="text.secondary">
                  John J
                </Typography>
                <Typography variant="caption" sx={{ fontSize: 10 }}>
                  HR
                  <br />
                  {/* <MailIcon size="small"/> */}
                  John@i-see.io
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card sx={{ minWidth: 250, textAlign: "center" }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                ></Typography>
                <PersonIcon fontSize="large" />
                <Typography sx={{ mb: 0 }} color="text.secondary">
                  Neil
                </Typography>
                <Typography variant="caption" sx={{ fontSize: 10 }}>
                  HR
                  <br />
                  {/* <MailIcon size="small"/> */}
                  Neil@i-see.io
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card sx={{ minWidth: 250, textAlign: "center" }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                ></Typography>
                <PersonIcon fontSize="large" />
                <Typography sx={{ mb: 0 }} color="text.secondary">
                  Jeff Alonso
                </Typography>
                <Typography variant="caption" sx={{ fontSize: 10 }}>
                  HR
                  <br />
                  {/* <MailIcon size="small"/> */}
                  JeffAlonso@i-see.io
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
    //</Box>
    // </div>
  );
}
export default withStyles(styles)(EmployeeDirectoryPage);
