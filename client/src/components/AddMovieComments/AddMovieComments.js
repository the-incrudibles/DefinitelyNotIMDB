import React, {useState, useEffect, useRef} from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';


const useStyles = makeStyles(theme => ({
  root: {
    padding: 25
  }
}))


const AddMovieComments = _ =>{
    const comment = useRef()

    const classes = useStyles()
    const [newCommentState, setNewCommentState] = useState({comment: ''})

    // useEffect(_=>{
    //     axios.post('/')
    //      .then(_ =>{
    //         console.log('something')
    //      })
    // })
    const handleAddComment = event =>{
        event.preventDefault()
        // create ulils for post comment
        axios.post('/movie',{
            comment: comment.current.value
        })
            .then(_ => {
                console.log('comment sent!')
            })
            .catch(e => console.log('message not sent'))
            
    }
    return(
        <div>
            <form>
            <TextField
            id="outlined-full-width"
            label="Comment"
            style={{ margin: 8 }}
            placeholder="Leave a comment"
            fullWidth
            margin="normal"
            variant="outlined"
            ref={comment}
            InputLabelProps={{
            shrink: true,
            }}
        />
        <Button variant="contained" color="primary" size="small"className={classes.button}
        onClick={newCommentState.handleAddComment}
        >
        Send
      </Button>
        </form>
        </div>
    )
}

export default AddMovieComments
