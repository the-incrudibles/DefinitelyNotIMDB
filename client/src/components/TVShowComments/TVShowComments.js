import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import axios from 'axios'
import Paper from '@material-ui/core/Paper'
import AddTVShowComments from '../AddTVShowComments'
import ReportTVShowCommentButton from '../ReportTVShowCommentButton'
import DeleteTVShowCommentButton from '../DeleteTVShowCommentButton'
import commentData from './commentData'

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
const TVShowComments = _ => {
  const [commentsState, setCommentsState] = useState([])
  const classes = useStyles()

  // fetch tv show comments
  // Connor note: need help with writing this out!
  commentsState.renderComments = _ => {
    axios.get(`/comments/${'id'}`)
      .then(({ data }) => {
        setCommentsState(data.comments)
      })
  }
  useEffect(_ => {
    commentsState.renderComments()
  },)

  return (
    <div>
      <Paper className={classes.rootTwo}>
        <Typography>
          Leave a comment below!
        </Typography>
        <List className={classes.root}>
          {
            // change commentData to comments when available
            commentData.map(data => (
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
                        {data.name}
                      </Typography>
                      {'- ' + data.comment}
                    </React.Fragment>
                  }
                />
                <ReportTVShowCommentButton />
                <DeleteTVShowCommentButton />
              </ListItem>
            ))
          }
        </List>
        <AddTVShowComments />
      </Paper>
    </div>
  )
}

export default TVShowComments
