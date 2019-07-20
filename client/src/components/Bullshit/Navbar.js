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
          <i className="material-icons">library_books</i>
          <Link to="/" className="drawerLink"><ListItemText primary="Latest News" /></Link>
        </ListItem>
        <ListItem>
          <i className="material-icons">new_releases</i>
          <Link to="/movie" className="drawerLink"><ListItemText primary="Latest Movies" /></Link>
        </ListItem>
        <ListItem>
          <i className="material-icons">local_movies</i>
          <Link to="/topmovie" className="drawerLink"><ListItemText primary="Top Movies" /></Link>
        </ListItem>
        <ListItem>
          <i className="material-icons">search</i>
          <Link to="/search" className="drawerLink"><ListItemText primary="Search Movies" /></Link>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem>
          <i className="material-icons">vpn_key</i>
          <Link to="/account" className="drawerLink"><ListItemText primary="Admin" /></Link>
        </ListItem>
        <ListItem>
          <i className="material-icons">account_box</i>
          <Link to="/account" className="drawerLink"><ListItemText primary="My Account" /></Link>
        </ListItem>
        <ListItem>
          <i className="material-icons">video_library</i>
          <Link to="/account" className="drawerLink"><ListItemText primary="My Watchlist" /></Link>
        </ListItem>
        <ListItem>
          <i className="material-icons">exit_to_app</i>
          <Link to="/login" className="drawerLink"><ListItemText primary="Login / Sign Up" /></Link>
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
        </Toolbar>
      </AppBar>
      <Drawer open={drawerState.left} onClose={drawerState.toggleDrawer('left', false)}>
        {drawerState.sideList('left')}
      </Drawer>
    </div >
  )
}

export default Navbar
