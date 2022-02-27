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
export default function BankAccountPage() {
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
        {value === false ? (
          <>
            <Box mb={2}>
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
                        <Grid
                          item
                          xs={3}
                          display="flex"
                          alignContent="end"
                          justifyContent="end"
                        >
                          <Button
                            size="small"
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
                            p={3}
                            sx={{
                              textAlign: "center",
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
                    </Box>
                  </Paper>
                </Grid>
              </Grid>
            </Box>
          </>
        ) : (
          <>
            <Grid container>
              <Grid item xs={12}>
                <Paper variant="outlined">
                  <Box m={2}>
                    <Grid container>
                      <Grid item xs={12}>
                        <Typography variant="subtitle2" gutterBottom>
                          Add Bank Account
                        </Typography>
                      </Grid>
                      <Grid item xs={12} mt={1}>
                        <Divider />
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <Grid container>
                        <Grid xs={3} mt={1}>
                          <Typography variant="caption" gutterBottom>
                            Bank*
                          </Typography>
                        </Grid>
                        <Grid xs={9} mt={1}>
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "end",
                              justifyContent: "end"
                            }}
                          >
                            <FormControl sx={{ m: 0, width: "80%" }}>
                              <InputLabel id="demo-simple-select-helper-label">
                                Select
                              </InputLabel>
                              <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                value={age}
                                label="Age"
                                onChange={handleChange1}
                              >
                                <MenuItem value={10}>Bank 1</MenuItem>
                                <MenuItem value={20}>Bank 2</MenuItem>
                                <MenuItem value={30}>Bank 3</MenuItem>
                              </Select>
                            </FormControl>
                            <FormControl
                              sx={{
                                m: 0,
                                width: "20%",
                                backgroundColor: "#09bbb8"
                              }}
                            >
                              <InputLabel
                                id="demo-simple-select-helper-label"
                                sx={{ color: "#ffffff" }}
                              >
                                Country
                              </InputLabel>
                              <Select
                                value={age}
                                onChange={handleChange}
                                displayEmpty
                                label="Country"
                                //inputProps={{ "aria-label": "Without label" }}
                              >
                                <MenuItem value={10}>India</MenuItem>
                                <MenuItem value={20}>USA</MenuItem>
                              </Select>
                            </FormControl>
                          </Box>
                        </Grid>
                        <Grid xs={3} mt={1}>
                          <Typography variant="caption" gutterBottom>
                            Bank Branch*
                          </Typography>
                        </Grid>
                        <Grid xs={9} mt={1}>
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                              Select
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={name}
                              label="name"
                              onChange={handleChange1}
                            >
                              <MenuItem value={1}>Branch 1</MenuItem>
                              <MenuItem value={2}>Branch 2</MenuItem>
                              <MenuItem value={3}>Branch 3</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid xs={3} mt={1}>
                          <Typography variant="caption" gutterBottom>
                            Bank Account Number*
                          </Typography>
                        </Grid>
                        <Grid xs={9} mt={1}>
                          <TextField
                            fullWidth
                            id="outlined-basic"
                            label=""
                            variant="outlined"
                          />
                        </Grid>
                        <Grid xs={3} mt={1}>
                          <Typography variant="caption" gutterBottom>
                            Iban
                          </Typography>
                        </Grid>
                        <Grid xs={9} mt={1}>
                          <TextField
                            fullWidth
                            id="outlined-basic"
                            label=""
                            variant="outlined"
                          />
                        </Grid>
                        <Grid xs={3} mt={1}>
                          <Typography variant="caption" gutterBottom>
                            Exchange Amount
                          </Typography>
                        </Grid>
                        <Grid xs={9} mt={1}>
                          <TextField
                            fullWidth
                            id="outlined-basic"
                            label=""
                            variant="outlined"
                          />
                        </Grid>
                        <Grid xs={3} mt={1}>
                          <Typography variant="caption" gutterBottom>
                            Related establishment number
                          </Typography>
                        </Grid>
                        <Grid xs={9} mt={1}>
                          <TextField
                            fullWidth
                            id="outlined-basic"
                            label=""
                            variant="outlined"
                          />
                        </Grid>

                        <Grid xs={3} mt={1}>
                          <Typography variant="caption" gutterBottom>
                            Percent transfer from Salary*
                          </Typography>
                        </Grid>
                        <Grid xs={9} mt={1} display="flex" flexDirection="row">
                          <Box sx={{ width: "90%" }}>
                            {/* <button id="down" class="btn btn-default" onclick=" down('0')"><AddIcon size="small" /></button> */}
                            <TextField
                              fullWidth
                              type="number"
                              id="outlined-basic"
                              label=""
                              variant="outlined"
                            />
                          </Box>
                          <Box
                            m={0}
                            sx={{
                              width: "10%",
                              backgroundColor: "#f2f3f5"
                            }}
                          >
                            <Typography
                              variant="inherit"
                              component="div"
                              align="center"
                              style={{ position: "relative", top: 15 }}
                            >
                              %
                            </Typography>
                          </Box>

                          {/* <button id="up" class="btn btn-default" onclick="up('10')"><RemoveIcon size="small" /></button> */}
                        </Grid>
                        <Grid xs={3} mt={1}>
                          <Typography variant="caption" gutterBottom>
                            Employee Swift Code*
                          </Typography>
                        </Grid>
                        <Grid xs={9} mt={1}>
                          <TextField
                            fullWidth
                            id="outlined-basic"
                            label=""
                            variant="outlined"
                          />
                        </Grid>
                        <Grid
                          xs={12}
                          mt={2}
                          display="flex"
                          alignItems="end"
                          justifyContent="end"
                        >
                          <Button
                            color="inherit"
                            style={{
                              backgroundColor: "#09bbb8",
                              color: "#ffffff"
                            }}
                          >
                            Create Bank Account
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Box>
                </Paper>
              </Grid>
              <Box m={2}></Box>
            </Grid>
          </>
        )}
      </Box>
    </>
  );
}
