import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import NavigationBar from "./navBar";
import BasicDatePicker from "./datePicker";

export default function Dashboard() {
  return (
    <React.Fragment>
      <Container maxWidth="lg">
        <NavigationBar />
        <Box sx={{ bgcolor: "#F5F5F5", height: "100vh" }}>
          <Grid sx={{ flexGrow: 1 }} container spacing={2}>
            <Grid item xs={12}>
              <Grid container justifyContent="justify" spacing={2}>
                {/* first block */}
                <Grid item xs={4}>
                  <Paper sx={{ height: 140, width: 100 }} />
                </Grid>
                {/* second block */}
                <Grid item xs={4}>
                  <Grid container>
                    <Grid item xs={8}>
                      <Typography variant="body1" component="h6">
                        Who's Off
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant="body1" component="h6">
                        0 employees
                      </Typography>
                    </Grid>
                    {/* <Grid item xs={4}></Grid> */}
                  </Grid>
                  <Paper sx={{ padding: "30px 0" }}>
                    <Typography align="center">No one's Off!</Typography>
                  </Paper>
                </Grid>
                {/* third block */}
                <Grid item xs={4}>
                  <Grid container spacing={1}>
                    <Grid item xs={8}>
                      <Typography variant="body1" component="h6">
                        Events
                      </Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <Link href="#" underline="none">
                        Add
                      </Link>
                    </Grid>
                    <Grid item xs={2}>
                      <Link href="#" underline="none">
                        View All
                      </Link>
                    </Grid>
                  </Grid>
                  {/* <BasicDatePicker /> */}
                  <form action="/action_page.php">
                    <label for="birthday">Birthday:</label>
                    <input type="date" id="birthday" name="birthday" />
                    <input type="submit" />
                  </form>

                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                      <Typography variant="body1" component="h6">
                        Today
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="body1" component="h6">
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
