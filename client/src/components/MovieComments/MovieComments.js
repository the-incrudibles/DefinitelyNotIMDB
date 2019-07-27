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
import DeleteMovieCommentButton from '../DeleteMovieCommentButton'
import MovieContext from '../../utils/movieContext'
import axios from 'axios'

import IconButton from '@material-ui/core/IconButton'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button'
import Flag from '@material-ui/icons/Flag'


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
  }, 
  flagNotReport: {
    color: 'black'
  },
  flagIsReport: {
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

  const [reportCommentState, setReportCommentState] = useState({
    isReport: false
  })
  reportCommentState.handleReportComment = e => {
    axios.put(`/comment/${e.target.value}`,{
      flagged: true
    })
        .then(({dataComment})=>{
            setReportCommentState({...reportCommentState, isReport:true})
        })
        .catch(e => console.log('not updated'))
  }
  
  const [open, setOpen] = useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function confirmReport() {
    setOpen(false);

    setReportCommentState({ ...reportCommentState, isReport: true })
    reportCommentState.handleReportComment()
  }

  function handleClose() {
    setOpen(false);
  }

  

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
                   reportCommentState.isReport === false ?
                  <IconButton value={comment._id} onClick={handleClickOpen}>
                    <Flag className={classes.flagNotReport} />
                    </IconButton>
                  : <IconButton onClick={handleClickOpen} id={comment._id}>
                    <Flag className={classes.flagIsReport} />
                 </IconButton>
               }
                <DeleteMovieCommentButton id={comment._id}/>
              </ListItem>
            ))
          }
        </List>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Report this comment?"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Please only report comments if you feel as though they violate our community guidelines. Disagreeing with someone's opinion is not a reason to report!
          </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={confirmReport} color="primary">
              Report
          </Button>
            <Button onClick={handleClose} color="primary" autoFocus>
              Cancel
          </Button>
          </DialogActions>
        </Dialog>
        {
          localStorage.getItem('user') ? <AddMovieComments /> : null
        }
      </Paper>
    </div>
  )
}

export default MovieComments
