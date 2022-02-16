import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@mui/material/Box";
import Drawer from "@material-ui/core/Drawer";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
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

function DashboardPage(props) {
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
        <Grid container spacing={4}>
          {/* <Grid item xs={12} lg={12} xl={12}>
          <Grid container spacing={2}> */}
          {/* first block */}
          <Grid item xs={4}>
            <Grid container spacing={2}>
              <Grid item xs={9}>
                <Typography variant="body1" component="div" align="left">
                  Your TimeOff Balance
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="body1" component="div" align="left">
                  <Link href="#" underline="none">
                    Request a Leave
                  </Link>
                </Typography>
              </Grid>
            </Grid>
            <Box mt={2}></Box>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormControl sx={{ m: 0, width: "100%" }} variant="outlined">
                  <InputLabel
                    htmlFor="outlined-adornment-password"
                    // style={{ fontSize: 12 }}
                  >
                    Balance as of date
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={"text"}
                    placeholder={""}
                    value={""}
                    style={{ fontSize: 10 }}
                    // onChange={}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton aria-label="" edge="end">
                          <EventIcon />
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Box mt={2}></Box>
            <Grid container spacing={2} style={{ position: "relative" }}>
              <Grid item xs={6}>
                <Card sx={{}}>
                  <CardContent>
                    <Grid container spacing={2}>
                      <Grid item xs={2}>
                        <FlightTakeoffIcon />
                      </Grid>
                      <Grid item xs={10}>
                        <Box component="span">Sick Day off</Box>
                        <Typography
                          sx={{ fontSize: 14, fontWeight: "bold" }}
                          color="text.secondary"
                        >
                          15:00/
                          <Box component="span">15:00</Box>
                        </Typography>
                        <Box component="span">Days</Box>
                      </Grid>
                    </Grid>
                    <Box
                      sx={{
                        position: "absolute",
                        left: 0
                      }}
                    >
                      <Fab size="small" color="inherit" aria-label="add">
                        <ChevronLeftOutlinedIcon fontSize="small" />
                      </Fab>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6}>
                <Card sx={{}}>
                  <CardContent>
                    <Grid container spacing={2}>
                      <Grid item xs={2}>
                        <FlightTakeoffIcon />
                      </Grid>
                      <Grid item xs={10}>
                        <Box component="span">Annual vacations</Box>
                        <Typography
                          sx={{ fontSize: 14, fontWeight: "bold" }}
                          color="text.secondary"
                        >
                          15:00/
                          <Box component="span">15:00</Box>
                        </Typography>
                        <Box component="span">Days</Box>
                      </Grid>
                    </Grid>
                    <Box
                      sx={{
                        position: "absolute",
                        right: -17
                      }}
                    >
                      <Fab size="small" color="inherit" aria-label="add">
                        <ChevronRightOutlinedIcon fontSize="small" />
                      </Fab>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            <Box mt={2}></Box>
            <Grid container>
              <Grid item xs={12}>
                <Typography variant="body1" component="h6" align="left">
                  Quick Action
                </Typography>
              </Grid>
              <Box pb={3}></Box>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Card sx={{}}>
                    <CardContent>
                      <Grid container spacing={2}>
                        <Grid item xs={2}>
                          <EventIcon />
                        </Grid>
                        <Grid item xs={10}>
                          <Typography color="text.secondary" gutterBottom>
                            My Approval
                          </Typography>
                          <Link href="#" underline="none">
                            View
                          </Link>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={6}>
                  <Card sx={{}}>
                    <CardContent>
                      <Grid container spacing={0}>
                        <Grid item xs={2}>
                          <EventIcon />
                        </Grid>
                        <Grid item xs={10}>
                          <Typography color="text.secondary" gutterBottom>
                            My Approval
                          </Typography>
                          <Link href="#" underline="none">
                            View
                          </Link>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
            <Box mt={2}></Box>
            <Grid container>
              <Grid item xs={10}>
                <Typography variant="body1" component="h6" align="left">
                  Todays Clocking
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="body1" component="div" align="right">
                  <Link href="#" underline="none">
                    View History
                  </Link>
                </Typography>
              </Grid>
              <Box pb={3}></Box>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Card sx={{}}>
                    <CardContent>
                      <Typography variant="body1" component="h6" align="left">
                        Clocking
                      </Typography>
                      <Stack direction="row" spacing={1}>
                        <Chip
                          label="Clock-In"
                          variant="outlined"
                          component="a"
                          href="#"
                          clickable
                          style={{ fontSize: 10 }}
                        />
                        <Chip
                          label="Clock-Out"
                          component="a"
                          href="#"
                          variant="outlined"
                          disabled
                          style={{ fontSize: 10 }}
                        />
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
            <Box mt={2}></Box>
            <Grid container spacing={1}>
              <Grid item xs={8}>
                <Typography variant="body1" component="div" align="left">
                  Announcements
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="body1" component="div" align="right">
                  <Link href="#" underline="none">
                    + Add
                  </Link>
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="body1" component="div" align="right">
                  <Link href="#" underline="none">
                    View All
                  </Link>
                </Typography>
              </Grid>
            </Grid>
            <Box mt={2}></Box>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Typography variant="body1" component="h6" align="center">
                  No Announcements
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          {/* second block */}
          <Grid item xs={4}>
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
              {/* <Grid item xs={4}></Grid> */}
            </Grid>
            <Box mt={2}></Box>
            <Paper sx={{ padding: "30px 0" }}>
              <Typography align="center">No one's Off!</Typography>
            </Paper>
          </Grid>
          {/* third block */}
          <Grid item xs={4}>
            <Grid container spacing={2}>
              {/* <Grid item xs={1}>
                <Typography variant="body1" component="h6">
                </Typography>
              </Grid> */}
              <Grid item xs={8}>
                <Typography variant="body1" component="h6">
                  Events
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="body1" component="div" align="right">
                  <Link href="#" underline="none">
                    + Add
                  </Link>
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="body1" component="div" align="right">
                  <Link href="#" underline="none">
                    View All
                  </Link>
                </Typography>
              </Grid>
            </Grid>
            <Box mt={2} p={2} sx={{ maxWidth: 400, margin: "0 auto" }}>
              <DatePicker />
            </Box>
            <Box mt={2}></Box>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Typography variant="body1" component="h6">
                  Today
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1" component="h6" align="left">
                  No upcoming event
                </Typography>
              </Grid>
            </Grid>
            <Paper />
          </Grid>

          {/* </Grid>
          </Grid> */}
        </Grid>
      </Box>
    </div>
  );
}
export default withStyles(styles)(DashboardPage);
