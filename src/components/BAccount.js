import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
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
import Avatar from "@mui/material/Avatar";
import DatePicker from "./datePicker";
import Fab from "@mui/material/Fab";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
//import ChevronDownOutlinedIcon from "@mui/icons-material/ChevronDownOutlined";
import ButtonGroup from "@mui/material/ButtonGroup";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

const buttons = [
  <Button key="one" color="inherit">
    List
  </Button>,
  <Button key="two" color="inherit">
    History
  </Button>,
  <Button key="three" style={{ backgroundColor: "#09bbb8", color: "#ffffff" }}>
    Edit
  </Button>
];
export default function BankAccountPage() {
  const [value, setValue] = React.useState(null);
  return (
    <>
      <Box sx={{ flexGrow: 1, backgroundColor: "" }}>
        <Box mb={2}>
          <Grid container>
            <Grid item xs={12}>
              <Paper variant="outlined">
                <Grid container>
                  <Grid item xs={11}>
                    <Typography variant="body2" gutterBottom>
                      Bank Account
                    </Typography>
                  </Grid>
                  <Grid item xs={1}>
                    <Button
                      size="small"
                      key="three"
                      style={{ backgroundColor: "#09bbb8", color: "#ffffff" }}
                    >
                      Add
                    </Button>
                  </Grid>
                  <Grid item xs={12}>
                    <Divider />
                  </Grid>
                  <Grid item xs={12}>
                    <Box
                      p={3}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                      }}
                    >
                      <Typography variant="caption" gutterBottom>
                        No Bank Account
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Box>

        <Grid container>
          <Grid item xs={12}>
            <Paper variant="outlined">
              <Box m={2}>
                <Grid container>
                  <Grid item xs={9}>
                    <Typography variant="body2" gutterBottom>
                      Professional Info
                    </Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "end"
                      }}
                    >
                      <ButtonGroup size="small" aria-label="small button group">
                        {buttons}
                      </ButtonGroup>
                    </Box>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Grid container>
                    <Grid xs={4}>
                      <Typography variant="caption" gutterBottom>
                        Job Title
                      </Typography>
                      <Typography variant="subtitle2" gutterBottom>
                        HR <Link href="#">Details</Link>
                      </Typography>
                      <Typography variant="caption" gutterBottom>
                        Work Type
                      </Typography>
                      <Typography variant="subtitle2" gutterBottom>
                        Full Time
                      </Typography>
                      <Typography variant="caption" gutterBottom>
                        Direct Manager
                      </Typography>
                      <Typography variant="subtitle2" gutterBottom>
                        Javed Khan
                      </Typography>
                      <Typography variant="caption" gutterBottom>
                        Supervisor
                      </Typography>
                      <Typography variant="subtitle2" gutterBottom>
                        Joegracia
                      </Typography>
                    </Grid>
                    <Grid xs={3}>
                      <Typography variant="caption" gutterBottom>
                        Branch
                      </Typography>
                      <Typography variant="subtitle2" gutterBottom>
                        i-See
                      </Typography>
                    </Grid>
                    <Grid xs={3}>
                      <Typography variant="caption" gutterBottom>
                        Hiring Date
                      </Typography>
                      <Typography variant="subtitle2" gutterBottom>
                        Jan 01, 2022
                      </Typography>
                      <Typography variant="caption" gutterBottom>
                        End of Probation
                      </Typography>
                      <Typography variant="subtitle2" gutterBottom>
                        Jan 30, 2022
                      </Typography>
                      <Typography variant="caption" gutterBottom>
                        Period of employment
                      </Typography>
                      <Typography variant="subtitle2" gutterBottom></Typography>
                    </Grid>
                    <Grid xs={2}></Grid>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Grid>
          <Box m={2}></Box>
          <Grid item xs={12}>
            <Paper variant="outlined">
              <Box m={2}>
                <Grid container>
                  <Grid item xs={9}>
                    <Typography variant="body2" gutterBottom>
                      Salary Package
                    </Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "end"
                      }}
                    >
                      <ButtonGroup size="small" aria-label="small button group">
                        {buttons}
                      </ButtonGroup>
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body2" gutterBottom>
                      TBD
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Grid>
          <Box m={2}></Box>

          <Grid item xs={12}>
            <Paper variant="outlined" style={{ backgroundColor: "" }}>
              <Box m={2}>
                <Grid container spacing={2}>
                  <Grid item xs={8}>
                    <Typography variant="body2" gutterBottom>
                      TimeOff Balance
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "end",
                        justifyContent: "end"
                      }}
                    >
                      <form action="/">
                        Balance of date:
                        <input type="date" id="birthday" name="birthday" />
                      </form>
                    </Box>
                  </Grid>
                </Grid>
                <Grid container spacing={4}>
                  <Grid item={5}>
                    <Paper variant="outlined">
                      <Box
                        m={3}
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          flexDirection: "column"
                        }}
                      >
                        <Avatar sx={{ bgcolor: "#F2F3F5" }}>
                          <FlightTakeoffIcon sx={{ color: "#09bbb8" }} />
                        </Avatar>
                        <Typography
                          variant="caption"
                          gutterBottom
                          style={{ color: "#09bbb8" }}
                        >
                          Sick Day Off
                        </Typography>
                        <Typography variant="caption" gutterBottom>
                          Available Balance
                        </Typography>
                        <Typography variant="subtitle2" gutterBottom>
                          15.00
                        </Typography>
                        <Typography variant="caption" gutterBottom>
                          Upto end of year
                        </Typography>
                        <Typography variant="subtitle2" gutterBottom>
                          15.00
                        </Typography>
                      </Box>
                    </Paper>
                  </Grid>

                  <Grid item={5}>
                    <Paper variant="outlined">
                      <Box
                        m={3}
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          flexDirection: "column"
                        }}
                      >
                        <Avatar sx={{ bgcolor: "#F2F3F5" }}>
                          <FlightTakeoffIcon sx={{ color: "#09bbb8" }} />
                        </Avatar>
                        <Typography
                          variant="caption"
                          gutterBottom
                          style={{ color: "#09bbb8" }}
                        >
                          Annual Vacations
                        </Typography>
                        <Typography variant="caption" gutterBottom>
                          Available Balance
                        </Typography>
                        <Typography variant="subtitle2" gutterBottom>
                          15.00
                        </Typography>
                        <Typography variant="caption" gutterBottom>
                          Upto end of year
                        </Typography>
                        <Typography variant="subtitle2" gutterBottom>
                          15.00
                        </Typography>
                      </Box>
                    </Paper>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
