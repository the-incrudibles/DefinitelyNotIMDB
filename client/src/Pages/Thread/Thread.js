import React, {useState, useEffect} from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(3, 2),
      margin: '50px'
    },
  }));


const ThreadApp = _ => {
const [threads, setThreads] = useState([])
const [comments, setComments] = useState([])

const classes = useStyles();

    return(
        <div>
            <Paper className={classes.root}>
                <Typography variant="h5" component="h3">
                    Thread goes here
                    </Typography>
                    <Typography component="p">
                    </Typography>
                    <List component="nav" className={classes.root} aria-label="Mailbox folders">
                    <ListItem button>
                        <ListItemText primary="Thread Number 1"/>
                        <Typography component="p">
                        Testing text
                        </Typography>
                </ListItem>
                </List>
            </Paper>
        </div>
    )
}

export default ThreadApp