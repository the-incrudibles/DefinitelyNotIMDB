import React, { useEffect, useState } from 'react'
import axios from 'axios'
import DeleteCommentButton from '../../components/DeleteCommentButton'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Divider from '@material-ui/core/Divider'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'

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
const AdminComments = _ => {
  const [commentsState, setCommentsState] = useState({
    comments: []
  })

  const classes = useStyles()

  commentsState.renderComents = _ => {
    axios.get('/flagged')
      .then(({ data }) => {
        setCommentsState({ ...commentsState, comments: data })
      })
      .catch(e => console.log(e))
  }

  useEffect(_ => {
    commentsState.renderComents()
  }, [])

  return (
    <>
      <List className={classes.root}>
                    {
                        // change commentData to comments when available
                    commentsState.comments.map(comment => (
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
                                {'comment.name'}
                            </Typography>
                            {'- ' + 'comment.comment'}
                            </React.Fragment>
                    }
                        />
                        {/* I believe the logic in DeleteCommentButton should work— */}
                        <DeleteCommentButton/>
                    </ListItem>
                    ))
                    }
            </List>
    </>
  )
}

export default AdminComments
