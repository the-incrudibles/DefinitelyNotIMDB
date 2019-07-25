import React, { useState, useEffect, useRef } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import axios from 'axios'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import MovieContext from '../../utils/movieContext'
const useStyles = makeStyles(theme => ({
  root: {
    padding: 25
  }
}))

const AddMovieComments = _ => {
  const text = useRef()

  const classes = useStyles()
  const [newCommentState, setNewCommentState] = useState({
    comments: []
  })




  const handleAddComment = event => {
    event.preventDefault()
    // create ulils for post comment
    axios.post(`/comments/${parseInt(localStorage.getItem('movieID'))}`, {
      text: text.current.value,
      author: localStorage.getItem('user'),
      flagged: false,
      movie: parseInt(localStorage.getItem('movieID'))
    })
      .then(_ => {
        // console.log(GetComments(parseInt(localStorage.getItem('movieID'))))
        console.log('success')
      })
      .catch(e => console.log('not sent'))
  }
  return (
    <div>
      <form>
        <TextField
          id='outlined-full-width'
          label='Comment'
          style={{ margin: 8 }}
          placeholder='Leave a comment'
          fullWidth
          margin='normal'
          variant='outlined'
          ref={text}
          InputLabelProps={{
            shrink: true
          }}
        />
        <Button variant='contained' id='commentButton' color='primary' size='small' className={classes.button}
          onClick={handleAddComment}>
        Send
        </Button>
      </form>
    </div>
  )
}

export default AddMovieComments
