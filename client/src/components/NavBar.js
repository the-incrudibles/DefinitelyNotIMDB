import React from 'react'
import { Link } from 'react-router-dom'
// material ui imports
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { fade, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    navTitle:{
        color: 'white',
        textDecoration:'none'
    }
  }));

const Navbar = _ => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
            <Button className={classes.navTitle}>
                <Link className={classes.navTitle} to="/threads">Threads</Link>
            </Button>
            </Typography>
            <Button color="inherit">
             <Link>Login</Link></Button>
          </Toolbar>
        </AppBar>
      </div>
    )
  }

  export default Navbar
