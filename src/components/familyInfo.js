import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import SearchIcon from "@mui/icons-material/Search";
import FamTable from "./famTable";
import GetAppIcon from "@material-ui/icons/GetApp";
export default function FamilyInfoPage() {
  const [value, setValue] = React.useState(false);
  const [name, setName] = React.useState("");
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleChange1 = (event) => {
    setName(event.target.value);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1, backgroundColor: "" }}>
        <Box mb={2}>
          <Grid container>
            <Grid item xs={12}>
              <Paper variant="outlined">
                <Box m={2}>
                  <Grid container>
                    <Grid item xs={9}>
                      <Typography variant="body2" gutterBottom>
                        Employee Info
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      xs={3}
                      display="flex"
                      alignContent="end"
                      justifyContent="end"
                    >
                      <Button
                        key="three"
                        style={{
                          backgroundColor: "#09bbb8",
                          color: "#ffffff"
                        }}
                        onClick={() => setValue(!value)}
                      >
                        Add
                      </Button>
                    </Grid>

                    <Grid item xs={12} mt={1}>
                      <Divider />
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
                        <Typography
                          variant="body1"
                          component=""
                          style={{ padding: 10 }}
                        >
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
                        <Typography
                          variant="body1"
                          component=""
                          style={{ padding: 10 }}
                        >
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
                          paddingTop: 2
                        }}
                      >
                        <FamTable />
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
