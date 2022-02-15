import React from "react";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import StarIcon from "@material-ui/icons/Star";
import Typography from "@material-ui/core/Typography";
import SendIcon from "@material-ui/icons/Send";
import MailIcon from "@material-ui/icons/Mail";
import DeleteIcon from "@material-ui/icons/Delete";
import ReportIcon from "@material-ui/icons/Report";
import IconButton from "@mui/material/IconButton";
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

const [open, setOpen] = React.useState(false);

const handleDrawerOpen = () => {
  setOpen(true);
};

const handleDrawerClose = () => {
  setOpen(false);
};
function NavItems({ classes }) {
  return (
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
              onClick={handleDrawerOpen}
              edge="end"
              sx={{ ...open }}
            >
              <WidgetsOutlinedIcon />
            </IconButton>
          </ListItemIcon>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <PeopleAltOutlinedIcon />
          </ListItemIcon>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DeleteIcon />
          </ListItemIcon>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ReportIcon />
          </ListItemIcon>
        </ListItem>
      </List>
    </div>
  );
}

export default withStyles(styles)(NavItems);
