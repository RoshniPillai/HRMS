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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classes.root}>
      <PrimarySearchAppBar />
      <Drawer
        variant="permanent"
        className={classes.drawer}
        classes={{ paper: classes.drawerPaper }}
      >
        <NavItems />
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
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Profile" {...a11yProps(0)} />
              <Tab label="Bank Accounts" {...a11yProps(1)} />
              <Tab label="Family Info" {...a11yProps(2)} />
              {/* <Tab label="Item One" {...a11yProps(3)} />
              <Tab label="Item Two" {...a11yProps(4)} />
              <Tab label="Item Three" {...a11yProps(5)} /> */}
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <ProfilePage />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <BankAccountPage />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <FamilyInfoPage />
          </TabPanel>
          {/* <TabPanel value={value} index={3}>
            Item Three
          </TabPanel>
          <TabPanel value={value} index={4}>
            Item Three
          </TabPanel>
          <TabPanel value={value} index={5}>
            Item Three
          </TabPanel> */}
        </Box>
      </Box>
    </div>
  );
}
export default withStyles(styles)(EmployeeOverviewPage);
