import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import AddMovieComments from '../AddMovieComments'
import ReportMovieCommentButton from '../ReportMovieCommentButton'
import DeleteMovieCommentButton from '../DeleteMovieCommentButton'
// import commentData from './commentData'
import MovieContext from '../../utils/movieContext'

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
  const [commentsState, setCommentsState] = useState({
    comments: []
  })
  const classes = useStyles()

  //   fetch movie comments
  commentsState.renderComments = _ => {
    MovieContext.getComment(localStorage.getItem('movieID'))
      .then(({ data }) => {
        if (data) {
          let comments = data
          setCommentsState({ ...commentsState, comments })
        } else if (!data) {
          commentsState.renderComments()
        }
      })
      .catch(e => console.log(e))
  }

  useEffect(_ => {
    commentsState.renderComments()
  }, [commentsState])

  return (
    <div>
      <Paper className={classes.rootTwo}>
        {
          localStorage.getItem('user')
            ? <Typography>
              Leave a comment below!
            </Typography>
            : <Typography>
              Comments:
            </Typography>
        }

        <List className={classes.root}>
          {
            // change commentData to comments when available
            commentsState.comments.map(comment => (
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
                        {comment.author}
                      </Typography>
                      {'- ' + comment.text}
                    </React.Fragment>
                  }
                />
                {
                  localStorage.getItem('user') ? <ReportMovieCommentButton id={comment._id} /> : null
                }
                <DeleteMovieCommentButton id={comment._id} />
              </ListItem>
            ))
          }
        </List>
        {
          localStorage.getItem('user') ? <AddMovieComments /> : null
        }
      </Paper>
    </div>
  )
}

export default MovieComments
