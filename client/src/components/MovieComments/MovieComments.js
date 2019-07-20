import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Divider from '@material-ui/core/Divider'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import axios from 'axios'
import Paper from '@material-ui/core/Paper'
import AddMovieComments from '../AddMovieComments'
import ReportCommentButton from '../ReportCommentButton/ReportCommentButton'



const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: 'inline'
  },
  rootTwo: {
    padding: 25
  },
  flag: {
    color: 'red'
  }
}))
const MovieComments = _ => {
  const [comments, setComments] = useState([])
  const classes = useStyles()

//  useEffect(_=>{
//      Axios.get('')
//      .then(r =>{
//         console.log(r.comments)
//      })
//  }, [])
    return(
        <div>
            <Paper className={classes.rootTwo}>
            <Typography>
                Leave a comment below!
            </Typography>
            <List className={classes.root}>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="https://image.flaticon.com/icons/svg/195/195158.svg" />
                </ListItemAvatar>
                <ListItemText
                secondary={
                    <React.Fragment>
                    <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                    >
                        Quinton Fultz
                  </Typography>
                  {' — Best movie EVA'}
                </React.Fragment>
              }

            />
          </ListItem>
          <Divider variant='inset' component='li' />
          <ListItem alignItems='flex-start'>
            <ListItemAvatar>
              <Avatar alt='Remy Sharp' src='https://image.flaticon.com/icons/svg/195/195158.svg' />
            </ListItemAvatar>
            <ListItemText
              secondary={
                <React.Fragment>
                  <Typography
                    component='span'
                    variant='body2'
                    className={classes.inline}
                    color='textPrimary'
                  >
                        Justin Biele
                    </Typography>
                    {" — Movie sucks"}
                    </React.Fragment>
                }
                />
                <ReportCommentButton/>
            </ListItem>
            <Divider variant="inset" component="li" />
            </List>
            <AddMovieComments />
            </Paper>
     </div>
    )
}

export default MovieComments
