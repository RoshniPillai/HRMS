import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@mui/material/Box";
import Drawer from "@material-ui/core/Drawer";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PrimarySearchAppBar from "./appBar";
import NavItems from "./NavItems";
import ProfilePage from "./Profile";
import BankAccountPage from "./BAccount";
import FamilyInfoPage from "./familyInfo";

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
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ pt: 2 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

function EmployeeOverviewPage(props) {
  const { classes } = props;
  const [value, setValue] = React.useState(0);
  const [value1, setValue1] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChange1 = (event, newValue) => {
    setValue(newValue + 7);
  };
  const handleChange11 = (event, newValue) => {
    setValue(newValue);
  };
  const handleChange2 = (event, newValue) => {
    setValue(newValue + 3);
  };

  return (
    // <div className={classes.root}>
    //   <PrimarySearchAppBar />
    //   <Drawer
    //     variant="permanent"
    //     className={classes.drawer}
    //     classes={{ paper: classes.drawerPaper }}
    //   >
    //     <NavItems />
    //   </Drawer>
    //   <Box
    //     p={3}
    //     sx={{
    //       flexGrow: 1,
    //       paddingTop: "74px",
    //       backgroundColor: "#F2F3F5"
    //     }}
    //     classes={classes.main}
    //   >
    <Box sx={{ width: "100%" }}>
      {/* <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        <Tabs value={value} onChange={handleChange11}>
          <Tab label="Precios" />
          <Tab label="Usuarios" />
          <Tab label="Plan" />
        </Tabs>
        <Tabs value={value - 3} onChange={handleChange2}>
          <Tab label="Empleados" />
        </Tabs>
      </Box> */}
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          display: "flex",
          justifyContent: "left",
          flexWrap: "wrap"
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          variant="scrollable"
          scrollButtons="auto"
          // style={{ padding: "0 20px" }}
        >
          <Tab wrapped label="Profile" {...a11yProps(0)} />
          <Tab wrapped label="Bank Accounts" {...a11yProps(1)} />
          <Tab wrapped label="Family Info" {...a11yProps(2)} />
          <Tab wrapped label="Documents" {...a11yProps(3)} />
          <Tab wrapped label="Competencies" {...a11yProps(4)} />
          <Tab wrapped label="Insurance" {...a11yProps(5)} />
          <Tab wrapped label="Air Ticket Allowance" {...a11yProps(6)} />
          <Tab wrapped label="TimeOff Setup" {...a11yProps(7)} />
          <Tab wrapped label="Assets" {...a11yProps(8)} />
          <Tab wrapped label="Projects" {...a11yProps(9)} />
          <Tab wrapped label="Part Time Types" {...a11yProps(10)} />

          <Tab wrapped label="Disciplinary Actions" {...a11yProps(11)} />
          <Tab wrapped label="Schedules" {...a11yProps(12)} />
          <Tab wrapped label="Contracts" {...a11yProps(13)} />
          <Tab wrapped label="Custom Fields" {...a11yProps(14)} />
          <Tab wrapped label="Off-Boarding" {...a11yProps(15)} />
        </Tabs>
      </Box>
      {/* <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          display: "flex",
          justifyContent: "left",
          flexWrap: "wrap"
        }}
      >
        <Tabs
          value={value - 7}
          onChange={handleChange1}
          aria-label="basic tabs example"
        >
          <Tab wrapped label="Disciplinary Actions" {...a11yProps(0)} />
          <Tab wrapped label="Schedules" {...a11yProps(1)} />
          <Tab wrapped label="Contracts" {...a11yProps(2)} />
          <Tab wrapped label="Custom Fields" {...a11yProps(3)} />
          <Tab wrapped label=" Off-Boarding" {...a11yProps(4)} />
        </Tabs>
      </Box> */}
      <TabPanel value={value} index={0}>
        <ProfilePage />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <BankAccountPage />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <FamilyInfoPage />
      </TabPanel>
      <TabPanel value={value} index={3}>
        content
      </TabPanel>
      <TabPanel value={value} index={4}>
        content
      </TabPanel>
      <TabPanel value={value} index={5}>
        content
      </TabPanel>
      <TabPanel value={value} index={6}>
        content
      </TabPanel>
      <TabPanel value={value} index={7}>
        content
      </TabPanel>
      <TabPanel value={value} index={8}>
        content
      </TabPanel>
      <TabPanel value={value} index={9}>
        content
      </TabPanel>
      <TabPanel value={value} index={10}>
        content
      </TabPanel>
      <TabPanel value={value} index={11}>
        content
      </TabPanel>
      <TabPanel value={value} index={12}>
        content
      </TabPanel>
      <TabPanel value={value} index={13}>
        content
      </TabPanel>
      <TabPanel value={value} index={14}>
        content
      </TabPanel>
      <TabPanel value={value} index={15}>
        content
      </TabPanel>

      {/* <TabPanel value={value1} index={0}>
        content
      </TabPanel>
      <TabPanel value={value1} index={1}>
        content
      </TabPanel>
      <TabPanel value={value1} index={2}>
        content
      </TabPanel>
      <TabPanel value={value1} index={3}>
        content
      </TabPanel>
      <TabPanel value={value1} index={4}>
        content
      </TabPanel> */}
    </Box>
    //   </Box>
    // </div>
  );
}
export default withStyles(styles)(EmployeeOverviewPage);
