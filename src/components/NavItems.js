import React from "react";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import { styled, useTheme } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Divider from "@material-ui/core/Divider";
import Box from "@mui/material/Box";
import DraftsIcon from "@material-ui/icons/Drafts";
import Typography from "@material-ui/core/Typography";
import MailIcon from "@material-ui/icons/Mail";
import DeleteIcon from "@material-ui/icons/Delete";
import ReportIcon from "@material-ui/icons/Report";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";

const styles = (theme) => ({
  toolbarIe11: {
    display: "flex"
  },
  heading: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: `0 ${theme.spacing.unit * 3}px`,
    ...theme.mixins.toolbar
  }
});
const drawerWidth = 240;
const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
      marginLeft: 0
    })
  })
);
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end"
}));
function NavItems({ classes }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div>
        <div className={classes.toolbarIe11}>
          <div className={classes.heading}>
            <Typography variant="title">
              <img src="" alt="logo" />
            </Typography>
          </div>
        </div>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                //onClick={handleDrawerOpen}
                edge="end"
                sx={{ ...open }}
              >
                <WidgetsOutlinedIcon />
              </IconButton>
            </ListItemIcon>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="end"
                sx={{ ...open }}
              >
                <PeopleAltOutlinedIcon />
              </IconButton>
            </ListItemIcon>
          </ListItem>
          <ListItem button>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="end"
              sx={{ ...open }}
            >
              <MailIcon />
            </IconButton>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="end"
                sx={{ ...open }}
              >
                <DraftsIcon />
              </IconButton>
            </ListItemIcon>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="end"
                sx={{ ...open }}
              >
                <PeopleAltOutlinedIcon />
              </IconButton>
            </ListItemIcon>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="end"
                sx={{ ...open }}
              >
                <DraftsIcon />
              </IconButton>
            </ListItemIcon>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="end"
                sx={{ ...open }}
              >
                <ReportIcon />
              </IconButton>
            </ListItemIcon>
          </ListItem>
        </List>
      </div>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            position: "fixed",
            top: 0,
            left: 80
          }
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader style={{ textAlign: "left" }}>
          <Box m={2}>
            {" "}
            <Typography variant="subtitle1">Employees</Typography>
          </Box>

          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Box m={2}>
          <Typography
            variant="caption"
            display="block"
            gutterBottom
            align="left"
          >
            Employees Affairs
          </Typography>
          <Typography
            variant="subtitle2"
            gutterBottom
            component="div"
            align="left"
          >
            Employees Directory
          </Typography>
          <Typography
            variant="subtitle2"
            gutterBottom
            component="div"
            align="left"
          >
            Employees Management
          </Typography>
          <Typography
            variant="subtitle2"
            gutterBottom
            component="div"
            align="left"
          >
            Mass Action
          </Typography>
        </Box>
        <Box m={2}>
          <Typography
            variant="caption"
            display="block"
            gutterBottom
            align="left"
          >
            Tasks
          </Typography>
          <Typography
            variant="subtitle2"
            gutterBottom
            component="div"
            align="left"
          >
            My Taks
          </Typography>
          <Typography
            variant="subtitle2"
            gutterBottom
            component="div"
            align="left"
          >
            Manage Tasks
          </Typography>
        </Box>
        <Box m={2}>
          <Typography
            variant="caption"
            display="block"
            gutterBottom
            align="left"
          >
            Disciplinary Actions
          </Typography>
          <Typography
            variant="subtitle2"
            gutterBottom
            component="div"
            align="left"
          >
            Manage Disciplinary Actions
          </Typography>
        </Box>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
      </Main>
    </>
  );
}

export default withStyles(styles)(NavItems);
