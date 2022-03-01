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
import List from "@material-ui/core/List";
import { styled, useTheme } from "@mui/material/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Divider from "@material-ui/core/Divider";
import DraftsIcon from "@material-ui/icons/Drafts";
import MailIcon from "@material-ui/icons/Mail";
import ReportIcon from "@material-ui/icons/Report";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import Button from "@material-ui/core/Button";
import EmployeeOverviewPage from "./employeeOverview";
import EmployeeDirectoryPage from "./employeeDirectory";

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
  },
  toolbarIe11: {
    display: "flex"
  },
  heading: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: `0 ${theme.spacing.unit * 3}px`,
    ...theme.mixins.toolbar
  }
});
const drawerWidth = 240;
const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
      marginLeft: 0
    })
  })
);
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end"
}));
function DashboardPage(props) {
  const { classes } = props;
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [showcomponent, setshowcomponent] = React.useState(0);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <div className={classes.root}>
      <PrimarySearchAppBar />
      <Drawer
        variant="permanent"
        className={classes.drawer}
        classes={{ paper: classes.drawerPaper }}
      >
        <>
          <div>
            <div className={classes.toolbarIe11}>
              <div className={classes.heading}>
                <Typography variant="title">
                  <img src="" alt="logo" width="50" />
                </Typography>
              </div>
            </div>
            <Divider />
            <List>
              <ListItem button>
                <ListItemIcon>
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={() => setshowcomponent(0)}
                    edge="end"
                    sx={{ ...open }}
                  >
                    <WidgetsOutlinedIcon />
                  </IconButton>
                </ListItemIcon>
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="end"
                    sx={{ ...open }}
                  >
                    <PeopleAltOutlinedIcon />
                  </IconButton>
                </ListItemIcon>
              </ListItem>
              <ListItem button>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  edge="end"
                  sx={{ ...open }}
                >
                  <MailIcon />
                </IconButton>
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    //onClick={handleDrawerOpen}
                    edge="end"
                    sx={{ ...open }}
                  >
                    <DraftsIcon />
                  </IconButton>
                </ListItemIcon>
              </ListItem>
            </List>
            <Divider />
            <List>
              <ListItem button>
                <ListItemIcon>
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    //onClick={handleDrawerOpen}
                    edge="end"
                    sx={{ ...open }}
                  >
                    <PeopleAltOutlinedIcon />
                  </IconButton>
                </ListItemIcon>
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    //onClick={handleDrawerOpen}
                    edge="end"
                    sx={{ ...open }}
                  >
                    <DraftsIcon />
                  </IconButton>
                </ListItemIcon>
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    // onClick={handleDrawerOpen}
                    edge="end"
                    sx={{ ...open }}
                  >
                    <ReportIcon />
                  </IconButton>
                </ListItemIcon>
              </ListItem>
            </List>
          </div>
          <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: drawerWidth,
                boxSizing: "border-box",
                position: "fixed",
                top: 0,
                left: 80
              }
            }}
            variant="persistent"
            anchor="left"
            open={open}
          >
            <DrawerHeader style={{ textAlign: "left" }}>
              <Box m={2}>
                {" "}
                <Typography variant="subtitle1">Employees</Typography>
              </Box>

              <IconButton onClick={handleDrawerClose}>
                {theme.direction === "ltr" ? (
                  <ChevronLeftIcon />
                ) : (
                  <ChevronRightIcon />
                )}
              </IconButton>
            </DrawerHeader>
            <Box m={2}>
              <Typography
                variant="caption"
                display="block"
                gutterBottom
                align="left"
              >
                Employees Affairs
              </Typography>
              <Typography
                variant="subtitle2"
                gutterBottom
                component="div"
                align="left"
              >
                <Button size="small" onClick={() => setshowcomponent(1)}>
                  Employees Directory
                </Button>
              </Typography>
              <Typography
                variant="subtitle2"
                gutterBottom
                // component="div"
                align="left"
                style={{ textTransform: "lowercase" }}
              >
                <Button size="small" onClick={() => setshowcomponent(2)}>
                  Employees Management
                </Button>
              </Typography>
              <Typography
                variant="subtitle2"
                gutterBottom
                component="div"
                align="left"
              >
                Mass Action
              </Typography>
            </Box>
            <Box m={2}>
              <Typography
                variant="caption"
                display="block"
                gutterBottom
                align="left"
              >
                Tasks
              </Typography>
              <Typography
                variant="subtitle2"
                gutterBottom
                component="div"
                align="left"
              >
                My Taks
              </Typography>
              <Typography
                variant="subtitle2"
                gutterBottom
                component="div"
                align="left"
              >
                Manage Tasks
              </Typography>
            </Box>
            <Box m={2}>
              <Typography
                variant="caption"
                display="block"
                gutterBottom
                align="left"
              >
                Disciplinary Actions
              </Typography>
              <Typography
                variant="subtitle2"
                gutterBottom
                component="div"
                align="left"
              >
                Manage Disciplinary Actions
              </Typography>
            </Box>
          </Drawer>
          <Main open={open}>
            <DrawerHeader />
          </Main>
        </>
        {/* <NavItems /> */}
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
        {showcomponent === 1 ? (
          <EmployeeDirectoryPage />
        ) : showcomponent === 2 ? (
          <EmployeeOverviewPage />
        ) : (
          <>
            <Grid container spacing={4}>
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
                    <FormControl
                      sx={{ m: 0, width: "100%" }}
                      variant="outlined"
                    >
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
                            <FlightTakeoffIcon style={{ color: "#09bbb8" }} />
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
                            <FlightTakeoffIcon style={{ color: "#09bbb8" }} />
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
                              <EventIcon style={{ color: "#09bbb8" }} />
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
                              <EventIcon style={{ color: "#09bbb8" }} />
                            </Grid>
                            <Grid item xs={10}>
                              <Typography color="text.secondary" gutterBottom>
                                My Schedule
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
                          <Typography
                            variant="body1"
                            component="h6"
                            align="left"
                          >
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
                    <Paper sx={{ padding: "30px 0" }}>
                      <Typography variant="body1" component="h6" align="center">
                        No Announcements
                      </Typography>
                    </Paper>
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
                    <Paper sx={{ padding: "30px 0" }}>
                      <Typography variant="body1" component="h6" align="center">
                        No upcoming event
                      </Typography>
                    </Paper>
                  </Grid>
                </Grid>
                <Paper />
              </Grid>
            </Grid>
          </>
        )}
      </Box>
    </div>
  );
}
export default withStyles(styles)(DashboardPage);
