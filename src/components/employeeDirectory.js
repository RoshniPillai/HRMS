import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";
import NavigationBar from "./navBar";
import DrawerPage from "./drawer";
import Card from "@mui/material/Card";
import Avatar from '@mui/material/Avatar';
import CardContent from "@mui/material/CardContent";
import EventIcon from "@mui/icons-material/Event";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import IconButton from "@mui/material/IconButton";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import SearchIcon from '@mui/icons-material/Search';
import BasicDatePicker from "./datePicker";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import MenuDrawer from './menuDrawer';
import MailIcon from '@mui/icons-material/Mail';
import PersonIcon from '@mui/icons-material/Person';
import { withStyles } from "@mui/material";

const styles = theme => ({
    textField: {
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingBottom: 0,
        marginTop: 0,
        fontWeight: 500
    },
    input: {
        color: 'white'
    }
});

function EmployeeDirectoryPage() {

    return (
        <React.Fragment>
            <Container maxWidth="lg">
                <NavigationBar />
                <Box pt={3} pl={5} pr={2} sx={{ bgcolor: "#F5F5F5", height: "100vh" }}>
                    <Box p={1} sx={{ bgcolor: "#FFFFFF" }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Typography variant="body" gutterBottom component="div" align='left' >
                                    Employees Directory
                                </Typography>
                                <Divider />
                            </Grid>
                            <Grid item xs={4} >
                                <Typography variant="body" component="div" align='right' style={{ paddingTop: '10px' }}>
                                    J
                                </Typography>
                            </Grid>
                            <Grid item xs={4} >
                                <Typography variant="body" component="div" style={{ paddingTop: '10px' }} >
                                    All
                                </Typography>
                            </Grid>
                            <Grid item xs={4} >
                                <FormControl
                                    sx={{ m: 0, }}
                                    variant="outlined"
                                >
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
                                        style={{ fontSize: 10 }}
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
                                {/* <TextField
                                id="standard-search"
                                label="Search field"
                                type="search"
                                InputProps={{
                                    style: {
                                      //  color: "red",
                                        padding: 0,
                                        margin: 0,
                                        height: '50px',
                                    }
                                }}
                            /> */}
                            </Grid>
                        </Grid>
                    </Box>
                    <Box mt={4} ml={2}>
                        <Grid container spacing={2}>

                            <Card sx={{ minWidth: 200  , textAlign: 'center'}}>
                                <CardContent>
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                      
                                    </Typography>
                                   <PersonIcon fontSize="large"/>
                                    <Typography sx={{ mb: 0 }} color="text.secondary">
                                       Javed Khan
                                    </Typography>
                                    <Typography variant="caption" sx={{ fontSize: 10}}>                                 
                                     HR
                                    <br />
                                      {/* <MailIcon size="small"/> */}
                                       Javed@i-see.io
                                    </Typography>
                                </CardContent>
                            </Card>

                        </Grid>
                    </Box>
                </Box>
            </Container>
        </React.Fragment >
    );
}
export default EmployeeDirectory
