import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Drawer from "@material-ui/core/Drawer";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
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
    <Grid container spacing={2} style={{ backgroundColor: "#ffffff" }}>
      <Grid item xs={4} style={{ border: "1px solid" }}>
        <Grid container>
          <Grid item xs={6}>
            User Info
          </Grid>
          <Grid item xs={6}>
            <Link href="#">Edit</Link>
          </Grid>
          <Grid item xs={6}>
            Image
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" gutterBottom>
              Name
            </Typography>
            <Typography variant="body2" gutterBottom>
              Sheeren Wyngaard
            </Typography>
            <Typography variant="body2" gutterBottom>
              Employement Number
            </Typography>
            <Typography variant="body2" gutterBottom>
              2
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained">Send Onboarding Package</Button>
          </Grid>
        </Grid>
        <Divider />
      </Grid>
      <Grid item xs={8} style={{ border: "1px solid" }}>
        item2
      </Grid>
    </Grid>
  );
}
