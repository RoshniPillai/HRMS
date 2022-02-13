import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import NavigationBar from "./navBar";
import BasicDatePicker from "./datePicker";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import EventIcon from "@mui/icons-material/Event";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import FormHelperText from "@mui/material/FormHelperText";
import OutlinedInput from "@mui/material/OutlinedInput";
import IconButton from "@mui/material/IconButton";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";

export default function Dashboard() {
  return (
    <React.Fragment>
      <Container maxWidth="lg">
        <NavigationBar />
        <Box pt={3} pl={3} sx={{ bgcolor: "#F5F5F5", height: "100vh" }}>
          <Grid sx={{ flexGrow: 1 }} container spacing={2}>
            <Grid item xs={12}>
              <Grid container justifyContent="justify" spacing={2}>
                {/* first block */}

                <Grid item xs={4}>
                  <Grid container spacing={2}>
                    <Grid item xs={8}>
                      <Typography
                        variant="body1"
                        component="h6"
                        align="left"
                        sx={{ fontSize: 10 }}
                      >
                        Your TimeOff Balance
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Link href="#" underline="none" sx={{ fontSize: 10 }}>
                        Request a Leave
                      </Link>
                    </Grid>
                  </Grid>
                  <Box mt={2}></Box>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <FormControl sx={{ align: "left" }} variant="outlined">
                        <OutlinedInput
                          id="outlined-adornment-password"
                          type={"text"}
                          placeholder={""}
                          value={"Balance as of date"}
                          // onChange={handleChange('password')}
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                aria-label=""
                                // onClick={}
                                //onMouseDown={}
                                edge="end"
                              >
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
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Card sx={{}}>
                        <CardContent>
                          <Grid container spacing={2}>
                            <Grid item xs={2}>
                              <FlightTakeoffIcon />
                            </Grid>
                            <Grid item xs={10}>
                              <Box component="span" sx={{ fontSize: 10 }}>
                                Sick Day off
                              </Box>
                              <Typography
                                sx={{ fontSize: 14, fontWeight: "bold" }}
                                color="text.secondary"
                              >
                                15:00/
                                <Box component="span" sx={{ fontSize: 10 }}>
                                  15:00
                                </Box>
                              </Typography>
                              <Box component="span" sx={{ fontSize: 10 }}>
                                Days
                              </Box>
                            </Grid>
                          </Grid>
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
                              <Box component="span" sx={{ fontSize: 10 }}>
                                Annual vacations
                              </Box>
                              <Typography
                                sx={{ fontSize: 14, fontWeight: "bold" }}
                                color="text.secondary"
                              >
                                15:00/
                                <Box component="span" sx={{ fontSize: 10 }}>
                                  15:00
                                </Box>
                              </Typography>
                              <Box component="span" sx={{ fontSize: 10 }}>
                                Days
                              </Box>
                            </Grid>
                          </Grid>
                        </CardContent>
                      </Card>
                    </Grid>
                  </Grid>
                  <Box mt={2}></Box>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Typography
                        variant="body1"
                        component="h6"
                        align="left"
                        sx={{ fontSize: 10 }}
                      >
                        Quick Action
                      </Typography>
                    </Grid>
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <Card sx={{}}>
                          <CardContent>
                            <Grid container spacing={2}>
                              <Grid item xs={2}>
                                <EventIcon />
                              </Grid>
                              <Grid item xs={10}>
                                <Typography
                                  sx={{ fontSize: 10 }}
                                  color="text.secondary"
                                  gutterBottom
                                >
                                  My Approval
                                </Typography>
                                <Link
                                  href="#"
                                  underline="none"
                                  sx={{ fontSize: 10 }}
                                >
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
                            <Grid container spacing={2}>
                              <Grid item xs={2}>
                                <EventIcon />
                              </Grid>
                              <Grid item xs={10}>
                                <Typography
                                  sx={{ fontSize: 10 }}
                                  color="text.secondary"
                                  gutterBottom
                                >
                                  My Approval
                                </Typography>
                                <Link
                                  href="#"
                                  underline="none"
                                  sx={{ fontSize: 10 }}
                                >
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
                  <Grid container spacing={1}>
                    <Grid item xs={8}>
                      <Typography
                        variant="body1"
                        component="h6"
                        align="left"
                        sx={{ fontSize: 10 }}
                      >
                        Todays Clocking
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Link href="#" underline="none" sx={{ fontSize: 10 }}>
                        View History
                      </Link>
                    </Grid>

                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Card sx={{}}>
                          <CardContent>
                            <Typography
                              variant="body1"
                              component="h6"
                              align="left"
                              sx={{ fontSize: 10 }}
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
                              />
                              <Chip
                                label="Clock-Out"
                                component="a"
                                href="#"
                                variant="outlined"
                                disabled
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
                      <Typography
                        variant="body1"
                        component="h6"
                        align="left"
                        sx={{ fontSize: 10 }}
                      >
                        Announcements
                      </Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <Link href="#" underline="none" sx={{ fontSize: 10 }}>
                        Add
                      </Link>
                    </Grid>
                    <Grid item xs={2}>
                      <Link href="#" underline="none" sx={{ fontSize: 10 }}>
                        View All
                      </Link>
                    </Grid>
                  </Grid>
                  <Box mt={2}></Box>
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                      <Typography
                        variant="body1"
                        component="h6"
                        align="center"
                        sx={{ fontSize: 10 }}
                      >
                        No Announcements
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>

                {/* second block */}
                <Grid item xs={4}>
                  <Grid container>
                    <Grid item xs={8}>
                      <Typography
                        variant="body1"
                        component="h6"
                        sx={{ fontSize: 10 }}
                      >
                        Who's Off
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography
                        variant="body1"
                        component="h6"
                        sx={{ fontSize: 10 }}
                      >
                        0 employees
                      </Typography>
                    </Grid>
                    {/* <Grid item xs={4}></Grid> */}
                  </Grid>
                  <Box mt={2}></Box>
                  <Paper sx={{ padding: "30px 0" }}>
                    <Typography align="center" sx={{ fontSize: 10 }}>
                      No one's Off!
                    </Typography>
                  </Paper>
                </Grid>
                {/* third block */}
                <Grid item xs={4}>
                  <Grid container spacing={1}>
                    <Grid item xs={8}>
                      <Typography
                        variant="body1"
                        component="h6"
                        sx={{ fontSize: 10 }}
                      >
                        Events
                      </Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <Link href="#" underline="none" sx={{ fontSize: 10 }}>
                        Add
                      </Link>
                    </Grid>
                    <Grid item xs={2}>
                      <Link href="#" underline="none" sx={{ fontSize: 10 }}>
                        View All
                      </Link>
                    </Grid>
                  </Grid>
                  {/* <BasicDatePicker /> */}
                  <Box mt={2}></Box>
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                      <Typography
                        variant="body1"
                        component="h6"
                        sx={{ fontSize: 10 }}
                      >
                        Today
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography
                        variant="body1"
                        component="h6"
                        align="center"
                        sx={{ fontSize: 10 }}
                      >
                        No upcoming event
                      </Typography>
                    </Grid>
                  </Grid>
                  <Paper />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        {/* <Box sx={{ bgcolor: "#F5F5F5", height: "100vh" }}>
          <Grid container spacing={2}>
            <Grid item xs={4} style={{ border: " solid red" }}></Grid>
            <Grid item xs={4} style={{ border: " solid red" }}></Grid>
            <Grid item xs={4} style={{ border: " solid red" }}></Grid>
          </Grid>
        </Box> */}
      </Container>
    </React.Fragment>
  );
}
