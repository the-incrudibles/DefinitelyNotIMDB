import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// Material UI Imports:
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import { makeStyles } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

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
    width: 250
  },
  appBar: {
    background: '#362c36'
  }
}))

const Navbar = _ => {
  const classes = useStyles()
  const [drawerState, setDrawerState] = useState({
    left: false
  })

  drawerState.toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }

    setDrawerState({ ...drawerState, [side]: open })
  }

  const handleLogOut = _ => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    localStorage.removeItem('admin')
  }

  drawerState.sideList = side => (
    <div
      className={classes.list}
      role='presentation'
      onClick={drawerState.toggleDrawer(side, false)}
      onKeyDown={drawerState.toggleDrawer(side, false)}
    >
      <List>
        <ListItem>
          <i className='material-icons'>library_books</i>
          <Link to='/' className='drawerLink'><ListItemText primary='Latest News' /></Link>
        </ListItem>
        <ListItem>
          <i className='material-icons'>new_releases</i>
          <Link to='/latest' className='drawerLink'><ListItemText primary='In Theaters' /></Link>
        </ListItem>
        <ListItem>
          <i className='material-icons'>movie</i>
          <Link to='/toprated' className='drawerLink'><ListItemText primary='Top Movies' /></Link>
        </ListItem>
        <ListItem>
          <i className='material-icons'>local_movies</i>
          <Link to='/genres' className='drawerLink'><ListItemText primary='Genres' /></Link>
        </ListItem>
        <ListItem>
          <i className='material-icons'>search</i>
          <Link to='/search' className='drawerLink'><ListItemText primary='Search' /></Link>
        </ListItem>
      </List>
      <Divider />
      <List>
        {
          localStorage.getItem('admin')
            ?
            <ListItem>
              <i className='material-icons'>vpn_key</i>
              <Link to='/account' className='drawerLink'><ListItemText primary='Admin' /></Link>
            </ListItem> : null
        }
        {
          localStorage.getItem('user') ?
            <>
              <ListItem>
                <i className='material-icons'>video_library</i>
                <Link to='/account' className='drawerLink'><ListItemText primary='My Watchlist' />
                </Link>
              </ListItem>
              <ListItem>
                <i className='material-icons'>exit_to_app</i>
                <Link to='/' className='drawerLink'><ListItemText primary='Log Out' onClick={handleLogOut} />
                </Link>
              </ListItem>

            </>
            : <>
              <ListItem>
                <i className='material-icons'>exit_to_app</i>
                <Link to='/login' className='drawerLink'><ListItemText primary='Login / Sign Up' /></Link>
              </ListItem>
            </>
        }
      </List>

    </div>
  )

  return (
    <div className={classes.root}>
      <AppBar position='static' className={classes.appBar}>
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
