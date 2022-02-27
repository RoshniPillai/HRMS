import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Stack } from '@mui/material';
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function MenuDrawer() {
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
      {/* <Box sx={{ display: 'flex' }}>
       <CssBaseline /> */}

      <Box sx={{ overflow: "auto" }}>
        <Stack direction="column" spacing={2}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
          //  sx={{ mr: 2, ...(open) }}
          >
            <WidgetsOutlinedIcon />
          </IconButton>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
          // sx={{ mr: 2, ...(open) }}
          >
            <PeopleAltOutlinedIcon />
          </IconButton>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
          // sx={{ mr: 2, ...(open) }}
          >
            <PeopleAltOutlinedIcon />
          </IconButton>

        </Stack>
        {/* <List>
            {[
              "Inbox",
              "Starred",
              "Send email",
              "Drafts",
              "Drafts1",
              "Drafts2",
              "Drafts3"
            ].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? (
                     <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ ...(open) }}
          >
            <MenuIcon />
          </IconButton> 
                  ) : (
                    <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="end"
                    sx={{ ...(open ) }}
                  >
                    <MenuIcon />
                  </IconButton> 
                  )}
                </ListItemIcon>
              </ListItem>
            ))}
          </List> */}
      </Box>
      {/* <Stack direction="column" spacing={2}>
      <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open) }}
          >
            <MenuIcon />
          </IconButton>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open) }}
          >
            <MenuIcon />
          </IconButton>
          
      </Stack> */}
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            position: 'fixed',
            top: 0,
            left: 80,
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader style={{ textAlign : 'left'}}>
          <Box m={2}> <Typography variant="subtitle1">
            Employees
          </Typography>
          </Box>

          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Box m={2}>
          <Typography variant="caption" display="block" gutterBottom align='left'>
            Employees Affairs
          </Typography>
          <Typography variant="subtitle2" gutterBottom component="div" align='left'>
            Employees Directory
          </Typography>
          <Typography variant="subtitle2" gutterBottom component="div" align='left'>
            Employees Management
          </Typography>
          <Typography variant="subtitle2" gutterBottom component="div" align='left'>
            Mass Action
          </Typography>
        </Box>
        <Box m={2}>
          <Typography variant="caption" display="block" gutterBottom align='left'>
            Tasks
          </Typography>
          <Typography variant="subtitle2" gutterBottom component="div" align='left'>
            My Taks
          </Typography>
          <Typography variant="subtitle2" gutterBottom component="div" align='left'>
            Manage Tasks
          </Typography>
        </Box>  
        <Box m={2}>
          <Typography variant="caption" display="block" gutterBottom align='left'>
            Disciplinary Actions
          </Typography>
          <Typography variant="subtitle2" gutterBottom component="div" align='left'>
          Manage Disciplinary Actions
          </Typography>
        </Box>

        {/* <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
            </ListItem>
          ))}
        </List> */}
        {/* <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
      </Main>
      {/* // </Box> */}
    </>
  );
}
