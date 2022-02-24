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
import DatePicker from "./datePicker";
import Fab from "@mui/material/Fab";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";

export default function ProfilePage() {
  return (
    <>
      {/* <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <div style={{ border: '1px solid'}}>8</div>
        </Grid>
        <Grid item xs={4}>
        <div style={{ border: '1px solid'}}>4</div>
        </Grid>
       
      </Grid>
    </Box> */}
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} style={{ backgroundColor: "#ffffff" }}>
          <Grid item xs={3} style={{ backgroundColor: "" }}>
            <Grid container>
              <Grid item xs={6}>
                <Typography variant="body2" gutterBottom>
                  User Info
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2">
                  <Link href="#">Edit</Link>
                </Typography>
              </Grid>
              <Grid item xs={6}>
                Image
              </Grid>
              <Grid item xs={6}>
                <Typography variant="caption" gutterBottom>
                  Name
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                  Sheeren Wyngaard
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                  Employement Number
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                  2
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Button size="small" variant="contained">
                  Send Onboarding Package
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Divider />
              <Grid item xs={6}>
                <Typography variant="body2" gutterBottom>
                  Personal Info
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2" gutterBottom>
                  <Link href="#">Edit</Link>
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="caption" gutterBottom>
                  Gender
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                  Nationality
                </Typography>
                <Typography variant="caption" gutterBottom>
                  Birth Date
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                  Jan 30,2000
                </Typography>
                <Typography variant="caption" gutterBottom>
                  Marital Status
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                  Married
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="caption" gutterBottom>
                  Nationality
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                  Indian
                </Typography>
                <Typography variant="caption" gutterBottom>
                  Age
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                  30 years old
                </Typography>
                <Typography variant="caption" gutterBottom>
                  National ID
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                  12345678
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body2" gutterBottom>
                  Contact info
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="caption" gutterBottom>
                  Email
                </Typography>
              </Grid>
              <Typography variant="subtitle2" gutterBottom>
                abc@i-see.io
              </Typography>
              <Grid item xs={12}>
                <Typography variant="caption" gutterBottom>
                  Mobile number
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                  123456679
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={9} style={{ border: "1px solid" }}></Grid>
        </Grid>
      </Box>
    </>
  );
}
