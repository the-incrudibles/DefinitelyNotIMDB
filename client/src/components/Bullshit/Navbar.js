import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// material ui imports
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import MenuIcon from '@material-ui/icons/Menu'
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  navTitle: {
    color: 'white',
    textDecoration: 'none'
  },
  list: {
    width: 250,
  },
}))

const Navbar = _ => {
  const classes = useStyles()
  const [drawerState, setDrawerState] = useState({
    left: false,
  });

  drawerState.toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setDrawerState({ ...drawerState, [side]: open });
  };

  drawerState.sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={drawerState.toggleDrawer(side, false)}
      onKeyDown={drawerState.toggleDrawer(side, false)}
    >
      <List>
        <ListItem>
          <Link to="/movie" className="drawerLink"><ListItemText primary="Latest News" /></Link>
        </ListItem>
        <ListItem>
          <Link to="/search" className="drawerLink"><ListItemText primary="Search Movies" /></Link>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem>
          <ListItemIcon className="drawerIcon"><InboxIcon /></ListItemIcon>
          <Link to="/account" className="drawerLink"><ListItemText primary="My Account" /></Link>
        </ListItem>
        <ListItem>
          <ListItemIcon className="drawerIcon"><InboxIcon /></ListItemIcon>
          <Link to="/login" className="drawerLink"><ListItemText primary="Login" /></Link>
        </ListItem>
        <ListItem>
          <ListItemIcon className="drawerIcon"><InboxIcon /></ListItemIcon>
          <Link to="/signup" className="drawerLink"><ListItemText primary="Sign Up" /></Link>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton edge='start' className={classes.menuButton} color='inherit' aria-label='Menu' onClick={drawerState.toggleDrawer('left', true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' className={classes.title}>
            <Button className={classes.navTitle}>
              <Link className={classes.navTitle} to='/movie'>Movie</Link>
            </Button>
          </Typography>
          <Button color="inherit">
            <Link to="/login" className="navbutton">Login</Link>
          </Button>
          <Button color="inherit">
            <Link to="/signup" className="navbutton">Sign Up</Link>
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer open={drawerState.left} onClose={drawerState.toggleDrawer('left', false)}>
        {drawerState.sideList('left')}
      </Drawer>
    </div >
  )
}

export default Navbar
