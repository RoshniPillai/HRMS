import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Drawer from "@material-ui/core/Drawer";

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
  },
  toolbarActions: {
    marginLeft: "auto"
  },
  // Styles for the root `div` element in the `Drawer` component.
  drawer: {
    // width: theme.layout.drawerWidth
  },
  // Styles for the `Paper` component rendered by `Drawer`.
  drawerPaper: {
    width: "inherit"
  }
  // Styles for the content area. It fills the available space
  // in the flex container to the right (or left) of the drawer.
  // appContent: theme.mixins.gutters({
  //   // https://github.com/philipwalton/flexbugs#flexbug-17
  //   flex: "1 1 100%",
  //   maxWidth: "100%",
  //   paddingTop: 80, // equal to AppBar height + 16px
  //   margin: "0 auto",
  //   // Set the max content width for each breakpoint
  //   // Content will be centered in the space to the right/left of drawer
  //   [theme.breakpoints.up("lg")]: {
  //     maxWidth: theme.breakpoints.values.lg
  //   }
  // })
});

function Sample(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="title" color="inherit">
            Page Title
          </Typography>
          data
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={classes.drawer}
        classes={{ paper: classes.drawerPaper }}
      >
        list items
      </Drawer>
      <main className={classes.appContent}>drawer content</main>
    </div>
  );
}

// App.propTypes = {
//   classes: PropTypes.object.isRequired
// };
export default withStyles(styles)(Sample);
