import React from 'react'
import axios from 'axios'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    button: {
        paddingTop:12
    }
  }));

const DeleteCommentButton = _ =>{
const classes = useStyles()
const handleDeleteCommentButton = event =>{
    axios.delete(`/movie/comment/id`)
        .then(_ =>console.log('deleted!'))
        .catch(e =>console.log('not deleted'))
}
    return(
        <>
        <IconButton className={classes.button} size="small" aria-label="Delete" onClick={handleDeleteCommentButton}>
            <DeleteIcon />
      </IconButton>
        </>
    )
}

export default DeleteCommentButton